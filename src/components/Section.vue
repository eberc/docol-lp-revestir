<template>
  <section
    class="section"
    :class="[
      grey ? 'section--grey' : null,
      paddingBottom ? 'section--padding-bottom' : null
    ]"
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
    paddingBottom: {
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
    &--padding-bottom {
      padding-bottom: 80px;
    }
    &__wrapper {
      @extend %wrapper;
    }
  }
</style>
