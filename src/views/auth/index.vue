<template>
  <div>
    <el-tree
      ref="treeRef"
      :data="authList"
      :check-strictly="false"
      show-checkbox
      :default-checked-keys="checkedNode"
      node-key="roleId"
      :props="{ label: 'name', children: 'roleList' }"
    />
    <el-button type="primary" @click="onChangeAuth">修改权限</el-button>
  </div>
</template>

<script setup lang="ts">
import { getAuthList, IAuth } from "@/api/auth";
const checkedNode = ref<number[]>([]);

const treeRef = ref<any>(null);
const authList = ref<IAuth[]>([]);
const route = useRoute();

const { query } = route;

if (query.auth) {
  checkedNode.value = query.auth;
}

const onChangeAuth = () => {
  console.log(treeRef.value);
  const selectedTreeNode = treeRef.value.getCheckedNodes();
  console.log(selectedTreeNode);
  console.log(treeRef.value.getCheckedKeys());
};

onMounted(() => {
  getAuthList()
    .then((res) => {
      authList.value = res;
    })
    .catch((err) => {});
});
</script>

<style lang="less" scoped></style>
