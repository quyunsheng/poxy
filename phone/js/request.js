// axios全局配置
axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'http://www.fjygw.cn/'; 
axios.defaults.baseURL = 'http://192.168.3.236:9095/'; 
// 添加响应拦截器
axios.interceptors.response.use(function(response) {
	if (!(response.data.code == 0 || response.data.code == 7)) {
		var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
		if (reg.test(response.data.message)) {
			alert(response.data.message)
		} else {
			alert('服务器繁忙！')
		}
	}
	// 对响应数据做点什么
	return response.data;
}, function(error) {
	// 对响应错误做点什么
	return Promise.reject(error);
});
//返回
function goBack() {
	document.referrer === '' ? window.location.href = 'index.html' : window.history.back();
	return false;
}
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return decodeURIComponent(r[2]);
	return null;
}
var tkn = 'token'; //token
var newsId = 'newsId'; //新闻id
var goodsId = 'goodsId'; //商品详情id
var shopsId = 'shopsId'; //店铺id(跳转店铺)
var orderId = 'orderId'; //订单id
var classifyCode = 'classifyCode'; //商城classifyCode(商城分类导航)
var storeName = 'storeName'; //商城跳转选中分类名
var shopRemId = 'shopRemId'; //生成订单列表
var comtId = 'comtId'; //跳转交流详情页id
var workId = 'workId'; //跳转交流详情页id
var typeModel = 'typeModel'; //商品种类
var searchStore = 'searchStore'; //全局搜索店铺
var searchGood = 'searchGood'; //全局搜索产品
