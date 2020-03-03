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
            title: 'Lançamentos por Play Arquitetura',
            label: 'Louças',
            src: '/img/Foto1_Mantis.jpg',
            description: 'Nossa nova parceria criativa é a Play Arquitetura. A mineira, fundada porMarcelo Alvarenga é responsável pela criação da linha de monocomandosMantis. O nome Mantis refere-se ao louva-deus. &quot;Pensamos que o desenhosuper longilíneo da bica, com uma leve inclinação, faz lembrar a delicadeza eelegância desses insetos&quot;, diz o arquiteto sobre sua criação exclusiva para aDocol.Criação do mesmo escritório, o chuveiro Toró é um projeto que pretende levaro prazer de um bom banho para qualquer lugar. Autoportante, o Toró foiprojetado pra que nem mesmo a falta de um ponto de água nas proximidadesseja empecilho, uma vez que pode ser conectado a uma mangueira comum dejardim, com um simples clique.',
          },
          {
            title: 'Mix&amp;Match na Cozinha',
            label: 'Louças',
            src: '/img/Foto3_Mix_Match1.jpg',
            description: 'A coleção Mix&amp;Match, reconhecida com os prêmios Good Design 2018 e iFDesign Award 2019, chega agora à cozinha renovando sua proposta deliberdade de escolha e a perfeita combinação entre forma e função. Com amesma precisão nos detalhes, proporções e acabamento, os componentes dalinha - bicas, duchas e acionamentos para torneira ou misturador - podem sercombinados de acordo com seu projeto e instalados em diversas posições nabancada, garantindo a flexibilidade da composição.',
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
