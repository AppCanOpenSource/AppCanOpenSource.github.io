webpackJsonp([53],{Ffe0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("34v0"),o=r.n(i),n=r("5uXp"),a=r("EcfS"),s={name:"groupDetail",components:{"group-user":function(){return r.e(7).then(r.bind(null,"jmoS"))},"group-authority":function(){return r.e(63).then(r.bind(null,"firN"))},"group-authorize":function(){return r.e(62).then(r.bind(null,"pYXI"))}},props:{type:{default:"1"}},data:function(){return{filterText:"",list:null,total:null,formEdit:!0,formAdd:!0,formStatus:"",dialogUserVisible:!1,dialogUserName:"关联用户",dialogAuthorityVisible:!1,dialogAuthorityName:"关联资源",dialogAuthorizeVisible:!1,dialogAuthorizeName:"权限下发",listQuery:{groupType:this.type,name:void 0},treeData:[],defaultProps:{children:"children",label:"label"},labelPosition:"right",groupManager_btn_edit:!1,groupManager_btn_del:!1,groupManager_btn_add:!1,groupManager_btn_userManager:!1,groupManager_btn_resourceManager:!1,groupManager_btn_authorizeManager:!1,form:{code:void 0,name:void 0,description:void 0,groupType:this.type},rules:{code:[{required:!0,message:"请输入编码",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}],name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}]},currentId:-1}},watch:{filterText:function(e){this.$refs.groupTree.filter(e)}},created:function(){this.getList(),this.groupManager_btn_edit=this.elements["groupManager:btn_edit"],this.groupManager_btn_del=this.elements["groupManager:btn_del"],this.groupManager_btn_add=this.elements["groupManager:btn_add"],this.groupManager_btn_userManager=this.elements["groupManager:btn_userManager"],this.groupManager_btn_resourceManager=this.elements["groupManager:btn_resourceManager"],this.groupManager_btn_authorizeManager=this.elements["groupManager:btn_authorizeManager"]},computed:o()({},Object(a.b)(["elements"])),methods:{getList:function(){var e=this;Object(n.f)(this.listQuery).then(function(t){e.treeData=t})},filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},getNodeData:function(e){var t=this;this.formEdit||(this.formStatus="update"),Object(n.l)(e.id).then(function(e){t.form=e.data}),this.currentId=e.id},handlerEdit:function(){this.form.id&&(this.formEdit=!1,this.formStatus="update")},handlerAdd:function(){this.resetForm(),this.formEdit=!1,this.formStatus="create"},handleDelete:function(){var e=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.d)(e.currentId).then(function(){e.getList(),e.resetForm(),e.onCancel(),e.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3})})})},update:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;Object(n.r)(t.form.id,t.form).then(function(){t.getList(),t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})})},create:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;Object(n.c)(t.form).then(function(){t.getList(),t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})})},onCancel:function(){this.formEdit=!0,this.formStatus=""},resetForm:function(){this.form={parentId:this.currentId,code:void 0,name:void 0,description:void 0,groupType:this.type}},handlerUser:function(){this.dialogUserVisible=!0,void 0!==this.$refs.groupUser&&(this.$refs.groupUser.groupId=this.currentId,this.$refs.groupUser.initUsers())},handlerAuthority:function(){this.dialogAuthorityVisible=!0,void 0!==this.$refs.groupAuthority&&(this.$refs.groupAuthority.groupId=this.currentId,this.$refs.groupAuthority.initAuthoritys())},handlerAuthorize:function(){this.dialogAuthorizeVisible=!0,void 0!==this.$refs.groupAuthorize&&(this.$refs.groupAuthorize.groupId=this.currentId,this.$refs.groupAuthorize.initAuthoritys())},closeAuthorizeDialog:function(){this.dialogAuthorizeVisible=!1},closeUserDialog:function(){this.dialogUserVisible=!1},closeAuthorityDialog:function(){this.dialogAuthorityVisible=!1}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",[r("el-col",{attrs:{span:24}},[r("el-button-group",[e.groupManager_btn_add?r("el-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handlerAdd}},[e._v("添加")]):e._e(),e._v(" "),e.groupManager_btn_edit?r("el-button",{attrs:{type:"primary",icon:"edit"},on:{click:e.handlerEdit}},[e._v("编辑")]):e._e(),e._v(" "),e.groupManager_btn_del?r("el-button",{attrs:{type:"primary",icon:"delete"},on:{click:e.handleDelete}},[e._v("删除")]):e._e(),e._v(" "),e.groupManager_btn_resourceManager?r("el-button",{attrs:{type:"success"},on:{click:e.handlerAuthority}},[e._v("\n        权限分配")]):e._e(),e._v(" "),e.groupManager_btn_userManager?r("el-button",{attrs:{type:"success"},on:{click:e.handlerUser}},[e._v("\n        关联用户")]):e._e(),e._v(" "),e.groupManager_btn_authorizeManager?r("el-button",{attrs:{type:"warning"},on:{click:e.handlerAuthorize}},[e._v("\n        权限下发")]):e._e()],1)],1),e._v(" "),r("el-col",{staticStyle:{"margin-top":"15px"},attrs:{span:8}},[r("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),e._v(" "),r("el-tree",{ref:"groupTree",staticClass:"filter-tree",attrs:{data:e.treeData,"node-key":"id","highlight-current":"",props:e.defaultProps,"filter-node-method":e.filterNode,"expand-on-click-node":!1,"default-expand-all":""},on:{"node-click":e.getNodeData}})],1),e._v(" "),r("el-col",{staticStyle:{"margin-top":"15px"},attrs:{span:16}},[r("el-form",{ref:"form",attrs:{"label-position":e.labelPosition,rules:e.rules,"label-width":"80px",model:e.form}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{disabled:e.formEdit},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"编码",prop:"code"}},[r("el-input",{attrs:{disabled:e.formEdit},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{disabled:e.formEdit},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),"update"==e.formStatus?r("el-form-item",[e.groupManager_btn_edit?r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.update("form")}}},[e._v("更新")]):e._e(),e._v(" "),r("el-button",{on:{click:e.onCancel}},[e._v("取消")])],1):e._e(),e._v(" "),"create"==e.formStatus?r("el-form-item",[e.groupManager_btn_add?r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.create("form")}}},[e._v("保存")]):e._e(),e._v(" "),r("el-button",{on:{click:e.onCancel}},[e._v("取消")])],1):e._e()],1)],1),e._v(" "),r("el-dialog",{attrs:{title:e.dialogUserName,visible:e.dialogUserVisible},on:{"update:visible":function(t){e.dialogUserVisible=t}}},[r("group-user",{ref:"groupUser",attrs:{groupId:e.currentId},on:{closeUserDialog:e.closeUserDialog}})],1),e._v(" "),r("el-dialog",{attrs:{title:e.dialogAuthorityName,size:"large",visible:e.dialogAuthorityVisible},on:{"update:visible":function(t){e.dialogAuthorityVisible=t}}},[r("group-authority",{ref:"groupAuthority",attrs:{groupId:e.currentId},on:{closeAuthorityDialog:e.closeAuthorityDialog}})],1),e._v(" "),r("el-dialog",{attrs:{title:e.dialogAuthorizeName,size:"large",visible:e.dialogAuthorizeVisible},on:{"update:visible":function(t){e.dialogAuthorizeVisible=t}}},[r("group-authorize",{ref:"groupAuthorize",attrs:{groupId:e.currentId},on:{closeAuthorizeDialog:e.closeAuthorizeDialog}})],1)],1)},staticRenderFns:[]},u=r("XAIM")(s,l,!1,null,null,null);t.default=u.exports}});