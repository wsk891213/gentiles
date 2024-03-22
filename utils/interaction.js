'use strict';

console.log('===============================================================');
console.log('INTERACTION JS IMPORT');
console.log('===============================================================');


// 브레이크포인트 도달 시 UI 초기화
// 모바일/태블릿에서 gnb가 열린 상태로 PC로 브레이크포인트 이동 시 gnb 닫음
const initialUI = () => {
    const dimmedLayer = document.getElementsByClassName('dimmed-layer')[0],
          gnbMenu = document.getElementsByClassName('doc-gnb')[0];
    
    dimmedLayer.classList.remove('dimmed-layer--active');
    gnbMenu.classList.remove('doc-gnb--active');
}


// 브레이크포인트 수집
let userDevice,
    isInitEvtYn = false;

const getBreakPoint = () => {
    const winWidth = window.innerWidth,
          breakPoint = {
            mobile : 767, // 모바일 ~767px
            tablet : 1023 // 타블렛 ~1024px
          };
          
    let result = '';

    for(let i in breakPoint){
        if(winWidth <= breakPoint[i]) {
            result = i; 

            break;
        }
    }
    result = result || 'pc';

    isInitEvtYn = ( (userDevice === 'mobile' || userDevice === 'tablet') && result === 'pc') ;

    userDevice = (userDevice !== result) ? result : userDevice;
}


// (쓰로틀링 / 디바운싱 적용 .25s) 화면 리사이징 시 이벤트
let throttle;

window.addEventListener('resize', () => {
    if(! throttle) {
        throttle = setTimeout(() => {
            throttle = null;
            getBreakPoint();

            (isInitEvtYn) && initialUI();
        }, 250);
    }
});


window.addEventListener('load', () => {
     
    // 메뉴 토글 인터랙션 Start
    const menuToggle = () => {
        const dimmedLayer = document.getElementsByClassName('dimmed-layer')[0],
            gnbMenu = document.getElementsByClassName('doc-gnb')[0],
            iseExpanded = dimmedLayer.classList.contains('dimmed-layer--active');

        (iseExpanded) ? setTimeout(() => { dimmedLayer.classList.toggle('dimmed-layer--active'); }, 500):
                        dimmedLayer.classList.toggle('dimmed-layer--active');
        gnbMenu.classList.toggle('doc-gnb--active');
    }

    const menuBtn = document.getElementsByClassName('link-menu');

    for(let i = 0; i < menuBtn.length; i ++){
        const tagNm = menuBtn[i].tagName;

        if(tagNm === 'BUTTON') {
            menuBtn[i].addEventListener('click', () => {
                menuBtn[i].classList.toggle('link-menu--active');
            });
        }
    }

    const menuOpenBtn = document.getElementById('menuOpenBtn'),
          menuCloseBtn = document.getElementById('menuCloseBtn');

    menuOpenBtn.addEventListener('click', () => {
        menuToggle();
    });

    menuCloseBtn.addEventListener('click', () => {
        menuToggle();
    });
    // 메뉴 토글 인터랙션 End


    // 현재 location.pathname과 href 대상 위치가 같은 경우 메뉴 클릭 처리 Start
    const linkMenu = document.querySelectorAll('.link-menu'),
          depthMenu = document.querySelectorAll('.depth-link'),
          pathNm = window.location.pathname;

    for(let i = 0; i < linkMenu.length; i ++) {
        const tagNm = linkMenu[i].tagName;

        if(tagNm === 'A') {
            const anchorHref = linkMenu[i].getAttribute('href');

            (pathNm === anchorHref) && linkMenu[i].classList.add('link-menu--active');
        } else {
            continue;
        }
    }
    for(let e = 0; e < depthMenu.length; e ++) {
        const tagNm = depthMenu[e].tagName;

        if(tagNm === 'A') {
            const anchorHref = depthMenu[e].getAttribute('href');

            if(pathNm === anchorHref) {
                depthMenu[e].classList.add('depth-link--active');
                
                let el = depthMenu[e];
                for(let n = 0;;n++) {
                    if(el.parentElement.classList.contains('nav-list__item')) {
                        el = el.parentElement;
                        el.querySelector('.link-menu').classList.add('link-menu--active');

                        break;
                    } else {
                        el = el.parentElement;
                    }
                }
            }

        } else {
            continue;
        }
    }
    // 현재 location.pathname과 href 대상 위치가 같은 경우 메뉴 클릭 처리 End

});
