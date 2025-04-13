<template>
  <div class="wrap-about">
    <ElForm ref="formRef"></ElForm>

  </div>
</template>

<script setup lang="ts">
import { ElForm } from 'element-plus';
import { useComRef } from '@/hooks/useCompRef'
const formRef = useComRef<typeof ElForm>()

</script>

<style lang="less">
.wrap-about {
  color: @color;
  background: @bg;
}
</style>
