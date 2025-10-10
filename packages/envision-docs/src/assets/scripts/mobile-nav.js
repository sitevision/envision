document.addEventListener('DOMContentLoaded', () => {
   const openButton = document.querySelector('.mobile-nav-button button');
   const mobileNav = document.querySelector('.mobileNav');
   const closeButton = document.querySelector('.mobileNav__close');
   let showMobileNav = false;

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

   const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
         e.preventDefault();
         toggleMobileNav();
      } else if (e.key === 'Tab') {
         const focusable = getFocusable(mobileNav);
         const firstElement = focusable[0];
         const lastElement = focusable[focusable.length - 1];
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

   const toggleMobileNav = () => {
      if (!showMobileNav) {
         openButton.setAttribute('aria-expanded', 'true');
         mobileNav.classList.add('show');
         document.body.style.setProperty('overflow-x', '');
         document.body.style.setProperty('overflow-y', '');
         document.body.style.setProperty('overflow', 'hidden', 'important');
         document.body.addEventListener('keydown', handleKeyDown);
         const focusable = getFocusable(mobileNav);
         const firstLinkElement = focusable[1]; // Skip close button
         firstLinkElement.focus();
      } else {
         openButton.setAttribute('aria-expanded', 'false');
         mobileNav.classList.remove('show');
         document.body.style.removeProperty('overflow');
         document.body.removeEventListener('keydown', handleKeyDown);
         openButton.focus();
      }
      showMobileNav = !showMobileNav;
   };

   closeButton && closeButton.addEventListener('click', toggleMobileNav);
   openButton && openButton.addEventListener('click', toggleMobileNav);
});
