
// JC Training V12 — referencia automática de última carga y objetivo de hoy.
(function(){
  'use strict';

  function safeJSON(key, fallback){
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch(e){ return fallback; }
  }

  function norm(s){
    return (s || '').toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
      .replace(/\s+/g,' ').trim();
  }

  function history(){
    const h = safeJSON('workoutHistory', []);
    return Array.isArray(h) ? h : [];
  }

  function lastFor(name, beforeDate){
    const target = norm(name);
    const sessions = history()
      .filter(s => !beforeDate || (s.date && s.date < beforeDate))
      .sort((a,b) => String(b.date||'').localeCompare(String(a.date||'')));
    for(const session of sessions){
      const ex = (session.details || []).find(d => norm(d.name) === target);
      if(ex) return {session, ex};
    }
    return null;
  }

  function nums(ex, field){
    return (ex?.sets || [])
      .map(s => parseFloat(String(s[field] ?? '').replace(',','.')))
      .filter(Number.isFinite);
  }

  function rirNums(ex){
    return (ex?.sets || []).map(s => {
      const raw = (s.rir ?? ex.rir ?? '');
      const n = parseFloat(String(raw).replace(',','.'));
      return Number.isFinite(n) ? n : null;
    }).filter(v => v !== null);
  }

  function rec(ex){
    const target = parseFloat(ex?.target);
    const reps = nums(ex,'reps');
    const weights = nums(ex,'kg');
    const rirs = rirNums(ex);
    if(!reps.length || !weights.length) return {label:'CALIBRAR', cls:'calibrate', note:'Sin referencia suficiente'};
    const allTarget = Number.isFinite(target) ? reps.every(r => r >= target) : true;
    const avgRir = rirs.length ? rirs.reduce((a,b)=>a+b,0)/rirs.length : null;
    if(allTarget && avgRir !== null && avgRir >= 1.5)
      return {label:'VALORA SUBIR', cls:'up', note:'Completaste el objetivo con margen'};
    if(allTarget)
      return {label:'REPETIR', cls:'same', note:'Repite la última carga como referencia'};
    return {label:'MANTENER / AJUSTAR', cls:'review', note:'No completaste todo el objetivo'};
  }

  function lastSetWeight(ex){
    const sets = (ex?.sets || []).filter(s => s.kg !== undefined && s.kg !== '');
    return sets.length ? sets[sets.length-1].kg : '';
  }

  function detailsHTML(ex){
    return (ex?.sets || []).map((s,i) => {
      const kg = s.kg !== undefined && s.kg !== '' ? `${s.kg} kg` : '— kg';
      const reps = s.reps !== undefined && s.reps !== '' ? `${s.reps} reps` : '— reps';
      const rir = (s.rir ?? ex.rir ?? '') !== '' ? ` · RIR ${s.rir ?? ex.rir}` : '';
      return `S${i+1}: ${kg} × ${reps}${rir}`;
    }).join('<br>');
  }

  function currentDate(){
    return new Date().toISOString().slice(0,10);
  }

  function getName(card){
    return card.dataset.exerciseName ||
      card.dataset.exercise ||
      card.querySelector('.exercise-name, h3, h4, .card-title')?.textContent?.trim() || '';
  }

  function inject(card){
    if(card.querySelector('.v12-last-load')) return;
    const name = getName(card);
    if(!name) return;
    const last = lastFor(name, currentDate());
    const box = document.createElement('div');
    box.className = 'v12-last-load';

    if(!last){
      box.innerHTML = `
        <div class="v12-ref-head"><span>Referencia de carga</span><span class="v12-badge calibrate">CALIBRAR</span></div>
        <div class="v12-ref-main">Sin sesión anterior registrada</div>`;
    } else {
      const r = rec(last.ex);
      const w = lastSetWeight(last.ex);
      box.innerHTML = `
        <div class="v12-ref-head">
          <span>Última vez · ${last.session.date || ''}</span>
          <span class="v12-badge ${r.cls}">${r.label}</span>
        </div>
        <div class="v12-ref-main">Objetivo hoy: <strong>${w ? w + ' kg' : 'revisar carga'}</strong></div>
        <div class="v12-ref-note">${r.note}</div>
        <details class="v12-details">
          <summary>Ver último registro</summary>
          <div>${detailsHTML(last.ex)}</div>
        </details>`;
    }

    const title = card.querySelector('.exercise-name, h3, h4, .card-title');
    if(title) title.insertAdjacentElement('afterend', box);
    else card.prepend(box);
  }

  function scan(){
    document.querySelectorAll('.exercise-card, .workout-exercise, [data-exercise-name], [data-exercise]')
      .forEach(inject);
  }

  const obs = new MutationObserver(() => {
    clearTimeout(window.__jcV12);
    window.__jcV12 = setTimeout(scan, 80);
  });
  obs.observe(document.body, {childList:true, subtree:true});
  document.addEventListener('DOMContentLoaded', scan);
  setTimeout(scan, 250);
  setTimeout(scan, 800);
})();
