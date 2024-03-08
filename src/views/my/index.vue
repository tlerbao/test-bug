<template>
  <div class="p-4">
    <div class="rounded-2xl bg-white p-4 shadow">
      <div class="block flex-shrink-0 group">
        <div class="flex items-center">
          <img
            class="inline-block flex-shrink-0 rounded-full h-[3.875rem] w-[3.875rem]"
            :src="user.avatar"
            alt="Image Description"
          />
          <div class="flex-1 ms-3 space-y-1">
            <h3 class="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-white">
              {{ user.fullname }}
            </h3>
            <p class="text-sm font-medium text-gray-400">
              晟鑫家居 - <span v-for="(item, index) in user.department_names" :key="index">{{ item }}</span>
            </p>
            <p>
              <van-tag plain type="primary" v-for="(item, index) in user.jobs_names" :key="index">{{ item }}}</van-tag>
            </p>
          </div>
          <div class="text-gray-400">
            <a @click="$router.push('/my/account/profile')"> 设置 <van-icon name="arrow" /> </a>
          </div>
        </div>
      </div>
    </div>

    <div class="card-title">数据看板 <small class="sub-title">近30天</small></div>
    <div class="rounded-2xl bg-white p-4 shadow aix">
      <div class="flex gap-2 text-center">
        <div class="flex-1">
          <h4 class="font-semibold text-gray-800 axo">客户</h4>
          <p class="mt-2 text-2xl font-bold text-white">389</p>
        </div>
        <div class="flex-1">
          <h4 class="font-semibold text-gray-800 axo">订单</h4>
          <p class="mt-2 text-2xl font-bold text-white">13</p>
        </div>
        <div class="flex-1">
          <h4 class="font-semibold text-gray-800 axo">成交额</h4>
          <p class="mt-2 text-2xl font-bold text-white">31789</p>
        </div>
      </div>
    </div>
    <div class="mt-4 flex items-center justify-between rounded-xl bg-white p-4 shadow" @click="$router.push('/my/team')">
      <div class="rounded bg-yellow-500 px-2 text-white">我的团队</div>
      <div>
        <div class="flex items-center">
          <img
            class="-mx-1 h-8 w-8 rounded-full object-cover ring ring-white dark:ring-gray-900"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
            alt=""
          />
          <img
            class="-mx-1 h-8 w-8 rounded-full object-cover ring ring-white dark:ring-gray-900"
            src="@/assets/images/no_avatar.png"
            alt=""
          />
          <img
            class="-mx-1 h-8 w-8 rounded-full object-cover ring ring-white dark:ring-gray-900"
            src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=686&h=686&q=80"
            alt=""
          />
          <img
            class="-mx-1 h-8 w-8 rounded-full object-cover ring ring-white dark:ring-gray-900"
            src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=1401&h=1401&q=80"
            alt=""
          />
          <img
            class="-mx-1 h-8 w-8 rounded-full object-cover ring ring-white dark:ring-gray-900"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="mt-4 overflow-hidden rounded-2xl shadow">
      <van-cell is-link>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <div class="flex items-center gap-2 font-bold" @click="$router.push('/my/help')">
            <svg-icon name="product" class="text-2xl"></svg-icon>
            <span class="text-[14px]">帮助中心</span>
          </div>
        </template>
      </van-cell>
      <van-cell is-link>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <div class="flex items-center gap-2 font-bold">
            <svg-icon name="favorites" class="text-2xl"></svg-icon>
            <span class="text-[14px]">我的收藏</span>
          </div>
        </template>
      </van-cell>
      <van-cell is-link>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <div class="flex items-center gap-2 font-bold" @click="$router.push('/my/about/updateLog')">
            <svg-icon name="log" class="text-2xl"></svg-icon>
            <span class="text-[14px]">更新日志</span>
          </div>
        </template>
      </van-cell>
    </div>
    <div class="mt-4 overflow-hidden rounded-2xl shadow">
      <van-cell is-link @click="$router.push('/my/about/feedback')">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <div class="flex items-center gap-2 font-bold">
            <svg-icon name="feedback" class="text-2xl"></svg-icon>
            <span class="text-[14px]">意见反馈</span>
          </div>
        </template>
      </van-cell>
      <van-cell is-link>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <div class="flex items-center gap-2 font-bold" @click="$router.push('/my/about')">
            <svg-icon name="box" class="text-2xl"></svg-icon>
            <span class="text-[14px]">关于APP</span>
          </div>
        </template>
      </van-cell>
      <van-cell is-link @click="$router.push('/my/account/password')">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <div class="flex items-center gap-2 font-bold">
            <svg-icon name="box" class="text-2xl"></svg-icon>
            <span class="text-[14px]">修改密码</span>
          </div>
        </template>
      </van-cell>
      <van-cell is-link @click="handelLoginOut">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <div class="flex items-center gap-2 font-bold">
            <svg-icon name="box" class="text-2xl"></svg-icon>
            <span class="text-[14px]">退出登录</span>
          </div>
        </template>
      </van-cell>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { logoutApi } from "@/api/modules/auth";
import { LOGIN_URL } from "@/config";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/modules/user";

const router = useRouter();
const userStore = useUserStore();
const user = userStore.userInfo;

const handelLoginOut = async () => {
  await logoutApi();
  userStore.setToken("");
  userStore.setUserInfo({});
  router.replace(LOGIN_URL);
};
</script>

<style scoped lang="less">
.card-title {
  @apply pt-4 pl-2 text-base font-bold;

  small {
    @apply text-xs text-gray-400;
  }
}
.aix {
  @apply mt-4;
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / 1);
}
.axo {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / 1);
}
</style>
<route lang="yaml">
meta:
  layout: bar
</route>
