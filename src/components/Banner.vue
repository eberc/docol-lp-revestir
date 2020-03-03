<template>
  <div
    class="banner"
    :style="{
      backgroundImage: `url(${image})`,
    }"
  >
    <div
      class="banner__wrapper"
    >
      <h2 class="banner__title">{{ title }}</h2>
      <button
        class="banner__button"
        type="button"
      >
        {{ label }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueBanner',
  props: {
    image: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
  @import '@styles';
  .banner {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
    width: 100%;
    height: 500px;
    &__wrapper {
      @extend %wrapper;
      align-items: flex-end;
    }
    &__title {
      max-width: 470px;
      font-family: 'Muli';
      font-size: 35px;
      font-weight: 400;
      line-height: 44px;
      color: $text-light;
      margin-top: 0;
      margin-bottom: 50px;
    }
    &__button {
      background: $blue 0% 0% no-repeat padding-box;
      box-shadow: 0px 10px 20px #00000029;
      width: 190px;
      height: 45px;
      opacity: 1;
      font-family: 'Muli';
      letter-spacing: 1.4px;
      font-weight: 700;
      font-size: 14px;
      box-shadow: 0px 10px 20px #00000029;
      border-radius: 3px;
      padding: 0;
      margin: 0;
      color: $text-light;
    }
  }
</style>
