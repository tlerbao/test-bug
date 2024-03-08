<template>
  <van-tabbar v-model="active" :placeholder="true" :route="true" fixed :safe-area-inset-bottom="true">
    <van-tabbar-item v-for="(item, index) in tabbarData" :key="index" :icon="item.icon" :to="item.to" :badge="item.badge">
      <span class="font-bold">{{ item.title }}</span>
      <template #icon="">
        <svg-icon class="text-[22px]" :name="item.icon"></svg-icon>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const active = ref(0);
const tabbarData = reactive([
  {
    icon: "money",
    title: "销售",
    to: {
      name: "Index"
    }
  },
  {
    icon: "data-statistics",
    title: "分析",
    to: {
      name: "tools"
    }
  },
  {
    icon: "statistics",
    title: "任务",
    to: {
      path: "/task"
    },
    badge: "5"
  },
  {
    icon: "id-card",
    title: "我的",
    to: {
      path: "/my"
    }
  }
]);
</script>
