export const printReceipt = (content: string, title: string) => {
  // Create a hidden iframe
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  document.body.appendChild(iframe);
  // Write the content to the iframe
  const iframeDoc =
    iframe.contentDocument ||
    (iframe.contentWindow && iframe.contentWindow.document);
  if (iframeDoc) {
    iframeDoc.write(`
      <html>
        <head>
          <title>${title}</title>
          <style>
            @media print {
              body {
                width: 80mm;
                font-family:  monospace;
                font-weight: 400;
                margin: 0;
              }
            }
          </style>
        </head>
        <body style="width:72mm; padding:0; margin:0mm;">
          ${content}
        </body>
    `);
    if (iframeDoc) {
      iframeDoc.close();
    }
  }

  // Focus the iframe and trigger print
  if (iframe.contentWindow) {
    iframe.contentWindow.focus();
  }
  if (iframe.contentWindow) {
    iframe.contentWindow.print();
  }

  // Remove the iframe after printing
  setTimeout(() => {
    document.body.removeChild(iframe);
  }, 500);
};
