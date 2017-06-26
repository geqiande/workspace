;(function (root,$,plus) {
	
	root.rose={
		url : 'http://www.hntxrj.com/txal/meidi/',
		util : {//在这里拓展工具方法
			random : function(lowValue,highValue){
		        var choice=highValue-lowValue+1;
		        return Math.floor(Math.random()*choice+lowValue);
		    },
		    getReauest : function() {   
			   var url = location.search; //获取url中"?"符后的字串
			   var theRequest = new Object();   
			   if (url.indexOf("?") != -1) {   
			      var str = url.substr(1);   
			      strs = str.split("&");   
			      for(var i = 0; i < strs.length; i ++) {   
			         theRequest[strs[i].split("=")[0]]=decodeURIComponent(strs[i].split("=")[1]);   
			      }   
			   }   
			   return theRequest;   
			},
			isGoodObj:function(str){
				if(typeof str == 'string'){
					var jdata = '';
					try{
						jdata = JSON.parse(str)
					}catch(e){
						jdata = [];
					}
					return jdata;
				}else{
					return str;
				}
			},
			extends : function(c,p){
				for(var i in p){
					c[i] = p[i];
				}
				return c;
			}
		},
		ajax : {//在这里封装ajax
			sendMessage : function(parmesData,successCallback,errorCallback){
				$.ajax({
					url : rose.url + 'admin/model/home_interface.php?action=tx_message',
					type : 'post',
					data : {
						useinfo : parmesData.linkman,
						phone : parmesData.phone,
						name : parmesData.email || '',
						lang : parmesData.content || ''
					},
					success : function(data){
						if($.trim(data) == '1'){
							successCallback({
								code : 1,
								msg : '发送成功'
							})
						}else{
							successCallback({
								code : 0,
								msg : '发送失败'
							})
						}
					},
					error : function(errorData){
						errorCallback && errorCallback(errorData);
					}
				})
			},
			getConfig : function(successCallback,errorCallback){
				$.ajax({
					url : rose.url + 'admin/model/home_interface.php?action=tx_config',
					success : function(data){
						successCallback(rose.util.isGoodObj(data));
					},
					error : function(errorData){
						errorCallback && errorCallback(errorData);
					}
				})
			},
			getNav : function(json,successCallback,errorCallback){
				$.ajax({
					url : rose.url + 'admin/model/home_interface.php?action=tx_column',
					data : {
						position : json.position || '',
						bigclass : json.bigclass || '',
						id : json.id || ''
					},
					success : function(data){
						successCallback(rose.util.isGoodObj(data));
					},
					error : function(errorData){
						errorCallback && errorCallback(errorData);
					}
				})
			},
			getFlash : function(successCallback,errorCallback){
				$.ajax({
					url : rose.url+'admin/model/home_interface.php?action=tx_flash',
					success : function(data){
						successCallback(rose.util.isGoodObj(data));
					},
					error : function(errorData){
						errorCallback && errorCallback(errorData);
					}
				})
			},
			getLink : function(successCallback,errorCallback){
				$.ajax({
					url : rose.url+'admin/model/home_interface.php?action=tx_link',
					success : function(data){
						successCallback(rose.util.isGoodObj(data));
					},
					error : function(errorData){
						errorCallback && errorCallback(errorData);
					}
				})
			},
			getOnline:function(json,successCallback,errorCallback){
				$.ajax({
					url : rose.url+'admin/model/home_interface.php?action=tx_online ',
					data : {
						class : json.class || 1
					},
					success : function(data){
						successCallback(rose.util.isGoodObj(data));
					},
					error : function(errorData){
						errorCallback && errorCallback(errorData);
					}
				})
			},
			getJob : function(json,successCallback,errorCallback){
				$.ajax({
					url : rose.url+'admin/model/home_interface.php?action=tx_job',
					data : {
						id : json.id || ''
					},
					success : function(data){
						successCallback(rose.util.isGoodObj(data));
					},
					error : function(errorData){
						errorCallback && errorCallback(errorData);
					}
				})
			},
			getProduct : function(json,successCallback,errorCallback){
				var c = {
					'class' : '', 
					pageNum : '',
					pageSize : '',
					com_ok : '', 
					id : '',
				}
				$.ajax({
					url : rose.url+'admin/model/home_interface.php?action=tx_product',
					data : rose.util.extends(c,json),
					success : function(data){
						successCallback(rose.util.isGoodObj(data));
					},
					error : function(errorData){
						errorCallback && errorCallback(errorData);
					}
				})
			}
		}
	};

	(function(){
		var metaContent = $(document.head).find('meta[name="description"]');
		var metaKeyword = $(document.head).find('meta[name="keywords"]');
		rose.ajax.getConfig(function(data){
			if(metaContent.length > 0){
				metaContent.attr('content',data.tx_description);
			}else{
			    $(document.head).append('<mate name="description" content="'+data.tx_description+'">')
			}

			if(metaKeyword.length > 0){
				metaContent.attr('content',data.tx_keywords );
			}else{
			    $(document.head).append('<mate name="keywords" content="'+data.tx_keywords +'">')
			}	
		})
	})();

	/* Fomate Time */
	Date.prototype.Format = function (fmt) { //author: meizz
	    var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	    };
	    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	    for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	    return fmt;
	}


})(window,jQuery,(function(){

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));
	
})());
