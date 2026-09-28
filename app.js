const ROUTINE={
 lunes:{name:'PUSH',nutrition:'Fuerza · 2300 kcal',ex:[['Press inclinado mancuernas',4,8,150],['Press convergente máquina',3,10,150],['Press militar máquina/Smith',3,8,150],['Elevaciones laterales',4,12,90],['Aperturas peck-deck/polea',2,15,90],['Tríceps polea',3,10,120],['Tríceps sobre cabeza',3,12,120]]},
 martes:{name:'PULL',nutrition:'HC alto · 2450 kcal',ex:[['Jalón pronado abierto',4,8,150],['Remo con pecho apoyado',4,10,150],['Jalón neutro/cerrado',3,10,150],['Jalón brazos rectos',2,12,90],['Reverse peck-deck',4,15,90],['Curl inclinado',3,10,120],['Curl Scott',3,12,120]]},
 miércoles:{name:'LEGS',nutrition:'HC alto · 2450 kcal',ex:[['Hack / prensa',4,8,150],['Búlgara',3,10,150],['Extensión cuádriceps',3,12,90],['Curl femoral',4,10,150],['Hip thrust',3,10,150],['Gemelos',4,15,90],['Rueda abdominal',4,10,90]]},
 jueves:{name:'UPPER',nutrition:'Fuerza · 2300 kcal',ex:[['Press plano mancuernas',4,8,150],['Jalón',3,10,150],['Press inclinado/convergente',3,10,150],['Remo máquina/polea',4,10,150],['Elevaciones laterales',4,15,90],['Reverse peck-deck',3,15,90],['Curl bíceps',3,10,120],['Tríceps polea',3,10,120]]},
 viernes:{name:'LOWER + HOMBRO/BRAZO',nutrition:'HC alto · 2450 kcal',ex:[['Prensa',3,10,150],['Curl femoral',3,10,150],['Hip thrust',3,10,150],['Extensión cuádriceps',2,15,90],['Elevaciones laterales',4,15,90],['Curl martillo',3,12,120],['Tríceps cuerda',3,12,120],['Gemelos',3,15,90],['Rueda abdominal',3,10,90]]},
 sábado:{name:'DESCANSO',nutrition:'Descanso · 2150 kcal',ex:[]},domingo:{name:'DESCANSO',nutrition:'Descanso · 2150 kcal',ex:[]}
};
const TECHNIQUE={
 'Press inclinado mancuernas':'Banco con inclinación moderada. Escápulas estables, pies firmes y bajada controlada. Empuja sin perder la posición del hombro.',
 'Press convergente máquina':'Ajusta el asiento para empujar a la altura del pecho. Espalda apoyada, hombros bajos y recorrido controlado.',
 'Press militar máquina/Smith':'Tronco estable y abdomen firme. Empuja sin arquear en exceso la zona lumbar y baja con control.',
 'Elevaciones laterales':'Brazos ligeramente hacia delante. Lidera con los codos, no encojas hombros, sube hasta aprox. altura de hombros y baja en ~2 s sin balanceo.',
 'Aperturas peck-deck/polea':'Preferencia peck-deck. Espalda apoyada, codos ligeramente flexionados. Cierra pensando en juntar los bíceps, 1 s de contracción y sin forzar el estiramiento atrás.',
 'Tríceps polea':'Codos pegados al cuerpo y hombros estables. Extiende sin balancear el tronco y controla la vuelta.',
 'Tríceps sobre cabeza':'Codos orientados al frente y tronco estable. Busca recorrido cómodo sin arquear la zona lumbar.',
 'Jalón pronado abierto':'Pecho alto y hombros lejos de las orejas. Lleva los codos hacia abajo sin impulsarte con el tronco.',
 'Remo con pecho apoyado':'Pecho apoyado todo el tiempo. Inicia llevando los codos atrás y evita encoger los hombros.',
 'Jalón neutro/cerrado':'Torso estable. Lleva el agarre hacia la parte alta del pecho guiando con los codos.',
 'Jalón brazos rectos':'Codos casi fijos. Lleva la barra/cuerda hacia los muslos usando dorsales, sin convertirlo en un tríceps.',
 'Reverse peck-deck':'Pecho apoyado y hombros bajos. Abre con los codos sin arquear la espalda ni encoger trapecios.',
 'Curl inclinado':'Hombros atrás y brazos quietos. Flexiona el codo sin adelantarlo y baja controlado.',
 'Curl Scott':'Axilas apoyadas y brazo estable. No rebotes abajo; controla especialmente la bajada.',
 'Hack / prensa':'Apoyo completo de espalda y pelvis. Rodillas siguen la línea de los pies y usa un rango cómodo sin despegar la pelvis.',
 'Búlgara':'Paso suficientemente largo, pie delantero estable y tronco controlado. Baja sin perder alineación de rodilla.',
 'Extensión cuádriceps':'Alinea la rodilla con el eje de la máquina. Extiende con control y evita golpear el tope.',
 'Curl femoral':'Cadera estable contra el apoyo. Flexiona sin levantar la pelvis y controla la vuelta.',
 'Hip thrust':'Barbilla ligeramente recogida, costillas controladas. Termina con glúteos sin hiperextender la zona lumbar.',
 'Gemelos':'Recorrido completo y controlado. Pausa arriba y deja bajar el talón sin rebotes.',
 'Rueda abdominal':'Glúteos y abdomen firmes. Avanza solo hasta donde puedas mantener la zona lumbar estable.',
 'Press plano mancuernas':'Escápulas estables, pies firmes y antebrazos controlados. Baja con control y empuja sin despegar hombros.',
 'Jalón':'Pecho alto y hombros bajos. Lleva los codos hacia abajo sin balancear el tronco.',
 'Press inclinado/convergente':'Espalda apoyada y hombros estables. Empuja siguiendo el recorrido de la máquina sin encoger hombros.',
 'Remo máquina/polea':'Torso estable. Lleva los codos atrás, pausa brevemente y controla la vuelta.',
 'Curl bíceps':'Codos estables junto al cuerpo. Evita balanceo y controla la fase de bajada.',
 'Prensa':'Espalda y pelvis apoyadas. Rodillas alineadas con los pies y recorrido cómodo sin despegar la pelvis.',
 'Curl martillo':'Muñecas neutras y codos quietos. Sube sin balancearte y baja controlado.',
 'Tríceps cuerda':'Codos fijos junto al cuerpo. Extiende y separa ligeramente la cuerda al final sin mover los hombros.'
};
const NOTES_KEY='jcTrainingExerciseNotesV1';
const ORDER_KEY='jcTrainingSessionOrderV1';
const days=['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
let view='today',selected=days[new Date().getDay()];
const HISTORY_KEY='jcTrainingHistoryV1';
const load=()=>JSON.parse(localStorage.getItem(HISTORY_KEY)||'{}');
const save=x=>localStorage.setItem(HISTORY_KEY,JSON.stringify(x));
const loadNotes=()=>JSON.parse(localStorage.getItem(NOTES_KEY)||'{}');
const saveNote=(name,text)=>{const n=loadNotes();n[name]=text;localStorage.setItem(NOTES_KEY,JSON.stringify(n))};
const loadOrders=()=>JSON.parse(localStorage.getItem(ORDER_KEY)||'{}');
function orderedExercises(day,date){const base=ROUTINE[day].ex,orders=loadOrders(),names=orders?.[date]?.[day];if(!Array.isArray(names))return base.slice();const map=new Map(base.map(e=>[e[0],e]));const out=names.map(n=>map.get(n)).filter(Boolean);base.forEach(e=>{if(!out.some(x=>x[0]===e[0]))out.push(e)});return out}
function saveOrder(day,date,exs){const o=loadOrders();if(!o[date])o[date]={};o[date][day]=exs.map(e=>e[0]);localStorage.setItem(ORDER_KEY,JSON.stringify(o))}

const iso=()=>{const d=new Date();d.setMinutes(d.getMinutes()-d.getTimezoneOffset());return d.toISOString().slice(0,10)};
function allFor(name){const h=load(),all=[];Object.entries(h).forEach(([d,s])=>Object.entries(s.ex||{}).forEach(([n,v])=>{if(n===name&&v.completed)all.push([d,v])}));all.sort((a,b)=>a[0].localeCompare(b[0]));return all}
function lastFor(name){const a=allFor(name);return a.length?a[a.length-1]:null}
function weightArray(v,sets){if(Array.isArray(v?.weights))return Array.from({length:sets},(_,i)=>v.weights[i]??v.weights[0]??'');const old=v?.weight??'';return Array(sets).fill(old)}
function displayWeights(v){const w=(v.weights||[]).filter(x=>String(x).trim()!=='');if(!w.length&&v.weight)return `${v.weight}`;if(!w.length)return'-';return w.every(x=>String(x)===String(w[0]))?`${w[0]}`:w.join('/')}
function topWeight(v){const w=(v.weights||[]).map(Number).filter(Number.isFinite);if(w.length)return Math.max(...w);const x=Number(v.weight);return Number.isFinite(x)?x:0}
function advice(ex,last){if(!last)return 'Primera sesión: usa una carga con la que completes el objetivo dejando RIR 1–2.';const v=last[1],ok=(v.reps||[]).length===ex[1]&&(v.reps||[]).every(r=>Number(r)>=ex[2])&&Number(v.rir||0)>=1;return ok?'✓ Objetivo completado: prueba el siguiente incremento de peso disponible.':'→ Mantén la carga hasta completar todas las series con buena técnica y RIR 1–2.'}
let timerInt=null;
function startTimer(sec,id){clearInterval(timerInt);let t=sec;const el=document.getElementById(id);if(!el)return;const draw=()=>el.textContent=`⏱ ${Math.floor(t/60)}:${String(t%60).padStart(2,'0')}`;draw();timerInt=setInterval(()=>{t--;draw();if(t<=0){clearInterval(timerInt);el.textContent='✓ Descanso terminado';navigator.vibrate?.(250)}},1000)}
function exerciseState(date,day,name,sets,target){const h=load(),saved=h?.[date]?.ex?.[name];if(saved)return {...saved,weights:weightArray(saved,sets),reps:Array.from({length:sets},(_,i)=>saved.reps?.[i]??target),done:Array.from({length:sets},(_,i)=>!!saved.done?.[i])};const last=lastFor(name),base=last?.[1];return {weights:weightArray(base,sets),reps:Array(sets).fill(target),done:Array(sets).fill(false),rir:'',completed:false}}
function storeExercise(date,day,name,state){const h=load();if(!h[date])h[date]={day,ex:{}};h[date].day=day;h[date].ex[name]=state;save(h)}
function sessionProgress(day,date){const r=ROUTINE[day],h=load(),s=h?.[date]?.ex||{};const done=r.ex.filter(e=>s[e[0]]?.completed).length;return {done,total:r.ex.length}}
function renderToday(day=selected){selected=day;const r=ROUTINE[day],date=iso(),exs=orderedExercises(day,date),prog=sessionProgress(day,date);setTitle('Hoy');let html=`<section class='hero'><div class='eyebrow'>${day.toUpperCase()}</div><h2>${r.name}</h2><p>${r.nutrition}</p><div class='sessionbar'><span>${prog.done}/${prog.total} ejercicios guardados</span><i style='width:${prog.total?Math.round(prog.done/prog.total*100):0}%'></i></div></section>`;
 if(!exs.length){html+=`<div class='card'><b>Día de descanso.</b><p class='muted'>Recuperación, paseo o LISS suave si corresponde.</p></div>`}
 const notes=loadNotes();
 exs.forEach((e,i)=>{const [name,sets,reps,rest]=e,last=lastFor(name),cur=exerciseState(date,day,name,sets,reps),tech=TECHNIQUE[name]||'Prioriza técnica estable, recorrido cómodo y control de la fase de bajada.';html+=`<div class='exercise ${cur.completed?'completed':''}' data-ex='${i}'><div class='exhead'><div><h3>${name}</h3><div class='target'>Objetivo · ${sets} × ${reps}</div></div>${cur.completed?'<span class="badge">HECHO</span>':''}</div><div class='muted'>Descanso ${Math.floor(rest/60)}:${String(rest%60).padStart(2,'0')}</div><div class='movebar'><button data-moveup='${i}' ${i===0?'disabled':''}>↑ Antes</button><button data-movedown='${i}' ${i===exs.length-1?'disabled':''}>↓ Después</button><button data-movelast='${i}' ${i===exs.length-1?'disabled':''}>↧ Al final</button></div><details class='tech'><summary>💡 Técnica</summary><p>${tech}</p></details><div class='notesbox'><label>📝 Mis notas <span>se guardan para próximas semanas</span></label><textarea data-note='${i}' placeholder='Ej.: asiento 4, agarre neutro, 12 kg demasiado...'>${(notes[name]||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</textarea></div>${last?`<div class='hist'>Anterior: <b>${displayWeights(last[1])} kg</b> · ${(last[1].reps||[]).join('/')||'-'} · RIR ${last[1].rir||'-'}</div>`:''}<div class='series'><div class='serieslabels'><span>Serie</span><span>Peso kg</span><span>Reps</span><span></span></div>${Array.from({length:sets},(_,ss)=>`<div class='seriesrow ${cur.done[ss]?'seriesdone':''}'><b>S${ss+1}</b><input class='seriesinput' inputmode='decimal' data-weight='${i}:${ss}' value='${cur.weights[ss]??''}' placeholder='kg'><input class='seriesinput' inputmode='numeric' data-rep='${i}:${ss}' value='${cur.reps[ss]}'><button data-setdone='${i}:${ss}' class='setbtn'>${cur.done[ss]?'✓':'Hecha'}</button></div>`).join('')}</div><div class='row finishrow'><label>RIR final <input inputmode='numeric' data-rir='${i}' value='${cur.rir}' placeholder='1–2'></label><button data-timer='${i}' class='secondary'>⏱ Descanso</button><span class='timer' id='timer${i}'></span></div><button data-saveex='${i}' class='primary wide'>Guardar ejercicio</button><div class='advice'>${advice(e,last)}</div></div>`});document.getElementById('app').innerHTML=html;bind(day,date,exs)}
function bind(day,date,exs=orderedExercises(day,date)){function getState(i){const e=exs[i];return exerciseState(date,day,e[0],e[1],e[2])}function put(i,st){storeExercise(date,day,exs[i][0],st)}
 document.querySelectorAll('[data-weight]').forEach(x=>x.onchange=()=>{const [i,s]=x.dataset.weight.split(':').map(Number),st=getState(i);st.weights[s]=x.value;if(s===0){for(let j=1;j<st.weights.length;j++){if(!String(st.weights[j]??'').trim()){st.weights[j]=x.value;const other=document.querySelector(`[data-weight=\"${i}:${j}\"]`);if(other)other.value=x.value}}}put(i,st)});
 document.querySelectorAll('[data-rir]').forEach(x=>x.onchange=()=>{const i=Number(x.dataset.rir),st=getState(i);st.rir=x.value;put(i,st)});
 document.querySelectorAll('[data-rep]').forEach(x=>x.onchange=()=>{const [i,s]=x.dataset.rep.split(':').map(Number),st=getState(i);st.reps[s]=x.value;put(i,st)});
 document.querySelectorAll('[data-setdone]').forEach(x=>x.onclick=()=>{const [i,s]=x.dataset.setdone.split(':').map(Number),e=exs[i],st=getState(i);if(!String(st.weights[s]??'').trim()){alert('Introduce el peso de esta serie.');return}st.done[s]=!st.done[s];if(st.done[s]&&!st.reps[s])st.reps[s]=e[2];put(i,st);x.textContent=st.done[s]?'✓':'Hecha';x.closest('.seriesrow')?.classList.toggle('seriesdone',st.done[s]);if(st.done[s])startTimer(e[3],`timer${i}`)});
 document.querySelectorAll('[data-timer]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.timer);startTimer(exs[i][3],`timer${i}`)});
 document.querySelectorAll('[data-saveex]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.saveex),e=exs[i],st=getState(i);if(st.weights.some(v=>!String(v??'').trim())){alert('Introduce el peso de todas las series.');return}if(st.reps.some(v=>!String(v??'').trim())){alert('Completa las repeticiones de todas las series.');return}if(!String(st.rir).trim()){alert('Introduce el RIR final.');return}st.completed=true;st.done=Array(e[1]).fill(true);put(i,st);renderToday(day)});
 document.querySelectorAll('[data-note]').forEach(x=>{x.oninput=()=>{const i=Number(x.dataset.note);saveNote(exs[i][0],x.value)}});
 const move=(i,to)=>{const arr=exs.slice(),item=arr.splice(i,1)[0];arr.splice(to,0,item);saveOrder(day,date,arr);renderToday(day)};
 document.querySelectorAll('[data-moveup]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.moveup);if(i>0)move(i,i-1)});
 document.querySelectorAll('[data-movedown]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.movedown);if(i<exs.length-1)move(i,i+1)});
 document.querySelectorAll('[data-movelast]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.movelast);if(i<exs.length-1)move(i,exs.length-1)});
}
function renderWeek(){setTitle('Semana');document.getElementById('app').innerHTML=`<div class='card'><div class='section-title'><h2>Semana</h2><span>elige día</span></div><div class='daygrid'>${Object.entries(ROUTINE).map(([d,r])=>`<button class='daybtn ${d===selected?'active':''}' data-day='${d}'>${d}: ${r.name}</button>`).join('')}</div></div><div id='day'></div>`;document.querySelectorAll('[data-day]').forEach(b=>b.onclick=()=>{selected=b.dataset.day;renderWeek()});renderDayPreview()}
function renderDayPreview(){const r=ROUTINE[selected],el=document.getElementById('day');el.innerHTML=`<div class='card'><div class='section-title'><h2>${r.name}</h2><span>${r.nutrition}</span></div>${r.ex.map(e=>`<p><b>${e[0]}</b> — ${e[1]}×${e[2]}</p>`).join('')||'<p class="muted">Descanso</p>'}<button id='trainSelected' class='primary wide'>Registrar este entrenamiento</button></div>`;document.getElementById('trainSelected').onclick=()=>{view='today';renderToday(selected);syncNav()}}
function renderHistory(){setTitle('Historial');const h=load(),dates=Object.keys(h).sort().reverse();document.getElementById('app').innerHTML=`<div class='card'><div class='section-title'><h2>Historial</h2><span>${dates.length} días</span></div>${dates.length?dates.map(d=>`<div class='hist block'><b>${d} · ${h[d].day}</b>${Object.entries(h[d].ex||{}).filter(([,v])=>v.completed).map(([n,v])=>`<div>${n}: ${displayWeights(v)} kg · ${(v.reps||[]).join('/')} · RIR ${v.rir||'-'}</div>`).join('')}</div>`).join(''):'<p class="muted">Todavía no hay entrenamientos guardados.</p>'}</div>`}
function renderProgress(){setTitle('Progreso');const names=[...new Set(Object.values(ROUTINE).flatMap(d=>d.ex.map(e=>e[0])))];const cards=names.map(n=>{const a=allFor(n);if(!a.length)return'';const last=a[a.length-1],first=a[0],delta=topWeight(last[1])-topWeight(first[1]),recent=a.slice(-6).reverse();return `<div class='card'><div class='exhead'><h3>${n}</h3><span class='badge'>${topWeight(last[1])||'-'} kg</span></div><p class='muted'>Cambio desde el primer registro: ${delta>0?'+':''}${delta.toFixed(1)} kg</p>${recent.map(([d,v])=>`<div class='progressrow'><span>${d}</span><b>${displayWeights(v)} kg · ${(v.reps||[]).join('/')}</b></div>`).join('')}</div>`}).join('');document.getElementById('app').innerHTML=`<section class='hero'><div class='eyebrow'>EVOLUCIÓN</div><h2>Progreso</h2><p>Cargas y repeticiones por ejercicio</p></section>${cards||'<div class="card"><p class="muted">Guarda tu primer entrenamiento para ver la evolución.</p></div>'}`}
function setTitle(t){const el=document.getElementById('pageTitle');if(el)el.textContent=t}
function syncNav(){document.querySelectorAll('nav button[data-v]').forEach(b=>b.classList.toggle('active',b.dataset.v===view))}
function render(){if(view==='today'){selected=days[new Date().getDay()];renderToday(selected)}else if(view==='week')renderWeek();else if(view==='history')renderHistory();else if(view==='progress')renderProgress();syncNav()}
document.querySelectorAll('nav button[data-v]').forEach(b=>b.onclick=()=>{view=b.dataset.v;render()});
const NUTRITION_URL='https://joaquincabral-wq.github.io/Nutrition/';
const nutritionBtn=document.getElementById('openNutrition');if(nutritionBtn)nutritionBtn.onclick=()=>{window.location.href=NUTRITION_URL};
render();
