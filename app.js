const ROUTINE={
 lunes:{name:'PUSH',nutrition:'Fuerza · 2300 kcal',ex:[['Press inclinado mancuernas',4,8,150],['Press de banca plano con barra',3,8,180],['Press militar máquina/Smith',3,8,150],['Elevaciones laterales',5,12,90],['Aperturas peck-deck/polea',2,15,90],['Tríceps polea',3,10,120],['Tríceps sobre cabeza',3,12,120]]},
 martes:{name:'PULL',nutrition:'HC alto · 2450 kcal',ex:[['Jalón pronado abierto',4,8,150],['Remo con pecho apoyado',5,10,150],['Jalón neutro/cerrado',3,10,150],['Jalón brazos rectos',2,12,90],['Reverse peck-deck',4,15,90],['Curl inclinado',3,10,120],['Curl Scott',3,12,120]]},
 miércoles:{name:'LEGS',nutrition:'HC alto · 2450 kcal',ex:[['Hack / prensa',4,8,150],['Búlgara',3,10,150],['Extensión cuádriceps',3,12,90],['Curl femoral',4,10,150],['Hip thrust',3,10,150],['Gemelos',4,15,90],['Crunch en polea',3,15,90]]},
 jueves:{name:'UPPER',nutrition:'Fuerza · 2300 kcal',ex:[['Press plano mancuernas',4,8,150],['Jalón',4,10,150],['Press inclinado/convergente',3,10,150],['Remo máquina/polea',4,10,150],['Elevaciones laterales',4,15,90],['Reverse peck-deck',3,15,90],['Curl bíceps',3,10,120],['Tríceps polea',3,10,120],['Pallof press',2,12,60]]},
 viernes:{name:'LOWER + HOMBRO/BRAZO',nutrition:'HC alto · 2450 kcal',ex:[['Prensa',3,10,150],['Curl femoral',3,10,150],['Hip thrust',3,10,150],['Extensión cuádriceps',2,15,90],['Elevaciones laterales',4,15,90],['Curl martillo',4,12,120],['Tríceps cuerda',4,12,120],['Gemelos',3,15,90],['Crunch abdominal en máquina',3,12,90]]},
 sábado:{name:'DESCANSO',nutrition:'Descanso · 2150 kcal',ex:[]},domingo:{name:'DESCANSO',nutrition:'Descanso · 2150 kcal',ex:[]}
};
const TECHNIQUE={
 'Press inclinado mancuernas':'Banco con inclinación moderada. Escápulas estables, pies firmes y bajada controlada. Empuja sin perder la posición del hombro.',
 'Press de banca plano con barra':'Banco plano, pies firmes y escápulas estables. Baja la barra con control hacia la zona media-inferior del pecho, con antebrazos aproximadamente verticales; empuja sin rebotar ni perder el apoyo. Evita un arco lumbar exagerado. Haz 1–2 series de calentamiento, 3 series efectivas de 6–8 repeticiones con RIR 2 y 2–3 min de descanso. Usa topes de seguridad o un compañero; no busques máximos ni entrenes con dolor.',
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
 'Curl femoral':'SENTADO (preferente): ajusta el asiento y el rodillo cerca de los tobillos. Mantén espalda y pelvis apoyadas; flexiona las rodillas sin despegar las caderas y vuelve en 2–3 segundos hasta una extensión cómoda. TUMBADO (alternativa): alinea las rodillas con el eje de la máquina, mantén pelvis y abdomen apoyados, lleva los talones hacia los glúteos sin arquear la zona lumbar y desciende lentamente. En ambas variantes evita rebotes, usa RIR 1–2 y detente si aparece dolor lumbar.',
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
 'Tríceps cuerda':'Codos fijos junto al cuerpo. Extiende y separa ligeramente la cuerda al final sin mover los hombros.',
 'Crunch en polea':'Arrodíllate ante una polea alta con cuerda. Mantén la cadera casi fija y flexiona suavemente el tronco acercando las costillas a la pelvis. Exhala al bajar, vuelve lentamente sin tirar con los brazos. Si molesta la espalda, reduce recorrido o cambia el ejercicio.',
 'Crunch abdominal en máquina':'Ajusta el asiento y el eje a tu altura. Acerca las costillas a la pelvis flexionando el tronco sin tirar con los brazos ni impulsarte. Exhala al contraer, vuelve controlado y usa una carga moderada. Evita si aparece dolor lumbar.',
 'Pallof press':'Coloca la polea a la altura del pecho. Ponte de lado a la máquina, pies separados y rodillas suaves. Sujeta el agarre con ambas manos frente al esternón. Aprieta abdomen y glúteos, extiende los brazos hacia delante sin permitir que el tronco gire hacia la polea. Mantén 1–2 segundos y regresa despacio. Haz 12 repeticiones por lado, cambia de lado y repite. No arquees la zona lumbar ni bloquees la respiración; usa poca carga al empezar.'
};
const CUSTOM_KEY='jcTrainingCustomExercisesV1';
const ONEOFF_KEY='jcTrainingOneOffExercisesV1';
const CATALOG_KEY='jcTrainingCustomCatalogV1';
const loadCustom=()=>JSON.parse(localStorage.getItem(CUSTOM_KEY)||'{}');
const loadOneOff=()=>JSON.parse(localStorage.getItem(ONEOFF_KEY)||'{}');
const loadCatalog=()=>JSON.parse(localStorage.getItem(CATALOG_KEY)||'{}');
const safeText=x=>String(x??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
function allExercises(day,date=iso()){
 const regular=ROUTINE[day].ex;
 const custom=loadCustom()[day]||[];
 const once=loadOneOff()?.[date]?.[day]||[];
 const out=[...regular];
 [...custom,...once].forEach(e=>{if(!out.some(x=>x[0]===e[0]))out.push(e)});
 return out;
}
function addExercise(day,e,scope,date=iso(),tech=''){
 if(allExercises(day,date).some(x=>x[0].toLowerCase()===e[0].toLowerCase()))return false;
 const key=scope==='once'?ONEOFF_KEY:CUSTOM_KEY;
 const data=JSON.parse(localStorage.getItem(key)||'{}');
 if(scope==='once'){data[date]??={};data[date][day]??=[];data[date][day].push(e)}
 else {data[day]??=[];data[day].push(e)}
 localStorage.setItem(key,JSON.stringify(data));
 if(tech.trim()){const cat=loadCatalog();cat[e[0]]=tech.trim();localStorage.setItem(CATALOG_KEY,JSON.stringify(cat))}
 return true;
}
function removeExercise(day,name,scope,date=iso()){
 const key=scope==='once'?ONEOFF_KEY:CUSTOM_KEY;
 const data=JSON.parse(localStorage.getItem(key)||'{}');
 const arr=scope==='once'?data?.[date]?.[day]:data?.[day];
 if(!arr)return;
 const ix=arr.findIndex(e=>e[0]===name);if(ix<0)return;
 arr.splice(ix,1);localStorage.setItem(key,JSON.stringify(data));
}
function weekDate(day){const today=new Date(),current=(today.getDay()+6)%7,target=(days.indexOf(day)+6)%7;today.setDate(today.getDate()+target-current);today.setMinutes(today.getMinutes()-today.getTimezoneOffset());return today.toISOString().slice(0,10)}
const NOTES_KEY='jcTrainingExerciseNotesV1';
const ORDER_KEY='jcTrainingSessionOrderV1';
const REST_KEY='jcTrainingExerciseRestV1';
const days=['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
let view='today',selected=days[new Date().getDay()];
const HISTORY_KEY='jcTrainingHistoryV1';
const load=()=>JSON.parse(localStorage.getItem(HISTORY_KEY)||'{}');
const save=x=>localStorage.setItem(HISTORY_KEY,JSON.stringify(x));
const loadNotes=()=>JSON.parse(localStorage.getItem(NOTES_KEY)||'{}');
const saveNote=(name,text)=>{const n=loadNotes();n[name]=text;localStorage.setItem(NOTES_KEY,JSON.stringify(n))};
const loadOrders=()=>JSON.parse(localStorage.getItem(ORDER_KEY)||'{}');
function orderedExercises(day,date){const base=allExercises(day,date),orders=loadOrders(),names=orders?.[date]?.[day];if(!Array.isArray(names))return base.slice();const map=new Map(base.map(e=>[e[0],e]));const out=names.map(n=>map.get(n)).filter(Boolean);base.forEach(e=>{if(!out.some(x=>x[0]===e[0]))out.push(e)});return out}
function saveOrder(day,date,exs){const o=loadOrders();if(!o[date])o[date]={};o[date][day]=exs.map(e=>e[0]);localStorage.setItem(ORDER_KEY,JSON.stringify(o))}
const loadRests=()=>JSON.parse(localStorage.getItem(REST_KEY)||'{}');
function restFor(name,def){const r=Number(loadRests()[name]);return Number.isFinite(r)&&r>=30?r:def}
function saveRest(name,sec){const r=loadRests();r[name]=sec;localStorage.setItem(REST_KEY,JSON.stringify(r))}

const iso=()=>{const d=new Date();d.setMinutes(d.getMinutes()-d.getTimezoneOffset());return d.toISOString().slice(0,10)};
function allFor(name){const h=load(),all=[];Object.entries(h).forEach(([d,s])=>Object.entries(s.ex||{}).forEach(([n,v])=>{if(n===name&&v.completed)all.push([d,v])}));all.sort((a,b)=>a[0].localeCompare(b[0]));return all}
function lastFor(name){const a=allFor(name);return a.length?a[a.length-1]:null}
function weightArray(v,sets){if(Array.isArray(v?.weights))return Array.from({length:sets},(_,i)=>v.weights[i]??v.weights[0]??'');const old=v?.weight??'';return Array(sets).fill(old)}
function displayWeights(v){const w=(v.weights||[]).filter(x=>String(x).trim()!=='');if(!w.length&&v.weight)return `${v.weight}`;if(!w.length)return'-';return w.every(x=>String(x)===String(w[0]))?`${w[0]}`:w.join('/')}
function topWeight(v){const w=(v.weights||[]).map(Number).filter(Number.isFinite);if(w.length)return Math.max(...w);const x=Number(v.weight);return Number.isFinite(x)?x:0}
function advice(ex,last){if(!last)return 'Primera sesión: usa una carga con la que completes el objetivo dejando RIR 1–2.';const v=last[1],ok=(v.reps||[]).length===ex[1]&&(v.reps||[]).every(r=>Number(r)>=ex[2])&&Number(v.rir||0)>=1;return ok?'✓ Objetivo completado: prueba el siguiente incremento de peso disponible.':'→ Mantén la carga hasta completar todas las series con buena técnica y RIR 1–2.'}
let timerInt=null;
let activeTimer=null;
function timerText(t){return `${Math.floor(Math.max(0,t)/60)}:${String(Math.max(0,t)%60).padStart(2,'0')}`}
function timerDraw(){if(!activeTimer)return;const el=document.getElementById(activeTimer.id);if(el)el.textContent=`⏱ ${timerText(activeTimer.remaining)} · descansado ${timerText(activeTimer.elapsed)}`;const p=document.querySelector(`[data-tpause=\"${activeTimer.i}\"]`);if(p)p.textContent=activeTimer.paused?'▶ Reanudar':'⏸ Pausa'}
function storeRestElapsed(){if(!activeTimer||activeTimer.saved)return;const {date,day,name,setIndex,elapsed}=activeTimer;if(date&&name&&Number.isInteger(setIndex)){const e=allExercises(day,date).find(x=>x[0]===name);if(e){const st=exerciseState(date,day,name,e[1],e[2]);st.rests=Array.isArray(st.rests)?st.rests:Array(e[1]).fill(null);st.rests[setIndex]=elapsed;storeExercise(date,day,name,st)}}activeTimer.saved=true}
function stopTimer(label=''){if(activeTimer){storeRestElapsed();const el=document.getElementById(activeTimer.id);if(el&&label)el.textContent=label}clearInterval(timerInt);timerInt=null;activeTimer=null}
function startTimer(sec,id,i,date,day,name,setIndex){stopTimer();activeTimer={remaining:sec,elapsed:0,paused:false,id,i,date,day,name,setIndex,saved:false};timerDraw();timerInt=setInterval(()=>{if(!activeTimer||activeTimer.paused)return;activeTimer.remaining--;activeTimer.elapsed++;timerDraw();if(activeTimer.remaining<=0){const el=document.getElementById(activeTimer.id);storeRestElapsed();clearInterval(timerInt);timerInt=null;if(el)el.textContent=`✓ Descanso terminado · ${timerText(activeTimer.elapsed)}`;navigator.vibrate?.(250);activeTimer=null}},1000)}
function adjustTimer(delta){if(!activeTimer)return;activeTimer.remaining=Math.max(0,activeTimer.remaining+delta);timerDraw();if(activeTimer.remaining===0)stopTimer('✓ Listo para la siguiente serie')}
function togglePause(){if(!activeTimer)return;activeTimer.paused=!activeTimer.paused;timerDraw()}
function exerciseState(date,day,name,sets,target){const h=load(),saved=h?.[date]?.ex?.[name];if(saved){sets=Math.max(sets,Number(saved.extraSets||0)+sets);return {...saved,weights:weightArray(saved,sets),reps:Array.from({length:sets},(_,i)=>saved.reps?.[i]??target),done:Array.from({length:sets},(_,i)=>!!saved.done?.[i]),rests:Array.from({length:sets},(_,i)=>saved.rests?.[i]??null)};}const last=lastFor(name),base=last?.[1];return {weights:weightArray(base,sets),reps:Array(sets).fill(target),done:Array(sets).fill(false),rests:Array(sets).fill(null),rir:'',completed:false}}
function storeExercise(date,day,name,state){const h=load();if(!h[date])h[date]={day,ex:{}};h[date].day=day;h[date].ex[name]=state;save(h)}
function sessionProgress(day,date){const exs=allExercises(day,date),h=load(),s=h?.[date]?.ex||{};const done=exs.filter(e=>s[e[0]]?.completed).length;return {done,total:exs.length}}
function renderToday(day=selected){selected=day;const r=ROUTINE[day],date=iso(),exs=orderedExercises(day,date),prog=sessionProgress(day,date);setTitle('Hoy');let html=`<section class='hero'><div class='eyebrow'>${day.toUpperCase()}</div><h2>${r.name}</h2><p>${r.nutrition}</p><div class='sessionbar'><span>${prog.done}/${prog.total} ejercicios guardados</span><i style='width:${prog.total?Math.round(prog.done/prog.total*100):0}%'></i></div></section>`;
 if(!exs.length){html+=`<div class='card'><b>Día de descanso.</b><p class='muted'>Recuperación, paseo o LISS suave si corresponde.</p></div>`}
 const notes=loadNotes();
 exs.forEach((e,i)=>{const [name,baseSets,reps,baseRest]=e,sets=baseSets+Math.max(0,Number(load()?.[date]?.ex?.[name]?.extraSets||0)),rest=restFor(name,baseRest),last=lastFor(name),cur=exerciseState(date,day,name,sets,reps),tech=TECHNIQUE[name]||loadCatalog()[name]||'Prioriza técnica estable, recorrido cómodo y control de la fase de bajada.';html+=`<div class='exercise ${cur.completed?'completed':''}' data-ex='${i}'><div class='exhead'><div><h3>${safeText(name)}</h3><div class='target'>Objetivo · ${sets} × ${reps}${name==='Pallof press'?' por lado':''} · RIR ${safeText(JSON.parse(localStorage.getItem('jcTrainingSuggestedRirV1')||'{}')[name]||'1–2')}</div></div>${cur.completed?'<span class="badge">HECHO</span>':''}</div>${name==='Curl femoral'?`<div class='variantbox'><label for='femoralVariant${i}'>Variante de hoy</label><select id='femoralVariant${i}' data-femoral='${i}'><option value='sentado' ${cur.variant!=='tumbado'?'selected':''}>Sentado (preferente)</option><option value='tumbado' ${cur.variant==='tumbado'?'selected':''}>Tumbado</option></select><small class='muted'>Se guarda con la sesión. Consulta «💡 Técnica» para ambas variantes.</small></div>`:''}<div class='restline'><span class='muted'>Descanso habitual ${Math.floor(rest/60)}:${String(rest%60).padStart(2,'0')}</span><button class='tinyrest' data-restedit='${i}'>⚙️ Cambiar</button></div><div class='movebar'><button data-moveup='${i}' ${i===0?'disabled':''}>↑ Antes</button><button data-movedown='${i}' ${i===exs.length-1?'disabled':''}>↓ Después</button><button data-movelast='${i}' ${i===exs.length-1?'disabled':''}>↧ Al final</button></div><details class='tech'><summary>💡 Técnica</summary><p>${safeText(tech)}</p></details><div class='notesbox'><label>📝 Mis notas <span>se guardan para próximas semanas</span></label><textarea data-note='${i}' placeholder='Ej.: asiento 4, agarre neutro, 12 kg demasiado...'>${(notes[name]||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</textarea></div>${last?`<div class='hist'>Anterior: <b>${displayWeights(last[1])} kg</b> · ${(last[1].reps||[]).join('/')||'-'} · RIR ${last[1].rir||'-'}</div>`:''}<div class='series'><div class='serieslabels'><span>Serie</span><span>Peso kg</span><span>Reps</span><span></span></div>${Array.from({length:sets},(_,ss)=>`<div class='seriesrow ${cur.done[ss]?'seriesdone':''}'><b>S${ss+1}</b><input class='seriesinput' inputmode='decimal' data-weight='${i}:${ss}' value='${cur.weights[ss]??''}' placeholder='kg'><input class='seriesinput' inputmode='numeric' data-rep='${i}:${ss}' value='${cur.reps[ss]}'><button data-setdone='${i}:${ss}' class='setbtn'>${cur.done[ss]?'✓':'Hecha'}</button></div>`).join('')}<div class='seriesactions'><button class='secondary' data-addset='${i}'>＋ Añadir serie</button><button class='secondary' data-removeset='${i}' ${sets<=baseSets?'disabled':''}>− Quitar última serie</button></div></div><div class='row finishrow'><label>RIR final <input inputmode='numeric' data-rir='${i}' value='${cur.rir}' placeholder='1–2'></label><button data-timer='${i}' class='secondary'>⏱ Iniciar descanso</button></div><div class='timerpanel'><span class='timer' id='timer${i}'>Descanso preparado: ${Math.floor(rest/60)}:${String(rest%60).padStart(2,'0')}</span><div class='timercontrols'><button data-tminus='${i}'>−30 s</button><button data-tpause='${i}'>⏸ Pausa</button><button data-tplus='${i}'>+30 s</button><button data-tnext='${i}' class='nextset'>▶ Siguiente serie</button></div></div><button data-saveex='${i}' class='primary wide'>Guardar ejercicio</button><div class='advice'>${advice(e,last)}</div></div>`});document.getElementById('app').innerHTML=html;bind(day,date,exs)}
function bind(day,date,exs=orderedExercises(day,date)){function getState(i){const e=exs[i];return exerciseState(date,day,e[0],e[1],e[2])}function put(i,st){storeExercise(date,day,exs[i][0],st)}
 document.querySelectorAll('[data-femoral]').forEach(x=>x.onchange=()=>{const i=Number(x.dataset.femoral),st=getState(i);st.variant=x.value;put(i,st)});
 document.querySelectorAll('[data-addset]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.addset),st=getState(i);if(st.weights.length>=20){alert('Máximo 20 series por ejercicio.');return}st.extraSets=Number(st.extraSets||0)+1;st.weights.push(st.weights.at(-1)??'');st.reps.push(exs[i][2]);st.done.push(false);st.rests.push(null);st.completed=false;put(i,st);renderToday(day)});
 document.querySelectorAll('[data-removeset]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.removeset),st=getState(i);if(!st.extraSets)return;const n=st.weights.length-1;if(st.done[n]&&!confirm('La última serie está marcada como hecha. ¿Quieres quitarla de esta sesión?'))return;st.extraSets--;st.weights.pop();st.reps.pop();st.done.pop();st.rests.pop();st.completed=false;put(i,st);renderToday(day)});
 document.querySelectorAll('[data-weight]').forEach(x=>x.onchange=()=>{const [i,s]=x.dataset.weight.split(':').map(Number),st=getState(i);st.weights[s]=x.value;if(s===0){for(let j=1;j<st.weights.length;j++){if(!String(st.weights[j]??'').trim()){st.weights[j]=x.value;const other=document.querySelector(`[data-weight=\"${i}:${j}\"]`);if(other)other.value=x.value}}}put(i,st)});
 document.querySelectorAll('[data-rir]').forEach(x=>x.onchange=()=>{const i=Number(x.dataset.rir),st=getState(i);st.rir=x.value;put(i,st)});
 document.querySelectorAll('[data-rep]').forEach(x=>x.onchange=()=>{const [i,s]=x.dataset.rep.split(':').map(Number),st=getState(i);st.reps[s]=x.value;put(i,st)});
 document.querySelectorAll('[data-setdone]').forEach(x=>x.onclick=()=>{const [i,s]=x.dataset.setdone.split(':').map(Number),e=exs[i],st=getState(i);if(!String(st.weights[s]??'').trim()){alert('Introduce el peso de esta serie.');return}st.done[s]=!st.done[s];if(st.done[s]&&!st.reps[s])st.reps[s]=e[2];put(i,st);x.textContent=st.done[s]?'✓':'Hecha';x.closest('.seriesrow')?.classList.toggle('seriesdone',st.done[s]);if(st.done[s])startTimer(restFor(e[0],e[3]),`timer${i}`,i,date,day,e[0],s)});
 document.querySelectorAll('[data-timer]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.timer),e=exs[i];startTimer(restFor(e[0],e[3]),`timer${i}`,i,date,day,e[0],-1)});
 document.querySelectorAll('[data-tminus]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.tminus);if(activeTimer?.i!==i){const e=exs[i];startTimer(restFor(e[0],e[3]),`timer${i}`,i,date,day,e[0],-1)}adjustTimer(-30)});
 document.querySelectorAll('[data-tplus]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.tplus);if(activeTimer?.i!==i){const e=exs[i];startTimer(restFor(e[0],e[3]),`timer${i}`,i,date,day,e[0],-1)}adjustTimer(30)});
 document.querySelectorAll('[data-tpause]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.tpause);if(activeTimer?.i===i)togglePause()});
 document.querySelectorAll('[data-tnext]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.tnext);if(activeTimer?.i===i)stopTimer('▶ Descanso finalizado antes · listo para la siguiente serie')});
 document.querySelectorAll('[data-restedit]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.restedit),e=exs[i],cur=restFor(e[0],e[3]);const v=prompt('Descanso habitual en segundos (mínimo 30)',String(cur));if(v===null)return;const n=Math.round(Number(v));if(!Number.isFinite(n)||n<30){alert('Introduce al menos 30 segundos.');return}saveRest(e[0],n);renderToday(day)});
 document.querySelectorAll('[data-saveex]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.saveex),e=exs[i],st=getState(i);if(st.weights.some(v=>!String(v??'').trim())){alert('Introduce el peso de todas las series.');return}if(st.reps.some(v=>!String(v??'').trim())){alert('Completa las repeticiones de todas las series.');return}if(!String(st.rir).trim()){alert('Introduce el RIR final.');return}st.completed=true;st.done=Array(st.weights.length).fill(true);put(i,st);renderToday(day)});
 document.querySelectorAll('[data-note]').forEach(x=>{x.oninput=()=>{const i=Number(x.dataset.note);saveNote(exs[i][0],x.value)}});
 const move=(i,to)=>{const arr=exs.slice(),item=arr.splice(i,1)[0];arr.splice(to,0,item);saveOrder(day,date,arr);renderToday(day)};
 document.querySelectorAll('[data-moveup]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.moveup);if(i>0)move(i,i-1)});
 document.querySelectorAll('[data-movedown]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.movedown);if(i<exs.length-1)move(i,i+1)});
 document.querySelectorAll('[data-movelast]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.movelast);if(i<exs.length-1)move(i,exs.length-1)});
}
function renderWeek(){setTitle('Semana');document.getElementById('app').innerHTML=`<div class='card'><div class='section-title'><h2>Semana</h2><span>elige día</span></div><div class='daygrid'>${Object.entries(ROUTINE).map(([d,r])=>`<button class='daybtn ${d===selected?'active':''}' data-day='${d}'>${d}: ${r.name}</button>`).join('')}</div></div><div id='day'></div>`;document.querySelectorAll('[data-day]').forEach(b=>b.onclick=()=>{selected=b.dataset.day;renderWeek()});renderDayPreview()}
function renderDayPreview(){
 const r=ROUTINE[selected],el=document.getElementById('day'),date=weekDate(selected),exs=allExercises(selected,date);
 const custom=loadCustom()[selected]||[],once=loadOneOff()?.[date]?.[selected]||[];
 el.innerHTML=`<div class='card'><div class='section-title'><h2>${r.name}</h2><span>${r.nutrition}</span></div>
 ${exs.map(e=>{const scope=custom.some(x=>x[0]===e[0])?'always':once.some(x=>x[0]===e[0])?'once':'';return `<div class='weekex'><div><b>${safeText(e[0])}</b><div class='muted'>${e[1]} × ${e[2]} · ${e[3]} s descanso${e[0]==='Pallof press'?' · por lado':''}</div></div>${scope?`<button class='tinyrest' data-remove='${safeText(e[0])}' data-scope='${scope}'>Eliminar</button>`:''}</div>`}).join('')||'<p class="muted">Descanso</p>'}
 <button id='addExercise' class='secondary wide'>＋ Añadir ejercicio</button>
 <div id='addPanel'></div>
 <button id='trainSelected' class='primary wide'>Registrar este entrenamiento</button></div>`;
 document.getElementById('trainSelected').onclick=()=>{view='today';renderToday(selected);syncNav()};
 document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{if(!confirm('¿Eliminar este ejercicio de la planificación? Los registros ya guardados no se borrarán.'))return;removeExercise(selected,b.dataset.remove,b.dataset.scope,date);renderDayPreview()});
 document.getElementById('addExercise').onclick=()=>showAddForm(date);
}
function showAddForm(date){
 const panel=document.getElementById('addPanel');
 const names=[...new Set([...Object.values(ROUTINE).flatMap(r=>r.ex.map(e=>e[0])),...Object.keys(TECHNIQUE),...Object.keys(loadCatalog())])].sort((a,b)=>a.localeCompare(b,'es'));
 panel.innerHTML=`<form id='exerciseForm' class='addform'><h3>Nuevo ejercicio · ${selected}</h3>
 <label>Elegir del catálogo<select id='exCatalog'><option value=''>Crear ejercicio nuevo…</option>${names.map(n=>`<option value='${safeText(n)}'>${safeText(n)}</option>`).join('')}</select></label>
 <label>Nombre del ejercicio<input id='exName' maxlength='90' required placeholder='Ej.: Pallof press'></label>
 <div class='addgrid'><label>Series<input id='exSets' type='number' min='1' max='12' value='3' required></label><label>Reps (por lado si procede)<input id='exReps' type='number' min='1' max='50' value='12' required></label><label>Descanso (seg.)<input id='exRest' type='number' min='30' max='600' step='5' value='90' required></label></div>
 <label>RIR recomendado<input id='exRir' value='1–2' maxlength='12'></label>
 <label>Técnica / indicaciones<textarea id='exTech' rows='4' placeholder='Cómo realizarlo correctamente'></textarea></label>
 <label>Aplicar a<select id='exScope'><option value='always'>Todas las semanas</option><option value='once'>Solo esta semana</option></select></label>
 <div class='row'><button type='submit' class='primary'>Guardar ejercicio</button><button type='button' id='cancelAdd' class='secondary'>Cancelar</button></div></form>`;
 document.getElementById('cancelAdd').onclick=()=>panel.innerHTML='';
 document.getElementById('exCatalog').onchange=e=>{const n=e.target.value;document.getElementById('exName').value=n;document.getElementById('exTech').value=TECHNIQUE[n]||loadCatalog()[n]||''};
 document.getElementById('exerciseForm').onsubmit=e=>{e.preventDefault();const name=document.getElementById('exName').value.trim(),sets=Number(document.getElementById('exSets').value),reps=Number(document.getElementById('exReps').value),rest=Number(document.getElementById('exRest').value),scope=document.getElementById('exScope').value,tech=document.getElementById('exTech').value.trim(),rir=document.getElementById('exRir').value.trim();if(!name||sets<1||sets>12||reps<1||reps>50||rest<30||rest>600){alert('Comprueba nombre, series, repeticiones y descanso.');return}if(!addExercise(selected,[name,sets,reps,rest],scope,date,tech)){alert('Este ejercicio ya figura en el día seleccionado.');return}if(rir){const cat=JSON.parse(localStorage.getItem('jcTrainingSuggestedRirV1')||'{}');cat[name]=rir;localStorage.setItem('jcTrainingSuggestedRirV1',JSON.stringify(cat))}renderDayPreview()};
}
function renderHistory(){setTitle('Historial');const h=load(),dates=Object.keys(h).sort().reverse();document.getElementById('app').innerHTML=`<div class='card'><div class='section-title'><h2>Historial</h2><span>${dates.length} días</span></div>${dates.length?dates.map(d=>`<div class='hist block'><b>${d} · ${h[d].day}</b>${Object.entries(h[d].ex||{}).filter(([,v])=>v.completed).map(([n,v])=>`<div>${n}: ${displayWeights(v)} kg · ${(v.reps||[]).join('/')} · RIR ${v.rir||'-'}</div>`).join('')}</div>`).join(''):'<p class="muted">Todavía no hay entrenamientos guardados.</p>'}</div>`}
function renderProgress(){setTitle('Progreso');const names=[...new Set([...Object.keys(TECHNIQUE),...Object.values(ROUTINE).flatMap(d=>d.ex.map(e=>e[0])),...Object.values(loadCustom()).flatMap(a=>a.map(e=>e[0])),...Object.values(loadOneOff()).flatMap(v=>Object.values(v).flatMap(a=>a.map(e=>e[0])))])];const cards=names.map(n=>{const a=allFor(n);if(!a.length)return'';const last=a[a.length-1],first=a[0],delta=topWeight(last[1])-topWeight(first[1]),recent=a.slice(-6).reverse();return `<div class='card'><div class='exhead'><h3>${n}</h3><span class='badge'>${topWeight(last[1])||'-'} kg</span></div><p class='muted'>Cambio desde el primer registro: ${delta>0?'+':''}${delta.toFixed(1)} kg</p>${recent.map(([d,v])=>`<div class='progressrow'><span>${d}</span><b>${displayWeights(v)} kg · ${(v.reps||[]).join('/')}</b></div>`).join('')}</div>`}).join('');document.getElementById('app').innerHTML=`<section class='hero'><div class='eyebrow'>EVOLUCIÓN</div><h2>Progreso</h2><p>Cargas y repeticiones por ejercicio</p></section>${cards||'<div class="card"><p class="muted">Guarda tu primer entrenamiento para ver la evolución.</p></div>'}`}
function setTitle(t){const el=document.getElementById('pageTitle');if(el)el.textContent=t}
function syncNav(){document.querySelectorAll('nav button[data-v]').forEach(b=>b.classList.toggle('active',b.dataset.v===view))}
function render(){if(view==='today'){selected=days[new Date().getDay()];renderToday(selected)}else if(view==='week')renderWeek();else if(view==='history')renderHistory();else if(view==='progress')renderProgress();syncNav()}
document.querySelectorAll('nav button[data-v]').forEach(b=>b.onclick=()=>{view=b.dataset.v;render()});
const NUTRITION_URL='https://joaquincabral-wq.github.io/Nutrition/';
const nutritionBtn=document.getElementById('openNutrition');if(nutritionBtn)nutritionBtn.onclick=()=>{window.location.href=NUTRITION_URL};
render();
