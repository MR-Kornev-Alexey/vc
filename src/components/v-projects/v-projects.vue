<template>
  <v-container>
    <v-row class="mt-4">
      <v-col class="ml-8">
        <h2 class="">Последние работы</h2>
      </v-col>
    </v-row>
    <v-row class="mt-4 d-block justify-center">
      <v-row class="ml-8 " v-for="item in myLinks" :key="item.id">
        <v-col cols="12" md="6">
          <h2>{{ item.title }}</h2>
          <p class="item-subtitle">{{ item.subtitle }}</p>
          <a class="item-link" target="_blank" :href="item.link"
            ><p>{{ item.view }}</p></a
          >
          <p class="item-tools">Инструменты:</p>
          <p class="item-sub-tools">{{ item.tools }}</p>
        </v-col>
        <v-col cols="12" md="6">
          <ZoomImage :src="item.image" />
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import ZoomImage from "../v-zoom-image/v-zoom-image";

export default {
  name: "v-projects",
  data: function() {
    return {
      myLinks: [
        {
          id: 1,
          image: "../../assets/img/sreens-2.jpg",
          title: 'Цифровое агенство "KLEVER GROUP',
          subtitle: "Сервис по продвижению музыкальных релизов.",
          view: "Страница релиза ''MIA BOYKA - ЭМЭМДЭНС'' (FrontEnd)",
          link: "https://klvr.link/ememdens",
          tools: "Express.js, S3, jQuery, Bootsrap4, HTML5, CSS3"
        },
        {
          id: 2,
          image: "../../assets/img/sreens-1.jpg",
          title: 'Цифровое агенство "KLEVER GROUP"',
          subtitle:
            "Сервис по продвижению музыкальных релизов. Все линки релиза собраны в одном месте",
          view: "Панель администратора (BackEnd).",
          link: "https://klvr.link/registration",
          tools:
            "Node.js, Express.js, S3, PostgreSQL, Vuetify.js, Bootsrap4, HTML5, CSS3"
        },
        {
          id: 3,
          image: "../../assets/img/sreens-3.jpg",
          title: 'Цифровое агенство "KLEVER GROUP""',
          subtitle: "Продвижение артистов, личных брендов,и сайтов.",
          view: "Главная страница компании",
          link: "https://kleverlabel.ru/",
          tools: "WordPress, jQuery, Bootsrap4, HTML5, CSS3"
        },
        {
          id: 4,
          image: "../../assets/img/sreens-4.jpg",
          title: "Стартап  ''SOCIAL TRENDS PREDICTOR '' ",
          subtitle:
            "IS A SAAS SYSTEM THAT USES REAL-TIME STATISTICAL ANALYSIS AND MACHINE LEARNING TO ANALYZE NEWS",
          view: "Страница - презентация проекта.",
          link: "http://mrk.digital/",
          tools: "jQuery, Bootsrap4, HTML5, CSS3"
        },
        {
          id: 5,
          image: "../../assets/img/sreens-5.jpg",
          title: "Строительный калькулятор",
          subtitle: "Расчет количества необходимых материалов",
          view: "Часть проекта строительного магазина",
          link: "http://calc.mrk.digital",
          tools: "Vuetify"
        },
        {
          id: 6,
          image: "../../assets/img/sreens-6.jpg",
          title: "Калькулятор пилометериалов",
          subtitle: "Расчет количества досок из кубутуры",
          view: "Часть проекта",
          link: "http://wood.mrk.digital",
          tools: "Vuetify"
        },
        {
          id: 7,
          image: "../../assets/img/sreens-7.jpg",
          title: "Таблица по сортировке данных",
          subtitle: "Сервис по обработке данных ",
          view: "Часть проекта",
          link: "http://dist.mrk.digital",
          tools: "Node.js, PostgreSQL, Vuetify.js"
        },
        {
          id: 8,
          image: "../../assets/img/sreens-8.jpg",
          title: 'Торговая марка "Herr Plavkin"',
          subtitle: "Ленд-страница по продвижению товара в Германии ",
          view: "Boxershorts mit Coolen Sprüchen an einer besonderen Stelle!",
          link: "http://herrplavkin.com/",
          tools: "jQuery, Bootsrap4, HTML5, CSS3"
        },
        {
          id: 9,
          image: "../../assets/img/sreens-9.jpg",
          title: 'Фирма "Kornev GmbH"',
          subtitle: "Реализация проектов в Германии ",
          view: "Главная страница проекта",
          link: "http://kornevgmbh.com/",
          tools: "Express.js, S3, jQuery, Bootsrap4, HTML5, CSS3"
        },
        {
          id: 10,
          image: "../../assets/img/sreens-10.jpg",
          title: 'Стартап "Baby bracelet"',
          subtitle: "The smart bracelet for saving lives",
          view: "Презентация проекта",
          link: "http://base.kornevgmbh.com",
          tools: "jQuery, Bootsrap4, HTML5, CSS3"
        }
      ]
    };
  },

  components: {
    ZoomImage
  }
};
</script>

<style scoped lang="scss">
.item-subtitle {
  width: 95%;
}

.item-sub-tools {
  width: 95%;
  color: #3d498c;
}

.item-link {
  text-decoration: none;
  cursor: pointer;
}

.item-link:hover {
  color: #3d498c;
}

.item-tools {
  font-weight: 500;
  text-transform: uppercase;
}

.item-tools:after {
  content: ""; /* This is necessary for the pseudo element to work. */
  display: block; /* This will put the pseudo element on its own line. */
  width: 30px;
  height: 3px;
  background: #444fee;
  bottom: 0;
  right: calc(100% - 35px);
}
</style>
