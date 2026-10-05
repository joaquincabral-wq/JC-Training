from pathlib import Path
p=Path('/mnt/data/jct_v15/app.js')
s=p.read_text()
# Insert extra catalog after TECHNIQUE block declaration end before NOTES_KEY
needle="const NOTES_KEY='jcTrainingExerciseNotesV1';"
insert="""
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
const SESSION_EXTRAS_KEY='jcTrainingSessionExtrasV1';
"""
s=s.replace(needle,insert+needle)
# Replace orderedExercises helper block
old="""const loadOrders=()=>JSON.parse(localStorage.getItem(ORDER_KEY)||'{}');
function orderedExercises(day,date){const base=ROUTINE[day].ex,orders=loadOrders(),names=orders?.[date]?.[day];if(!Array.isArray(names))return base.slice();const map=new Map(base.map(e=>[e[0],e]));const out=names.map(n=>map.get(n)).filter(Boolean);base.forEach(e=>{if(!out.some(x=>x[0]===e[0]))out.push(e)});return out}
function saveOrder(day,date,exs){const o=loadOrders();if(!o[date])o[date]={};o[date][day]=exs.map(e=>e[0]);localStorage.setItem(ORDER_KEY,JSON.stringify(o))}
"""
new="""const loadOrders=()=>JSON.parse(localStorage.getItem(ORDER_KEY)||'{}');
const loadSessionExtras=()=>JSON.parse(localStorage.getItem(SESSION_EXTRAS_KEY)||'{}');
function extrasFor(day,date){return loadSessionExtras()?.[date]?.[day]||[]}
function addSessionExtra(day,date,ex){const all=loadSessionExtras();if(!all[date])all[date]={};if(!all[date][day])all[date][day]=[];if(all[date][day].some(x=>x[0]===ex[0])||ROUTINE[day].ex.some(x=>x[0]===ex[0]))return false;all[date][day].push([...ex.slice(0,4),'extra']);localStorage.setItem(SESSION_EXTRAS_KEY,JSON.stringify(all));return true}
function removeSessionExtra(day,date,name){const all=loadSessionExtras();if(all?.[date]?.[day]){all[date][day]=all[date][day].filter(x=>x[0]!==name);localStorage.setItem(SESSION_EXTRAS_KEY,JSON.stringify(all))}const o=loadOrders();if(o?.[date]?.[day]){o[date][day]=o[date][day].filter(n=>n!==name);localStorage.setItem(ORDER_KEY,JSON.stringify(o))}}
function orderedExercises(day,date){const base=[...ROUTINE[day].ex,...extrasFor(day,date)],orders=loadOrders(),names=orders?.[date]?.[day];if(!Array.isArray(names))return base.slice();const map=new Map(base.map(e=>[e[0],e]));const out=names.map(n=>map.get(n)).filter(Boolean);base.forEach(e=>{if(!out.some(x=>x[0]===e[0]))out.push(e)});return out}
function saveOrder(day,date,exs){const o=loadOrders();if(!o[date])o[date]={};o[date][day]=exs.map(e=>e[0]);localStorage.setItem(ORDER_KEY,JSON.stringify(o))}
"""
if old not in s: raise SystemExit('ordered block not found')
s=s.replace(old,new)
# Fix storeRestElapsed and progress
s=s.replace("const e=ROUTINE[day].ex.find(x=>x[0]===name);", "const e=orderedExercises(day,date).find(x=>x[0]===name);")
s=s.replace("function sessionProgress(day,date){const r=ROUTINE[day],h=load(),s=h?.[date]?.ex||{};const done=r.ex.filter(e=>s[e[0]]?.completed).length;return {done,total:r.ex.length}}", "function sessionProgress(day,date){const exs=orderedExercises(day,date),h=load(),s=h?.[date]?.ex||{};const done=exs.filter(e=>s[e[0]]?.completed).length;return {done,total:exs.length}}")
# Modify exercise card header for extra badge/remove
oldfrag="""<div class='exhead'><div><h3>${name}</h3><div class='target'>Objetivo · ${sets} × ${reps}</div></div>${cur.completed?'<span class=\"badge\">HECHO</span>':''}</div>"""
newfrag="""<div class='exhead'><div><h3>${name}</h3><div class='target'>Objetivo · ${sets} × ${reps}${e[4]==='extra'?' · EXTRA':''}</div></div><div class='exbadges'>${e[4]==='extra'?'<span class=\"badge extra\">EXTRA</span>':''}${cur.completed?'<span class=\"badge\">HECHO</span>':''}</div></div>${e[4]==='extra'?`<button class='removeextra' data-removeextra='${i}'>Eliminar extra de hoy</button>`:''}"""
if oldfrag not in s: raise SystemExit('card frag not found')
s=s.replace(oldfrag,newfrag)
# Add extra controls after loop before innerHTML assignment
oldend="""<div class='advice'>${advice(e,last)}</div></div>`});document.getElementById('app').innerHTML=html;bind(day,date,exs)}"""
newend="""<div class='advice'>${advice(e,last)}</div></div>`});
 if(exs.length){
  html+=`<div class='card extraadd'><div class='section-title'><h2>¿Te queda tiempo?</h2><span>extra opcional</span></div><p class='muted'>Máximo 1 ejercicio extra como norma. No hace falta añadir nada si la sesión base ya ha sido buena.</p><div class='extraactions'><button id='recommendExtra' class='secondary'>💡 Recomendar qué añadir</button></div><div id='recommendBox'></div><label class='field'><span>Ejercicio</span><select id='extraSelect' class='input'><option value=''>Elige una opción…</option>${EXTRA_CATALOG.map((x,i)=>`<option value='${i}'>${x[0]} · ${x[1]}×${x[2]}</option>`).join('')}<option value='custom'>Otro ejercicio…</option></select></label><div class='extragrid'><label>Series<input id='extraSets' class='input' inputmode='numeric' value='2'></label><label>Reps<input id='extraReps' class='input' inputmode='numeric' value='12'></label><label>Descanso s<input id='extraRest' class='input' inputmode='numeric' value='90'></label></div><label class='field' id='customNameWrap' style='display:none'><span>Nombre</span><input id='extraName' class='input' placeholder='Ejercicio'></label><button id='addExtraExercise' class='primary wide'>➕ Añadir ejercicio a hoy</button></div>`;
 }
 document.getElementById('app').innerHTML=html;bind(day,date,exs);bindExtraTools(day,date,exs)}"""
if oldend not in s: raise SystemExit('render end not found')
s=s.replace(oldend,newend)
# Add bindExtraTools function before bind
marker="function bind(day,date,exs=orderedExercises(day,date)){"
extra_func="""
function bindExtraTools(day,date,exs){
 const sel=document.getElementById('extraSelect'),sets=document.getElementById('extraSets'),reps=document.getElementById('extraReps'),rest=document.getElementById('extraRest'),name=document.getElementById('extraName'),wrap=document.getElementById('customNameWrap');
 if(sel)sel.onchange=()=>{if(sel.value==='custom'){wrap.style.display='block';return}wrap.style.display='none';const x=EXTRA_CATALOG[Number(sel.value)];if(x){sets.value=x[1];reps.value=x[2];rest.value=x[3]}};
 const add=(ex)=>{if(!ex[0]){alert('Indica un ejercicio.');return}if(!addSessionExtra(day,date,ex)){alert('Ese ejercicio ya está en la sesión de hoy.');return}renderToday(day)};
 const btn=document.getElementById('addExtraExercise');if(btn)btn.onclick=()=>{let nm=sel?.value==='custom'?(name?.value||'').trim():(EXTRA_CATALOG[Number(sel?.value)]?.[0]||'');const se=Math.max(1,Math.round(Number(sets?.value)||0)),rp=Math.max(1,Math.round(Number(reps?.value)||0)),rs=Math.max(30,Math.round(Number(rest?.value)||90));if(!nm){alert('Elige o escribe un ejercicio.');return}add([nm,se,rp,rs])};
 const rec=document.getElementById('recommendExtra');if(rec)rec.onclick=()=>{const pool=EXTRA_RECOMMENDATIONS[day]||[];const names=new Set(exs.map(x=>x[0]));const x=pool.find(r=>!names.has(r[0]));const box=document.getElementById('recommendBox');if(!x){box.innerHTML=`<div class='advice'>La sesión ya tiene suficiente volumen. Si te sobra tiempo, úsalo en movilidad suave o termina aquí.</div>`;return}box.innerHTML=`<div class='recommend'><b>💡 ${x[0]} · ${x[1]}×${x[2]}</b><p>${x[4]}</p><button id='acceptRecommended' class='primary'>Añadir recomendación</button></div>`;document.getElementById('acceptRecommended').onclick=()=>add(x)};
}
"""
s=s.replace(marker,extra_func+marker)
# Add remove handler in bind near move handlers end
needle2=" document.querySelectorAll('[data-movelast]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.movelast);if(i<exs.length-1)move(i,exs.length-1)});\n}"
repl2=" document.querySelectorAll('[data-movelast]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.movelast);if(i<exs.length-1)move(i,exs.length-1)});\n document.querySelectorAll('[data-removeextra]').forEach(x=>x.onclick=()=>{const i=Number(x.dataset.removeextra),e=exs[i];if(confirm(`¿Eliminar ${e[0]} de la sesión de hoy?`)){removeSessionExtra(day,date,e[0]);renderToday(day)}});\n}"
if needle2 not in s: raise SystemExit('bind end not found')
s=s.replace(needle2,repl2)
# Progress include any historical exercise names, not just routine
oldprog="function renderProgress(){setTitle('Progreso');const names=[...new Set(Object.values(ROUTINE).flatMap(d=>d.ex.map(e=>e[0])))];"
newprog="function renderProgress(){setTitle('Progreso');const h=load();const histNames=Object.values(h).flatMap(d=>Object.keys(d.ex||{}));const names=[...new Set([...Object.values(ROUTINE).flatMap(d=>d.ex.map(e=>e[0])),...histNames])];"
s=s.replace(oldprog,newprog)
p.write_text(s)
