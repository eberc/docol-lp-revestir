<template>
  <!-- Slider main container -->
  <div
    ref="swiper-carousel-talks"
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
        <vue-card-talks
          :card="card"
        />
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination" />

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

export default {
  name: 'VueCarouselTalks',
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
    const mySwiper = new Swiper(this.$refs['swiper-carousel-talks'], {
      updateOnWindowResize: true,
      speed: 400,
      initialSlide: 0,
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
      // truewrapper adoptsheight of active slide
      autoHeight: false,
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      // delay between transitions in ms
      autoplayStopOnLast: false, // loop false also
      // If we need pagination
      // breakpoints
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        1066: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
      // Navigation arrows
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      effect: 'slide',
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
    @include breakpoint(md) {
      align-items: flex-start;
    }
  }
  .swiper-container {
    width: 100%;
    padding-bottom: 40px;
  }
  .swiper-button-prev, .swiper-button-next {
    color: $blue;
    transform: scale(0.5);
  }
</style>
