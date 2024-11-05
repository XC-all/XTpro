if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$2 = {
    data() {
      return {
        email: "",
        password: "",
        statusBarHeight: 0
      };
    },
    onLoad() {
      const systemInfo = uni.getSystemInfoSync();
      this.statusBarHeight = systemInfo.statusBarHeight;
    },
    methods: {
      handleLogin() {
        formatAppLog("log", "at pages/login/login.vue:65", "登录按钮被点击");
        if (!this.email || !this.password) {
          uni.showToast({
            title: "请输入邮箱和密码",
            icon: "none"
          });
          return;
        }
        uni.reLaunch({
          url: "/pages/index/index",
          success: () => {
            formatAppLog("log", "at pages/login/login.vue:78", "跳转成功");
          },
          fail: (err) => {
            formatAppLog("error", "at pages/login/login.vue:81", "跳转失败:", err);
            uni.showToast({
              title: "跳转失败，请重试",
              icon: "none"
            });
          }
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "login-container",
        style: vue.normalizeStyle({ paddingTop: $data.statusBarHeight + "px" })
      },
      [
        vue.createCommentVNode(" 顶部标题 "),
        vue.createElementVNode("view", { class: "login-title" }, "登录"),
        vue.createCommentVNode(" 圆角头像框 "),
        vue.createElementVNode("view", { class: "avatar-container" }, [
          vue.createElementVNode("image", {
            class: "avatar-image",
            src: "https://static.codemao.cn/coco/player/unstable/HkkBKiguA.image/jpeg?hash=FkJPWrLJZxbdTKslIQvZ6bIbjE0Y",
            mode: "aspectFill"
          })
        ]),
        vue.createCommentVNode(" 用户邮箱输入区域 "),
        vue.createElementVNode("view", { class: "input-section" }, [
          vue.createElementVNode("view", { class: "input-label" }, "用户邮箱"),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              class: "input-box",
              type: "text",
              placeholder: "请输入用户账号",
              "placeholder-class": "placeholder-style",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.email = $event)
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.email]
          ])
        ]),
        vue.createCommentVNode(" 用户密码输入区域 "),
        vue.createElementVNode("view", { class: "input-section" }, [
          vue.createElementVNode("view", { class: "input-label" }, "用户密码"),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              class: "input-box",
              type: "password",
              placeholder: "请输入用户密码",
              "placeholder-class": "placeholder-style",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.password = $event)
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.password]
          ])
        ]),
        vue.createCommentVNode(" 忘记密码区域 "),
        vue.createElementVNode("view", { class: "forget-password" }, [
          vue.createElementVNode("text", null, "忘记密码？请点击此处"),
          vue.createElementVNode("text", { class: "highlight" }, "立即找回")
        ]),
        vue.createCommentVNode(" 登录按钮 "),
        vue.createElementVNode("button", {
          class: "login-btn",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.handleLogin && $options.handleLogin(...args))
        }, "登录"),
        vue.createCommentVNode(" 注册提示 "),
        vue.createElementVNode("view", { class: "register-hint" }, [
          vue.createElementVNode("text", null, "注册账号？请点击此处"),
          vue.createElementVNode("text", { class: "highlight" }, "立即注册")
        ]),
        vue.createCommentVNode(" 底部联系方式 "),
        vue.createElementVNode("view", { class: "contact-info" }, " 遇到问题请联系官方邮箱：209522168@qq.com ")
      ],
      4
      /* STYLE */
    );
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "C:/Users/97945/Desktop/星恬虚拟校园(重建版)/pages/login/login.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        navItems: ["首页", "推荐", "热门"],
        currentNav: 0,
        swiperList: [
          "https://static.bcmcdn.com/coco/player/unstable/H18Exfu6A.image/png?hash=FhVQDEpeIA7VOp8jhBKvWia94_7t",
          "https://static.bcmcdn.com/coco/player/unstable/rkMe31x1yx.image/png?hash=Fk96Ejze1LiJcot5ZcU4vvU8K2sX",
          "https://static.bcmcdn.com/coco/player/unstable/rJzL3Jxyyg.image/png?hash=FphMp8DQoFPRCT8Fern4ZTs2Be6x"
        ],
        gridItems: [
          { name: "星邮局", icon: "https://static.bcmcdn.com/coco/player/unstable/HyJEbfBWJx.image/png?hash=FsZkBDoZJ_gm1NpFGRsrxwLxXpOD" },
          { name: "星打卡", icon: "https://static.bcmcdn.com/coco/player/unstable/ryDIbGHbJl.image/png?hash=FiQvK49h3uCamJerrsKYxI_Wvt_t" },
          { name: "星自习", icon: "https://static.bcmcdn.com/coco/player/unstable/HJZuZzrbke.image/png?hash=FvE-kwjs9vw15BklTP-J3Po5oCv6" },
          { name: "星息差", icon: "https://static.bcmcdn.com/coco/player/unstable/HJLtbfHWye.image/png?hash=Fh1gVuFa4eErvm_2WpFKcv6Z8cSi" },
          { name: "星计划", icon: "https://static.bcmcdn.com/coco/player/unstable/B1mibGSZye.image/png?hash=Ft7CHfPcG5_gbXknCVDb1wlJceao" },
          { name: "星挑战", icon: "https://static.bcmcdn.com/coco/player/unstable/rkKh-frZ1x.image/png?hash=Fn2McqoXcAkZBzSiIvslA6h6KX_m" }
        ],
        tabBarList: [
          { name: "论坛", icon: "icon-luntan" },
          { name: "学习", icon: "icon-xuexi" },
          { name: "+", icon: "add-btn" },
          { name: "交友", icon: "icon-jiaoyou" },
          { name: "我的", icon: "icon-wode" }
        ],
        currentTab: 0,
        statusBarHeight: 0,
        isRefreshing: false
      };
    },
    onLoad() {
      const systemInfo = uni.getSystemInfoSync();
      this.statusBarHeight = systemInfo.statusBarHeight;
    },
    onPullDownRefresh() {
      if (this.isRefreshing)
        return;
      this.isRefreshing = true;
      setTimeout(() => {
        this.refreshData();
      }, 1e3);
    },
    methods: {
      switchNav(index) {
        this.currentNav = index;
      },
      switchTab(index) {
        this.currentTab = index;
      },
      refreshData() {
        this.swiperList = this.swiperList.reverse();
        uni.stopPullDownRefresh();
        this.isRefreshing = false;
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode(
          "view",
          {
            class: "container",
            style: vue.normalizeStyle({ paddingTop: $data.statusBarHeight + "px" })
          },
          [
            vue.createCommentVNode(" 导航栏部分 "),
            vue.createElementVNode(
              "view",
              {
                class: "nav-bar",
                style: vue.normalizeStyle({ top: $data.statusBarHeight + "px" })
              },
              [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.navItems, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: index,
                      class: vue.normalizeClass(["nav-item", { active: $data.currentNav === index }]),
                      onClick: ($event) => $options.switchNav(index)
                    }, [
                      vue.createElementVNode(
                        "text",
                        {
                          class: vue.normalizeClass(["nav-text", { active: $data.currentNav === index }])
                        },
                        vue.toDisplayString(item),
                        3
                        /* TEXT, CLASS */
                      )
                    ], 10, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              4
              /* STYLE */
            ),
            vue.createCommentVNode(" 内容区域包装器 "),
            vue.createElementVNode("view", {
              class: "content-wrapper",
              style: { paddingTop: "80rpx" }
            }, [
              vue.createCommentVNode(" 轮播图部分 "),
              vue.createElementVNode("swiper", {
                class: "swiper",
                circular: "",
                autoplay: "",
                interval: "4000",
                duration: "500"
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.swiperList, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index }, [
                      vue.createElementVNode("image", {
                        src: item,
                        mode: "aspectFill",
                        class: "swiper-image"
                      }, null, 8, ["src"])
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createCommentVNode(" 九宫格部分 "),
              vue.createElementVNode("view", { class: "grid-container" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.gridItems, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: index,
                      class: "grid-item"
                    }, [
                      vue.createElementVNode("image", {
                        src: item.icon,
                        mode: "aspectFit",
                        class: "grid-icon"
                      }, null, 8, ["src"]),
                      vue.createElementVNode(
                        "text",
                        { class: "grid-text" },
                        vue.toDisplayString(item.name),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createCommentVNode(" 添加达人推荐标题 "),
              vue.createElementVNode("view", { class: "section-title" }, [
                vue.createElementVNode("view", { class: "title-bar" }, [
                  vue.createElementVNode("view", { class: "title-dot" }),
                  vue.createElementVNode("text", { class: "title-text" }, "达人推荐")
                ])
              ]),
              vue.createCommentVNode(" 列表部分 "),
              vue.createElementVNode("view", { class: "list-container" }, [
                vue.createElementVNode("view", { class: "list-item" }, [
                  vue.createElementVNode("view", { class: "item-left" }, [
                    vue.createElementVNode("image", {
                      src: "https://static.bcmcdn.com/coco/player/unstable/rkKh-frZ1x.image/png?hash=Fn2McqoXcAkZBzSiIvslA6h6KX_m",
                      mode: "aspectFill",
                      class: "item-image"
                    })
                  ]),
                  vue.createElementVNode("view", { class: "item-right" }, [
                    vue.createElementVNode("view", { class: "username" }, "用户名"),
                    vue.createElementVNode("view", { class: "badges" }, [
                      vue.createElementVNode("text", { class: "badge admin" }, "管理员"),
                      vue.createElementVNode("text", { class: "badge top" }, "置顶"),
                      vue.createElementVNode("text", { class: "badge king" }, "自律之王")
                    ]),
                    vue.createElementVNode("view", { class: "content" }, "测试1"),
                    vue.createElementVNode("view", { class: "sub-content" }, "文字内容2")
                  ])
                ])
              ])
            ])
          ],
          4
          /* STYLE */
        ),
        vue.createCommentVNode(" 底部导航栏 "),
        vue.createElementVNode("view", { class: "tab-bar" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.tabBarList, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "tab-item",
                key: index,
                onClick: ($event) => $options.switchTab(index),
                id: item.name === "+" ? "center-btn" : `tab-item-${index}`
              }, [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["tab-icon", { "add-btn": item.name === "+" }])
                  },
                  [
                    item.name === "+" ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 0,
                      class: "plus-icon"
                    }, "+")) : (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 1,
                        class: vue.normalizeClass(["iconfont", item.icon])
                      },
                      null,
                      2
                      /* CLASS */
                    ))
                  ],
                  2
                  /* CLASS */
                ),
                item.name !== "+" ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "tab-text"
                  },
                  vue.toDisplayString(item.name),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ], 8, ["onClick", "id"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "C:/Users/97945/Desktop/星恬虚拟校园(重建版)/pages/index/index.vue"]]);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/index/index", PagesIndexIndex);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/97945/Desktop/星恬虚拟校园(重建版)/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
