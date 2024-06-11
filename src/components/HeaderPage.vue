<template>
  <header>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand" href="#page-top"><img src="../assets/img/logos/homelogo.svg" alt="..." /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars ms-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                  <li class="nav-item">
                    <router-link to="/cafeStory-page" class="nav-link">GENstory</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/space-page" class="nav-link">공간소개</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/menu-page" class="nav-link">메뉴</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/location-page" class="nav-link">오시는길</router-link>
                  </li>
                </ul>
            </div>
        </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderPage'
}
</script>

<style scoped>
header {
  background-color: white;
  padding: 2.5rem;
}
</style>
