/*!
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
dojoWebpackJsonp_dojo2_realworld([4],{108:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(0),n=r(3),o=r(2),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.__extends(t,e),t.prototype._onSubmit=function(e){e.preventDefault(),this.properties.onUpdateSettings()},t.prototype._onImageUrlInput=function(e){this.properties.onImageUrlInput(e.target.value)},t.prototype._onUsernameInput=function(e){this.properties.onUsernameInput(e.target.value)},t.prototype._onBioInput=function(e){this.properties.onBioInput(e.target.value)},t.prototype._onEmailInput=function(e){this.properties.onEmailInput(e.target.value)},t.prototype._onPasswordInput=function(e){this.properties.onPasswordInput(e.target.value)},t.prototype.onAttach=function(){this.properties.getUserSettings()},t.prototype.render=function(){var e=this.properties,t=e.email,r=e.password,s=e.bio,n=e.imageUrl,a=e.username,i=e.logout;return o.v("div",{classes:"settings-page"},[o.v("div",{classes:["container","page"]},[o.v("div",{classes:"row"},[o.v("div",{classes:["col-md-6","offset-md-3","col-xs-12"]},[o.v("h1",{classes:"text-xs-center"},["Your Settings"]),o.v("form",[o.v("fieldset",[o.v("fieldset",{classes:"form-group"},[o.v("input",{value:n,classes:"form-control",type:"text",placeholder:"URL of profile picture",oninput:this._onImageUrlInput})]),o.v("fieldset",{classes:"form-group"},[o.v("input",{value:a,classes:["form-control","form-control-lg"],type:"text",placeholder:"Your Name",oninput:this._onUsernameInput})]),o.v("fieldset",{classes:"form-group"},[o.v("textarea",{value:s,classes:["form-control","form-control-lg"],rows:8,placeholder:"Short bio about you",oninput:this._onBioInput})]),o.v("fieldset",{classes:"form-group"},[o.v("input",{value:t,classes:["form-control","form-control-lg"],type:"email",placeholder:"Email",oninput:this._onEmailInput})]),o.v("fieldset",{classes:"form-group"},[o.v("input",{value:r,classes:["form-control","form-control-lg"],type:"password",placeholder:"Password",oninput:this._onPasswordInput})]),o.v("button",{onclick:this._onSubmit,type:"submit",classes:["btn","btn-lg","btn-primary","pull-xs-right"]},["Update Settings"])])]),o.v("hr"),o.v("button",{onclick:i,classes:["btn","btn-outline-danger"]},["Or click here to logout"])])])])])},t}(n.WidgetBase);t.Settings=a},93:function(e,t,r){"use strict";function s(e,t){var r=e.get,s=e.path;return{email:r(s("settings","email")),password:r(s("settings","password")),username:r(s("settings","username")),imageUrl:r(s("settings","imageUrl")),bio:r(s("settings","bio")),onEmailInput:a.emailInput(e),onPasswordInput:a.passwordInput(e),onUsernameInput:a.usernameInput(e),onBioInput:a.bioInput(e),onImageUrlInput:a.imageUrlInput(e),onUpdateSettings:a.updateUserSettings(e),getUserSettings:a.getUserSettings(e),logout:i.logout(e)}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(18),o=r(108),a=r(98),i=r(39);t.SettingsContainer=n.Container(o.Settings,"state",{getProperties:s})},98:function(e,t,r){"use strict";var s=this;Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(11),a=r(12),i=r(40),u=o.createCommandFactory(),p=u(function(e){var t=n.__read(e.payload,1),r=t[0],s=e.path;return[a.replace(s("settings","email"),r)]}),l=u(function(e){var t=n.__read(e.payload,1),r=t[0],s=e.path;return[a.replace(s("settings","password"),r)]}),c=u(function(e){var t=n.__read(e.payload,1),r=t[0],s=e.path;return[a.replace(s("settings","username"),r)]}),g=u(function(e){var t=n.__read(e.payload,1),r=t[0],s=e.path;return[a.replace(s("settings","bio"),r)]}),d=u(function(e){var t=n.__read(e.payload,1),r=t[0],s=e.path;return[a.replace(s("settings","image"),r)]}),m=u(function(e){var t=e.path;e.get;return[a.replace(t("settings"),{loaded:!1,loading:!0})]}),f=u(function(e){var t=e.path,r=e.get;return n.__awaiter(s,void 0,void 0,function(){return n.__generator(this,function(e){return[2,[a.replace(t("settings"),r(t("user")))]]})})}),v=u(function(e){var t=e.path,r=e.get;return n.__awaiter(s,void 0,void 0,function(){var e,s,o,u,p;return n.__generator(this,function(n){switch(n.label){case 0:return e=r(t("user","token")),s={image:r(t("settings","image")),bio:r(t("settings","bio")),username:r(t("settings","username")),email:r(t("settings","email"))},o=r(t("settings","password")),o&&(s.password=o),[4,fetch("https://conduit.productionready.io/api/user",{method:"put",headers:i.getHeaders(e),body:JSON.stringify(s)})];case 1:return u=n.sent(),[4,u.json()];case 2:return p=n.sent(),[2,[a.replace(t("user"),p.user),a.replace(t("settings"),{loaded:!1,loading:!1}),a.replace(t("routing","outlet"),"user"),a.replace(t("routing","params"),{id:r(t("settings","username"))})]]}})})});t.getUserSettings=o.createProcess([m,f]),t.updateUserSettings=o.createProcess([v]),t.usernameInput=o.createProcess([c]),t.emailInput=o.createProcess([p]),t.passwordInput=o.createProcess([l]),t.bioInput=o.createProcess([g]),t.imageUrlInput=o.createProcess([d])}});
//# sourceMappingURL=SettingsContainer.js.map