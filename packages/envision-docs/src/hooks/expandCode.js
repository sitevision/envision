import { useEffect } from 'react';
import { uniqueId } from 'envision/src/js/util/nodes';

export const useExpandCode = (content) => {
   useEffect(() => {
      const EXPANDABLE = 'gatsby-highlight--expandable',
         TOGGLER = [
            'gatsby-highlight__toggler',
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

      content.current
         .querySelectorAll('.gatsby-highlight[data-language]')
         .forEach((element) => {
            if (
               element.dataset.language.includes('no-example') ||
               element.dataset.language.includes('no-expand')
            ) {
               return;
            }
            const pre = element.querySelector('pre');
            if (pre && pre.clientHeight > window.innerHeight * 0.25) {
               uniqueId(element);
               element.classList.add(EXPANDABLE);

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
                  const expanded =
                     button.getAttribute('aria-expanded') === 'true';
                  if (expanded) {
                     element.classList.add(EXPANDABLE);
                     setTimeout(() => {
                        element.scrollIntoView({
                           behavior: 'auto',
                           block: 'center',
                        });
                     }, 1);
                     span.textContent = MORE;
                  } else {
                     element.classList.remove(EXPANDABLE);
                     span.textContent = LESS;
                  }
                  button.setAttribute('aria-expanded', !expanded);
               });
            }
         });
   }, [content]);
};
