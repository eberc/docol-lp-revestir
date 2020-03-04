<template>
  <div class="player">
    <audio
      id="player"
      controls
    >
      <source
        :src="audio"
        type="audio/mp3"
      >
    </audio>
  </div>
</template>

<script>
import Plyr from 'plyr'

export default {
  name: 'VuePlayer',
  props: {
    audio: {
      type: String,
      default: null,
    },
  },
  mounted() {
    const player = new Plyr('#player', {
      controls: ['play', 'progress', 'mute'],
    })
  },
}
</script>

<style lang="scss" scoped>
  @import '@styles';
  .player {
    width: 860px;
    max-width: 100%;
    padding-bottom: 80px;
    position: relative;
  }
</style>
