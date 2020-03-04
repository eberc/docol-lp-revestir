<template>
  <div class="btn-container">
    <button
      v-if="!linkUrl"
      type="button"
      class="btn__default"
      :class="outline ? 'btn--outline' : null"
    >
      <div class="btn-container__wrapper">
        <img
          v-if="icon"
          class="icon"
          :src="icon"
        >
        <slot />
      </div>
    </button>
    <a
      v-else
      :href="linkUrl"
      class="btn__link"
      :class="outline ? 'btn--outline' : 'btn__default'"
    >
      <div class="btn-container__wrapper">
        <img
          v-if="icon"
          class="icon"
          :src="icon"
        >
        <slot />
      </div>
    </a>
  </div>
</template>

<script>
import '@styles/_index.scss'

export default {
  name: 'VueButton',
  props: {
    icon: {
      type: String,
      default: null,
    },
    outline: {
      type: Boolean,
      default: null,
    },
    linkUrl: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
  @import '@styles/_ButtonReset.scss';
  @import '@styles';
  .btn-container {
    position: relative;
    display: flex;
    img {
      margin-right: 15px;
    }
    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
  .btn {
    &__default {
      background: $blue 0% 0% no-repeat padding-box;
      box-shadow: 0px 10px 20px #00000029;
      height: 45px;
      opacity: 1;
      font-family: 'Muli';
      letter-spacing: 1.4px;
      font-weight: 700;
      font-size: 14px;
      width: 190px;
      border-radius: 3px;
      padding: 0;
      margin: 0;
      text-transform: uppercase;
      color: $text-light;
      padding: 0 14px;
    }
    &__link {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      border-radius: 3px;
    }
    &--outline {
      min-width: 130px;
      height: 35px;
      text-align: left;
      font-family: 'Muli';
      font-size: 10px;
      letter-spacing: 0;
      color: $text;
      box-shadow: none;
      background-color: $white;
      border-width: 2px;
      border: 2px solid $grey;
    }
  }
</style>
