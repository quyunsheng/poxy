// url配置
let allUrl = {
	getUser:'yungangwan_app/user/current_user',//获取用户信息
	getTitle : "yungangwan_app/product/classify_children" ,//获取分类列表,
	getChildrenList : "yungangwan_app/exchange/exchange_page", //获取子分类列表
	getComm:"yungangwan_app/exchange/comment_page", //获取评论
	// getPage:"" ,//上传图片
	upData:"yungangwan_app/exchange/save_exchange" ,//发布话题
	detailsTitle:"yungangwan_app/exchange/detail_exchange" ,//技术交互详情上面内容
	comment_list:"yungangwan_app/exchange/comment_page" ,//评论分页列表
	up_reply:"yungangwan_app/exchange/save_comment"  ,//添加评论
	del_comment:"yungangwan_app/exchange/del_my_comment" ,//删除我的评论
	all_jsjh:"yungangwan_app/exchange/my_exchange_page"  ,//我的技术交互所有
	del_jsjh:"yungangwan_app/exchange/del_my_exchange" ,//删除我的技术交互
	release_job:"yungangwan_app/project_labour/add" ,//添加工程劳务
	get_labour:"yungangwan_app/project_labour/list" ,//分页获取所有或我的劳务
	del_labour:"yungangwan_app/project_labour/delete"  ,//删除工程劳务
	details_labour:"yungangwan_app/project_labour/detail" ,//工程劳务详情
	article_list:"yungangwan_app/article/list"   ,//article总接口
	details_page:"yungangwan_app/article/detail" ,//新闻/咨询详情页
	about_us:"yungangwan_app/config/getByKey"  ,//关于我们页面
	mageAbout:'yungangwan_app/config/getByKey',//客服电话
	/* 移动 */
	area: 'yungangwan_app/area/area_list',
	addShipAddress: 'yungangwan_app/user/add_ship_address',
	changeAddress:'yungangwan_app/user/ship_address_detail',
	yesChangeAddress:'yungangwan_app/user/edit_ship_address',
	delAddress:'yungangwan_app/user/del_ship_address',
	getPointList:'yungangwan_app/user/ship_address_list',
};