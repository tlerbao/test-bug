<template>
  <div class="p-8 pb-4 flex flex-col gap-1">
    <h1 class="text-lg font-bold">🖥 帮助中心</h1>
    <p class="text-gray-400 text-sm">快速查找系统使用帮助</p>
  </div>
  <div class="px-5 bg-white mt-4">
    <van-search v-model="searchValue" placeholder="请输入搜索关键词" />
  </div>
  <div class="bg-white px-8 border-t border-[#f6f6f6]">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        v-model:error="errored"
        finished-text="没有更多了"
        error-text="加载数据出错，点击重试"
        :immediate-check="true"
        offset="100"
        @load="onLoad"
      >
        <div class="divide-y divide-[#f6f6f6]">
          <div class="flex gap-2 py-4" v-for="item in list" :key="item.id">
            <div>
              <svg-icon name="doc" class="flex-shrink-0 size-4 mt-1"></svg-icon>
            </div>
            <div class="flex-1">
              <div class="font-bold flex justify-between items-center">
                {{ item.title }} <span class="text-gray-300 text-sm font-light">{{ formatTime(item.created_at, "m-d") }}</span>
              </div>
              <div class="flex">
                <button
                  type="button"
                  class="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100"
                >
                  <img
                    class="flex-shrink-0 size-4 rounded-full"
                    src="@/assets/images/talent-avatar.png"
                    alt="Image Description"
                  />
                  Talent.Miao
                </button>
              </div>
            </div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getHelpListApi } from "@/api/modules/content";
import { formatTime } from "@/utils";

const searchValue = ref("");

const list = ref<API.Content.Help[]>([]);
const loading = ref(false);
const finished = ref(false);
const errored = ref(false);
const refreshing = ref(false);

const onLoad = async () => {
  // 如果已经加载完全部数据，则直接返回
  if (finished.value) {
    return;
  }

  // 开始加载状态
  loading.value = true;

  try {
    if (refreshing.value) {
      list.value = [];
      refreshing.value = false;
    }

    const { data } = await getHelpListApi({
      page: Math.ceil(list.value!.length / 10) + 1,
      limit: 10
    });
    list.value = list.value!.concat(data.list);
    // 数据全部加载完成
    if (data.list.length < 10) {
      finished.value = true;
    }
  } catch (error) {
    console.log(error);
    loading.value = false;
    refreshing.value = false;
    errored.value = true;
  } finally {
    loading.value = false;
    refreshing.value = false;
  }
};

const onRefresh = () => {
  // 清空列表数据
  finished.value = false;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  onLoad();
};
</script>

<style scoped></style>
