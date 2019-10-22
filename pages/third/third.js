//引用工具类   从当前目录到项目根目录下递归寻找node_modules文件夹中是否存在a.js，没有则报错；
var util = require('./util');

//获取全局变量
var app = getApp();
app.data++;
console.log(app.data);

Page({

    // 页面的初始数据
    data: {
        name: 'test',
        person: [
            {
                age: 18
            },
            {
                age: 19
            }
        ],
        is4G: false,
        isWifi: false,

        switchDuration: '测试滑动值'
    },
    //绑定事件
    loadMore: function () {
        console.log('加载更多事件 被点击了 打开网页wwww.baidu.com');
    },

    /**
     * 事件对象
     */
    viewtap: function (event) {
        // console.log('value is:', event.currentTarget.dataset.swan);// 输出1
        // console.log('value is:', event.Touch.dataset.pageX );// 输出1
    },

    //点击改变值
    setName: function () {
        this.setData({ me: "点击后的值为：testName" });
    },

    changeSwitchDuration: function () {
        console.log('changeSwitchDuration');
    },

    // onPullDownRefresh() {
    //     console.log("我下拉了、、、、、");
    //     // swan.startPullDownRefresh();s

    // },

    //刷新函数 和下拉一样效果
    startPullDownRefresh: function () {
        swan.startPullDownRefresh({
            success: res => {
                console.log("下拉刷新成功");
            },
            fail: err => {
                console.log("下拉失败");
            }
        }
        );
    },

    //点击停止刷新
    stopPullDownRefresh: function () {
        swan.stopPullDownRefresh({
            success: res => {
                console.log('stopPullDownRefresh success');
            },
            fail: err => {
                console.log('stopPullDownRefresh fail', err);
            }
        });
    },

    // 用户滑动事件
    onPageScroll: function (obj) {
        console.log("我滑动了" + obj.scrollTop);

    },

    //用户分享该页面
    onShareAppMessage: function (res) {
        if (res.from === 'button') {
            console.log(res.target + "页面内部妆发"); // 来自页面内转发按钮
        } else {
            console.log(res.target + "顶部分享");//来自顶部的分享
        }
        return {
            title: '智能小程序示例',
            content: '世界很复杂，百度更懂你',
            path: '/pages/openShare/openShare?key=value',
            success: function () {
                console.log("haha，分享成功");
            },
            complete: function () {
                console.log("都要执行");
            }
        };
    },

    //切换tab的时候
    onTabItemTap(obj) {
        console.log("点击了" + obj.pagePath + ", " + obj.text + ", " + obj.index + ", " + getCurrentPages())
    },

    onLoad: function () {
        util.logName();
        util.logAge();

    },


    // 点击弹框
   tapHandle(e) {
       swan.showToast(e.currentTarget.dataset.say);
   }





});
