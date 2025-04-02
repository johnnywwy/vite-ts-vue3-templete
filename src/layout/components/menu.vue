<template>
  <el-menu :default-active="activeMenu" router>
    <el-menu-item v-for="item in menuList" :key="item.path" :index="item.path">
      {{ item.meta.title }}
    </el-menu-item>
  </el-menu>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

const activeMenu = ref(route.path)
const menuList = router.getRoutes().filter((route) => {
  return route.meta.isShow
})

</script>

<style lang='less' scoped>
.el-menu {
  height: 100%;
}
</style>