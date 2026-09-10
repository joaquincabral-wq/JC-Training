
// JC Training V13 — Hoy limpio, compacto y fiable.
(function(){
'use strict';
const q=(s,r=document)=>r.querySelector(s), qa=(s,r=document)=>[...r.querySelectorAll(s)];
const localDate=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`};
const key=(x)=>`v13:${x}:${localDate()}`;
const get=(k,d=false)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch(_){return d}};
const put=(k,v)=>localStorage.setItem(k,JSON.stringify(v));

function isToday(){return window.state?.view==='today' || q('.nav-btn.active')?.dataset.view==='today'}
function sectionByTitle(title){
  return qa('#content > .section').find(s=>q(':scope > .section-title h2',s)?.textContent.trim().toLowerCase()===title);
}
function heading(section){return q(':scope > .section-title',section)}

function addSectionAccordion(section, id, defaultOpen=false, labelText=null){
  if(!section || section.dataset.v13Section)return;
  section.dataset.v13Section=id;
  const head=heading(section); if(!head)return;

  // Remove controls injected by superseded Today layers.
  qa('.v121-collapse-btn,.v122-bulk-controls',head).forEach(x=>x.remove());
  qa(':scope > .v121-workout-summary',section).forEach(x=>x.remove());

  const body=qa(':scope > *',section).filter(x=>x!==head);
  const saved=get(key(`section:${id}`), defaultOpen);
  const btn=document.createElement('button');
  btn.className='v13-section-toggle';
  btn.type='button';
  head.appendChild(btn);

  function apply(open){
    put(key(`section:${id}`),open);
    section.classList.toggle('v13-section-closed',!open);
    body.forEach(x=>x.classList.toggle('v13-hide',!open));
    btn.textContent=open?'⌃':'⌄';
    btn.setAttribute('aria-expanded',String(open));
    if(labelText) btn.setAttribute('aria-label',(open?'Contraer ':'Ampliar ')+labelText);
  }
  btn.onclick=e=>{e.preventDefault();e.stopPropagation();apply(btn.getAttribute('aria-expanded')!=='true')};
  head.classList.add('v13-clickable');
  head.onclick=e=>{if(!e.target.closest('button'))btn.click()};
  apply(saved);
}

function compactExercise(card, idx){
  if(card.dataset.v13Exercise)return;
  card.dataset.v13Exercise=idx;
  const exHead=q('.exercise-head',card); if(!exHead)return;

  // Remove old completion "Ver" button; V13 owns the accordion.
  qa('.v104-toggle',exHead).forEach(x=>x.remove());
  card.classList.remove('v104-collapsed');

  const name=q('.exercise-name',card)?.textContent.trim()||`Ejercicio ${idx+1}`;
  const meta=q('.exercise-meta',card)?.textContent.trim()||'';
  const old=card.classList.contains('v103-ex-completed') || !!q('.check-btn.done',card);
  const stateKey=key(`exercise:${idx}`);
  const saved=get(stateKey,false);

  const status=document.createElement('div');
  status.className='v13-ex-summary';
  status.innerHTML=`<div class="v13-ex-summary-text"><strong>${old?'✓ ':''}${name}</strong><span>${meta}</span></div><button type="button" class="v13-item-toggle">${saved?'⌃':'⌄'}</button>`;
  card.insertBefore(status,card.firstChild);

  const body=qa(':scope > *',card).filter(x=>x!==status);
  function apply(open){
    put(stateKey,open);
    body.forEach(x=>x.classList.toggle('v13-hide',!open));
    q('.v13-item-toggle',status).textContent=open?'⌃':'⌄';
    card.classList.toggle('v13-item-closed',!open);
  }
  q('.v13-item-toggle',status).onclick=e=>{e.stopPropagation();apply(q('.v13-item-toggle',status).textContent==='⌄')};
  status.onclick=e=>{if(!e.target.closest('button'))q('.v13-item-toggle',status).click()};
  apply(saved);
  if(old) card.classList.add('v13-done');
}

function compactMeal(card, idx){
  if(card.dataset.v13Meal)return;
  card.dataset.v13Meal=idx;
  const mt=q('.meal-title',card); if(!mt)return;

  qa('.v106-meal-toggle',card).forEach(x=>x.remove());
  card.classList.remove('v106-meal-done','v106-meal-open');

  const name=q('strong',mt)?.textContent.trim()||`Comida ${idx+1}`;
  const done=!!q('.check-btn.done',mt);
  const stateKey=key(`meal:${idx}`);
  const saved=get(stateKey,false);

  const toggle=document.createElement('button');
  toggle.type='button';
  toggle.className='v13-item-toggle';
  toggle.textContent=saved?'⌃':'⌄';
  mt.appendChild(toggle);

  const body=qa(':scope > *',card).filter(x=>x!==mt);
  function apply(open){
    put(stateKey,open);
    body.forEach(x=>x.classList.toggle('v13-hide',!open));
    toggle.textContent=open?'⌃':'⌄';
    card.classList.toggle('v13-item-closed',!open);
  }
  toggle.onclick=e=>{e.preventDefault();e.stopPropagation();apply(toggle.textContent==='⌄')};
  apply(saved);
  if(done) card.classList.add('v13-done');
}

function compactMidMorning(section){
  if(!section || section.dataset.v13Mid)return;
  section.dataset.v13Mid='1';
  addSectionAccordion(section,'midmorning',false,'media mañana');
}

function cleanToday(){
  if(!isToday())return;
  const content=q('#content'); if(!content)return;

  // Remove any leftover controls/empty summary inserted by older collapsed layers.
  qa('.v121-workout-summary,.v121-collapse-btn,.v122-bulk-controls',content).forEach(x=>x.remove());
  qa('.v121-hidden-workout,.v122-collapsed,.v122-original-title,.v122-hidden-workout',content).forEach(x=>{
    x.classList.remove('v121-hidden-workout','v122-collapsed','v122-original-title','v122-hidden-workout');
  });

  // Main sections: compact by default. Hero remains visible.
  const macros=qa('#content > .section').find(s=>q(':scope > .section-title h2',s)?.textContent.trim()==='Macros del día');
  const training=sectionByTitle('entrenamiento');
  const meals=sectionByTitle('comidas');
  const mid=q('.v105-mid',content);

  addSectionAccordion(macros,'macros',false,'macros');
  addSectionAccordion(training,'training',false,'entrenamiento');
  addSectionAccordion(meals,'meals',false,'comidas');
  compactMidMorning(mid);

  // Inside Training: every exercise individually compact.
  if(training){
    qa(':scope > .card',training).filter(c=>q('.exercise-head',c)).forEach(compactExercise);

    // Keep session panel compact and first when the workout section is opened.
    const sess=q('.v103-session-section',training);
    if(sess && !sess.dataset.v13Session){
      sess.dataset.v13Session='1';
      const card=q('.v103-session-card',sess);
      if(card){
        const title=document.createElement('div');
        title.className='v13-session-summary';
        const running=!!window.V3?.session?.startedAt;
        title.innerHTML=`<strong>${running?'⏱ Entrenamiento en curso':'▶ Preparar entrenamiento'}</strong><span>${running?'Cronómetro activo':'Pulsa Iniciar entrenamiento cuando empieces'}</span>`;
        card.insertBefore(title,card.firstChild);
      }
    }
  }

  // Inside Meals: each actual meal individually compact.
  if(meals){
    qa(':scope > .card',meals).filter(c=>q('.meal-title',c)).forEach(compactMeal);
  }

  // If workout has been finalized, force the entire Training block closed.
  if(get(`v111Finished:${localDate()}`,false) && training){
    const b=q(':scope > .section-title .v13-section-toggle',training);
    if(b && b.getAttribute('aria-expanded')==='true') b.click();
  }
}

const previous=window.renderToday;
window.renderToday=function(){
  previous();
  cleanToday();
};

const obs=new MutationObserver(()=>{
  if(!isToday())return;
  clearTimeout(window.__v13t);
  window.__v13t=setTimeout(cleanToday,80);
});
obs.observe(document.body,{subtree:true,childList:true});

window.JC_TRAINING_VERSION='13';
setTimeout(()=>{try{render()}catch(_){}},0);
})();
