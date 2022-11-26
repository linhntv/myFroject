import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "root",
      component: () => import("../veiw/HomePage.vue"),
    },
    {
        path: "/contact",
        name: "contact",
        component: () => import("../veiw/Contact.vue"),
      },
      {
        path: "/img",
        name: "img",
        component: () => import("../veiw/Img.vue"),
      },
      {
        path: "/game",
        name: "game",
        component: () => import("../veiw/Game.vue"),
      },
      {
        path: "/weather",
        name: "weather",
        component: () => import("../veiw/Weather.vue"),
      },
    
  ],
  strict: true,
});
export default router;
