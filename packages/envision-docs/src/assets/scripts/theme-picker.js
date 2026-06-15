((win, docEl, darkCls, lightCls) => {
   const mql = window.matchMedia('(prefers-color-scheme: dark)');
   const switchTheme = (useDark) => {
      if (useDark) {
         docEl.classList.add(darkCls);
      } else {
         docEl.classList.remove(darkCls);
      }
      win.sessionStorage.setItem('colorscheme', useDark ? darkCls : lightCls);
      document.querySelectorAll('.doc-darkmode-checkbox').forEach((el) => {
         el.checked = useDark;
      });
   };
   document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.doc-darkmode-checkbox').forEach((el) => {
         el.addEventListener('change', (e) => {
            switchTheme(e.target.checked);
         });
      });
   });
   mql.addEventListener('change', () => {
      switchTheme(mql.matches);
   });
})(window, document.documentElement, 'doc-dark-mode', 'doc-light-mode');
