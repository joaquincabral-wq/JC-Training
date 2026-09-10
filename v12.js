
(function(){
  'use strict';

  function safeJSON(key, fallback){
    try{
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    }catch(e){ return fallback; }
  }

  function normalizeName(value){
    return (value || '')
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
      .replace(/\s+/g,' ')
      .trim();
  }

  function todayLocalISO(){
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }

  function getHistory(){
    const h = safeJSON('workoutHistory', []);
    return Array.isArray(h) ? h : [];
  }

  function findLastExercise(exerciseName){
    const target = normalizeName(exerciseName);
    const today = todayLocalISO();
    const sessions = getHistory()
      .filter(s => s && s.date && s.date < today)
      .sort((a,b) => String(b.date).localeCompare(String(a.date)));

    for(const session of sessions){
      const details = Array.isArray(session.details) ? session.details : [];
      const exercise = details.find(ex => normalizeName(ex.name) === target);
      if(exercise) return {session, exercise};
    }
    return null;
  }

  function exerciseNameFromCard(card){
    return (
      card.dataset.exerciseName ||
      card.dataset.exercise ||
      card.querySelector('.exercise-name')?.textContent ||
      card.querySelector('h3')?.textContent ||
      card.querySelector('h4')?.textContent ||
      ''
    ).trim();
  }

  function setLine(set, index, fallbackRir){
    const kg = (set?.kg ?? '') !== '' ? `${set.kg} kg` : '— kg';
    const reps = (set?.reps ?? '') !== '' ? `${set.reps} reps` : '— reps';
    const rirValue = (set?.rir ?? fallbackRir ?? '');
    const rir = rirValue !== '' ? ` · RIR ${rirValue}` : '';
    return `<div><strong>S${index+1}</strong> · ${kg} × ${reps}${rir}</div>`;
  }

  function addReference(card){
    if(card.querySelector('.v12-last-session')) return;

    const name = exerciseNameFromCard(card);
    if(!name) return;

    const last = findLastExercise(name);
    if(!last) return;

    const sets = Array.isArray(last.exercise.sets) ? last.exercise.sets : [];
    if(!sets.length) return;

    const box = document.createElement('div');
    box.className = 'v12-last-session';
    box.innerHTML = `
      <div class="v12-last-head">Última sesión · ${last.session.date}</div>
      <div class="v12-last-sets">
        ${sets.map((s,i)=>setLine(s,i,last.exercise.rir)).join('')}
      </div>
    `;

    const meta = card.querySelector('.exercise-meta');
    const title = card.querySelector('.exercise-name, h3, h4');
    if(meta) meta.insertAdjacentElement('afterend', box);
    else if(title) title.insertAdjacentElement('afterend', box);
    else card.prepend(box);
  }

  function applyToToday(){
    const active = document.querySelector('.nav-btn.active');
    if(active?.dataset?.view !== 'today') return;

    document.querySelectorAll(
      '.exercise-card, .workout-exercise, [data-exercise-name], [data-exercise]'
    ).forEach(addReference);
  }

  const observer = new MutationObserver(()=>{
    clearTimeout(window.__jcV12LastSessionTimer);
    window.__jcV12LastSessionTimer = setTimeout(applyToToday, 80);
  });

  observer.observe(document.body, {childList:true, subtree:true});
  document.addEventListener('DOMContentLoaded', applyToToday);
  setTimeout(applyToToday, 250);
  setTimeout(applyToToday, 800);
})();
