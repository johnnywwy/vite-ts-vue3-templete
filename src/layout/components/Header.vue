<template>
  <div class="header">
    <div class="flex-center">logo区域</div>
    <div class="flex-grow"></div>
    <div class="flex-center m05 color-dark-black">
      <i-ep-user />
      {{ userName }}
    </div>
    <div class="flex-center m05 color-dark-black setting" @click="handleSetting">
      <i-ep-setting />
    </div>
  </div>
  <el-drawer v-model="showSetting" :show-close="false" :with-header="false" size="300">
    <div class="setting-header">
      <h2>项目配置</h2>
      <i-ep-close @click="handleClose" />
    </div>
    <div class="out">
      <el-button type="primary" @click="logout">退出</el-button>
    </div>
  </el-drawer>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { useUserStoreHook } from '@/store/user';
const userStore = useUserStoreHook();
const userName = userStore.username;
let showSetting = ref(false);
const router = useRouter();
const handleSetting = () => {
  showSetting.value = true;
};
const handleClose = () => {
  showSetting.value = false;
};
const logout = () => {
  sessionStorage.removeItem('userInfo');
  router.push('/login');
};
</script>

<style lang='less' scoped>
.header {
  display: flex;
  padding: 0 15px;
  width: 100%;
  height: 60px;
  box-shadow: 0 0 20px rgb(195 223 252 / 40%);
}

.setting {
  cursor: pointer;
}

.setting-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  color: var(--dawei-color-dark-black);
}

.out {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>