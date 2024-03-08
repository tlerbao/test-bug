<template>
  <div class="flex flex-col gap-2">
    <van-form @submit="onSubmit">
      <div class="flex-1">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </div>
    </van-form>
  </div>
  <div class="flex fixed bottom-0 right-0 p-4 w-full bg-white gap-2 van-safe-area-bottom safe-bottom">
    <div class="w-1/3">
      <van-button block> 返回 </van-button>
    </div>

    <div class="w-2/3">
      <van-button block type="primary" native-type="submit"> 提交 </van-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
