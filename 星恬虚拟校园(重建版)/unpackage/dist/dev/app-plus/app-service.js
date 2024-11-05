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
  const _imports_0 = "/assets/星挑战.db6ffb94.png";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
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
        currentTab: 0
      };
    },
    methods: {
      switchNav(index) {
        this.currentNav = index;
      },
      switchTab(index) {
        this.currentTab = index;
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "container" }, [
          vue.createCommentVNode(" 导航栏部分 "),
          vue.createElementVNode("view", { class: "nav-bar" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.navItems, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: vue.normalizeClass(["nav-item", { active: $data.currentNav === index }]),
                  onClick: ($event) => $options.switchNav(index)
                }, vue.toDisplayString(item), 11, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
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
                  src: _imports_0,
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
        ]),
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
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "C:/DownlodsAAA/HBuilderX/软件项目/星恬虚拟校园(重建版)/pages/index/index.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
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
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/DownlodsAAA/HBuilderX/软件项目/星恬虚拟校园(重建版)/App.vue"]]);
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
