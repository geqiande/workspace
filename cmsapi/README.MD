# cmsApi 
# 接口版本 version 2.0
## 返回状态码统一 code:  0失败，1成功
#
# 目录 
### [1.发送留言](#发送留言) 
### [2.获取网站配置](#获取网站配置)
### [3.获取网站导航配置](#获取网站导航配置)
### [4.获取轮播图配置](#获取轮播图配置)
### [5.获取友情链接配置](#获取友情链接配置)
### [6.获取在线客服配置](#获取在线客服配置)
### [7.获取招聘信息](#获取招聘信息)
### [8.获取产品信息](#获取产品信息)
#
## 发送留言
```javascript
rose.ajax.sendMessage(data,successCallback,errorCallback);
```

### 参数说明
#### `data` 传给后台的数据
```cmd
{
  linkman : String,//联系人 [必填]
  phone : String,//电话 [必填]
  email : String,//邮箱 [选填]
  content : String//留言内容 [选填]
}
```
#### `successCallback` 成功后的回掉函数 接受后台返回的数据,函数接收参数格式
```javascript
 {
  code: 1,
  msg: "发送成功"
 }
```
#### `errorCallback` 失败后的回掉函数 接受失败原因

### 使用实例
```javascript
	rose.ajax.sendMessage({
		linkman : 'millent',
		phone : '12345678911',
		email : '123@qq.com',
		content : 'show me my life'
	},function(data){
		console.log(data)
	},function(error){
		console.log(error)
	})
```


## 获取网站配置
```javascript
rose.ajax.getConfig(successCallback,errorCallback);
```
#### `successCallback` 成功后的回掉函数 接受后台返回的数据,函数接收参数格式
```javascript
{
	tx_weburl : '网站网址 ',
	tx_webname : '网站名称 ',
	tx_logo : '网站LOGO ',
	tx_ico : '网站ico ',
	tx_img_x : 'QQ1 ',
	tx_img_y : 'QQ2 ',
	tx_keywords : '网站关键词 ',
	tx_description : '网站描述 ',
	tx_linkname : '公司名称 ',
	tx_footright : '版权信息 ',
	tx_footaddress : '邮编 ',
	tx_foottel : '服务电话 ',
	tx_footother : '售后电话 ',
	tx_foottext : '传真 ',
	tx_footstat : '公司介绍 ',
	tx_fd_fromname : '技术支持 ',
	tx_fd_usename : 'E-mail ',
	tx_mapcontents : '公司位置 '
}
```
#### `errorCallback` 失败后的回掉函数 接受失败原因


## 获取网站导航配置
```javascript
rose.ajax.getNav(data,successCallback,errorCallback);
```
### 参数说明
#### `data` 传给后台的数据
```cmd
{
  position : String,//导航位置 [选填]
  bigclass : String,//导航所属大类 [选填]
  id : String,//导航id [选填]
}
```
#### `successCallback` 成功后的回掉函数 接受后台返回的数据,函数接收参数格式
```javascript
[
	{
		id : '栏目的ID',
		name : '栏目名称',
		keywords : '栏目关键词',
		description : '栏目简短描述',
		indeximg : '标识图片',
		columnimg : '栏目图片',
		bigclass : '上级栏目ID',
		module : '栏目等级',
		out_url : '外部模块链接URL',
		nav : '头部导航显示',
		samefile : '底部导航显示',
		display : '是否显示'
	}
]
```
#### `errorCallback` 失败后的回掉函数 接受失败原因

## 获取轮播图配置
```javascript
rose.ajax.getFlash(successCallback,errorCallback)
```
#### `successCallback` 成功后的回掉函数 接受后台返回的数据,函数接收参数格式
```javascript
[
	{
		id : '图片ID',
		img_title : '图片名称',
		img_path : '图片路径',
		img_link : '图片链接地址'
	}
]
```
#### `errorCallback` 失败后的回掉函数 接受失败原因

## 获取友情链接配置
```javascript
rose.ajax.getLink(successCallback,errorCallback);
```
### 参数说明
#### `successCallback` 成功后的回掉函数 接受后台返回的数据,函数接收参数格式
```javascript
[
	{
		id : '链接ID',
		webname : '网站名称',
		weburl : '网站链接'
	}
]
```
#### `errorCallback` 失败后的回掉函数 接受失败原因

## 获取在线客服配置
```javascript
rose.ajax.getOnline(data,successCallback,errorCallback);
```
### 参数说明
#### `data` 传给后台的数据
```cmd
{
  class : int //1为客服，二为代理
}
#### `successCallback` 成功后的回掉函数 接受后台返回的数据,函数接收参数格式
```javascript
[
	{
		id : '信息ID',
		name : '客服名称',
		no_order : '排序',
		qq : 'QQ号码',
		msn : 'MSN',
		taobao : '淘宝帐号',
		alibaba : '阿里巴巴帐号',
		skype : '类别',
		lang : '语言',
		addtime : '添加时间'
	}
]
```
#### `errorCallback` 失败后的回掉函数 接受失败原因

## 获取招聘信息
```javascript
rose.ajax.getJob(data,successCallback,errorCallback);
```

### 参数说明
#### `data` 传给后台的数据
```cmd
{
  id : int //招聘id
}
```
#### `successCallback` 成功后的回掉函数 接受后台返回的数据,函数接收参数格式
```javascript
 [
 	{

		id : '信息ID',
		position : '职位名称',
		place : '工作地点',
		deal : '职位类型',
		useful_life : '人数需求',
		content : '招聘内容'

	 }
 ]
```
#### `errorCallback` 失败后的回掉函数 接受失败原因

## 获取产品信息

### 参数说明
#### `data` 传给后台的数据
```cmd
{
	class : '栏目等级', 
	pageNum : '分页数',
	pageSize : '页条数',
	com_ok : '是否推荐', 
	id : '产品ID'
}
```
#### `successCallback` 成功后的回掉函数 接受后台返回的数据,函数接收参数格式
```javascript
//详情见 http://www.hntxrj.com/txal/meidi/admin/doc/Version2.1/cmsinterfaceintroduce.htm#tx_product
```
#### `errorCallback` 失败后的回掉函数 接受失败原因

