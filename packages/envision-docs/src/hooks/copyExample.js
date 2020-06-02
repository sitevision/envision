import { useEffect } from 'react';
import $ from 'jquery';

export const useCopyExample = (content) => {
   useEffect(() => {
      content.current
         .querySelectorAll('.gatsby-highlight[data-language=html]')
         .forEach((element) => {
            const example = document.createElement('div');
            example.classList.add('code-example');
            example.innerHTML = element.textContent;
            element.parentNode.insertBefore(example, element);
         });

      $('.example-popover').envPopover();
      $('.example-tabs').envTabs();
      $('.example-tabs1').envTabs();
      $('.example-tabs2').envTabs();
      $('.example-tabs3').envTabs();
      $('.example-range-slider').envRangeSlider({
         values: [20, 70],
      });
   }, [content]);
};
