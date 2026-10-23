import { uniqueId } from './utils/unique-id.js';

document.addEventListener('DOMContentLoaded', () => {
   const codeExampleAriaLabels = {
      html: 'Example HTML code',
      javascript: 'Example JavaScript code',
      unknown: 'Example code',
   };

   document.body
      .querySelectorAll('.astro-code[data-language]')
      .forEach((codeElement) => {
         let lang = codeElement.dataset.language?.toLowerCase() || '';
         if (lang.includes('html')) {
            lang = 'html';
         }
         if (!Object.hasOwnProperty.call(codeExampleAriaLabels, lang)) {
            lang = 'unknown';
         }
         codeElement
            .querySelector('code')
            ?.setAttribute('aria-label', codeExampleAriaLabels[lang]);
      });

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
      SVG = `<svg class="env-icon env-icon--small">
                <use xlink:href="/sitevision/envision-icons.svg#icon-angle-down">
                </use></svg>`;

   document.body.querySelectorAll(`.${EXPANDABLE}`).forEach((element) => {
      const pre =
         element.tagName === 'PRE' ? element : element.querySelector('pre');

      if (pre && pre.clientHeight > window.innerHeight * 0.25) {
         uniqueId(element);
         // element.classList.add(EXPANDABLE);
         element.classList.add(HIDDEN);

         const span = document.createElement('span');
         span.textContent = MORE;

         const button = document.createElement('button');
         button.insertAdjacentHTML('afterbegin', SVG);
         button.setAttribute('type', 'button');
         button.setAttribute('aria-expanded', 'false');
         button.classList.add(...TOGGLER);
         button.setAttribute('aria-controls', element.id);

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
         });
      }
   });
});
