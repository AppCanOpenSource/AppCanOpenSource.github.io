(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{230:function(E,C,u){"use strict";u.r(C);var t={created:function(){this.content=unescape("%3Ch2%3EToast%20%u8F7B%u63D0%u793A%3C/h2%3E%0A%3Ch3%3E%u4F7F%u7528%u6307%u5357%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Toast%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%0AVue.use%28Toast%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3E%u4EE3%u7801%u6F14%u793A%3C/h3%3E%0A%3Ch4%3E%u6587%u5B57%u63D0%u793A%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3EToast%28%3Cspan%20class%3D%22hljs-string%22%3E%27%u6211%u662F%u63D0%u793A%u6587%u6848%uFF0C%u5EFA%u8BAE%u4E0D%u8D85%u8FC7%u5341%u4E94%u5B57%7E%27%3C/span%3E%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E%u52A0%u8F7D%u63D0%u793A%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3EToast.loading%28%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emask%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emessage%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%u52A0%u8F7D%u4E2D...%27%3C/span%3E%0A%7D%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E%u6210%u529F/%u5931%u8D25%u63D0%u793A%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3EToast.success%28%3Cspan%20class%3D%22hljs-string%22%3E%27%u6210%u529F%u6587%u6848%27%3C/span%3E%29%3B%0AToast.fail%28%3Cspan%20class%3D%22hljs-string%22%3E%27%u5931%u8D25%u6587%u6848%27%3C/span%3E%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E%u9AD8%u7EA7%u7528%u6CD5%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20toast%20%3D%20Toast.loading%28%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eduration%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%2C%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u6301%u7EED%u5C55%u793A%20toast%3C/span%3E%0A%20%20forbidClick%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u7981%u7528%u80CC%u666F%u70B9%u51FB%3C/span%3E%0A%20%20loadingType%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27spinner%27%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emessage%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%u5012%u8BA1%u65F6%203%20%u79D2%27%3C/span%3E%0A%7D%29%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Elet%3C/span%3E%20second%20%3D%20%3Cspan%20class%3D%22hljs-number%22%3E3%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20timer%20%3D%20setInterval%28%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-params%22%3E%28%29%3C/span%3E%20%3D%26gt%3B%3C/span%3E%20%7B%0A%20%20second--%3B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C/span%3E%20%28second%29%20%7B%0A%20%20%20%20toast.message%20%3D%20%3Cspan%20class%3D%22hljs-string%22%3E%60%u5012%u8BA1%u65F6%20%3Cspan%20class%3D%22hljs-subst%22%3E%24%7Bsecond%7D%3C/span%3E%20%u79D2%60%3C/span%3E%3B%0A%20%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Eelse%3C/span%3E%20%7B%0A%20%20%20%20clearInterval%28timer%29%3B%0A%20%20%20%20Toast.clear%28%29%3B%0A%20%20%7D%0A%7D%2C%20%3Cspan%20class%3D%22hljs-number%22%3E1000%3C/span%3E%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E%u7EC4%u4EF6%u5185%u8C03%u7528%3C/h4%3E%0A%3Cp%3E%u5F15%u5165%20Toast%20%u7EC4%u4EF6%u540E%uFF0C%u4F1A%u81EA%u52A8%u5728%20Vue%20%u7684%20prototype%20%u4E0A%u6302%u8F7D%20%24toast%20%u65B9%u6CD5%uFF0C%u4FBF%u4E8E%u5728%u7EC4%u4EF6%u5185%u8C03%u7528%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20mounted%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.%24toast%28%3Cspan%20class%3D%22hljs-string%22%3E%27%u63D0%u793A%u6587%u6848%27%3C/span%3E%29%3B%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E%u5355%u4F8B%u6A21%u5F0F%3C/h4%3E%0A%3Cp%3EToast%20%u9ED8%u8BA4%u91C7%u7528%u5355%u4F8B%u6A21%u5F0F%uFF0C%u5373%u540C%u4E00%u65F6%u95F4%u53EA%u4F1A%u5B58%u5728%u4E00%u4E2A%20Toast%uFF0C%u5982%u679C%u9700%u8981%u5728%u540C%u4E00%u65F6%u95F4%u5F39%u51FA%u591A%u4E2A%20Toast%uFF0C%u53EF%u4EE5%u53C2%u8003%u4E0B%u9762%u7684%u793A%u4F8B%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3EToast.allowMultiple%28%29%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20toast1%20%3D%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%27%u7B2C%u4E00%u4E2A%20Toast%27%3C/span%3E%29%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20toast2%20%3D%20Toast.success%28%3Cspan%20class%3D%22hljs-string%22%3E%27%u7B2C%u4E8C%u4E2A%20Toast%27%3C/span%3E%29%3B%0A%0Atoast1.clear%28%29%3B%0Atoast2.clear%28%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3E%u65B9%u6CD5%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u65B9%u6CD5%u540D%3C/th%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8FD4%u56DE%u503C%3C/th%3E%0A%3Cth%3E%u4ECB%u7ECD%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3EToast%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eoptions%20%7C%20message%3C/code%3E%3C/td%3E%0A%3Ctd%3Etoast%20%u5B9E%u4F8B%3C/td%3E%0A%3Ctd%3E%u5C55%u793A%u63D0%u793A%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EToast.loading%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eoptions%20%7C%20message%3C/code%3E%3C/td%3E%0A%3Ctd%3Etoast%20%u5B9E%u4F8B%3C/td%3E%0A%3Ctd%3E%u5C55%u793A%u52A0%u8F7D%u63D0%u793A%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EToast.success%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eoptions%20%7C%20message%3C/code%3E%3C/td%3E%0A%3Ctd%3Etoast%20%u5B9E%u4F8B%3C/td%3E%0A%3Ctd%3E%u5C55%u793A%u6210%u529F%u63D0%u793A%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EToast.fail%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eoptions%20%7C%20message%3C/code%3E%3C/td%3E%0A%3Ctd%3Etoast%20%u5B9E%u4F8B%3C/td%3E%0A%3Ctd%3E%u5C55%u793A%u5931%u8D25%u63D0%u793A%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EToast.clear%3C/td%3E%0A%3Ctd%3E%3Ccode%3EclearAll%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Evoid%3C/code%3E%3C/td%3E%0A%3Ctd%3E%u5173%u95ED%u63D0%u793A%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EToast.allowMultiple%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E%3Ccode%3Evoid%3C/code%3E%3C/td%3E%0A%3Ctd%3E%u5141%u8BB8%u540C%u65F6%u5B58%u5728%u591A%u4E2A%20Toast%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EToast.setDefaultOptions%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eoptions%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Evoid%3C/code%3E%3C/td%3E%0A%3Ctd%3E%u4FEE%u6539%u9ED8%u8BA4%u914D%u7F6E%uFF0C%u5BF9%u6240%u6709%20Toast%20%u751F%u6548%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EToast.resetDefaultOptions%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E%3Ccode%3Evoid%3C/code%3E%3C/td%3E%0A%3Ctd%3E%u91CD%u7F6E%u9ED8%u8BA4%u914D%u7F6E%uFF0C%u5BF9%u6240%u6709%20Toast%20%u751F%u6548%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EOptions%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Etype%3C/td%3E%0A%3Ctd%3E%u63D0%u793A%u7C7B%u578B%uFF0C%u53EF%u9009%u503C%u4E3A%20%3Ccode%3Eloading%3C/code%3E%20%3Ccode%3Esuccess%3C/code%3E%20%3Ccode%3Efail%3C/code%3E%20%3Ccode%3Ehtml%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etext%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eposition%3C/td%3E%0A%3Ctd%3E%u4F4D%u7F6E%uFF0C%u53EF%u9009%u503C%u4E3A%20%3Ccode%3Etop%3C/code%3E%20%3Ccode%3Emiddle%3C/code%3E%20%3Ccode%3Ebottom%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Emiddle%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emessage%3C/td%3E%0A%3Ctd%3E%u5185%u5BB9%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%27%27%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emask%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u663E%u793A%u80CC%u666F%u8499%u5C42%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EforbidClick%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u7981%u6B62%u80CC%u666F%u70B9%u51FB%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EloadingType%3C/td%3E%0A%3Ctd%3E%u52A0%u8F7D%u56FE%u6807%u7C7B%u578B%2C%20%u53EF%u9009%u503C%u4E3A%20%3Ccode%3Espinner%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Ecircular%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eduration%3C/td%3E%0A%3Ctd%3E%u5C55%u793A%u65F6%u957F%28ms%29%uFF0C%u503C%u4E3A%200%20%u65F6%uFF0Ctoast%20%u4E0D%u4F1A%u6D88%u5931%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E3000%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3E%u66F4%u65B0%u65E5%u5FD7%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u7248%u672C%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u5185%u5BB9%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E1.1.5%3C/td%3E%0A%3Ctd%3Ebugfix%3C/td%3E%0A%3Ctd%3E%u4FEE%u590D%u4F7F%u7528%20forbidClick%20%u5C5E%u6027%u65F6%u5BFC%u81F4%u5176%u4ED6%u5F39%u5C42%u7684%u8499%u5C42%u5931%u6548%u7684%u95EE%u9898%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E1.1.3%3C/td%3E%0A%3Ctd%3Efeature%3C/td%3E%0A%3Ctd%3E%u65B0%u589E%20loadingType%20%u5C5E%u6027%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E1.0.3%3C/td%3E%0A%3Ctd%3Ebugfix%3C/td%3E%0A%3Ctd%3E%u4FEE%u590D%u8499%u5C42%u5728%u67D0%u4E9B%u60C5%u51B5%u4E0B%u65E0%u6CD5%u6536%u8D77%u7684%u95EE%u9898%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E1.0.2%3C/td%3E%0A%3Ctd%3Ebugfix%3C/td%3E%0A%3Ctd%3E%u4FEE%u590D%u8499%u5C42%u88AB%u5176%u4ED6%u5143%u7D20%u906E%u6321%u7684%u95EE%u9898%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E1.0.0%3C/td%3E%0A%3Ctd%3Efeature%3C/td%3E%0A%3Ctd%3E%u652F%u6301%u901A%u8FC7%20Vue.use%20%u6CE8%u518C%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A")}},s=u(0),d=Object(s.a)(t,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var E=this.$createElement;return(this._self._c||E)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);d.options.__file="zh-CN.md";C.default=d.exports}}]);