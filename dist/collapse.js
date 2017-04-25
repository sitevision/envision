function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Collapse = function ($) {

   var ARIA_EXPANDED = 'aria-expanded';
   var AUTO = 'auto';
   var COLLAPSING = 'collapsing';
   var MODIFIER_BASE = 'sv-collapse--';
   var NAME = 'collapse';
   var NO_CONFLICT = $.fn[NAME];
   var SHOW = 'show';

   var TRANSITIONS = {
      transition: 'transitionend',
      OTransition: 'oTransitionEnd',
      MozTransition: 'transitionend',
      WebkitTransition: 'webkitTransitionEnd'
   };

   var Collapse = function () {
      function Collapse(element) {
         _classCallCheck(this, Collapse);

         this.el = element;
         this.$el = $(element);
      }

      Collapse.prototype.toggle = function toggle() {
         this.$el.hasClass(MODIFIER_BASE + SHOW) ? this.hide() : this.show();
      };

      Collapse.prototype.show = function show() {
         this.$el.addClass(MODIFIER_BASE + COLLAPSING).one(this.whichTransitionEvent(), this.showTransitionComplete).height(this.el.scrollHeight);
      };

      Collapse.prototype.showTransitionComplete = function showTransitionComplete(e) {
         var $target = $(e.currentTarget);

         $target.removeClass(MODIFIER_BASE + COLLAPSING).addClass(MODIFIER_BASE + SHOW).height(AUTO).attr(ARIA_EXPANDED, true);
      };

      Collapse.prototype.hide = function hide() {
         this.$el.height(this.$el.height()).removeClass(MODIFIER_BASE + SHOW).addClass(MODIFIER_BASE + COLLAPSING).one(this.whichTransitionEvent(), this.hideTransitionComplete).height(0);
      };

      Collapse.prototype.hideTransitionComplete = function hideTransitionComplete(e) {
         var $target = $(e.currentTarget);

         $target.removeClass(MODIFIER_BASE + COLLAPSING).attr(ARIA_EXPANDED, false);
      };

      Collapse.prototype.whichTransitionEvent = function whichTransitionEvent() {
         var el = document.createElement('fakeelement');

         for (t in TRANSITIONS) {
            if (el.style[t] !== undefined) {
               return TRANSITIONS[t];
            }
         }
      };

      Collapse._jQuery = function _jQuery() {
         return this.each(function () {
            var data = new Collapse(this);

            data.toggle();
         });
      };

      return Collapse;
   }();

   $.fn[NAME] = Collapse._jQuery;
   $.fn[NAME].Constructor = Collapse;
   $.fn[NAME].noConflict = function () {
      $.fn[NAME] = NO_CONFLICT;
      return Collapse._jQuery;
   };

   $(document).on('click', '[data-sv-collapse]', function (e) {
      e.preventDefault();

      var $this = $(this);
      var target = $this.attr('href') || $this.attr('data-target');
      var $target = $(target);

      if ($target.hasClass(MODIFIER_BASE + COLLAPSING)) {
         return;
      }

      $target.collapse();
   });

   return Collapse;
}(jQuery);
//# sourceMappingURL=../dist/map/collapse.js.map
