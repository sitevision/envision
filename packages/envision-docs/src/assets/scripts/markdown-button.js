((win, doc) => {
   const LABEL_TEXT = 'Copy page';
   const LABEL_COPY_IN_PROGRESS = 'Copying...';
   const LABEL_COPY_FAILED = 'Copy failed';
   const LABEL_COPY_SUCCESS = 'Copied!';
   const REQUEST_ERROR = 'Request failed';

   const mainCopyButton = doc.querySelector(
      '.doc-md-link [data-md-github-url]'
   );
   const menuCopyButton = doc.querySelector(
      '.doc-md-link [data-md-copy-action]'
   );

   const setClipboard = async (text) => {
      if (navigator.clipboard?.writeText) {
         await navigator.clipboard.writeText(text);
         return;
      }

      throw new Error('Clipboard API is not supported');
   };

   let resetTimer;
   const resetButton = (button) => {
      const label = button.querySelector('[data-md-copy-lbl]');
      win.clearTimeout(resetTimer);
      resetTimer = win.setTimeout(() => {
         button.disabled = false;
         label.textContent = LABEL_TEXT;
      }, 2500);
   };

   const copyMarkdown = async () => {
      const url = mainCopyButton.dataset.mdGithubUrl;
      const label = mainCopyButton.querySelector('[data-md-copy-lbl]');

      label.textContent = LABEL_COPY_IN_PROGRESS;
      mainCopyButton.disabled = true;

      try {
         const response = await fetch(url);
         if (!response.ok) {
            throw new Error(`${REQUEST_ERROR}: ${response.status}`);
         }
         await setClipboard(await response.text());
         label.textContent = LABEL_COPY_SUCCESS;
      } catch (error) {
         label.textContent = LABEL_COPY_FAILED;
         console.error(error);
      }
   };

   const handleCopyPage = (e) => {
      e.preventDefault();
      copyMarkdown(mainCopyButton).then(() => {
         resetButton(mainCopyButton);
      });
   };

   mainCopyButton && mainCopyButton.addEventListener('click', handleCopyPage);

   mainCopyButton &&
      menuCopyButton &&
      menuCopyButton.addEventListener('click', () => mainCopyButton.click());
})(window, document);
