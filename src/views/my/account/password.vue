<template>
  <div class="h-full">
    <div class="p-8 flex flex-col gap-1">
      <h1 class="text-lg font-bold">🔐 重置密码</h1>
      <p class="text-gray-400 text-sm">任何时候请不要将您的密码告知他人</p>
    </div>
    <div class="bg-white shadow p-4">
      <van-form @submit="handelSubmit">
        <van-field
          v-model="data.password"
          name="password"
          label="原密码"
          type="password"
          placeholder="原密码"
          :rules="[{ required: true, message: '请填写原密码' }]"
        />
        <van-field
          v-model="data.newpassword"
          type="password"
          name="newpassword"
          label="新密码"
          placeholder="新密码"
          :rules="[{ required: true, message: '请输入新密码' }]"
        />
        <van-field
          v-model="data.renewpassword"
          type="password"
          name="renewpassword"
          label="确认密码"
          placeholder="确认密码"
          :rules="[{ required: true, message: '请输入确认密码' }]"
        />
        <div class="px-4 pt-4 text-gray-400 text-xs">提示：密码必须是8-16位英文字母、数字、字符组合</div>
        <div style="margin: 16px">
          <van-button block type="primary" native-type="submit"> 提交 </van-button>
        </div>
      </van-form>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { changePasswordApi } from "@/api/modules/permission";
import { showSuccessToast } from "vant";

type PasswordFormData = {
  password: string;
  newpassword: string;
  renewpassword: string;
};

const data = ref<PasswordFormData>({
  password: "",
  newpassword: "",
  renewpassword: ""
});

const handelSubmit = async (formData: PasswordFormData) => {
  try {
    await changePasswordApi(formData);
    showSuccessToast("密码修改成功");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped></style>
<route lang="yaml">
name: "MyAccountPassword"
</route>
