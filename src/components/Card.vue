<template>
  <div class="card">
    <div class="card__wrapper">
      dsads
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueCard',
}
</script>

<style lang="scss" scoped>
  @import '@styles';
  .card {
    width: 345px;
    height: 425px;
    background-color: rebeccapurple;
    &__wrapper {
      @extend %wrapper;
      width: 270px;
      background-color: bisque;
      margin-top: 50px;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
