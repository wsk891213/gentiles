<template>
  <div class="MenuPage">
    <section class="section-store">
        <h2 id="titTab b0V4U7" class="blind"></h2>
        <div class="box-tabmenu">
            <ul class="list-tabmenu" role="tablist" aria-labelledby="titTab">
                <li role="none"><button @click="btnClick('MenuPageSub1')" :class="{'btn-tab': true, 'btn-tab--active': currentComponent === 'MenuPageSub1'}" type="button" role="tab" aria-selected="true"  aria-controls="menuTabPanel" tabindex="0">전체</button></li>
                <li role="none"><button @click="btnClick('MenuPageSub2')" :class="{'btn-tab': true, 'btn-tab--active': currentComponent === 'MenuPageSub2'}" type="button" role="tab" aria-selected="false" aria-controls="menuTabPanel1" tabindex="-1">커피</button></li>
                <li role="none"><button @click="btnClick('MenuPageSub3')" :class="{'btn-tab': true, 'btn-tab--active': currentComponent === 'MenuPageSub3'}" type="button" role="tab" aria-selected="false" aria-controls="menuTabPanel2" tabindex="-1">음료</button></li>
                <li role="none"><button @click="btnClick('MenuPageSub4')" :class="{'btn-tab': true, 'btn-tab--active': currentComponent === 'MenuPageSub4'}" type="button" role="tab" aria-selected="false" aria-controls="menuTabPanel3" tabindex="-1">디저트</button></li>
                <li role="none"><button @click="btnClick('MenuPageSub5')" :class="{'btn-tab': true, 'btn-tab--active': currentComponent === 'MenuPageSub5'}" type="button" role="tab" aria-selected="false" aria-controls="menuTabPanel4" tabindex="-1">브런치</button></li>
            </ul>
        </div>
        <div class="box-tabpanel">
            <component :is="currentComponent"></component>
        </div>
  </section>
  <component :is="FooterPage"></component>
  </div>
</template>

<script>
import MenuPageSub1 from '../views/MenuPageSub1.vue'
import MenuPageSub2 from '../views/MenuPageSub2.vue'
import MenuPageSub3 from '../views/MenuPageSub3.vue'
import MenuPageSub4 from '../views/MenuPageSub4.vue'
import MenuPageSub5 from '../views/MenuPageSub5.vue'
import FooterPage from '../components/FooterPage.vue'


export default {
  name: 'MenuPage',
  components: {
    MenuPageSub1, 
    MenuPageSub2, 
    MenuPageSub3, 
    MenuPageSub4, 
    MenuPageSub5,
    FooterPage
  },
  data() {
    return {
      currentComponent: 'MenuPageSub1',
      FooterPage: 'FooterPage'
    }
  },
  methods: {
    btnClick(subPage){
      this.currentComponent = subPage
    }


  }
}
</script>

<style scoped>
@import '../assets/css/menu.css';
</style>
