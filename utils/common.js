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
                const scripts = tempEl.querySelectorAll('script');
                scripts.forEach(script => {
                    // Create a new script element and execute the script content
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