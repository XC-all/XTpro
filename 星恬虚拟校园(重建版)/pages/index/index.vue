<template>
	<view class="container">
		<!-- 导航栏部分 -->
		<view class="nav-bar">
			<view v-for="(item, index) in navItems" :key="index" class="nav-item"
				:class="{ active: currentNav === index }" @tap="switchNav(index)">
				{{ item }}
			</view>
		</view>

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
					<image src="/JGGimages/星挑战.png" mode="aspectFill" class="item-image"></image>
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
			currentTab: 0
		}
	},
	methods: {
		switchNav(index) {
			this.currentNav = index;
		},
		switchTab(index) {
			this.currentTab = index;
		}
	}
}
</script>

<style lang="scss">
.container {
	padding: 0;
	padding-bottom: calc(110rpx + env(safe-area-inset-bottom));
}

.nav-bar {
	position: relative;
	display: flex;
	justify-content: space-around;
	height: 80rpx;
	background: #fff;
	border-bottom: 1rpx solid #eee;

	.nav-item {
		flex: 1;
		text-align: center;
		line-height: 80rpx;
		font-size: 28rpx;
		color: #333;

		&.active {
			color: #007AFF;
			font-weight: bold;
		}
	}
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
	background: #fff;

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
	background: #fff;
	border-radius: 16rpx;
	margin: 20rpx;
	box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.08);
	overflow: hidden;

	.list-item {
		display: flex;
		padding: 24rpx;
		border-bottom: 1rpx solid #f5f5f5;
		transition: all 0.3s;

		&:last-child {
			border-bottom: none;
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
				gap: 8rpx;

				.badge {
					padding: 4rpx 16rpx;
					border-radius: 6rpx;
					font-size: 20rpx;
					box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);

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
</style>
