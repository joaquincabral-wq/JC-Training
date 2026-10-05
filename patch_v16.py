from pathlib import Path
p=Path('/mnt/data/jct_v16/app.js')
s=p.read_text()
insert="""
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
"""
anchor="const SESSION_EXTRAS_KEY='jcTrainingSessionExtrasV1';"
s=s.replace(anchor,insert+'\n'+anchor)
old="function orderedExercises(day,date){const base=[...ROUTINE[day].ex,...extrasFor(day,date)],orders=loadOrders(),names=orders?.[date]?.[day];if(!Array.isArray(names))return base.slice();const map=new Map(base.map(e=>[e[0],e]));const out=names.map(n=>map.get(n)).filter(Boolean);base.forEach(e=>{if(!out.some(x=>x[0]===e[0]))out.push(e)});return out}"
new="function orderedExercises(day,date){const raw=[...ROUTINE[day].ex,...extrasFor(day,date)],base=applySubs(day,date,raw),orders=loadOrders(),names=orders?.[date]?.[day];if(!Array.isArray(names))return base.slice();const map=new Map(base.map(e=>[e[0],e]));const out=names.map(n=>map.get(n)).filter(Boolean);base.forEach(e=>{if(!out.some(x=>x[0]===e[0]))out.push(e)});return out}"
s=s.replace(old,new)
# Add original/substitute buttons in render card
needle="<div class='movebar'><button data-moveup='${i}' ${i===0?'disabled':''}>↑ Antes</button><button data-movedown='${i}' ${i===exs.length-1?'disabled':''}>↓ Después</button><button data-movelast='${i}' ${i===exs.length-1?'disabled':''}>↧ Al final</button></div>"
replacement="<div class='movebar'><button data-moveup='${i}' ${i===0?'disabled':''}>↑ Antes</button><button data-movedown='${i}' ${i===exs.length-1?'disabled':''}>↓ Después</button><button data-movelast='${i}' ${i===exs.length-1?'disabled':''}>↧ Al final</button><button class='swapbtn' data-swap='${i}'>🔄 Sustituir</button>${e[5]?`<button class='swaprestore' data-swaprestore='${i}'>↩ ${e[5]}</button>`:''}</div>${e[5]?`<div class='subnote'>Sustitución solo para hoy · original: <b>${e[5]}</b></div>`:''}"
s=s.replace(needle,replacement)
# Add binder swap handlers before removeextra
anchor2=" document.querySelectorAll('[data-removeextra]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.removeextra),e=exs[i];if(confirm(`¿Eliminar ${e[0]} de la sesión de hoy?`)){removeSessionExtra(day,date,e[0]);renderToday(day)}});"
insert2=""" document.querySelectorAll('[data-swap]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.swap),e=exs[i],original=e[5]||e[0];openSwapModal(day,date,original,e)});
 document.querySelectorAll('[data-swaprestore]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.swaprestore),e=exs[i],original=e[5];if(original){clearSub(day,date,original);const o=loadOrders();if(o?.[date]?.[day]){o[date][day]=o[date][day].map(n=>n===e[0]?original:n);localStorage.setItem(ORDER_KEY,JSON.stringify(o))}renderToday(day)}});
"""+anchor2
s=s.replace(anchor2,insert2)
# Add modal funcs before renderWeek
anchor3="function renderWeek(){"
modal="""
function esc(s){return String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\"/g,'&quot;')}
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
"""
s=s.replace(anchor3,modal+'\n'+anchor3)
p.write_text(s)

# version/cache/css/readme
idx=Path('/mnt/data/jct_v16/index.html');t=idx.read_text().replace('V1.5.0 · Bloque 8 semanas','V1.6.0 · Sustituciones inteligentes');idx.write_text(t)
sw=Path('/mnt/data/jct_v16/sw.js');t=sw.read_text().replace("jc-training-v1-5-0","jc-training-v1-6-0");sw.write_text(t)
css=Path('/mnt/data/jct_v16/styles.css');t=css.read_text()+"""
.swapbtn{border-color:rgba(79,195,247,.55);color:#d7f4ff}.swaprestore{border-color:rgba(245,158,11,.45);color:#fde68a}.subnote{margin:8px 0 0;padding:8px 10px;border-radius:10px;background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.25);color:#fde68a;font-size:12px}.modal{position:fixed;inset:0;z-index:100;background:rgba(0,0,0,.74);display:flex;align-items:flex-end;justify-content:center;padding-top:40px}.sheet{width:min(760px,100%);max-height:90vh;overflow:auto;background:#0e1829;border:1px solid var(--line);border-radius:24px 24px 0 0;padding:18px}.modalhead{display:flex;justify-content:space-between;gap:12px;align-items:flex-start}.modalhead h2{margin:5px 0 12px}.modalhead>button{padding:7px 10px}.altlist{display:grid;gap:9px;margin:14px 0}.altcard{text-align:left;display:grid;gap:4px;padding:13px 14px;background:#10243b}.altcard b{font-size:16px}.altcard span{color:#dbeafe;font-size:13px}.altcard small{color:var(--muted);line-height:1.35}.customswap{margin-top:14px;padding-top:12px;border-top:1px solid var(--line)}.customswap h3{margin:0 0 8px}
""";css.write_text(t)
readme=Path('/mnt/data/jct_v16/README.txt');readme.write_text("""JC Training V1.6.0 · Sustituciones inteligentes\n\nCambios:\n- Botón 🔄 Sustituir en cada ejercicio.\n- Alternativas recomendadas según patrón/músculo y material disponible.\n- Sustitución solo para la sesión actual por defecto; la rutina base no se modifica.\n- Botón para restaurar el ejercicio original.\n- Alternativa manual con series, repeticiones y descanso editables.\n- El historial y progreso se guardan bajo el ejercicio realmente realizado, para no mezclar cargas entre variantes.\n- Mantiene extras recomendados, reordenación, técnica, notas, pesos/reps/RIR y temporizador flexible.\n""")
