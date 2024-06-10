<template>
  <header>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand" href="#page-top"><img src="../assets/img/navbar-logo.svg" alt="..." /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars ms-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li class="nav-item"><a class="nav-link" href="#services">메인페이지</a></li>
                    <li class="nav-item"><a class="nav-link" href="#portfolio">카페소개(GEN STORY)</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">공간소개(SPACE)</a></li>
                    <li class="nav-item"><a class="nav-link" href="#team">메뉴(MENU)</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">오시는길(LOCATION)</a></li>
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
  padding: 3rem;
}
</style>
