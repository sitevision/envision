document.addEventListener('DOMContentLoaded', () => {
   const openButton = document.querySelector('.mobile-nav-button button');
   const searchButton = document.querySelector('.mobile-search-button button');
   const mobileNav = document.querySelector('.mobileNav');
   const mobileSearch = document.querySelector('.header-grid-item-search');
   const closeButton = document.querySelector('.mobileNav__close');

   const isVisible = function (element) {
      return !!(
         element.offsetWidth ||
         element.offsetHeight ||
         element.getClientRects().length
      );
   };

   const getFocusable = function (root) {
      const SELECTOR = [
         'a[href]',
         'input:not([disabled])',
         'button:not([disabled])',
      ].join(',');
      const allFocusable = root.querySelectorAll(SELECTOR);
      const visibleFocusable = [];
      for (let i = 0; i < allFocusable.length; i++) {
         if (isVisible(allFocusable[i])) {
            visibleFocusable.push(allFocusable[i]);
         }
      }
      return visibleFocusable;
   };

   const setBodyScrollLock = (locked) => {
      if (locked) {
         const scrollPosition = window.scrollY;
         document.body.style.setProperty('overflow-x', '');
         document.body.style.setProperty('overflow-y', '');
         document.body.style.setProperty('overflow', 'hidden', 'important');
         document.body.style.setProperty('position', 'fixed');
         document.body.style.setProperty('width', '100%');
         document.body.style.setProperty('top', `-${scrollPosition}px`);
         document.body.dataset.docScrollY = `${scrollPosition}`;
      } else {
         const scrollPosition = Number.parseInt(
            document.body.dataset.docScrollY,
            10
         );
         [
            'overflow',
            'overflow-x',
            'overflow-y',
            'position',
            'width',
            'top',
         ].forEach((p) => {
            document.body.style.removeProperty(p);
         });
         delete document.body.dataset.docScrollY;
         if (Number.isFinite(scrollPosition)) {
            window.scrollTo(window.scrollX, scrollPosition);
         }
      }
   };

   const createTogglePanel = function (
      button,
      panel,
      { initialFocusIndex = 0, lockScroll = false } = {}
   ) {
      if (!button || !panel) {
         return;
      }

      let isOpen = false;

      const handleKeyDown = (e) => {
         if (e.key === 'Escape') {
            e.preventDefault();
            close();
         } else if (e.key === 'Tab') {
            const focusable = getFocusable(panel);
            const firstElement = focusable[0];
            const lastElement = focusable[focusable.length - 1];

            if (!firstElement || !lastElement) {
               return;
            }

            if (e.shiftKey) {
               if (e.target === firstElement) {
                  e.preventDefault();
                  lastElement.focus();
               }
            } else if (e.target === lastElement) {
               e.preventDefault();
               firstElement.focus();
            }
         }
      };

      const open = () => {
         button.setAttribute('aria-expanded', 'true');
         panel.classList.add('show');
         if (lockScroll) {
            setBodyScrollLock(true);
         }
         document.body.addEventListener('keydown', handleKeyDown);

         const focusable = getFocusable(panel);
         const firstElement = focusable[initialFocusIndex] || focusable[0];

         if (firstElement) {
            firstElement.focus();
         }

         isOpen = true;
      };

      const close = () => {
         button.setAttribute('aria-expanded', 'false');
         panel.classList.remove('show');
         if (lockScroll) {
            setBodyScrollLock(false);
         }
         document.body.removeEventListener('keydown', handleKeyDown);
         button.focus();
         isOpen = false;
      };

      const toggle = () => {
         if (isOpen) {
            close();
         } else {
            open();
         }
      };

      button.addEventListener('click', toggle);

      return {
         close,
         toggle,
      };
   };

   const mobileNavPanel = createTogglePanel(openButton, mobileNav, {
      initialFocusIndex: 1,
      lockScroll: true,
   });
   createTogglePanel(searchButton, mobileSearch, {
      initialFocusIndex: 0,
   });

   closeButton &&
      mobileNavPanel &&
      closeButton.addEventListener('click', mobileNavPanel.close);
});
