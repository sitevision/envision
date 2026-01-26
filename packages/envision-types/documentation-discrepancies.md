# Documentation Discrepancies

This document lists features and APIs found in the Envision source code that are not documented in the online documentation at https://envisionui.io/

## Accordion Component

**Documentation:** https://envisionui.io/components/accordion/

### Missing Features

1. **Direct Method Invocation**
   - The component supports calling methods directly via the settings parameter:

   ```javascript
   envision.accordion('#container1', 'show');
   envision.accordion('#container1', 'hide');
   envision.accordion('#container1', 'toggle');
   ```

   - Currently only documented as: `accordions[0].show()`

2. **Toggler Element Parameter**
   - The accordion function accepts a toggler element as the second parameter:

   ```javascript
   envision.accordion('#container1', togglerElement);
   ```

3. **Instance Properties**
   - The following properties are publicly accessible but not documented:
      - `el` - The accordion content element
      - `parentEl` - The parent container (when using data-parent)
      - `togglerEl` - The button/link that toggles the accordion
      - `speed` - Animation duration in milliseconds

4. **CSS Custom Property**
   - The code reads animation speed from the `--env-collapse-toggle-duration` CSS custom property
   - This can be used to customize animation speed but is not documented

5. **jQuery Interface (Legacy)**
   - The code still supports jQuery syntax: `$().envAccordion()`
   - Shows a deprecation warning but is still functional

## Select Component (Tag Select)

**Documentation:** https://envisionui.io/forms/tag-select/

### Missing Features

1. **Instance Properties**
   - The following properties are publicly accessible but not documented:
      - `el` - The original select/input element
      - `settings` - The configuration settings object for this instance

   ```javascript
   envision.select('#my-select').then(function (selects) {
      console.log(selects[0].el); // Access original element
      console.log(selects[0].settings); // Access current settings
   });
   ```

2. **CSS Class for Locked State**
   - The code explicitly checks for `env-select--locked` class
   - While shown in HTML examples, it's not clearly stated that this class can be added programmatically to lock a select

3. **Readonly Attribute Behavior**
   - The `readonly` attribute is treated the same as locked state
   - This is mentioned briefly but could be clearer that it's an alternative way to lock the component

4. **Single Select Arrow Icon**
   - The code automatically adds an arrow-down icon (`icon-angle-down`) for single selects
   - This automatic feature is not documented

## Collapse Component

**Documentation:** https://envisionui.io/components/collapse/

### Missing Features

1. **Instance Properties**
   - The following properties are publicly accessible but not documented:
      - `el` - The collapse content element
      - `togglerEl` - The button/link that toggles the collapse
      - `speed` - Animation duration in milliseconds

   ```javascript
   envision.collapse('#myCollapse').then(function (collapses) {
      console.log(collapses[0].el); // Access content element
      console.log(collapses[0].togglerEl); // Access toggler button
      console.log(collapses[0].speed); // Animation speed
   });
   ```

2. **CSS Custom Property**
   - The code reads animation speed from the `--env-collapse-toggle-duration` CSS custom property
   - This can be set on the toggler element to customize animation speed but is not documented

3. **Direct Method Invocation**
   - The component supports calling methods directly via the settings parameter:

   ```javascript
   envision.collapse('#myCollapse', 'show');
   envision.collapse('#myCollapse', 'hide');
   envision.collapse('#myCollapse', 'toggle');
   ```

   - Currently only documented as: `collapses[0].show()`

4. **jQuery Interface (Legacy)**
   - The code still supports jQuery syntax: `$().envCollapse()`
   - Shows a deprecation warning but is still functional

## Dialog Component

**Documentation:** https://envisionui.io/components/dialog/

### Missing Features

1. **Private Properties Access**
   - Several internal properties are defined but not publicly documented or accessible:
      - `#opener` - The opener element(s)
      - `#initialized` - Initialization state
      - `#modalEventsBound` - Event binding state
      - `#elementPlaceholder` - Placeholder element for placement feature
   - Note: These are private fields and intentionally not exposed in the public API

2. **Internal Methods**
   - Several internal methods exist but are not part of the public API:
      - `_bindThis()` - Binds method contexts
      - `_fadeIn()` - Handles fade-in animation
      - `_bindModalEvents()` - Binds dialog events
      - `_bindOpenEvent()` - Binds opener click events
   - Note: These are implementation details and not meant for public use

3. **Automatic Backdrop Click Handling for Alert Dialogs**
   - The code automatically sets `backdropClick` to false for elements with `role="alertdialog"`
   - This is mentioned in the documentation but could be more prominent
   - The Escape key also does not close alert dialogs

4. **Animation Classes**
   - The code uses `env-dialog--fade` and `env-dialog--in` classes for animations
   - These are automatically applied and don't need to be in the HTML (unlike shown in some examples)

5. **Focus Trap Implementation**
   - The component implements a focus trap to keep tab navigation within the dialog
   - This is mentioned but the implementation details (handling Tab, Shift+Tab, etc.) are not documented

6. **Scroll Lock**
   - The component automatically locks body scroll when the dialog opens
   - This is not mentioned in the documentation

### Observations

Unlike other components, Dialog does NOT support:

- jQuery interface (no `$.fn.envDialog`)
- Direct method invocation via string parameter
- Selector strings (requires actual DOM element)

The Dialog component is more modern and doesn't include legacy compatibility features.

## Image Viewer 2 Component

**Documentation:** https://envisionui.io/components/image-viewer-2/

### Missing Features

1. **Instance Properties**
   - The following properties are publicly accessible but not documented:
      - `el` - The container element
      - `config` - The configuration settings object
      - `lightbox` - The lightbox instance (always available)
      - `slider` - The slider instance (only if slides config is set)

   ```javascript
   envision.imageViewer2('#viewer').then(function (viewers) {
      console.log(viewers[0].el); // Access container
      console.log(viewers[0].config); // Access config
      viewers[0].slider.pause(); // Control slider
      viewers[0].lightbox.show(1); // Control lightbox
   });
   ```

2. **Slider Conditional Availability**
   - The `slider` property only exists if `slides` config is provided
   - Not explicitly stated in documentation but shown in API examples

3. **Auto-initialization**
   - Component waits for Swipe library to load before initialization
   - This async dependency is handled internally but not documented

### Observations

- No jQuery interface
- No direct method invocation via string parameter
- Modern component without legacy compatibility

## Popover Component

**Documentation:** https://envisionui.io/components/popover/

### Missing Features

1. **Instance Properties**
   - The following properties are publicly accessible but not documented:
      - `el` - The trigger element
      - `config` - The configuration settings object
      - `isShowing` - Whether the popover is currently showing

   ```javascript
   envision.popover('#trigger').then(function (popovers) {
      console.log(popovers[0].el); // Access trigger
      console.log(popovers[0].config); // Access config
      console.log(popovers[0].isShowing); // Check state
   });
   ```

2. **Direct Method Invocation**
   - The component supports calling methods directly via the settings parameter:

   ```javascript
   envision.popover('#trigger', 'show');
   envision.popover('#trigger', 'hide');
   envision.popover('#trigger', 'destroy');
   ```

3. **jQuery Interface (Legacy)**
   - The code still supports jQuery syntax: `$().envPopover()`
   - Shows a deprecation warning but is still functional

4. **Advanced Methods**
   - `render()` - Re-render the popover (not documented in API section)
   - `updateConfig(config)` - Update configuration options (not documented in API section)

5. **Internal Implementation Details**
   - Complex keyboard navigation with Tab, Shift+Tab, Arrow keys for menus
   - Focus trap implementation for menu popover type
   - Hover intent handling with delays
   - These behaviors work but aren't explicitly documented

6. **Constraints Option**
   - The `constraints` config option exists in code but is not documented
   - Appears to be legacy or internal use

## Tabs Component

**Documentation:** https://envisionui.io/components/tab/

### Missing Features

1. **Instance Properties**
   - The following properties are publicly accessible but not documented:
      - `el` - The tabs container element
      - `tabs` - Array of tab elements
      - `panels` - Map of panel elements keyed by tab ID
      - `activeTab` - The currently active tab element
      - `config` - The configuration settings object

   ```javascript
   envision.tabs('.example-tabs').then(function (tabInstances) {
      console.log(tabInstances[0].el); // Container
      console.log(tabInstances[0].tabs); // Tab elements array
      console.log(tabInstances[0].activeTab); // Current tab
   });
   ```

2. **Custom Event**
   - The component dispatches a `envision.tabs.activated` custom event
   - Event detail contains: `{ tab: HTMLElement, panel: HTMLElement }`
   - This is not mentioned in the documentation

   ```javascript
   document
      .querySelector('.env-tabs')
      .addEventListener('envision.tabs.activated', (e) => {
         console.log('Tab activated:', e.detail.tab, e.detail.panel);
      });
   ```

3. **Direct Method Invocation**
   - The component supports calling methods directly via the settings parameter:

   ```javascript
   envision.tabs('.example-tabs', 'activate', 2); // Activate tab at index 2
   envision.tabs('.example-tabs', 'destroy');
   ```

4. **jQuery Interface (Legacy)**
   - The code still supports jQuery syntax: `$().envTabs()`
   - Shows a deprecation warning but is still functional

5. **Keyboard Navigation**
   - Arrow key navigation (Left/Right for horizontal, Up/Down for stacked)
   - Enter/Space to activate focused tab
   - These keyboard interactions work but aren't documented in detail

6. **Automatic Initialization Behavior**
   - Component sets up ARIA attributes, tabindex, and initial state automatically
   - Legacy selector fallback for panels (href attribute support)
   - These automatic behaviors aren't fully documented

## Tooltip Component

**Documentation:** https://envisionui.io/components/tooltip/

### Missing Features

1. **Instance Properties**
   - The following properties are publicly accessible but not documented:
      - `container` - The tooltip container element
      - `el` - The trigger element (child without role="tooltip")
      - `tooltip` - The tooltip element (child with role="tooltip")
      - `config` - The configuration settings object
      - `isShowing` - Whether the tooltip is currently showing

   ```javascript
   envision.tooltip('.my-tooltip').then(function (tooltips) {
      console.log(tooltips[0].container); // Container element
      console.log(tooltips[0].el); // Trigger element
      console.log(tooltips[0].tooltip); // Tooltip element
      console.log(tooltips[0].isShowing); // Current state
   });
   ```

2. **Direct Method Invocation**
   - The component supports calling methods directly via the settings parameter:

   ```javascript
   envision.tooltip('.my-tooltip', 'show');
   envision.tooltip('.my-tooltip', 'hide');
   envision.tooltip('.my-tooltip', 'destroy');
   ```

3. **Auto-initialization**
   - All elements with class `env-tooltip` are automatically initialized on `DOMContentLoaded`
   - This is documented but the default selector behavior isn't clearly stated in the API section

4. **Modifiers Option**
   - The `modifiers` config option exists for advanced Popper.js configuration
   - Not documented but available for advanced positioning needs

5. **Inline Display Handling**
   - Automatically adds `env-tooltip--inline` class for inline container elements
   - Sets `display: inline-block` for proper positioning
   - This automatic behavior is not documented

6. **Keyboard Interaction**
   - Pressing Escape closes the tooltip
   - This keyboard interaction is not documented

### Observations

Unlike other components, Tooltip does NOT support:

- jQuery interface (no `$.fn.envTooltip`)
- Component follows modern patterns without legacy compatibility

## Range Slider Component

**Documentation:** https://envisionui.io/forms/range-slider/

### Missing Features

1. **Instance Properties**
   - The following properties are publicly accessible but not documented:
      - `el` - The slider container element
      - `config` - The configuration settings object for this instance
      - `handlesEl` - Array of handle elements
      - `rangeEl` - The range indicator element
      - `valueHoldersEl` - Array of value display elements (if visibleValues is true)

   ```javascript
   envision.rangeSlider('#my-slider').then(function (sliders) {
      console.log(sliders[0].el); // Access slider element
      console.log(sliders[0].config); // Access current config
      console.log(sliders[0].handlesEl); // Access handle elements
   });
   ```

2. **Deprecated Callback Options**
   - The config supports `slide` and `slidestop` callback functions (deprecated)
   - These work as config options in addition to the documented event listeners

   ```javascript
   envision.rangeSlider('#my-slider', {
      slide: function (event, data) {
         // Deprecated: Use addEventListener('input') instead
      },
      slidestop: function (event, data) {
         // Deprecated: Use addEventListener('change') instead
      },
   });
   ```

3. **jQuery Interface (Legacy)**
   - The code still supports jQuery syntax: `$().envRangeSlider()`
   - Shows a deprecation warning but is still functional

4. **Direct Method Invocation**
   - The component supports calling methods directly via the settings parameter:
   ```javascript
   envision.rangeSlider('#my-slider', 'values', [30, 80]);
   ```

## Notes

- All discrepancies have been addressed in the TypeScript type definitions
- These features are implemented and working, they just need documentation updates
