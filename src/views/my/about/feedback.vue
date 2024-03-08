<template>
  <div class="p-8 flex flex-col justify-center">
    <h1 class="text-lg font-bold">📚 意见 & 问题反馈</h1>
    <p class="text-gray-400 text-sm">使用软件中遇到的问题和建议请告诉我们</p>
  </div>
  <div class="bg-white shadow p-4">
    <van-form @submit="handelSubmit" required="auto">
      <van-field
        v-model="formData.feedback_info"
        name="fullname"
        label="问题和意见"
        label-align="top"
        size="large"
        placeholder="请输入问题和意见"
        type="textarea"
        :rules="[{ required: true, message: '请输入问题和意见' }]"
      />
      <van-field name="uploader" label-align="top" label="图片上传（选填）" size="large">
        <template #input>
          <div>
            <UploadImg v-model:images="formData.images" :max-count="2" />
            <div class="text-gray-400 text-sm">最多上传3张图片</div>
          </div>
        </template>
      </van-field>
      <van-field
        v-model="formData.mobile"
        name="mobile"
        label="联系方式（选填）"
        label-align="top"
        size="large"
        placeholder="请输入手机号，方便联系您"
      />
      <div class="px-4 pt-4 text-gray-400 text-xs">提示：软件问题请尽量上传问题截图</div>
      <div class="p-4 flex flex-col gap-2">
        <van-button type="primary" native-type="submit"> 提交反馈 </van-button>
        <van-button type="default" @click="$router.go(-1)"> 返回 </van-button>
      </div>
    </van-form>
  </div>
  <Footer></Footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import UploadImg from "@/components/Upload/Img.vue";
import { showToast } from "vant";
import { addFeedbackApi } from "@/api/modules/content";
import router from "@/router";

const formData = ref<Partial<API.Content.Feedback>>({});

// 提交表单
const handelSubmit = async () => {
  try {
    await addFeedbackApi(formData.value);
    showToast({ type: "success", message: "保存成功" });
    router.go(-1);
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
