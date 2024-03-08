<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">晟鑫SCRM</h2>
      <h3 class="text-center text-gray-400">请登录</h3>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" method="POST" @submit.prevent="login">
        <div>
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">账号</label>
          <div class="mt-2">
            <input
              v-model="loginForm.username"
              id="username"
              name="username"
              type="text"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">密码</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">忘记密码?</a>
            </div>
          </div>
          <div class="mt-2">
            <input
              v-model="loginForm.password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            登录
          </button>
          <van-divider>OR</van-divider>
          <div
            @click="workLogin"
            class="flex items-center text-indigo-600 border border-[#b9c5e9] w-full justify-center rounded-md bg-[#f6f7fb] px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-100"
          >
            <svg-icon name="wework" class="text-[20px] stroke-2 mr-2"></svg-icon> 企业微信登录
          </div>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        没有账号?
        <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">申请账号</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts" name="Login">
import { reactive } from "vue";
import { loginApi } from "@/api/modules/auth";
import { HOME_URL } from "@/config";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/modules/user";
import { getOAuthUrl } from "@/utils";

const router = useRouter();
const userStore = useUserStore();

const loginForm = reactive({
  username: "admin",
  password: "123123"
});

// login
const login = async () => {
  // 1.执行登录接口
  try {
    const { data } = await loginApi({ ...loginForm, password: loginForm.password });
    await loginSuccess(data);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const workLogin = () => {
  window.location.href = getOAuthUrl();
};

const loginSuccess = async (data: any) => {
  userStore.setToken(data.token);
  userStore.setUserInfo(data.user);

  // 4.跳转到首页
  router.push(HOME_URL);
};
</script>

<style scoped>
:deep(.van-cell) {
  padding: 0;
  background-color: transparent;
}
:deep(.van-field__label) {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
  display: block;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
}
:deep(.van-field__control) {
  @apply block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6;
}
</style>
<route>
{
  name: "Login",
  meta: {
    title: "登录",
    layout: false
  }
}
</route>
