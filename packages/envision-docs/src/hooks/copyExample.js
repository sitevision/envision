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

      const initializeEnvisionSelect = (selector, options) => {
         const selects = document.querySelectorAll(selector);
         for (let i = 0; i < selects.length; i++) {
            let select = selects[i];
            envision.select(select, options);
         }
      };

      initializeEnvisionSelect('.env-form .example-tag-select', {
         maxItems: 6,
         create: true,
         clearButton: true,
      });

      initializeEnvisionSelect('#example-tag-select-1');

      const advancedSelectEl = document.querySelector('#example-tag-select-2');
      if (advancedSelectEl) {
         var advancedSelect = envision.select(advancedSelectEl, {
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
               var val = document.getElementById('example-tag-select-2-tag')
                  .value;
               advancedSelect[0].addOption({
                  value: val,
                  text: val,
               });
               advancedSelect[0].addItem(val);
            });
      }

      // var state = envision.select('#select-state', {
      //    maxItems: 5,
      //    clearButton: true,
      //    shouldNotBeSet: 42,
      // });
      // var fruits = envision.select('#input-fruits', {
      //    create: true,
      //    maxItems: null,
      //    clearButton: true,
      //    searchField: 'text',
      //    data: [
      //       {
      //          value: 'fruit01',
      //          text: 'Apple',
      //       },
      //       {
      //          value: 'fruit02',
      //          text: 'Avocado',
      //       },
      //       {
      //          value: 'fruit03',
      //          text: 'Banana',
      //       },
      //       {
      //          value: 'fruit04',
      //          text: 'Cherry',
      //       },
      //       {
      //          value: 'fruit05',
      //          text: 'Coconut',
      //       },
      //       {
      //          value: 'fruit06',
      //          text: 'Dragonfruit',
      //       },
      //       {
      //          value: 'fruit07',
      //          text: 'Goji berry',
      //       },
      //       {
      //          value: 'fruit08',
      //          text: 'Grape',
      //       },
      //       {
      //          value: 'fruit09',
      //          text: 'Grapefruit',
      //       },
      //       {
      //          value: 'fruit10',
      //          text: 'Kiwifruit',
      //       },
      //       {
      //          value: 'fruit11',
      //          text: 'Lemon',
      //       },
      //       {
      //          value: 'fruit12',
      //          text: 'Lime',
      //       },
      //       {
      //          value: 'fruit13',
      //          text: 'Mango',
      //       },
      //       {
      //          value: 'fruit14',
      //          text: 'Melon',
      //       },
      //       {
      //          value: 'fruit15',
      //          text: 'Cantaloupe',
      //       },
      //       {
      //          value: 'fruit16',
      //          text: 'Galia melon',
      //       },
      //       {
      //          value: 'fruit17',
      //          text: 'Watermelon',
      //       },
      //       {
      //          value: 'fruit18',
      //          text: 'Orange',
      //       },
      //       {
      //          value: 'fruit19',
      //          text: 'Blood orange',
      //       },
      //       {
      //          value: 'fruit20',
      //          text: 'Clementine',
      //       },
      //       {
      //          value: 'fruit21',
      //          text: 'Passionfruit',
      //       },
      //       {
      //          value: 'fruit22',
      //          text: 'Peach',
      //       },
      //       {
      //          value: 'fruit23',
      //          text: 'Pear',
      //       },
      //       {
      //          value: 'fruit24',
      //          text: 'Pineapple',
      //       },
      //       {
      //          value: 'fruit25',
      //          text: 'Strawberry',
      //       },
      //    ],
      // });
      //
      // envision.select('[data-env-tag-select]', { maxItems: 1 });
      //
      // envision.select('#input-tags', {
      //    create: true,
      //    onItemAdd: eventHandler('onItemAdd'),
      //    onItemRemove: eventHandler('onItemRemove'),
      // });
      //
      // envision.select('[data-no-elements]');
      //
      // fruits[0].addOption([
      //    {
      //       value: 'newFruit',
      //       text: 'NEW FRUIT',
      //    },
      //    {
      //       value: 'newFrui2t',
      //       text: 'NEW FRUIT 2',
      //    },
      // ]);
      //
      // fruits[0].addItem('newFruit');
      //
      // fruits[0].refreshOptions(false);
      //
      // console.log(state[0].getValue());
      // console.log(fruits[0].getValue());
      // console.log(fruits[0].setValue('newFrui2t'));
      // console.log(fruits[0].getValue());
      //
      // document
      //    .getElementById('add-fruit')
      //    .addEventListener('click', function (e) {
      //       e.preventDefault();
      //       var f = document.getElementById('new-fruit').value,
      //          v = f.toLowerCase();
      //       fruits[0].addOption({
      //          value: v,
      //          text: f,
      //       });
      //       fruits[0].addItem(v);
      //       fruits[0].refreshOptions(false);
      //    });
   }, [content]);
};
