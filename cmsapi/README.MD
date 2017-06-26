# cmsApi 
# 接口版本 version 2.0

## 发送留言
```javascript
rose.ajax.sendMessage(data,successCallback,errorCallback);
```

### 参数说明
#### `data` 传给后台的数据
```cmd
{
  linkman : '',//联系人 [必填]
  phone : '',//电话 [必填]
  email : '',//邮箱 [选填]
  content : ''//留言内容 [选填]
}
```
#### `successCallback` 成功后的回掉函数 接受后台返回的数据
#### `errorCallback` 失败后的回掉函数 接受失败原因
