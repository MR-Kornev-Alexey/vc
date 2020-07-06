<template>
  <v-container>
    <v-row class="mt-4">
      <v-col class="ml-8">
        <h2 class="">Образование</h2>
      </v-col>
    </v-row>
    <v-row class="text-center  mt-4">
      <v-col cols="7" class="justify-center align-self-center">
        <img
          :src="require('../../assets/img/hpi.jpg')"
          class="my-3 institute-img "
          contain
          height="500"
          alt=""
        />
      </v-col>
      <v-col cols="4" class="justify-center align-self-center">
        <h3 class="mb-2">
          Тихоокеанский государственный университет ( бывший ХПИ)
        </h3>
        <v-flex
          v-for="items in importantData"
          :key="items.id"
          class="d-flex text-left"
        >
          <v-flex class="main-out-data">{{ items.text }}</v-flex>
          {{ items.data }}
        </v-flex>
      </v-col>
    </v-row>
    <v-row class="text-center  mt-4">
      <v-col cols="7" class="justify-center align-self-center">
        <img
          :src="require('../../assets/img/aeip.jpg')"
          class="my-3 institute-img "
          contain
          height="500"
          alt=""
        />
      </v-col>
      <v-col cols="4" class="justify-center align-self-center">
        <h3 class="mb-2">
          Хабаровский государственный университет экономики и права
        </h3>
        <v-flex
          v-for="items in importantDataAEIP"
          :key="items.id"
          class="d-flex text-left"
        >
          <v-flex class="main-out-data">{{ items.text }}</v-flex>
          {{ items.data }}
        </v-flex>
      </v-col>
    </v-row>
    <v-row class="text-center  mt-4">
      <v-col cols="7" class="justify-center align-self-center">
        <img
          :src="require('../../assets/img/mgu.jpg')"
          class="my-3 institute-img "
          contain
          height="500"
          alt=""
        />
      </v-col>
      <v-col cols="4" class="justify-center align-self-center">
        <h3 class="mb-2">Московский государственный университет</h3>
        <v-flex
          v-for="items in importantDataMGU"
          :key="items.id"
          class="d-flex text-left"
        >
          <v-flex class="main-out-data">{{ items.text }}</v-flex>
          {{ items.data }}
        </v-flex>
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col class="ml-8">
        <h2 class="">Навыки</h2>
      </v-col>
    </v-row>
    <v-row class="d-block">
      <v-col
        v-for="item in skills"
        :key="item.id"
        cols="9"
        class=" d-flex text-left justify-start"
      >
        <div class="skill-image text-center align-self-center">
          <img :src="item.image" class="my-3 " :height="item.height" alt="" />
        </div>

        <div class="ml-4 skill-title text-center align-self-center">
          {{ item.text }}
        </div>
        <v-flex class="ml-4 skill-title text-center align-self-center">
          <v-progress-linear
            :color="item.color"
            height="10"
            :value="item.progress"
            striped
          ></v-progress-linear>
        </v-flex>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "v-education",
  data: () => ({
    skills: [
      {
        id: 1,
        image: "../../assets/img/nodejs-1.svg",
        height: 50,
        text: "Node.js",
        progress: 80,
        color: "light-green darken-4"
      },
      {
        id: 2,
        image: "../../assets/img/html.svg",
        height: 50,
        text: "HTML5",
        progress: 95,
        color: "deep-orange"
      },
      {
        id: 3,
        image: "../../assets/img/css-5.svg",
        height: 50,
        text: "CSS3",
        progress: 95,
        color: "light-blue"
      },
      {
        id: 5,
        image: "../../assets/img/javascript-4.svg",
        height: 50,
        text: "JavaScript",
        progress: 85,
        color: "amber"
      },
      {
        id: 6,
        image: "../../assets/img/vuetify.png",
        height: 50,
        text: "Vuetify.js",
        progress: 75,
        color: "light-blue lighten-3"
      },
      {
        id: 7,
        image: "../../assets/img/jquery-1.svg",
        height: 20,
        text: "jQuery.js",
        progress: 88,
        color: "light-blue darken-3"
      },
      {
        id: 8,
        image: "../../assets/img/corel-3.svg",
        height: 50,
        text: "Corel Draw",
        progress: 78,
        color: "red accent-2"
      },
      {
        id: 9,
        image: "../../assets/img/photoshop-cc.svg",
        height: 50,
        text: "Photoshop",
        progress: 90,
        color: "blue darken-2"
      }
    ],

    importantData: [
      {
        id: 1,
        text: "Год окончания",
        data: "1991"
      },
      {
        id: 2,
        text: "Факультет",
        data: "Инфомационных технологий"
      },
      {
        id: 3,
        text: "Специальность",
        data: "Инженер системотехник"
      },
      {
        id: 4,
        text: "Форма обучения",
        data: "Дневная"
      }
    ],
    importantDataAEIP: [
      {
        id: 1,
        text: "Год окончания",
        data: "2002"
      },
      {
        id: 2,
        text: "Факультет",
        data: "Экономический"
      },
      {
        id: 3,
        text: "Специальность",
        data: "Инженер экономист"
      },
      {
        id: 4,
        text: "Форма обучения",
        data: "Заочная"
      }
    ],
    importantDataMGU: [
      {
        id: 1,
        text: "Год окончания",
        data: "2010"
      },
      {
        id: 2,
        text: "Факультет",
        data: "Доп. образования"
      },
      {
        id: 3,
        text: "Специальность",
        data: "Маркетолог"
      },
      {
        id: 4,
        text: "Форма обучения",
        data: "Очно - заочная"
      }
    ]
  })
};
</script>

<style lang="scss">
.institute-img {
  height: 300px;
}
.skill-image {
  width: 120px;
}
.skill-title {
  width: 100px;
  font-weight: 500;
}
</style>
