export default {
  path: "/",
  name: "Layout",
  component: () => import("@/layout/index.vue"),
  redirect: '/',
  // meta: {
  //   role: ["common", "admin"],
  //   parentRouter: "Home",
  // },
  children: [
    {
      path: "/",
      name: "HomePage",
      component: () => import("@/views/home/index.vue"),
      meta: {
        isShow: true,
        title: "首页",
        parentRouter: "Layout",
      },
      children: [],
    },
    {
      path: "/project",
      name: "ProjectPage",
      component: () => import("@/views/project/index.vue"),
      meta: {
        isShow: true,
        title: "项目模块",
        parentRouter: "Layout",
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
        parentRouter: "Layout",
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
        parentRouter: "Layout",

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
        parentRouter: "Layout",
      },
      children: [],
    },
    {
      path: "/p",
      name: "ParentPage",
      component: () => import("@/views/home/index.vue"),
      meta: {
        isShow: true,
        title: "父菜单",
        parentRouter: "Layout",
      },
      children: [
        {
          path: "/p/child1",
          name: "ChildPage1",
          meta: {
            title: "子菜单 1",
            isShow: true,
            parentRouter: "ParentPage",
          },
        },
        {
          path: "/p/child2",
          name: "ChildPage2",
          meta: {
            title: "子菜单 2",
            isShow: true,
            parentRouter: "ParentPage",

          },
        },
        {
          path: "/p/child3",
          name: "ChildPage3",
          meta: {
            title: "子菜单 3",
            isShow: true,
            parentRouter: "ParentPage",
          },
        },
      ],
    },
  ],
};
