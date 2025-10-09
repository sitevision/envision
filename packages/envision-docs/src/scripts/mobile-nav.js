document.addEventListener('DOMContentLoaded', () => {
   const openButton = document.querySelector('.mobile-nav-button button');
   const mobileNav = document.querySelector('.mobileNav');
   const closeButton = document.querySelector('.mobileNav__close');
   let showMobileNav = false;

   const toggleMobileNav = () => {
      if (!showMobileNav) {
         openButton.setAttribute('aria-expanded', 'true');
         mobileNav.classList.add('show');
         document.body.style.setProperty('overflow-x', '');
         document.body.style.setProperty('overflow-y', '');
         document.body.style.setProperty('overflow', 'hidden', 'important');
      } else {
         openButton.setAttribute('aria-expanded', 'false');
         mobileNav.classList.remove('show');
         document.body.style.removeProperty('overflow');
      }
      showMobileNav = !showMobileNav;
   };

   closeButton && closeButton.addEventListener('click', toggleMobileNav);
   openButton && openButton.addEventListener('click', toggleMobileNav);

   // TODO: HAndle keyboard navigation and focus trap

   // const getFocusable = function (root) {
   //    const SELECTOR = [
   //       'a[href]',
   //       'input:not([disabled])',
   //       'button:not([disabled])',
   //    ].join(',');
   //    const allFocusable = root.querySelectorAll(SELECTOR);
   //    const visibleFocusable = [];
   //    for (let i = 0; i < allFocusable.length; i++) {
   //       if (isVisible(allFocusable[i])) {
   //          visibleFocusable.push(allFocusable[i]);
   //       }
   //    }
   //    return visibleFocusable;
   // };
   //
   // const handleKeyDown = (e) => {
   //    if (e.key === 'Escape') {
   //       setShowMobileNav(false);
   //       mobileNav.classList.remove('show');
   //       document.body.style.removeProperty('overflow');
   //       e.preventDefault();
   //    } else if (e.key === 'Tab') {
   //       const focusable = getFocusable(mobileNav);
   //       const firstElement = focusable[0];
   //       const lastElement = focusable[focusable.length - 1];
   //       if (e.shiftKey) {
   //          if (e.target === firstElement) {
   //             e.preventDefault();
   //             lastElement.focus();
   //          }
   //       } else if (e.target === lastElement) {
   //          e.preventDefault();
   //          firstElement.focus();
   //       }
   //    }
   // };
   //
   // if (showMobileNav) {
   //    document.body.addEventListener('keydown', handleKeyDown);
   // } else {
   //    document.body.style.removeProperty('overflow');
   // }
   //
   // return () => {
   //    document.body.removeEventListener('keydown', handleKeyDown);
   // };
   /*
    *
    * */
});
