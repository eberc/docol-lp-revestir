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
            label: 'Chuveiros',
            src: '/img/Foto1_Mantis.jpg',
            description: 'Nossa nova parceria criativa é a Play Arquitetura. A mineira, fundada porMarcelo Alvarenga é responsável pela criação da linha de monocomandosMantis. O nome Mantis refere-se ao louva-deus. &quot;Pensamos que o desenhosuper longilíneo da bica, com uma leve inclinação, faz lembrar a delicadeza eelegância desses insetos&quot;, diz o arquiteto sobre sua criação exclusiva para aDocol.Criação do mesmo escritório, o chuveiro Toró é um projeto que pretende levaro prazer de um bom banho para qualquer lugar. Autoportante, o Toró foiprojetado pra que nem mesmo a falta de um ponto de água nas proximidadesseja empecilho, uma vez que pode ser conectado a uma mangueira comum dejardim, com um simples clique.',
          },
          {
            title: 'Mix&amp;Match na Cozinha',
            label: 'Torneiras',
            src: '/img/Foto3_Mix_Match1.jpg',
            description: 'A coleção Mix&amp;Match, reconhecida com os prêmios Good Design 2018 e iFDesign Award 2019, chega agora à cozinha renovando sua proposta deliberdade de escolha e a perfeita combinação entre forma e função. Com amesma precisão nos detalhes, proporções e acabamento, os componentes dalinha - bicas, duchas e acionamentos para torneira ou misturador - podem sercombinados de acordo com seu projeto e instalados em diversas posições nabancada, garantindo a flexibilidade da composição.',
          },
          {
            title: 'Louças para durar e surpreender',
            label: 'Louças',
            src: '/img/Foto6_Loucas.jpg',
            description: 'Com o mesmo padrão de qualidade dos metais e a mesma confiança daGarantia Toda Vida passamos a oferecer ao mercado nossas linhas de louças.São cinco linhas de bacias sanitárias com o sistema Limpeza 360º, dedescargas eficientes e remoção total de resíduos. Além disso, os produtos têmoutras tecnologias que garantem conforto e economia de água, comoSoftClose no assento, enchimento rápido e silencioso nas versões com caixaacoplada e a tecla com duas opções de acionamento Salvágua. As linhas decubas possuem acabamento impecável e uniforme e combinam perfeitamentecom os metais Docol. Com esses lançamentos pretendemos levar cada vezmais soluções completas ao mercado.',
          },
          {
            title: 'Cuba Concreta',
            label: 'Cubas',
            src: '/img/Foto7_Concreta.jpg',
            description: 'Criação de Angelo Bucci, do escritório SPBR, as cubas da linha Concreta sãofabricadas em material cimentício, de uso inédito para este fim. A resistência doproduto é seis vezes superior ao cimento tradicional e tem baixíssimaporosidade. &quot;As características do material são potencialidades que provocama imaginação arquitetônica para encontrar uma aplicação prática onde apareçaa sua utilidade. O convite da Docol para o desenho de peças moldadas parabanheiros — esse segmento chamado louças sanitárias — surgiu comooportunidade de se juntar as pontas: Docol e Ductal.&quot;, conta Angelo Buccisobre seu projeto.',
          },
          {
            title: 'Docol e Mekal Due',
            label: 'Due',
            src: '/img/Foto8_Due.jpg',
            description: 'Selando a parceria entre Docol e Mekal, apresentamos ao mercado a linhaDue. Composta por cuba Mekal e monocomando Docol, esse produto pretendetransformar a bancada de trabalho das cozinhas em um espaço multiuso, ondevocê pode recolher o misturador para dentro da cuba expandindo suaspossibilidades no espaço.O monocomando telescópico Due foi projetado para proporcionar versatilidadeaos projetos de cozinhas: seu funcionamento telescópico é leve eextremamente funcional. Pode ser instalado nos três modelos de cubas(simples, dupla e com escorredor) e também em cubas esculpidas; seudesenho prioriza a usabilidade - a bica em posição de uso é giratória em 360graus e possui arejador articulado de grande alcance.',
          },
          {
            title: 'Blink Ozônio',
            label: 'Blink Ozônio',
            src: '/img/Foto8_Due.jpg',
            description: 'Evolução da torneira Blink Hospitalar com a tecnologia DocolPresence,consolidada no mercado como referência em inovação, esta nova torneiradesenvolvida a partir de uma parceria de pesquisa junto a hospitais, médicos eprofissionais de saúde, passa a contar com um novo aliado na luta contra aproliferação de microrganismos no ambiente hospitalar: o ozônio, um gásnatural que, quando misturado à água, tem o poder de eliminar 99% dasbactérias. Ideal para lavatórios de hospitais esse produto elimina agentespatogênicos e garante muito mais higiene nesses ambientes.',
          }
        ]"
      />
    </vue-section>
    <!-- <vue-slider
      :images="[
        '/img/Foto1.jpg',
        '/img/Foto2.jpg',
        '/img/Foto3.jpg',
        '/img/Foto4.jpg',
        '/img/Foto5.jpg',
        '/img/Foto6.jpg',
        '/img/Foto7.jpg',
        '/img/Foto8.jpg',
      ]"
    /> -->
    <vue-section>
      <vue-card />
    </vue-section>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss" scoped>
  @import '@styles';
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 300px;
  }
</style>
