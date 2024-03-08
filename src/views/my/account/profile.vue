<template>
  <div class="p-8 flex flex-col justify-center">
    <h1 class="text-lg font-bold">❤️ 个人资料</h1>
    <p class="text-gray-400 text-sm">请认真完善您的个人资料</p>
  </div>
  <div class="bg-white shadow p-4">
    <van-form @submit="handelSubmit">
      <div class="flex justify-center items-center flex-col border-b border-gray-100 pb-4 mb-2 gap-2">
        <van-badge class="badge" color="#1989fa">
          <van-uploader
            v-model="fileList"
            class="avatar"
            upload-icon="photograph"
            :after-read="afterRead"
            :deletable="false"
            reupload
            max-count="1"
          >
          </van-uploader>
          <template #content>
            <van-icon name="photograph" class="badge-icon" />
          </template>
        </van-badge>
        <div class="text-gray-400 text-sm">点击更换头像</div>
      </div>

      <van-field
        v-model="formData.fullname"
        name="fullname"
        label="姓名"
        size="large"
        placeholder="姓名"
        :rules="[{ required: true, message: '请填写姓名' }]"
      />
      <van-field
        v-model="formData.email"
        name="email"
        label="邮箱"
        type="email"
        size="large"
        placeholder="邮箱"
        :rules="[{ required: true, message: '请填写邮箱' }]"
      />
      <van-field
        v-model="formData.birthday"
        is-link
        readonly
        size="large"
        name="birthday"
        label="生日"
        placeholder="点击设置您的生日"
        @click="showBirthdayPicker = true"
      />
      <van-popup v-model:show="showBirthdayPicker" position="bottom">
        <van-date-picker
          v-model="currentDate"
          @confirm="handleBirthdayConfirm"
          @cancel="showBirthdayPicker = false"
          :min-date="minDate"
          :max-date="maxDate"
        />
      </van-popup>
      <div class="px-4 pt-4 text-gray-400 text-xs">提示：准确设置您的生日，可能会有意想不到的收获哦</div>
      <div class="p-4 flex flex-col gap-2">
        <van-button type="primary" native-type="submit"> 保存资料 </van-button>
        <van-button type="default" @click="$router.go(-1)"> 返回 </van-button>
      </div>
    </van-form>
  </div>
  <Footer></Footer>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Avatar from "@/assets/images/no_avatar.png";
import { getUserInfoApi, saveUserProfileApi } from "@/api/modules/permission";
import { useUserStore } from "@/store/modules/user";
import { showToast } from "vant";

const userStore = useUserStore();

const showBirthdayPicker = ref(false);
const fileList = ref([{ url: Avatar }]);
const currentDate = ref(["2021", "01", "01"]);
const minDate = ref(new Date(1900, 0, 1));
const maxDate = ref(new Date());

onMounted(() => {
  getProfile();
});

type FormData = {
  fullname: string;
  email: string;
  avatar: string;
  birthday: string;
  [key: string]: string;
};

const formData = ref<FormData>({
  fullname: "",
  email: "",
  avatar: "",
  birthday: ""
});

// 获取用户信息
const getProfile = async () => {
  const { data }: any = await getUserInfoApi();
  for (const key in formData.value) {
    if (Object.prototype.hasOwnProperty.call(formData.value, key)) {
      formData.value[key] = data[key];
    }
  }
  if (data.avatar) {
    fileList.value[0].url = data.avatar;
  }
  if (data.birthday) {
    currentDate.value = data.birthday.split("-");
  }
};

const afterRead = (obj: any) => {
  console.log("afterRead", obj);
};

// 选择生日
const handleBirthdayConfirm = ({ selectedValues }: any) => {
  formData.value.birthday = selectedValues.join("-");
  showBirthdayPicker.value = false;
};
// 提交表单
const handelSubmit = async () => {
  try {
    await saveUserProfileApi(formData.value);
    showToast({ type: "success", message: "保存成功" });
    // 更新 Store 中的用户信息
    const { data } = await getUserInfoApi();
    userStore.setUserInfo(data);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped lang="less">
.badge-icon {
  display: block;
  font-size: 10px;
  line-height: 16px;
}
.badge {
  :deep(.van-badge--top-right) {
    top: 10px;
    right: 10px;
  }
}

.avatar {
  :deep(.van-uploader__preview) {
    margin: 0;
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>
