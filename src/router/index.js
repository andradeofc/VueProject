import Router from "vue-router";
import Home from "@/views/home/index";
import About from "@/views/about/index";
import Profile from "@/views/profile/index";

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    }
  ]
});
