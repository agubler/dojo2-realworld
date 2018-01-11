/*!
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
dojoWebpackJsonp_dojo2_realworld([4],{100:function(t,e,o){"use strict";function n(t,e,o){return s.v("fieldset",{classes:"form-group"},[s.v("input",{value:t,classes:["form-control","form-control-lg"],type:"text",placeholder:e,oninput:o})])}Object.defineProperty(e,"__esModule",{value:!0});var s=o(2);e.createInputNode=n},110:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(0),s=o(3),r=o(2),i=o(100),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n.__extends(e,t),e.prototype._onSubmit=function(t){t.preventDefault(),this.properties.onUpdateSettings({})},e.prototype._onImageUrlInput=function(t){var e=t.target.value;this.properties.onImageUrlInput({imageUrl:e})},e.prototype._onUsernameInput=function(t){var e=t.target.value;this.properties.onUsernameInput({username:e})},e.prototype._onBioInput=function(t){var e=t.target.value;this.properties.onBioInput({bio:e})},e.prototype._onEmailInput=function(t){var e=t.target.value;this.properties.onEmailInput({email:e})},e.prototype._onPasswordInput=function(t){var e=t.target.value;this.properties.onPasswordInput({password:e})},e.prototype._logout=function(){this.properties.logout({})},e.prototype.render=function(){var t=this.properties,e=t.email,o=t.password,n=t.bio,s=t.imageUrl,a=t.username;return r.v("div",{classes:"settings-page"},[r.v("div",{classes:["container","page"]},[r.v("div",{classes:"row"},[r.v("div",{classes:["col-md-6","offset-md-3","col-xs-12"]},[r.v("h1",{classes:"text-xs-center"},["Your Settings"]),r.v("form",[r.v("fieldset",[i.createInputNode(s,"URL of profile picture",this._onImageUrlInput),i.createInputNode(a,"Your Name",this._onUsernameInput),r.v("fieldset",{classes:"form-group"},[r.v("textarea",{value:n,classes:["form-control","form-control-lg"],rows:8,placeholder:"Short bio about you",oninput:this._onBioInput})]),i.createInputNode(e,"Email",this._onEmailInput),i.createInputNode(o,"Password",this._onPasswordInput),r.v("button",{onclick:this._onSubmit,type:"submit",classes:["btn","btn-lg","btn-primary","pull-xs-right"]},["Update Settings"])])]),r.v("hr"),r.v("button",{onclick:this._logout,classes:["btn","btn-outline-danger"]},["Or click here to logout"])])])])])},e}(s.WidgetBase);e.Settings=a},98:function(t,e,o){"use strict";function n(t){var e=t.get,o=t.path;return{email:e(o("settings","email")),password:e(o("settings","password")),username:e(o("settings","username")),imageUrl:e(o("settings","image")),bio:e(o("settings","bio")),onEmailInput:i.emailInputProcess(t),onPasswordInput:i.passwordInputProcess(t),onUsernameInput:i.usernameInputProcess(t),onBioInput:i.bioInputProcess(t),onImageUrlInput:i.imageUrlInputProcess(t),onUpdateSettings:i.updateUserSettingsProcess(t),logout:a.logoutProcess(t)}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(20),r=o(110),i=o(46),a=o(41);e.SettingsContainer=s.Container(r.Settings,"state",{getProperties:n})}});
//# sourceMappingURL=SettingsContainer.js.map