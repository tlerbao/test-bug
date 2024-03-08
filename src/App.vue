<template>
  <van-config-provider :theme="useDarkMode() ? 'dark' : 'light'">
    <div class="app-wrapper md:border-x md:shadow">
      <router-view v-slot="{ Component, route }">
        <keep-alive :include="cachedViews">
          <component :is="Component" :key="route" />
        </keep-alive>
      </router-view>
    </div>
  </van-config-provider>
</template>

<script setup lang="ts">
import { useDarkMode } from "@/hooks/useToggleDarkMode";
import { useCachedViewStoreHook } from "@/store/modules/cachedView";
import { computed } from "vue";

const cachedViews = computed(() => {
  return useCachedViewStoreHook().cachedViewList;
});
</script>
<style scoped>
.app-wrapper {
  background-color: var(--color-background-2);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
