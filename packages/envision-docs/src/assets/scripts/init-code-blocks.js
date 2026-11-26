import { uniqueId } from './utils/unique-id.js';

document.addEventListener('DOMContentLoaded', () => {
   const codeBlockLabels = {
      html: 'Example HTML code',
      javascript: 'Example JavaScript code',
   };

   const EXPANDABLE = 'doc-code-block--expandable',
      HIDDEN = 'doc-code-block--hidden',
      TOGGLER = [
         'doc-code-block__toggler',
         'env-button',
         'env-button--link',
         'env-button--icon',
         'env-button--icon-after',
         'env-button--secondary',
         'env-button--small',
      ],
      MORE = 'Show full example',
      LESS = 'Hide full example',
      SVG = `<svg class="env-icon env-icon--small" aria-hidden="true">
                <use xlink:href="/sitevision/envision-icons.svg#icon-angle-down">
                </use></svg>`;

   const updateScrollFocus = (pre) => {
      const canScroll =
         !pre.closest(`.${HIDDEN}`) &&
         (pre.scrollWidth > pre.clientWidth ||
            pre.scrollHeight > pre.clientHeight);
      if (canScroll) {
         const language = pre.dataset.language?.toLowerCase();
         pre.tabIndex = 0;
         pre.setAttribute('role', 'region');
         pre.setAttribute(
            'aria-label',
            Object.hasOwn(codeBlockLabels, language)
               ? codeBlockLabels[language]
               : 'Example code'
         );
      } else {
         pre.removeAttribute('tabindex');
         pre.removeAttribute('role');
         pre.removeAttribute('aria-label');
      }
   };
   const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach(({ target }) => updateScrollFocus(target));
   });

   const codeBlocks = document.body.querySelectorAll('.doc-code-block pre');
   codeBlocks.forEach((pre) => {
      const element = pre.closest(`.${EXPANDABLE}`);
      if (element && pre.clientHeight > window.innerHeight * 0.25) {
         uniqueId(pre);
         element.classList.add(HIDDEN);

         const span = document.createElement('span');
         span.textContent = MORE;

         const button = document.createElement('button');
         button.insertAdjacentHTML('afterbegin', SVG);
         button.setAttribute('type', 'button');
         button.setAttribute('aria-expanded', 'false');
         button.classList.add(...TOGGLER);
         button.setAttribute('aria-controls', pre.id);

         button.appendChild(span);
         element.appendChild(button);

         button.addEventListener('click', () => {
            const expanded = button.getAttribute('aria-expanded') === 'true';
            if (expanded) {
               element.classList.add(HIDDEN);
               setTimeout(() => {
                  element.scrollIntoView({
                     behavior: 'auto',
                     block: 'center',
                  });
               }, 1);
               span.textContent = MORE;
            } else {
               element.classList.remove(HIDDEN);
               span.textContent = LESS;
            }
            button.setAttribute('aria-expanded', !expanded);
            updateScrollFocus(pre);
            if (!expanded && pre.tabIndex === 0) {
               pre.focus();
            }
         });
      }
      resizeObserver.observe(pre);
   });

   document.fonts.ready.then(() => {
      codeBlocks.forEach(updateScrollFocus);
   });
});
