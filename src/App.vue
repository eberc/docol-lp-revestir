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
            src: '/images/Foto1.jpg',
            description: 'Nossa nova parceria criativa é a Play Arquitetura. A mineira, fundada porMarcelo Alvarenga é responsável pela criação da linha de monocomandosMantis. O nome Mantis refere-se ao louva-deus. &quot;Pensamos que o desenhosuper longilíneo da bica, com uma leve inclinação, faz lembrar a delicadeza eelegância desses insetos&quot;, diz o arquiteto sobre sua criação exclusiva para aDocol.Criação do mesmo escritório, o chuveiro Toró é um projeto que pretende levaro prazer de um bom banho para qualquer lugar. Autoportante, o Toró foiprojetado pra que nem mesmo a falta de um ponto de água nas proximidadesseja empecilho, uma vez que pode ser conectado a uma mangueira comum dejardim, com um simples clique.',
          },
          {
            title: 'Mix&amp;Match na Cozinha',
            label: 'Torneiras',
            src: '/images/Foto3.jpg',
            description: 'A coleção Mix&amp;Match, reconhecida com os prêmios Good Design 2018 e iFDesign Award 2019, chega agora à cozinha renovando sua proposta deliberdade de escolha e a perfeita combinação entre forma e função. Com amesma precisão nos detalhes, proporções e acabamento, os componentes dalinha - bicas, duchas e acionamentos para torneira ou misturador - podem sercombinados de acordo com seu projeto e instalados em diversas posições nabancada, garantindo a flexibilidade da composição.',
          },
          {
            title: 'Louças para durar e surpreender',
            label: 'Louças',
            src: '/images/Foto6.jpg',
            description: 'Com o mesmo padrão de qualidade dos metais e a mesma confiança daGarantia Toda Vida passamos a oferecer ao mercado nossas linhas de louças.São cinco linhas de bacias sanitárias com o sistema Limpeza 360º, dedescargas eficientes e remoção total de resíduos. Além disso, os produtos têmoutras tecnologias que garantem conforto e economia de água, comoSoftClose no assento, enchimento rápido e silencioso nas versões com caixaacoplada e a tecla com duas opções de acionamento Salvágua. As linhas decubas possuem acabamento impecável e uniforme e combinam perfeitamentecom os metais Docol. Com esses lançamentos pretendemos levar cada vezmais soluções completas ao mercado.',
          },
          {
            title: 'Cuba Concreta',
            label: 'Cubas',
            src: '/images/Foto7.jpg',
            description: 'Criação de Angelo Bucci, do escritório SPBR, as cubas da linha Concreta sãofabricadas em material cimentício, de uso inédito para este fim. A resistência doproduto é seis vezes superior ao cimento tradicional e tem baixíssimaporosidade. &quot;As características do material são potencialidades que provocama imaginação arquitetônica para encontrar uma aplicação prática onde apareçaa sua utilidade. O convite da Docol para o desenho de peças moldadas parabanheiros — esse segmento chamado louças sanitárias — surgiu comooportunidade de se juntar as pontas: Docol e Ductal.&quot;, conta Angelo Buccisobre seu projeto.',
          },
          {
            title: 'Docol e Mekal Due',
            label: 'Due',
            src: '/images/Foto8.jpg',
            description: 'Selando a parceria entre Docol e Mekal, apresentamos ao mercado a linhaDue. Composta por cuba Mekal e monocomando Docol, esse produto pretendetransformar a bancada de trabalho das cozinhas em um espaço multiuso, ondevocê pode recolher o misturador para dentro da cuba expandindo suaspossibilidades no espaço.O monocomando telescópico Due foi projetado para proporcionar versatilidadeaos projetos de cozinhas: seu funcionamento telescópico é leve eextremamente funcional. Pode ser instalado nos três modelos de cubas(simples, dupla e com escorredor) e também em cubas esculpidas; seudesenho prioriza a usabilidade - a bica em posição de uso é giratória em 360graus e possui arejador articulado de grande alcance.',
          },
          {
            title: 'Blink Ozônio',
            label: 'Blink Ozônio',
            src: '/images/Foto8.jpg',
            description: 'Evolução da torneira Blink Hospitalar com a tecnologia DocolPresence,consolidada no mercado como referência em inovação, esta nova torneiradesenvolvida a partir de uma parceria de pesquisa junto a hospitais, médicos eprofissionais de saúde, passa a contar com um novo aliado na luta contra aproliferação de microrganismos no ambiente hospitalar: o ozônio, um gásnatural que, quando misturado à água, tem o poder de eliminar 99% dasbactérias. Ideal para lavatórios de hospitais esse produto elimina agentespatogênicos e garante muito mais higiene nesses ambientes.',
          }
        ]"
      />
    </vue-section>
    <vue-slider
      :images="[
        '/images/Foto1.jpg',
        '/images/Foto2.jpg',
        '/images/Foto3.jpg',
        '/images/Foto4.jpg',
        '/images/Foto5.jpg',
        '/images/Foto6.jpg',
        '/images/Foto7.jpg',
        '/images/Foto8.jpg',
      ]"
    />
    <vue-section padding-bottom>
      <vue-title>Curiosidades</vue-title>
      <vue-carousel
        :cards="[
          {
            icon: '/icons/icon1.svg',
            title: 'SOBRE O STAND',
            description: 'Nosso stand foi desenvolvido pelo Atelier do croata Marko Brajovic. Ainspiração deste ano foi a Natureza Urbana e cada espaço aborda um dosbiomas brasileiros. Esse conceito nasceu nas reuniões de briefing, durante asdiscussões sobre a importância do design, o Atelier propôs fazermos umahomenagem ao melhor de todos os designers: a natureza.',
          },
          {
            icon: '/icons/cidadania.svg',
            title: 'REAPROVEITAMENTO DE ÁGUA',
            description: 'São XX produtos Docol instalados dentro do stand, entre torneiras,misturadores, duchas e chuveiros. Esses produtos acionados todo o tempo,durante os 4 dias de feiras gastariam XX litros de água. Com essapreocupação, montamos um sistema de água recirculante, que reaproveita orecurso em todos os produtos possíveis. Com esse sistema garantimos quevocê possa ver nossos produtos em funcionamento, com a certeza de que nãohá desperdício.',
          },
          {
            icon: '/icons/qualidade_de_ar.svg',
            title: 'PLANTAS BRASILEIRAS',
            description: 'São XX produtos Docol instalados dentro do stand, entre torneiras,misturadores, duchas e chuveiros. Esses produtos acionados todo o tempo,durante os 4 dias de feiras gastariam XX litros de água. Com essapreocupação, montamos um sistema de água recirculante, que reaproveita orecurso em todos os produtos possíveis. Com esse sistema garantimos quevocê possa ver nossos produtos em funcionamento, com a certeza de que nãohá desperdício.',
          },
        ]"
      />
    </vue-section>
    <vue-section
      grey
      padding-bottom
    >
      <vue-title>Agenda de Talks</vue-title>
      <vue-description>
        Estaremos na Revestir de 10 a 13 de março, das 10h às 19h. Venha tomar um
        café conosco no espaço Pronto e não deixe de se programar para assistir
        online ou pessoalmente nossa programação.
      </vue-description>
      <vue-carousel-talks
        :cards="[
          {
            avatar: '/images/Foto9.jpg',
            title: 'Experiência Gourmet com Bel Coelho',
            description: 'A chef finalizará uma receita no nosso espaço gourmet. Vamos mostrartudo no nosso Instagram.',
            date: '11 de março às 12h',
          },
          {
            avatar: '/images/Foto10.jpg',
            title: 'Cobertura Digital com Amanda Ferber',
            description: 'A arquiteta responsável pelo canal Architecture Hunter contará sobresuas percepções do stand.',
            date: '11 de março às 14h',
          },
          {
            avatar: '/images/Foto11.jpg',
            title: 'Experiência Gourmet com Leo Boto',
            description: 'O chef trará uma de suas receitas com inspiração brasileira paramostrar em nosso espaço. Você também pode acompanhar no nosso Instagram.',
            date: '12 de março às 12h',
          },
          {
            avatar: '/images/Foto12.jpg',
            title: 'Cobertura Digital com Patricia Pomerantzeff',
            description: 'No comando dos canais Doma Arquitetura, Patricia nos fará uma visitae mostrará tudo o que gostou dos nossos lançamentos.',
            date: '12 de março às 14h',
          },
          {
            avatar: '/images/Foto13.jpg',
            title: 'Drinks por Alê D´Agostino',
            description: 'O especialista em drinks mostrará o preparo de receitas práticas cominspiração em ingredientes brasileiros. Não perca os detalhes, no nossoInstagram.',
            date: '13 de março às 12h',
          },
          {
            avatar: '/images/Foto14.jpg',
            title: 'Cobertura Digital com André Bacalov',
            description: 'Da Triart Arquitetura, André vem mostrar pra gente um pouco do nossoespaço através de seu olhar de arquiteto.',
            date: '13 de março às 14h',
          },
          {
            avatar: '/images/Foto15.jpg',
            title: 'Cobertura Digital com Lucila Turqueto',
            description: 'Com o cuidado e carinho que tem em todos os seus trabalhos, aresponsável pelo canal Casa de Valentina mostrará as novidades Docol paravocê.',
            date: '14 de março às 14h',
          },
        ]"
      />
    </vue-section>
    <vue-banner
      image="/images/foto16.jpg"
      title="Quer receber nosso catálogo de novidades por email?"
      label="SOLICITE"
    />
    <vue-section padding-bottom>
      <vue-title>
        Faça uma visita sonora ao nosso stand
      </vue-title>
      <vue-description>
        Pensando em tornar a visita ao nosso stand mais acessível, preparamos um
        áudio-guia com os destaques de cada espaço. Aperte o play e faça essa visita
        com a gente.
      </vue-description>
      <vue-player
        audio="/audio/sample.mp3"
      />
      <vue-button
        outline
        icon="/icons/download.svg"
      >
        BAIXE O ÁUDIO
      </vue-button>
    </vue-section>
    <vue-banner
      spotify
      image="/images/Foto17.png"
      sub-title="PLAYLIST NO SPOTIFY"
      title="Você sabia que menos de 10 minutos é o tempo recomendado pela ONU para
      um banho sustentável. A partir desse tempo, você começa a desperdiçar água
      em excesso. Para te ajudar a controlar o tempo de banho, criamos algumas
      Playlists de dez minutos. Assim, você pode aproveitar seu momento de banho,
      sem correr o risco de passar do tempo."
      label="Ouvir no Spotify"
    />
  </div>
</template>

<script>
import '@styles/_index.scss'

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
