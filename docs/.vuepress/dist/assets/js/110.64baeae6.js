(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{166:function(t,e,r){"use strict";r.r(e);var _=r(0),a=Object(_.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),r("p",[t._v("发起一个请求。")]),t._m(4),t._m(5),r("p",[t._v("请求的配置选项，支持以下配置：")]),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"http://dotwe.org/vue/80b21a0fce98acdffad96c57b2eadd1d",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP method 示例"),r("OutboundLink")],1)])]),r("li",[r("p",[r("a",{attrs:{href:"http://dotwe.org/vue/6dd65122144d9ad26594c0f900c75cd4",target:"_blank",rel:"noopener noreferrer"}},[t._v("创建文章"),r("OutboundLink")],1),t._v("，常见应用场景，发送 POST 请求。")]),r("IPhoneImg",{attrs:{imgSrc:"https://img.alicdn.com/tfs/TB1UWA7n4TpK1RjSZFGXXcHqFXa-750-1334.gif"}})],1),r("li",[r("p",[r("a",{attrs:{href:"http://dotwe.org/vue/892bd1c977b61762baca8e02a65b6d97",target:"_blank",rel:"noopener noreferrer"}},[t._v("热门动画列表"),r("OutboundLink")],1),t._v("，常见应用场景，通过 GET 请求获取数据。")]),r("IPhoneImg",{attrs:{imgSrc:"https://img.alicdn.com/tfs/TB1.Bg6nZbpK1RjSZFyXXX_qFXa-750-1334.gif"}})],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"stream"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stream","aria-hidden":"true"}},[this._v("#")]),this._v(" stream")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("stream")]),this._v(" 模块提供了基本的网络请求能力，例如 GET 请求、POST 请求等，用于在组件的生命周期内与服务端进行交互。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"fetch-options-callback-progresscallback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fetch-options-callback-progresscallback","aria-hidden":"true"}},[this._v("#")]),this._v(" fetch(options, callback[,progressCallback])")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 参数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"options-object"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options-object","aria-hidden":"true"}},[this._v("#")]),this._v(" options {Object}")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("属性")]),r("th",[t._v("说明")]),r("th",[t._v("类型")]),r("th",[t._v("是否必选")])])]),r("tbody",[r("tr",[r("td",[r("code",[t._v("method")])]),r("td",[t._v("HTTP 请求方法，值为 "),r("code",[t._v("GET")]),t._v("/"),r("code",[t._v("POST")]),t._v("/"),r("code",[t._v("PUT")]),t._v("/"),r("code",[t._v("DELETE")]),t._v("/"),r("code",[t._v("PATCH")]),t._v("/"),r("code",[t._v("HEAD")])]),r("td",[t._v("string")]),r("td",[t._v("必选")])]),r("tr",[r("td",[r("code",[t._v("url")])]),r("td",[t._v("请求的 URL")]),r("td",[t._v("string")]),r("td",[t._v("必选")])]),r("tr",[r("td",[r("code",[t._v("headers")])]),r("td",[t._v("HTTP 请求头")]),r("td",[t._v("Object")]),r("td",[t._v("可选")])]),r("tr",[r("td",[r("code",[t._v("type")])]),r("td",[t._v("响应类型："),r("code",[t._v("json")]),t._v("，"),r("code",[t._v("text")]),t._v(" 或是 "),r("code",[t._v("jsonp")]),t._v("(在 native 原生实现中其实与 "),r("code",[t._v("json")]),t._v(" 相同)")]),r("td",[t._v("string")]),r("td",[t._v("必选")])]),r("tr",[r("td",[r("code",[t._v("body")])]),r("td",[t._v("HTTP 请求体")]),r("td",[t._v("string")]),r("td",[t._v("可选")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"warning custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("注意")]),r("ul",[r("li",[r("code",[t._v("body")]),t._v(" 参数仅支持 "),r("code",[t._v("string")]),t._v(" 类型的参数，请勿直接传递 "),r("code",[t._v("JSON")]),t._v("，必须先将其转为字符串。")]),r("li",[r("code",[t._v("GET")]),t._v(" 请求不支持 "),r("code",[t._v("body")]),t._v(" 方式传递参数，请使用 URL 传参。")]),r("li",[t._v("默认 "),r("code",[t._v("Content-Type")]),t._v(" 是 "),r("code",[t._v("application/x-www-form-urlencoded")]),t._v("。")]),r("li",[t._v("如果你需要通过 POST 发送 json 数据， 需要将 "),r("code",[t._v("Content-Type")]),t._v(" 设为 "),r("code",[t._v("application/json")]),t._v("。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"callback-res-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#callback-res-function","aria-hidden":"true"}},[this._v("#")]),this._v(" callback(res) {Function}")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("响应结果回调，回调函数将收到如下的 "),e("code",[this._v("response")]),this._v(" 对象：")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("属性")]),r("th",[t._v("说明")]),r("th",[t._v("类型")])])]),r("tbody",[r("tr",[r("td",[r("code",[t._v("status")])]),r("td",[t._v("返回的状态码")]),r("td",[t._v("number")])]),r("tr",[r("td",[r("code",[t._v("ok")])]),r("td",[t._v("如果状态码在 200~299 之间就为 "),r("code",[t._v("true")])]),r("td",[t._v("boolean")])]),r("tr",[r("td",[r("code",[t._v("statusText")])]),r("td",[t._v("状态描述文本")]),r("td",[t._v("string")])]),r("tr",[r("td",[r("code",[t._v("data")])]),r("td",[t._v("返回的数据，如果请求类型是 "),r("code",[t._v("json")]),t._v(" 和 "),r("code",[t._v("jsonp")]),t._v("，则它就是一个 "),r("code",[t._v("object")]),t._v(" ，否则是一个 "),r("code",[t._v("string")]),t._v("。")]),r("td",[r("code",[t._v("Object | string")])])]),r("tr",[r("td",[r("code",[t._v("headers")])]),r("td",[t._v("HTTP 响应头")]),r("td",[t._v("Object")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"progresscallback-res-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#progresscallback-res-function","aria-hidden":"true"}},[this._v("#")]),this._v(" progressCallback(res) {Function}")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("关于请求状态的回调，这个回调函数将在请求完成后就被调用，回调函数将收到如下的 "),e("code",[this._v("response")]),this._v(" 对象：")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("属性")]),r("th",[t._v("说明")]),r("th",[t._v("类型")])])]),r("tbody",[r("tr",[r("td",[r("code",[t._v("readyState")])]),r("td",[t._v("当前状态，"),r("code",[t._v("1")]),t._v(": 请求连接中；"),r("code",[t._v("2")]),t._v(": 返回响应头中；"),r("code",[t._v("3")]),t._v(": 正在加载返回数据")]),r("td",[t._v("number")])]),r("tr",[r("td",[r("code",[t._v("status")])]),r("td",[t._v("返回的状态码")]),r("td",[t._v("number")])]),r("tr",[r("td",[r("code",[t._v("length")])]),r("td",[t._v("已经接受到的数据长度. 你可以从响应头中获取总长度")]),r("td",[t._v("number")])]),r("tr",[r("td",[r("code",[t._v("statusText")])]),r("td",[t._v("状态描述文本")]),r("td",[t._v("string")])]),r("tr",[r("td",[r("code",[t._v("headers")])]),r("td",[t._v("HTTP 响应头")]),r("td",[t._v("Object")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo","aria-hidden":"true"}},[this._v("#")]),this._v(" Demo")])}],!1,null,null,null);a.options.__file="stream.md";e.default=a.exports}}]);