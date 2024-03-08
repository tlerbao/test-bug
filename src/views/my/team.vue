<template>
  <div class="p-8 pb-4 flex flex-col gap-1">
    <h1 class="text-lg font-bold">🚀 我的团队</h1>
    <p class="text-gray-400 text-sm">团队中的每个人都亦师亦友</p>
  </div>
  <div
    class="mx-8 mb-4 bg-blue-100 border border-blue-200 text-sm text-blue-800 rounded-lg p-4 dark:bg-blue-800/10 dark:border-blue-900 dark:text-blue-500"
    role="alert"
  >
    <span class="font-bold">Info</span> 该页面开发中...
  </div>
  <div>
    <ul role="list" class="bg-white shadow px-8 divide-y divide-gray-100">
      <li v-for="person in teamList" :key="person.mobile" class="flex justify-between gap-x-6 py-5 items-center">
        <div class="flex min-w-0 gap-x-4 items-center">
          <img class="h-16 w-16 flex-none rounded-full bg-gray-50" :src="person.avatar ? person.avatar : noAvatar" alt="" />
          <div class="flex flex-col justify-center">
            <div class="font-semibold text-gray-900 -mb-1">
              {{ person.fullname }}
            </div>
            <div class="block">
              <template v-if="person.jobs && person.jobs.length > 0">
                <van-tag v-for="job in person.jobs" :key="job.coding" :type="job.job_name == '店长' ? 'primary' : 'success'">
                  {{ job.job_name }}
                </van-tag>
              </template>
              <template v-else>
                <van-tag type="default">无职位</van-tag>
              </template>
            </div>

            <div class="text-gray-400 text-sm flex gap-3">
              <div><van-icon name="friends" /> 345</div>
              <div><van-icon name="balance-list" /> 186</div>
              <div><van-icon name="gold-coin" /> 89678</div>
            </div>
          </div>
        </div>
        <div class="size-10 bg-blue-500 text-white rounded flex items-center justify-center">
          <a :href="`tel:${person.mobile}`"><van-icon name="phone" /></a>
        </div>
      </li>
    </ul>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { getTeamMemberListApi } from "@/api/modules/permission";
import { ref } from "vue";
import noAvatar from "@/assets/images/no_avatar.png";

const teamList = ref<API.Permissions.TeamList[]>();

const getTeamMemberList = async () => {
  const { data } = await getTeamMemberListApi();
  teamList.value = data;
};
getTeamMemberList();
</script>

<style scoped lang="less"></style>
