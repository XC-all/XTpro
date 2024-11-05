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
				'/LBimages/主图.png',
				'/LBimages/主图2.png',
				'/LBimages/主图3.png'
			],
			gridItems: [
				{ name: '星邮局', icon: '/JGGimages/星邮局.png' },
				{ name: '星打卡', icon: '/JGGimages/星打卡.png' },
				{ name: '星自习', icon: '/JGGimages/星自习.png' },
				{ name: '星息差', icon: '/JGGimages/星息差.png' },
				{ name: '星计划', icon: '/JGGimages/星计划.png' },
				{ name: '星挑战', icon: '/JGGimages/星挑战.png' }
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
	padding: 20rpx 0;
	background: #fff;
	border-radius: 12rpx;
	margin: 20rpx 0;

	.grid-item {
		width: 33.33%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20rpx 0;

		.grid-icon {
			width: 80rpx;
			height: 80rpx;
		}

		.grid-text {
			font-size: 24rpx;
			color: #333;
			margin-top: 10rpx;
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
	border-radius: 12rpx;

	.list-item {
		display: flex;
		padding: 20rpx;
		border-bottom: 1rpx solid #eee;

		.item-left {
			width: 200rpx;
			height: 200rpx;
			margin-right: 20rpx;

			.item-image {
				width: 100%;
				height: 100%;
				border-radius: 8rpx;
			}
		}

		.item-right {
			flex: 1;

			.username {
				font-size: 32rpx;
				font-weight: bold;
				color: #333;
			}

			.badges {
				margin: 10rpx 0;
				display: flex;
				align-items: center;

				.badge {
					padding: 4rpx 12rpx;
					border-radius: 4rpx;
					font-size: 20rpx;
					margin-right: 10rpx;

					&.admin {
						background: #FFA500;
						color: #fff;
					}

					&.top {
						background: #007AFF;
						color: #fff;
					}

					&.king {
						background: #FF0000;
						color: #fff;
					}
				}
			}

			.content {
				font-size: 34rpx;
				color: #333;
				margin-bottom: 10rpx;
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
