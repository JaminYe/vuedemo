<template>
  <div>
    <el-container class="home_container">
      <el-header>
        <div class="home_title">测试</div>
        <div class="home_userinfoContainer">
          <el-dropdown>
            <span class="el-dropdown-link home_userinfo"><i class="el-icon-arrow-down el-icon--right home_userinfo"></i></span>
            <el-dropdown-menu>
              <el-dropdown-item>系统消息</el-dropdown-item>
              <el-dropdown-item>我的文章</el-dropdown-item>
              <el-dropdown-item>个人主页</el-dropdown-item>
              <el-dropdown-item>退出登陆</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="0" class="el-menu-vertical-demo" style="background-color: #ECECEC" router>
            <template v-for="(item, index) in this.$router.options.routes" v-if="!item.hidden">
              <el-submenu :index="index" v-if="item.children && item.children.length > 1" :key="index">
                <template slot="title">
                  <i :class="item.iconCls"></i>
                  <span><font size="5">{{ item.name }}</font></span>
                </template>
                <el-menu-item v-for="child in item.children" v-if="!child.hidden" :index="child.path" :key="child.path">{{ child.name }}</el-menu-item>
              </el-submenu>
              <template v-else>
                <el-menu-item :index="item.children[0].path">
                  <i :class="item.children[0].iconCls"></i>
                  <span slot="title">{{ item.children[0].name }}</span>
                </el-menu-item>
              </template>
            </template>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item v-text="this.$router.currentRoute.name"></el-breadcrumb-item>
            </el-breadcrumb>

            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Main'
};
</script>

<style>
.home_container {
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}

.el-header {
  background-color: #20a0ff;
  color: #333;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-aside {
  background-color: #ececec;
}

.el-main {
  background-color: #fff;
  color: #000;
  text-align: center;
}

.home_title {
  color: #fff;
  font-size: 22px;
  display: inline;
}

.home_userinfo {
  color: #fff;
  cursor: pointer;
}

.home_userinfoContainer {
  display: inline;
  margin-right: 20px;
}
</style>
