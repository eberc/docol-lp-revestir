<template>
  <div id="app">
    <vue-section>
      <vue-title>
        Viva a Água
      </vue-title>
      <vue-description>
        Atentos às mudanças de comportamento da sociedade, observamos
        com curiosidade e empatia o dia a dia das pessoas. Esse olhar e a convicção
        de que o bom design aproxima as pessoas nos motivam a evoluir diariamente.
        Nesta edição da REVESTIR, nosso pavilhão NATUREZA URBANA propõe
        uma imersão na natureza brasileira, uma experiência de bem-estar e
        acolhimento que abriga uma nova coleção de produtos criados exclusivamente
        para você.
      </vue-description>
    </vue-section>
    <vue-section grey>
      <vue-title>
        Novidades para Supreender
      </vue-title>
      <vue-description>
        A cada nova criação utilizamos nossos recursos tecnológicos e nosso
        pensamento original para reinventar o uso da água de forma sustentável e
        inspiradora, pensando com apuro em cada detalhe para promover o bem estar
        das pessoas e transformar seu cotidiano em algo especial. Conheça nossos
        destaques da Revestir 2020.
      </vue-description>
      <vue-gallery
        :pics="[
          {
            label: '',
            src: '',
          }
        ]"
      />
    </vue-section>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
  @import '@styles';
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
