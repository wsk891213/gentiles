<template>
  <div class="home" ref="home" @wheel="handleScroll">
    <div class="slider-section" ref="sliderContainer">
      <swiper
          ref="mainSwiper"
          :modules="modules"
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :pagination="{ clickable: true }"
          :autoplay="autoplayConfig"
          class="mySwiper">
        <swiper-slide v-for="(image, index) in slideImages" :key="index" class="slider">
          <img :src="image.src" :alt="image.alt" class="slider-image">
        </swiper-slide>
        <div class="swiper-pagination"></div>
      </swiper>
    </div>

    <footer class="footer">
      <component :is="FooterPage"></component>
    </footer>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import FooterPage from "../components/FooterPage.vue";

export default {
  name: 'MainPage',
  components: {
    Swiper,
    SwiperSlide,
    FooterPage: 'FooterPage'
  },
  data() {
    return {
      slideImages: [
        // { src: require('@/assets/img/main/main1.png'), alt: 'Image1' },
        {src: require('@/assets/img/main/main2.png'), alt: 'Image2'},
        {src: require('@/assets/img/main/main3.png'), alt: 'Image3'},
        {src: require('@/assets/img/main/main5.png'), alt: 'Image5'},
      ],
      sections: [
        {
          subtitle: 'Gen Story',
          title: '젠스토리 1번째 이야기 입니다.\n텍스트를 추가해주세요.',
          text: '하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 저를 믿는 자마다 멸망치 않고 영생을 얻게 하려 하심이니라. 하나님이 그 아들을 세상에 보내신 것은 세상을 심판하려 하심이 아니요 저로 말미암아 세상이 구원을 받게하려 하심이라.',
          image: require('@/assets/img/main/main2.png'),
        },
        {
          subtitle: 'Gen Story',
          title: '젠스토리 2번째 이야기\n텍스트를 추가해주세요.',
          text: '하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 저를 믿는 자마다 멸망치 않고 영생을 얻게 하려 하심이니라. 하나님이 그 아들을 세상에 보내신 것은 세상을 심판하려 하심이 아니요 저로 말미암아 세상이 구원을 받게하려 하심이라.',
          image: require('@/assets/img/main/main4.png'),
        },
      ],
      modules: [Pagination, Navigation, Autoplay],
      autoplayConfig: {
        delay: 3000,
        disableOnInteraction: false,
      },
      FooterPage,
    };
  },
  mounted() {
    this.startAutoplay();
    this.$nextTick(() => {
      // console.log('Mounted: Adding scroll event listener');
      // this.$refs.home.addEventListener('wheel', this.handleScroll);
      // this.sectionRefs.push(this.$refs.sliderContainer);
      // this.sectionRefs.push(this.$refs.section1);
      // this.sectionRefs.push(this.$refs.section2);
      // this.sectionRefs.push(this.$refs.section3);
      // this.sectionRefs.push(this.$refs.footer);
      //
      // const swiper = this.$refs.mainSwiper.swiper;
      // swiper.autoplay.start();
    });
  },
  beforeUnmount() {
  },
  methods: {
    startAutoplay() {
      this.$nextTick(() => {
        if (this.$refs.mainSwiper && this.$refs.mainSwiper.swiper) {
          const swiperInstance = this.$refs.mainSwiper.swiper;
          swiperInstance.autoplay.start();
        }
      });
    },
//     scrollToSection(index) {
//       const section = this.sectionRefs[index];
//       console.log(`Attempting to scroll to section ${index}`, this.sectionRefs);
//
//       // -- 스크롤 시 중간으로 가도록 수정하여 주석처리
//       // if (section) {
//       //   console.log(`Scrolling to section ${index}`);
//       //   section.scrollIntoView({ behavior: 'smooth' });
//       //   this.isScrolling = false;
//       //   this.currentIndex = index;
//       // }
//
//       // 스크롤 시 section 이 중간으로 오도록
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.offsetHeight;
//       const windowHeight = window.innerHeight;
//       const scrollPosition = sectionTop - (windowHeight / 2) + (sectionHeight / 2);
//
//       window.scrollTo({
//         top: scrollPosition,
//         behavior: 'smooth'
//       });
//
//       this.isScrolling = false;
//       this.currentIndex = index;
//
//     },
//     handleScroll(event) {
//       if (this.isScrolling) {
//         console.log('Scrolling is already in progress');
//         event.preventDefault();
//         return;
//       }
//       console.log('Handling scroll event');
//       this.isScrolling = true;
//       clearTimeout(this.scrollTimeout);
//
//       this.scrollTimeout = setTimeout(() => {
//         const direction = event.deltaY > 0 ? 1 : -1;
//
//         const nextIndex = this.currentIndex + direction;
//         console.log(`Next Index: ${nextIndex}`);
//
//
//         if (nextIndex >= 0 && nextIndex < this.sectionRefs.length) {
//           console.log(`Scrolling to section ${nextIndex}`);
//           this.scrollToSection(nextIndex);
//         } else {
//           console.log('Reached the end of sections or invalid index');
//         }
//         this.isScrolling = false;
//       }, 300); // 300ms 딜레이 추가
//     },
//   },
  }
}
</script>

<style scoped>
/* 기본 스타일 */
@import '../assets/css/main.css';
</style>
