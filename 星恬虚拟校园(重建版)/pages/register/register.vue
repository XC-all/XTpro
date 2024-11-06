<template>
    <view class="register-container" :style="{ paddingTop: statusBarHeight + 'px' }">
        <!-- 顶部返回按钮和标题 -->
        <view class="header">
            <view class="back-btn" @tap="goBack">
                <text class="iconfont icon-back">←</text>
            </view>
            <text class="header-title">注册账号</text>
        </view>

        <!-- 欢迎标语 -->
        <view class="welcome-section">
            <text class="welcome-title">欢迎回到星恬</text>
            <text class="welcome-subtitle">我们已经在这等你很久啦</text>
        </view>

        <!-- 注册表单 -->
        <view class="form-container">
            <!-- 用户名输入框 -->
            <view class="input-group">
                <text class="input-label">用户名</text>
                <input class="input-box" type="text" v-model="formData.username" placeholder="请输入用户名"
                    placeholder-class="placeholder-style" />
            </view>

            <!-- 邮箱输入框和验证码 -->
            <view class="input-group">
                <text class="input-label">QQ邮箱</text>
                <view class="verify-input-group">
                    <input class="input-box verify-input" type="text" v-model="formData.email" placeholder="请输入QQ邮箱"
                        placeholder-class="placeholder-style" />
                    <button class="verify-btn" :disabled="isCountingDown" @tap="sendVerifyCode">
                        {{ countDownText }}
                    </button>
                </view>
            </view>

            <!-- 验证码输入框 -->
            <view class="input-group">
                <text class="input-label">验证码</text>
                <input class="input-box" type="number" maxlength="6" v-model="formData.verifyCode" placeholder="请输入验证码"
                    placeholder-class="placeholder-style" />
            </view>

            <!-- 密码输入框 -->
            <view class="input-group">
                <text class="input-label">设置密码</text>
                <input class="input-box" type="password" v-model="formData.password" placeholder="请设置登录密码"
                    placeholder-class="placeholder-style" />
            </view>

            <!-- 确认密码输入框 -->
            <view class="input-group">
                <text class="input-label">确认密码</text>
                <input class="input-box" type="password" v-model="formData.confirmPassword" placeholder="请再次输入密码"
                    placeholder-class="placeholder-style" />
            </view>
        </view>

        <!-- 注册按钮 -->
        <button class="register-btn" @tap="handleRegister">立即注册</button>

        <!-- 用户协议 -->
        <view class="agreement">
            <checkbox-group @change="handleAgreementChange">
                <label class="agreement-label">
                    <checkbox value="1" color="#007AFF" :checked="formData.agreed" />
                    <text class="agreement-text">我已阅读并同意</text>
                    <text class="agreement-link">《用户协议》</text>
                    <text class="agreement-text">和</text>
                    <text class="agreement-link">《隐私政策》</text>
                </label>
            </checkbox-group>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            statusBarHeight: 0,
            formData: {
                username: '',
                email: '',
                verifyCode: '',
                password: '',
                confirmPassword: '',
                agreed: false
            },
            countdown: 60,
            isCountingDown: false
        }
    },
    computed: {
        countDownText() {
            return this.isCountingDown ? `${this.countdown}s` : '发送验证码'
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
        startCountDown() {
            this.isCountingDown = true
            this.countdown = 60
            const timer = setInterval(() => {
                this.countdown--
                if (this.countdown <= 0) {
                    clearInterval(timer)
                    this.isCountingDown = false
                }
            }, 1000)
        },
        sendVerifyCode() {
            if (!this.formData.email) {
                uni.showToast({
                    title: '请输入邮箱',
                    icon: 'none'
                })
                return
            }
            // 验证邮箱格式
            const emailRegex = /^[1-9]\d{4,10}@qq\.com$/
            if (!emailRegex.test(this.formData.email)) {
                uni.showToast({
                    title: '请输入正确的QQ邮箱',
                    icon: 'none'
                })
                return
            }

            // TODO: 调用发送验证码接口
            uni.showToast({
                title: '验证码已发送',
                icon: 'success'
            })
            this.startCountDown()
        },
        handleAgreementChange(e) {
            this.formData.agreed = e.detail.value.length > 0
        },
        handleRegister() {
            // 表单验证
            if (!this.formData.username) {
                uni.showToast({
                    title: '请输入用户名',
                    icon: 'none'
                })
                return
            }
            if (!this.formData.email) {
                uni.showToast({
                    title: '请输入邮箱',
                    icon: 'none'
                })
                return
            }
            if (!this.formData.verifyCode) {
                uni.showToast({
                    title: '请输入验证码',
                    icon: 'none'
                })
                return
            }
            if (!this.formData.password) {
                uni.showToast({
                    title: '请设置密码',
                    icon: 'none'
                })
                return
            }
            if (this.formData.password !== this.formData.confirmPassword) {
                uni.showToast({
                    title: '两次密码不一致',
                    icon: 'none'
                })
                return
            }
            if (!this.formData.agreed) {
                uni.showToast({
                    title: '请同意用户协议',
                    icon: 'none'
                })
                return
            }

            // TODO: 调用注册接口
            uni.showLoading({
                title: '注册中...'
            })
            setTimeout(() => {
                uni.hideLoading()
                uni.showToast({
                    title: '注册成功',
                    icon: 'success',
                    duration: 2000,
                    success: () => {
                        setTimeout(() => {
                            uni.navigateBack()
                        }, 2000)
                    }
                })
            }, 1500)
        }
    }
}
</script>

<style lang="scss">
.register-container {
    min-height: 100vh;
    padding: 0 40rpx;
    background: linear-gradient(to bottom, #f8f9fa, #fff);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;

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

            .icon-back {
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

    .welcome-section {
        text-align: center;
        margin-bottom: 60rpx;

        .welcome-title {
            font-size: 48rpx;
            font-weight: bold;
            color: #333;
            margin-bottom: 16rpx;
            display: block;
        }

        .welcome-subtitle {
            font-size: 28rpx;
            color: #666;
            display: block;
        }
    }

    .form-container {
        background: #fff;
        border-radius: 24rpx;
        padding: 40rpx;
        box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.06);
        max-height: calc(100vh - 400rpx);
        box-sizing: border-box;

        .input-group {
            margin-bottom: 40rpx;

            .input-label {
                font-size: 28rpx;
                color: #333;
                margin-bottom: 16rpx;
                display: block;
                font-weight: 500;
            }

            .input-box {
                width: 100%;
                height: 88rpx;
                background: #f5f7fa;
                border-radius: 12rpx;
                padding: 0 24rpx;
                font-size: 28rpx;
                color: #333;
                box-sizing: border-box;
            }

            .verify-input-group {
                display: flex;
                align-items: center;
                gap: 20rpx;

                .verify-input {
                    flex: 1;
                }

                .verify-btn {
                    width: 200rpx;
                    height: 88rpx;
                    line-height: 88rpx;
                    background: #007AFF;
                    color: #fff;
                    font-size: 26rpx;
                    border-radius: 12rpx;
                    padding: 0;
                    margin: 0;

                    &:disabled {
                        background: #ccc;
                    }
                }
            }
        }
    }

    .register-btn {
        width: 100%;
        height: 88rpx;
        line-height: 88rpx;
        background: #007AFF;
        color: #fff;
        font-size: 32rpx;
        border-radius: 44rpx;
        margin: 60rpx 0 40rpx;
        box-shadow: 0 4rpx 8rpx rgba(0, 122, 255, 0.2);

        &:active {
            transform: scale(0.98);
        }
    }

    .agreement {
        text-align: center;

        .agreement-label {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24rpx;

            .agreement-text {
                color: #666;
                margin: 0 4rpx;
            }

            .agreement-link {
                color: #007AFF;
            }
        }
    }
}

.placeholder-style {
    color: #999;
}
</style>