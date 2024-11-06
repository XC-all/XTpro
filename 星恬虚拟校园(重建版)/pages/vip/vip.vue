<template>
    <view class="vip-container" :style="{ paddingTop: statusBarHeight + 'px' }">
        <!-- 顶部导航 -->
        <view class="header">
            <view class="back-btn" @tap="goBack">
                <text class="iconfont">←</text>
            </view>
            <text class="header-title">会员中心</text>
        </view>

        <!-- 会员卡片展示 -->
        <view class="vip-cards">
            <!-- 普通会员卡 -->
            <view class="vip-card normal" :class="{ active: selectedType === 'normal' }" @tap="selectVipType('normal')">
                <view class="card-header">
                    <image class="vip-icon" src="/static/vip-normal.png" mode="aspectFit"></image>
                    <text class="vip-title">普通会员</text>
                </view>
                <view class="card-content">
                    <text class="feature">✓ 无广告浏览</text>
                    <text class="feature">✓ 会员专属头衔</text>
                    <text class="feature">✓ 星计划不限次</text>
                    <text class="feature">✓ 星匹配不限次</text>
                    <text class="feature">✓ 论坛帖子加热4次/月</text>
                </view>
            </view>

            <!-- 高级会员卡 -->
            <view class="vip-card premium" :class="{ active: selectedType === 'premium' }"
                @tap="selectVipType('premium')">
                <view class="card-header">
                    <image class="vip-icon" src="/static/vip-premium.png" mode="aspectFit"></image>
                    <text class="vip-title">高级会员</text>
                </view>
                <view class="card-content">
                    <text class="feature">✓ 普通会员所有特权</text>
                    <text class="feature">✓ 高级会员自选身份</text>
                    <text class="feature">✓ 论坛帖子加热不限次</text>
                    <text class="feature">✓ 认证与提现优先审核</text>
                    <text class="feature">✓ 专属客服服务</text>
                </view>
            </view>
        </view>

        <!-- 价格选择区域 -->
        <view class="price-section" v-if="selectedType">
            <text class="section-title">{{ selectedType === 'normal' ? '普通会员' : '高级会员' }}套餐</text>
            <view class="price-cards">
                <!-- 月卡 -->
                <view class="price-card" :class="{ active: selectedPlan === 'month' }" @tap="selectPlan('month')">
                    <text class="duration">月卡</text>
                    <text class="price">¥{{ selectedType === 'normal' ? '5' : '10' }}</text>
                    <text class="unit">/月</text>
                </view>

                <!-- 季卡 -->
                <view class="price-card" :class="{ active: selectedPlan === 'quarter' }" @tap="selectPlan('quarter')">
                    <text class="duration">季卡</text>
                    <text class="price">¥{{ selectedType === 'normal' ? '13' : '25' }}</text>
                    <text class="unit">/季</text>
                    <text class="save">省{{ selectedType === 'normal' ? '2' : '5' }}元</text>
                </view>

                <!-- 年卡 -->
                <view class="price-card" :class="{ active: selectedPlan === 'year' }" @tap="selectPlan('year')">
                    <text class="duration">年卡</text>
                    <text class="price">¥{{ selectedType === 'normal' ? '50' : '98' }}</text>
                    <text class="unit">/年</text>
                    <text class="save">省{{ selectedType === 'normal' ? '10' : '22' }}元</text>
                </view>
            </view>

            <!-- 限时特惠 -->
            <view class="special-offer" @tap="selectPlan('lifetime')">
                <view class="offer-content">
                    <view class="offer-left">
                        <text class="offer-tag">限时特惠</text>
                        <text class="offer-title">永久会员卡</text>
                    </view>
                    <view class="offer-right">
                        <text class="original-price">原价¥{{ selectedType === 'normal' ? '199' : '399' }}</text>
                        <text class="current-price">¥{{ selectedType === 'normal' ? '40' : '99' }}</text>
                    </view>
                </view>
                <text class="offer-desc">一次开通，永久有效，限时特惠</text>
            </view>
        </view>

        <!-- 购买按钮 -->
        <button class="purchase-btn" @tap="handlePurchase" v-if="selectedType && selectedPlan">
            立即开通{{ selectedType === 'normal' ? '普通会员' : '高级会员' }}
        </button>
    </view>
</template>

<script>
export default {
    data() {
        return {
            statusBarHeight: 0,
            selectedType: '',  // normal 或 premium
            selectedPlan: '',  // month, quarter, year 或 lifetime
        }
    },
    onLoad() {
        const systemInfo = uni.getSystemInfoSync();
        this.statusBarHeight = systemInfo.statusBarHeight;
    },
    methods: {
        goBack() {
            uni.navigateBack()
        },
        selectVipType(type) {
            this.selectedType = type;
            this.selectedPlan = '';
        },
        selectPlan(plan) {
            this.selectedPlan = plan;
        },
        handlePurchase() {
            // 处理购买逻辑
            uni.showLoading({
                title: '处理中...'
            });
            setTimeout(() => {
                uni.hideLoading();
                uni.showToast({
                    title: '购买成功',
                    icon: 'success'
                });
            }, 1500);
        }
    }
}
</script>

<style lang="scss">
.vip-container {
    min-height: 100vh;
    background: linear-gradient(to bottom, #f8f9fa, #fff);
    padding: 0 30rpx;

    .header {
        display: flex;
        align-items: center;
        height: 88rpx;
        margin-bottom: 40rpx;

        .back-btn {
            width: 88rpx;
            height: 88rpx;
            display: flex;
            align-items: center;
            justify-content: center;

            .iconfont {
                font-size: 36rpx;
                color: #333;
            }
        }

        .header-title {
            flex: 1;
            text-align: center;
            font-size: 36rpx;
            font-weight: 600;
            color: #333;
            margin-right: 88rpx;
        }
    }

    .vip-cards {
        display: flex;
        gap: 20rpx;
        margin-bottom: 40rpx;

        .vip-card {
            flex: 1;
            background: #fff;
            border-radius: 20rpx;
            padding: 30rpx;
            box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.06);
            transition: all 0.3s;

            &.active {
                transform: scale(1.02);
                box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.12);
            }

            &.normal {
                border: 2rpx solid #FFB800;

                &.active {
                    background: rgba(255, 184, 0, 0.05);
                }
            }

            &.premium {
                border: 2rpx solid #FF6B6B;

                &.active {
                    background: rgba(255, 107, 107, 0.05);
                }
            }

            .card-header {
                display: flex;
                align-items: center;
                margin-bottom: 20rpx;

                .vip-icon {
                    width: 48rpx;
                    height: 48rpx;
                    margin-right: 16rpx;
                }

                .vip-title {
                    font-size: 32rpx;
                    font-weight: bold;
                    color: #333;
                }
            }

            .card-content {
                .feature {
                    display: block;
                    font-size: 24rpx;
                    color: #666;
                    margin-bottom: 16rpx;
                    line-height: 1.6;
                    padding-left: 10rpx;

                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }

    .price-section {
        margin-top: 40rpx;

        .section-title {
            font-size: 32rpx;
            font-weight: bold;
            color: #333;
            margin-bottom: 30rpx;
            display: block;
        }

        .price-cards {
            display: flex;
            gap: 20rpx;
            margin-bottom: 30rpx;

            .price-card {
                flex: 1;
                background: #fff;
                border-radius: 16rpx;
                padding: 24rpx;
                text-align: center;
                position: relative;
                box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.06);
                transition: all 0.3s;

                &.active {
                    background: #007AFF;
                    transform: scale(1.02);

                    .duration,
                    .price,
                    .unit,
                    .save {
                        color: #fff;
                    }
                }

                .duration {
                    font-size: 28rpx;
                    color: #333;
                    margin-bottom: 12rpx;
                    display: block;
                }

                .price {
                    font-size: 40rpx;
                    font-weight: bold;
                    color: #007AFF;
                }

                .unit {
                    font-size: 24rpx;
                    color: #666;
                }

                .save {
                    position: absolute;
                    top: -10rpx;
                    right: -10rpx;
                    background: #FF6B6B;
                    color: #fff;
                    font-size: 20rpx;
                    padding: 4rpx 12rpx;
                    border-radius: 20rpx;
                }
            }
        }

        .special-offer {
            background: linear-gradient(135deg, #FF6B6B, #FF8E53);
            border-radius: 16rpx;
            padding: 30rpx;
            margin-top: 40rpx;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;

            &:active {
                transform: scale(0.98);
                box-shadow: 0 0 30rpx rgba(255, 107, 107, 0.4);

                &::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(255, 255, 255, 0.1);
                    animation: ripple 0.6s ease-out;
                }
            }

            @keyframes ripple {
                from {
                    opacity: 1;
                    transform: scale(0);
                }

                to {
                    opacity: 0;
                    transform: scale(2);
                }
            }

            .offer-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 16rpx;

                .offer-left {
                    .offer-tag {
                        background: #FFD700;
                        color: #FF6B6B;
                        font-size: 20rpx;
                        padding: 4rpx 12rpx;
                        border-radius: 20rpx;
                        margin-bottom: 12rpx;
                        display: inline-block;
                    }

                    .offer-title {
                        font-size: 32rpx;
                        color: #fff;
                        font-weight: bold;
                        display: block;
                    }
                }

                .offer-right {
                    text-align: right;

                    .original-price {
                        font-size: 24rpx;
                        color: rgba(255, 255, 255, 0.6);
                        text-decoration: line-through;
                        display: block;
                    }

                    .current-price {
                        font-size: 48rpx;
                        color: #fff;
                        font-weight: bold;
                    }
                }
            }

            .offer-desc {
                font-size: 24rpx;
                color: rgba(255, 255, 255, 0.8);
            }
        }
    }

    .purchase-btn {
        width: 100%;
        height: 88rpx;
        line-height: 88rpx;
        background: #007AFF;
        color: #fff;
        font-size: 32rpx;
        border-radius: 44rpx;
        margin: 60rpx 0;
        box-shadow: 0 4rpx 8rpx rgba(0, 122, 255, 0.2);

        &:active {
            transform: scale(0.98);
        }
    }
}
</style>