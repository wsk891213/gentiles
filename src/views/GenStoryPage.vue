<template>
  <div class="GenStory">
    <!-- GenStory Section 1 -->
    <div class="gens-section">
      <div class="gens-section-row row align-items-center">
        <div class="gens-section-text col-md-6 order-md-1">
          <h5>{{sections[0].subtitle}}</h5>
          <h2>{{ sections[0].title }}</h2>
          <p>{{ sections[0].text }}</p>
          <a href="#" class="btn btn-primary">더 알아보기</a>
        </div>
        <div class="gens-section-img col-md-6 order-md-2">
          <img :src="sections[0].image" alt="GenStory Image" class="img-fluid">
        </div>
      </div>
    </div>

    <!-- Section 2 -->
    <div class="gens-section">
      <div class="gens-section-row row align-items-center">
        <div class="gens-section-text col-md-6 order-md-1">
          <h5>{{sections[1].subtitle}}</h5>
          <h2>{{ sections[1].title }}</h2>
          <p>{{ sections[1].text }}</p>
          <a href="#" class="btn btn-primary">더 알아보기</a>
        </div>
        <div class="gens-section-img col-md-6 order-md-2">
          <img :src="sections[1].image" alt="GenStory Image" class="img-fluid">
        </div>
      </div>
    </div>

    <!--     Section 3-->
    <div class="gens-section">
      <div class="gens-section-row row align-items-center">
        <div class="gens-section-text col-md-6 order-md-1">
          <h5>{{sections[2].subtitle}}</h5>
          <h2>{{ sections[2].title }}</h2>
          <p>{{ sections[2].text }}</p>
          <a href="#" class="btn btn-primary">더 알아보기</a>
        </div>
        <div class="gens-section-img col-md-6 order-md-2">
          <img :src="sections[2].image" alt="GenStory Image" class="img-fluid">
        </div>
      </div>
    </div>

    <div ref="footer">
      <div class="gens-footer">
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
  name: 'gen-story',
  components: {
    FooterPage,
  },
  data() {
    return {
      sections: [
        {
          subtitle: 'Gentiles Story',
          title: '젠스토리 1번째 이야기 입니다.\n텍스트를 추가해주세요.',
          text: '하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 저를 믿는 자마다 멸망치 않고 영생을 얻게 하려 하심이니라. 하나님이 그 아들을 세상에 보내신 것은 세상을 심판하려 하심이 아니요 저로 말미암아 세상이 구원을 받게하려 하심이라.',
          image: require('@/assets/img/main/main2.png'),
        },
        {
          subtitle: 'Gentiles Story',
          title: '젠스토리 2번째 이야기\n텍스트를 추가해주세요.',
          text: '하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 저를 믿는 자마다 멸망치 않고 영생을 얻게 하려 하심이니라. 하나님이 그 아들을 세상에 보내신 것은 세상을 심판하려 하심이 아니요 저로 말미암아 세상이 구원을 받게하려 하심이라.',
          image: require('@/assets/img/main/main4.png'),
        },
        {
          subtitle: 'Gentiles Story',
          title: '젠스토리 3번째 이야기\n텍스트를 추가해주세요.',
          text: '하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 저를 믿는 자마다 멸망치 않고 영생을 얻게 하려 하심이니라. 하나님이 그 아들을 세상에 보내신 것은 세상을 심판하려 하심이 아니요 저로 말미암아 세상이 구원을 받게하려 하심이라.',
          image: require('@/assets/img/main/main5.png'),
        },
      ],
      FooterPage,
    };
  },
};
</script>

<style scoped>
/* 기본 스타일 */
@import '../assets/css/genstory.css';
</style>
