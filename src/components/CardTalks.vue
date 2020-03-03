<template>
  <div class="card-talk">
    <div
      class="card-talk__avatar"
      :style="{
        backgroundImage: `url(${card.avatar})`,
      }"
    />
    <div class="card-talk__info">
      <p class="card-talk__info__title">
        {{ card.title }}
      </p>
      <p class="card-talk__info__description">
        {{ card.description }}
      </p>
      <p class="card-talk__info__description">
        {{ card.date }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VueCardTalks',
  props: {
    card: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    console.log('card talks', this.card)
  },
}
</script>

<style lang="scss" scoped>
  @import '@styles';
  .card-talk {
    position: relative;
    width: 515px;
    height: 450px;
    &__avatar {
      position: absolute;
      top: 0;
      right: 0;
      width: 340px;
      height: 340px;
      z-index: 1;
      background-size: cover;
    }
    &__info {
      flex: 0 0 auto;
      position: absolute;
      top: 150px;
      left: 0;
      display: flex;
      flex-direction: column;
      width: 260px !important;
      height: 300px;
      padding: 30px 30px 0 25px;
      background-color: $white;
      z-index: 2;
      &__title {
        font-family: 'Muli';
        font-size: 16px;
        font-weight: 700;
        color: $text;
      }
      &__description {
        font-family: 'Muli';
        font-size: 16px;
        font-weight: 400;
        color: $text;
        line-height: 22px;
      }
    }
  }
</style>
