<template>
  <div class="LocationPage">
    <section class="section-location">
      <div class="row">
        <div class="col-md-5 location-info">
          <h3 class="text-uppercase">오시는길 (Location)</h3>
          <p class="location-txt">제주 서귀포시 표선면 표선당포로 7 7 Pyoseondangpo-ro, Pyoseonmyeon, Seogwipo-si, Jeju-do</p>
          <br/>
          <h3 class="text-uppercase">영업시간 Open</h3>
          <p class="location-txt">am 10:00 ~ pm 9:00</p>
          <br/>
          <h3 class="text-uppercase">라스트오더</h3>
          <p class="location-txt">pm 8:30</p>
          <p class="location-txt">일요일 휴무 (Sunday Closed)</p>
          <br/>
          <h3 class="text-uppercase">TEL</h3>
          <p class="location-txt">064-803-0032</p>
          <br/>
          <h3 class="text-uppercase">Instagram</h3>
          <p class="location-txt">Cafe_gentiles_pyoseon</p>
        </div>
        <div class="col-md-7">
          <div id="map"></div>
        </div>
      </div>
   </section>
  </div>
  <component :is="FooterPage"></component>
</template>

<script>
import FooterPage from '../components/FooterPage.vue'
export default {
  name: 'LocationPage',
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=6a1de1fd203bad5159083c3977081577&autoload=false";
      document.head.appendChild(script);
    }
  },
  methods: {
      initMap() {
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
    }
  },components: {
    FooterPage
  },
  data() {
    return {
      FooterPage: 'FooterPage'
    }
  }
};
</script>


<style scoped>
@import '../assets/css/location.css';
</style>
