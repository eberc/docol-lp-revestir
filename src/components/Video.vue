<template>
  <div class="video">
    <video
      id="player"
      poster="/path/to/poster.jpg"
      playsinline
      controls
    >
      <source
        :src="videoSrc"
        type="video/mp4"
      >
    </video>
  </div>
</template>

<script>
import Plyr from 'plyr'

export default {
  name: 'VueVideo',
  props: {
    videoSrc: {
      type: String,
      default: null,
    },
  },
  mounted() {
    const player = new Plyr('#player', {
      controls: ['play-large', 'play', 'progress', 'volume'],
    })
    player.currentTime = 10 // Seeks to 10 seconds
  },
}
</script>

<style lang="scss" scoped>
  @import '@styles';
  .video {
    width: 100%;
    @include breakpoint(md) {
      height: 597px;
    }
  }
</style>
