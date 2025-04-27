export default {
  path: "/",
  name: "Layout",
  component: () => import("@/layout/index.vue"),
  meta: {
    role: ["common", "admin"],
    parentHome: "Home",
  },
  children: [
    {
      path: "/",
      name: "HomePage",
      component: () => import("@/views/home/index.vue"),
      meta: {
        isShow: true,
        title: "首页",
        parentHome: "Home",
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
        parentHome: "Home",
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
    {
      path: "/p",
      name: "ParentPage",
      // component: () => import("@/views/home/index.vue"),
      meta: {
        isShow: true,
        title: "父菜单",
      },
      children: [
        {
          path: "/p/child1",
          name: "ChildPage1",
          meta: {
            title: "子菜单 1",
            isShow: true,
          },
        },
        {
          path: "/p/child2",
          name: "ChildPage2",
          meta: {
            title: "子菜单 2",
            isShow: true,
          },
        },
        {
          path: "/p/child3",
          name: "ChildPage3",
          meta: {
            title: "子菜单 3",
            isShow: true,
          },
        },
      ],
    },
  ],
};
