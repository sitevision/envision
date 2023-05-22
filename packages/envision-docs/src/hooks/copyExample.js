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

      const envision = window.envision;

      // Remove possible remaining popovers from Popover page
      document
         .querySelectorAll('.env-popover[role="tooltip"]')
         .forEach((el) => {
            el.parentNode.removeChild(el);
         });

      // Initialize Envision plugins
      // TODO: Would be much nicer to use webpack externals, bu we run into a build issue..
      envision.popover('#example-popover-data');

      const popoverContentEl = document.querySelector(
         '#example-popover-content'
      );
      if (popoverContentEl) {
         envision.popover('#example-popover-button', {
            placement: 'bottom',
            title: 'Lorem ipsum',
            content: popoverContentEl,
            escapeContent: false,
            clickOutside: true,
         });
      }

      const popoverMenuContentEl = document.querySelector(
         '#example-popover-menu-content'
      );
      if (popoverMenuContentEl) {
         envision.popover('#example-popover-menu-button', {
            placement: 'top',
            title: 'Popover menu',
            content: popoverMenuContentEl,
            escapeContent: false,
            clickOutside: true,
            type: 'menu',
         });
      }

      const popoverTooltipContentEl = document.querySelector(
         '#example-popover-tooltip-content'
      );
      if (popoverTooltipContentEl) {
         envision.popover('#example-popover-tooltip-button', {
            placement: 'top',
            title: 'Popover tooltip',
            content: popoverTooltipContentEl,
            escapeContent: false,
            clickOutside: true,
            type: 'tooltip',
         });
      }

      envision.tabs(
         '.example-tabs, .example-tabs1, .example-tabs2, .example-tabs3'
      );

      envision.rangeSlider('.example-range-slider', { values: [20, 70] });

      const exampleSelects = document.querySelectorAll('.example-tag-select');
      for (let i = 0; exampleSelects && i < exampleSelects.length; i++) {
         envision.select(exampleSelects, {
            maxItems: 6,
            create: true,
            i18n: 'en',
         });
      }

      const singleSelectEl1 = document.querySelector(
         '#example-tag-select-single-1'
      );
      if (singleSelectEl1) {
         envision.select(singleSelectEl1, {
            maxItems: 1,
            i18n: 'en',
         });
      }

      const singleSelectEl2 = document.querySelector(
         '#example-tag-select-single-2'
      );
      if (singleSelectEl2) {
         envision.select(singleSelectEl2, {
            maxItems: 1,
            allowEmptyOption: true,
            sortField: [{ field: '$order' }, { field: '$score' }],
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
               render: {
                  item: (data, escape) =>
                     `<div>
                        <svg class="env-icon env-m-right--x-small"><use xlink:href="/sitevision/envision-icons.svg#icon-check-line"></use></svg>
                        ${escape(data.text)}
                     </div>`,
               },
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
               sortField: [{ field: 'name', direction: 'desc' }],
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

      envision.tooltip();

      const tooltipEl = document.querySelectorAll(
         '.example-custom-init-tooltip'
      );
      if (tooltipEl) {
         envision.tooltip(tooltipEl, {
            placement: 'right',
            delay: 300,
         });
      }

      // Disable example links
      const links = document.querySelectorAll('a[href="#"]');
      links.forEach((link) => {
         link.addEventListener('click', (e) => {
            e.preventDefault();
         });
      });
      // Disable example forms
      const forms = document.querySelectorAll('form[action="/"]');
      forms.forEach((form) => {
         form.addEventListener('submit', (e) => {
            e.preventDefault();
         });
      });

      // To initialize Image slider examples,
      // load method must be triggered again in gatsby.
      window.dispatchEvent(new Event('load'));
   }, [content]);
};
