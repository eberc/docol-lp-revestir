<template>
  <div class="container">
    <div class="container__gallery">
      <div
        v-for="(pic, index) in pics"
        :key="index"
        class="container__pic"
      >
        <img :src="pic.src">
        <p class="container__pic__title">
          {{ pic.label }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueGallery',
  props: {
    pics: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style lang="scss">
  @import '@styles';
  .container {
    display: flex;
    width: 100%;
    &__gallery {

    }
    &__pic {
      width: 256px;
      height: 270px;
      &__title {
        text-align: center;
        font-family: 'Moli';
        font-weight: 700;
        letter-spacing: -0.5px;
        color: $white;
      }
    }
  }
</style>
