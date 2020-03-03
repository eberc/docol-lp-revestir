<template>
  <div class="container">
    <a class="container__gallery">
      <div
        v-for="(pic, index) in pics"
        :key="index"
        class="container__pic transition"
        :class="selectedPic === index ? 'colored' : null"
        @click="() => handleClick(index)"
      >
        <img
          :key="index"
          :src="pic.src"
        >
        <!-- <div class="container__pic__overlay" /> -->
        <p
          :key="index"
          class="container__pic__label"
        >
          {{ pic.label }}
        </p>
      </div>
    </a>
    <div
      v-for="(pic, index) in pics"
      :key="index"
      class="container__text"
    >
      <div
        v-if="selectedPic === index"
        class="container__text__show"
      >
        <vue-title>
          {{ pic.title }}
        </vue-title>
        <vue-description>
          {{ pic.description }}
        </vue-description>
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
  data() {
    return {
      title: this.pics[0].title,
      description: this.pics[0].description,
      selectedPic: 0,
    }
  },
  methods: {
    handleClick(index) {
      this.title = this.pics[index].title
      this.description = this.pics[index].description
      this.selectedPic = index
    },
  },
}
</script>

<style lang="scss" scoped>
  @import '@styles';
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: transparent;
    &__gallery {
      display: flex;
      justify-content: center;
      background-color: $grey;
      width: 100%;
    }
    &__pic {
      position: relative;
      background-color: transparent;
      width: 256px;
      height: 270px;
      margin-right: 15px;
      filter: saturate(0);
      cursor: pointer;
      &:hover {
        filter: saturate(100%);
      }
      &:last-child {
        margin-right: 0;
      }
      img {
        width: 256px;
        height: 270px;
      }
      &__label {
        position: relative;
        bottom: 70px;
        justify-content: center;
        text-align: center;
        font-family: 'Muli';
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.5px;
        color: $text-light;
        margin: 0;
      }
    }
    &__text {
      display: flex;
      justify-content: center;
      text-align: center;
      flex-direction: column;
      background-color: $grey;
      width: 100%;
      &__show {
        margin:0 auto;
      }
    }
  }
  .colored {
    filter: saturate(100%) !important;
  }
  .transition {
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
</style>
