const WCAG_CONTRAST_RATIO = {
   AA_LARGE: 1 / 3,
   AA_NORMAL: 1 / 4.5,
   AAA_LARGE: 1 / 4.5,
   AAA_NORMAL: 1 / 7,
};

export const DASHBOARD_COLORS = [
   'red',
   'pink',
   'purple',
   'deep-purple',
   'indigo',
   'blue',
   'light-blue',
   'cyan',
   'teal',
   'green',
   'light-green',
   'lime',
   'yellow',
   'orange',
   'brown',
   'gray',
];
export const DASHBOARD_COLOR_VARIANTS = ['05', '20', '50', '90'];

export const passesWCAG = (ratio, level) => {
   level = level || WCAG_CONTRAST_RATIO.AA_NORMAL;
   return 1 / ratio < level;
};

const hexToRgb = (hex) => {
   const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
   const rgbRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
   hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
   });
   const result = rgbRegex.exec(hex);
   const r = parseInt(result[1], 16);
   const g = parseInt(result[2], 16);
   const b = parseInt(result[3], 16);
   return result ? [r, g, b] : null;
};

const luminance = (rgb) => {
   const a = rgb.map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
   });
   return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

export const getContrastRatio = (hex1, hex2) => {
   const lum1 = luminance(hexToRgb(hex1));
   const lum2 = luminance(hexToRgb(hex2));
   return (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
};
