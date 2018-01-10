/*!
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
dojoWebpackJsonp_dojo2_realworld([0],{101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(3),i=n(2),o=n(26),l=n(111),a=n(105),u=n(104),h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype._addComment=function(e){if(e.preventDefault(),this.properties.article){var t=this.properties,n=t.article.slug,r=t.newComment;this.properties.addComment({slug:n,newComment:r})}},t.prototype._onNewCommentInput=function(e){this.properties.onNewCommentInput({newComment:e.target.value})},t.prototype.render=function(){var e=this.properties,t=e.username,n=e.deleteArticle,r=e.followUser,s=e.favoriteArticle,h=e.isAuthenticated,c=e.newComment,p=e.deleteComment,d=e.comments,g=e.loaded,f=e.loggedInUser,m=e.article;if(!g)return i.v("div",{classes:"article-page"},[i.v("div",{key:"banner",classes:"banner"})]);var b=m.createdAt,v=m.slug,k=m.favorited,y=m.favoritesCount,x=m.author;return i.v("div",{classes:"article-page"},[i.v("div",{key:"banner",classes:"banner"},[i.v("div",{classes:"container"},[i.v("h1",[m.title]),h?i.w(u.ArticleMeta,{authorProfile:x,slug:v,createdAt:b,favoriteArticle:s,followUser:r,deleteArticle:n,username:t,favorited:k,favoritesCount:y}):null])]),i.v("div",{key:"page",classes:["container","page"]},[i.v("div",{classes:["row","article-content"]},[i.v("div",{classes:"col-xs-12"},[i.v("div",{innerHTML:l(m.body,{sanitize:!0})}),i.v("ul",{classes:"tag-list"},m.tagList.map(function(e){return i.v("li",{classes:["tag-default","tag-pill","tag-outline"]},[e])}))])]),i.v("hr"),i.v("div",{classes:"article-actions"},[h?i.w(u.ArticleMeta,{authorProfile:x,slug:v,createdAt:b,favoriteArticle:s,followUser:r,deleteArticle:n,username:t,favorited:k,favoritesCount:y}):null]),i.v("div",{classes:"row"},[i.v("div",{classes:["col-xs-12","col-md-8","offset-md-2"]},[h?i.v("form",{classes:["card","comment-form"]},[i.v("div",{classes:"card-block"},[i.v("textarea",{value:c,oninput:this._onNewCommentInput,classes:"form-control",placeholder:"Write a comment...",rows:3})]),i.v("div",{classes:"card-footer"},[i.v("img",{classes:"comment-author-img",src:""}),i.v("button",{onclick:this._addComment,classes:["btn","btn-sm","btn-primary"]},["Post Comment"])])]):i.v("p",[i.w(o.Link,{to:"login"},["Sign In"])," or ",i.w(o.Link,{to:"register"},["Sign Up"])," to add comments on this article."]),i.v("div",d.map(function(e,t){return i.w(a.Comment,{key:t,comment:e,loggedInUser:f,deleteComment:p,slug:m.slug})}))])])])])},t}(s.WidgetBase);t.Article=h},102:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(3),i=n(2),o=n(26),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype._deleteArticle=function(){var e=this.properties.slug;this.properties.deleteArticle({slug:e})},t.prototype.render=function(){var e=this.properties.slug;return i.v("span",[i.w(o.Link,{to:"edit-post",params:{slug:e},classes:["btn","btn-sm","btn-outline-secondary"]},[i.v("i",{classes:"ion-edit"})," Edit Article"]),i.v("button",{onclick:this._deleteArticle,classes:["btn","btn-sm","btn-outline-danger"]},[i.v("i",{classes:"ion-trash-a"})," Delete Article"])])},t}(s.WidgetBase);t.ArticleAuthorControls=l},103:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(3),i=n(2),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype._favoriteArticle=function(){var e=this.properties,t=e.slug,n=e.favorited;this.properties.favoriteArticle({slug:t,favorited:n})},t.prototype._followUser=function(){var e=this.properties,t=e.authorUsername,n=e.following;this.properties.followUser({username:t,following:n})},t.prototype.render=function(){var e=this.properties,t=e.favoritesCount,n=e.favorited,r=e.following,s=e.authorUsername;return i.v("span",[i.v("button",{onclick:this._followUser,classes:["btn","btn-sm",r?"btn-secondary":"btn-outline-secondary"]},[i.v("i",{classes:"ion-plus-round"}),(r?" Unfollow":" Follow")+" "+s]),i.v("button",{onclick:this._favoriteArticle,classes:["btn","btn-sm",n?"btn-primary":"btn-outline-primary"]},[i.v("i",{classes:"ion-heart"}),n?" Unfavorite":" Favorite",i.v("span",{classes:"counter"},["("+t+")"])])])},t}(s.WidgetBase);t.ArticleControls=o},104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(3),i=n(2),o=n(26),l=n(103),a=n(102),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){var e=this.properties,t=e.favoriteArticle,n=e.followUser,r=e.deleteArticle,s=e.username,u=e.favorited,h=e.favoritesCount,c=e.createdAt,p=e.slug,d=e.authorProfile;return i.v("div",{classes:"article-meta"},[i.w(o.Link,{to:"user",params:{username:d.username}},[i.v("img",{src:d.image})]),i.v("div",{classes:"info"},[i.w(o.Link,{to:"user",classes:"author",params:{username:d.username}},[d.username]),i.v("span",{classes:"date"},[new Date(c).toDateString()])]),s===d.username?i.w(a.ArticleAuthorControls,{slug:p,deleteArticle:r}):i.w(l.ArticleControls,{favorited:u,followUser:n,favoriteArticle:t,favoritesCount:h,slug:p,following:d.following,authorUsername:d.username})])},t}(s.WidgetBase);t.ArticleMeta=u},105:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(3),i=n(2),o=n(26),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype._deleteComment=function(){var e=this.properties,t=e.slug,n=e.comment.id;this.properties.deleteComment({slug:t,id:n})},t.prototype.render=function(){var e=this.properties,t=e.comment,n=e.loggedInUser;return i.v("div",{classes:"card"},[i.v("div",{classes:"card-block"},[i.v("p",{classes:"card-text"},[t.body])]),i.v("div",{classes:"card-footer"},[i.w(o.Link,{to:"user",classes:"comment-author",params:{username:t.author.username}},[i.v("img",{src:t.author.image,classes:"comment-author-img"})]),i.w(o.Link,{to:"user",classes:"comment-author",params:{username:t.author.username}},[" "+t.author.username]),i.v("div",{classes:"date-posted"},[new Date(t.createdAt).toDateString()]),n?i.v("div",{classes:"mod-options"},[i.v("i",{classes:"ion-trash-a",onclick:this._deleteComment})]):null])])},t}(s.WidgetBase);t.Comment=l},111:function(e,t,n){(function(t){(function(){"use strict";function t(e){this.tokens=[],this.tokens.links={},this.options=e||c.defaults,this.rules=p.normal,this.options.gfm&&(this.options.tables?this.rules=p.tables:this.rules=p.gfm)}function n(e,t){if(this.options=t||c.defaults,this.links=e,this.rules=d.normal,this.renderer=this.options.renderer||new r,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=d.breaks:this.rules=d.gfm:this.options.pedantic&&(this.rules=d.pedantic)}function r(e){this.options=e||{}}function s(e){this.tokens=[],this.token=null,this.options=e||c.defaults,this.options.renderer=this.options.renderer||new r,this.renderer=this.options.renderer,this.renderer.options=this.options}function i(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function o(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function l(e,t){return e=e.source,t=t||"",function n(r,s){return r?(s=s.source||s,s=s.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,s),n):new RegExp(e,t)}}function a(e,t){return g[" "+e]||(/^[^:]+:\/*[^\/]*$/.test(e)?g[" "+e]=e+"/":g[" "+e]=e.replace(/[^\/]*$/,"")),e=g[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^\/]*)[\s\S]*/,"$1")+t:e+t}function u(){}function h(e){for(var t,n,r=1;r<arguments.length;r++){t=arguments[r];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function c(e,n,r){if(r||"function"==typeof n){r||(r=n,n=null),n=h({},c.defaults,n||{});var o,l,a=n.highlight,u=0;try{o=t.lex(e,n)}catch(e){return r(e)}l=o.length;var p=function(e){if(e)return n.highlight=a,r(e);var t;try{t=s.parse(o,n)}catch(t){e=t}return n.highlight=a,e?r(e):r(null,t)};if(!a||a.length<3)return p();if(delete n.highlight,!l)return p();for(;u<o.length;u++)!function(e){"code"!==e.type?--l||p():a(e.text,e.lang,function(t,n){return t?p(t):null==n||n===e.text?--l||p():(e.text=n,e.escaped=!0,void(--l||p()))})}(o[u])}else try{return n&&(n=h({},c.defaults,n)),s.parse(t.lex(e,n),n)}catch(e){if(e.message+="\nPlease report this to https://github.com/chjj/marked.",(n||c.defaults).silent)return"<p>An error occurred:</p><pre>"+i(e.message+"",!0)+"</pre>";throw e}}var p={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:u,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:u,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:u,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};p.bullet=/(?:[*+-]|\d+\.)/,p.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,p.item=l(p.item,"gm")(/bull/g,p.bullet)(),p.list=l(p.list)(/bull/g,p.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+p.def.source+")")(),p.blockquote=l(p.blockquote)("def",p.def)(),p._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",p.html=l(p.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,p._tag)(),p.paragraph=l(p.paragraph)("hr",p.hr)("heading",p.heading)("lheading",p.lheading)("blockquote",p.blockquote)("tag","<"+p._tag)("def",p.def)(),p.normal=h({},p),p.gfm=h({},p.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),p.gfm.paragraph=l(p.paragraph)("(?!","(?!"+p.gfm.fences.source.replace("\\1","\\2")+"|"+p.list.source.replace("\\1","\\3")+"|")(),p.tables=h({},p.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.rules=p,t.lex=function(e,n){return new t(n).lex(e)},t.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},t.prototype.token=function(e,t,n){for(var r,s,i,o,l,a,u,h,c,e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:i.replace(/\n+$/,"")});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(t&&(i=this.rules.nptable.exec(e))){for(e=e.substring(i[0].length),a={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/\n$/,"").split("\n")},h=0;h<a.align.length;h++)/^ *-+: *$/.test(a.align[h])?a.align[h]="right":/^ *:-+: *$/.test(a.align[h])?a.align[h]="center":/^ *:-+ *$/.test(a.align[h])?a.align[h]="left":a.align[h]=null;for(h=0;h<a.cells.length;h++)a.cells[h]=a.cells[h].split(/ *\| */);this.tokens.push(a)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t,!0),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),o=i[2],this.tokens.push({type:"list_start",ordered:o.length>1}),i=i[0].match(this.rules.item),r=!1,c=i.length,h=0;h<c;h++)a=i[h],u=a.length,a=a.replace(/^ *([*+-]|\d+\.) +/,""),~a.indexOf("\n ")&&(u-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+u+"}","gm"),"")),this.options.smartLists&&h!==c-1&&(l=p.bullet.exec(i[h+1])[0],o===l||o.length>1&&l.length>1||(e=i.slice(h+1).join("\n")+e,h=c-1)),s=r||/\n\n(?!\s*$)/.test(a),h!==c-1&&(r="\n"===a.charAt(a.length-1),s||(s=r)),this.tokens.push({type:s?"loose_item_start":"list_item_start"}),this.token(a,!1,n),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(!n&&t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),this.tokens.links[i[1].toLowerCase()]={href:i[2],title:i[3]};else if(t&&(i=this.rules.table.exec(e))){for(e=e.substring(i[0].length),a={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/(?: *\| *)?\n$/,"").split("\n")},h=0;h<a.align.length;h++)/^ *-+: *$/.test(a.align[h])?a.align[h]="right":/^ *:-+: *$/.test(a.align[h])?a.align[h]="center":/^ *:-+ *$/.test(a.align[h])?a.align[h]="left":a.align[h]=null;for(h=0;h<a.cells.length;h++)a.cells[h]=a.cells[h].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(a)}else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var d={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ <>]+(@|:\/)[^ <>]+)>/,url:u,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^<'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)([\s\S]*?[^`])\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:u,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};d._inside=/(?:\[[^\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/,d._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,d.link=l(d.link)("inside",d._inside)("href",d._href)(),d.reflink=l(d.reflink)("inside",d._inside)(),d.normal=h({},d),d.pedantic=h({},d.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),d.gfm=h({},d.normal,{escape:l(d.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:l(d.text)("]|","~]|")("|","|https?://|")()}),d.breaks=h({},d.gfm,{br:l(d.br)("{2,}","*")(),text:l(d.gfm.text)("{2,}","*")()}),n.rules=d,n.output=function(e,t,r){return new n(t,r).output(e)},n.prototype.output=function(e){for(var t,n,r,s,o="";e;)if(s=this.rules.escape.exec(e))e=e.substring(s[0].length),o+=s[1];else if(s=this.rules.autolink.exec(e))e=e.substring(s[0].length),"@"===s[2]?(n=i(":"===s[1].charAt(6)?this.mangle(s[1].substring(7)):this.mangle(s[1])),r=this.mangle("mailto:")+n):(n=i(s[1]),r=n),o+=this.renderer.link(r,null,n);else if(this.inLink||!(s=this.rules.url.exec(e))){if(s=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(s[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(s[0])&&(this.inLink=!1),e=e.substring(s[0].length),o+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):i(s[0]):s[0];else if(s=this.rules.link.exec(e))e=e.substring(s[0].length),this.inLink=!0,o+=this.outputLink(s,{href:s[2],title:s[3]}),this.inLink=!1;else if((s=this.rules.reflink.exec(e))||(s=this.rules.nolink.exec(e))){if(e=e.substring(s[0].length),t=(s[2]||s[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){o+=s[0].charAt(0),e=s[0].substring(1)+e;continue}this.inLink=!0,o+=this.outputLink(s,t),this.inLink=!1}else if(s=this.rules.strong.exec(e))e=e.substring(s[0].length),o+=this.renderer.strong(this.output(s[2]||s[1]));else if(s=this.rules.em.exec(e))e=e.substring(s[0].length),o+=this.renderer.em(this.output(s[2]||s[1]));else if(s=this.rules.code.exec(e))e=e.substring(s[0].length),o+=this.renderer.codespan(i(s[2].trim(),!0));else if(s=this.rules.br.exec(e))e=e.substring(s[0].length),o+=this.renderer.br();else if(s=this.rules.del.exec(e))e=e.substring(s[0].length),o+=this.renderer.del(this.output(s[1]));else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),o+=this.renderer.text(i(this.smartypants(s[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(s[0].length),n=i(s[1]),r=n,o+=this.renderer.link(r,null,n);return o},n.prototype.outputLink=function(e,t){var n=i(t.href),r=t.title?i(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,i(e[1]))},n.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},n.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,s=0;s<r;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},r.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+i(t,!0)+'">'+(n?e:i(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:i(e,!0))+"\n</code></pre>"},r.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},r.prototype.html=function(e){return e},r.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},r.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},r.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},r.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},r.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},r.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},r.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},r.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},r.prototype.strong=function(e){return"<strong>"+e+"</strong>"},r.prototype.em=function(e){return"<em>"+e+"</em>"},r.prototype.codespan=function(e){return"<code>"+e+"</code>"},r.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},r.prototype.del=function(e){return"<del>"+e+"</del>"},r.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(o(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return n}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return n}this.options.baseUrl&&!f.test(e)&&(e=a(this.options.baseUrl,e));var s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>"},r.prototype.image=function(e,t,n){this.options.baseUrl&&!f.test(e)&&(e=a(this.options.baseUrl,e));var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},r.prototype.text=function(e){return e},s.parse=function(e,t,n){return new s(t,n).parse(e)},s.prototype.parse=function(e){this.inline=new n(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},s.prototype.next=function(){return this.token=this.tokens.pop()},s.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},s.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},s.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,s="",i="";for(n="",e=0;e<this.token.header.length;e++)({header:!0,align:this.token.align[e]}),n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(s+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});i+=this.renderer.tablerow(n)}return this.renderer.table(s,i);case"blockquote_start":for(var i="";"blockquote_end"!==this.next().type;)i+=this.tok();return this.renderer.blockquote(i);case"list_start":for(var i="",o=this.token.ordered;"list_end"!==this.next().type;)i+=this.tok();return this.renderer.list(i,o);case"list_item_start":for(var i="";"list_item_end"!==this.next().type;)i+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(i);case"loose_item_start":for(var i="";"list_item_end"!==this.next().type;)i+=this.tok();return this.renderer.listitem(i);case"html":var l=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(l);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var g={},f=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;u.exec=u,c.options=c.setOptions=function(e){return h(c.defaults,e),c},c.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new r,xhtml:!1,baseUrl:null},c.Parser=s,c.parser=s.parse,c.Renderer=r,c.Lexer=t,c.lexer=t.lex,c.InlineLexer=n,c.inlineLexer=n.output,c.parse=c,e.exports=c}).call(function(){return this||("undefined"!=typeof window?window:t)}())}).call(t,n(20))},93:function(e,t,n){"use strict";function r(e,t){var n=e.get,r=e.path;return{article:n(r("article","item")),authorProfile:n(r("article","item","author")),comments:n(r("article","comments"))||[],newComment:n(r("article","newComment")),loaded:n(r("article","loaded")),isAuthenticated:!!n(r("user","token")),loggedInUser:n(r("user","username")),username:n(r("user","username")),slug:t.slug,deleteComment:o.deleteCommentProcess(e),addComment:o.addCommentProcess(e),onNewCommentInput:o.newCommentInputProcess(e),favoriteArticle:o.favoriteArticleProcess(e),followUser:o.followUserProcess(e),deleteArticle:o.deleteArticleProcess(e)}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(19),i=n(101),o=n(42);t.ArticleContainer=s.Container(i.Article,"state",{getProperties:r})}});
//# sourceMappingURL=ArticleContainer.js.map