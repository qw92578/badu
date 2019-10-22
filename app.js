/**
 * @file app.js
 * @author swan
 */

/* globals swan */

// App({
//     onLaunch(options) {
//         // do something when launch
//         // 引导添加，参见文档： http://smartprogram.baidu.com/docs/design/component/guide_add/
//         if (swan.canIUse('showFavoriteGuide')) {
//             swan.showFavoriteGuide({
//                 type: 'bar',
//                 content: '一键关注小程序',
//                 success(res) {
//                     console.log('关注成功：', res);
//                 },
//                 fail(err) {
//                     console.log('关注失败：', err);
//                 }
//             });
//         }
//     },
//     onShow(options) {
//         // do something when show
//     },
//     onHide() {
//         // do something when hide
//     }
// });
App({
    data: 2,

    // 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
    onLaunch(res) {

    },

    // 当小程序启动，或从后台进入前台显示，会触发 onShow
    onShow(res) {

    },

    // 当小程序从前台进入后台，会触发 onHide
    onHide(res) {

    },

    // 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
    onError(res) {
        console.log("错误信息：" + res);
    },

    // 小程序要打开的页面不存在时触发，会带上页面信息回调
    onPageNotFound(res) {
        // 如果将要跳转到的页面属于 tabbar 的某一页面，请使用 swan.switchTab 进行跳转
        // Do something
        // 页面不存在时，默认跳转到首页
        swan.redirectTo({
            url: 'pages/index/index'
        });
    },
    globalData: 'This is global data',

    onShow() {
        console.log('normal onShow');
    }
});

// App.after可以增加APP级的切面，触发的时机是在所拦截的对应生命周期方法执行之后。
App.after({
    methods: {
        onShow() {
            console.log('after app onshow');
        }
    }
});