//index.js
const QR = require('../../utils/weapp-qrcode.js')
const createQrCode = require('../../utils/createQrCode.js')
// 文件引用
var base64encode = require('../../utils/base64encode.js');
const { hexCharCodeToStr } = require("../../utils/hexCharCodeToStr.js");
//获取应用实例
const app = getApp()

Page({
  data: {
   },
   
  onLoad: function () {
    createQrCode.createQrCode(QR, "MNOPQRSTUV",'myQrcode')
base64encode.base64encode(hexCharCodeToStr('所需处理的二维码信息'))
    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    
  }
})
