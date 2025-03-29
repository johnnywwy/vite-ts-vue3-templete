<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Menu />
      </el-aside>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang='ts'>
import Header from './components/Header.vue';
import Menu from './components/menu.vue';
</script>

<style lang='less' scoped>
.el-header {
  padding: 0;
  margin-bottom: 2px;
}

.el-container {
  height: 100%;
}
</style>