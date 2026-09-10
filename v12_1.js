
(function(){
  'use strict';
  const todayISO=()=>new Date().toISOString().slice(0,10);
  const safeJSON=(k,f)=>{try{const v=localStorage.getItem(k);return v?JSON.parse(v):f;}catch(e){return f;}};
  const saveJSON=(k,v)=>localStorage.setItem(k,JSON.stringify(v));

  function findTodayWorkoutSection(){
    const active=document.querySelector('.nav-btn.active');
    if(active?.dataset?.view!=='today') return null;
    const headings=[...document.querySelectorAll('h2,h3,.section-title,.card-title')];
    const h=headings.find(el=>/entrenamiento|workout/i.test(el.textContent||''));
    if(!h) return null;
    return h.closest('section') || h.parentElement?.parentElement || null;
  }

  function ensureTodayCollapse(){
    const section=findTodayWorkoutSection();
    if(!section || section.dataset.v121==='1') return;
    section.dataset.v121='1';
    const date=todayISO();
    const header=section.querySelector('.section-title') || section.querySelector('h2,h3')?.parentElement || section;
    const btn=document.createElement('button');
    btn.className='secondary-btn v121-collapse-btn';
    btn.type='button';
    header.appendChild(btn);
    const summary=document.createElement('div');
    summary.className='v121-workout-summary hidden';
    summary.innerHTML='<strong>Entrenamiento contraído</strong><span>Pulsa “Desplegar” para continuar o revisar.</span>';
    header.insertAdjacentElement('afterend',summary);
    const bodyChildren=[...section.children].filter(ch=>ch!==header && ch!==summary);
    function apply(state){
      localStorage.setItem(`v121TodayWorkoutCollapsed:${date}`,state?'1':'0');
      btn.textContent=state?'⌄ Desplegar':'⌃ Contraer';
      bodyChildren.forEach(ch=>ch.classList.toggle('v121-hidden-workout',state));
      summary.classList.toggle('hidden',!state);
    }
    btn.onclick=()=>apply(!(localStorage.getItem(`v121TodayWorkoutCollapsed:${date}`)==='1'));
    apply(localStorage.getItem(`v121TodayWorkoutCollapsed:${date}`)==='1');
    document.addEventListener('click',e=>{
      if(/finalizar entrenamiento/i.test(e.target?.textContent||'')) setTimeout(()=>apply(true),300);
    });
  }

  function setRow(s={},si=0){
    const row=document.createElement('div');
    row.className='v121-set-row';
    row.innerHTML=`<span>S${si+1}</span>
      <input data-field="kg" placeholder="kg" value="${s.kg??''}">
      <input data-field="reps" placeholder="reps" value="${s.reps??''}">
      <input data-field="rir" placeholder="RIR" value="${s.rir??''}">
      <button class="danger-btn v121-del-set">×</button>`;
    return row;
  }

  function openHistoryEditor(session){
    const overlay=document.createElement('div');
    overlay.className='v121-modal';
    overlay.innerHTML=`<div class="v121-panel"><div class="v121-panel-head">
      <h3>Editar ${session.name||'sesión'} · ${session.date||''}</h3>
      <button class="secondary-btn v121-close">Cerrar</button></div>
      <div class="v121-history-form"></div>
      <div class="v121-actions"><button class="primary-btn v121-save-history">Guardar cambios</button></div></div>`;
    document.body.appendChild(overlay);
    const form=overlay.querySelector('.v121-history-form');
    (session.details||[]).forEach((ex,ei)=>{
      const box=document.createElement('div');
      box.className='v121-ex-edit';
      box.innerHTML=`<label>Ejercicio<input data-kind="name" value="${ex.name||''}"></label>
        <div class="v121-sets"></div>
        <button class="secondary-btn v121-add-set">+ Serie</button>
        <button class="danger-btn v121-del-ex">Eliminar ejercicio</button>`;
      form.appendChild(box);
      (ex.sets||[]).forEach((s,si)=>box.querySelector('.v121-sets').appendChild(setRow(s,si)));
    });
    const dur=document.createElement('div');
    dur.className='v121-duration-edit';
    dur.innerHTML=`<label>Duración total (min)<input id="v121Duration" type="number" min="0" step="1" value="${Math.round((session.elapsed||session.duration||0)/60)}"></label>`;
    form.appendChild(dur);

    overlay.addEventListener('click',e=>{
      if(e.target.classList.contains('v121-close')) overlay.remove();
      if(e.target.classList.contains('v121-add-set')){
        const setBox=e.target.closest('.v121-ex-edit').querySelector('.v121-sets');
        setBox.appendChild(setRow({},setBox.children.length));
      }
      if(e.target.classList.contains('v121-del-set')) e.target.closest('.v121-set-row').remove();
      if(e.target.classList.contains('v121-del-ex')) e.target.closest('.v121-ex-edit').remove();
      if(e.target.classList.contains('v121-save-history')){
        const hist=safeJSON('workoutHistory',[]);
        const idx=hist.findIndex(h=>h.date===session.date && h.name===session.name);
        if(idx<0) return;
        const details=[...overlay.querySelectorAll('.v121-ex-edit')].map(box=>({
          name:box.querySelector('[data-kind="name"]').value.trim(),
          sets:[...box.querySelectorAll('.v121-set-row')].map(r=>({
            kg:r.querySelector('[data-field="kg"]').value,
            reps:r.querySelector('[data-field="reps"]').value,
            rir:r.querySelector('[data-field="rir"]').value,
            done:true
          }))
        }));
        hist[idx]={...hist[idx],details,edited:true,editedAt:new Date().toISOString(),
          elapsed:(+overlay.querySelector('#v121Duration').value||0)*60,
          totalSets:details.reduce((n,e)=>n+e.sets.length,0),
          completedSets:details.reduce((n,e)=>n+e.sets.length,0)};
        saveJSON('workoutHistory',hist);
        overlay.remove(); location.reload();
      }
    });
  }

  function addHistoryEditors(){
    const active=document.querySelector('.nav-btn.active');
    if(active?.dataset?.view!=='history') return;
    const hist=safeJSON('workoutHistory',[]);
    if(!Array.isArray(hist)) return;
    [...document.querySelectorAll('.history-card,.card')].forEach(card=>{
      if(card.querySelector('.v121-edit-history')) return;
      const txt=card.textContent||'';
      const s=hist.find(h=>txt.includes(h.date||'') && txt.includes(h.name||''));
      if(!s) return;
      const b=document.createElement('button');
      b.className='secondary-btn v121-edit-history'; b.textContent='Editar sesión';
      b.onclick=()=>openHistoryEditor(s);
      card.appendChild(b);
    });
  }

  function addFuturePlanning(){
    const active=document.querySelector('.nav-btn.active');
    if(active?.dataset?.view!=='training') return;
    [...document.querySelectorAll('.exercise-card,.workout-exercise,[data-exercise-name],[data-exercise]')].forEach(card=>{
      if(card.querySelector('.v121-preplan')) return;
      const name=card.dataset.exerciseName||card.dataset.exercise||
        card.querySelector('.exercise-name,h3,h4,.card-title')?.textContent?.trim();
      if(!name) return;
      const key='v121FuturePlan';
      const all=safeJSON(key,{});
      const saved=all[name]||{};
      const wrap=document.createElement('details');
      wrap.className='v121-preplan';
      wrap.innerHTML=`<summary>Planificar peso y series</summary><div class="v121-preplan-body">
        <label>Series<input class="v121-plan-sets" type="number" min="1" value="${saved.sets||''}"></label>
        <label>Reps objetivo<input class="v121-plan-reps" type="number" min="1" value="${saved.reps||''}"></label>
        <label>Peso previsto (kg)<input class="v121-plan-kg" value="${saved.kg||''}"></label>
        <label>RIR objetivo<input class="v121-plan-rir" value="${saved.rir||''}"></label>
        <button class="primary-btn v121-save-plan">Guardar planificación</button>
        <span class="v121-plan-status">${saved.kg||saved.sets?'Planificación guardada':''}</span></div>`;
      card.appendChild(wrap);
      wrap.querySelector('.v121-save-plan').onclick=()=>{
        const fresh=safeJSON(key,{});
        fresh[name]={
          sets:wrap.querySelector('.v121-plan-sets').value,
          reps:wrap.querySelector('.v121-plan-reps').value,
          kg:wrap.querySelector('.v121-plan-kg').value,
          rir:wrap.querySelector('.v121-plan-rir').value,
          savedAt:new Date().toISOString()
        };
        saveJSON(key,fresh);
        wrap.querySelector('.v121-plan-status').textContent='Planificación guardada';
      };
    });
  }

  function run(){addHistoryEditors();addFuturePlanning();}
  const obs=new MutationObserver(()=>{clearTimeout(window.__v121);window.__v121=setTimeout(run,120);});
  obs.observe(document.body,{childList:true,subtree:true});
  document.addEventListener('DOMContentLoaded',run);
  setTimeout(run,350);
  setTimeout(run,900);
})();
