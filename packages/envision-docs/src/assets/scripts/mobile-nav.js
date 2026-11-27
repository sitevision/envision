document.addEventListener('DOMContentLoaded', () => {
   const openButton = document.querySelector('.mobile-nav-button button');
   const searchButton = document.querySelector('.mobile-search-button button');
   const mobileNav = document.querySelector('.mobileNav');
   const mobileSearch = document.querySelector('.header-grid-item-search');

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
         if (allFocusable[i].tabIndex >= 0 && isVisible(allFocusable[i])) {
            visibleFocusable.push(allFocusable[i]);
         }
      }
      return visibleFocusable;
   };

   const wrapTabFocus = (event, panel) => {
      if (event.key !== 'Tab' || event.defaultPrevented) {
         return;
      }

      const focusable = getFocusable(panel);
      const first = focusable[0];
      const last = focusable.at(-1);
      const boundary = event.shiftKey ? first : last;

      if (event.target === boundary) {
         event.preventDefault();
         const destination = event.shiftKey ? last : first;
         destination.focus();
      }
   };

   if (openButton && mobileNav) {
      openButton.addEventListener('click', () => {
         mobileNav.showModal();
         openButton.setAttribute('aria-expanded', 'true');
      });
      mobileNav
         .querySelector('.mobileNav__close')
         ?.addEventListener('click', () => {
            mobileNav.close();
         });
      mobileNav.addEventListener('keydown', (event) => {
         wrapTabFocus(event, mobileNav);
      });
      mobileNav.addEventListener('close', () => {
         openButton.setAttribute('aria-expanded', String(mobileNav.open));
         if (!mobileNav.open) {
            openButton.focus();
         }
      });
   }

   if (!searchButton || !mobileSearch) {
      return;
   }

   const handleSearchKeyDown = (e) => {
      if (mobileNav?.open) {
         return;
      }

      if (e.key === 'Escape') {
         e.preventDefault();
         closeSearch();
      } else {
         wrapTabFocus(e, mobileSearch);
      }
   };

   const closeSearch = () => {
      mobileSearch.classList.remove('show');
      searchButton.setAttribute('aria-expanded', 'false');
      document.body.removeEventListener('keydown', handleSearchKeyDown);
      searchButton.focus();
   };

   searchButton.addEventListener('click', () => {
      if (mobileSearch.classList.contains('show')) {
         closeSearch();
         return;
      }

      mobileSearch.classList.add('show');
      searchButton.setAttribute('aria-expanded', 'true');
      document.body.addEventListener('keydown', handleSearchKeyDown);
      getFocusable(mobileSearch)[0]?.focus();
   });
});
