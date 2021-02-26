// 适配不同屏幕大小的canvas
function setCanvasSize() {
	var size = {};
	try {
		var res = wx.getSystemInfoSync();
    //不同屏幕下canvas的适配比例；设计稿是750宽
		var scale = 1000 / 550;
		var width = res.windowWidth / scale;
		var height = width;//canvas画布为正方形
		size.w = width;
		size.h = height;
	} catch (e) {
		// Do something when catch error
		console.log("获取设备信息失败" + e);
	}
	return size;
}

// 生成二维码
function createQrCode(QR, url, canvasId) {
	var size = setCanvasSize();
	//调用插件中的draw方法，绘制二维码图片
	QR.drawQrcode({
		width: size.w,
		height: size.h,
		canvasId: canvasId,
		// ctx: wx.createCanvasContext('myQrcode'),
		text: url,
		// v1.0.0+版本支持在二维码上绘制图片
		image: {
      // /images/xlsn0w.png
      imageResource: '',
			dx: (size.w - 40) / 2,
			dy: (size.h - 40) / 2,
			dWidth: 40,
			dHeight: 40
		}
	});
}
module.exports = {
	createQrCode: createQrCode
}