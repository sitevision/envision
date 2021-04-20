/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import jQuery from 'jquery';

const Dropdown = (($) => {
   const NAME = 'envDropdown';
   const NO_CONFLICT = $.fn[NAME];
   const ENV_DROPDOWN_OPEN = 'env-is-open';
   const TOGGLE_DROPDOWN = '[data-dropdown]';
   const ENV_DROPDOWN = '.env-dropdown';
   const ENV_CLICK_EVENT = 'click.env-dropdown';
   const ENV_KEYDOWN_EVENT = 'keydown.env-dropdown';
   const ENV_KEYUP_EVENT = 'keyup.env-dropdown';
   const ENV_DROPDOWN_MENU = '.env-dropdown__menu';
   const RIGHT_MOUSE_BUTTON = 2;
   const KEYS = {
      ESCAPE_KEY: 'Escape',
      ARROWDOWN: 'ArrowDown',
      ARROWUP: 'ArrowUp',
      SPACE: 32,
      TAB_KEY: 'Tab',
   };
   const REGEXP_KEYDOWN = new RegExp(
      `${KEYS.ARROWUP}|${KEYS.ARROWDOWN}|${KEYS.ESCAPE_KEY}`
   );

   class Dropdown {
      constructor(element) {
         this.el = element;
         this.$el = $(element);
         this._id = this.el.id;
      }

      toggle() {
         if (this.$el.hasClass(ENV_DROPDOWN_OPEN)) {
            this.hide();
         } else {
            this.show();
         }
      }

      show() {
         this.$el.addClass(ENV_DROPDOWN_OPEN);

         this.$el.find(TOGGLE_DROPDOWN).attr('aria-expanded', 'true');

         this._bindEvents();
      }

      hide() {
         this.$el.removeClass(ENV_DROPDOWN_OPEN);

         this.$el.find(TOGGLE_DROPDOWN).attr('aria-expanded', 'false');

         this._unbindEvents();
      }

      _bindEvents() {
         const ENV_CLICK = `${ENV_CLICK_EVENT}-${this.el.id}`;
         const ENV_KEYDOWN = `${ENV_KEYDOWN_EVENT}-${this.el.id}`;

         $(document)
            .off(ENV_CLICK)
            .on(ENV_CLICK, (event) => {
               if (!$(event.target).hasClass(ENV_DROPDOWN_MENU)) {
                  this.hide();
               }
            });

         this.$el.off(ENV_KEYDOWN).one(ENV_KEYDOWN, (event) => {
            if (event.key === KEYS.ESCAPE_KEY) {
               this.hide();
            }
         });
      }

      _unbindEvents() {
         $(document).off(`${ENV_CLICK_EVENT}-${this.el.id}`);
         this.$el.off(`${ENV_KEYDOWN_EVENT}-${this.el.id}`);
      }

      static _jQuery(config) {
         return this.each(function () {
            const $this = $(this);
            let data = $this.data('env.dropdown');

            if (!data) {
               data = new Dropdown(this);
               $this.data('env.dropdown', data);
            }

            if (typeof config === 'string') {
               const method = data[config];
               if (method === undefined) {
                  throw new Error(`No method named "${config}"`);
               }
               method.call(data);
               return;
            }

            data.toggle();
         });
      }
   }

   function selectMenuItem(event, $items) {
      if (!$items.length) {
         return;
      }

      let index = $items.index(event.target);

      if (event.key === KEYS.ARROWUP && index > 0) {
         index--;
      }

      if (event.key === KEYS.ARROWDOWN && index < $items.length - 1) {
         index++;
      }

      index = index === -1 ? 0 : index;

      $items[index].focus();
   }

   function clearMenus(event) {
      if (event) {
         if (
            event.button === RIGHT_MOUSE_BUTTON ||
            (event.type === 'keyup' && event.key !== KEYS.TAB_KEY)
         ) {
            return;
         }
      }

      const $toggles = $(TOGGLE_DROPDOWN);

      for (let i = 0, len = $toggles.length; i < len; i++) {
         const data = $($toggles[i]).closest(ENV_DROPDOWN).data('env.dropdown');

         if (!data) {
            continue;
         }
         const dropdownMenu = data.$el.find(ENV_DROPDOWN_MENU)[0];

         if (event) {
            if (
               event.originalEvent.path.includes(
                  document.documentElement.getElementsByClassName(
                     'env-dropdown env-is-open'
                  )[0]
               )
            ) {
               continue;
            }

            if (
               event.type === 'keyup' &&
               event.key === KEYS.TAB_KEY &&
               dropdownMenu.contains(event.originalEvent.target)
            ) {
               continue;
            }
         }

         data.hide();
      }
   }

   function KeydownHandler(event) {
      if (!REGEXP_KEYDOWN.test(event.key)) {
         return;
      }

      const isActive = $(this)
         .closest(ENV_DROPDOWN)
         .hasClass(ENV_DROPDOWN_OPEN);

      if (!isActive && event.key === KEYS.ESCAPE_KEY) {
         return;
      }

      event.preventDefault();
      event.stopPropagation();

      const getToggleButton = () =>
         this.matches(TOGGLE_DROPDOWN)
            ? this
            : $(this).closest(ENV_DROPDOWN).find(TOGGLE_DROPDOWN)[0];

      if (event.key === KEYS.ESCAPE_KEY) {
         clearMenus();
         getToggleButton().focus();

         return;
      }

      if (
         !isActive &&
         (event.key === KEYS.ARROWUP || event.key === KEYS.ARROWDOWN)
      ) {
         getToggleButton().click();
         return;
      }

      if (!isActive || event.which === KEYS.SPACE) {
         clearMenus();

         return;
      }

      const $dropdown = $(this).closest(ENV_DROPDOWN);

      selectMenuItem(event, $dropdown.find('.env-dropdown__item'));
   }

   $.fn[NAME] = Dropdown._jQuery;
   $.fn[NAME].Constructor = Dropdown;
   $.fn[NAME].noConflict = () => {
      $.fn[NAME] = NO_CONFLICT;
      return Dropdown._jQuery;
   };

   $(document).on('click', TOGGLE_DROPDOWN, function (e) {
      e.preventDefault();

      const $this = $(this);
      const $target = $($this.data('target'));

      $target[NAME]();
   });

   $(document).on(ENV_KEYDOWN_EVENT, TOGGLE_DROPDOWN, KeydownHandler);

   $(document).on(ENV_KEYDOWN_EVENT, ENV_DROPDOWN_MENU, KeydownHandler);

   $(document).on(ENV_KEYUP_EVENT, clearMenus);

   return Dropdown;
})(jQuery);

export default Dropdown;
