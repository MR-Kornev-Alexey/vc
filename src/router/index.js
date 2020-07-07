import Vue from "vue";
import VueRouter from "vue-router";
import vHome from "@/components/v-home/v-home";
import vEducation from "@/components/v-education/v-education";
import vProjects from "@/components/v-projects/v-projects";
import vService from "@/components/v-service/v-service";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "vHome",
    component: vHome
  },
  {
    path: "/education",
    name: "v-education",
    component: vEducation
  },
  {
    path: "/projects",
    name: "v-projects",
    component: vProjects
  },
  {
    path: "/service",
    name: "v-service",
    component: vService
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
