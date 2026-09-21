(() => {
 'use strict';
 const $=id=>document.getElementById(id), urls=[];
 let timer, generation=0;
 const decode=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
 function lock(){generation++;clearTimeout(timer);urls.splice(0).forEach(URL.revokeObjectURL);$('summary').replaceChildren();$('documents').replaceChildren();$('unlocked').hidden=true;$('locked').hidden=false;$('password').value='';$('status').textContent='';}
 function activity(){if(!$('unlocked').hidden){clearTimeout(timer);timer=setTimeout(lock,600000);}}
 $('show').onclick=()=>{const show=$('password').type==='password';$('password').type=show?'text':'password';$('show').textContent=show?'Ocultar':'Mostrar';$('show').setAttribute('aria-pressed',String(show));};
 $('lock').onclick=lock;
 ['pointerdown','keydown','scroll'].forEach(e=>document.addEventListener(e,activity,{passive:true}));
 window.addEventListener('pagehide',lock);
 $('unlock').addEventListener('submit',async e=>{
  e.preventDefault();const attempt=++generation;const password=$('password').value;$('password').value='';$('submit').disabled=true;$('status').textContent='Abriendo tu carpeta…';
  try{
   if(!window.isSecureContext||!crypto.subtle)throw new Error('https');
   const response=await fetch('private-vault.json',{cache:'no-store',credentials:'omit'});if(!response.ok)throw new Error('fetch');const vault=await response.json();
   const material=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveKey']);
   const key=await crypto.subtle.deriveKey({name:'PBKDF2',salt:decode(vault.salt),iterations:600000,hash:'SHA-256'},material,{name:'AES-GCM',length:256},false,['decrypt']);
   const plain=await crypto.subtle.decrypt({name:'AES-GCM',iv:decode(vault.iv)},key,decode(vault.data));
   const payload=JSON.parse(new TextDecoder().decode(plain));new Uint8Array(plain).fill(0);if(attempt!==generation)return;
   // Only our authenticated encrypted bundle supplies this HTML; no external scripts or markup are loaded.
   $('summary').innerHTML=payload.summary;
   payload.documents.forEach(doc=>{const url=URL.createObjectURL(new Blob([decode(doc.data)],{type:'application/pdf'}));urls.push(url);const row=document.createElement('article');row.className='row';const title=document.createElement('h3');title.textContent=doc.title;row.append(title);const actions=document.createElement('div');actions.className='actions';for(const download of [false,true]){const a=document.createElement('a');a.href=url;a.className='action';a.textContent=download?'Descargar PDF':'Abrir PDF ↗';if(download)a.download=doc.filename;else{a.target='_blank';a.rel='noopener noreferrer';}actions.append(a);}row.append(actions);$('documents').append(row);});
   $('locked').hidden=true;$('unlocked').hidden=false;$('status').textContent='';activity();$('lock').focus();
  }catch(error){lock();$('status').textContent=error.message==='https'?'Abre esta página mediante HTTPS para desbloquearla.':error.message==='fetch'?'No se pudo cargar la carpeta. Revisa tu conexión e inténtalo de nuevo.':'No se pudo abrir. Revisa la contraseña e inténtalo de nuevo.';}finally{$('submit').disabled=false;}
 });
})();
