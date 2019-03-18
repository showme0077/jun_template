<template>
  <div id="app">
    <h1>이것은 H1 태그이며, 해당 페이지의 메인 타이틀입니다.</h1>
    <header>
      <div id="logo">logo는 div로</div>
      <div id="nav">
        <Menu_top/>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<style>
#app {
  margin: 30px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#logo {
  display: inline-block;
  width: 20%;
}
#nav {
  display: inline-block;
  width: 80%;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>

<script>
  import Menu_top from '@/components/Menu_top'

  export default {
    name: 'menu_top',
    components: {
      Menu_top
    }
  }
</script>