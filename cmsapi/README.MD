# cmsApi 
# 接口版本 version 2.0
## 返回状态码统一 code:  0失败，1成功
#
#
#
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
