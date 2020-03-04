<template>
  <!-- Slider main container -->
  <div
    ref="swiper-carousel"
    class="swiper-container"
  >
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="swiper-slide"
      >
        <vue-card
          :card="card"
        />
      </div>
    </div>
    <!-- If we need pagination -->
    <div
      v-if="width <= 768"
      class="swiper-pagination"
    />

    <!-- If we need navigation buttons -->
    <div
      v-if="width > 768"
      class="swiper-button-prev"
    />
    <div
      v-if="width > 768"
      class="swiper-button-next"
    />

    <!-- If we need scrollbar -->
    <!--     <div class="swiper-scrollbar"></div> -->
  </div>
</template>

<script>
import Swiper from 'swiper'
import Card from '@components/Card.vue'
import '@styles/_index.scss'

export default {
  name: 'VueCarousel',
  components: {
    'vue-card': Card,
  },
  props: {
    cards: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      width: window.innerWidth,
    }
  },
  mounted() {
    const mySwiper = new Swiper(this.$refs['swiper-carousel'], {
      updateOnWindowResize: true,
      speed: 400,
      initialSlide: 0,
      // truewrapper adoptsheight of active slide
      autoHeight: false,
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      // delay between transitions in ms
      autoplayStopOnLast: false, // loop false also
      // If we need pagination
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      paginationType: 'bullets',
      // breakpoints
      breakpoints: {
        768: {
          slidesPerView: 1,
        },
        1066: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      },
      // Navigation arrows
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      // And if we need scrollbar
      // scrollbar: '.swiper-scrollbar',
      // "slide", "fade", "cube", "coverflow" or "flip"
      effect: 'slide',
      // Distance between slides in px.
      //
      centeredSlides: true,
      //
      slidesOffsetBefore: 0,
    })
  },
}
</script>

<style lang="scss" scoped>
  @import '@styles';
  .swiper-slide {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-container {
    width: 100%;
    height: 530px;
  }
  .swiper-button-prev, .swiper-button-next {
    color: $blue;
    transform: scale(0.5);
  }
</style>
