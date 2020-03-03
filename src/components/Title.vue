<template>
  <h2>
    <slot />
  </h2>
</template>

<script>
export default {
  name: 'VueTitle',
}
</script>

<style lang="scss">
  @import '@styles';
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 100px 0 60px 0;
    font-family: 'Muli';
    font-size: 30px;
    font-weight: 700;
    letter-spacing: -0.63px;
    line-height: 31px;
    color: #000;
    @include breakpoint(md) {
      font-size: 25px;
      margin: 60px 0 40px 0;
    }
  }
</style>
