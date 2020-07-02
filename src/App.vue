<template>
  <v-app>
    <v-nav-bar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import vNavBar from "./components/v-nav-bar/v-nav-bar";

export default {
  name: "App",

  components: {
    vNavBar
  },

  data: () => ({
    //
  })
};
</script>
