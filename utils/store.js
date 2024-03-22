
let data;

console.log('===============================================================');
console.log('STORE JS IMPORT');
console.log('===============================================================');

var tmpData = [
  {
    "id" : "1",
    "category" : "SPACE",
    "src" : "/assets/images/dummy/dummy6.jpg",
    "title" : "SPACE",
    "desc" : "SPACE"
  },
  {
    "id" : "2",
    "category" : "SPACE",
    "src" : "/assets/images/dummy/dummy7.jpg",
    "title" : "SPACE",
    "desc" : "SPACE"
  },
  {
    "id" : "3",
    "category" : "SPACE",
    "src" : "/assets/images/dummy/dummy8.jpg",
    "title" : "SPACE",
    "desc" : "SPACE"
  },
  {
    "id" : "4",
    "category" : "SPACE",
    "src" : "/assets/images/dummy/dummy9.jpg",
    "title" : "SPACE",
    "desc" : "SPACE"
  },
  {
    "id" : "5",
    "category" : "SPACE",
    "src" : "/assets/images/dummy/dummy6.jpg",
    "title" : "SPACE",
    "desc" : "SPACE"
  },
  {
    "id" : "6",
    "category" : "SPACE",
    "src" : "/assets/images/dummy/dummy7.jpg",
    "title" : "SPACE",
    "desc" : "SPACE"
  },
  {
    "id" : "7",
    "category" : "SPACE",
    "src" : "/assets/images/dummy/dummy8.jpg",
    "title" : "SPACE",
    "desc" : "SPACE"
  },
  {
    "id" : "8",
    "category" : "SPACE",
    "src" : "/assets/images/dummy/dummy8.jpg",
    "title" : "SPACE",
    "desc" : "SPACE"
  },
  {
    "id" : "9",
    "category" : "SPACE",
    "src" : "/assets/images/dummy/dummy9.jpg",
    "title" : "SPACE",
    "desc" : "SPACE"
  },
  {
    "id" : "10",
    "category" : "SPACE",
    "src" : "/assets/images/dummy/dummy6.jpg",
    "title" : "SPACE",
    "desc" : "SPACE"
  },
  {
    "id" : "11",
    "category" : "Coffee & Beverage",
    "src" : "/assets/images/dummy/dummy7.jpg",
    "title" : "Coffee & Beverage",
    "desc" : "Coffee & Beverage"
  },
  {
    "id" : "12",
    "category" : "Coffee & Beverage",
    "src" : "/assets/images/dummy/dummy8.jpg",
    "title" : "Coffee & Beverage",
    "desc" : "Coffee & Beverage"
  },
  {
    "id" : "13",
    "category" : "Coffee & Beverage",
    "src" : "/assets/images/dummy/dummy9.jpg",
    "title" : "Coffee & Beverage",
    "desc" : "Coffee & Beverage"
  },
  {
    "id" : "14",
    "category" : "Coffee & Beverage",
    "src" : "/assets/images/dummy/dummy6.jpg",
    "title" : "Coffee & Beverage",
    "desc" : "Coffee & Beverage"
  },
  {
    "id" : "15",
    "category" : "Bakery",
    "src" : "/assets/images/dummy/dummy6.jpg",
    "title" : "Bakery",
    "desc" : "Bakery"
  },
  {
    "id" : "16",
    "category" : "Bakery",
    "src" : "/assets/images/dummy/dummy7.jpg",
    "title" : "Bakery",
    "desc" : "Bakery"
  },
  {
    "id" : "17",
    "category" : "Kitchen",
    "src" : "/assets/images/dummy/dummy6.jpg",
    "title" : "Kitchen",
    "desc" : "Kitchen"
  },
  {
    "id" : "18",
    "category" : "Kitchen",
    "src" : "/assets/images/dummy/dummy7.jpg",
    "title" : "Kitchen",
    "desc" : "Kitchen"
  }
]


const prdDataParse = (json) => {
  let parseData = {};

  for(const i in json) {

    if(! parseData[json[i].category]) {
      parseData[json[i].category] = [];
    }
    parseData[json[i].category].push(json[i]);

  }

  const tablist = document.querySelector('[role="tablist"]'),
        tabpanelBox = document.querySelector('.box-tabpanel');

  let idx = 0,
      allPrdCnt = 0;

  for(const e in parseData) { // 상품 정보 바인딩
    idx ++ ;

    const listItem = document.createElement('li'),
          tabBtn = document.createElement('button'),
          id = tablist.querySelector('.btn-tab').getAttribute('id'),
          tabpanel = document.createElement('div');

    listItem.setAttribute('role', 'none');
    tabBtn.setAttribute('type', 'button');
    tabBtn.setAttribute('id', id + idx);
    tabBtn.setAttribute('role', 'tab');
    tabBtn.setAttribute('aria-selected', 'false');
    tabBtn.setAttribute('aria-controls', `${id}Panel${idx}`);
    tabBtn.classList.add('btn-tab');
    tabBtn.textContent = e;
    listItem.appendChild(tabBtn);
    tablist.appendChild(listItem);

    const allList = document.getElementById(`${id}Panel`).querySelector('.list-product'),
          panelTit = document.createElement('strong'),
          panelPagenationTit = document.createElement('strong'),
          prdList = document.createElement('ul'),
          pagenation = document.createElement('ul');

    prdList.classList.add('list-product');
    pagenation.classList.add('list-pagenation');

    panelTit.classList.add('blind');
    panelTit.textContent = '상품 정보';

    panelPagenationTit.classList.add('blind');
    panelPagenationTit.textContent = '페이지';

    tabpanel.setAttribute('id', `${id}Panel${idx}`);
    tabpanel.classList.add('inner-tabpanel');
    tabpanel.setAttribute('role', 'tabpanel');
    tabpanel.setAttribute('aria-labelledby', `${id}${idx}`);
    tabpanel.setAttribute('hidden', 'true');
    tabpanel.setAttribute('tabindex', '0');

    let prdCnt = 0;

    for(const d in parseData[e]) {

      const prdItem = document.createElement('li'),
            innerLayout = document.createElement('div'),
            thumb = document.createElement('div'),
            boxTxt = document.createElement('div');

      prdCnt++;
      allPrdCnt++;

      innerLayout.classList.add('inner-cont');
      thumb.classList.add('box-thumb');
      boxTxt.classList.add('box-txt');

      const img = document.createElement('img');

      img.classList.add('thumb-img');
      img.setAttribute('src', parseData[e][d].src);
      img.setAttribute('alt', `${parseData[e][d].title} 이미지`);

      thumb.appendChild(img);
      
      const prdTit = document.createElement('strong');

      prdTit.classList.add('tit-prd');
      prdTit.textContent = parseData[e][d].title;

      boxTxt.appendChild(prdTit);
      innerLayout.appendChild(thumb);
      innerLayout.appendChild(boxTxt);
      prdItem.appendChild(innerLayout);

      prdList.appendChild(prdItem);

      const deepCopy = prdItem.cloneNode(true);

      allList.appendChild(deepCopy);
    }
     
    tabpanel.appendChild(panelTit);
    tabpanel.appendChild(prdList);

    tabpanelBox.append(tabpanel);
  }
}


const getProductInfo = async() => {
  prdDataParse(tmpData);

    // try {
    //   const response = await fetch(`../store/branch_a/product.json`);
    //   if (!response.ok) {
    //     throw new Error('인서트 오류');
    //   }
    //   const json = await response.json();
    //   prdDataParse(json);
    // } catch (error) {
    //   console.error('인서트 정보 오류:', error);
    // }
}


document.addEventListener('DOMContentLoaded', () => {

  getProductInfo();

  document.addEventListener('click', e => { // 동적으로 생성되는 탭메뉴 바인딩
    
    if(e.target && e.target.role === 'tab') {

      const tabPanel = document.getElementById(e.target.getAttribute('aria-controls')) || '';

        let tablist = e.target;

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

        const tabMenu = tablist.querySelectorAll('[role="tab"]');

        
        tabMenu.forEach((el) => {

            el.classList.contains(`${el.classList.item(0)}--active`) && el.classList.remove(`${el.classList.item(0)}--active`);
            el.setAttribute('aria-selected', 'false');
            el.setAttribute('tabindex', '-1');
            document.getElementById(el.getAttribute('aria-controls')).setAttribute('tabindex', '0');
            document.getElementById(el.getAttribute('aria-controls')).setAttribute('hidden', 'true');

        })
        
        e.target.classList.add(`${e.target.classList.item(0)}--active`);
        e.target.setAttribute('aria-selected', 'true');
        e.target.setAttribute('tabindex', '0');
        tabPanel && tabPanel.setAttribute('tabindex', '0');
        tabPanel && tabPanel.getAttribute('hidden') && tabPanel.removeAttribute('hidden');

        e.target.addEventListener('keydown', e => {
          let focusIdx = 0;

          tabMenu.forEach((el, idx) => {
            if(el.getAttribute('id') === e.target.id) {
              focusIdx = idx;
            }
          })

            if(e.key === 'ArrowLeft') { // 왼쪽으로 이동
                focusIdx = ((focusIdx-1) < 0) ? (tabMenu.length-1) : (focusIdx-1);
            }
            if(e.key === 'ArrowRight') { // 오른쪽으로 이동
                focusIdx = ((focusIdx+1) > (tabMenu.length-1)) ? 0 : (focusIdx+1);
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

    } 
  })

});