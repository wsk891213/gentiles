<template>
  <div class="space">
    <!-- Section 1 -->
    <div class="sp-section" ref="section1">
      <div class="sp-section-row row align-items-center">
        <div class="sp-section-text col-md-6 order-md-1">
          <h2>{{ sections[0].title }}</h2>
          <p>{{ sections[0].text }}</p>
          <a href="#" class="btn btn-primary">더 알아보기</a>
        </div>
        <div class="sp-section-img col-md-6 order-md-2">
          <img :src="sections[0].image" alt="Coffee Image" class="img-fluid">
        </div>
      </div>
    </div>

    <!-- Section 2 -->
    <div class="sp-section" ref="section2">
      <div class="sp-section-row row align-items-center">
        <div class="sp-section-text col-md-6 order-md-2">
          <h2>{{ sections[1].title }}</h2>
          <p>{{ sections[1].text }}</p>
          <a href="#" class="sp-section-img btn btn-primary">더 알아보기</a>
        </div>
        <div class="col-md-6 order-md-1">
          <img :src="sections[1].image" alt="Coffee Image" class="img-fluid">
        </div>
      </div>
    </div>

    <!-- Section 3 -->
    <div class="sp-section" ref="section3">
      <div class="sp-section-row row align-items-center">
        <div class="sp-section-text col-md-6 order-md-1">
          <h2>{{ sections[2].title }}</h2>
          <p>{{ sections[2].text }}</p>
          <a href="#" class="sp-section-img btn btn-primary">더 알아보기</a>
        </div>
        <div class="col-md-6 order-md-2">
          <img :src="sections[2].image" alt="Coffee Image" class="img-fluid">
        </div>
      </div>
    </div>

    <!-- Section 4 -->
    <div class="sp-section" ref="section4">
      <div class="sp-section-row row align-items-center">
        <div class="sp-section-text col-md-6 order-md-2">
          <h2>{{ sections[3].title }}</h2>
          <p>{{ sections[3].text }}</p>
          <a href="#" class="sp-section-img btn btn-primary">더 알아보기</a>
        </div>
        <div class="col-md-6 order-md-1">
          <img :src="sections[3].image" alt="Coffee Image" class="img-fluid">
        </div>
      </div>
    </div>

    <!-- Section 5 -->
    <div class="sp-section" ref="section5">
      <div class="sp-section-row row align-items-center">
        <div class="sp-section-text col-md-6 order-md-1">
          <h2>{{ sections[4].title }}</h2>
          <p>{{ sections[4].text }}</p>
          <a href="#" class="sp-section-img btn btn-primary">더 알아보기</a>
        </div>
        <div class="col-md-6 order-md-2">
          <img :src="sections[4].image" alt="Coffee Image" class="img-fluid">
        </div>
      </div>
    </div>
    <!-- Section 6 -->
    <div class="sp-section" ref="section6">
      <div class="sp-section-row row align-items-center">
        <div class="sp-section-text col-md-6 order-md-2">
          <h2>{{ sections[5].title }}</h2>
          <p>{{ sections[5].text }}</p>
          <a href="#" class="sp-section-img btn btn-primary">더 알아보기</a>
        </div>
        <div class="col-md-6 order-md-1">
          <img :src="sections[5].image" alt="Coffee Image" class="img-fluid">
        </div>
      </div>
    </div>
    <!-- Section 7 -->
    <div class="sp-section" ref="section7">
      <div class="sp-section-row row align-items-center">
        <div class="sp-section-text col-md-6 order-md-1">
          <h2>{{ sections[6].title }}</h2>
          <p>{{ sections[6].text }}</p>
          <a href="#" class="sp-section-img btn btn-primary">더 알아보기</a>
        </div>
        <div class="col-md-6 order-md-2">
          <img :src="sections[6].image" alt="Coffee Image" class="img-fluid">
        </div>
      </div>
    </div>
    <!-- Section 8 -->
    <div class="sp-section" ref="section8">
      <div class="sp-section-row row align-items-center">
        <div class="sp-section-text col-md-6 order-md-2">
          <h2>{{ sections[7].title }}</h2>
          <p>{{ sections[7].text }}</p>
          <a href="#" class="sp-section-img btn btn-primary">더 알아보기</a>
        </div>
        <div class="col-md-6 order-md-1">
          <img :src="sections[7].image" alt="Coffee Image" class="img-fluid">
        </div>
      </div>
    </div>
    <div>
      <div class="sp-footer">
        <div>
          <!--          <h1>텍스트를 넣을 수 있습니다.</h1>-->
        </div>
      </div>
      <component :is="FooterPage" ></component>
    </div>
  </div>
</template>

<script>
import FooterPage from "../components/FooterPage.vue";

export default {
  name: 'SpacePage',
  components: {
    FooterPage,
  },
  data() {
    return {
      sections: [
        {
          title: '갤러리',
          text: '여기에는 텍스트가 들어갈 수 있습니다. 공간의 특징을 설명하는 문구를 추가하세요.',
          image: require('@/assets/img/main/main2.png'),
        },
        {
          title: '수유실',
          text: '여기에는 텍스트가 들어갈 수 있습니다. 공간의 특징을 설명하는 문구를 추가하세요.',
          image: require('@/assets/img/main/main4.png'),
        },
        {
          title: '힐링룸',
          text: '여기에는 텍스트가 들어갈 수 있습니다. 공간의 특징을 설명하는 문구를 추가하세요',
          image: require('@/assets/img/main/main4.png'),
        },
        {
          title: '스터디룸',
          text: '여기에는 텍스트가 들어갈 수 있습니다. 공간의 특징을 설명하는 문구를 추가하세요.',
          image: require('@/assets/img/main/main2.png'),
        },
        {
          title: '미팅룸',
          text: '여기에는 텍스트가 들어갈 수 있습니다. 공간의 특징을 설명하는 문구를 추가하세요.',
          image: require('@/assets/img/main/main4.png'),
        },
        {
          title: '루프탑',
          text: '여기에는 텍스트가 들어갈 수 있습니다. 공간의 특징을 설명하는 문구를 추가하세요.',
          image: require('@/assets/img/main/main4.png'),
        },
        {
          title: '샹들리에',
          text: '여기에는 텍스트가 들어갈 수 있습니다. 공간의 특징을 설명하는 문구를 추가하세요.',
          image: require('@/assets/img/main/main4.png'),
        },
        {
          title: '스튜디오젠타일스',
          text: '여기에는 텍스트가 들어갈 수 있습니다. 공간의 특징을 설명하는 문구를 추가하세요..',
          image: require('@/assets/img/main/main4.png'),
        },
      ],
      FooterPage,
    };
  },
};
</script>

<style scoped>
/* 기본 스타일 */
@import '../assets/css/space.css';
</style>

