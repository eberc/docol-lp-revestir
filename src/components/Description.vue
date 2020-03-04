<template>
  <p>
    <slot />
  </p>
</template>

<script>
export default {
  name: 'VueDescription',
}
</script>

<style lang="scss" scoped>
  @import '@styles';
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Muli';
    font-size: 14px;
    font-weight: 400;
    max-width: 860px;
    color: $text;
    padding: 0 20px 80px 20px;
    line-height: 22px;
    margin: 0;
    @include breakpoint(md) {
      padding: 0 0 40px 0;
    }
  }
</style>
