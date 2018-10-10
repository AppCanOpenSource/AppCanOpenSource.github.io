webpackJsonp([52],{swy7:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("34v0"),n=a.n(i),r=a("vLgD");var l=a("EcfS"),o={name:"groupType",data:function(){return{form:{code:void 0,name:void 0,description:void 0},rules:{code:[{required:!0,message:"请输入编码",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}],name:[{required:!0,message:"请输入类型名称",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}],description:[{required:!0,message:"请输入描述",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}]},list:null,total:null,listLoading:!0,listQuery:{page:1,limit:20,name:void 0},dialogFormVisible:!1,dialogStatus:"",groupTypeManager_btn_edit:!1,groupTypeManager_btn_del:!1,groupTypeManager_btn_add:!1,textMap:{update:"编辑",create:"创建"},tableKey:0}},created:function(){this.getList(),this.groupTypeManager_btn_edit=this.elements["groupTypeManager:btn_edit"],this.groupTypeManager_btn_del=this.elements["groupTypeManager:btn_del"],this.groupTypeManager_btn_add=this.elements["groupTypeManager:btn_add"]},computed:n()({},Object(l.b)(["elements"])),methods:{getList:function(){var e,t=this;this.listLoading=!0,(e=this.listQuery,Object(r.a)({url:"/console/admin/groupType/page",method:"get",params:e})).then(function(e){t.list=e.data.rows,t.total=e.data.total,t.listLoading=!1})},handleFilter:function(){this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleCreate:function(){this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0},handleUpdate:function(e){var t,a=this;(t=e.id,Object(r.a)({url:"/console/admin/groupType/"+t,method:"get"})).then(function(e){a.form=e.data,a.dialogFormVisible=!0,a.dialogStatus="update"})},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a;(a=e.id,Object(r.a)({url:"/console/admin/groupType/"+a,method:"delete"})).then(function(){t.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var a=t.list.indexOf(e);t.list.splice(a,1)})})},create:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var a;(a=t.form,Object(r.a)({url:"/console/admin/groupType",method:"post",data:a})).then(function(){t.dialogFormVisible=!1,t.getList(),t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})})},cancel:function(e){this.dialogFormVisible=!1,this.$refs[e].resetFields()},update:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var a,i;t.dialogFormVisible=!1,t.form.password=void 0,(a=t.form.id,i=t.form,Object(r.a)({url:"/console/admin/groupType/"+a,method:"put",data:i})).then(function(){t.dialogFormVisible=!1,t.getList(),t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})})},resetTemp:function(){this.form={username:void 0,name:void 0,sex:"男",password:void 0,description:void 0}}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"姓名或账户"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}}),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),e.groupTypeManager_btn_add?a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"edit"},on:{click:e.handleCreate}},[e._v("添加")]):e._e()],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"id",width:"65"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v("\n                    "+e._s(t.row.id)+"\n                  ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"200px",align:"center",label:"编码"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.code))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"200px",align:"center",label:"类型名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v("\n                "+e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"200px",align:"center",label:"描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v("\n                "+e._s(t.row.description)+"\n              ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"200px",align:"center",label:"最后更新时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v("\n                "+e._s(t.row.updTime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"200px",align:"center",label:"最后更新人"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v("\n                "+e._s(t.row.updName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"200px",align:"center",label:"最后更新主机"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v("\n                "+e._s(t.row.updHost))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.groupTypeManager_btn_edit?a("el-button",{attrs:{size:"small",type:"success"},on:{click:function(a){e.handleUpdate(t.row)}}},[e._v("\n    编辑\n  ")]):e._e()]}}])})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"编码",prop:"code"}},[a("el-input",{attrs:{placeholder:"请输入编码"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入类型名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"description"}},[a("el-input",{attrs:{placeholder:"请输入描述"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.cancel("form")}}},[e._v("取 消")]),e._v(" "),"create"==e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.create("form")}}},[e._v("确 定")]):a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.update("form")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]},u=a("XAIM")(o,s,!1,null,null,null);t.default=u.exports}});