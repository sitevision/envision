import * as React from 'react';

export const useCopyExample = (content) => {
   React.useEffect(() => {
      // Initialize Code Highlighter
      content.current
         .querySelectorAll('.gatsby-highlight[data-language=html]')
         .forEach((element) => {
            const example = document.createElement('div');
            example.classList.add('code-example');
            example.innerHTML = element.textContent;
            element.parentNode.insertBefore(example, element);
         });

      const $ = window.$;
      const envision = window.envision;

      // Initialize jQuery plugins
      // TODO: Would be much nicer to use webpack externals, bu we run into a build issue..
      envision.popover('.example-popover');

      // New version initiation
      envision.tabs('.example-tabs');
      // Legacy version initiation (deprecated)
      $('.example-tabs1, .example-tabs2, .example-tabs3').envTabs();

      envision.rangeSlider('.example-range-slider', { values: [20, 70] });

      // Initialize Image slider examples, load method does not work in gatsby.

      envision.imageSlider('#exampleSlider0', {
         imageSlider: 'cycle',
         buttons: false,
      });

      envision.imageSlider('#exampleSlider1');

      envision.imageSlider('#exampleSlider2', {
         imageSlider: 'cycle',
      });

      envision.imageSlider('#exampleSlider3');

      envision.imageSlider('#exampleSlider4', {
         imageSlider: 'cycle',
      });

      // Initialize Envision plugins

      const exampleSelects = document.querySelectorAll('.example-tag-select');
      for (let i = 0; exampleSelects && i < exampleSelects.length; i++) {
         envision.select(exampleSelects, {
            maxItems: 6,
            create: true,
            i18n: 'en',
         });
      }

      const simpleSelectEl = document.querySelector('#example-tag-select-1');
      if (simpleSelectEl) {
         envision.select(simpleSelectEl, { i18n: 'en' });
      }

      const advancedSelectEl = document.querySelector('#example-tag-select-2');
      if (advancedSelectEl) {
         envision
            .select(advancedSelectEl, {
               maxItems: 5,
               clearButton: true,
               create: true,
               placeholder: 'Select or add tags...',
               items: ['fruit01'],
               i18n: 'en',
               options: [
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
                  console.log('Added:', value, data);
               },
            })
            .then((selects) => {
               document
                  .getElementById('example-tag-select-2-add')
                  .addEventListener('click', function () {
                     const val = document.getElementById(
                        'example-tag-select-2-tag'
                     ).value;
                     selects[0].addOptions({
                        value: val,
                        text: val,
                     });
                     selects[0].addItem(val);
                  });
            });

         const remoteDataSelectEl = document.querySelector(
            '#example-tag-select-3'
         );
         if (remoteDataSelectEl) {
            envision.select(remoteDataSelectEl, {
               maxItems: 5,
               placeholder: 'Select a Github repository...',
               i18n: 'en',
               valueField: 'url',
               labelField: 'name',
               searchField: ['name'],
               preload: true,
               load: function (query, callback) {
                  query = query || 'sitevision';
                  var url =
                     'https://api.github.com/search/repositories?q=' +
                     encodeURIComponent(query);
                  fetch(url)
                     .then((response) => response.json())
                     .then((json) => {
                        callback(json.items);
                     })
                     .catch(() => {
                        callback();
                     });
               },
            });
         }
      }

      (() => {
         'use strict';
         const editor = document.querySelector('.theme-editor');
         const inputs = document.querySelectorAll(
            '.theme-editor-controls input'
         );
         // const colors = document.querySelectorAll(
         //    '.theme-editor-controls [type=color]'
         // );
         // const sizes = document.querySelectorAll(
         //    '.theme-editor-controls [type=number]'
         // );
         const defaults = {
            'background-color': '#ffffff',
            'section-background-color': '#ffffff',
            'font-color': '#202330',
            'element-background-color': '#f2f2f2',
            'element-font-color': '#202330',
            'element-primary-background-color': '#2e62ff',
            'element-primary-font-color': '#ffffff',
            'element-secondary-background-color': '#4f5153',
            'element-secondary-font-color': '#ffffff',
            'block-background-color': '#ffffff',
            'block-font-color': '#202330',
            'block-border-color': '#e7e7e7',
            'block-primary-background-color': '#f7f7f7',
            'block-primary-font-color': '#202330',
            'block-primary-border-color': '#cccccc',
            'block-secondary-background-color': '#e7f1ff',
            'block-secondary-font-color': '#202330',
            'block-secondary-border-color': '#a7bed0',
            'font-size-base': 1.0,
         };

         const setVariable = (name, value) => {
            settings[name] = value;
            editor.style.setProperty('--env-' + name, value);
            localStorage.setItem('poc-theme', JSON.stringify(settings));
            if (name === 'font-size-base') {
               editor.style.setProperty('font-size', value + 'em');
            }
         };

         const reset = () => {
            inputs.forEach((input) => {
               const name = input.name;
               if (Object.prototype.hasOwnProperty.call(defaults, name)) {
                  input.value = defaults[name];
                  setVariable(name, defaults[name]);
               }
            });
         };

         const handleChange = (e) => {
            const el = e.target;
            setVariable(el.name, el.value);
         };
         let savedSettings = localStorage.getItem('poc-theme');
         let settings;
         if (savedSettings) {
            settings = JSON.parse(savedSettings);
         } else {
            settings = Object.assign({}, defaults);
         }
         if (!editor) {
            return;
         }
         inputs.forEach((input) => {
            const name = input.name;
            if (Object.prototype.hasOwnProperty.call(settings, name)) {
               input.value = settings[name];
               setVariable(name, settings[name]);
            }
            input.addEventListener('input', handleChange);
         });
         document.getElementById('reset').addEventListener('click', () => {
            if (confirm('Reset theme settings?')) {
               reset();
            }
         });
      })();
   }, [content]);
};
