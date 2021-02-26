// pages/login/login.js
Page({
    /**
   * 页面的初始数据
   */
  data: {
    city:'',
    avatarUrl:'',
    country:'',
    nickName:'',
    province:''
  },
login:function(){
 wx.login({
   success:function(res){
     console.log(res.code)
     wx.request({
      url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_co', //仅为示例，并非真实的接口地址
      data: {code:res.code},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
      }
    })
   }
 })
},
// 验证登录是否过期
checksession:function(){
 wx.checkSession({
   success: (res) => {
       wx.showToast({
         title:"登录没有过期"
       })
   },
   fail:(res)=>{
     wx.showToast({
       title: '登录已过期',
     })
    //  再次调用wx.login({})
    wx.login({
      success:function(res){
        console.log(res.code)
        wx.request({
         url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_co', //仅为示例，并非真实的接口地址
         data: {code:res.code},
         header: {
           'content-type': 'application/json' // 默认值
         },
         success (res) {
           console.log(res.data)
         }
       })
      }
    })
   }
 })
},
// 获取用户信息
info:function(){
  var that=this;
  wx.getUserInfo({
    success:function(res){
       console.log(res)
       var city=res.userInfo.city;
       var avatarUrl=res.userInfo.avatarUrl;
       var country=res.userInfo.country;
       var nickName=res.userInfo.nickName;
       var province=res.userInfo.province;
      //  发送数据
       that.setData({
        city:city,
        avatarUrl:avatarUrl,
        country:country,
        nickName:nickName,
        province:province
       })
    }
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})