<template>
  <header>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">카페소개(GEN STORY)</a></li>
        <li><a href="#">공간소개(SPACE)</a></li>
        <li><a href="#">메뉴(MENU)</a></li>
        <li><a href="#">오시는길(LOCATION)</a></li>
      </ul>
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
  background-color: #f8f9fa;
  padding: 1rem;
}
nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}
nav a {
  text-decoration: none;
  color: #333;
}
</style>
