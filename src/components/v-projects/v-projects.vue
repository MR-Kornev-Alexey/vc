<template>
  <v-container>
    <v-row class="mt-4">
      <v-col class="ml-8">
        <h2 class="">Последние работы</h2>
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col
        class="ml-8 d-flex justify-space-around"
        v-for="item in myLinks"
        :key="item.id"
      >
        <v-flex>
          <h2>{{ item.title }}</h2>
          <p class="item-subtitle" >{{ item.subtitle }}</p>
          <a  class="item-link" target="_blank" :href="item.link"><p>{{ item.view }}</p></a>
          <p class="item-tools" >Инструменты:</p>
          <p class="item-sub-tools" >{{ item.tools }}</p>
        </v-flex>
        <ZoomImage
          imageWidth="400"
          imageHeight="200"
          :src="item.image"
        />
      </v-col>
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
          image: "../../assets/img/sreens-1.jpg",
          title: 'Музыкальное агенство "Klever Групп"',
          subtitle:
            "Сервис по продвижению музыкальных релизов. Все линки релиза собраны в одном месте",
          view: "Панель администратора (BackEnd).",
          link:"https://klvr.link/registration",
          tools:
            "Node.js, Express.js, S3, PostgreSQL, Vuetify.js, Bootsrap4, HTML5, CSS3"
        },
        {
          id: 2,
          image: "../../assets/img/sreens-2.jpg",
          title: 'Музыкальное агенство "Klever Групп"',
          subtitle: "Сервис по продвижению музыкальных релизов.",
          view: "Страница релиза ''MIA BOYKA - ЭМЭМДЭНС'' (FrontEnd)",
          link:"https://klvr.link/ememdens",
          tools: "Express.js, S3, jQuery, Bootsrap4, HTML5, CSS3"
        },
        {
          id: 3,
          image: "../../assets/img/sreens-3.jpg",
          title: 'Музыкальное агенство "Klever Групп"',
          subtitle: "Сервис по продвижению музыкальных релизов.",
          view: "Страница релиза ''MIA BOYKA - ЭМЭМДЭНС'' (FrontEnd)",
          link:"https://klvr.link/ememdens",
          tools: "Express.js, S3, jQuery, Bootsrap4, HTML5, CSS3"
        },
        {
          id: 4,
          image: "../../assets/img/sreens-4.jpg",
          title: 'Музыкальное агенство "Klever Групп"',
          subtitle: "Сервис по продвижению музыкальных релизов.",
          view: "Страница релиза ''MIA BOYKA - ЭМЭМДЭНС'' (FrontEnd)",
          link:"https://klvr.link/ememdens",
          tools: "Express.js, S3, jQuery, Bootsrap4, HTML5, CSS3"
        },
        {
          id: 5,
          image: "../../assets/img/sreens-5.jpg",
          title: 'Музыкальное агенство "Klever Групп"',
          subtitle: "Сервис по продвижению музыкальных релизов.",
          view: "Страница релиза ''MIA BOYKA - ЭМЭМДЭНС'' (FrontEnd)",
          link:"https://klvr.link/ememdens",
          tools: "Express.js, S3, jQuery, Bootsrap4, HTML5, CSS3"
        },
        {
          id: 6,
          image: "../../assets/img/sreens-6.jpg",
          title: 'Музыкальное агенство "Klever Групп"',
          subtitle: "Сервис по продвижению музыкальных релизов.",
          view: "Страница релиза ''MIA BOYKA - ЭМЭМДЭНС'' (FrontEnd)",
          link:"https://klvr.link/ememdens",
          tools: "Express.js, S3, jQuery, Bootsrap4, HTML5, CSS3"
        },
        {
          id: 7,
          image: "../../assets/img/sreens-7.jpg",
          title: 'Музыкальное агенство "Klever Групп"',
          subtitle: "Сервис по продвижению музыкальных релизов.",
          view: "Страница релиза ''MIA BOYKA - ЭМЭМДЭНС'' (FrontEnd)",
          link:"https://klvr.link/ememdens",
          tools: "Express.js, S3, jQuery, Bootsrap4, HTML5, CSS3"
        },
        {
          id: 8,
          image: "../../assets/img/sreens-8.jpg",
          title: 'Музыкальное агенство "Klever Групп"',
          subtitle: "Сервис по продвижению музыкальных релизов.",
          view: "Страница релиза ''MIA BOYKA - ЭМЭМДЭНС'' (FrontEnd)",
          link:"https://klvr.link/ememdens",
          tools: "Express.js, S3, jQuery, Bootsrap4, HTML5, CSS3"
        },
        {
          id: 9,
          image: "../../assets/img/sreens-9.jpg",
          title: 'Музыкальное агенство "Klever Групп"',
          subtitle: "Сервис по продвижению музыкальных релизов.",
          view: "Страница релиза ''MIA BOYKA - ЭМЭМДЭНС'' (FrontEnd)",
          link:"https://klvr.link/ememdens",
          tools: "Express.js, S3, jQuery, Bootsrap4, HTML5, CSS3"
        },
        {
          id: 10,
          image: "../../assets/img/sreens-9.jpg",
          title: 'Музыкальное агенство "Klever Групп"',
          subtitle: "Сервис по продвижению музыкальных релизов.",
          view: "Страница релиза ''MIA BOYKA - ЭМЭМДЭНС'' (FrontEnd)",
          link:"https://klvr.link/ememdens",
          tools: "Express.js, S3, jQuery, Bootsrap4, HTML5, CSS3"
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
  .item-subtitle, .item-sub-tools {
    width: 95%;
  }
  .item-link {
    text-decoration: none;
    cursor: pointer;
  }
  .item-link:hover{
    text-decoration: none;
    cursor: pointer;
    color: #3d498c;
  }
  .item-tools {
    position: relative;
    font-weight: 500;
    text-transform: uppercase;
  }
  .item-tools::after {
    content: "";
    position: absolute;
    display: block;
    width: 30px;
    height: 3px;
    background: #444fee;
    bottom: 0;
    right: calc(100% - 35px);
  }
</style>
