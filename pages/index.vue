<template>
  <el-container>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <p class="text-center">
              Some content here
            </p>
          </div>
        </el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../assets/scss/pages/index.scss';
</style>
