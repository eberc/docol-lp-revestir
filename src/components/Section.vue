<template>
  <section
    class="section"
    :class="grey ? 'section--grey' : null"
  >
    <div class="section__wrapper">
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
  .section {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: $white;
    &--grey {
      background-color: $grey;
    }
    &__wrapper {
      @extend %wrapper;
    }
  }
</style>
