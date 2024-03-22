
'use strict';

console.log('===============================================================');
console.log('COMMON JS IMPORT');
console.log('===============================================================');

// 공통 컴포넌트 include Start
const includeEl = document.querySelectorAll('[data-include-path]');

includeEl.forEach((item) => {
    const path = item.getAttribute('data-include-path');
    if (path) {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const htmlContent = this.responseText;
                const tempEl = document.createElement('div');
                tempEl.innerHTML = htmlContent;

                // Include CSS files by searching for <link> tags and appending them to the document head
                const cssLinks = tempEl.querySelectorAll('link[rel="stylesheet"]');
                cssLinks.forEach(link => {
                    const newLink = document.createElement('link');
                    newLink.rel = link.rel;
                    newLink.href = link.href;
                    document.head.appendChild(newLink);
                });

                // Include JavaScript by creating new script elements for each <script> tag found
                const scripts = tempEl.querySelectorAll('script');
                scripts.forEach(script => {
                    const newScript = document.createElement('script');
                    newScript.text = script.text;
                    document.body.appendChild(newScript);
                });

                // Append the HTML content to the current document
                item.outerHTML = htmlContent;
            }
        };
        xhttp.open('GET', path, true);
        xhttp.send();
    }
});
// 공통 컴포넌트 include End