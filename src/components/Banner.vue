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
      <p
        v-if="spotify"
        class="banner__sub-title"
      >
        {{ subTitle }}
      </p>
      <h2
        class="banner__title"
        :class="spotify ? 'banner__title--spotify' : null"
      >
        {{ title }}
      </h2>
      <vue-button
        :icon="spotify ? '/icons/spotify.svg' : null"
      >
        {{ label }}
      </vue-button>
    </div>
  </div>
</template>

<script>
import Button from '@components/Button.vue'
import '@styles/_index.scss'

export default {
  name: 'VueBanner',
  components: {
    'vue-button': Button,
  },
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
    spotify: {
      type: Boolean,
      default: null,
    },
    subTitle: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
  @import '@styles';
  @import '@styles/_ButtonReset.scss';
  .banner {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    @include breakpoint(md) {
      align-items: flex-end;
      padding-bottom: 70px;
    }
    &__wrapper {
      @extend %wrapper;
      align-items: flex-end;
    }
    &__title {
      text-align: end;
      max-width: 470px;
      font-family: 'Muli';
      font-size: 35px;
      font-weight: 400;
      line-height: 44px;
      color: $text-light;
      margin-top: 0;
      margin-bottom: 50px;
      &--spotify {
        width: auto;
        font-size: 20px;
        line-height: 25px;
      }
    }
    &__sub-title {
      font-family: 'Muli';
      font-size: 13px;
      font-weight: 300;
      text-transform: uppercase;
      margin: 0 0 35px 0;
      color: $white;
    }
  }
</style>
