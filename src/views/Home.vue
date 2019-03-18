<template>
  <div class="home">
    <h2>모든 메뉴의 첫번째 헤딩은 h2로 지정하세요.</h2>
    <strong>강조해야 할 문구는 strong을 사용하세요</strong>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    margin: 20px;
    &>h2 {
      margin-bottom: 10px;
    }
  }
</style>
