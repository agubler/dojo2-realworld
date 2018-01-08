/*!
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
dojoWebpackJsonp_dojo2_realworld([4],{84:function(e,t,r){"use strict";function a(e,t){var r=e.get,a=e.path,i=r(a("article","article","slug")),s=r(a("article","loading"));return t.slug===i||s||l.getArticle(e)(t.slug),{article:r(a("article","article")),loaded:r(a("article","loaded"))}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(18),s=r(91),l=r(37);t.ArticleContainer=i.Container(s.Article,"state",{getProperties:a})},91:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),i=r(3),s=r(2),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.render=function(){var e=this.properties,t=e.loaded,r=void 0!==t&&t,a=e.article,i=a.title,l=a.author,n=void 0===l?{}:l,c=a.createdAt;return r?s.v("div",{classes:"article-page"},[s.v("div",{classes:"banner"},[s.v("div",{classes:"container"},[s.v("h1",[i]),s.v("div",{classes:"article-meta"},[s.v("a",{href:""},[s.v("img",{src:n.image})]),s.v("div",{classes:"info"},[s.v("a",{href:"",classes:"author"},[n.username]),s.v("span",{classes:"date"},[new Date(c).toDateString()])])])])])]):null},t}(i.WidgetBase);t.Article=l}});
//# sourceMappingURL=ArticleContainer.js.map