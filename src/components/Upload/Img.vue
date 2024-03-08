<!-- 通用图片上传组件 使用max-count来判定是单图还是多图-->
<template>
  <van-uploader
    v-model="fileList"
    :after-read="afterRead"
    :multiple="isMultiple"
    :max-count="maxCount"
    :max-size="maxSize"
    :disabled="disabled"
    :reupload="reUpload"
    :accept="accept"
    @delete="handelDelete"
    @oversize="handelOversize"
  />
</template>

<script setup lang="ts">
import { showFailToast, UploaderFileListItem } from "vant";
import { computed, ref, watch } from "vue";
import { upLoadImageApi } from "@/api/modules/system";

interface UploadFileProps {
  api?: (params: any) => Promise<any>;
  images?: string | string[];
  maxCount?: number;
  maxSize?: number | string;
  disabled?: boolean;
  reUpload?: boolean;
  accept?: string;
}

// 接受父组件参数
const props = withDefaults(defineProps<UploadFileProps>(), {
  maxCount: 1,
  maxSize: 500 * 1024,
  disabled: false,
  reUpload: false,
  accept: "image/*" // image/*,.pdf
});

const isMultiple = computed(() => {
  return props.maxCount > 1;
});

const fileList = ref<UploaderFileListItem[]>();
const files = ref<string[]>([]);
watch(
  () => props.images,
  newValue => {
    if (typeof newValue === "string") {
      fileList.value = [{ url: newValue }];
    } else if (Array.isArray(newValue)) {
      fileList.value = newValue.map(url => ({ url }));
      files.value = newValue;
    }
  },
  { immediate: true, deep: true }
);

interface UploadEmits {
  (e: "update:images", value: string | string[] | null): void;
}
const emit = defineEmits<UploadEmits>();
const afterRead = async (file: any) => {
  if (!Array.isArray(file)) {
    handleUpload(file);
  } else {
    file.map((item: any) => {
      handleUpload(item);
    });
  }
};

const handleUpload = async (file: any) => {
  const formData = new FormData();
  formData.append("file", file.file);
  try {
    const api = props.api ?? upLoadImageApi;
    const { data } = await api(formData);
    if (props.maxCount === 1) {
      emit("update:images", data);
    } else {
      files.value.push(data);
      emit("update:images", files.value);
    }
  } catch (error) {
    console.log(error);
  }
};

const handelDelete = (file: any) => {
  if (props.maxCount === 1) {
    emit("update:images", null);
  } else {
    files.value = files.value.filter(item => item !== file.url);
    emit("update:images", files.value);
  }
};

const handelOversize = (file: any) => {
  console.log(file);
  showFailToast("文件大小不能超过 500kb");
};
</script>

<style scoped></style>
