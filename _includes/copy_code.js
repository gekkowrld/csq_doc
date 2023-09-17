document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
    const parent = block.parentNode;
    if (parent.tagName === 'PRE') {
      const copyButton = document.createElement('button');
      copyButton.innerText = 'Copy';
      copyButton.className = 'copy-button';
      copyButton.addEventListener('click', () => {
        const textArea = document.createElement('textarea');
        textArea.value = block.innerText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        // calling our copy button rest function in `index.js`
        rest_copy_btn_name();
        copyButton.innerText = 'Copied to clipboard!';
      });
      parent.insertBefore(copyButton, block);
    }
  });
});

function rest_copy_btn_name() {
  // function that rest previous clipboard copy button inner text
  document.querySelectorAll('.copy-button')
      .forEach((blck) => { blck.innerText = 'Copy'; });
}
