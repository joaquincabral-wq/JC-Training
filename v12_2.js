
(function(){
  'use strict';

  const todayISO = () => {
    const d = new Date();
    const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,'0'), day=String(d.getDate()).padStart(2,'0');
    return `${y}-${m}-${day}`;
  };
  const safeJSON=(k,f)=>{try{const v=localStorage.getItem(k);return v?JSON.parse(v):f;}catch(e){return f;}};
  const saveJSON=(k,v)=>localStorage.setItem(k,JSON.stringify(v));

  function activeView(){
    return document.querySelector('.nav-btn.active')?.dataset?.view;
  }

  function sanitizeTodayState(){
    const today=todayISO();
    const mealKey=`meals:${today}`;
    if(localStorage.getItem(mealKey)===null) saveJSON(mealKey,{});

    const wkKey=`workout:${today}`;
    const wk=safeJSON(wkKey,null);
    if(wk && typeof wk==='object'){
      let changed=false;
      Object.values(wk).forEach(ex=>{
        if(ex && Array.isArray(ex.sets)){
          ex.sets.forEach(s=>{
            if(typeof s.done!=='boolean'){ s.done=false; changed=true; }
          });
        }
      });
      if(changed) saveJSON(wkKey,wk);
    }

    // New day should start visually clean; preserve history/plans.
    if(localStorage.getItem(`v122DayInit:${today}`)!=='1'){
      localStorage.setItem(`v122DayInit:${today}`,'1');
      localStorage.removeItem(`v121TodayWorkoutCollapsed:${today}`);
      localStorage.removeItem(`v122WorkoutOpen:${today}`);
    }
  }

  function findWorkoutSection(){
    if(activeView()!=='today') return null;
    const heads=[...document.querySelectorAll('#content h2,#content h3,#content .section-title,#content .card-title')];
    const h=heads.find(el=>/entrenamiento|workout/i.test(el.textContent||''));
    if(!h) return null;
    return h.closest('section') || h.parentElement?.parentElement || null;
  }

  function makeToggle(open=false){
    const b=document.createElement('button');
    b.type='button';
    b.className='secondary-btn v122-toggle';
    b.dataset.open=open?'1':'0';
    b.textContent=open?'Contraer':'Ampliar';
    return b;
  }

  function compactWorkout(){
    const section=findWorkoutSection();
    if(!section || section.dataset.v122Compact==='1') return;
    section.dataset.v122Compact='1';

    const header=section.querySelector('.section-title') || section.querySelector('h2,h3')?.parentElement || section;

    if(!header.querySelector('.v122-bulk-controls')){
      const controls=document.createElement('div');
      controls.className='v122-bulk-controls';
      controls.innerHTML='<button class="secondary-btn v122-expand-all">Expandir todo</button><button class="secondary-btn v122-collapse-all">Contraer todo</button>';
      header.appendChild(controls);
    }

    const cards=[...section.querySelectorAll('.exercise-card,.workout-exercise,[data-exercise-name],[data-exercise]')];
    cards.forEach(card=>{
      if(card.dataset.v122Ready==='1') return;
      card.dataset.v122Ready='1';
      const title=card.querySelector('.exercise-name,h3,h4,.card-title,strong');
      if(!title) return;

      const head=document.createElement('div');
      head.className='v122-ex-head';
      const label=document.createElement('div');
      label.className='v122-ex-title';
      label.textContent=title.textContent.trim();
      const toggle=makeToggle(false);
      head.append(label,toggle);

      title.classList.add('v122-original-title');
      title.insertAdjacentElement('beforebegin',head);

      const body=[...card.children].filter(ch=>ch!==head && !ch.classList.contains('v122-original-title'));
      function apply(open){
        toggle.dataset.open=open?'1':'0';
        toggle.textContent=open?'Contraer':'Ampliar';
        body.forEach(ch=>ch.classList.toggle('v122-collapsed',!open));
      }
      toggle.onclick=()=>apply(toggle.dataset.open!=='1');
      apply(false);

      if(/completad|✓/i.test(card.textContent||'')) card.classList.add('v122-completed-card');
    });

    const controls=header.querySelector('.v122-bulk-controls');
    controls?.querySelector('.v122-expand-all')?.addEventListener('click',()=>{
      section.querySelectorAll('.v122-ex-head .v122-toggle').forEach(b=>{ if(b.dataset.open!=='1') b.click(); });
    });
    controls?.querySelector('.v122-collapse-all')?.addEventListener('click',()=>{
      section.querySelectorAll('.v122-ex-head .v122-toggle').forEach(b=>{ if(b.dataset.open==='1') b.click(); });
    });

    // Reuse existing V12.1 overall workout collapse button if present.
    const overallBtn=section.querySelector('.v121-collapse-btn');
    if(overallBtn){
      const key=`v122WorkoutOpen:${todayISO()}`;
      const shouldOpen=localStorage.getItem(key)==='1';
      if(shouldOpen && /desplegar/i.test(overallBtn.textContent||'')) overallBtn.click();
      if(!shouldOpen && /contraer/i.test(overallBtn.textContent||'')) overallBtn.click();
      overallBtn.addEventListener('click',()=>{
        setTimeout(()=>{
          localStorage.setItem(key,/contraer/i.test(overallBtn.textContent||'')?'1':'0');
        },30);
      });
    }
  }

  function compactMeals(){
    if(activeView()!=='today') return;
    const cards=[...document.querySelectorAll('#content .meal-card,#content .card')].filter(card=>{
      const t=(card.textContent||'').toLowerCase();
      return /desayuno|comida|merienda|cena|media mañana/.test(t) && !/entrenamiento/.test(t);
    });

    cards.forEach(card=>{
      if(card.dataset.v122Meal==='1') return;
      card.dataset.v122Meal='1';

      const title=card.querySelector('h3,h4,.card-title,strong');
      if(!title) return;

      const head=document.createElement('div');
      head.className='v122-meal-head';
      const label=document.createElement('div');
      label.className='v122-meal-title';
      label.textContent=title.textContent.trim();
      const toggle=makeToggle(false);
      head.append(label,toggle);

      title.classList.add('v122-original-title');
      title.insertAdjacentElement('beforebegin',head);

      const body=[...card.children].filter(ch=>ch!==head && !ch.classList.contains('v122-original-title'));
      function apply(open){
        toggle.dataset.open=open?'1':'0';
        toggle.textContent=open?'Contraer':'Ampliar';
        body.forEach(ch=>ch.classList.toggle('v122-collapsed',!open));
      }
      toggle.onclick=()=>apply(toggle.dataset.open!=='1');
      apply(false);

      if(/completad|✓|hecho/i.test(card.textContent||'')) card.classList.add('v122-completed-card');
    });
  }

  function run(){
    sanitizeTodayState();
    compactWorkout();
    compactMeals();
  }

  const obs=new MutationObserver(()=>{
    clearTimeout(window.__v122);
    window.__v122=setTimeout(run,120);
  });
  obs.observe(document.body,{childList:true,subtree:true});
  document.addEventListener('DOMContentLoaded',run);
  setTimeout(run,300);
  setTimeout(run,900);
})();
