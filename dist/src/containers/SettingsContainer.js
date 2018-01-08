/*!
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
dojoWebpackJsonp_dojo2_realworld([1],{102:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(0),r=s(3),o=s(2),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype._onSubmit=function(e){e.preventDefault(),this.properties.onUpdateSettings()},t.prototype._onImageUrlInput=function(e){this.properties.onImageUrlInput(e.target.value)},t.prototype._onUsernameInput=function(e){this.properties.onUsernameInput(e.target.value)},t.prototype._onBioInput=function(e){this.properties.onBioInput(e.target.value)},t.prototype._onEmailInput=function(e){this.properties.onEmailInput(e.target.value)},t.prototype._onPasswordInput=function(e){this.properties.onPasswordInput(e.target.value)},t.prototype.render=function(){var e=this.properties,t=e.email,s=e.password,n=e.bio,r=e.imageUrl,a=e.username;return o.v("div",{classes:"settings-page"},[o.v("div",{classes:["container","page"]},[o.v("div",{classes:"row"},[o.v("div",{classes:["col-md-6","offset-md-3","col-xs-12"]},[o.v("h1",{classes:"text-xs-center"},["Your Settings"]),o.v("form",[o.v("fieldset",[o.v("fieldset",{classes:"form-group"},[o.v("input",{value:r,classes:"form-control",type:"text",placeholder:"URL of profile picture",oninput:this._onImageUrlInput})]),o.v("fieldset",{classes:"form-group"},[o.v("input",{value:a,classes:["form-control","form-control-lg"],type:"text",placeholder:"Your Name",oninput:this._onUsernameInput})]),o.v("fieldset",{classes:"form-group"},[o.v("textarea",{value:n,classes:["form-control","form-control-lg"],rows:8,placeholder:"Short bio about you",oninput:this._onBioInput})]),o.v("fieldset",{classes:"form-group"},[o.v("input",{value:t,classes:["form-control","form-control-lg"],type:"email",placeholder:"Email",oninput:this._onEmailInput})]),o.v("fieldset",{classes:"form-group"},[o.v("input",{value:s,classes:["form-control","form-control-lg"],type:"password",placeholder:"Password",oninput:this._onPasswordInput})]),o.v("button",{onclick:this._onSubmit,type:"submit",classes:["btn","btn-lg","btn-primary","pull-xs-right"]},["Update Settings"])])])])])])])},t}(r.WidgetBase);t.Settings=a},92:function(e,t,s){"use strict";function n(e,t){var s=e.get,n=e.path;return s(n("settings","loading"))||s(n("settings","loaded"))||a.getUserSettings(e)(),{email:s(n("settings","email")),password:s(n("settings","password")),username:s(n("settings","username")),imageUrl:s(n("settings","imageUrl")),bio:s(n("settings","bio")),onEmailInput:a.emailInput(e),onPasswordInput:a.passwordInput(e),onUsernameInput:a.usernameInput(e),onBioInput:a.bioInput(e),onImageUrlInput:a.imageUrlInput(e),onUpdateSettings:a.updateUserSettings(e)}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(18),o=s(102),a=s(95);t.SettingsContainer=r.Container(o.Settings,"state",{getProperties:n})},95:function(e,t,s){"use strict";var n=this;Object.defineProperty(t,"__esModule",{value:!0});var r=s(0),o=s(9),a=s(10),i=o.createCommandFactory(),p=i(function(e){var t=r.__read(e.payload,1),s=t[0],n=e.path;return[a.replace(n("settings","email"),s)]}),u=i(function(e){var t=r.__read(e.payload,1),s=t[0],n=e.path;return[a.replace(n("settings","password"),s)]}),l=i(function(e){var t=r.__read(e.payload,1),s=t[0],n=e.path;return[a.replace(n("settings","username"),s)]}),c=i(function(e){var t=r.__read(e.payload,1),s=t[0],n=e.path;return[a.replace(n("settings","bio"),s)]}),d=i(function(e){var t=r.__read(e.payload,1),s=t[0],n=e.path;return[a.replace(n("settings","imageUrl"),s)]}),g=i(function(e){var t=e.path;e.get;return[a.replace(t("settings"),{loaded:!1,loading:!0})]}),m=i(function(e){var t=e.path,s=e.get;return r.__awaiter(n,void 0,void 0,function(){var e,n,o,i,p;return r.__generator(this,function(u){switch(u.label){case 0:return e=s(t("session","token")),n=new Headers({"Content-Type":"application/json",Authorization:"Token "+e}),[4,fetch("https://conduit.productionready.io/api/user",{headers:n})];case 1:return o=u.sent(),[4,o.json()];case 2:return i=u.sent(),p=r.__assign({},i.user,{loaded:!0,loading:!1}),[2,[a.replace(t("settings"),p)]]}})})}),f=i(function(e){var t=e.path,s=e.get;return r.__awaiter(n,void 0,void 0,function(){var e,n,o,i,p,u,l;return r.__generator(this,function(c){switch(c.label){case 0:return e=s(t("session","token")),n=new Headers({"Content-Type":"application/json",Authorization:"Token "+e}),o={imageUrl:s(t("settings","imageUrl")),bio:s(t("settings","bio")),username:s(t("settings","username")),email:s(t("settings","email"))},i=s(t("settings","password")),i&&(o.password=i),[4,fetch("https://conduit.productionready.io/api/user",{method:"put",headers:n,body:JSON.stringify(o)})];case 1:return p=c.sent(),[4,p.json()];case 2:return u=c.sent(),l=r.__assign({},s(t("session")),u.user),[2,[a.replace(t("session"),l),a.replace(t("settings"),{loaded:!1,loading:!1}),a.replace(t("routing","outlet"),"user"),a.replace(t("profile"),void 0),a.replace(t("routing","params"),{id:s(t("settings","username"))})]]}})})});t.getUserSettings=o.createProcess([g,m]),t.updateUserSettings=o.createProcess([f]),t.usernameInput=o.createProcess([l]),t.emailInput=o.createProcess([p]),t.passwordInput=o.createProcess([u]),t.bioInput=o.createProcess([c]),t.imageUrlInput=o.createProcess([d])}});
//# sourceMappingURL=SettingsContainer.js.map