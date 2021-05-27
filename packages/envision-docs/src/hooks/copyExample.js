import $ from 'jquery';
import * as envision from 'envision';
import { useEffect } from 'react';

export const useCopyExample = (content) => {
   useEffect(() => {
      // Initialize Code Highlighter
      content.current
         .querySelectorAll('.gatsby-highlight[data-language=html]')
         .forEach((element) => {
            const example = document.createElement('div');
            example.classList.add('code-example');
            example.innerHTML = element.textContent;
            element.parentNode.insertBefore(example, element);
         });

      // Initialize jQuery plugins
      // TODO: Would be much nicer to use webpack externals, bu we run into a build issue..
      $('.example-popover').envPopover();
      $('.example-tabs').envTabs();
      $('.example-tabs1').envTabs();
      $('.example-tabs2').envTabs();
      $('.example-tabs3').envTabs();
      $('.example-range-slider').envRangeSlider({
         values: [20, 70],
      });

      // Initialize Envision plugins

      const exampleSelects = document.querySelector(
         '.env-form .example-tag-select'
      );
      for (let i = 0; exampleSelects && i < exampleSelects.length; i++) {
         envision.select(exampleSelects, {
            maxItems: 6,
            create: true,
            clearButton: true,
         });
      }

      const simpleSelectEl = document.querySelector('#example-tag-select-1');
      if (simpleSelectEl) {
         envision.select(simpleSelectEl);
      }

      const advancedSelectEl = document.querySelector('#example-tag-select-2');
      if (advancedSelectEl) {
         const advancedSelect = envision.select(advancedSelectEl, {
            maxItems: 5,
            create: true,
            clearButton: true,
            placeholder: 'Select or add tags...',
            items: ['fruit01'],
            data: [
               {
                  value: 'fruit01',
                  text: 'Apple',
               },
               {
                  value: 'fruit02',
                  text: 'Banana',
               },
               {
                  value: 'fruit03',
                  text: 'Grapefruit',
               },
               {
                  value: 'fruit04',
                  text: 'Lemon',
               },
               {
                  value: 'fruit05',
                  text: 'Pear',
               },
            ],
            onOptionAdd: function (value, data) {
               alert('Tag "' + value + '" was added.');
               console.log('Added:', value, data);
            },
         });

         document
            .getElementById('example-tag-select-2-add')
            .addEventListener('click', function () {
               const val = document.getElementById('example-tag-select-2-tag')
                  .value;
               advancedSelect[0].addOptions({
                  value: val,
                  text: val,
               });
               advancedSelect[0].addItem(val);
            });
      }
   }, [content]);
};
