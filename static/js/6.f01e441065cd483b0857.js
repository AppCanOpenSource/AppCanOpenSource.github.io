webpackJsonp([6],{dJ1a:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("34v0"),a=n.n(i),l=n("vLgD");var r=n("EcfS"),o=n("yBzI"),s={name:"menu-element",data:function(){return{methodOptions:["GET","POST","PUT","DELETE"],typeOptions:["uri","button"],form:{code:void 0,type:void 0,name:void 0,uri:void 0,menuId:void 0,method:void 0,description:void 0},rules:{code:[{required:!0,message:"请输入资源编码",trigger:"blur"}],type:[{required:!0,message:"请输入资源类型",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],name:[{required:!0,message:"请输入资源名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],uri:[{required:!0,message:"请输入",trigger:"blur"},{min:3,max:40,message:"长度在 3 到 40 个字符",trigger:"blur"}],method:[{required:!0,message:"请输入资源请求类型",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}],description:[{required:!0,message:"请输入",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}]},list:null,total:null,listLoading:!0,listQuery:{page:1,limit:20,name:void 0,menuId:this.menuId},dialogFormVisible:!1,dialogStatus:"",menuManager_btn_element_add:!1,menuManager_btn_element_edit:!1,menuManager_btn_element_del:!1,menuId:-1,textMap:{update:"编辑",create:"创建"},tableKey:0}},created:function(){var e=this;this.getList(),this.menuManager_btn_element_add=this.elements["menuManager:btn_element_add"],this.menuManager_btn_element_del=this.elements["menuManager:btn_element_del"],this.menuManager_btn_element_edit=this.elements["menuManager:btn_element_edit"],Object(o.c)("authority_element").then(function(t){e.typeOptions=t.data.rows})},computed:a()({},Object(r.b)(["elements"])),methods:{getList:function(){var e,t=this;this.listLoading=!0,this.listQuery.menuId=this.menuId,(e=this.listQuery,Object(l.a)({url:"/console/admin/element/list",method:"get",params:e})).then(function(e){t.list=e.data.rows,t.total=e.data.total,t.listLoading=!1})},handleFilter:function(){this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleCreate:function(){this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0},handleUpdate:function(e){var t,n=this;(t=e.id,Object(l.a)({url:"/console/admin/element/"+t,method:"get"})).then(function(e){n.form=e.data,n.dialogFormVisible=!0,n.dialogStatus="update"})},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var n;(n=e.id,Object(l.a)({url:"/console/admin/element/"+n,method:"delete"})).then(function(){t.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var n=t.list.indexOf(e);t.list.splice(n,1)})})},create:function(e){var t=this,n=this.$refs;this.form.menuId=this.menuId,n[e].validate(function(e){if(!e)return!1;var n;(n=t.form,Object(l.a)({url:"/console/admin/element",method:"post",data:n})).then(function(){t.dialogFormVisible=!1,t.getList(),t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})})},cancel:function(e){this.dialogFormVisible=!1,this.$refs[e].resetFields()},update:function(e){var t=this,n=this.$refs;this.form.menuId=this.menuId,n[e].validate(function(e){if(!e)return!1;var n,i;t.dialogFormVisible=!1,t.form.password=void 0,(n=t.form.id,i=t.form,Object(l.a)({url:"/console/admin/element/"+n,method:"put",data:i})).then(function(){t.dialogFormVisible=!1,t.getList(),t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})})},resetTemp:function(){this.form={code:void 0,type:void 0,name:void 0,uri:void 0,menuId:void 0,method:void 0,description:void 0}}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container calendar-list-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"资源名称"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}}),e._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),e.menuManager_btn_element_add?n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"edit"},on:{click:e.handleCreate}},[e._v("添加")]):e._e()],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.menuManager_btn_element_edit?n("el-button",{attrs:{size:"small",type:"success"},on:{click:function(n){e.handleUpdate(t.row)}}},[n("i",{staticClass:"el-icon-edit"})]):e._e(),e._v(" "),e.menuManager_btn_element_del?n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(n){e.handleDelete(t.row)}}},[n("i",{staticClass:"el-icon-delete"})]):e._e()]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"200px",align:"center",label:"资源编码"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v("\n          "+e._s(t.row.code))])]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"200px",align:"center",label:"资源类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v("\n          "+e._s(t.row.type))])]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"200px",align:"center",label:"资源名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v("\n          "+e._s(t.row.name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"200px",align:"center",label:"资源地址"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v("\n          "+e._s(t.row.uri))])]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"200px",align:"center",label:"资源请求类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v("\n          "+e._s(t.row.method))])]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"200px",align:"center",label:"描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v("\n          "+e._s(t.row.description))])]}}])})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[n("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1),e._v(" "),n("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"资源编码",prop:"code"}},[n("el-input",{attrs:{placeholder:"请输入资源编码"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"资源类型",prop:"type"}},[n("el-select",{staticClass:"filter-item",attrs:{placeholder:"请输入资源类型"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.typeOptions,function(e){return n("el-option",{key:e.id,attrs:{label:e.labelDefault,value:e.value}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"资源名称",prop:"name"}},[n("el-input",{attrs:{placeholder:"请输入资源名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"资源地址",prop:"uri"}},[n("el-input",{attrs:{placeholder:"请输入资源地址"},model:{value:e.form.uri,callback:function(t){e.$set(e.form,"uri",t)},expression:"form.uri"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"资源请求类型",prop:"method"}},[n("el-select",{staticClass:"filter-item",attrs:{placeholder:"请输入资源请求类型"},model:{value:e.form.method,callback:function(t){e.$set(e.form,"method",t)},expression:"form.method"}},e._l(e.methodOptions,function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})}))],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.cancel("form")}}},[e._v("取 消")]),e._v(" "),"create"==e.dialogStatus?n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.create("form")}}},[e._v("确 定")]):n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.update("form")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]},d=n("XAIM")(s,u,!1,null,null,null);t.default=d.exports}});