import HomeView from "../views/HomeView.vue";
import NotFoundPage from "../views/errors/404.vue";

export default [
    {
        path: "/",
        name: "home-index",
        component: HomeView,
    },

    { path: "/:pathMatch(.*)", name: "not-found", component: NotFoundPage },
];
