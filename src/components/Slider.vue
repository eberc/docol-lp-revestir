<template>
  <!-- Slider main container -->
  <div
    ref="swiper-slider"
    class="swiper-container"
  >
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div
        v-for="(img, index) in images"
        :key="index"
        class="swiper-slide"
      >
        <img :src="img">
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination" />

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev" />
    <div class="swiper-button-next" />

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar" />
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'VueSlider',
  props: {
    images: {
      type: Array,
      default: null,
    },
  },
  mounted() {
    const mySwiper = new Swiper(this.$refs['swiper-slider'], {
    // Optional parameters
      loop: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  },
}
</script>

<style lang="scss" scoped>
  @import '@styles';
  .swiper-slide {
    width: 100%;
  }
  .swiper-slide {
    img {
      width: 100%;
    }
  }
  .swiper-container {
    width: 100%;
  }
  .swiper-button-prev, .swiper-button-next {
    color: $white;
    transform: scale(0.5);
  }
</style>
