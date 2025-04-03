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
import { ref, onMounted } from "vue";
// import { useRoute } from "vue-router";
import { getAuthList } from "@/api/auth";
import { useRoute } from "vue-router";
const checkedNode = ref<number[]>([]);

const treeRef = ref<any>(null);
const authList = ref<IAuth[]>([]);
const route = useRoute();

const { query } = route;

if (query.auth) {
  checkedNode.value = query.auth;
}

interface IAuth {
  name: string; // 权限名称
  roleId: number; // 角色ID
  roleList?: IAuth[]; // 角色列表 子权限
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
