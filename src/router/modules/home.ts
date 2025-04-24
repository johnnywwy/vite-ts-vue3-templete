export default {
  path: "/",
  name: "Layout",
  component: () => import("@/layout/index.vue"),
  meta: {
    role: ['common', 'admin'],
    parentHome: 'Home'
  },
  children: [
    {
      path: "/",
      name: "HomePage",
      component: () => import("@/views/home/index.vue"),
      meta: {
        isShow: true,
        title: "项目介绍",
        parentHome: 'Home'
      },
      children: [],
    },
    {
      path: "/user",
      name: "UserPage",
      component: () => import("@/views/user/index.vue"),
      meta: {
        title: "用户模块",
        isShow: true,
      },
      children: [],
    },
    {
      path: "/role",
      name: "RolePage",
      component: () => import("@/views/role/index.vue"),
      meta: {
        title: "角色模块",
        isShow: true,
      },
      children: [],
    },
    {
      path: "/auth",
      name: "AuthPage",
      component: () => import("@/views/auth/index.vue"),
      meta: {
        title: "权限模块",
        isShow: true,
      },
      children: [],
    },
  ],
};
