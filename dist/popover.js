var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Popover = function ($) {
   var _DEFAULTS;

   var NAME = 'popover';
   var IDENTIFIER = 'sv.popover';
   var EVENT_NAMESPACE = '.' + IDENTIFIER;
   var NO_CONFLICT = $.fn[NAME];
   var CLASS_PREFIX = 'sv-tether';

   var attachmentMapping = {
      top: 'bottom center',
      bottom: 'top center',
      left: 'middle right',
      right: 'middle left'
   };

   var offsetMapping = {
      top: '10 0',
      bottom: '-10 0',
      left: '0 10',
      right: '0 -10'
   };

   var DEFAULTS = (_DEFAULTS = {
      placement: 'top',
      constraints: [],
      container: 'body',
      content: '',
      escapeContent: true,
      customOffset: undefined
   }, _DEFAULTS['placement'] = 'top', _DEFAULTS.template = '<div class="sv-popover" role="tooltip">\n                  <div class="sv-popover__arrow"></div>\n                  <div class="sv-popover__header">\n                     <h3 class="sv-popover__header__title"></h3>\n                  </div>\n                  <div class="sv-popover__content"></div>\n               </div>', _DEFAULTS.title = '', _DEFAULTS.trigger = 'click', _DEFAULTS);

   var Popover = function () {
      function Popover(element, config) {
         _classCallCheck(this, Popover);

         this.el = element;
         this.$el = $(this.el);
         this.config = $.extend({}, DEFAULTS, this.$el.data(), config);

         this.bindEvents();
      }

      Popover.prototype.bindEvents = function bindEvents() {
         var _this = this;

         var triggers = this.config.trigger.split(' ');

         triggers.forEach(function (trigger) {
            if (trigger === 'click') {
               _this.$el.on(_this.config.trigger + EVENT_NAMESPACE, function () {
                  if (_this.isShowing) {
                     _this.hide();
                  } else {
                     _this.show();
                  }
               });
            } else {
               var hoverTrigger = trigger === 'hover';
               var inEvent = hoverTrigger ? 'mouseenter' : 'focusin';
               var outEvent = hoverTrigger ? 'mouseleave' : 'focusout';

               _this.$el.on(inEvent + EVENT_NAMESPACE, function () {
                  if (!_this.isShowing) {
                     _this.show();
                  }
               }).on(outEvent + EVENT_NAMESPACE, function () {
                  if (_this.isShowing) {
                     _this.hide();
                  }
               });
            }
         });
      };

      Popover.prototype.getPopoverElement = function getPopoverElement() {
         return this.$popoverElement = this.$popoverElement || $(this.config.template);
      };

      Popover.prototype.setText = function setText($popoverElement, selector, text) {
         $popoverElement.find(selector)[this.config.escapeContent ? 'text' : 'html'](text);
      };

      Popover.prototype.setTitle = function setTitle($popoverElement) {
         this.setText($popoverElement, '.sv-popover__header__title', this.config.title);
      };

      Popover.prototype.setContent = function setContent($popoverElement) {
         this.setText($popoverElement, '.sv-popover__content', this.config.content);
      };

      Popover.prototype.setArrowPosition = function setArrowPosition($popoverElement) {
         $popoverElement.find('.sv-popover__arrow').addClass('sv-popover__arrow--' + this.config.placement);
      };

      Popover.prototype._getOffset = function _getOffset() {
         return this.config.customOffset || offsetMapping[this.config.placement];
      };

      Popover.prototype.hide = function hide() {
         var $popoverElement = this.getPopoverElement();

         $popoverElement.detach();
         this.isShowing = false;
      };

      Popover.prototype.show = function show() {
         var $popoverElement = this.getPopoverElement();

         this.setTitle($popoverElement);
         this.setContent($popoverElement);
         this.setArrowPosition($popoverElement);

         $('body').append($popoverElement);

         this._tether = new Tether({
            attachment: attachmentMapping[this.config.placement],
            element: $popoverElement,
            target: this.el,
            classes: { element: false, enabled: false },
            classPrefix: CLASS_PREFIX,
            offset: this._getOffset(),
            constraints: this.config.constraints,
            addTargetClasses: false
         });

         this._tether.position();

         this.isShowing = true;
      };

      Popover.prototype.destroy = function destroy() {
         this.hide();

         this.$popoverElement = undefined;
         this._tether = undefined;
         this.isShowing = false;
         this.$el.removeData(IDENTIFIER);
      };

      Popover._jQuery = function _jQuery(config) {
         return this.each(function () {
            var $this = $(this);
            var data = $this.data(IDENTIFIER);

            if (!data && /destroy|hide/.test(config)) {
               return;
            }

            if (!data) {
               data = new Popover(this, (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : null);
               $this.data(IDENTIFIER, data);
            }

            if (typeof config === 'string') {
               var method = data[config];

               if (!method) {
                  throw new Error('Invalid method name "' + config + '"');
               }

               method.call(data);
            }
         });
      };

      return Popover;
   }();

   ;

   $.fn[NAME] = Popover._jQuery;
   $.fn[NAME].Constructor = Popover;
   $.fn[NAME].noConflict = function () {
      $.fn[NAME] = NO_CONFLICT;
      return Popover._jQuery;
   };

   return Popover;
}(jQuery);
//# sourceMappingURL=../dist/map/popover.js.map
