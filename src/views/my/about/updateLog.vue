<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <div>
      <div class="font-bold p-9 my-4">
        <h1 class="text-lg font-bold">📖 更新日志</h1>
        <p class="text-gray-400 text-sm">记录晟鑫SCRM开发日志</p>
      </div>

      <van-list
        v-model:loading="loading"
        :finished="finished"
        v-model:error="errored"
        finished-text="没有更多了"
        error-text="加载数据出错，点击重试"
        :immediate-check="true"
        offset="300"
        @load="onLoad"
      >
        <div class="timeline">
          <!-- Timeline -->
          <div v-for="(item, changeAt) in groupedData" :key="changeAt">
            <!-- Heading -->
            <div class="ps-2 my-2 mt-1">
              <h3 class="group-date">{{ changeAt }}</h3>
            </div>
            <!-- End Heading -->

            <!-- Item -->
            <div class="flex gap-x-3" v-for="(log, logKey) in item" :key="logKey">
              <!-- Icon -->
              <div
                class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700"
              >
                <div class="relative z-10 size-7 flex justify-center items-center">
                  <div class="size-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                </div>
              </div>
              <!-- End Icon -->

              <!-- Right Content -->
              <div class="grow pt-0.5 pb-8">
                <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                  <svg-icon name="doc" class="mt-1"></svg-icon>
                  {{ log.title }}
                </h3>
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400" v-if="log.content">{{ log.content }}</p>
                <button
                  type="button"
                  class="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100"
                >
                  <img class="flex-shrink-0 size-4 rounded-full" src="@/assets/images/talent-avatar.png" alt="Talent" />

                  Talent.Miao
                </button>
              </div>
              <!-- End Right Content -->
            </div>
            <!-- End Item -->
          </div>
          <!-- End Timeline -->
        </div>
      </van-list>
    </div>
  </van-pull-refresh>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getChangeLogListApi } from "@/api/modules/content";

const loading = ref(false);
const finished = ref(false);
const errored = ref(false);
const refreshing = ref(false);
const groupedData = ref<any>({});
let totalItemCount = 0;

const onLoad = async () => {
  if (finished.value) return;

  loading.value = true;

  try {
    if (refreshing.value) {
      groupedData.value = {};
      totalItemCount = 0;
    }

    totalItemCount += 1;
    const { data } = await getChangeLogListApi({
      page: totalItemCount,
      limit: 10
    });

    data.list.forEach(item => {
      const key = item.changed_at;
      groupedData.value[key] = groupedData.value[key] || [];
      groupedData.value[key].push(item);
    });

    finished.value = data.list.length < 10;
  } catch (error) {
    console.error(error);
    errored.value = true;
  } finally {
    loading.value = false;
    refreshing.value = false;
  }
};

const onRefresh = () => {
  finished.value = false;
  loading.value = true;
  onLoad();
};
</script>

<style scoped lang="postcss">
.timeline {
  @apply bg-white shadow p-8;
  .group-date {
    @apply text-xs font-bold uppercase text-gray-500;
  }
}
</style>
