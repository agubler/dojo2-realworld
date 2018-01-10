/*!
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
dojoWebpackJsonp_dojo2_realworld([1],{100:function(e,r,t){"use strict";function s(e,r,t){return n.v("fieldset",{classes:"form-group"},[n.v("input",{value:e,classes:["form-control","form-control-lg"],type:"text",placeholder:r,oninput:t})])}Object.defineProperty(r,"__esModule",{value:!0});var n=t(2);r.createInputNode=s},109:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=t(0),n=t(3),o=t(2),i=t(26),a=t(99),u=t(100),p=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return s.__extends(r,e),r.prototype._onEmailInput=function(e){var r=e.target.value;this.properties.onEmailInput({email:r})},r.prototype._onPasswordInput=function(e){var r=e.target.value;this.properties.onPasswordInput({password:r})},r.prototype._onUsernameInput=function(e){var r=e.target.value;this.properties.onUsernameInput({username:r})},r.prototype._onRegister=function(e){e.preventDefault(),this.properties.onRegister({})},r.prototype.render=function(){var e=this.properties,r=e.errors,t=e.email,s=e.password,n=e.username,p=e.inProgress,l=void 0!==p&&p;return o.v("div",{classes:"auth-page"},[o.v("div",{classes:["container","page"]},[o.v("div",{classes:"row"},[o.v("div",{classes:["col-md-6","offset-md-3","col-xs-12"]},[o.v("h1",{classes:"text-xs-center"},["Sign Up"]),o.v("p",{classes:"text-xs-center"},[o.w(i.Link,{to:"login"},["Have an account?"])]),r?o.w(a.ErrorList,{errors:r}):null,o.v("form",{onsubmit:this._onRegister},[o.v("fieldset",[o.v("fieldset",{classes:"form-group"},[u.createInputNode(n,"Username",this._onUsernameInput)]),o.v("fieldset",{classes:"form-group"},[u.createInputNode(t,"Email",this._onEmailInput)]),o.v("fieldset",{classes:"form-group"},[u.createInputNode(s,"Password",this._onPasswordInput)]),o.v("button",{classes:["btn btn-lg","btn-primary","pull-xs-right"],disabled:l,type:"submit"},["Sign Up"])])])])])])])},r}(n.WidgetBase);r.Register=p},97:function(e,r,t){"use strict";function s(e){var r=e.get,t=e.path;return{email:r(t("register","email")),password:r(t("register","password")),username:r(t("register","username")),errors:r(t("errors")),inProgress:r(t("register","loading")),onEmailInput:i.registerEmailInput(e),onPasswordInput:i.registerPasswordInput(e),onUsernameInput:i.registerUsernameInput(e),onRegister:i.register(e)}}Object.defineProperty(r,"__esModule",{value:!0});var n=t(19),o=t(109),i=t(40);r.RegisterContainer=n.Container(o.Register,"state",{getProperties:s})},99:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=t(0),n=t(3),o=t(2),i=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return s.__extends(r,e),r.prototype.render=function(){for(var e=this.properties.errors,r=Object.keys(e),t=[],n=0;n<r.length;n++)!function(n){t=s.__spread(t,e[r[n]].map(function(e){return r[n]+" "+e}))}(n);return o.v("ul",{classes:"error-messages"},t.map(function(e){return o.v("li",[e])}))},r}(n.WidgetBase);r.ErrorList=i}});
//# sourceMappingURL=RegisterContainer.js.map