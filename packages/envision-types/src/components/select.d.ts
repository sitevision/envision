/**
 * Select (Tag Select) component TypeScript definitions
 * Documentation: https://envisionui.io/components/select
 */

declare namespace Envision {
  interface SelectOption {
    value: string;
    text: string;
  }

  interface SelectRenderFunctions {
    item?: (data: SelectOption, escape: (str: string) => string) => string;
    option?: (data: SelectOption, escape: (str: string) => string) => string;
    option_create?: (data: SelectOption, escape: (str: string) => string) => string;
    no_results?: (data: SelectOption, escape: (str: string) => string) => string;
    loading?: (data: SelectOption, escape: (str: string) => string) => string;
  }

  interface SelectSortField {
    field: string;
    direction?: 'asc' | 'desc';
  }

  interface SelectConfig {
    /** The max number of items the user can select. Default: null (unlimited). Set to 1 for single select. */
    maxItems?: number | null;
    /** Allow adding new tags. Default: false */
    create?: boolean;
    /** RegExp or function to validate new tags */
    createFilter?: RegExp | string | ((input: string) => boolean);
    /** Show clear all button. Default: true. Not available in single select. */
    clearButton?: boolean;
    /** Only available in single select. Option with no value will be selectable if true. Default: false */
    allowEmptyOption?: boolean;
    /** Custom placeholder text */
    placeholder?: string;
    /** The element the dropdown menu is appended to */
    dropdownParent?: string;
    /** Create a Tag select from custom dataset */
    options?: SelectOption[];
    /** Limits the number of visible options. Default: null (unlimited) */
    maxOptions?: number | null;
    /** An array of the initial selected values */
    items?: string[];
    /** Translation of UI elements */
    i18n?: 'sv' | 'en' | 'no' | {
      add?: string;
      no_results?: string;
      remove_button?: string;
      clear_button?: string;
    };
    /** Function to load options from remote source */
    load?: (query: string, callback: (data?: SelectOption[]) => void) => void;
    /** If true, load function will be called on init. Can be 'focus' to call on focus. */
    preload?: boolean | 'focus';
    /** The property name to render as an option/item label */
    labelField?: string;
    /** The property name to use as the value */
    valueField?: string;
    /** Property name(s) to search when filtering */
    searchField?: string | string[];
    /** Sort configuration for options */
    sortField?: string | SelectSortField[] | ((a: SelectOption, b: SelectOption) => number);
    /** Custom render functions */
    render?: SelectRenderFunctions;
    /** Invoked once the control is completely initialized */
    onInitialize?: () => void;
    /** Invoked when the value of the control changes */
    onChange?: (value: string) => void;
    /** Invoked when an item is selected */
    onItemAdd?: (value: string, item: HTMLElement) => void;
    /** Invoked when an item is deselected */
    onItemRemove?: (value: string) => void;
    /** Invoked when the control is manually cleared */
    onClear?: () => void;
    /** Invoked when a new option is added to the available options list */
    onOptionAdd?: (value: string, data: SelectOption) => void;
    /** Invoked when an option is removed from the available options */
    onOptionRemove?: (value: string) => void;
    /** Invoked when all options are removed from the control */
    onOptionClear?: () => void;
    /** Invoked when the dropdown opens */
    onDropdownOpen?: (dropdown: HTMLElement) => void;
    /** Invoked when the dropdown closes */
    onDropdownClose?: (dropdown: HTMLElement) => void;
    /** Invoked when the user types while filtering options */
    onType?: (str: string) => void;
    /** Invoked when the control gains focus */
    onFocus?: () => void;
    /** Invoked when the control loses focus */
    onBlur?: () => void;
    /** Invoked when new options have been loaded via the load option */
    onLoad?: () => void;
  }

  interface SelectInstance {
    /** The original select/input element */
    readonly el: HTMLElement;
    /** The configuration settings for this instance */
    readonly settings: SelectConfig;

    /** Adds an available option or array of options */
    addOptions(data: SelectOption | SelectOption[]): void;
    /** Retrieves the DOM element for the option identified by the given value */
    getOption(value: string): HTMLElement | null;
    /** Updates an option available for selection */
    updateOption(value: string, data: SelectOption): void;
    /** Removes the option identified by the given value */
    removeOption(value: string): void;
    /** Refreshes the list of available options */
    refreshOptions(triggerDropdown?: boolean): void;
    /** Invoked when new options should be loaded from the server */
    load(query: string): void;
    /** Shows the autocomplete dropdown */
    open(): void;
    /** Closes the autocomplete dropdown */
    close(): void;
    /** Resets/clears all selected items */
    clear(silent?: boolean): void;
    /** Removes all unselected options */
    clearOptions(clearFilter?: boolean): void;
    /** Callback to decide whether to remove an option */
    clearFilter?(option: SelectOption, value: string): boolean;
    /** Returns the DOM element of the item matching the given value */
    getItem(value: string): HTMLElement | null;
    /** Selects an item */
    addItem(value: string, silent?: boolean): void;
    /** Returns the value of the control */
    getValue(): string | string[];
    /** Resets the selected items to the given value */
    setValue(value: string | string[], silent?: boolean): void;
    /** Disables user input on the control (can still receive focus) */
    lock(): void;
    /** Re-enables user input on the control */
    unlock(): void;
    /** Disables user input on the control (cannot receive focus) */
    disable(): void;
    /** Re-enables the control */
    enable(): void;
    /** Destroys the control and unbinds event listeners */
    destroy(): void;
    /** Focuses the control */
    focus(): void;
    /** Blurs the control */
    blur(): void;
  }
}
