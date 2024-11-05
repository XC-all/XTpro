<template>
    <view class="login-container" :style="{ paddingTop: statusBarHeight + 'px' }">
        <!-- 顶部标题 -->
        <view class="login-title">登录</view>

        <!-- 圆角头像框 -->
        <view class="avatar-container">
            <image class="avatar-image"
                src="https://static.codemao.cn/coco/player/unstable/HkkBKiguA.image/jpeg?hash=FkJPWrLJZxbdTKslIQvZ6bIbjE0Y"
                mode="aspectFill">
            </image>
        </view>

        <!-- 用户邮箱输入区域 -->
        <view class="input-section">
            <view class="input-label">用户邮箱</view>
            <input class="input-box" type="text" placeholder="请输入用户账号" placeholder-class="placeholder-style"
                v-model="email" />
        </view>

        <!-- 用户密码输入区域 -->
        <view class="input-section">
            <view class="input-label">用户密码</view>
            <input class="input-box" type="password" placeholder="请输入用户密码" placeholder-class="placeholder-style"
                v-model="password" />
        </view>

        <!-- 忘记密码区域 -->
        <view class="forget-password">
            <text>忘记密码？请点击此处</text>
            <text class="highlight">立即找回</text>
        </view>

        <!-- 登录按钮 -->
        <button class="login-btn" @click="handleLogin">登录</button>

        <!-- 注册提示 -->
        <view class="register-hint">
            <text>注册账号？请点击此处</text>
            <text class="highlight">立即注册</text>
        </view>

        <!-- 底部联系方式 -->
        <view class="contact-info">
            遇到问题请联系官方邮箱：209522168@qq.com
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            statusBarHeight: 0
        }
    },
    onLoad() {
        const systemInfo = uni.getSystemInfoSync();
        this.statusBarHeight = systemInfo.statusBarHeight;
    },
    methods: {
        handleLogin() {
            console.log('登录按钮被点击');

            if (!this.email || !this.password) {
                uni.showToast({
                    title: '请输入邮箱和密码',
                    icon: 'none'
                });
                return;
            }

            uni.reLaunch({
                url: '/pages/index/index',
                success: () => {
                    console.log('跳转成功');
                },
                fail: (err) => {
                    console.error('跳转失败:', err);
                    uni.showToast({
                        title: '跳转失败，请重试',
                        icon: 'none'
                    });
                }
            });
        }
    }
}
</script>

<style lang="scss">
.login-container {
    padding-left: 40rpx;
    padding-right: 40rpx;

    .login-title {
        font-size: 48rpx;
        font-weight: bold;
        text-align: center;
        margin: 60rpx 0;
    }

    .avatar-container {
        display: flex;
        justify-content: center;
        margin-bottom: 60rpx;

        .avatar-image {
            width: 160rpx;
            height: 160rpx;
            border-radius: 80rpx;
        }
    }

    .input-section {
        margin-bottom: 40rpx;
        display: flex;
        flex-direction: column;
        align-items: center;

        .input-label {
            font-size: 32rpx;
            color: #333;
            margin-bottom: 20rpx;
            text-align: center;
        }

        .input-box {
            width: 80%;
            height: 88rpx;
            background: #f5f5f5;
            border-radius: 16rpx;
            padding: 0 30rpx;
            font-size: 28rpx;
            text-align: center;
        }

        .placeholder-style {
            color: #999;
            text-align: center;
        }
    }

    .forget-password {
        text-align: center;
        font-size: 28rpx;
        color: #666;
        margin-bottom: 60rpx;

        .highlight {
            color: #007AFF;
            margin-left: 10rpx;
        }
    }

    .login-btn {
        width: 100%;
        height: 88rpx;
        line-height: 88rpx;
        background: #007AFF;
        color: #fff;
        font-size: 32rpx;
        border-radius: 44rpx;
        margin-bottom: 40rpx;
    }

    .register-hint {
        text-align: center;
        font-size: 28rpx;
        color: #666;
        margin-bottom: 60rpx;

        .highlight {
            color: #007AFF;
            margin-left: 10rpx;
        }
    }

    .contact-info {
        text-align: center;
        font-size: 24rpx;
        color: #999;
        margin-bottom: 40rpx;
    }
}
</style>