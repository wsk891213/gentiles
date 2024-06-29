<template>
  <div class="genstory">
    <section class="row align-items-center section-genstory">
      <div class="col-md-9 order-2 order-md-1 text-left genstory-text">
        <h6 class="gens-color"><strong>Genstory</strong></h6>
        <h2 class="font-weight-bold">
          <span class="gens-color">Rejoice O, Gentiles with His people</span><br />
          수제 디저트를 합리적인 가격에 즐길 수 있는<br /> 프리미엄 디저트 카페, 젠타일스
        </h2>
        <p>
          젠타일스는 트렌드를 빠르게 포착하고 카페홈즈만의 독창적인 디저트로 전환하는 능력을 가지고 있습니다.<br/>
          누군가가 만든 디저트를 판매하는 것이 아닌 카페홈즈의 모든 디저트는 자체 공장에서 직접 개발하고 제조하고 있습니다.
        </p>
        <p>
          HACCP인증을 받아 철저하게 관리하는 자체공장에서 시장의 변화에 신속하게 대응할 수 있도록 끊임없이 디저트를 연구개발하며,<br/>
          어느 매장에서나 동일한 맛과 즐거움 경험할 수 있습니다.
        </p>
      </div>
      <div class="col-md-3 order-1 order-md-2 genstory-img">
        <img src="@/assets/img/main/main4.png" alt="Image" class="img-fluid">
      </div>
    </section>

    <footer class="footer">
      <component :is="FooterPage"></component>
    </footer>
  </div>
</template>

<script>
import FooterPage from "@/components/FooterPage.vue";

export default {
  name: 'gen-story',
  components: {
    FooterPage
  },
  data() {
    return {
      FooterPage
    }
  }
};
</script>

<style scoped>
@import '../assets/css/genstory.css';
</style>
