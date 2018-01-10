/*!
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
dojoWebpackJsonp_dojo2_realworld([2],{105:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),n=r(3),s=r(2),i=r(24),a=r(96),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype._onEmailInput=function(e){this.properties.onEmailInput(e.target.value)},t.prototype._onPasswordInput=function(e){this.properties.onPasswordInput(e.target.value)},t.prototype._onLogin=function(e){e.preventDefault(),this.properties.onLogin()},t.prototype.render=function(){var e=this.properties,t=e.errors,r=e.email,o=e.password,n=e.inProgress,l=void 0!==n&&n;return s.v("div",{classes:"auth-page"},[s.v("div",{classes:["container","page"]},[s.v("div",{classes:"row"},[s.v("div",{classes:["col-md-6","offset-md-3","col-xs-12"]},[s.v("h1",{classes:"text-xs-center"},["Sign In"]),s.v("p",{classes:"text-xs-center"},[s.w(i.Link,{to:"register"},["Need an account?"])]),t?s.w(a.ErrorList,{errors:t}):null,s.v("form",{onsubmit:this._onLogin},[s.v("fieldset",[s.v("fieldset",{classes:"form-group"},[s.v("input",{classes:["form-control","form-control-lg"],type:"email",placeholder:"Email",oninput:this._onEmailInput,value:r})]),s.v("fieldset",{classes:"form-group"},[s.v("input",{classes:["form-control","form-control-lg"],type:"password",placeholder:"Password",oninput:this._onPasswordInput,value:o})]),s.v("button",{classes:["btn btn-lg","btn-primary","pull-xs-right"],disabled:l,type:"submit"},["Sign In"])])])])])])])},t}(n.WidgetBase);t.Login=l},92:function(e,t,r){"use strict";function o(e,t){var r=e.get,o=e.path;return{email:r(o("login","email")),password:r(o("login","password")),errors:r(o("errors")),inProgress:r(o("login","loading")),onEmailInput:i.loginEmailInput(e),onPasswordInput:i.loginPasswordInput(e),onLogin:i.login(e)}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(18),s=r(105),i=r(40);t.LoginContainer=n.Container(s.Login,"state",{getProperties:o})},96:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),n=r(3),s=r(2),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.render=function(){for(var e=this.properties.errors,t=Object.keys(e),r=[],n=0;n<t.length;n++)!function(n){r=o.__spread(r,e[t[n]].map(function(e){return t[n]+" "+e}))}(n);return s.v("ul",{classes:"error-messages"},r.map(function(e){return s.v("li",[e])}))},t}(n.WidgetBase);t.ErrorList=i}});
//# sourceMappingURL=LoginContainer.js.map