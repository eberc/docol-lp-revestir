<template>
  <div class="player">
    <audio
      ref="audio-player"
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
import '@styles/_index.scss'

export default {
  name: 'VueAudio',
  props: {
    audio: {
      type: String,
      default: null,
    },
  },
  mounted() {
    const player = new Plyr(this.$refs['audio-player'], {
      controls: ['play', 'progress', 'mute', 'volume'],
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
