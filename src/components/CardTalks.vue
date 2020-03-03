<template>
  <div class="card-talk">
    <div
      class="card-talk__avatar"
      :style="{
        backgroundImage: card.avatar,
      }"
    >
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
}
</script>

<style lang="scss" scoped>
  @import '@styles';
  .card-talk {
    position: relative;
    display: flex;
    width: 515px;
    height: 385px;
    &__avatar {
      position: absolute;
      top: 0;
      left: 0;
      width: 340px;
      height: 340px;
    }
    &__info {
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      width: 260px;
      height: 235px;
      background-color: $white;
      z-index: 3;
      &__title {
        font-family: 'Muli';
        font-size: 16px;
        font-weight: 700;
        color: $text;
        margin: 30px 0 35px 0;
      }
      &__description {
        font-family: 'Muli';
        font-size: 16px;
        font-weight: 700;
        color: $text;
        margin: 0 0 30px 0;
        &:last-child {
          margin: 0;
        }
      }
    }
  }
</style>
