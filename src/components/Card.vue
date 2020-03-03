<template>
  <div class="card">
    <div class="card__wrapper">
      <div class="card__icon-container">
        <img :src="card.icon">
      </div>
      <div class="card__text-container">
        <p class="card__text-container__title">
          {{ card.title }}
        </p>
        <p class="card__text-container__description">
          {{ card.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueCard',
  props: {
    card: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
  @import '@styles';
  .card {
    width: 345px;
    height: 425px;
    border: 3px solid $grey;
    &__wrapper {
      @extend %wrapper;
      justify-content: flex-start;
      position: relative;
      padding: 0;
      width: 270px;
      height: 100%;
      margin: 0 auto;
    }
    &__icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 130px;
      border-bottom: 3px solid $grey;
    }
    &__text-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      &__title {
        font-family: 'Muli';
        font-size: 14px;
        font-weight: 700;
        margin: 22px 0 25px 0;
      }
      &__description {
        font-family: 'Muli';
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        color: $text;
        margin: 0;
      }
    }
  }
</style>
