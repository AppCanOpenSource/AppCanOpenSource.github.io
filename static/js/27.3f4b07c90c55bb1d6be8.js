webpackJsonp([27],{nOMn:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("UIuv"),i=a.n(n),o=a("vLgD");var l={data:function(){return{dataObj:{token:"",key:""},image_uri:[],fileList:[]}},methods:{beforeUpload:function(){var t=this;return new i.a(function(e,a){Object(o.a)({url:"/qiniu/upload/token",method:"get"}).then(function(a){var n=a.data.qiniu_key,i=a.data.qiniu_token;t._data.dataObj.token=i,t._data.dataObj.key=n,e(!0)}).catch(function(t){console.log(t),a(!1)})})}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-upload",{attrs:{action:"https://upload.qbox.me",data:this.dataObj,drag:"",multiple:!0,"before-upload":this.beforeUpload}},[e("i",{staticClass:"el-icon-upload"}),this._v(" "),e("div",{staticClass:"el-upload__text"},[this._v("将文件拖到此处，或"),e("em",[this._v("点击上传")])])])},staticRenderFns:[]},d=a("XAIM")(l,u,!1,null,null,null);e.default=d.exports}});