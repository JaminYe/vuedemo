<template>
	<div>
		<el-container class="home_container">
			<el-header><div class="home_title">管理平台</div></el-header>
			<el-container>
				<el-aside width="200px">
					<el-menu default-active="0" class="el-menu-vertical-demo" style="background-color: #ECECEC" router>
						<template v-for="(item, index) in this.$router.options.routes">
							<el-submenu :index="index + ''" :key="index" v-if="item.children !== undefined && item.children.length > 0">
								<template slot="title">
									<span>{{ item.name }}</span>
								</template>
								<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">{{ child.name }}</el-menu-item>
							</el-submenu>
						</template>
					</el-menu>
				</el-aside>
				<el-container>
					<el-main>
						<el-breadcrumb separator-class="el-icon-arrow-right">
							<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
							<el-breadcrumb-item v-text="this.$router.currentRoute.name"></el-breadcrumb-item>
						</el-breadcrumb>
						<keep-alive>
						  <router-view v-if="this.$route.meta.keepAlive"></router-view>
						</keep-alive>
						<router-view v-if="!this.$route.meta.keepAlive"></router-view>
					</el-main>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script>
export default {
	name: 'app',
	components: {},
	data() {
		return {};
	}
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
