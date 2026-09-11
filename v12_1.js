
// JC Training V12.1 — notas persistentes por ejercicio.
(function(){
  'use strict';

  function norm(s){
    return (s || '')
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
      .replace(/\s+/g,' ')
      .trim();
  }

  function noteKey(name){
    return `exerciseNote:${norm(name)}`;
  }

  function getName(card){
    return (
      card.dataset.exerciseName ||
      card.dataset.exercise ||
      card.querySelector('.exercise-name')?.textContent ||
      card.querySelector('h3')?.textContent ||
      card.querySelector('h4')?.textContent ||
      ''
    ).trim();
  }

  function addNote(card){
    if(card.querySelector('.v121-note-box')) return;

    const name = getName(card);
    if(!name) return;

    const saved = localStorage.getItem(noteKey(name)) || '';
    const box = document.createElement('div');
    box.className = 'v121-note-box';

    box.innerHTML = `
      <div class="v121-note-head">
        <span>📝 Nota</span>
        <button type="button" class="v121-note-edit secondary-btn">${saved ? 'Editar' : 'Añadir nota'}</button>
      </div>
      <div class="v121-note-text ${saved ? '' : 'hidden'}"></div>
      <div class="v121-note-editor hidden">
        <textarea class="v121-note-input" rows="3" placeholder="Ej.: abductores = abrir hacia fuera; agarre neutro; banco a 30°..."></textarea>
        <div class="v121-note-actions">
          <button type="button" class="primary-btn v121-note-save">Guardar</button>
          <button type="button" class="secondary-btn v121-note-cancel">Cancelar</button>
          <button type="button" class="danger-btn v121-note-delete ${saved ? '' : 'hidden'}">Eliminar nota</button>
        </div>
      </div>
    `;

    const text = box.querySelector('.v121-note-text');
    const editor = box.querySelector('.v121-note-editor');
    const input = box.querySelector('.v121-note-input');
    const edit = box.querySelector('.v121-note-edit');
    const del = box.querySelector('.v121-note-delete');

    text.textContent = saved;
    input.value = saved;

    function openEditor(){
      input.value = localStorage.getItem(noteKey(name)) || '';
      editor.classList.remove('hidden');
      text.classList.add('hidden');
      edit.classList.add('hidden');
      del.classList.toggle('hidden', !input.value);
      setTimeout(()=>input.focus(),0);
    }

    function closeEditor(){
      const current = localStorage.getItem(noteKey(name)) || '';
      text.textContent = current;
      text.classList.toggle('hidden', !current);
      editor.classList.add('hidden');
      edit.classList.remove('hidden');
      edit.textContent = current ? 'Editar' : 'Añadir nota';
      del.classList.toggle('hidden', !current);
    }

    edit.onclick = openEditor;
    box.querySelector('.v121-note-cancel').onclick = closeEditor;
    box.querySelector('.v121-note-save').onclick = () => {
      const val = input.value.trim();
      if(val) localStorage.setItem(noteKey(name), val);
      else localStorage.removeItem(noteKey(name));
      closeEditor();
    };
    box.querySelector('.v121-note-delete').onclick = () => {
      localStorage.removeItem(noteKey(name));
      input.value = '';
      closeEditor();
    };

    const lastSession = card.querySelector('.v12-last-session');
    if(lastSession) lastSession.insertAdjacentElement('afterend', box);
    else {
      const meta = card.querySelector('.exercise-meta');
      const title = card.querySelector('.exercise-name, h3, h4');
      if(meta) meta.insertAdjacentElement('afterend', box);
      else if(title) title.insertAdjacentElement('afterend', box);
      else card.prepend(box);
    }
  }

  function apply(){
    document.querySelectorAll(
      '.exercise-card, .workout-exercise, [data-exercise-name], [data-exercise]'
    ).forEach(addNote);
  }

  const obs = new MutationObserver(()=>{
    clearTimeout(window.__jcV121Notes);
    window.__jcV121Notes = setTimeout(apply,80);
  });

  obs.observe(document.body,{childList:true,subtree:true});
  document.addEventListener('DOMContentLoaded',apply);
  setTimeout(apply,250);
  setTimeout(apply,800);
})();
