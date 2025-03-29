<template>
  <el-menu default-active="/">
    <el-menu-item index="/"> 项目介绍 </el-menu-item>
    <el-menu-item index="/user"> 用户列表 </el-menu-item>
    <el-menu-item index="/role"> 角色列表 </el-menu-item>
    <el-menu-item index="/auth"> 权限列表 </el-menu-item>
  </el-menu>
</template>

<script setup lang='ts'>

</script>

<style lang='less' scoped>
.el-menu {
  height: 100%;
}
</style>