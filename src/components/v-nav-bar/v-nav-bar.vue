<template>
  <nav>
    <v-app-bar dark flat app :src="bg">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase ">
        <span>Алексей </span>
        <span class="font-weight-light"> Корнев</span>
      </v-toolbar-title>
     <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer flat v-model="drawer" dark app :src="bg">
      <v-layout column align-center>
        <v-flex class="mt-5 text-center">
          <v-avatar size="60">
            <img src="#" alt="" />
          </v-avatar>
          <p class="white--text subheading mt-1 text-center">Alexey</p>
        </v-flex>
      </v-layout>
      <v-list flat>
        <v-list-item
          v-for="link in links"
          :key="link.text"
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
        { icon: "mdi-home",    text: "Главная", route: "/" },
        { icon: "mdi-school",  text: "Образваоние", route: "/education" },
        { icon: "mdi-script",  text: "Последние работы", route: "/projects" },
        { icon: "mdi-launch",  text: "Услуги", route: "/service" },
        { icon: "mdi-account", text: "Контакт", route: "/contact" }
      ];
    }
  }
};
</script>
<style lang="scss" scoped>
.router-input {
  text-decoration: none;
}
.border {
  border-left: 2px solid #fdbf07;
}

.side-bar {
  background-color: #3d498c;
}
</style>
