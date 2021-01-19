// axios全局配置
axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'http://www.fjygw.cn/'; 
axios.defaults.baseURL = 'http://117.50.137.10:8090/'; 
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
