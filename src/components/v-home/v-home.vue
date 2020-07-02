<template>
    <v-container>
        <v-row class="text-center text-center  mt-4">
            <v-col cols="4" class="justify-center align-self-center">
                <v-img
                        :src="require('../../assets/img/alex.jpg')"
                        class="my-3"
                        contain
                        height="500"
                />
            </v-col>
            <v-col class="justify-center align-self-center" cols="4">
                <h1 class="mt-4">Web - разработчик</h1>
                <p class="text-left">
                    Я все время программировал. Начинал на Фортране и Ассемблере.
                </p>
                <p class="text-left">
                    С появлением в 1998 году в нашем городе интернета открылось второе дыхание.
                </p>
                <p class="text-left text-subtitle-2">
                    - Первый сайт сделал в 1999 году.<br/>
                    - Первый интернет-магазин открыл в 2007 году.<br/>
                    - Аккаунт на Amazon.de зарегистрировал в 2014 году.
                </p>
                <p class="text-left">
                    Постоянно учусь и осваиваю новые технологии в веб-программировании.
                </p>
                <p class="text-left">
                    Освоил Photoshop и CorelDraw и могу сам создвать макеты любого уровня.
                </p>
            </v-col>
            <v-col cols="4" class="justify-center align-self-center">
                <v-flex
                        v-for="items in importantData"
                        :key="items.id"
                        class="d-flex text-left"
                >
                    <v-flex class="main-out-data">{{ items.text }}</v-flex>
                    {{ items.data }}
                </v-flex>
                <v-flex class="mt-6">
                    <a target="_blank" class="ml-6 social-links" v-for="item in socialLinks"
                       :key="item.id" :href="item.link">
                        <v-icon
                        >{{ item.icon }}
                        </v-icon>
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
                    data: "53"
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
                    text: "FullStack-программирование",
                    icon: "mdi-vk",
                    description: ""
                },
                {
                    id: 2,
                    text: "Web-дизайн",
                    icon: "mdi-vk",
                    description: ""
                },
                {
                    id: 3,
                    text: "Правка макетов .PSD",
                    icon: "mdi-vk",
                    description: ""
                },
                {
                    id: 4,
                    text: "Создание изображений",
                    icon: "mdi-vk",
                    description: ""
                },
            ]
        })
    };
</script>
<style lang="scss" scoped>
    .main-out-data {
        font-weight: 600;
        position: relative;
        margin-bottom: 12px;
    }

    .main-out-data::after {
        content: '';
        position: absolute;
        display: block;
        width: 30px;
        height: 3px;
        background: #3d498c;
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
        border-left: 3px solid #3d498c;
        padding-left: 12px;
       }


</style>
