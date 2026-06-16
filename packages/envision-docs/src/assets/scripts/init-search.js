document.addEventListener('click', (e) => {
   if (!(e.target instanceof Element)) {
      return;
   }
   const link = e.target.closest('.pf-result-link');
   if (!link) {
      return;
   }
   const modal = document.querySelector('pagefind-modal');
   if (modal && typeof modal.close === 'function') {
      modal.close();
   }
});

window.addEventListener('hashchange', () => {
   const modal = document.querySelector('pagefind-modal');
   if (modal && typeof modal.close === 'function') {
      modal.close();
   }
});
