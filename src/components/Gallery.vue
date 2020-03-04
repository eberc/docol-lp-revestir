<template>
  <div class="gallery">
    <a class="gallery__block">
      <div
        v-for="(pic, index) in pics"
        :key="index"
        class="gallery__pic transition"
        :class="selectedPic === index ? 'colored' : null"
        @click="() => handleClick(index)"
      >
        <img
          :src="pic.src"
        >
        <!-- <div class="gallery__pic__overlay" /> -->
        <p
          class="gallery__pic__label"
        >
          {{ pic.label }}
        </p>
      </div>
    </a>
    <div
      v-for="(pic, index) in pics"
      :key="index"
      class="gallery__text"
    >
      <div
        v-if="selectedPic === index"
        class="gallery__text__show animated fadeIn"
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
import '@styles/_index.scss'
import Title from '@components/Title.vue'
import Description from '@components/Description.vue'

export default {
  name: 'VueGallery',
  components: {
    'vue-title': Title,
    'vue-description': Description,
  },
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
  .gallery {
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    &__block {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      background-color: $grey;
      width: 100%;
    }
    &__pic {
      position: relative;
      background-color: transparent;
      width: 256px;
      height: 270px;
      margin: 7.5px;
      filter: saturate(0);
      cursor: pointer;
      &:hover {
        filter: saturate(100%);
      }
      img {
        width: 256px;
        height: 270px;
      }
      @include breakpoint(md) {
        margin: 4.5px;
        width: 152px;
        height: 160px;
        img {
          width: 152px;
          height: 160px;
        }
      }
      &__label {
        position: relative;
        justify-content: center;
        text-align: center;
        font-family: 'Muli';
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.5px;
        bottom: 60px;
        color: $text-light;
        margin: 0;
        @include breakpoint(md) {
          font-size: 14px;
          bottom: 30px;
        }
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
