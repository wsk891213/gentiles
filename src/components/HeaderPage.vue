<template>
  <header>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand" href="/"><img src="../assets/img/logos/logo_main.svg" alt="..." /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars ms-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto py-4 py-lg-0">
                  <li class="nav-item"><router-link to="/gen-story" class="nav-link">Genstory</router-link></li>
                  <li class="nav-item"><router-link to="/space" class="nav-link">공간소개</router-link></li>
                  <li class="nav-item"><router-link to="/menu" class="nav-link">메뉴</router-link></li>
                  <li class="nav-item"><router-link to="/location" class="nav-link">오시는길</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
  </header>
</template>

<script>
// import { ScrollSpy } from 'bootstrap';

export default {
  name: 'HeaderPage',
  mounted() {
    // this.navbarShrink();
    document.addEventListener('scroll', this.navbarShrink);
    this.initScrollSpy();
    this.initResponsiveNav();
  },
  beforeUnmount() {
    // document.removeEventListener('scroll', this.navbarShrink);
  },
  methods: {
    // navbarShrink() {
    //   const navbarCollapsible = document.querySelector('#mainNav');
    //   if (!navbarCollapsible) return;
    //
    //   if (window.scrollY === 0) {
    //     navbarCollapsible.classList.remove('navbar-shrink');
    //   } else {
    //     navbarCollapsible.classList.add('navbar-shrink');
    //   }
    // },
    initScrollSpy() {
      const mainNav = document.querySelector('#mainNav');
      if (mainNav) {
        // new ScrollSpy(document.body, {
        //   target: '#mainNav',
        //   rootMargin: '0px 0px -40%',
        // });
      }
    },
    initResponsiveNav() {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
      );
      responsiveNavItems.forEach((responsiveNavItem) => {
        responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
            navbarToggler.click();
          }
        });
      });
    },
  },
};
</script>

<style scoped>
@import '../assets/css/header.css';
</style>
