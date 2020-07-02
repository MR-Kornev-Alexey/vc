<template>
  <nav>
    <v-app-bar dark flat app :src="bg">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase ">
        <span>Алексей </span>
        <span class="font-weight-light"> Корнев</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <img src="assets/img/logo-mrk-white.png" alt="" />
    </v-app-bar>
    <v-navigation-drawer flat v-model="drawer" dark app :src="bg">
      <v-layout column align-center>
        <v-flex class="avatar-sidebar text-center">
          <v-avatar size="160">
            <img src="assets/img/alex-square.png" alt="" />
          </v-avatar>
          <p class="white--text main-name subheading  text-center">
            Алексей Корнев
          </p>
        </v-flex>
      </v-layout>
      <v-list flat>
        <v-list-item
          class="mt-2"
          v-for="link in links"
          :key="link.id"
          router
          :to="link.route"
          active-class="border"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    background: true
  }),
  components: {},
  watch: {
    group() {
      this.drawer = true;
    }
  },
  computed: {
    bg() {
      return this.background ? "/assets/img/bg.jpg" : undefined;
    },
    links() {
      return [
        { id:1, icon: "mdi-home", text: "Главная", route: "/" },
        { id:2, icon: "mdi-school", text: "Образование", route: "/education" },
        { id:3, icon: "mdi-script", text: "Последние работы", route: "/projects" },
        { id:4, icon: "mdi-launch", text: "Услуги", route: "/service" },
        { id:5, icon: "mdi-account", text: "Контакт", route: "/contact" }
      ];
    }
  }
};
</script>
<style lang="scss" scoped>
.main-name {
  margin-top: 29px;
  font-size: 24px;
  font-weight: 500;
}
.router-input {
  text-decoration: none;
}
.border {
  border-left: 2px solid #fff;
}
.avatar-sidebar {
  margin-top: 62px;
}
.side-bar {
  background-color: #3d498c;
}
</style>
