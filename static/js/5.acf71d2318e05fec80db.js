webpackJsonp([5],{Z8Dg:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("34v0"),i=r.n(n),a=r("yMJ4"),l=r("EcfS"),o={watch:{filterText:function(e){this.$refs.mainTree.filter(e)}},methods:{filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},initmainTreeData:function(){var e=this;Object(a.f)().then(function(t){e.mainTreeData=t})},getTreeNodeData:function(e){this.currentTreeNodeId=e.id,this.currentTreeNode=e},onSubmit:function(){this.$emit("closeDepartDialog",this.currentTreeNode)}},created:function(){this.initmainTreeData()},computed:i()({},Object(l.b)(["elements"])),data:function(){return{filterText:"",currentTreeNodeId:void 0,currentTreeNode:{},mainTreeData:[],defaultProps:{children:"children",label:"label"}}}},c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),e._v(" "),r("el-tree",{ref:"mainTree",staticClass:"filter-tree",attrs:{"node-key":"id",data:e.mainTreeData,props:e.defaultProps,"default-expand-all":"","expand-on-click-node":!1,"filter-node-method":e.filterNode,"highlight-current":""},on:{"node-click":e.getTreeNodeData}})],1)},staticRenderFns:[]},d=r("XAIM")(o,c,!1,null,null,null);t.default=d.exports}});