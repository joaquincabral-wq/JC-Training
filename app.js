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

const EXTRA_CATALOG=[
 ['Rueda abdominal',3,10,90,'Core'],
 ['Gemelos',3,15,90,'Gemelos'],
 ['Curl martillo',2,12,90,'Bíceps/antebrazo'],
 ['Tríceps cuerda',2,12,90,'Tríceps'],
 ['Face pull',2,15,90,'Hombro posterior'],
 ['Pullover polea/mancuerna',2,12,90,'Dorsal'],
 ['Aperturas peck-deck/polea',2,15,90,'Pecho'],
 ['Elevaciones laterales',2,15,90,'Hombro lateral'],
 ['Curl bíceps',2,10,90,'Bíceps'],
 ['Tríceps sobre cabeza',2,12,90,'Tríceps']
];
const EXTRA_RECOMMENDATIONS={
 lunes:[['Rueda abdominal',3,10,90,'Añade core sin seguir cargando pecho, hombro y tríceps, que ya llevan bastante volumen.'],['Face pull',2,15,90,'Extra ligero de salud escapular si te notas fresco.']],
 martes:[['Curl martillo',2,12,90,'Pequeño extra de bíceps/antebrazo si aún tienes tiempo y mantienes buena técnica.'],['Gemelos',3,15,90,'Suma volumen a un grupo con poca interferencia con el Pull.']],
 miércoles:[['Curl bíceps',2,10,90,'Extra corto de brazo sin añadir más fatiga a las piernas.'],['Tríceps cuerda',2,12,90,'Alternativa corta de brazo si te queda tiempo.']],
 jueves:[['Gemelos',3,15,90,'Aumenta el volumen semanal de gemelo sin cargar más el torso.'],['Rueda abdominal',3,10,90,'Core extra con poca interferencia sobre el Upper.']],
 viernes:[['Pullover polea/mancuerna',2,12,90,'Recordatorio ligero de dorsal sin añadir otra sesión pesada de espalda.'],['Aperturas peck-deck/polea',2,15,90,'Dos series suaves de pecho si te encuentras recuperado.']]
};

const SUBSTITUTE_KEY='jcTrainingSessionSubstitutionsV1';
const ALTERNATIVES={
 'Press inclinado mancuernas':[['Press inclinado/convergente',4,8,150,'Muy similar en patrón y estímulo de pecho superior.'],['Press convergente máquina',4,8,150,'Más estable si no hay banco/mancuernas libres.'],['Press plano mancuernas',4,8,150,'Alternativa válida si no puedes inclinar el banco.']],
 'Press convergente máquina':[['Press inclinado mancuernas',3,10,150,'Sustitución libre y muy cercana.'],['Press plano mancuernas',3,10,150,'Buena alternativa si la máquina está ocupada.'],['Aperturas peck-deck/polea',3,12,90,'Menos equivalente; úsala solo si no hay otra opción de press.']],
 'Press militar máquina/Smith':[['Press hombro mancuernas sentado',3,8,120,'Mismo patrón vertical con material simple.'],['Press hombro mancuernas',3,8,120,'Alternativa directa si no hay máquina/Smith.']],
 'Elevaciones laterales':[['Elevación lateral en polea',4,12,90,'Muy buena alternativa, tensión continua.'],['Elevaciones laterales sentado',4,12,90,'Reduce balanceo si hay banco libre.']],
 'Aperturas peck-deck/polea':[['Aperturas con mancuernas',2,15,90,'Alternativa simple con banco y mancuernas.'],['Cruce de poleas',2,15,90,'Muy similar si hay poleas disponibles.']],
 'Tríceps polea':[['Tríceps cuerda',3,10,120,'Cambio directo de agarre/estación.'],['Extensión tríceps sobre cabeza mancuerna',3,10,120,'Útil si no hay polea disponible.']],
 'Tríceps sobre cabeza':[['Extensión tríceps sobre cabeza mancuerna',3,12,120,'Alternativa directa con mancuerna.'],['Tríceps cuerda por encima cabeza',3,12,120,'Mismo énfasis con polea.']],
 'Jalón pronado abierto':[['Jalón neutro/cerrado',4,8,150,'Mismo patrón vertical; cambia el agarre.'],['Jalón',4,8,150,'Alternativa directa si solo hay una barra disponible.'],['Dominadas asistidas',4,8,150,'Excelente si existe máquina de asistencia.']],
 'Remo con pecho apoyado':[['Remo máquina/polea',4,10,150,'Muy similar y estable.'],['Remo con mancuerna apoyado',4,10,120,'Alternativa excelente si la máquina está ocupada.'],['Remo sentado polea',4,10,150,'Mismo patrón horizontal.']],
 'Jalón neutro/cerrado':[['Jalón pronado abierto',3,10,150,'Mismo patrón vertical.'],['Jalón',3,10,150,'Opción práctica si hay pocos agarres.']],
 'Jalón brazos rectos':[['Pullover polea/mancuerna',2,12,90,'Mismo patrón de extensión de hombro.'],['Pullover mancuerna',2,12,90,'Alternativa sin polea.']],
 'Reverse peck-deck':[['Pájaros con mancuernas',4,15,90,'Alternativa directa para deltoide posterior.'],['Face pull',4,15,90,'Muy buena opción si hay cuerda.'],['Apertura inversa en polea',4,15,90,'Mismo objetivo con polea.']],
 'Curl inclinado':[['Curl bíceps',3,10,120,'Alternativa directa.'],['Curl alterno mancuernas',3,10,120,'Fácil de ejecutar con poco material.']],
 'Curl Scott':[['Curl bíceps',3,12,120,'Alternativa directa si no hay banco Scott.'],['Curl inclinado',3,12,120,'Mantiene trabajo de bíceps con mancuerna.']],
 'Hack / prensa':[['Prensa',4,8,150,'Alternativa principal si no hay hack.'],['Búlgara',4,10,150,'Muy útil si no hay máquinas de pierna.'],['Sentadilla goblet',4,12,120,'Opción de viaje con una mancuerna.']],
 'Prensa':[['Hack / prensa',3,10,150,'Cambio directo de máquina.'],['Búlgara',3,10,150,'Gran alternativa unilateral.'],['Sentadilla goblet',3,12,120,'Buena si no hay máquinas.']],
 'Búlgara':[['Zancada atrás mancuernas',3,10,150,'Muy similar unilateral.'],['Sentadilla goblet',3,12,120,'Alternativa estable con poco material.'],['Prensa unilateral',3,10,150,'Excelente si hay prensa disponible.']],
 'Extensión cuádriceps':[['Sentadilla sissy asistida',3,12,90,'Aislamiento de cuádriceps sin máquina.'],['Step-up',3,12,120,'Alternativa más global si no hay extensión.']],
 'Curl femoral':[['Peso muerto rumano mancuernas',3,10,150,'Trabaja cadena posterior; no idéntico, pero útil sin máquina.'],['Curl femoral fitball',3,12,90,'Muy buena alternativa si hay fitball.'],['Pull-through polea',3,12,90,'Alternativa de cadena posterior con polea baja.']],
 'Hip thrust':[['Puente glúteo mancuerna',3,10,150,'Alternativa directa con banco/mancuerna.'],['Pull-through polea',3,12,90,'Buena alternativa con menor montaje.']],
 'Gemelos':[['Gemelos de pie con mancuernas',4,15,90,'Alternativa directa.'],['Gemelo unilateral escalón',4,15,90,'Útil sin máquina.']],
 'Rueda abdominal':[['Plancha',4,45,60,'Alternativa estable de core.'],['Crunch polea',4,12,90,'Buena opción si hay polea.']],
 'Press plano mancuernas':[['Press convergente máquina',4,8,150,'Alternativa estable de empuje horizontal.'],['Press inclinado mancuernas',4,8,150,'Muy cercana si no hay banco plano.']],
 'Jalón':[['Jalón neutro/cerrado',3,10,150,'Mismo patrón vertical.'],['Jalón pronado abierto',3,10,150,'Mismo patrón, agarre distinto.']],
 'Press inclinado/convergente':[['Press inclinado mancuernas',3,10,150,'Sustitución muy directa.'],['Press convergente máquina',3,10,150,'Alternativa estable.']],
 'Remo máquina/polea':[['Remo con pecho apoyado',4,10,150,'Muy similar y estable.'],['Remo con mancuerna apoyado',4,10,120,'Gran opción si la estación está ocupada.']],
 'Curl bíceps':[['Curl inclinado',3,10,120,'Alternativa directa.'],['Curl martillo',3,10,120,'Cambia algo el énfasis, pero mantiene flexión de codo.']],
 'Curl martillo':[['Curl bíceps',3,12,120,'Alternativa directa de bíceps.'],['Curl alterno neutro',3,12,120,'Mismo patrón con mancuernas.']],
 'Tríceps cuerda':[['Tríceps polea',3,12,120,'Alternativa directa.'],['Extensión tríceps sobre cabeza mancuerna',3,12,120,'Buena opción sin polea.']]
};
const GENERIC_ALT=[['Otro ejercicio equivalente',3,10,120,'Elige una alternativa que trabaje el mismo patrón/músculo.']];
function loadSubs(){return JSON.parse(localStorage.getItem(SUBSTITUTE_KEY)||'{}')}
function subsFor(day,date){return loadSubs()?.[date]?.[day]||{}}
function setSub(day,date,original,repl){const all=loadSubs();if(!all[date])all[date]={};if(!all[date][day])all[date][day]={};all[date][day][original]=repl;localStorage.setItem(SUBSTITUTE_KEY,JSON.stringify(all))}
function clearSub(day,date,original){const all=loadSubs();if(all?.[date]?.[day]){delete all[date][day][original];localStorage.setItem(SUBSTITUTE_KEY,JSON.stringify(all))}}
function applySubs(day,date,base){const ss=subsFor(day,date);return base.map(e=>{const x=ss[e[0]];if(!x)return e;return [x[0],x[1]||e[1],x[2]||e[2],x[3]||e[3],e[4],e[0]]})}

const SESSION_EXTRAS_KEY='jcTrainingSessionExtrasV1';
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
const loadSessionExtras=()=>JSON.parse(localStorage.getItem(SESSION_EXTRAS_KEY)||'{}');
function extrasFor(day,date){return loadSessionExtras()?.[date]?.[day]||[]}
function addSessionExtra(day,date,ex){const all=loadSessionExtras();if(!all[date])all[date]={};if(!all[date][day])all[date][day]=[];if(all[date][day].some(x=>x[0]===ex[0])||ROUTINE[day].ex.some(x=>x[0]===ex[0]))return false;all[date][day].push([...ex.slice(0,4),'extra']);localStorage.setItem(SESSION_EXTRAS_KEY,JSON.stringify(all));return true}
function removeSessionExtra(day,date,name){const all=loadSessionExtras();if(all?.[date]?.[day]){all[date][day]=all[date][day].filter(x=>x[0]!==name);localStorage.setItem(SESSION_EXTRAS_KEY,JSON.stringify(all))}const o=loadOrders();if(o?.[date]?.[day]){o[date][day]=o[date][day].filter(n=>n!==name);localStorage.setItem(ORDER_KEY,JSON.stringify(o))}}
function orderedExercises(day,date){const raw=[...ROUTINE[day].ex,...extrasFor(day,date)],base=applySubs(day,date,raw),orders=loadOrders(),names=orders?.[date]?.[day];if(!Array.isArray(names))return base.slice();const map=new Map(base.map(e=>[e[0],e]));const out=names.map(n=>map.get(n)).filter(Boolean);base.forEach(e=>{if(!out.some(x=>x[0]===e[0]))out.push(e)});return out}
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
function storeRestElapsed(){if(!activeTimer||activeTimer.saved)return;const {date,day,name,setIndex,elapsed}=activeTimer;if(date&&name&&Number.isInteger(setIndex)){const e=orderedExercises(day,date).find(x=>x[0]===name);if(e){const st=exerciseState(date,day,name,e[1],e[2]);st.rests=Array.isArray(st.rests)?st.rests:Array(e[1]).fill(null);st.rests[setIndex]=elapsed;storeExercise(date,day,name,st)}}activeTimer.saved=true}
function stopTimer(label=''){if(activeTimer){storeRestElapsed();const el=document.getElementById(activeTimer.id);if(el&&label)el.textContent=label}clearInterval(timerInt);timerInt=null;activeTimer=null}
function startTimer(sec,id,i,date,day,name,setIndex){stopTimer();activeTimer={remaining:sec,elapsed:0,paused:false,id,i,date,day,name,setIndex,saved:false};timerDraw();timerInt=setInterval(()=>{if(!activeTimer||activeTimer.paused)return;activeTimer.remaining--;activeTimer.elapsed++;timerDraw();if(activeTimer.remaining<=0){const el=document.getElementById(activeTimer.id);storeRestElapsed();clearInterval(timerInt);timerInt=null;if(el)el.textContent=`✓ Descanso terminado · ${timerText(activeTimer.elapsed)}`;navigator.vibrate?.(250);activeTimer=null}},1000)}
function adjustTimer(delta){if(!activeTimer)return;activeTimer.remaining=Math.max(0,activeTimer.remaining+delta);timerDraw();if(activeTimer.remaining===0)stopTimer('✓ Listo para la siguiente serie')}
function togglePause(){if(!activeTimer)return;activeTimer.paused=!activeTimer.paused;timerDraw()}
function exerciseState(date,day,name,sets,target){const h=load(),saved=h?.[date]?.ex?.[name];if(saved)return {...saved,weights:weightArray(saved,sets),reps:Array.from({length:sets},(_,i)=>saved.reps?.[i]??target),done:Array.from({length:sets},(_,i)=>!!saved.done?.[i]),rests:Array.from({length:sets},(_,i)=>saved.rests?.[i]??null)};const last=lastFor(name),base=last?.[1];return {weights:weightArray(base,sets),reps:Array(sets).fill(target),done:Array(sets).fill(false),rests:Array(sets).fill(null),rir:'',completed:false}}
function storeExercise(date,day,name,state){const h=load();if(!h[date])h[date]={day,ex:{}};h[date].day=day;h[date].ex[name]=state;save(h)}
function sessionProgress(day,date){const exs=orderedExercises(day,date),h=load(),s=h?.[date]?.ex||{};const done=exs.filter(e=>s[e[0]]?.completed).length;return {done,total:exs.length}}
function renderToday(day=selected){selected=day;const r=ROUTINE[day],date=iso(),exs=orderedExercises(day,date),prog=sessionProgress(day,date);setTitle('Hoy');let html=`<section class='hero'><div class='eyebrow'>${day.toUpperCase()}</div><h2>${r.name}</h2><p>${r.nutrition}</p><div class='sessionbar'><span>${prog.done}/${prog.total} ejercicios guardados</span><i style='width:${prog.total?Math.round(prog.done/prog.total*100):0}%'></i></div></section>`;
 if(!exs.length){html+=`<div class='card'><b>Día de descanso.</b><p class='muted'>Recuperación, paseo o LISS suave si corresponde.</p></div>`}
 const notes=loadNotes();
 exs.forEach((e,i)=>{const [name,sets,reps,baseRest]=e,rest=restFor(name,baseRest),last=lastFor(name),cur=exerciseState(date,day,name,sets,reps),tech=TECHNIQUE[name]||'Prioriza técnica estable, recorrido cómodo y control de la fase de bajada.';html+=`<div class='exercise ${cur.completed?'completed':''}' data-ex='${i}'><div class='exhead'><div><h3>${name}</h3><div class='target'>Objetivo · ${sets} × ${reps}${e[4]==='extra'?' · EXTRA':''}</div></div><div class='exbadges'>${e[4]==='extra'?'<span class="badge extra">EXTRA</span>':''}${cur.completed?'<span class="badge">HECHO</span>':''}</div></div>${e[4]==='extra'?`<button class='removeextra' data-removeextra='${i}'>Eliminar extra de hoy</button>`:''}<div class='restline'><span class='muted'>Descanso habitual ${Math.floor(rest/60)}:${String(rest%60).padStart(2,'0')}</span><button class='tinyrest' data-restedit='${i}'>⚙️ Cambiar</button></div><div class='movebar'><button data-moveup='${i}' ${i===0?'disabled':''}>↑ Antes</button><button data-movedown='${i}' ${i===exs.length-1?'disabled':''}>↓ Después</button><button data-movelast='${i}' ${i===exs.length-1?'disabled':''}>↧ Al final</button><button class='swapbtn' data-swap='${i}'>🔄 Sustituir</button>${e[5]?`<button class='swaprestore' data-swaprestore='${i}'>↩ ${e[5]}</button>`:''}</div>${e[5]?`<div class='subnote'>Sustitución solo para hoy · original: <b>${e[5]}</b></div>`:''}<details class='tech'><summary>💡 Técnica</summary><p>${tech}</p></details><div class='notesbox'><label>📝 Mis notas <span>se guardan para próximas semanas</span></label><textarea data-note='${i}' placeholder='Ej.: asiento 4, agarre neutro, 12 kg demasiado...'>${(notes[name]||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</textarea></div>${last?`<div class='hist'>Anterior: <b>${displayWeights(last[1])} kg</b> · ${(last[1].reps||[]).join('/')||'-'} · RIR ${last[1].rir||'-'}</div>`:''}<div class='series'><div class='serieslabels'><span>Serie</span><span>Peso kg</span><span>Reps</span><span></span></div>${Array.from({length:sets},(_,ss)=>`<div class='seriesrow ${cur.done[ss]?'seriesdone':''}'><b>S${ss+1}</b><input class='seriesinput' inputmode='decimal' data-weight='${i}:${ss}' value='${cur.weights[ss]??''}' placeholder='kg'><input class='seriesinput' inputmode='numeric' data-rep='${i}:${ss}' value='${cur.reps[ss]}'><button data-setdone='${i}:${ss}' class='setbtn'>${cur.done[ss]?'✓':'Hecha'}</button></div>`).join('')}</div><div class='row finishrow'><label>RIR final <input inputmode='numeric' data-rir='${i}' value='${cur.rir}' placeholder='1–2'></label><button data-timer='${i}' class='secondary'>⏱ Iniciar descanso</button></div><div class='timerpanel'><span class='timer' id='timer${i}'>Descanso preparado: ${Math.floor(rest/60)}:${String(rest%60).padStart(2,'0')}</span><div class='timercontrols'><button data-tminus='${i}'>−30 s</button><button data-tpause='${i}'>⏸ Pausa</button><button data-tplus='${i}'>+30 s</button><button data-tnext='${i}' class='nextset'>▶ Siguiente serie</button></div></div><button data-saveex='${i}' class='primary wide'>Guardar ejercicio</button><div class='advice'>${advice(e,last)}</div></div>`});
 if(exs.length){
  html+=`<div class='card extraadd'><div class='section-title'><h2>¿Te queda tiempo?</h2><span>extra opcional</span></div><p class='muted'>Máximo 1 ejercicio extra como norma. No hace falta añadir nada si la sesión base ya ha sido buena.</p><div class='extraactions'><button id='recommendExtra' class='secondary'>💡 Recomendar qué añadir</button></div><div id='recommendBox'></div><label class='field'><span>Ejercicio</span><select id='extraSelect' class='input'><option value=''>Elige una opción…</option>${EXTRA_CATALOG.map((x,i)=>`<option value='${i}'>${x[0]} · ${x[1]}×${x[2]}</option>`).join('')}<option value='custom'>Otro ejercicio…</option></select></label><div class='extragrid'><label>Series<input id='extraSets' class='input' inputmode='numeric' value='2'></label><label>Reps<input id='extraReps' class='input' inputmode='numeric' value='12'></label><label>Descanso s<input id='extraRest' class='input' inputmode='numeric' value='90'></label></div><label class='field' id='customNameWrap' style='display:none'><span>Nombre</span><input id='extraName' class='input' placeholder='Ejercicio'></label><button id='addExtraExercise' class='primary wide'>➕ Añadir ejercicio a hoy</button></div>`;
 }
 document.getElementById('app').innerHTML=html;bind(day,date,exs);bindExtraTools(day,date,exs)}

function bindExtraTools(day,date,exs){
 const sel=document.getElementById('extraSelect'),sets=document.getElementById('extraSets'),reps=document.getElementById('extraReps'),rest=document.getElementById('extraRest'),name=document.getElementById('extraName'),wrap=document.getElementById('customNameWrap');
 if(sel)sel.onchange=()=>{if(sel.value==='custom'){wrap.style.display='block';return}wrap.style.display='none';const x=EXTRA_CATALOG[Number(sel.value)];if(x){sets.value=x[1];reps.value=x[2];rest.value=x[3]}};
 const add=(ex)=>{if(!ex[0]){alert('Indica un ejercicio.');return}if(!addSessionExtra(day,date,ex)){alert('Ese ejercicio ya está en la sesión de hoy.');return}renderToday(day)};
 const btn=document.getElementById('addExtraExercise');if(btn)btn.onclick=()=>{let nm=sel?.value==='custom'?(name?.value||'').trim():(EXTRA_CATALOG[Number(sel?.value)]?.[0]||'');const se=Math.max(1,Math.round(Number(sets?.value)||0)),rp=Math.max(1,Math.round(Number(reps?.value)||0)),rs=Math.max(30,Math.round(Number(rest?.value)||90));if(!nm){alert('Elige o escribe un ejercicio.');return}add([nm,se,rp,rs])};
 const rec=document.getElementById('recommendExtra');if(rec)rec.onclick=()=>{const pool=EXTRA_RECOMMENDATIONS[day]||[];const names=new Set(exs.map(x=>x[0]));const x=pool.find(r=>!names.has(r[0]));const box=document.getElementById('recommendBox');if(!x){box.innerHTML=`<div class='advice'>La sesión ya tiene suficiente volumen. Si te sobra tiempo, úsalo en movilidad suave o termina aquí.</div>`;return}box.innerHTML=`<div class='recommend'><b>💡 ${x[0]} · ${x[1]}×${x[2]}</b><p>${x[4]}</p><button id='acceptRecommended' class='primary'>Añadir recomendación</button></div>`;document.getElementById('acceptRecommended').onclick=()=>add(x)};
}
function bind(day,date,exs=orderedExercises(day,date)){function getState(i){const e=exs[i];return exerciseState(date,day,e[0],e[1],e[2])}function put(i,st){storeExercise(date,day,exs[i][0],st)}
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
 document.querySelectorAll('[data-saveex]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.saveex),e=exs[i],st=getState(i);if(st.weights.some(v=>!String(v??'').trim())){alert('Introduce el peso de todas las series.');return}if(st.reps.some(v=>!String(v??'').trim())){alert('Completa las repeticiones de todas las series.');return}if(!String(st.rir).trim()){alert('Introduce el RIR final.');return}st.completed=true;st.done=Array(e[1]).fill(true);put(i,st);renderToday(day)});
 document.querySelectorAll('[data-note]').forEach(x=>{x.oninput=()=>{const i=Number(x.dataset.note);saveNote(exs[i][0],x.value)}});
 const move=(i,to)=>{const arr=exs.slice(),item=arr.splice(i,1)[0];arr.splice(to,0,item);saveOrder(day,date,arr);renderToday(day)};
 document.querySelectorAll('[data-moveup]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.moveup);if(i>0)move(i,i-1)});
 document.querySelectorAll('[data-movedown]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.movedown);if(i<exs.length-1)move(i,i+1)});
 document.querySelectorAll('[data-movelast]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.movelast);if(i<exs.length-1)move(i,exs.length-1)});
 document.querySelectorAll('[data-swap]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.swap),e=exs[i],original=e[5]||e[0];openSwapModal(day,date,original,e)});
 document.querySelectorAll('[data-swaprestore]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.swaprestore),e=exs[i],original=e[5];if(original){clearSub(day,date,original);const o=loadOrders();if(o?.[date]?.[day]){o[date][day]=o[date][day].map(n=>n===e[0]?original:n);localStorage.setItem(ORDER_KEY,JSON.stringify(o))}renderToday(day)}});
 document.querySelectorAll('[data-removeextra]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.removeextra),e=exs[i];if(confirm(`¿Eliminar ${e[0]} de la sesión de hoy?`)){removeSessionExtra(day,date,e[0]);renderToday(day)}});
}

function esc(s){return String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function openSwapModal(day,date,original,current){
 const list=ALTERNATIVES[original]||ALTERNATIVES[current[0]]||GENERIC_ALT;
 const wrap=document.createElement('div');wrap.className='modal';
 wrap.innerHTML=`<div class='sheet'><div class='modalhead'><div><div class='eyebrow'>SUSTITUIR SOLO HOY</div><h2>${esc(original)}</h2></div><button id='closeSwap'>✕</button></div><p class='muted'>Si la máquina está ocupada, primero puedes mover el ejercicio. Si no está disponible, elige una alternativa equivalente. El historial se guardará con el ejercicio realmente realizado.</p><div class='altlist'>${list.map((a,i)=>`<button class='altcard' data-alt='${i}'><b>${esc(a[0])}</b><span>${a[1]}×${a[2]} · descanso ${Math.floor(a[3]/60)}:${String(a[3]%60).padStart(2,'0')}</span><small>${esc(a[4])}</small></button>`).join('')}</div><div class='customswap'><h3>Otra alternativa</h3><input id='swapName' class='input' placeholder='Nombre del ejercicio'><div class='extragrid'><label>Series<input id='swapSets' class='input' inputmode='numeric' value='${current[1]}'></label><label>Reps<input id='swapReps' class='input' inputmode='numeric' value='${current[2]}'></label><label>Descanso s<input id='swapRest' class='input' inputmode='numeric' value='${current[3]}'></label></div><button id='applyCustomSwap' class='secondary wide'>Usar alternativa manual</button></div></div>`;
 document.body.appendChild(wrap);
 const close=()=>wrap.remove();wrap.onclick=e=>{if(e.target===wrap)close()};wrap.querySelector('#closeSwap').onclick=close;
 const apply=(a)=>{if(!a||!a[0])return;const existing=orderedExercises(day,date).map(x=>x[0]);if(existing.includes(a[0])&&a[0]!==current[0]){alert('Ese ejercicio ya está en la sesión de hoy.');return}setSub(day,date,original,a.slice(0,4));const o=loadOrders();if(o?.[date]?.[day]){o[date][day]=o[date][day].map(n=>n===current[0]?a[0]:n);localStorage.setItem(ORDER_KEY,JSON.stringify(o))}close();renderToday(day)};
 wrap.querySelectorAll('[data-alt]').forEach(b=>b.onclick=()=>apply(list[Number(b.dataset.alt)]));
 wrap.querySelector('#applyCustomSwap').onclick=()=>{const nm=wrap.querySelector('#swapName').value.trim(),se=Math.max(1,Math.round(Number(wrap.querySelector('#swapSets').value)||0)),rp=Math.max(1,Math.round(Number(wrap.querySelector('#swapReps').value)||0)),rs=Math.max(30,Math.round(Number(wrap.querySelector('#swapRest').value)||90));if(!nm){alert('Escribe el nombre de la alternativa.');return}apply([nm,se,rp,rs])};
}

function renderWeek(){setTitle('Semana');document.getElementById('app').innerHTML=`<div class='card'><div class='section-title'><h2>Semana</h2><span>elige día</span></div><div class='daygrid'>${Object.entries(ROUTINE).map(([d,r])=>`<button class='daybtn ${d===selected?'active':''}' data-day='${d}'>${d}: ${r.name}</button>`).join('')}</div></div><div id='day'></div>`;document.querySelectorAll('[data-day]').forEach(b=>b.onclick=()=>{selected=b.dataset.day;renderWeek()});renderDayPreview()}
function renderDayPreview(){const r=ROUTINE[selected],el=document.getElementById('day');el.innerHTML=`<div class='card'><div class='section-title'><h2>${r.name}</h2><span>${r.nutrition}</span></div>${r.ex.map(e=>`<p><b>${e[0]}</b> — ${e[1]}×${e[2]}</p>`).join('')||'<p class="muted">Descanso</p>'}<button id='trainSelected' class='primary wide'>Registrar este entrenamiento</button></div>`;document.getElementById('trainSelected').onclick=()=>{view='today';renderToday(selected);syncNav()}}
function renderHistory(){setTitle('Historial');const h=load(),dates=Object.keys(h).sort().reverse();document.getElementById('app').innerHTML=`<div class='card'><div class='section-title'><h2>Historial</h2><span>${dates.length} días</span></div>${dates.length?dates.map(d=>`<div class='hist block'><b>${d} · ${h[d].day}</b>${Object.entries(h[d].ex||{}).filter(([,v])=>v.completed).map(([n,v])=>`<div>${n}: ${displayWeights(v)} kg · ${(v.reps||[]).join('/')} · RIR ${v.rir||'-'}</div>`).join('')}</div>`).join(''):'<p class="muted">Todavía no hay entrenamientos guardados.</p>'}</div>`}
function renderProgress(){setTitle('Progreso');const h=load();const histNames=Object.values(h).flatMap(d=>Object.keys(d.ex||{}));const names=[...new Set([...Object.values(ROUTINE).flatMap(d=>d.ex.map(e=>e[0])),...histNames])];const cards=names.map(n=>{const a=allFor(n);if(!a.length)return'';const last=a[a.length-1],first=a[0],delta=topWeight(last[1])-topWeight(first[1]),recent=a.slice(-6).reverse();return `<div class='card'><div class='exhead'><h3>${n}</h3><span class='badge'>${topWeight(last[1])||'-'} kg</span></div><p class='muted'>Cambio desde el primer registro: ${delta>0?'+':''}${delta.toFixed(1)} kg</p>${recent.map(([d,v])=>`<div class='progressrow'><span>${d}</span><b>${displayWeights(v)} kg · ${(v.reps||[]).join('/')}</b></div>`).join('')}</div>`}).join('');document.getElementById('app').innerHTML=`<section class='hero'><div class='eyebrow'>EVOLUCIÓN</div><h2>Progreso</h2><p>Cargas y repeticiones por ejercicio</p></section>${cards||'<div class="card"><p class="muted">Guarda tu primer entrenamiento para ver la evolución.</p></div>'}`}
function setTitle(t){const el=document.getElementById('pageTitle');if(el)el.textContent=t}
function syncNav(){document.querySelectorAll('nav button[data-v]').forEach(b=>b.classList.toggle('active',b.dataset.v===view))}
function render(){if(view==='today'){selected=days[new Date().getDay()];renderToday(selected)}else if(view==='week')renderWeek();else if(view==='history')renderHistory();else if(view==='progress')renderProgress();syncNav()}
document.querySelectorAll('nav button[data-v]').forEach(b=>b.onclick=()=>{view=b.dataset.v;render()});
const NUTRITION_URL='https://joaquincabral-wq.github.io/Nutrition/';
const nutritionBtn=document.getElementById('openNutrition');if(nutritionBtn)nutritionBtn.onclick=()=>{window.location.href=NUTRITION_URL};
render();
