<template>
  <section>
    <div class="wrapper">
      <vue-text
        :title="title"
        :description="description"
      />
    </div>
  </section>
</template>

<script>
import Text from '@components/Text.vue'

export default {
  name: 'SectionPresentation',
  components: {
    'vue-text': Text,
  },
  props: {
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@styles';
  section {
    display: flex;
    align-items: center;
    width: 100%;
  }
</style>
