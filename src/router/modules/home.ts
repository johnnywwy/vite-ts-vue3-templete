export default {
  path: "/",
  name: "Layout",
  component: () => import("@/layout/index.vue"),
  meta: {},
  children: [
    {
      path: "/",
      name: "HomePage",
      component: () => import("@/views/home/index.vue"),
      meta: {},
      children: [],
    },
  ],
};
