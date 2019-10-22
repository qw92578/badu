/**
 * @file index.js
 * @author swan
 */
const app = getApp()

Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: swan.canIUse('button.open-type.getUserInfo')
    },
    onLoad() {
        // 监听页面加载的生命周期函数
    },
    getUserInfo(e) {
        swan.login({
            success: () => {
                swan.getUserInfo({
                    success: (res) => {
                        this.setData({
                            userInfo: res.userInfo,
                            hasUserInfo: true
                        });
                    },
                    fail: () => {
                        this.setData({
                            userInfo: e.detail.userInfo,
                            hasUserInfo: true
                        });
                    }
                });
            },
            fail: () => {
                swan.showModal({
                    title: '未登录',
                    showCancel: true
                });
            }
        });
    }
})


Page({
    data: {},
    onLoad: function () {
        console.log('app.json 中的prefetches预请求配置列表 优先当前页面加载');
        swan.request({
            url: 'http://m.baidu.com?id=1',
            // usePrefetchCache:true, 用于缓存
            success: function (res) {
                console.log('请求回来的结果：', res);
            }
        });
    }
});