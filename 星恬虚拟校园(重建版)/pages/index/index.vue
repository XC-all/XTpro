<template>
	<!-- 添加侧边栏遮罩层 -->
	<view class="sidebar-mask" v-if="showSidebar" @tap="closeSidebar"></view>

	<!-- 添加侧边栏 -->
	<view class="sidebar" :class="{ 'sidebar-show': showSidebar }">
		<!-- 头像区域 -->
		<view class="sidebar-header">
			<image class="avatar"
				src="https://static.codemao.cn/coco/player/unstable/HkkBKiguA.image/jpeg?hash=FkJPWrLJZxbdTKslIQvZ6bIbjE0Y"
				mode="aspectFill"></image>
			<text class="username">星恬用户</text>
		</view>

		<!-- 会员信息 -->
		<view class="vip-info">
			<text class="vip-title">高级会员</text>
			<view class="vip-time">
				<text>已为您保障</text>
				<text class="time-text">{{ timeString }}</text>
			</view>
		</view>

		<!-- 功能列表 -->
		<view class="menu-list">
			<view class="menu-item" v-for="(item, index) in menuItems" :key="index" @tap="handleMenuItem(index)">
				<text class="menu-text">{{ item }}</text>
			</view>
		</view>
	</view>

	<!-- 原有内容保持不变 -->
	<view class="container" :style="{ paddingTop: statusBarHeight + 'px' }">
		<!-- 导航栏部分 -->
		<view class="nav-bar" :style="{ top: statusBarHeight + 'px' }">
			<!-- 添加三按钮 -->
			<view class="nav-item menu-btn" @tap="goToVip">
				<text class="nav-text">三</text>
			</view>
			<view v-for="(item, index) in navItems" :key="index" class="nav-item"
				:class="{ active: currentNav === index }" @tap="switchNav(index)">
				<text class="nav-text" :class="{ active: currentNav === index }">{{ item }}</text>
			</view>
		</view>

		<!-- 内容区域包装器 -->
		<view class="content-wrapper" :style="{ paddingTop: '80rpx' }">
			<!-- 轮播图部分 -->
			<swiper class="swiper" circular autoplay interval="4000" duration="500">
				<swiper-item v-for="(item, index) in swiperList" :key="index">
					<image :src="item" mode="aspectFill" class="swiper-image"></image>
				</swiper-item>
			</swiper>

			<!-- 九宫格部分 -->
			<view class="grid-container">
				<view v-for="(item, index) in gridItems" :key="index" class="grid-item">
					<image :src="item.icon" mode="aspectFit" class="grid-icon"></image>
					<text class="grid-text">{{ item.name }}</text>
				</view>
			</view>

			<!-- 添加达人推荐标题 -->
			<view class="section-title">
				<view class="title-bar">
					<view class="title-dot"></view>
					<text class="title-text">达人推荐</text>
				</view>
			</view>

			<!-- 列表部分 -->
			<view class="list-container">
				<view class="list-item">
					<view class="item-left">
						<image
							src="https://static.bcmcdn.com/coco/player/unstable/rkKh-frZ1x.image/png?hash=Fn2McqoXcAkZBzSiIvslA6h6KX_m"
							mode="aspectFill" class="item-image"></image>
					</view>
					<view class="item-right">
						<view class="username">用户名</view>
						<view class="badges">
							<text class="badge admin">管理员</text>
							<text class="badge top">置顶</text>
							<text class="badge king">自律之王</text>
						</view>
						<view class="content">测试1</view>
						<view class="sub-content">文字内容2</view>
					</view>
				</view>
				<view class="list-item">
					<view class="item-left">
						<image
							src="https://static.bcmcdn.com/coco/player/unstable/rkKh-frZ1x.image/png?hash=Fn2McqoXcAkZBzSiIvslA6h6KX_m"
							mode="aspectFill" class="item-image"></image>
					</view>
					<view class="item-right">
						<view class="username">用户名</view>
						<view class="badges">
							<text class="badge admin">管理员</text>
							<text class="badge top">置顶</text>
							<text class="badge king">自律之王</text>
						</view>
						<view class="content">测试1</view>
						<view class="sub-content">文字内容2</view>
					</view>
				</view>
			</view>
		</view>
	</view>

	<!-- 底部导航栏 -->
	<view class="tab-bar">
		<view class="tab-item" v-for="(item, index) in tabBarList" :key="index" @tap="switchTab(index)"
			:id="item.name === '+' ? 'center-btn' : `tab-item-${index}`">
			<view class="tab-icon" :class="{ 'add-btn': item.name === '+' }">
				<text v-if="item.name === '+'" class="plus-icon">+</text>
				<text v-else class="iconfont" :class="item.icon"></text>
			</view>
			<text class="tab-text" v-if="item.name !== '+'">{{ item.name }}</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			navItems: ['首页', '推荐', '热门'],
			currentNav: 0,
			swiperList: [
				'https://static.bcmcdn.com/coco/player/unstable/H18Exfu6A.image/png?hash=FhVQDEpeIA7VOp8jhBKvWia94_7t',
				'https://static.bcmcdn.com/coco/player/unstable/rkMe31x1yx.image/png?hash=Fk96Ejze1LiJcot5ZcU4vvU8K2sX',
				'https://static.bcmcdn.com/coco/player/unstable/rJzL3Jxyyg.image/png?hash=FphMp8DQoFPRCT8Fern4ZTs2Be6x'
			],
			gridItems: [
				{ name: '星邮局', icon: 'https://static.bcmcdn.com/coco/player/unstable/HyJEbfBWJx.image/png?hash=FsZkBDoZJ_gm1NpFGRsrxwLxXpOD' },
				{ name: '星打卡', icon: 'https://static.bcmcdn.com/coco/player/unstable/ryDIbGHbJl.image/png?hash=FiQvK49h3uCamJerrsKYxI_Wvt_t' },
				{ name: '星自习', icon: 'https://static.bcmcdn.com/coco/player/unstable/HJZuZzrbke.image/png?hash=FvE-kwjs9vw15BklTP-J3Po5oCv6' },
				{ name: '星息差', icon: 'https://static.bcmcdn.com/coco/player/unstable/HJLtbfHWye.image/png?hash=Fh1gVuFa4eErvm_2WpFKcv6Z8cSi' },
				{ name: '星计划', icon: 'https://static.bcmcdn.com/coco/player/unstable/B1mibGSZye.image/png?hash=Ft7CHfPcG5_gbXknCVDb1wlJceao' },
				{ name: '星挑战', icon: 'https://static.bcmcdn.com/coco/player/unstable/rkKh-frZ1x.image/png?hash=Fn2McqoXcAkZBzSiIvslA6h6KX_m' }
			],
			tabBarList: [
				{ name: '论坛', icon: 'icon-luntan' },
				{ name: '学习', icon: 'icon-xuexi' },
				{ name: '+', icon: 'add-btn' },
				{ name: '交友', icon: 'icon-jiaoyou' },
				{ name: '我的', icon: 'icon-wode' }
			],
			currentTab: 0,
			statusBarHeight: 0,
			isRefreshing: false,
			showSidebar: false,
			menuItems: ['我的钱包', '会员中心', '认证中心', '专属客服'],
			days: 15,
			hours: 20,
			minutes: 15,
			seconds: 15,
			timer: null,
			startTime: null
		}
	},
	computed: {
		timeString() {
			return `${this.days}天${this.hours}时${this.minutes}分${this.seconds}秒`
		}
	},
	onLoad() {
		// 获取状态栏高度
		const systemInfo = uni.getSystemInfoSync();
		this.statusBarHeight = systemInfo.statusBarHeight;
	},
	onPullDownRefresh() {
		if (this.isRefreshing) return;
		this.isRefreshing = true;

		// 移除弹窗提示，直接执行刷新逻辑
		setTimeout(() => {
			this.refreshData();
		}, 1000);
	},
	methods: {
		switchNav(index) {
			this.currentNav = index;
		},
		switchTab(index) {
			this.currentTab = index;
		},
		refreshData() {
			// 模拟数据更新
			this.swiperList = this.swiperList.reverse();

			// 完成刷新，不显示提示
			uni.stopPullDownRefresh();
			this.isRefreshing = false;
		},
		// 添加跳转到会员页面的方法
		goToVip() {
			this.showSidebar = true
			this.startTimer()
		},
		closeSidebar() {
			this.showSidebar = false
			if (this.timer) {
				clearInterval(this.timer)
			}
		},
		startTimer() {
			if (this.timer) {
				clearInterval(this.timer)
			}

			// 如果是第一次启动，记录开始时间
			if (!this.startTime) {
				this.startTime = new Date().getTime() - (
					this.days * 24 * 60 * 60 * 1000 +
					this.hours * 60 * 60 * 1000 +
					this.minutes * 60 * 1000 +
					this.seconds * 1000
				);
			}

			this.timer = setInterval(() => {
				const now = new Date().getTime();
				const diff = now - this.startTime;

				this.days = Math.floor(diff / (24 * 60 * 60 * 1000));
				this.hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
				this.minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
				this.seconds = Math.floor((diff % (60 * 1000)) / 1000);
			}, 1000);
		},
		handleMenuItem(index) {
			switch (index) {
				case 0:
					// 我的钱包
					break
				case 1:
					// 会员中心
					uni.navigateTo({ url: '/pages/vip/vip' })
					this.closeSidebar()
					break
				case 2:
					// 认证中心
					break
				case 3:
					// 专属客服
					break
			}
		}
	},
	onUnload() {
		if (this.timer) {
			clearInterval(this.timer)
		}
	}
}
</script>

<style lang="scss">
.container {
	padding: 0;
	padding-bottom: calc(110rpx + env(safe-area-inset-bottom));
	min-height: 100vh;
	box-sizing: border-box;
	background-color: #f5f5f5;
}

.nav-bar {
	position: fixed;
	left: 0;
	right: 0;
	z-index: 100;
	display: flex;
	justify-content: space-around;
	height: 80rpx;
	background: transparent;
	border-bottom: none;

	.menu-btn {
		width: 80rpx; // 给"三"按钮一个固定宽度
		flex: none; // 防止被拉伸

		.nav-text {
			font-size: 32rpx;
			color: #333;
			transform: translateY(-3px);
		}
	}

	.nav-item {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;

		.nav-text {
			font-size: 32rpx;
			color: #333;
			transform: translateY(-3px);
			transition: color 0.3s;

			&.active {
				color: #007AFF;
				font-weight: bold;
			}
		}
	}
}

.content-wrapper {
	width: 100%;
	box-sizing: border-box;
}

.swiper {
	height: 360rpx;
	width: 100%;

	.swiper-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

.grid-container {
	display: flex;
	flex-wrap: wrap;
	padding: 20rpx;
	background: #fff;
	border-radius: 16rpx;
	margin: 20rpx;
	box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.08);

	.grid-item {
		width: 33.33%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 24rpx 0;
		position: relative;

		&::after {
			content: '';
			position: absolute;
			right: 0;
			top: 20%;
			height: 60%;
			width: 1rpx;
			background: #f5f5f5;
		}

		&::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 20%;
			width: 60%;
			height: 1rpx;
			background: #f5f5f5;
		}

		&:nth-child(3n)::after {
			display: none;
		}

		&:nth-last-child(-n+3)::before {
			display: none;
		}

		.grid-icon {
			width: 90rpx;
			height: 90rpx;
			margin-bottom: 12rpx;
		}

		.grid-text {
			font-size: 26rpx;
			color: #333;
			font-weight: 500;
		}
	}
}

.section-title {
	padding: 30rpx 20rpx 20rpx;
	background: transparent;

	.title-bar {
		display: flex;
		align-items: center;

		.title-dot {
			width: 8rpx;
			height: 32rpx;
			background: #007AFF;
			border-radius: 4rpx;
			margin-right: 16rpx;
		}

		.title-text {
			font-size: 32rpx;
			font-weight: 600;
			color: #333;
			position: relative;
			padding-right: 20rpx;

			&::after {
				content: '';
				position: absolute;
				bottom: -4rpx;
				left: 0;
				width: 40%;
				height: 8rpx;
				background: rgba(0, 122, 255, 0.1);
				z-index: 1;
			}
		}
	}
}

.list-container {
	background: transparent;
	border-radius: 16rpx;
	margin: 20rpx;
	box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.08);
	overflow: hidden;

	.list-item {
		background: #fff;
		display: flex;
		padding: 24rpx;
		margin-bottom: 16rpx;
		border-bottom: none;
		transition: all 0.3s;

		&:last-child {
			margin-bottom: 0;
		}

		&:active {
			background: #f9f9f9;
		}

		.item-left {
			width: 200rpx;
			height: 200rpx;
			margin-right: 24rpx;

			.item-image {
				width: 100%;
				height: 100%;
				border-radius: 12rpx;
				box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.1);
			}
		}

		.item-right {
			flex: 1;

			.username {
				font-size: 32rpx;
				font-weight: 600;
				color: #333;
				margin-bottom: 12rpx;
			}

			.badges {
				margin: 12rpx 0;
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				gap: 10rpx;

				.badge {
					padding: 4rpx 16rpx;
					border-radius: 6rpx;
					font-size: 20rpx;
					box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);
					margin-right: 10rpx;

					&:last-child {
						margin-right: 0;
					}

					&.admin {
						background: #FFA500;
					}

					&.top {
						background: #007AFF;
					}

					&.king {
						background: #FF0000;
					}
				}
			}

			.content {
				font-size: 34rpx;
				color: #333;
				margin-bottom: 12rpx;
				line-height: 1.4;
			}

			.sub-content {
				font-size: 24rpx;
				color: #007AFF;
			}
		}
	}
}

.tab-bar {
	height: 110rpx;
	background: #ffffff;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-top: 1rpx solid #eee;
	padding-bottom: env(safe-area-inset-bottom);
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 999;

	.tab-item {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;

		.tab-icon {
			width: 45rpx;
			height: 45rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.tab-text {
			font-size: 35rpx;
			color: #333;
			text-align: center;
			margin-top: -32rpx;
		}

		.iconfont {
			font-size: 45rpx;
			color: #666;
		}
	}
}

#center-btn {
	.add-btn {
		width: 100rpx;
		height: 100rpx;
		background: #007AFF;
		border-radius: 50%;
		margin-top: -34rpx;
		box-shadow: 0 4rpx 8rpx rgba(0, 122, 255, 0.3);
		position: relative;
		z-index: 2;

		.plus-icon {
			color: #fff;
			font-size: 60rpx;
			line-height: 100rpx;
			text-align: center;
		}
	}
}

#tab-item-0,
#tab-item-1,
#tab-item-3,
#tab-item-4 {
	padding-top: 10rpx;

	.tab-text {
		position: relative;
		top: -26rpx;
	}
}

.refresh-indicator {
	display: none;
}

.sidebar-mask {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	z-index: 998;
}

.sidebar {
	position: fixed;
	top: 0;
	left: -80%;
	width: 80%;
	height: 100%;
	background: #fff;
	z-index: 999;
	transition: all 0.3s ease;
	box-shadow: 2rpx 0 20rpx rgba(0, 0, 0, 0.1);

	&.sidebar-show {
		left: 0;
	}

	.sidebar-header {
		padding: calc(env(safe-area-inset-top) + 60rpx) 40rpx 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;

		.avatar {
			width: 120rpx;
			height: 120rpx;
			border-radius: 60rpx;
			box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.1);
			margin-bottom: 20rpx;
		}

		.username {
			font-size: 32rpx;
			color: #FFB800;
			font-weight: bold;
		}
	}

	.vip-info {
		padding: 0 40rpx 40rpx;
		text-align: center;

		.vip-title {
			font-size: 36rpx;
			color: #FFB800;
			font-weight: bold;
			margin-bottom: 20rpx;
			display: block;
			text-align: center;
		}

		.vip-time {
			font-size: 28rpx;
			color: #666;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;

			.time-text {
				color: #FFB800;
				margin-left: 10rpx;
			}
		}
	}

	.menu-list {
		padding: 20rpx 0;

		.menu-item {
			height: 100rpx;
			display: flex;
			align-items: center;
			padding: 0 40rpx;
			background: #fff;
			margin: 0 20rpx 20rpx;
			border-radius: 16rpx;
			transition: all 0.3s;
			box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
			position: relative;
			overflow: hidden;

			&::after {
				content: '';
				position: absolute;
				right: 30rpx;
				top: 50%;
				transform: translateY(-50%);
				width: 12rpx;
				height: 12rpx;
				border-top: 2rpx solid #999;
				border-right: 2rpx solid #999;
				transform: rotate(45deg);
			}

			&:active {
				transform: scale(0.98);
				background: #f9f9f9;
			}

			.menu-text {
				font-size: 30rpx;
				color: #333;
				font-weight: 500;
			}
		}
	}
}
</style>
