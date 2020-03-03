<template>
  <section
    class="container"
    :class="grey ? 'container--grey' : null"
  >
    <div class="wrapper">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'VueSection',
  props: {
    grey: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@styles';
  .container {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: $white;
    &--grey {
      background-color: $grey;
    }
  }
</style>
