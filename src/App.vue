<template>
  <v-app>
    <v-nav-bar />
    <v-main>
      <v-home/>
    </v-main>
  </v-app>
</template>

<script>
import vNavBar from "./components/v-nav-bar/v-nav-bar";
import vHome from "./components/v-home"

export default {
  name: "App",

  components: {
    vNavBar,
    vHome
  },

  data: () => ({
    //
  })
};
</script>
