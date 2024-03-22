'use strict';


console.log('===============================================================');
console.log('PLUGINS JS IMPORT');
console.log('===============================================================');

document.addEventListener('DOMContentLoaded', () => {

    var script = document.createElement('script');
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=6a1de1fd203bad5159083c3977081577&autoload=false";
    document.head.appendChild(script);

    // 스크립트 로딩이 완료되면 콜백 함수 실행
    script.onload = () => initMap();
});

function initMap() {
  kakao.maps.load(function() {
    // 카카오 지도 API
    const map = document.getElementById('map'),
          options = { 
            center: new kakao.maps.LatLng(33.32569322305492, 126.84337610076078), 
            level: 3 
          };

    let kakaoMap;
    if(map) {
        kakaoMap = new kakao.maps.Map(map, options);

        // 마커가 표시될 위치를 지정합니다 
        const markerPosition  = new kakao.maps.LatLng(33.32569322305492, 126.84337610076078); 

        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(kakaoMap);
    }
    
    // 스와이퍼
    const swiper = document.querySelector('.swiper') && new Swiper(".swiper", {
           slidesPerView: 1,
           spaceBetween: 0,
           loop: true,
           pagination: {
             el: ".swiper-pagination",
             clickable: true,
           },
           navigation: {
             nextEl: ".swiper-button-next",
             prevEl: ".swiper-button-prev",
           },
    });

  });
}