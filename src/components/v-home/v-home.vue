<template>
  <v-container>
    <v-row class="text-center  mt-4">
      <v-col cols="12" md="4" class="justify-center align-self-center">
        <v-img
          :src="require('../../assets/img/alex.jpg')"
          class="my-3"
          contain
          height="500"
        />
      </v-col>
      <v-col class="justify-center align-self-center" cols="12" md="4">
        <h1 class="mt-4">Web - разработчик</h1>
        <p class="text-left text-sm-center">
          Я все время программировал. Начинал на Фортране и Ассемблере.
        </p>
        <p class="text-left">
          С появлением в 1998 году в нашем городе интернета открылось второе
          дыхание.
        </p>
        <p class="text-left text-subtitle-2">
          - Первый сайт сделал в 1999 году.<br />
          - Первый интернет-магазин открыл в 2007 году.<br />
          - Аккаунт на Amazon.de зарегистрировал в 2014 году.
        </p>
        <p class="text-left">
          Постоянно учусь и осваиваю новые технологии в веб-программировании.
        </p>
        <p class="text-left">
          Освоил Photoshop и Corel Draw и могу сам создать макеты любого
          уровня(.SVG, .PSD)
        </p>
      </v-col>
      <v-col cols="12" md="4" class="justify-center align-self-center">
        <v-flex
          v-for="items in importantData"
          :key="items.id"
          class="d-flex text-left"
        >
          <v-flex class="main-out-data">{{ items.text }}</v-flex>
          {{ items.data }}
        </v-flex>
        <v-flex class="mt-6">
          <a
            target="_blank"
            class="ml-6 social-links"
            v-for="item in socialLinks"
            :key="item.id"
            :href="item.link"
          >
            <v-icon>{{ item.icon }} </v-icon>
          </a>
        </v-flex>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-flex class="services-main">
          <h2>Услуги</h2>
        </v-flex>
      </v-col>
    </v-row>
    <v-row class="justify-space-around">
      <v-card
        class="col-md-3 col-11"
        v-for="item in serviceWork"
        :key="item.id"
      >
        <v-card-title class="text-center justify-center">
          {{ item.text }}
        </v-card-title>
        <v-flex class="service-item text-center justify-center">
          <img :src="item.icon" alt="" />
        </v-flex>
        <v-card-subtitle
          class="service-item-description align-self-md-center justify-center"
        >
          {{ item.description }}
        </v-card-subtitle>
      </v-card>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-flex class="services-main">
          <h2>Отзывы</h2>
        </v-flex>
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-6">
      <v-app id="inspire" class="inspire slider-main">
        <v-card elevation="24" class="mx-auto " light>
          <v-carousel
            :continuous="true"
            :cycle="true"
            :show-arrows="true"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="300"
          >
            <v-carousel-item
              class="v-application-my"
              v-for="(item, i) in Testimonials"
              :key="i"
            >
              <v-row class="fill-height" align="center" justify="center">
                <div class="testimonial-content ">
                  <div class="testimonial-text slider-main">
                    {{ item.description }}
                  </div>
                </div>
                <!-- /Testimonial Content -->
                <!-- Testimonial Author -->
                <div class="testimonial-credits d-flex">
                  <!-- Picture -->
                  <div class="testimonial-picture">
                    <img :src="item.icon" height="60px" alt="" />
                  </div>
                  <!-- /Picture -->
                  <!-- Testimonial author information -->
                  <div class="testimonial-author-info">
                    <p class="testimonial-author">{{ item.text }}</p>
                    <p class="testimonial-firm">{{ item.company }}</p>
                  </div>
                </div>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-app>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "vHome",

  data: () => ({
    importantData: [
      {
        id: 1,
        text: "Возраст",
        data: "52"
      },
      {
        id: 2,
        text: "Гражданство",
        data: "Россия"
      },
      {
        id: 3,
        text: "Адрес",
        data: "Германия, Кемптен (Альгой)"
      },
      {
        id: 4,
        text: "e-mail",
        data: "alex@mrk.gigital"
      },
      {
        id: 5,
        text: "Phone",
        data: "0176/251-87-846"
      },
      {
        id: 6,
        text: "WhatsApp",
        data: "+7 968 805-08-68"
      }
    ],
    socialLinks: [
      {
        id: 1,
        net: "vkontakte",
        link: "https://vk.com/bexymen",
        icon: "mdi-vk"
      },
      {
        id: 2,
        net: "LinkEdin",
        link: "https://www.linkedin.com/in/alexey-kornevgmbh/",
        icon: "mdi-linkedin"
      },
      {
        id: 3,
        net: "XING",
        link: "https://www.xing.com/profile/Alexey_Kornev2/cv",
        icon: "mdi-xing"
      },
      {
        id: 4,
        net: "GitHab",
        link: "https://github.com/MR-Kornev-Alexey/",
        icon: "mdi-git"
      }
    ],
    serviceWork: [
      {
        id: 1,
        text: "FullStack",
        icon: "../../assets/img/coding.png",
        description:
          "JavaScript - develop. Frontend  на Vue|Vuetify. Backend Node.js | Express.js Создание сервисов любой сложности"
      },
      {
        id: 2,
        text: "Web-дизайн",
        icon: "../../assets/img/develop.png",
        description:
          "Разработка прототипа. Выбор инструментов. Создание сайта | сервиса с нуля. Кроссбраузерная верстка"
      },
      {
        id: 3,
        text: "Правка .PSD",
        icon: "../../assets/img/pattern.png",
        description:
          "Создание растровых изображений для сайта. Верстка шаблонов любой сложности"
      },
      {
        id: 4,
        text: "Создание .SVG",
        icon: "../../assets/img/pic.png",
        description:
          "Создание векторных изображений и иконок под задачи проекта."
      }
    ],
    Testimonials: [
      {
        id: 1,
        text: "Ярослав К.",
        company: "Клевер Лейбл Групп",
        icon:
          "https://s3.amazonaws.com/uifaces/faces/twitter/benefritz/128.jpg",
        description:
          "Верстка была сделана четко и в срок. В ходе работы было выявлено несколько косяков дизайна, но они были устранены исполнителем. Было предложено несколько вариантов по более интересному и логичному отображению мобильной версии."
      },
      {
        id: 2,
        text: "Дмитрий А.",
        company: "Предприниматель",
        icon:
          "https://s3.amazonaws.com/uifaces/faces/twitter/hellofeverrrr/128.jpg",
        description:
          "Рекомендую к сотрудничеству! Спасибо за проделанную работу."
      },
      {
        id: 3,
        text: "Светлана Е.",
        company: "Предприниматель",
        icon: "https://s3.amazonaws.com/uifaces/faces/twitter/eitarafa/128.jpg",
        description:
          "Отзывчивый исполнитель. Все по честному:  и сроки, и оплата. Хорошая скорость выполнения заказа."
      },
      {
        id: 4,
        text: "Андрей Ю.",
        company: "Предприниматель",
        icon:
          "https://s3.amazonaws.com/uifaces/faces/twitter/okseanjay/128.jpg",
        description:
          "Алексей! Спасибо..... Желаю побольше благодарных клиентов, денег и расширение услуг..."
      },
      {
        id: 5,
        text: "Юрий В.",
        company: "Предприниматель",
        icon:
          "https://s3.amazonaws.com/uifaces/faces/twitter/jlsolerdeltoro/128.jpg",
        description:
          "Добавлю к общему числу и свой положительный отзыв.\n" +
          "Алексей адекватный, честный и весьма оперативный в части обработки заказа. Всегда готов идти на встречу.\n" +
          "Впечатления только положительные.\n" +
          "\n" +
          "Удачи в развитии и приумножения количества постоянных клиентов!"
      }
    ]
  }),
  mounted() {
    document.querySelector(".inspire").firstChild.className = "new-wrap";
  }
};
</script>
<style lang="scss">
.main-out-data {
  font-weight: 600;
  position: relative;
  margin-bottom: 12px;
}

.main-out-data::after {
  content: "";
  position: absolute;
  display: block;
  width: 30px;
  height: 3px;
  background: #444fee;
  bottom: 0;
  right: calc(100% - 35px);
}

.social-links {
  text-decoration: none;

  i {
    font-size: 32px;
  }
}

.services-main {
  position: relative;
  border-left: 3px solid #444fee;
  padding-left: 12px;
}

.service-item-description {
  font-size: 14px;
  max-width: 240px;
  font-weight: 500;
}
.service-item {
  img {
    height: 140px;
    font-size: 16px;
    color: #444fee;
  }
  .testimonial-content {
    color: black;
  }
}
.testimonial-text {
  font-size: 14px;
  color: #303030;
  width: 550px;
}
.testimonial-picture {
  margin-right: 12px;
}
.testimonial-author {
  font-weight: 500;
  color: #404040;
}
.testimonial-firm {
  color: #404040;
}
#inspire {
  height: 300px;
}

.new-wrap {
  flex: 1 1 auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  position: relative;
  height: 300px !important;
  padding-bottom: 40px;
}
.slider-main {
  max-width: 600px;
}
@media (max-width: 380px) {
  .slider-main {
    max-width: 360px;
    .testimonial-text {
      padding: 0 10px;
      font-size: 12px;
      margin-bottom: 20px;
    }
    p {
    }
  }
}
</style>
