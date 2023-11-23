import * as React from 'react';
import {
   DASHBOARD_COLOR_VARIANTS,
   DASHBOARD_COLORS,
   getContrastRatio,
   passesWCAG,
} from './colorUtils';
import { demoLineChartCanvas, toTitleCase } from './demoUtils';

const TEXT_CONTRAST_ICON =
   '<svg class="env-icon example-dashboard-color-list-icon">' +
   '<use xlink:href="/images/docs-icons.svg#text"></use></svg>';

const listItem = (options) => {
   const o = Object.assign({}, options);
   return `<li class="env-dashboard-color-bg-${o.bgClassName} env-dashboard-color-txt-${o.txtClassName}">
           <div><span>${o.name}</span>
           <span>${o.hex}</span>
           </div></li>`;
};

export const useDashboardExample = (content) => {
   React.useEffect(() => {
      const colorList = document.getElementById('dashboard-color-list');
      if (colorList) {
         const compStyleBody = getComputedStyle(document.body);
         const bodyBgColor = compStyleBody.getPropertyValue(
            `--env-dashboard-color-gray-05`
         );
         const blackColor = compStyleBody.getPropertyValue(
            `--env-dashboard-color-black`
         );
         const whiteColor = compStyleBody.getPropertyValue(
            `--env-dashboard-color-white`
         );

         DASHBOARD_COLORS.forEach((colorName) => {
            const gridEl = document.createElement('div');
            gridEl.innerHTML = `<h2 class="env-ui-text-subheading">${toTitleCase(
               colorName.replace('-', ' ')
            )}</h2>`;

            const listEl = document.createElement('ul');
            listEl.classList.add('example-dashboard-color-list');

            DASHBOARD_COLOR_VARIANTS.forEach((variantName) => {
               let txtClassName = 'black';
               let variantText = variantName;
               const bgClassName = `${colorName}-${variantName}`;
               const bgColor = compStyleBody.getPropertyValue(
                  `--env-dashboard-color-${colorName}-${variantName}`
               );

               if (bgColor) {
                  const contrastBody = getContrastRatio(bgColor, bodyBgColor);
                  const contrastSection = getContrastRatio(bgColor, whiteColor);
                  const passesAAonWhite = passesWCAG(contrastSection);
                  const passesAAonBody = passesWCAG(contrastBody);
                  const canHaveBlackText = passesWCAG(
                     getContrastRatio(blackColor, bgColor)
                  );
                  if (!canHaveBlackText) {
                     txtClassName = 'white';
                  }
                  if (passesAAonWhite) {
                     variantText += TEXT_CONTRAST_ICON;
                     if (passesAAonBody) {
                        variantText += '*';
                     }
                  }
               }

               listEl.innerHTML += listItem({
                  bgClassName: bgClassName,
                  txtClassName: txtClassName,
                  name: variantText,
                  hex: bgColor,
               });
            });
            gridEl.appendChild(listEl);
            colorList.appendChild(gridEl);
         });
      }

      const canvas = document.getElementById('example-chart-canvas');

      if (canvas) {
         demoLineChartCanvas(canvas, {
            w: 600,
            h: 200,
            columns: 6,
            rows: 5,
            line1: [1, 3, 2, 4, 2, 2, 5],
            line2: [2, 4, 4, 3, 1, 3, 4],
            lineColor1: '#f69911',
            lineColor2: '#1eb7cc',
         });
      }
   }, [content]);
};
