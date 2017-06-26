# cmsApi 
# 接口版本 version 2.0

## 发送留言
```javascript
rose.ajax.sendMessage(data,successCallback,errorCallback);
```

### 参数说明
#### data
```cmd
data // 发送给后台的参数
{
  linkman : '',//联系人 [必填]
  phone : '',//电话 [必填]
  email : '',//邮箱 [选填]
  content : ''//留言内容 [选填]
}
```
