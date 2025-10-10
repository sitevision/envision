((win, docEl, darkCls, lightCls) => {
   const mql = window.matchMedia('(prefers-color-scheme: dark)');
   const switchTheme = (useDark) => {
      if (useDark) {
         docEl.classList.add(darkCls);
      } else {
         docEl.classList.remove(darkCls);
      }
      win.sessionStorage.setItem('colorscheme', useDark ? darkCls : lightCls);
   };
   document.addEventListener('DOMContentLoaded', () => {
      const pickerEl = document.getElementById('darkMode');
      pickerEl.addEventListener('change', (e) => {
         switchTheme(e.target.checked);
      });
   });
   mql.addEventListener('change', () => {
      switchTheme(mql.matches);
      document.getElementById('darkMode').checked = mql.matches;
   });
})(window, document.documentElement, 'doc-dark-mode', 'doc-light-mode');
