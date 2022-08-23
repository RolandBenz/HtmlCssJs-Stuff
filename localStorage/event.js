/* 
  event listener onStorage change, 
  write storage values in e into my-xxx classes 
  PS: works on https://mdn.github.io/dom-examples/web-storage/
      because for both sites index.html and event.html the localStorage address is https://mdn.github.io 
      but, it does not work without server, because then both websites get different localStorage addresses. 
*/
window.addEventListener('storage', function(e) {
  document.querySelector('.my-key').textContent = e.key;
  document.querySelector('.my-old').textContent = e.oldValue;
  document.querySelector('.my-new').textContent = e.newValue;
  document.querySelector('.my-url').textContent = e.url;
  document.querySelector('.my-storage').textContent = JSON.stringify(e.storageArea);
});
