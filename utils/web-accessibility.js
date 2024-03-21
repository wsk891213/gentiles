'use strict';

console.log('===============================================================');
console.log('WEB ACCESSIBILLITY JS IMPORT');
console.log('===============================================================');

window.addEventListener('load', () => {
    // 접근성을 위한 direct link 생성 Start
    const direct = document.getElementById('directLink'),
          directEl = document.getElementsByTagName('h2');

    for(let i = 0; i < directEl.length; i++) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
              randomStr = new Uint32Array(characters.length);

        let id = '';

        window.crypto.getRandomValues(randomStr);

        for (let e = 0; e < 6; e++) {
            id += characters.charAt(randomStr[e] % randomStr.length);
        }

        directEl[i].setAttribute('id', `${ (directEl[i].getAttribute('id')) ? (directEl[i].getAttribute('id') + ' ') : ''}${id}`);
        
        const txt = directEl[i].textContent,
              el = document.createElement('a');

        if(txt) {
            el.setAttribute('href', `#${id}`);
            el.textContent = `${txt} 바로가기`;

            direct.appendChild(el);
        }
    }
    // 접근성을 위한 direct link 생성 End

    // 접근성을 위한 최초 Tab wai-aria 동작 생성 Start
    const tabMenu = document.querySelectorAll('[role="tab"]');

    tabMenu?.forEach((el, i) => {
        const tabPanel = document.getElementById(el.getAttribute('aria-controls')) || '';

        let tablist = el;

        for(const n = 0;;) { // 탭리스트 객체 찾기

            tablist = tablist.parentElement;
            
            if(! tablist) {
                break;
            }

            if(tablist.getAttribute('role') === 'tablist') {
                break;
            } else {
                continue;
            }
        }

        if(i === 0) {
            el.classList.add(`${el.classList.item(0)}--active`);
            el.setAttribute('aria-selected', 'true');
            el.setAttribute('tabindex', '0');
            tabPanel && tabPanel.setAttribute('tabindex', '0');
            tabPanel && tabPanel.getAttribute('hidden') && tabPanel.removeAttribute('hidden');
        } else {
            el.classList.contains(`${el.classList.item(0)}--active`) && el.classList.remove(`${el.classList.item(0)}--active`);
            el.setAttribute('aria-selected', 'false');
            el.setAttribute('tabindex', '-1');
            tabPanel && tabPanel.setAttribute('tabindex', '0');
            tabPanel && tabPanel.setAttribute('hidden', 'true');
        }

        el.addEventListener('click', e => {

            el.classList.add(`${el.classList.item(0)}--active`);
            el.setAttribute('aria-selected', 'true');
            el.setAttribute('tabindex', '0');
            tabPanel && tabPanel.setAttribute('tabindex', '0');
            tabPanel && tabPanel.getAttribute('hidden') && tabPanel.removeAttribute('hidden');

            tabMenu.forEach((el, e) => {
                
                if(i !== e) {
                    el.classList.contains(`${el.classList.item(0)}--active`) && el.classList.remove(`${el.classList.item(0)}--active`);
                    el.setAttribute('aria-selected', 'false');
                    el.setAttribute('tabindex', '-1');
                    document.getElementById(el.getAttribute('aria-controls')).setAttribute('tabindex', '0');
                    document.getElementById(el.getAttribute('aria-controls')).setAttribute('hidden', 'true');
                }

            })
        })

        el.addEventListener('keydown', e => {
            let focusIdx = i;

            if(e.key === 'ArrowLeft') { // 왼쪽으로 이동
                focusIdx = ((i-1) < 0) ? (tabMenu.length-1) : (i-1);
            }
            if(e.key === 'ArrowRight') { // 오른쪽으로 이동
                focusIdx = ((i+1) > (tabMenu.length-1)) ? 0 : (i+1);
            }
            if(e.key === 'Home'){ // 첫 번째 탭으로 이동
                focusIdx = 0;
            }
            if(e.key === 'End'){ // 마지막 탭으로 이동
                focusIdx = (tabMenu.length-1);
            }

            tabMenu[focusIdx].focus();
            tabMenu[focusIdx].click();
        })


    })
    // 접근성을 위한 최초 Tab wai-aria 동작 생성 End

})
