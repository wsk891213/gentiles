<template>
  <div class="home">
<!--    <header class="masthead"></header>-->
<!--      <section class="image-container">-->
<!--        <img src="@/assets/img/main/main1.png" class="img-fluid" alt="Responsive image"/>-->
<!--      </section>-->
    <div class="slider-container">
      <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :pagination="{ clickable: true}"
          :autoplay="{ delay: 3000 }"
          navigation
          class="mySwiper">
        <swiper-slide v-for="(image, index) in slideImages" :key="index">
          <img :src="image.src" :alt="image.alt" class="slider-image">
        </swiper-slide>
        <div class="swiper-pagination"></div>
      </swiper>
    </div>

    <div class="gen-container my-5">
      <div class="row align-items-center">
        <div class="col-md-6 order-md-1">
          <h2>커피를 다하는 진심. 케냐에서부터 시작됩니다</h2>
          <p>여기에는 텍스트가 들어갈 수 있습니다. 케냐의 커피 생산 과정과 진정성을 설명하는 문구를 추가하세요.</p>
          <a href="#" class="btn btn-primary">더 알아보기</a>
        </div>
        <div class="col-md-6 order-md-2">
          <img :src="require('@/assets/img/main/main2.png')" alt="Coffee Image" class="img-fluid">
        </div>
      </div>
    </div>

    <!-- Second Section -->
    <div class="gen-container my-5">
      <div class="row align-items-center">
        <div class="col-md-6 order-md-2">
          <h2>다양한 커피의 세계를 탐험하세요</h2>
          <p>여기에는 텍스트가 들어갈 수 있습니다. 전 세계 다양한 커피의 종류와 그 특징에 대해 설명하세요.</p>
          <a href="#" class="btn btn-primary">더 알아보기</a>
        </div>
        <div class="col-md-6 order-md-1">
          <img :src="require('@/assets/img/main/main4.png')" alt="Coffee World" class="img-fluid">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import 'swiper/css/pagination'
import 'swiper/swiper-bundle.css';
// import * as assert from "assert";
export default {
  name: 'MainPage',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      slideImages: [
        {src: require('@/assets/img/main/main1.png'), alt: 'Image1'},
        {src: require('@/assets/img/main/main2.png'), alt: 'Image2'},
        {src: require('@/assets/img/main/main3.png'), alt: 'Image3'},
        {src: require('@/assets/img/main/main4.png'), alt: 'Image4'},
        {src: require('@/assets/img/main/main5.png'), alt: 'Image15'}
      ],
      cards: [
        { src: require('@/assets/img/main/main2.png'), title: 'Beautiful Scenery', text: 'Enjoy the beautiful scenery around the world.', link: '#' },
        { src: require('@/assets/img/main/main3.png'), title: 'Delicious Food', text: 'Taste the best food from different cultures.', link: '#' },
        { src: require('@/assets/img/main/main4.png'), title: 'Amazing Adventures', text: 'Experience the thrill of amazing adventures.', link: '#' },
      ],
      modules: [Pagination, Navigation, Autoplay],
   };
  }
};
</script>


<style scoped>
@import '../assets/css/main.css';
.home {
  width: 100%;
  height: 100%;
}
.slider-container {
  width: 100%;
  //height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.slider-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.swiper-pagination >>> .swiper-pagination-bullet {
  bottom: 0px !important;
  background: #fff !important;
  margin-top: 7rem;
  text-align: center;
  width: 100%;
  position: absolute;
}

.swiper-pagination-bullet {
  background: #fff !important;
  opacity: 0.7;
  transition: opacity 0.3s;
  //cursor: pointer;
}

.swiper-pagination >>> .swiper-pagination-bullet-active {
  background: #fff !important;
  opacity: 1;
}

.gen-container {
  padding: 1rem 1rem 1rem 1rem;
  border: 1px dashed blueviolet;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.25rem;
  margin-bottom: 20px;
}

.btn {
  font-size: 1rem;
  padding: 10px 20px;
}

.img-fluid {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
