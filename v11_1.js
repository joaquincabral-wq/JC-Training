// JC Training V11.1 — historial por ejercicio, UX de sesión, nutrición ampliada y avisos.
(function(){
'use strict';
const V='11.1';
const q=(s,r=document)=>r.querySelector(s), qa=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
const today=()=>isoDate();

// ---------- Biblioteca nutricional ampliada ----------
function addFood(key,def,nut){
  if(typeof FOOD_DB!=='undefined') FOOD_DB[key]=def;
  if(typeof V6_NUTRITION!=='undefined' && !V6_NUTRITION.some(x=>x.key===key)) V6_NUTRITION.push({key,...nut});
}
addFood('watermelon',{label:'Sandía',patterns:['sandia','sandía'],group:'fruit',eq:30,state:'parte comestible'},{patterns:['sandia','sandía'],mode:'100g',kcal:30,p:.6,c:7.6,f:.2,label:'Sandía',group:'fruit'});
addFood('raspberry',{label:'Frambuesas',patterns:['frambuesa','frambuesas'],group:'fruit',eq:52,state:'parte comestible'},{patterns:['frambuesa','frambuesas'],mode:'100g',kcal:52,p:1.2,c:11.9,f:.7,label:'Frambuesas',group:'fruit'});
addFood('blackberry',{label:'Moras',patterns:['mora','moras'],group:'fruit',eq:43,state:'parte comestible'},{patterns:['mora','moras'],mode:'100g',kcal:43,p:1.4,c:9.6,f:.5,label:'Moras',group:'fruit'});
addFood('eggplant',{label:'Berenjena',patterns:['berenjena','berenjenas'],group:'vegetable',eq:25,state:'parte comestible'},{patterns:['berenjena','berenjenas'],mode:'100g',kcal:25,p:1,c:5.9,f:.2,label:'Berenjena'});
addFood('porkloin',{label:'Cinta de lomo',patterns:['cinta de lomo','lomo de cerdo'],group:'protein',eq:22,state:'en crudo'},{patterns:['cinta de lomo','lomo de cerdo'],mode:'100g',kcal:143,p:22,c:0,f:6,label:'Cinta de lomo',group:'protein'});
addFood('salmon',{label:'Salmón',patterns:['salmon','salmón'],group:'bluefish',eq:20,state:'en crudo'},{patterns:['salmon','salmón'],mode:'100g',kcal:208,p:20,c:0,f:13,label:'Salmón',group:'protein'});
addFood('tuna',{label:'Atún fresco',patterns:['atun fresco','atún fresco'],group:'bluefish',eq:23,state:'en crudo'},{patterns:['atun fresco','atún fresco'],mode:'100g',kcal:144,p:23,c:0,f:5,label:'Atún fresco',group:'protein'});
addFood('mackerel',{label:'Caballa',patterns:['caballa'],group:'bluefish',eq:19,state:'en crudo'},{patterns:['caballa'],mode:'100g',kcal:205,p:19,c:0,f:14,label:'Caballa',group:'protein'});
addFood('sardine',{label:'Sardinas',patterns:['sardina','sardinas'],group:'bluefish',eq:21,state:'en crudo'},{patterns:['sardina','sardinas'],mode:'100g',kcal:208,p:21,c:0,f:13,label:'Sardinas',group:'protein'});
addFood('prawns',{label:'Gambas/langostinos',patterns:['gambas','gamba','langostinos','langostino'],group:'seafood',eq:21,state:'en crudo'},{patterns:['gambas','gamba','langostinos','langostino'],mode:'100g',kcal:99,p:21,c:.2,f:.8,label:'Gambas/langostinos',group:'protein'});
addFood('octopus',{label:'Pulpo',patterns:['pulpo'],group:'seafood',eq:15,state:'en crudo'},{patterns:['pulpo'],mode:'100g',kcal:82,p:15,c:2.2,f:1,label:'Pulpo',group:'protein'});
addFood('squid',{label:'Calamar',patterns:['calamar','calamares'],group:'seafood',eq:16,state:'en crudo'},{patterns:['calamar','calamares'],mode:'100g',kcal:92,p:16,c:3.1,f:1.4,label:'Calamar',group:'protein'});
if(typeof GROUP_OPTIONS!=='undefined'){
  GROUP_OPTIONS.fruit=[...new Set([...(GROUP_OPTIONS.fruit||[]),'watermelon','raspberry','blackberry'])];
  GROUP_OPTIONS.vegetable=[...new Set([...(GROUP_OPTIONS.vegetable||[]),'eggplant'])];
  GROUP_OPTIONS.protein=[...new Set([...(GROUP_OPTIONS.protein||[]),'porkloin','prawns','octopus','squid','salmon','tuna','mackerel','sardine'])];
  GROUP_OPTIONS.bluefish=['salmon','tuna','mackerel','sardine','hake','cod','seabream','whitefish','chicken','turkey','beef','porkloin'];
  GROUP_OPTIONS.seafood=['prawns','octopus','squid','hake','cod','whitefish','chicken','turkey'];
}

// ---------- Historial por nombre de ejercicio ----------
function historyFor(name){
  const h=(load('workoutHistory',[])||[]).slice().sort((a,b)=>String(b.date).localeCompare(String(a.date)));
  const n=norm(name),rows=[];
  for(const s of h){for(const ex of (s.details||[])){if(norm(ex.name)===n)rows.push({date:s.date,name:s.name,ex});}}
  return rows;
}
function rirVals(ex){const a=[];(ex?.sets||[]).forEach(s=>{if(s.left||s.right){['left','right'].forEach(k=>{const v=parseFloat(String(s[k]?.rir??'').replace(',','.'));if(Number.isFinite(v))a.push(v)})}else{const v=parseFloat(String(s.rir??'').replace(',','.'));if(Number.isFinite(v))a.push(v)}});return a}
function progressionText(ex,target){
  if(!ex)return 'Sin referencia';const sets=(ex.sets||[]).filter(s=>s.done!==false);if(!sets.length)return 'Sin referencia';
  const reps=sets.map(s=>+(s.reps||0));const rirs=rirVals(ex);const avg=rirs.length?rirs.reduce((a,b)=>a+b,0)/rirs.length:null;
  const t=parseInt(String(target).match(/\d+/)?.[0]||0,10);if(t&&reps.every(r=>r>=t)&&avg!==null&&avg>=1&&avg<=2)return '↑ Considera subir carga';
  if(avg!==null&&avg<1)return '= Mantén o revisa carga';return '= Mantener y consolidar';
}
function setSummary(ex){return (ex?.sets||[]).map((s,i)=>{if(s.left||s.right)return `S${i+1}: I ${s.left?.kg||'—'}×${s.left?.reps||'—'} R${s.left?.rir||'—'} · D ${s.right?.kg||'—'}×${s.right?.reps||'—'} R${s.right?.rir||'—'}`;return `S${i+1}: ${s.kg||'—'} kg × ${s.reps||'—'} · RIR ${s.rir??'—'}`}).join('<br>')}
function openExHistory(name){const rows=historyFor(name),sheet=el('swapSheet');el('swapContent').innerHTML=`<div class="swap-head"><div><div class="eyebrow">HISTORIAL DEL EJERCICIO</div><h3>${esc(name)}</h3></div><button class="swap-close" id="v111HistClose">Cerrar</button></div>${rows.length?rows.slice(0,12).map(r=>`<div class="card v111-hist-card"><strong>${r.date}</strong><span>${esc(r.name||'')}</span><div>${setSummary(r.ex)}</div></div>`).join(''):'<div class="card">Aún no hay sesiones anteriores de este ejercicio.</div>'}`;sheet.classList.remove('hidden');q('#v111HistClose').onclick=()=>sheet.classList.add('hidden')}
function enrichExerciseHistory(root=document){qa('.exercise-card',root).forEach(card=>{if(q('.v111-by-name',card))return;const name=q('.exercise-name',card)?.textContent?.trim();if(!name)return;const rows=historyFor(name),last=rows[0],meta=q('.exercise-meta',card)?.textContent||'',target=meta.match(/×\s*([^·]+)/)?.[1]?.trim()||'';const box=document.createElement('div');box.className='v111-by-name';box.innerHTML=last?`<div><strong>Última vez · ${last.date}</strong><span>${progressionText(last.ex,target)}</span><small>${setSummary(last.ex)}</small></div><button class="secondary-btn">Ver historial</button>`:`<div><strong>Sin historial previo</strong><span>Primera referencia para este ejercicio.</span></div>`;q('.exercise-head',card)?.insertAdjacentElement('afterend',box);q('button',box)?.addEventListener('click',()=>openExHistory(name))})}
function enrichTrainingHistory(){qa('.v7-day-section .card.compact').forEach(card=>{if(q('.v111-training-history',card))return;const name=q('.exercise-name',card)?.textContent?.trim();if(!name)return;const last=historyFor(name)[0];const box=document.createElement('div');box.className='v111-training-history';box.innerHTML=last?`<span>Última: ${last.date}</span><strong>${setSummary(last.ex).replace(/<br>/g,' · ')}</strong><button class="secondary-btn">Historial</button>`:`<span>Sin sesión anterior</span>`;card.appendChild(box);q('button',box)?.addEventListener('click',()=>openExHistory(name))})}

// ---------- Guías visuales más claras ----------
function movementType(name){const n=norm(name);if(n.includes('pec-deck')||n.includes('pec deck'))return 'pecdeck';if(n.includes('jalon')||n.includes('jalón'))return 'pulldown';if(n.includes('remo'))return 'row';if(n.includes('press'))return 'press';if(n.includes('lateral'))return 'lateral';if(n.includes('curl'))return 'curl';if(n.includes('triceps')||n.includes('tríceps')||n.includes('extension')||n.includes('extensión'))return 'triceps';if(n.includes('hack')||n.includes('prensa')||n.includes('bulgara')||n.includes('búlgara'))return 'legs';if(n.includes('hip thrust'))return 'hip';if(n.includes('gemelo'))return 'calf';if(n.includes('crunch')||n.includes('rueda'))return 'core';return 'generic'}
function poseSvg(type,phase){
  const end=phase===1;let equip='',limbs='';
  if(type==='press'){equip='<path d="M20 142 H128 M42 142 L58 94 H116" class="eq"/>';limbs=end?'<path d="M78 92 L62 64 M86 92 L102 64" class="limb"/><path d="M56 62 H68 M96 62 H108" class="weight"/>':'<path d="M78 92 L58 82 M86 92 L106 82" class="limb"/><path d="M51 82 H64 M100 82 H113" class="weight"/>'}
  else if(type==='pulldown'){equip='<path d="M30 25 H132 M81 25 V53 M46 140 H116" class="eq"/>';limbs=end?'<path d="M81 74 L54 82 M81 74 L108 82" class="limb"/><path d="M48 80 H114" class="weight"/>':'<path d="M81 72 L55 44 M81 72 L107 44" class="limb"/><path d="M49 42 H113" class="weight"/>'}
  else if(type==='row'){equip='<path d="M25 122 H140 M118 55 V135" class="eq"/>';limbs=end?'<path d="M78 82 L101 86 M78 82 L101 77" class="limb"/>':'<path d="M78 82 L126 87 M78 82 L126 77" class="limb"/>'}
  else if(type==='pecdeck'){equip='<rect x="65" y="45" width="32" height="70" rx="6" class="eq"/>';limbs=end?'<path d="M81 77 L30 66 M81 77 L132 66" class="limb"/>':'<path d="M81 77 L54 82 M81 77 L108 82" class="limb"/>'}
  else if(type==='lateral'){limbs=end?'<path d="M80 77 L28 68 M84 77 L136 68" class="limb"/>':'<path d="M80 77 L62 112 M84 77 L102 112" class="limb"/>'}
  else if(type==='curl'){limbs=end?'<path d="M78 78 L57 54 M86 78 L107 54" class="limb"/>':'<path d="M78 78 L61 111 M86 78 L103 111" class="limb"/>'}
  else if(type==='triceps'){equip='<path d="M82 28 V48" class="eq"/>';limbs=end?'<path d="M78 76 L68 111 M86 76 L96 111" class="limb"/>':'<path d="M78 76 L63 84 M86 76 L101 84" class="limb"/>'}
  else if(type==='legs'){equip='<path d="M28 132 H135 M112 45 L136 132" class="eq"/>';limbs=end?'<path d="M81 95 L61 122 M81 95 L103 122" class="limb"/>':'<path d="M81 88 L54 104 M81 88 L112 104" class="limb"/>'}
  else if(type==='hip'){equip='<path d="M28 116 H136" class="eq"/>';limbs=end?'<path d="M55 91 H105 M55 91 L38 116 M105 91 L121 116" class="limb"/>':'<path d="M55 104 H97 M55 104 L38 116 M97 104 L121 116" class="limb"/>'}
  else if(type==='calf'){limbs=end?'<path d="M81 96 L65 126 M81 96 L99 126" class="limb"/><path d="M63 126 L73 120 M97 126 L107 120" class="weight"/>':'<path d="M81 96 L65 132 M81 96 L99 132" class="limb"/>'}
  else if(type==='core'){limbs=end?'<path d="M81 77 Q62 90 70 110" class="torso"/>':'<path d="M81 77 L81 111" class="torso"/>'}
  return `<svg viewBox="0 0 165 160" aria-hidden="true"><defs><linearGradient id="bodyG${type}${phase}" x1="0" x2="1"><stop stop-color="#cbd5e1"/><stop offset="1" stop-color="#94a3b8"/></linearGradient></defs><circle cx="82" cy="47" r="14" class="head"/><path d="M82 61 L82 99" class="torso"/>${limbs}<path d="M82 98 L65 135 M82 98 L100 135" class="leg"/>${equip}<circle cx="82" cy="78" r="20" class="muscleHalo"/></svg>`}
window.exerciseVisual=function(name,muscles){const type=movementType(name);return `<div class="v111-visual"><div class="v111-visual-title"><div><strong>${esc(name)}</strong><span>${esc(muscles||'Técnica del ejercicio')}</span></div><span class="v111-muscle-chip">Músculo objetivo</span></div><div class="v111-frames"><div class="v111-frame"><b>1 · INICIO</b>${poseSvg(type,0)}</div><div class="v111-arrow">→</div><div class="v111-frame"><b>2 · FINAL</b>${poseSvg(type,1)}</div></div><div class="v111-visual-note">Secuencia orientativa · usa las claves técnicas de debajo para ajustar postura y recorrido.</div></div>`};

// ---------- Notificación de fin de descanso (best effort) ----------
async function askNotify(){try{if('Notification'in window&&Notification.permission==='default')await Notification.requestPermission()}catch(_){}}
async function notifyRest(name){try{if(navigator.vibrate)navigator.vibrate([250,120,250]);if('Notification'in window&&Notification.permission==='granted'){const reg=await navigator.serviceWorker?.ready;reg?.showNotification('Descanso terminado',{body:`${name||'Siguiente serie'} · puedes continuar`,icon:'/icon-192.png',badge:'/icon-192.png',tag:'jc-rest',renotify:true,data:{url:'/'}})}}catch(_){}}
let lastAlerted=false;
setInterval(()=>{try{const rs=load(`v11RestState:${today()}`,null);if(rs?.active&&rs.remaining<=0&&rs.alerted&&!lastAlerted){lastAlerted=true;notifyRest(rs.name)}if(!rs?.active||rs.remaining>0)lastAlerted=false}catch(_){}},500);

// ---------- UX de inicio/final y contracción ----------
function workoutSection(){return qa('.section',q('#content')).find(s=>q('.section-title h2',s)?.textContent?.trim()==='Entrenamiento')}
function isFinished(){return !!load(`v111Finished:${today()}`,false)}
function setFinished(v){save(`v111Finished:${today()}`,!!v)}
function sessionSummary(){const h=(load('workoutHistory',[])||[]).find(x=>x.date===today());return h}
function compactFinished(){const sec=workoutSection();if(!sec||!isFinished())return;sec.classList.add('v111-training-finished');const h=sessionSummary();let bar=q('.v111-finished-bar',sec);if(!bar){bar=document.createElement('div');bar.className='card v111-finished-bar';bar.innerHTML=`<div><strong>✓ ${esc(h?.name||TRAINING[dayKey()]?.name||'Entrenamiento')} completado</strong><span>${h?.elapsed?fmtElapsed(h.elapsed)+' · ':''}${h?.completedSets||0} series</span></div><button class="secondary-btn">Ver resumen</button>`;sec.prepend(bar);q('button',bar).onclick=()=>{sec.classList.toggle('v111-training-open');q('button',bar).textContent=sec.classList.contains('v111-training-open')?'Contraer':'Ver resumen'}}}
function placeSessionControls(){const sec=workoutSection(),panel=q('.v103-session-section');if(!sec||!panel)return;sec.insertBefore(panel,sec.querySelector('.exercise-card,.v103-extra-card')||sec.firstChild?.nextSibling||null);const card=q('.v103-session-card',panel);if(!card)return;const act=q('.v103-session-actions',card);if(act){q('#v103Finish',act)?.remove();q('#v11Stop',act)?.remove();}
  if(!V3?.session?.startedAt){const b=q('#v103Start',card);if(b){b.textContent='▶ Iniciar entrenamiento';b.classList.add('v111-start-big');b.addEventListener('click',askNotify,{once:true})}}
  let finish=q('#v111FinishBottom',sec);if(!finish&&V3?.session?.startedAt){finish=document.createElement('button');finish.id='v111FinishBottom';finish.className='primary-btn v111-finish-bottom';finish.textContent='■ Finalizar entrenamiento';finish.onclick=()=>{if(confirm('¿Finalizar y guardar el entrenamiento?')){try{window.finishWorkoutSession()}finally{setFinished(true);setTimeout(()=>{renderToday();compactFinished()},50)}}};sec.appendChild(finish)}
}
const oldToday=window.renderToday;window.renderToday=function(){oldToday();enrichExerciseHistory();placeSessionControls();compactFinished()};
const oldTraining=window.renderTraining;window.renderTraining=function(){oldTraining();enrichTrainingHistory()};
const oldFinish=window.finishWorkoutSession;window.finishWorkoutSession=function(){oldFinish();setFinished(true);setTimeout(()=>{if(state.view==='today'){renderToday();compactFinished()}},20)};
const oldStart=window.startWorkoutSession;window.startWorkoutSession=function(){setFinished(false);askNotify();oldStart()};

window.JC_TRAINING_VERSION=V;
render();
})();
