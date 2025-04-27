<template>
  <el-menu :default-active="activeMenu" router>
    <template v-for="item in menuList" :key="item.path">
      <el-menu-item v-if="item.children!.length <= 0" :index="item.path">
        {{ item.meta!.title + '123' }}
      </el-menu-item>

      <el-sub-menu v-else :index="item.path">
        <template #title>
          <span>{{ item.meta!.title }}</span>
        </template>
        <el-menu-item v-for="subItem in item.children" :key="subItem.path" :index="subItem.path">
          {{ subItem.meta!.title }}
        </el-menu-item>
      </el-sub-menu>
    </template>

  </el-menu>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();

const activeMenu = ref(route.path);
// const menuList = router.getRoutes().filter((route) => {
//   return route.meta.isShow;
// });

console.log('router', router.options.routes);

const menuList = router.options.routes[0].children!.filter((item) => {
  return item.meta!.isShow;
});
console.log('menuList', menuList);

</script>

<style lang="less" scoped>
.el-menu {
  height: 100%;
}
</style>
