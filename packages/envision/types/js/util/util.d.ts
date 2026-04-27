export default Util;
declare namespace Util {
    function consoleWarning(issue: any, ...args: any[]): void;
    function getLanguageOptions(i18nSetting: any, langObj: any, rootEl: any): {};
    function isPlainObject(obj: any): boolean;
    function extend(...args: any[]): {};
    function normalizeOptions(options: any, defaults: any): any;
}
