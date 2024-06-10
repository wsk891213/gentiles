<template>
  <div id="app">
    <HeaderPage />
    <main>
      <router-view />
    </main>
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue'

export default {
  name: 'App',
  components: {
    HeaderPage,
    FooterPage
  }
}
</script>

<style>
/* 여기에 전역 스타일을 추가할 수 있습니다. */
@import './assets/css/styles.css';
</style>
