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
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item>promotion management</el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Menu from "./components/menu.vue";
import { ArrowRight } from "@element-plus/icons-vue";
</script>

<style lang="less" scoped>
.el-header {
  padding: 0;
  margin-bottom: 2px;
}

.el-container {
  height: 100%;
}

.el-breadcrumb {
  margin-bottom: 16px;
}
</style>
