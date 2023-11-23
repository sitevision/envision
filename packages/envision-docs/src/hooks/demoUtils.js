export const demoLineChartCanvas = (canvas, options) => {
   options = Object.assign(
      {
         w: 300,
         h: 150,
         columns: 5,
         rows: 5,
         gridColor: '#ccc',
         lineColor1: '#653dad',
         lineColor2: null,
      },
      options
   );
   const ctx = canvas.getContext('2d');
   ctx.canvas.width = options.w;
   ctx.canvas.height = options.h;

   const widths = [];
   const heights = [];

   const getValue = (lineNr, i) => {
      if (options[`line${lineNr}`]) {
         const y = options[`line${lineNr}`][i] || 0;
         return heights[heights.length - 1 - y];
      }
      return heights[Math.floor(Math.random() * heights.length - 1)];
   };
   const drawLine = (lineNr, color) => {
      ctx.beginPath();
      for (let i = 0; i < widths.length; i++) {
         ctx.moveTo(0, canvas);
         ctx.strokeStyle = color;
         ctx.lineWidth = 3;
         ctx.lineTo(widths[i], getValue(lineNr, i));
         ctx.stroke();
      }
      ctx.closePath();
   };
   const round = (value) => {
      value = Math.round(value * 2) / 2;
      if (value === parseInt(value, 10)) {
         value += 0.5;
      }
      return Math.round(value * 2) / 2;
   };

   for (let i = 0; i <= options.columns; i++) {
      const w = round(i * (options.w / options.columns));
      widths.push(w);
   }

   for (let i = 0; i <= options.rows; i++) {
      const h = round(i * (options.h / options.rows));
      heights.push(h);
   }

   // vertical lines
   ctx.beginPath();
   for (let i = 1; i < widths.length - 1; i++) {
      ctx.strokeStyle = options.gridColor;
      ctx.lineWidth = 1;
      ctx.moveTo(widths[i], 0.5);
      ctx.lineTo(widths[i], heights[heights.length - 1]);
   }
   ctx.stroke();
   ctx.closePath();

   //horizontal lines
   ctx.beginPath();
   for (let i = 1; i < heights.length - 1; i++) {
      ctx.strokeStyle = options.gridColor;
      ctx.lineWidth = 1;
      ctx.moveTo(0.5, heights[i]);
      ctx.lineTo(widths[widths.length - 1], heights[i]);
   }
   ctx.stroke();
   ctx.closePath();

   // chart line
   drawLine(1, options.lineColor1);

   if (options.lineColor2) {
      drawLine(2, options.lineColor2);
   }
};

export const toTitleCase = (str) => {
   return str
      .toLowerCase()
      .split(' ')
      .map(function (word) {
         return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
};
