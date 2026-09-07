const DAYS = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
const TRAINING = {
  lunes: {
    name: 'PUSH', focus: 'Pecho · Hombro · Tríceps',
    exercises: [
      ['Press inclinado mancuernas 30°',3,8,150,'RIR 1–2'],
      ['Press convergente pecho máquina',3,10,120,'RIR 1–2'],
      ['Press militar sentado multipower',3,8,120,'RIR 1–2'],
      ['Elevación lateral unilateral polea',3,15,60,'RIR 1–2'],
      ['Extensión tríceps cuerda',3,10,75,'RIR 1–2'],
      ['Extensión tríceps overhead cuerda',2,12,75,'RIR 1–2']
    ]
  },
  martes: {
    name: 'PULL', focus: 'Espalda · Deltoide posterior · Bíceps',
    exercises: [
      ['Jalón al pecho pronado medio-abierto',3,8,150,'RIR 1–2'],
      ['Remo máquina pecho apoyado neutro',3,10,120,'RIR 1–2'],
      ['Jalón unilateral polea alta de rodillas',2,10,75,'RIR 1–2'],
      ['Reverse pec-deck',3,15,60,'RIR 1–2'],
      ['Curl inclinado mancuernas',3,10,75,'RIR 1–2'],
      ['Curl predicador máquina/polea',2,12,75,'RIR 1–2']
    ]
  },
  miércoles: {
    name: 'LEGS', focus: 'Pierna completa · Abdomen',
    exercises: [
      ['Hack squat',3,8,180,'RIR 1–2'],
      ['Prensa 45° pies medios-bajos',3,10,150,'RIR 1–2'],
      ['Curl femoral sentado',3,12,90,'RIR 1–2'],
      ['Hip thrust',3,10,150,'RIR 1–2'],
      ['Gemelo máquina/prensa',3,12,75,'RIR 1–2'],
      ['Crunch polea alta',3,12,60,'RIR 1–2']
    ]
  },
  jueves: {
    name: 'UPPER', focus: 'Pecho · Espalda · Hombro · Brazos',
    exercises: [
      ['Press plano mancuernas',3,8,150,'RIR 1–2'],
      ['Remo máquina pecho apoyado pronado/medio',3,10,120,'RIR 1–2'],
      ['Aperturas polea abajo → arriba',2,12,75,'RIR 1–2'],
      ['Jalón neutro estrecho',2,12,90,'RIR 1–2'],
      ['Elevación lateral máquina',2,15,60,'RIR 1–2'],
      ['Curl martillo cuerda',2,12,75,'RIR 1–2'],
      ['Extensión tríceps V',2,12,75,'RIR 1–2']
    ]
  },
  viernes: {
    name: 'LOWER', focus: 'Pierna · Abdomen',
    exercises: [
      ['Prensa 45° pies altos',3,10,150,'RIR 1–2'],
      ['Sentadilla búlgara mancuernas',2,10,90,'RIR 1–2'],
      ['Curl femoral sentado',3,10,90,'RIR 1–2'],
      ['Extensión cuádriceps',2,15,75,'RIR 1–2'],
      ['Abductores máquina',2,15,60,'RIR 1–2'],
      ['Gemelo sentado',3,15,60,'RIR 1–2'],
      ['Rueda abdominal',3,10,60,'RIR 1–2']
    ]
  },
  sábado: { name: 'LISS', focus: 'Cardio suave', exercises: [['Cardio LISS / caminata rápida',1,35,0,'30–40 min']] },
  domingo: { name: 'DESCANSO', focus: 'Recuperación', exercises: [] }
};

const MEALS = {
  lunes: [
    ['Desayuno postentreno',['60 g avena','30 g whey','100 g arándanos','300 ml bebida de almendras sin azúcar']],
    ['Comida',['250 g pollo','75 g arroz en crudo','300 g verduras','10 g AOVE','150 g melón']],
    ['Merienda',['250 g queso fresco batido 0%','150 g melocotón','15 g pistachos']],
    ['Cena',['250 g merluza','200 g patata en crudo','300 g verduras','10 g AOVE']]
  ],
  martes: [
    ['Desayuno postentreno',['3 huevos','150 ml claras','60 g avena','100 g arándanos']],
    ['Comida',['250 g ternera magra','75 g arroz en crudo','300 g verduras','5 g AOVE','150 g melón']],
    ['Merienda',['250 g queso fresco batido 0%','150 g melocotón']],
    ['Cena',['300 g bacalao','200 g patata en crudo','300 g verduras','10 g AOVE']]
  ],
  miércoles: [
    ['Desayuno postentreno',['60 g avena','30 g whey','10 g cacahuete en polvo','100 g arándanos','300 ml bebida de almendras']],
    ['Comida',['250 g pollo/pavo','85 g arroz en crudo','300 g verduras','10 g AOVE','150 g fruta']],
    ['Merienda',['250 g queso fresco batido 0%','150 g fruta','15 g pistachos']],
    ['Cena',['250 g dorada','250 g patata en crudo','300 g ensalada/verdura','5 g AOVE']]
  ],
  jueves: [
    ['Desayuno postentreno',['3 huevos','150 ml claras','60 g avena','100 g fruta']],
    ['Comida',['250 g pollo','75 g arroz en crudo','300 g verduras','10 g AOVE','150 g fruta']],
    ['Merienda',['250 g queso fresco batido 0%','150 g fruta']],
    ['Cena',['250 g merluza','200 g patata en crudo','300 g verduras','10 g AOVE']]
  ],
  viernes: [
    ['Desayuno postentreno',['60 g avena','30 g whey','10 g cacahuete en polvo','100 g arándanos','300 ml bebida de almendras']],
    ['Comida',['250 g ternera magra','85 g arroz en crudo','300 g verduras','5 g AOVE','150 g fruta']],
    ['Merienda',['250 g queso fresco batido 0%','150 g fruta','15 g pistachos']],
    ['Cena',['300 g pescado blanco','250 g patata en crudo','300 g verduras','10 g AOVE']]
  ],
  sábado: [
    ['Desayuno',['2 huevos','150 ml claras','60 g aguacate','150 g fruta']],
    ['Comida',['250 g pollo/pavo','60 g arroz en crudo','300 g verduras','10 g AOVE','150 g fruta']],
    ['Merienda',['250 g queso fresco batido 0%','150 g fruta']],
    ['Cena',['250 g pescado','150 g patata en crudo','300 g ensalada','10 g AOVE']]
  ],
  domingo: [
    ['Desayuno',['2 huevos','90 ml claras','60 g aguacate','150 g fruta']],
    ['Comida',['250 g carne magra','200 g patata en crudo','300 g verduras','5 g AOVE','150 g fruta']],
    ['Merienda',['250 g queso fresco batido 0%','150 g fruta']],
    ['Cena',['250 g pescado blanco','150 g patata en crudo','300 g ensalada','10 g AOVE']]
  ]
};

const state = {
  view: 'today',
  timer: null,
  timerRemaining: 0,
  timerPaused: false,
  deferredPrompt: null
};

const el = id => document.getElementById(id);
const fmtDate = d => d.toLocaleDateString('es-ES',{weekday:'long',day:'numeric',month:'long'});
const dayKey = (d=new Date()) => DAYS[d.getDay()];
const isoDate = (d=new Date()) => d.toISOString().slice(0,10);
const load = (k, fallback) => { try { return JSON.parse(localStorage.getItem(k)) ?? fallback; } catch { return fallback; } };
const save = (k,v) => localStorage.setItem(k, JSON.stringify(v));

function workoutKey(date=isoDate()) { return `workout:${date}`; }
function mealsKey(date=isoDate()) { return `meals:${date}`; }
function metricsKey() { return 'metrics'; }

function render() {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view===state.view));
  const titles = {today:'Hoy',training:'Entrenamiento',meals:'Comidas',progress:'Progreso',history:'Historial'};
  el('pageTitle').textContent = titles[state.view];
  if (state.view==='today') renderToday();
  if (state.view==='training') renderTraining();
  if (state.view==='meals') renderMeals();
  if (state.view==='progress') renderProgress();
  if (state.view==='history') renderHistory();
}

function renderToday() {
  const d = new Date(); const day = dayKey(d); const plan = TRAINING[day];
  const doneMeals = load(mealsKey(),{});
  const content = el('content');
  content.innerHTML = `
    <section class="section">
      <div class="card hero">
        <div class="eyebrow">${fmtDate(d).toUpperCase()}</div>
        <h2>${plan.name}</h2>
        <p>${plan.focus}</p>
        <div class="stat-row">
          <div class="stat"><strong>${plan.exercises.reduce((a,x)=>a+x[1],0)}</strong><span>series</span></div>
          <div class="stat"><strong>${estimateMinutes(plan)}</strong><span>min aprox.</span></div>
          <div class="stat"><strong>1–2</strong><span>RIR objetivo</span></div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-title"><h2>Entrenamiento</h2><span>${plan.exercises.length} ejercicios</span></div>
      ${plan.exercises.map((x,i)=>exerciseCard(x,i,isoDate())).join('') || '<div class="card"><p class="note">Hoy toca recuperación. Prioriza pasos, hidratación y descanso.</p></div>'}
    </section>
    <section class="section">
      <div class="section-title"><h2>Comidas</h2><span>sin media mañana</span></div>
      ${(MEALS[day]||[]).map((m,i)=>mealCard(m,i,doneMeals)).join('')}
    </section>`;
  bindExerciseEvents(); bindMealEvents();
}

function renderTraining() {
  const content = el('content');
  content.innerHTML = Object.keys(TRAINING).map(day => {
    const p = TRAINING[day];
    return `<section class="section"><div class="section-title"><h2>${day.toUpperCase()} · ${p.name}</h2><span>${p.focus}</span></div>
      ${p.exercises.map(x=>`<div class="card compact"><div class="exercise-name">${x[0]}</div><div class="exercise-meta">${x[1]} × ${x[2]} · descanso ${x[3]} s · ${x[4]}</div></div>`).join('') || '<div class="card compact"><span class="note">Descanso</span></div>'}
    </section>`;
  }).join('');
}

function renderMeals() {
  const content = el('content');
  content.innerHTML = Object.keys(MEALS).map(day => `<section class="section"><div class="section-title"><h2>${day.toUpperCase()}</h2><span>${TRAINING[day].name}</span></div>${MEALS[day].map((m,i)=>mealStaticCard(m)).join('')}</section>`).join('');
}

function renderProgress() {
  const metrics = load(metricsKey(),[]);
  const latest = metrics.at(-1) || {};
  el('content').innerHTML = `
    <section class="section">
      <div class="card">
        <div class="section-title"><h2>Registrar hoy</h2><span>${isoDate()}</span></div>
        <div class="grid-2">
          <label><span class="small-label">Peso (kg)</span><input id="mWeight" class="input" inputmode="decimal" value="${latest.date===isoDate()?latest.weight||'':''}"></label>
          <label><span class="small-label">Cintura (cm)</span><input id="mWaist" class="input" inputmode="decimal" value="${latest.date===isoDate()?latest.waist||'':''}"></label>
          <label><span class="small-label">Sueño 1–5</span><input id="mSleep" class="input" type="number" min="1" max="5" value="${latest.date===isoDate()?latest.sleep||'':''}"></label>
          <label><span class="small-label">Hambre 1–5</span><input id="mHunger" class="input" type="number" min="1" max="5" value="${latest.date===isoDate()?latest.hunger||'':''}"></label>
          <label><span class="small-label">Energía 1–5</span><input id="mEnergy" class="input" type="number" min="1" max="5" value="${latest.date===isoDate()?latest.energy||'':''}"></label>
          <label><span class="small-label">Pasos</span><input id="mSteps" class="input" inputmode="numeric" value="${latest.date===isoDate()?latest.steps||'':''}"></label>
        </div>
        <button id="saveMetrics" class="primary-btn" style="width:100%;margin-top:12px">Guardar</button>
      </div>
    </section>
    <section class="section"><div class="section-title"><h2>Evolución</h2><span>${metrics.length} registros</span></div>${metricsChart(metrics)}</section>
    <section class="section"><div class="grid-2"><button id="exportBtn" class="secondary-btn">Exportar copia</button><label class="secondary-btn" style="text-align:center">Importar<input id="importFile" type="file" accept="application/json" hidden></label></div></section>`;
  el('saveMetrics').onclick = saveMetrics;
  el('exportBtn').onclick = exportData;
  el('importFile').onchange = importData;
}

function renderHistory() {
  const history = load('workoutHistory',[]).slice().reverse();
  const metrics = load(metricsKey(),[]).slice().reverse().slice(0,10);
  el('content').innerHTML = `
    <section class="section"><div class="section-title"><h2>Entrenamientos</h2><span>${history.length}</span></div>
      ${history.length?history.map(h=>`<div class="history-item"><strong>${h.date} · ${h.name}</strong><p>${h.completedSets}/${h.totalSets} series completadas</p></div>`).join(''):'<div class="card"><p class="note">Todavía no hay entrenamientos guardados.</p></div>'}
    </section>
    <section class="section"><div class="section-title"><h2>Mediciones recientes</h2><span></span></div>
      ${metrics.map(m=>`<div class="history-item"><strong>${m.date}</strong><p>${m.weight?m.weight+' kg':''}${m.waist?' · '+m.waist+' cm cintura':''}</p></div>`).join('') || '<div class="card"><p class="note">Sin mediciones.</p></div>'}
    </section>`;
}

function exerciseCard(x,i,date) {
  const [name,sets,reps,rest,rir] = x;
  const data = load(workoutKey(date),{});
  const ex = data[i] || {sets:Array.from({length:sets},()=>({kg:'',reps:'',done:false})), rir:''};
  const setRows = ex.sets.map((s,si)=>`<div class="set-row"><div class="set-label">S${si+1}</div><input class="input set-kg" data-ex="${i}" data-set="${si}" inputmode="decimal" placeholder="kg" value="${s.kg}"><input class="input set-reps" data-ex="${i}" data-set="${si}" inputmode="numeric" placeholder="reps" value="${s.reps}"><button class="check-btn ${s.done?'done':''}" data-check="${i}:${si}" data-rest="${rest}" data-name="${name}">${s.done?'✓':'○'}</button></div>`).join('');
  return `<div class="card"><div class="exercise-head"><div><div class="exercise-name">${name}</div><div class="exercise-meta">${sets} × ${reps} · descanso ${rest||'—'} s</div></div><span class="badge">${rir}</span></div><div class="sets">${setRows}</div><div class="exercise-footer"><label><span class="small-label">RIR final</span><select class="input ex-rir" data-ex="${i}"><option value="">—</option>${[0,1,2,3,4].map(v=>`<option ${String(ex.rir)===String(v)?'selected':''}>${v}</option>`).join('')}</select></label><button class="secondary-btn save-ex" data-ex="${i}">Guardar ejercicio</button></div></div>`;
}

function mealCard(m,i,doneMeals) {
  const done = !!doneMeals[i];
  return `<div class="card"><div class="meal-title"><strong>${m[0]}</strong><button class="check-btn ${done?'done':''}" data-meal="${i}">${done?'✓':'○'}</button></div><ul class="food-list">${m[1].map(f=>`<li>${f}</li>`).join('')}</ul></div>`;
}
function mealStaticCard(m){ return `<div class="card compact"><strong>${m[0]}</strong><ul class="food-list">${m[1].map(f=>`<li>${f}</li>`).join('')}</ul></div>`; }

function bindExerciseEvents() {
  document.querySelectorAll('.set-kg,.set-reps').forEach(inp => inp.addEventListener('input', persistWorkoutInput));
  document.querySelectorAll('.ex-rir').forEach(inp => inp.addEventListener('change', persistWorkoutInput));
  document.querySelectorAll('[data-check]').forEach(btn => btn.addEventListener('click', toggleSet));
  document.querySelectorAll('.save-ex').forEach(btn => btn.addEventListener('click', ()=>{ persistWorkoutInput(); finalizeHistory(); btn.textContent='Guardado ✓'; setTimeout(()=>btn.textContent='Guardar ejercicio',900); }));
}
function bindMealEvents(){ document.querySelectorAll('[data-meal]').forEach(btn=>btn.onclick=()=>{ const d=load(mealsKey(),{}); d[btn.dataset.meal]=!d[btn.dataset.meal]; save(mealsKey(),d); renderToday(); }); }

function persistWorkoutInput(){
  const day=dayKey(); const plan=TRAINING[day]; if(!plan.exercises.length) return;
  const data = load(workoutKey(),{});
  plan.exercises.forEach((x,i)=>{
    const sets=x[1]; if(!data[i]) data[i]={sets:Array.from({length:sets},()=>({kg:'',reps:'',done:false})),rir:''};
    document.querySelectorAll(`.set-kg[data-ex="${i}"]`).forEach(inp=>data[i].sets[+inp.dataset.set].kg=inp.value);
    document.querySelectorAll(`.set-reps[data-ex="${i}"]`).forEach(inp=>data[i].sets[+inp.dataset.set].reps=inp.value);
    const rir=document.querySelector(`.ex-rir[data-ex="${i}"]`); if(rir) data[i].rir=rir.value;
  }); save(workoutKey(),data);
}

function toggleSet(e){
  persistWorkoutInput();
  const [ei,si]=e.currentTarget.dataset.check.split(':').map(Number);
  const data=load(workoutKey(),{}); data[ei].sets[si].done=!data[ei].sets[si].done; save(workoutKey(),data);
  if(data[ei].sets[si].done && +e.currentTarget.dataset.rest>0) startTimer(+e.currentTarget.dataset.rest,e.currentTarget.dataset.name);
  finalizeHistory(); renderToday();
}

function finalizeHistory(){
  const day=dayKey(); const plan=TRAINING[day]; const data=load(workoutKey(),{});
  const totalSets=plan.exercises.reduce((a,x)=>a+x[1],0);
  const completedSets=Object.values(data).reduce((a,ex)=>a+(ex.sets||[]).filter(s=>s.done).length,0);
  const hist=load('workoutHistory',[]).filter(h=>h.date!==isoDate());
  hist.push({date:isoDate(),name:plan.name,totalSets,completedSets}); save('workoutHistory',hist);
}

function startTimer(sec,name){
  clearInterval(state.timer); state.timerRemaining=sec; state.timerPaused=false; el('timerExercise').textContent=name; el('timerOverlay').classList.remove('hidden'); updateTimer();
  state.timer=setInterval(()=>{ if(!state.timerPaused){ state.timerRemaining--; updateTimer(); if(state.timerRemaining<=0){ clearInterval(state.timer); if(navigator.vibrate) navigator.vibrate([250,150,250]); setTimeout(()=>el('timerOverlay').classList.add('hidden'),350); } } },1000);
}
function updateTimer(){ const m=Math.floor(state.timerRemaining/60); const s=state.timerRemaining%60; el('timerValue').textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`; el('timerPause').textContent=state.timerPaused?'Continuar':'Pausa'; }

function saveMetrics(){
  const rec={date:isoDate(),weight:el('mWeight').value,waist:el('mWaist').value,sleep:el('mSleep').value,hunger:el('mHunger').value,energy:el('mEnergy').value,steps:el('mSteps').value};
  const arr=load(metricsKey(),[]).filter(x=>x.date!==rec.date); arr.push(rec); arr.sort((a,b)=>a.date.localeCompare(b.date)); save(metricsKey(),arr); renderProgress();
}

function metricsChart(metrics){
  const pts=metrics.filter(m=>m.weight).slice(-14); if(pts.length<2) return '<div class="card"><p class="note">Añade al menos dos pesajes para ver el gráfico.</p></div>';
  const vals=pts.map(p=>+String(p.weight).replace(',','.')); const min=Math.min(...vals), max=Math.max(...vals); const w=600,h=170,pad=20; const range=(max-min)||1;
  const coords=vals.map((v,i)=>[pad+i*(w-2*pad)/(vals.length-1), h-pad-(v-min)*(h-2*pad)/range]);
  const points=coords.map(c=>c.join(',')).join(' ');
  return `<div class="chart"><svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><polyline fill="none" stroke="#38bdf8" stroke-width="4" points="${points}"/>${coords.map(c=>`<circle cx="${c[0]}" cy="${c[1]}" r="4" fill="#22c55e"/>`).join('')}</svg></div>`;
}

function exportData(){
  const payload={metrics:load(metricsKey(),[]),workoutHistory:load('workoutHistory',[]),storage:{}};
  for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i); if(k.startsWith('workout:')||k.startsWith('meals:')) payload.storage[k]=load(k,{});}
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`jc-training-backup-${isoDate()}.json`; a.click(); URL.revokeObjectURL(a.href);
}
function importData(e){ const f=e.target.files[0]; if(!f)return; const r=new FileReader(); r.onload=()=>{ try{const p=JSON.parse(r.result); save(metricsKey(),p.metrics||[]); save('workoutHistory',p.workoutHistory||[]); Object.entries(p.storage||{}).forEach(([k,v])=>save(k,v)); alert('Copia importada correctamente'); renderProgress();}catch{alert('Archivo no válido');} }; r.readAsText(f); }

function estimateMinutes(plan){
  const work=plan.exercises.reduce((a,x)=>a+x[1]*0.7,0); const rest=plan.exercises.reduce((a,x)=>a+Math.max(0,x[1]-1)*(x[3]||0)/60,0); return Math.round(work+rest+6);
}

// Navigation
for (const b of document.querySelectorAll('.nav-btn')) b.onclick=()=>{state.view=b.dataset.view; render();};
el('timerAdd').onclick=()=>{state.timerRemaining+=30;updateTimer();};
el('timerPause').onclick=()=>{state.timerPaused=!state.timerPaused;updateTimer();};
el('timerSkip').onclick=()=>{clearInterval(state.timer);el('timerOverlay').classList.add('hidden');};

window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();state.deferredPrompt=e;el('installBtn').classList.remove('hidden');});
el('installBtn').onclick=async()=>{if(!state.deferredPrompt)return;state.deferredPrompt.prompt();await state.deferredPrompt.userChoice;state.deferredPrompt=null;el('installBtn').classList.add('hidden');};

if('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');
render();
