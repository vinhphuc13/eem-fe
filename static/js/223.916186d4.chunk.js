webpackJsonp([223],{1730:function(e,n,t){"use strict";function o(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){function o(r,i){try{var a=n[r](i),c=a.value}catch(e){return void t(e)}if(!a.done)return Promise.resolve(c).then(function(e){o("next",e)},function(e){o("throw",e)});e(c)}return o("next")})}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function a(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var c,l,u=t(166),s=t.n(u),b=t(0),A=t.n(b),p=t(271),d=t(29),f=t(1764),m=t(2869),g=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),h=function(e){var n={tenbo:"",tentruong:"",chucdanh1:"",chucdanh2:"",nguoiky1:"",nguoiky2:"",noiky:""};return Object.assign({},n,e)},C=(c=d.m.create({name:"FormReportTitleConfig"}))(l=function(e){function n(){var e,t,a,c,l=this;r(this,n);for(var u=arguments.length,b=Array(u),A=0;A<u;A++)b[A]=arguments[A];return t=a=i(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(b))),a.state={initialValue:{}},a.componentDidMount=function(){a.getData()},a.getData=o(s.a.mark(function e(){var n,t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.b)();case 2:n=e.sent,t=h(n.data),a.setState({initialValue:t});case 5:case"end":return e.stop()}},e,l)})),a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,n){e||a.saveData(n)})},a.saveData=function(){var e=o(s.a.mark(function e(n){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.a)(n);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}},e,l,[[0,5]])}));return function(n){return e.apply(this,arguments)}}(),c=t,i(a,c)}return a(n,e),g(n,[{key:"render",value:function(){var e=this.state.initialValue,n=this.props.form.getFieldDecorator,t={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:12}},colon:!1};return A.a.createElement(d.f,{title:"Thi\u1ebft l\u1eadp ti\xeau \u0111\u1ec1 b\xe1o c\xe1o"},A.a.createElement(d.x,null,A.a.createElement(d.i,{span:24},A.a.createElement(d.m,{onSubmit:this.handleSubmit},A.a.createElement(d.m.Item,Object.assign({label:"Ti\xeau \u0111\u1ec1 t\xean b\u1ed9"},t),n("tenbo",{initialValue:e.tenbo,rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp th\xf4ng tin!"}]})(A.a.createElement(d.o,{placeHolder:"\u0110\u1ea0I H\u1eccC S\xc2N KH\u1ea4U \u0110I\u1ec6N \u1ea2NH"}))),A.a.createElement(d.m.Item,Object.assign({label:"Ti\xeau \u0111\u1ec1 t\xean tr\u01b0\u1eddng"},t),n("tentruong",{initialValue:e.tentruong,rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp th\xf4ng tin!"}]})(A.a.createElement(d.o,{placeHolder:"PH\xd2NG T\xc0I V\u1ee4"}))),A.a.createElement(d.m.Item,Object.assign({label:"Ti\xeau \u0111\u1ec1 ch\u1ee9c danh 1"},t),n("chucdanh1",{initialValue:e.chucdanh1,rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp th\xf4ng tin!"}]})(A.a.createElement(d.o,{placeHolder:"NG\u01af\u1edcI L\u1eacP BI\u1ec2U"}))),A.a.createElement(d.m.Item,Object.assign({label:"Ti\xeau \u0111\u1ec1 ch\u1ee9c danh 2"},t),n("chucdanh2",{initialValue:e.chucdanh2,rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp th\xf4ng tin!"}]})(A.a.createElement(d.o,{placeHolder:"TR\u01af\u1edeNG PH\xd2NG T\xc0I V\u1ee4"}))),A.a.createElement(d.m.Item,Object.assign({label:"Ti\xeau \u0111\u1ec1 t\xean ng\u01b0\u1eddi k\xfd 1"},t),n("nguoiky1",{initialValue:e.nguoiky1,rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp th\xf4ng tin!"}]})(A.a.createElement(d.o,{placeHolder:"NGUY\u1ec4N V\u0102N A"}))),A.a.createElement(d.m.Item,Object.assign({label:"Ti\xeau \u0111\u1ec1 t\xean ng\u01b0\u1eddi k\xfd 2"},t),n("nguoiky2",{initialValue:e.nguoiky2,rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp th\xf4ng tin!"}]})(A.a.createElement(d.o,{placeHolder:"NGUY\u1ec4N V\u0102N B"}))),A.a.createElement(d.m.Item,Object.assign({label:"Ti\xeau \u0111\u1ec1 n\u01a1i k\xfd"},t),n("noiky",{initialValue:e.noiky,rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp th\xf4ng tin!"}]})(A.a.createElement(d.o,{placeHolder:"HCM, ng\xe0y 08 th\xe1ng 08 n\u0103m 2019"}))),A.a.createElement(d.m.Item,Object.assign({},t,{label:" "}),A.a.createElement(f.a,{htmlType:"submit"}))))))}}]),n}(b.Component))||l;n.default=function(e){return A.a.createElement(p.a,e,A.a.createElement(C,e))}},1761:function(e,n,t){var o=t(1763);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!1};r.transform=void 0;t(1594)(o,r);o.locals&&(e.exports=o.locals)},1763:function(e,n,t){n=e.exports=t(1593)(!0),n.push([e.i,".btnAction{background:0 0;border:none;border-radius:2px;color:#000!important;position:relative;height:35px;line-height:35px;margin:0;min-width:64px;padding:0 10px;display:inline-block;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:13px;font-weight:500;text-transform:uppercase;letter-spacing:0;overflow:hidden;will-change:box-shadow;-webkit-transition:background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .2s cubic-bezier(.4,0,1,1);transition:background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .2s cubic-bezier(.4,0,1,1);-o-transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .2s cubic-bezier(.4,0,1,1);outline:none;cursor:pointer;text-decoration:none;text-align:center;vertical-align:middle;background-color:#eee;border-color:#e1e5ec}.btnAction:hover{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.2),0 3px 6px rgba(0,0,0,.26)!important;box-shadow:0 3px 6px rgba(0,0,0,.2),0 3px 6px rgba(0,0,0,.26)!important}.btnSearch{background-color:#3ac9d6!important;border:1px solid #3ac9d6!important;color:#fff!important}.btnAddNew{background-color:#30a9b4!important;border:1px solid #30a9b4!important}.btnAddNew,.btnEdit{color:#fff!important}.btnEdit{background-color:#188ae2!important;border:1px solid #188ae2!important}.btnDelete{background-color:#f35864!important;border:1px solid #f35864!important}.btnDelete,.btnSave{color:#fff!important}.btnSave{background-color:#ff4081!important;border:1px solid #ff4081!important}.btnSave+.ant-btn{margin-left:10px}.btnCancel,.btnClear{background-color:#e1e5ec!important;border-color:#e1e5ec!important;color:#000!important}.btnView{color:#fff!important;background-color:#6abf6e!important;border-color:#6abf6e!important}","",{version:3,sources:["E:/Projects/eem-fe/src/components/common/button/style.scss"],names:[],mappings:"AAAA,WACE,eAAgB,AAChB,YAAa,AACb,kBAAmB,AACnB,qBAAuB,AACvB,kBAAmB,AACnB,YAAa,AACb,iBAAkB,AAClB,SAAU,AACV,eAAgB,AAChB,eAAgB,AAChB,qBAAsB,AACtB,8CAAwD,AACxD,eAAgB,AAChB,gBAAiB,AACjB,yBAA0B,AAC1B,iBAAkB,AAClB,gBAAiB,AACjB,uBAAwB,AACxB,gJAAoK,AACpK,wIAA4J,AAC5J,mIAAuJ,AACvJ,gIAAoJ,AACpJ,8KAAwM,AACxM,aAAc,AACd,eAAgB,AAChB,qBAAsB,AACtB,kBAAmB,AACnB,sBAAuB,AACvB,sBAA0B,AAC1B,oBAAsB,CAAE,AACxB,iBACE,gFAA2F,AACnF,uEAAmF,CAAE,AAEjG,WACE,mCAAqC,AACrC,mCAAqC,AACrC,oBAAuB,CAAE,AAE3B,WACE,mCAAqC,AACrC,kCAAqC,CACZ,AAE3B,oBAFE,oBAAuB,CAKE,AAH3B,SACE,mCAAqC,AACrC,kCAAqC,CACZ,AAE3B,WACE,mCAAqC,AACrC,kCAAqC,CACZ,AAE3B,oBAFE,oBAAuB,CAKE,AAH3B,SACE,mCAAqC,AACrC,kCAAqC,CACZ,AACzB,kBACE,gBAAkB,CAAE,AAOxB,qBAJE,mCAAqC,AACrC,+BAAiC,AACjC,oBAAuB,CAKY,AAErC,SACE,qBAA0B,AAC1B,mCAAqC,AACrC,8BAAiC,CAAE",file:"style.scss",sourcesContent:[".btnAction {\n  background: 0 0;\n  border: none;\n  border-radius: 2px;\n  color: #000 !important;\n  position: relative;\n  height: 35px;\n  line-height: 35px;\n  margin: 0;\n  min-width: 64px;\n  padding: 0 10px;\n  display: inline-block;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0;\n  overflow: hidden;\n  will-change: box-shadow;\n  -webkit-transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);\n  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);\n  -o-transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  vertical-align: middle;\n  background-color: #eeeeee;\n  border-color: #e1e5ec; }\n  .btnAction:hover {\n    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.26) !important;\n            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.26) !important; }\n\n.btnSearch {\n  background-color: #3ac9d6 !important;\n  border: 1px solid #3ac9d6 !important;\n  color: #fff !important; }\n\n.btnAddNew {\n  background-color: #30a9b4 !important;\n  border: 1px solid #30a9b4 !important;\n  color: #fff !important; }\n\n.btnEdit {\n  background-color: #188ae2 !important;\n  border: 1px solid #188ae2 !important;\n  color: #fff !important; }\n\n.btnDelete {\n  background-color: #f35864 !important;\n  border: 1px solid #f35864 !important;\n  color: #fff !important; }\n\n.btnSave {\n  background-color: #ff4081 !important;\n  border: 1px solid #ff4081 !important;\n  color: #fff !important; }\n  .btnSave + .ant-btn {\n    margin-left: 10px; }\n\n.btnCancel {\n  background-color: #e1e5ec !important;\n  border-color: #e1e5ec !important;\n  color: #000 !important; }\n\n.btnClear {\n  color: #000 !important;\n  background-color: #e1e5ec !important;\n  border-color: #e1e5ec !important; }\n\n.btnView {\n  color: #FFFFFF !important;\n  background-color: #6abf6e !important;\n  border-color: #6abf6e !important; }\n"],sourceRoot:""}])},1764:function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}t.d(n,"a",function(){return b});var a=t(0),c=t.n(a),l=t(29),u=t(1761),s=(t.n(u),function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}()),b=function(e){function n(){var e,t,i,a;o(this,n);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return t=i=r(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(l))),i.states="",a=t,r(i,a)}return i(n,e),s(n,[{key:"render",value:function(){return c.a.createElement(l.d,Object.assign({},this.props,{className:"btnAction btnSave "+this.props.className,icon:"save"}),this.props.title)}}]),n}(a.Component);b.defaultProps={className:"",title:"L\u01b0u d\u1eef li\u1ec7u"}},2869:function(e,n,t){"use strict";t.d(n,"b",function(){return o}),t.d(n,"a",function(){return r});var o=function(){return{data:{tenbo:"\u0110\u1ea0I H\u1eccC S\xc2N KH\u1ea4U \u0110I\u1ec6N \u1ea2NH",tentruong:"PH\xd2NG T\xc0I V\u1ee4",chucdanh1:"NG\u01af\u1edcI L\u1eacP BI\u1ec2U",chucdanh2:"TR\u01af\u1edeNG PH\xd2NG T\xc0I V\u1ee4",nguoiky1:"NGUY\u1ec4N V\u0102N A",nguoiky2:"NGUY\u1ec4N V\u0102N B",noiky:"HCM, ng\xe0y 08 th\xe1ng 08 n\u0103m 2019"}}},r=function(e){console.log("config",e)}}});
//# sourceMappingURL=223.916186d4.chunk.js.map