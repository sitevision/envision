import { useEffect } from 'react';

export const useExpandCode = (content) => {
   useEffect(() => {
      const EXPANDABLE = 'gatsby-highlight--expandable',
         TOGGLER = [
            'gatsby-highlight__toggler',
            'env-button',
            'env-button--primary',
            'env-button--small',
         ],
         MORE = '+ Show more',
         LESS = '- Show less';

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
               const button = document.createElement('button');
               button.setAttribute('type', 'button');
               button.setAttribute('aria-expanded', 'false');
               button.classList.add(...TOGGLER);
               button.textContent = MORE;
               element.classList.add(EXPANDABLE);
               element.appendChild(button);
               button.addEventListener('click', (e) => {
                  const expanded =
                     e.target.getAttribute('aria-expanded') === 'true';
                  if (expanded) {
                     element.classList.add(EXPANDABLE);
                     setTimeout(() => {
                        element.scrollIntoView({
                           behavior: 'auto',
                           block: 'center',
                        });
                     }, 1);
                     button.textContent = MORE;
                  } else {
                     element.classList.remove(EXPANDABLE);
                     button.textContent = LESS;
                  }
                  e.target.setAttribute('aria-expanded', !expanded);
               });
            }
         });
   }, [content]);
};
