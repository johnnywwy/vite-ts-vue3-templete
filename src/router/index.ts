import { createRouter, createWebHashHistory, RouteRecord, RouteRecordNormalized, RouteRecordRaw } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useSettingStore } from '@/store/setting'

const settingStore = useSettingStore()

// 配置路由
const otherRoutes: RouteRecordRaw = {
  path: "/about",
  name: "About",
  component: () => import("@/views/about/index.vue"),
  meta: {},
  children: [],
};
// Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块：
const modules: Record<string, any> = import.meta.glob(["./modules/*.ts"], {
  eager: true,
});

// 配置路由
const routes: Array<RouteRecordRaw> = [];
Object.keys(modules).forEach((key) => {
  const module = modules[key].default;
  routes.push(module);
  // console.log("routes", routes);
});
routes.push(otherRoutes);

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export const getTitle = (name: string, routes: RouteRecordNormalized[]) => {
  const names: string[] = []
  while (true) {
    names.push(name)
    const currentRouterObj = routes.find((item) => item.name === name)
    const parentRouterObj = routes.find((item) => item.name === currentRouterObj?.meta?.parentRouter)
    if (parentRouterObj) {
      name = parentRouterObj.name as string
      continue
    } else {
      break
    }
  }
  return names.reverse()
}

const handleRouters = (currentName: string) => {
  console.log('name', currentName);
  console.log('getRouters', router.getRoutes());

  const titles = getTitle(currentName, router.getRoutes())
  settingStore.setTitle(titles)
}

const noStatusPage = ["/login", "/about"];
router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const token = sessionStorage.getItem("userInfo");
  // console.log("token", token);

  const userIsLogin = token ? true : false;
  if (userIsLogin || noStatusPage.includes(to.path)) {
    next();
  } else {
    next("/login");
  }

  handleRouters(to.name as string)
});

router.afterEach((to) => {
  NProgress.done();
});

export default router;
