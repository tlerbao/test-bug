<template>
  <div>
    <van-tabs v-model:active="activeName">
      <van-tab title="我的人脉" name="people" class="text-xl" />
      <van-tab title="公司列表" name="company" />
    </van-tabs>
    <div v-if="activeName == 'people'">
      <van-search v-model="value" placeholder="请输入人脉姓名或手机号进行搜索" @search="onSearch">
        <template #action>
          <div @click="handleFilter" class="pr-1"><van-icon name="list-switch" /> 筛选</div>
        </template>
      </van-search>
      <div class="p-4 flex flex-col gap-4">
        <van-button type="primary" block size="small" to="/sales/introduce/addIntroduce">添加人脉</van-button>
        <div class="bg-white p-4 flex flex-col">
          <div class="flex">
            <div class="flex-1">
              <div class="flex items-center gap-2">
                <span class="text-xl font-semibold">李小龙</span> <van-tag plain type="primary">设计师</van-tag>
              </div>
              <div class="text-gray-400 text-xs">所属公司：乔木装饰</div>
            </div>
            <div>
              <img
                class="inline-block flex-shrink-0 h-[3rem] w-[3rem] rounded-full"
                src="@/assets/images/no_avatar.png"
                alt="Image Description"
              />
            </div>
          </div>
          <van-divider />
          <div class="flex gap-2">
            <van-button plain size="small" class="flex-1">
              <template #icon>
                <van-icon color="blue" name="phone-o" />
              </template>
              打电话
            </van-button>
            <van-button plain size="small" class="flex-1">
              <template #icon>
                <van-icon color="green" name="chat-o" />
              </template>
              加微信
            </van-button>
          </div>
        </div>
        <div class="bg-white p-4 flex flex-col">
          <div class="flex">
            <div class="flex-1">
              <div class="flex items-center gap-2">
                <span class="text-xl font-semibold">李小龙</span> <van-tag plain type="primary">设计师</van-tag>
              </div>
              <div class="text-gray-400 text-xs">所属公司：乔木装饰</div>
            </div>
            <div>
              <img
                class="inline-block flex-shrink-0 h-[3rem] w-[3rem] rounded-full"
                src="@/assets/images/no_avatar.png"
                alt="Image Description"
              />
            </div>
          </div>
          <van-divider />
          <div class="flex gap-2">
            <van-button plain size="small" class="flex-1">
              <template #icon>
                <van-icon color="blue" name="phone-o" />
              </template>
              打电话
            </van-button>
            <van-button plain size="small" class="flex-1">
              <template #icon>
                <van-icon color="green" name="chat-o" />
              </template>
              加微信
            </van-button>
          </div>
        </div>
        <div class="bg-white p-4 flex flex-col">
          <div class="flex">
            <div class="flex-1">
              <div class="flex items-center gap-2">
                <span class="text-xl font-semibold">李小龙</span> <van-tag plain type="primary">设计师</van-tag>
              </div>
              <div class="text-gray-400 text-xs">所属公司：乔木装饰</div>
            </div>
            <div>
              <img
                class="inline-block flex-shrink-0 h-[3rem] w-[3rem] rounded-full"
                src="@/assets/images/no_avatar.png"
                alt="Image Description"
              />
            </div>
          </div>
          <van-divider />
          <div class="flex gap-2">
            <van-button plain size="small" class="flex-1">
              <template #icon>
                <van-icon color="blue" name="phone-o" />
              </template>
              打电话
            </van-button>
            <van-button plain size="small" class="flex-1">
              <template #icon>
                <van-icon color="green" name="chat-o" />
              </template>
              加微信
            </van-button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="activeName == 'company'">
      <van-search v-model="value" placeholder="请输入公司名称进行搜索" @search="onSearch">
        <template #action>
          <div @click="handleFilter" class="pr-1"><van-icon name="list-switch" /> 筛选</div>
        </template>
      </van-search>
      <div class="p-4 flex flex-col gap-4">
        <van-button type="primary" block size="small" to="/sales/introduce/addIntroduce">添加公司</van-button>
        <div class="bg-white p-4 flex flex-col">
          <div class="flex items-center">
            <div class="flex-1">
              <div class="flex justify-center flex-col">
                <span class="text-xl font-semibold">乔木装饰</span>
                <div class="grow-0"><van-tag plain type="success">装饰公司</van-tag></div>
              </div>
            </div>
            <div>
              <van-button plain size="small" class="flex-1">
                <template #icon>
                  <van-icon name="eye" />
                </template>
                查看人脉 (18)
              </van-button>
            </div>
          </div>
        </div>
        <van-swipe-cell>
          <div class="bg-white p-4 flex flex-col">
            <div class="flex items-center">
              <div class="flex-1">
                <div class="flex justify-center flex-col">
                  <span class="text-xl font-semibold">六木宅设计</span>
                  <div class="grow-0"><van-tag plain type="success">装饰公司</van-tag></div>
                </div>
              </div>
              <div>
                <van-button plain size="small" class="flex-1">
                  <template #icon>
                    <van-icon name="eye" />
                  </template>
                  查看人脉 (18)
                </van-button>
              </div>
            </div>
          </div>
          <template #right>
            <van-button square type="primary" text="编辑" class="edit-button" />
            <van-button square text="删除" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeName = ref("people");
const value = ref("");

const onSearch = () => {};
const handleFilter = () => {};
</script>

<style scoped lang="less">
.van-search {
  padding: 16px;
}
.edit-button {
  height: 100%;
}
.delete-button {
  height: 100%;
}
</style>
