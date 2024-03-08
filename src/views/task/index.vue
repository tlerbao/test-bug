<template>
  <div class="container mx-auto p-4">
    <!-- 顶部导航栏 -->
    <nav class="flex justify-between items-center mb-4">
      <div>
        <h1 class="text-2xl font-bold">任务管理</h1>
      </div>
      <div>
        <!-- 月周日切换按钮 -->
        <div class="flex space-x-2">
          <button class="bg-blue-500 text-white px-4 py-2 rounded">月</button>
          <button class="bg-blue-500 text-white px-4 py-2 rounded">周</button>
          <button class="bg-blue-500 text-white px-4 py-2 rounded">日</button>
        </div>
      </div>
    </nav>

    <!-- 主要内容区域 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- 店面任务卡片 -->
      <div class="bg-[var(--color-block-background)] p-4 rounded shadow-md">
        <h2 class="text-lg font-semibold mb-4">店面任务</h2>
        <!-- 任务列表 -->
        <div>
          <!-- 单个任务项 -->
          <div class="flex items-center mb-2">
            <!-- 头像 -->
            <img src="" alt="Avatar" class="w-8 h-8 rounded-full mr-2" />
            <!-- 任务信息 -->
            <div>
              <p class="font-semibold">任务1</p>
              <div class="flex items-center">
                <div class="w-3/4">
                  <div class="bg-gray-200 h-2 rounded-full">
                    <div class="bg-blue-500 h-2 rounded-full"></div>
                  </div>
                </div>
                <p class="ml-2">75%</p>
              </div>
            </div>
          </div>
          <!-- 可以添加更多任务项 -->
        </div>
      </div>

      <!-- 个人任务卡片 -->
      <div class="bg-white p-4 rounded shadow-md">
        <h2 class="text-lg font-semibold mb-4">个人任务</h2>
        <!-- 任务列表 -->
        <div>
          <!-- 单个任务项 -->
          <div class="flex items-center mb-2">
            <!-- 头像 -->
            <img src="" alt="Avatar" class="w-8 h-8 rounded-full mr-2" />
            <!-- 任务信息 -->
            <div>
              <p class="font-semibold">任务2</p>
              <div class="flex items-center">
                <div class="w-3/4">
                  <div class="bg-gray-200 h-2 rounded-full">
                    <div class="bg-green-500 h-2 rounded-full"></div>
                  </div>
                </div>
                <p class="ml-2">100%</p>
              </div>
            </div>
          </div>
          <!-- 可以添加更多任务项 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
<route lang="yaml">
meta:
  layout: bar
</route>
