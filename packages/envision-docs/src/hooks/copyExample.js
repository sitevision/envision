import * as React from 'react';

export const useCopyExample = (content) => {
   React.useEffect(() => {
      // Initialize Code Highlighter
      content.current
         .querySelectorAll(
            '.gatsby-highlight[data-language=html], .gatsby-highlight[data-language=html-resizeable]'
         )
         .forEach((element) => {
            const example = document.createElement('div');
            example.classList.add('code-example');
            element.dataset.language === 'html-resizeable' &&
               example.classList.add('code-example--resizeable');
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

      const demoImageViewer2 = document.querySelector('#demoImageViewer2');
      demoImageViewer2 &&
         envision.imageViewer2(demoImageViewer2, {
            slides: {
               auto: 2000,
               playing: false,
            },
         });

      const imageViewer2_1 = document.querySelector('#example-imageviewer2-1');
      imageViewer2_1 && envision.imageViewer2(imageViewer2_1);

      const imageViewer2_2 = document.querySelector('#example-imageviewer2-2');
      imageViewer2_2 &&
         envision.imageViewer2(imageViewer2_2, {
            slides: {
               auto: 3000,
               playing: false,
               overlay: false,
               buttons: {
                  type: 'secondary',
                  size: 'slim',
               },
            },
         });

      // TODO: Would be much nicer to use webpack externals, bu we run into a build issue..
      envision.popover('#example-popover-data');

      // Delayed spinner demo
      const showDelayedSpinner = (delay) => {
         const spinner = document.querySelector(
            '#demo-delayed-spinner .env-spinner'
         );
         spinner.classList.add('env-spinner--hide');
         spinner.classList.remove('env-spinner--fade-in');
         spinner.dataset.delay = delay;
         setTimeout(() => {
            spinner.classList.remove('env-spinner--hide');
            spinner.classList.add('env-spinner--fade-in');
         }, 1);
      };

      document
         .querySelector('#toggle-spinner-1')
         ?.addEventListener('click', () => showDelayedSpinner('short'));
      document
         .querySelector('#toggle-spinner-2')
         ?.addEventListener('click', () => showDelayedSpinner('medium'));
      document
         .querySelector('#toggle-spinner-3')
         ?.addEventListener('click', () => showDelayedSpinner('long'));

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

      // Dialog examples
      for (let i = 1; i <= 5; i++) {
         let dialog = document.querySelector(`#example-dialog-${i}`);
         let alertdialog = document.querySelector(`#example-alertdialog-${i}`);
         if (dialog) {
            envision.dialog(dialog, {
               opener: `#example-dialog-${i}-opener`,
            });
         }
         if (alertdialog) {
            envision.dialog(alertdialog, {
               opener: `#example-alertdialog-${i}-opener`,
            });
         }
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

      // Wrap Dashboard specific Envision styling
      // so it doesn't leak into other doc pages.
      const DASHBOARD_THEME = 'env-dashboard-theme';
      const wrapDashboardRule = (s) => {
         const a = s.split(',');
         a.forEach((s2, i) => {
            a[i] = `.${DASHBOARD_THEME} ${s2}`.replace(/\s\s+/g, ' ');
         });
         return a.join(', ');
      };

      for (let i = 0; i < document.styleSheets.length; i++) {
         if (document.styleSheets[i].href?.includes('dashboard')) {
            const ruleList = document.styleSheets[i].cssRules;
            for (let j = 0; j < ruleList.length; j++) {
               if (ruleList[j].selectorText.includes('p.env-text')) {
                  if (!ruleList[j].selectorText.includes(DASHBOARD_THEME)) {
                     ruleList[j].selectorText = wrapDashboardRule(
                        ruleList[j].selectorText
                     );
                  }
                  break;
               }
            }

            break;
         }
      }

      // Dynamic font examples
      const resizeObserver = new ResizeObserver((containers) => {
         for (const container of containers) {
            const containerEl = container.target;
            const dynFontEl = containerEl.querySelector('.env-dynamic-font');
            if (!dynFontEl || !containerEl) {
               return;
            }
            const wrapperEl = containerEl.closest(
               '.example-dynamic-font-wrapper'
            );
            const containerWidthOutputEl = wrapperEl.querySelector(
               '.example-dynamic-font__width'
            );
            const dfSizeEl = containerEl.querySelector(
               '.example-dynamic-font__dffontsize'
            );
            const elSizeEl = containerEl.querySelectorAll(
               '.example-dynamic-font__elfontsize'
            );

            const cs = getComputedStyle(dynFontEl);

            if (dfSizeEl) {
               const fromWidth = parseInt(
                  cs.getPropertyValue('--df-from-width'),
                  10
               );
               const toWidth = parseInt(
                  cs.getPropertyValue('--df-to-width'),
                  10
               );
               const containerWidth = containerEl.offsetWidth;
               wrapperEl.classList.toggle(
                  'example-dynamic-font-wrapper--in-span',
                  containerWidth >= fromWidth && containerWidth <= toWidth
               );
            }

            if (containerWidthOutputEl) {
               containerWidthOutputEl.innerHTML = `${containerEl.offsetWidth}`;
            }
            if (dfSizeEl) {
               dfSizeEl.innerHTML = `${(parseFloat(cs.fontSize) / 16).toFixed(
                  3
               )}`;
            }
            elSizeEl.forEach((el) => {
               const cs = getComputedStyle(el.parentNode);
               el.innerHTML = `${
                  Math.round((parseFloat(cs.fontSize) / 16) * 10000) / 10000
               }em`;
            });
         }
      });

      const dynFontExamples = document.querySelectorAll(
         '.example-dynamic-font-wrapper .env-container'
      );
      dynFontExamples.forEach((container) => {
         resizeObserver.observe(container);
      });

      // To initialize Image slider examples,
      // load method must be triggered again in gatsby.
      window.dispatchEvent(new Event('load'));
   }, [content]);
};
