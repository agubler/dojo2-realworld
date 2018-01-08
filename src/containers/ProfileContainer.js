/*!
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
dojoWebpackJsonp_dojo2_realworld([0],{87:function(e,r,t){"use strict";function i(e,r){var t=e.get,i=e.path,a=r.articleType,s=t(i("profile","username")),c=t(i("profile","articleType"));return o.setArticleTypeProcess(e)(a),s!==r.username?(o.getProfileProcess(e)(r.username),"fav"===a?o.getFavoritedArticlesProcess(e)(r.username):o.getMyArticlesProcess(e)(r.username)):a!==c&&("fav"===a?o.getFavoritedArticlesProcess(e)(r.username):o.getMyArticlesProcess(e)(r.username)),{bio:t(i("profile","bio")),username:t(i("profile","username")),image:t(i("profile","image")),email:t(i("profile","email")),articles:t(i("profile","articles")),articleType:t(i("profile","articleType")),onFav:n.favArticle(e)}}Object.defineProperty(r,"__esModule",{value:!0});var a=t(18),s=t(94),o=t(90),n=t(37);r.ProfileContainer=a.Container(s.Profile,"state",{getProperties:i})},90:function(e,r,t){"use strict";var i=this;Object.defineProperty(r,"__esModule",{value:!0});var a=t(0),s=t(9),o=t(10),n=s.createCommandFactory(),c=n(function(e){var r=(e.get,e.path),t=a.__read(e.payload,1);t[0];return a.__awaiter(i,void 0,void 0,function(){return a.__generator(this,function(e){return[2,[o.replace(r("profile","articles"),void 0)]]})})}),l=n(function(e){var r=(e.get,e.path),t=a.__read(e.payload,1),s=t[0];return a.__awaiter(i,void 0,void 0,function(){return a.__generator(this,function(e){return[2,[o.replace(r("profile","username"),s)]]})})}),u=n(function(e){var r=(e.get,e.path),t=a.__read(e.payload,1),s=t[0];return a.__awaiter(i,void 0,void 0,function(){var e,t;return a.__generator(this,function(i){switch(i.label){case 0:return[4,fetch("https://conduit.productionready.io/api/profiles/"+s)];case 1:return e=i.sent(),[4,e.json()];case 2:return t=i.sent(),[2,[o.replace(r("profile","image"),t.profile.image),o.replace(r("profile","bio"),t.profile.bio),o.replace(r("profile","email"),t.profile.email)]]}})})}),v=n(function(e){var r=(e.get,e.path),t=a.__read(e.payload,1),s=t[0];return a.__awaiter(i,void 0,void 0,function(){var e,t;return a.__generator(this,function(i){switch(i.label){case 0:return[4,fetch("https://conduit.productionready.io/api/articles?author="+s)];case 1:return e=i.sent(),[4,e.json()];case 2:return t=i.sent(),[2,[o.replace(r("profile","articles"),t.articles)]]}})})}),p=n(function(e){var r=(e.get,e.path),t=a.__read(e.payload,1),i=t[0];return[o.replace(r("profile","articleType"),i)]}),f=n(function(e){var r=e.get,t=e.path,s=a.__read(e.payload,1),n=s[0];return a.__awaiter(i,void 0,void 0,function(){var e,i,s,c;return a.__generator(this,function(a){switch(a.label){case 0:return e=r(t("session","token")),i=new Headers({"Content-Type":"application/json",Authorization:"Token "+e}),[4,fetch("https://conduit.productionready.io/api/articles?favorited="+n,{headers:i})];case 1:return s=a.sent(),[4,s.json()];case 2:return c=a.sent(),[2,[o.replace(t("profile","articles"),c.articles)]]}})})});r.setArticleTypeProcess=s.createProcess([p]),r.getProfileProcess=s.createProcess([c,l,u]),r.getMyArticlesProcess=s.createProcess([c,v]),r.getFavoritedArticlesProcess=s.createProcess([c,f])},94:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=t(0),a=t(3),s=t(2),o=t(39),n=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(r,e),r.prototype.render=function(){var e=this.properties,r=e.username,t=e.bio,i=e.image,a=e.articles,n=e.articleType,c=e.onFav,l=s.v("div",{classes:"article-preview"},["Loading..."]);return a=a?a.filter(function(e){return e.favorited||"my"===n}):a,a&&0===a.length?l=s.v("div",{classes:"article-preview"},["No articles here, yet!"]):a&&a.length>0&&(l=s.v("div",a.map(function(e,r){return s.w(o.ArticlePreview,{key:r,article:e,onFav:c,view:"profile"})}))),s.v("div",{classes:"profile-page"},[s.v("div",{classes:"user-info"},[s.v("div",{classes:"container"},[s.v("div",{classes:"row"},[s.v("div",{classes:["col-xs-12","col-md-10","offset-md-1"]},[s.v("img",{src:i,classes:"user-img"}),s.v("h4",[r]),s.v("p",[t]),s.v("button",{classes:["btn","btn-sm","btn-outline-secondary","action-btn"]},[s.v("i",{classes:"ion-plus-round"})," Follow "+r])])])])]),s.v("div",{classes:"container"},[s.v("div",{classes:"row"},[s.v("div",{classes:["col-xs-12","col-md-10","offset-md-1"]},[s.v("div",{classes:"articles-toggle"},[s.v("ul",{classes:["nav","nav-pills","outline-active"]},[s.v("li",{classes:"nav-item"},[s.v("a",{href:"#user/"+r,classes:["nav-link","my"===n?"active":null]},["My Articles"])]),s.v("li",{classes:"nav-item"},[s.v("a",{href:"#user/"+r+"/favorites",classes:["nav-link","fav"===n?"active":null]},["Favorited Articles"])])])]),l])])])])},r}(a.WidgetBase);r.Profile=n}});
//# sourceMappingURL=ProfileContainer.js.map