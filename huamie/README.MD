# 花蔑项目规划
## 目录结构
```javascript
	${root} : 根目录
		|-css : css文件夹
			|- ...
		|-fonts : 字体图标文件夹
			|- ...
		|-icon : ui元素图文件夹
			|- ...
		|-images : 图片文件夹
			|- ...
		|-js : javascript文件夹
			|- ...
		|-plus : js插件文件夹
			|- ...
		|-theme : css主题文件夹
			|-boy.css : 男生主题
			|-girl.css : 女生主题
		|-index.html : 入口html文件		
```
## 所用技术


## 公共静态代码

### 公共html 通用代码

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="renderer" content="webkit">
    <meta name="keywords" content="">
    <meta name="description" content="">
    <link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="./css/swiper.min.css">
    <link rel="stylesheet" type="text/css" href="./css/public.css">
    <link rel="stylesheet" type="text/css" href="./theme/girl.css"> <!-- 如果是男孩的话渲染 boy.css(づ￣3￣)づ╭～ -->
    <title>主页</title>
    <!--[if lt IE 9]>
		<script src="./plus/html5.js"></script>
		<script src="./plus/respond.min.js"></script>
	<![endif]-->
</head>
<body>

  
  
  
  

</body>
<script type="text/javascript" src="./plus/jquery.2.2.0.min.js"></script>
<script type="text/javascript" src="./plus/bootstrap.min.js"></script>
<script type="text/javascript" src="./plus/layer.js"></script>
<script type="text/javascript" src="./js/public.js"></script>
</html>

```

### 头部代码

```html

    <div class="header">
        <!-- 头部 -->
        <div class="container-fluid header-top-bar overflow-hidden">
            <div class="container ani1000ms">
                <div class="full-wrap clear">
                    <div class="welcome-text pull-left">
                        <span class="visible-lg-block pull-left">欢迎来到花蔑小说网</span>
                        <span class="chose-style">
							<a href="#" class="text-gril">女生</a><span class="hack-line">|</span><a href="#" class="text-boy">男生</a>
                        </span>
                    </div>
                    <div class="lovewebsite pull-right">
                        <div class="lovewebsite-right-menu pull-right visible-lg-block">
                            <a href="#" id="jiarushoucang">加入收藏</a><span class="hack-line">|</span><a href="#" id="sheweishouye">设为首页</a>
                        </div>
                        <div class="lovewebsite-left-center pull-right">
                            <a href="javascript:;"><span class="iconfont icon-sousuo_sousuo header-search-object"></span></a>
                        </div>
                        <div class="lovewebsite-left-menu pull-right">
                            <a href="#"><span class="iconfont icon-denglu"></span>登陆</a>
                            <a href="#"><span class="iconfont icon-zhuce"></span>注册</a>
                        </div>
                    </div>
                </div>
                <div class="full-wrap other-two">
                    <form class="form">
                        <input type="text" class="col-mi-8 s-input" placeholder="请输入">
                        <button type="submit" class="btn btn-default">
                            <span class="iconfont icon-sousuo_sousuo"></span>
                        </button>
                        <a href="javascript:;" class="btn btn-success pull-right header-search-object"><span class="iconfont icon-close"></span></a>
                    </form>
                </div>
            </div>
        </div>
        <div class="container-fluid header-top-nav">
            <div class="container">
                <nav class="navbar navbar-default home-nav" role="navigation">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-collapse">
                                <span class="sr-only">切换导航</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand-logo" href="#">
                                <img src="./icon/logo.png" alt="logo">
                            </a>
                        </div>
                        <div class="collapse navbar-collapse" style="position: relative;" id="example-navbar-collapse">
                            <ul class="nav navbar-nav index-nav">
                                <li class="nav-first-show item visible-xs-block">
                                    <ul class="zuozhe-menu clear">
                                        <li>
                                            <a href="#">
                                                <span class="iconfont icon-pen"></span>作者中心
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span class="iconfont icon-chongzhi"></span>充值
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span class="iconfont icon-fuli"></span>福利
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="item"><a href="#">首页</a></li>
                                <li class="item"><a href="#">古代言情</a></li>
                                <li class="item"><a href="#">现代言情</a></li>
                                <li class="item"><a href="#">免费言情</a></li>
                                <li class="item"><a href="#">排行榜</a></li>
                                <li class="item"><a href="#">会员中心</a></li>
                            </ul>
                            <ul class="zuozhe-menu visible-lg-block">
                                <li>
                                    <a href="#">
                                        <span class="iconfont icon-pen"></span>作者中心
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="iconfont icon-chongzhi"></span>充值
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="iconfont icon-fuli"></span>福利
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <!-- 头部 -->
    </div>

```

### 尾部代码

```html

    <div class="footer">
        <div class="section-item visible-lg findbook">
            <div class="container">
                <form class="form-inline">
                    <div class="form-group">
                        <label>
                            找到美文，一搜即现
                        </label>
                    </div>
                    <div class="form-group">
                        <select class="form-control">
                            <option>都市</option>
                            <option>书本1</option>
                            <option>书本2</option>
                            <option>书本3</option>
                            <option>书本4</option>
                        </select>
                    </div>
                    <div class="checkbox">
                        <select class="form-control">
                            <option>连载</option>
                            <option>书本1</option>
                            <option>书本2</option>
                            <option>书本3</option>
                            <option>书本4</option>
                        </select>
                    </div>
                    <div class="checkbox">
                        <select class="form-control">
                            <option>免费</option>
                            <option>书本1</option>
                            <option>书本2</option>
                            <option>书本3</option>
                            <option>书本4</option>
                        </select>
                    </div>
                    <div class="checkbox">
                        <select class="form-control">
                            <option>人气</option>
                            <option>书本1</option>
                            <option>书本2</option>
                            <option>书本3</option>
                            <option>书本4</option>
                        </select>
                    </div>
                    <div class="checkbox">
                        <select class="form-control">
                            <option>全部</option>
                            <option>书本1</option>
                            <option>书本2</option>
                            <option>书本3</option>
                            <option>书本4</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-danger">立即找书</button>
                    <label style="color: #a6a6a6;">
                        | 大家都在搜：
                    </label>
                    <label>
                        关门放四爷
                    </label>
                    <label>
                        我的野蛮凤姐
                    </label>
                </form>
            </div>
        </div>
        <div class="beian-pc visible-lg">
            <div class="container">
                <div class="illent clear">
                    <span class="big-text pull-left">友情链接：</span>
                    <ul class="link pull-left">
                        <li class="item">
                            <a href="#">言情小说</a>
                        </li>
                        <li class="item">
                            <a href="#">言情小说</a>
                        </li>
                        <li class="item">
                            <a href="#">言情小说</a>
                        </li>
                        <li class="item">
                            <a href="#">言情小说</a>
                        </li>
                        <li class="item">
                            <a href="#">言情小说</a>
                        </li>
                        <li class="item">
                            <a href="#">言情小说</a>
                        </li>
                        <li class="item">
                            <a href="#">言情小说</a>
                        </li>
                        <li class="item">
                            <a href="#">言情小说</a>
                        </li>
                        <li class="item">
                            <a href="#">言情小说</a>
                        </li>
                        <li class="item">
                            <a href="#">言情小说</a>
                        </li>
                        <li class="item">
                            <a href="#">言情小说</a>
                        </li>
                    </ul>
                </div>
                <p class="text-center says">作者发布小说作品时，请遵守国家互联网信息管理办法规定。本站所收录小说作品、社区话题、书库评论均属其个人行为，不代表本站立场。</p>
                <p class="text-center beian"><a href="#">京公网安备 11010502005190号</a></p>
            </div>
        </div>
        <div class="beian-phone hidden-lg">
            <p class="text-center beian"><a href="#">京公网安备 11010502005190号</a></p>
        </div>
    </div>

```
## 公共js使用

### jQuery.min.js v2.2.0
```html
<script type="text/javascript" src="./plus/jquery.2.2.0.min.js"></script>
```

```javascript
	使用方法  jquery.com 
```
### bootstrap.min.js v3.3.7

```html
<script type="text/javascript" src="./plus/bootstrap.min.js"></script>
```
```javascript
	使用方法  http://v3.bootcss.com 
```
### layer.min.js v2.0

```html
<script type="text/javascript" src="./plus/layer.js"></script
```
```javascript
	//使用方法  
	
	//信息提示 确认消失
	rose.console.message(content, fn, btn);
	
	//信息提示 自动消失
	rose.console.log(content, time);
	
	//普通确认框
	rose.console.confirm(content, fn,fn2, btn);
	
	//底部消息框
	rose.console.bottomMsg(content);
	
	//底部确认框
	rose.console.bottomConfirm(content, fn,fn2, btn);
	
	//加载框
	rose.console.load(content); //[return close function]
		//例子
		var a = rose.console.load('加载中...');
		a(); //关闭
		
```

### swiper.min.js v3.4.2

```html
<script type="text/javascript" src="./plus/swiper.min.js"></script>
```
```javascript
	使用方法  http://www.swiper.com.cn/
```

