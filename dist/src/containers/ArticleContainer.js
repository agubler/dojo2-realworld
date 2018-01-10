/*!
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
dojoWebpackJsonp_dojo2_realworld([0],{100:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),s=r(3),i=r(2),o=r(24),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype._deleteArticle=function(){var e=this.properties.slug;this.properties.deleteArticle(e)},t.prototype.render=function(){var e=this.properties.slug;return i.v("span",[i.w(o.Link,{to:"edit-post",params:{slug:e},classes:["btn","btn-sm","btn-outline-secondary"]},[i.v("i",{classes:"ion-edit"})," Edit Article"]),i.v("button",{onclick:this._deleteArticle,classes:["btn","btn-sm","btn-outline-danger"]},[i.v("i",{classes:"ion-trash-a"})," Delete Article"])])},t}(s.WidgetBase);t.ArticleAuthorControls=a},101:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),s=r(3),i=r(2),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype._favoriteArticle=function(){var e=this.properties,t=e.slug,r=e.favorited;this.properties.favoriteArticle(t,r)},t.prototype._followUser=function(){var e=this.properties,t=e.authorUsername,r=e.following;this.properties.followUser(t,r)},t.prototype.render=function(){var e=this.properties,t=e.favoritesCount,r=e.favorited,n=e.following,s=e.authorUsername;return i.v("span",[i.v("button",{onclick:this._followUser,classes:["btn","btn-sm",n?"btn-secondary":"btn-outline-secondary"]},[i.v("i",{classes:"ion-plus-round"}),(n?" Unfollow":" Follow")+" "+s]),i.v("button",{onclick:this._favoriteArticle,classes:["btn","btn-sm",r?"btn-primary":"btn-outline-primary"]},[i.v("i",{classes:"ion-heart"}),r?" Unfavorite":" Favorite",i.v("span",{classes:"counter"},["("+t+")"])])])},t}(s.WidgetBase);t.ArticleControls=o},102:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),s=r(3),i=r(2),o=r(24),a=r(101),l=r(100),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.render=function(){var e=this.properties,t=e.favoriteArticle,r=e.followUser,n=e.deleteArticle,s=e.username,c=e.favorited,u=e.favoritesCount,h=e.createdAt,p=e.slug,d=e.authorProfile;return i.v("div",{classes:"article-meta"},[i.w(o.Link,{to:"user",params:{id:d.username}},[i.v("img",{src:d.image})]),i.v("div",{classes:"info"},[i.w(o.Link,{to:"user",classes:"author",params:{id:d.username}},[d.username]),i.v("span",{classes:"date"},[new Date(h).toDateString()])]),s===d.username?i.w(l.ArticleAuthorControls,{slug:p,deleteArticle:n}):i.w(a.ArticleControls,{favorited:c,followUser:r,favoriteArticle:t,favoritesCount:u,slug:p,following:d.following,authorUsername:d.username})])},t}(s.WidgetBase);t.ArticleMeta=c},103:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),s=r(3),i=r(2),o=r(24),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype._deleteComment=function(){this.properties.deleteComment(this.properties.slug,this.properties.comment.id)},t.prototype.render=function(){var e=this.properties,t=e.comment,r=e.loggedInUser;return i.v("div",{classes:"card"},[i.v("div",{classes:"card-block"},[i.v("p",{classes:"card-text"},[t.body])]),i.v("div",{classes:"card-footer"},[i.w(o.Link,{to:"user",classes:"comment-author",params:{id:t.author.username}},[i.v("img",{src:t.author.image,classes:"comment-author-img"})]),i.w(o.Link,{to:"user",classes:"comment-author",params:{id:t.author.username}},[" "+t.author.username]),i.v("div",{classes:"date-posted"},[new Date(t.createdAt).toDateString()]),r?i.v("div",{classes:"mod-options"},[i.v("i",{classes:"ion-trash-a",onclick:this._deleteComment})]):null])])},t}(s.WidgetBase);t.Comment=a},109:function(e,t,r){(function(t){(function(){"use strict";function t(e){this.tokens=[],this.tokens.links={},this.options=e||h.defaults,this.rules=p.normal,this.options.gfm&&(this.options.tables?this.rules=p.tables:this.rules=p.gfm)}function r(e,t){if(this.options=t||h.defaults,this.links=e,this.rules=d.normal,this.renderer=this.options.renderer||new n,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=d.breaks:this.rules=d.gfm:this.options.pedantic&&(this.rules=d.pedantic)}function n(e){this.options=e||{}}function s(e){this.tokens=[],this.token=null,this.options=e||h.defaults,this.options.renderer=this.options.renderer||new n,this.renderer=this.options.renderer,this.renderer.options=this.options}function i(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function o(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function a(e,t){return e=e.source,t=t||"",function r(n,s){return n?(s=s.source||s,s=s.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(n,s),r):new RegExp(e,t)}}function l(e,t){return g[" "+e]||(/^[^:]+:\/*[^\/]*$/.test(e)?g[" "+e]=e+"/":g[" "+e]=e.replace(/[^\/]*$/,"")),e=g[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^\/]*)[\s\S]*/,"$1")+t:e+t}function c(){}function u(e){for(var t,r,n=1;n<arguments.length;n++){t=arguments[n];for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}function h(e,r,n){if(n||"function"==typeof r){n||(n=r,r=null),r=u({},h.defaults,r||{});var o,a,l=r.highlight,c=0;try{o=t.lex(e,r)}catch(e){return n(e)}a=o.length;var p=function(e){if(e)return r.highlight=l,n(e);var t;try{t=s.parse(o,r)}catch(t){e=t}return r.highlight=l,e?n(e):n(null,t)};if(!l||l.length<3)return p();if(delete r.highlight,!a)return p();for(;c<o.length;c++)!function(e){"code"!==e.type?--a||p():l(e.text,e.lang,function(t,r){return t?p(t):null==r||r===e.text?--a||p():(e.text=r,e.escaped=!0,void(--a||p()))})}(o[c])}else try{return r&&(r=u({},h.defaults,r)),s.parse(t.lex(e,r),r)}catch(e){if(e.message+="\nPlease report this to https://github.com/chjj/marked.",(r||h.defaults).silent)return"<p>An error occurred:</p><pre>"+i(e.message+"",!0)+"</pre>";throw e}}var p={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:c,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:c,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:c,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};p.bullet=/(?:[*+-]|\d+\.)/,p.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,p.item=a(p.item,"gm")(/bull/g,p.bullet)(),p.list=a(p.list)(/bull/g,p.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+p.def.source+")")(),p.blockquote=a(p.blockquote)("def",p.def)(),p._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",p.html=a(p.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,p._tag)(),p.paragraph=a(p.paragraph)("hr",p.hr)("heading",p.heading)("lheading",p.lheading)("blockquote",p.blockquote)("tag","<"+p._tag)("def",p.def)(),p.normal=u({},p),p.gfm=u({},p.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),p.gfm.paragraph=a(p.paragraph)("(?!","(?!"+p.gfm.fences.source.replace("\\1","\\2")+"|"+p.list.source.replace("\\1","\\3")+"|")(),p.tables=u({},p.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.rules=p,t.lex=function(e,r){return new t(r).lex(e)},t.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},t.prototype.token=function(e,t,r){for(var n,s,i,o,a,l,c,u,h,e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:i.replace(/\n+$/,"")});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(t&&(i=this.rules.nptable.exec(e))){for(e=e.substring(i[0].length),l={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/\n$/,"").split("\n")},u=0;u<l.align.length;u++)/^ *-+: *$/.test(l.align[u])?l.align[u]="right":/^ *:-+: *$/.test(l.align[u])?l.align[u]="center":/^ *:-+ *$/.test(l.align[u])?l.align[u]="left":l.align[u]=null;for(u=0;u<l.cells.length;u++)l.cells[u]=l.cells[u].split(/ *\| */);this.tokens.push(l)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t,!0),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),o=i[2],this.tokens.push({type:"list_start",ordered:o.length>1}),i=i[0].match(this.rules.item),n=!1,h=i.length,u=0;u<h;u++)l=i[u],c=l.length,l=l.replace(/^ *([*+-]|\d+\.) +/,""),~l.indexOf("\n ")&&(c-=l.length,l=this.options.pedantic?l.replace(/^ {1,4}/gm,""):l.replace(new RegExp("^ {1,"+c+"}","gm"),"")),this.options.smartLists&&u!==h-1&&(a=p.bullet.exec(i[u+1])[0],o===a||o.length>1&&a.length>1||(e=i.slice(u+1).join("\n")+e,u=h-1)),s=n||/\n\n(?!\s*$)/.test(l),u!==h-1&&(n="\n"===l.charAt(l.length-1),s||(s=n)),this.tokens.push({type:s?"loose_item_start":"list_item_start"}),this.token(l,!1,r),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(!r&&t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),this.tokens.links[i[1].toLowerCase()]={href:i[2],title:i[3]};else if(t&&(i=this.rules.table.exec(e))){for(e=e.substring(i[0].length),l={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/(?: *\| *)?\n$/,"").split("\n")},u=0;u<l.align.length;u++)/^ *-+: *$/.test(l.align[u])?l.align[u]="right":/^ *:-+: *$/.test(l.align[u])?l.align[u]="center":/^ *:-+ *$/.test(l.align[u])?l.align[u]="left":l.align[u]=null;for(u=0;u<l.cells.length;u++)l.cells[u]=l.cells[u].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(l)}else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var d={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ <>]+(@|:\/)[^ <>]+)>/,url:c,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^<'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)([\s\S]*?[^`])\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:c,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};d._inside=/(?:\[[^\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/,d._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,d.link=a(d.link)("inside",d._inside)("href",d._href)(),d.reflink=a(d.reflink)("inside",d._inside)(),d.normal=u({},d),d.pedantic=u({},d.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),d.gfm=u({},d.normal,{escape:a(d.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:a(d.text)("]|","~]|")("|","|https?://|")()}),d.breaks=u({},d.gfm,{br:a(d.br)("{2,}","*")(),text:a(d.gfm.text)("{2,}","*")()}),r.rules=d,r.output=function(e,t,n){return new r(t,n).output(e)},r.prototype.output=function(e){for(var t,r,n,s,o="";e;)if(s=this.rules.escape.exec(e))e=e.substring(s[0].length),o+=s[1];else if(s=this.rules.autolink.exec(e))e=e.substring(s[0].length),"@"===s[2]?(r=i(":"===s[1].charAt(6)?this.mangle(s[1].substring(7)):this.mangle(s[1])),n=this.mangle("mailto:")+r):(r=i(s[1]),n=r),o+=this.renderer.link(n,null,r);else if(this.inLink||!(s=this.rules.url.exec(e))){if(s=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(s[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(s[0])&&(this.inLink=!1),e=e.substring(s[0].length),o+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):i(s[0]):s[0];else if(s=this.rules.link.exec(e))e=e.substring(s[0].length),this.inLink=!0,o+=this.outputLink(s,{href:s[2],title:s[3]}),this.inLink=!1;else if((s=this.rules.reflink.exec(e))||(s=this.rules.nolink.exec(e))){if(e=e.substring(s[0].length),t=(s[2]||s[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){o+=s[0].charAt(0),e=s[0].substring(1)+e;continue}this.inLink=!0,o+=this.outputLink(s,t),this.inLink=!1}else if(s=this.rules.strong.exec(e))e=e.substring(s[0].length),o+=this.renderer.strong(this.output(s[2]||s[1]));else if(s=this.rules.em.exec(e))e=e.substring(s[0].length),o+=this.renderer.em(this.output(s[2]||s[1]));else if(s=this.rules.code.exec(e))e=e.substring(s[0].length),o+=this.renderer.codespan(i(s[2].trim(),!0));else if(s=this.rules.br.exec(e))e=e.substring(s[0].length),o+=this.renderer.br();else if(s=this.rules.del.exec(e))e=e.substring(s[0].length),o+=this.renderer.del(this.output(s[1]));else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),o+=this.renderer.text(i(this.smartypants(s[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(s[0].length),r=i(s[1]),n=r,o+=this.renderer.link(n,null,r);return o},r.prototype.outputLink=function(e,t){var r=i(t.href),n=t.title?i(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(r,n,this.output(e[1])):this.renderer.image(r,n,i(e[1]))},r.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},r.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,r="",n=e.length,s=0;s<n;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),r+="&#"+t+";";return r},n.prototype.code=function(e,t,r){if(this.options.highlight){var n=this.options.highlight(e,t);null!=n&&n!==e&&(r=!0,e=n)}return t?'<pre><code class="'+this.options.langPrefix+i(t,!0)+'">'+(r?e:i(e,!0))+"\n</code></pre>\n":"<pre><code>"+(r?e:i(e,!0))+"\n</code></pre>"},n.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},n.prototype.html=function(e){return e},n.prototype.heading=function(e,t,r){return"<h"+t+' id="'+this.options.headerPrefix+r.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},n.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},n.prototype.list=function(e,t){var r=t?"ol":"ul";return"<"+r+">\n"+e+"</"+r+">\n"},n.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},n.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},n.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},n.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},n.prototype.tablecell=function(e,t){var r=t.header?"th":"td";return(t.align?"<"+r+' style="text-align:'+t.align+'">':"<"+r+">")+e+"</"+r+">\n"},n.prototype.strong=function(e){return"<strong>"+e+"</strong>"},n.prototype.em=function(e){return"<em>"+e+"</em>"},n.prototype.codespan=function(e){return"<code>"+e+"</code>"},n.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},n.prototype.del=function(e){return"<del>"+e+"</del>"},n.prototype.link=function(e,t,r){if(this.options.sanitize){try{var n=decodeURIComponent(o(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return r}if(0===n.indexOf("javascript:")||0===n.indexOf("vbscript:")||0===n.indexOf("data:"))return r}this.options.baseUrl&&!f.test(e)&&(e=l(this.options.baseUrl,e));var s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+r+"</a>"},n.prototype.image=function(e,t,r){this.options.baseUrl&&!f.test(e)&&(e=l(this.options.baseUrl,e));var n='<img src="'+e+'" alt="'+r+'"';return t&&(n+=' title="'+t+'"'),n+=this.options.xhtml?"/>":">"},n.prototype.text=function(e){return e},s.parse=function(e,t,r){return new s(t,r).parse(e)},s.prototype.parse=function(e){this.inline=new r(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},s.prototype.next=function(){return this.token=this.tokens.pop()},s.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},s.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},s.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,r,n,s="",i="";for(r="",e=0;e<this.token.header.length;e++)({header:!0,align:this.token.align[e]}),r+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(s+=this.renderer.tablerow(r),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],r="",n=0;n<t.length;n++)r+=this.renderer.tablecell(this.inline.output(t[n]),{header:!1,align:this.token.align[n]});i+=this.renderer.tablerow(r)}return this.renderer.table(s,i);case"blockquote_start":for(var i="";"blockquote_end"!==this.next().type;)i+=this.tok();return this.renderer.blockquote(i);case"list_start":for(var i="",o=this.token.ordered;"list_end"!==this.next().type;)i+=this.tok();return this.renderer.list(i,o);case"list_item_start":for(var i="";"list_item_end"!==this.next().type;)i+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(i);case"loose_item_start":for(var i="";"list_item_end"!==this.next().type;)i+=this.tok();return this.renderer.listitem(i);case"html":var a=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(a);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var g={},f=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;c.exec=c,h.options=h.setOptions=function(e){return u(h.defaults,e),h},h.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new n,xhtml:!1,baseUrl:null},h.Parser=s,h.parser=s.parse,h.Renderer=n,h.Lexer=t,h.lexer=t.lex,h.InlineLexer=r,h.inlineLexer=r.output,h.parse=h,e.exports=h}).call(function(){return this||("undefined"!=typeof window?window:t)}())}).call(t,r(19))},88:function(e,t,r){"use strict";function n(e,t){var r=e.get,n=e.path;return{article:r(n("article","item")),authorProfile:r(n("article","item","author")),comments:r(n("article","comments"))||[],newComment:r(n("article","newComment")),loaded:r(n("article","loaded")),isAuthenticated:!!r(n("user","token")),loggedInUser:r(n("user","username")),deleteComment:o.deleteCommentProcess(e),addComment:o.addCommentProcess(e),onNewCommentInput:o.newCommentInputProcess(e),slug:t.slug,getArticle:o.getArticle(e),favoriteArticle:o.favoriteArticleProcess(e),followUser:o.followUserProcess(e),deleteArticle:o.deleteArticleProcess(e),username:r(n("user","username"))}}Object.defineProperty(t,"__esModule",{value:!0});var s=r(18),i=r(99),o=r(95);t.ArticleContainer=s.Container(i.Article,"state",{getProperties:n})},95:function(e,t,r){"use strict";var n=this;Object.defineProperty(t,"__esModule",{value:!0});var s=r(0),i=r(11),o=r(12),a=r(40),l=i.createCommandFactory(),c=l(function(e){var t=e.path;return s.__awaiter(n,void 0,void 0,function(){return s.__generator(this,function(e){return[2,[o.replace(t("article","item"),void 0),o.replace(t("article","comments"),[]),o.replace(t("article","loading"),!0),o.replace(t("article","loaded"),!1)]]})})}),u=l(function(e){var t=e.get,r=e.path,i=s.__read(e.payload,1),l=i[0];return s.__awaiter(n,void 0,void 0,function(){var e,n,i;return s.__generator(this,function(s){switch(s.label){case 0:return e=t(r("user","token")),[4,fetch("https://conduit.productionready.io/api/articles/"+l,{headers:a.getHeaders(e)})];case 1:return n=s.sent(),[4,n.json()];case 2:return i=s.sent(),[2,[o.replace(r("article","item"),i.article),o.replace(r("article","loading"),!1),o.replace(r("article","loaded"),!0)]]}})})}),h=l(function(e){var t=(e.at,e.get),r=e.path,i=s.__read(e.payload,2),l=i[0],c=i[1];return s.__awaiter(n,void 0,void 0,function(){var e,n,i;return s.__generator(this,function(s){switch(s.label){case 0:return e=t(r("user","token")),[4,fetch("https://conduit.productionready.io/api/articles/"+l+"/favorite",{method:c?"delete":"post",headers:a.getHeaders(e)})];case 1:return n=s.sent(),[4,n.json()];case 2:return i=s.sent(),[2,[o.replace(r("article","item"),i.article)]]}})})}),p=l(function(e){var t=(e.at,e.get),r=e.path,i=s.__read(e.payload,2),l=i[0],c=i[1];return s.__awaiter(n,void 0,void 0,function(){var e,n,i,u;return s.__generator(this,function(s){switch(s.label){case 0:return e=t(r("user","token")),[4,fetch("https://conduit.productionready.io/api/profiles/"+l+"/follow",{method:c?"delete":"post",headers:a.getHeaders(e)})];case 1:return n=s.sent(),[4,n.json()];case 2:return i=s.sent(),u=t(r("article","item")),u.author=i.profile,[2,[o.replace(r("article","item"),u)]]}})})}),d=l(function(e){var t=e.get,r=e.path,i=s.__read(e.payload,1),l=i[0];return s.__awaiter(n,void 0,void 0,function(){var e,n,i;return s.__generator(this,function(s){switch(s.label){case 0:return e=t(r("user","token")),[4,fetch("https://conduit.productionready.io/api/articles/"+l+"/comments",{headers:a.getHeaders(e)})];case 1:return n=s.sent(),[4,n.json()];case 2:return i=s.sent(),[2,[o.replace(r("article","comments"),i.comments)]]}})})}),g=l(function(e){var t=e.at,r=e.get,i=e.path,l=s.__read(e.payload,2),c=l[0],u=l[1];return s.__awaiter(n,void 0,void 0,function(){var e,n,l,h,p;return s.__generator(this,function(s){switch(s.label){case 0:return e=r(i("user","token")),n={comment:{body:u}},[4,fetch("https://conduit.productionready.io/api/articles/"+c+"/comments",{method:"post",headers:a.getHeaders(e),body:JSON.stringify(n)})];case 1:return l=s.sent(),[4,l.json()];case 2:return h=s.sent(),p=r(i("article","comments")),[2,[o.replace(t(i("article","comments"),p.length),h.comment),o.replace(i("article","newComment"),"")]]}})})}),f=l(function(e){var t=e.at,r=e.get,i=e.path,l=s.__read(e.payload,2),c=l[0],u=l[1];return s.__awaiter(n,void 0,void 0,function(){var e,n,l,h;return s.__generator(this,function(s){switch(s.label){case 0:return e=r(i("user","token")),[4,fetch("https://conduit.productionready.io/api/articles/"+c+"/comments/"+u,{method:"delete",headers:a.getHeaders(e)})];case 1:for(s.sent(),n=r(i("article","comments")),l=-1,h=0;h<n.length;h++)if(n[h].id===u){l=h;break}return-1!==l?[2,[o.remove(t(i("article","comments"),l))]]:[2,[]]}})})}),m=l(function(e){var t=e.path,r=s.__read(e.payload,1),n=r[0];return[o.replace(t("article","newComment"),n)]}),v=l(function(e){var t=e.get,r=e.path,i=s.__read(e.payload,1),l=i[0];return s.__awaiter(n,void 0,void 0,function(){var e;return s.__generator(this,function(n){switch(n.label){case 0:return e=t(r("user","token")),[4,fetch("https://conduit.productionready.io/api/articles/"+l,{method:"delete",headers:a.getHeaders(e)})];case 1:return n.sent(),[2,[o.replace(r("routing","outlet"),"home")]]}})})});t.getArticle=i.createProcess([c,[u,d]]),t.deleteCommentProcess=i.createProcess([f]),t.addCommentProcess=i.createProcess([g]),t.newCommentInputProcess=i.createProcess([m]),t.favoriteArticleProcess=i.createProcess([h]),t.followUserProcess=i.createProcess([p]),t.deleteArticleProcess=i.createProcess([v])},99:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),s=r(3),i=r(2),o=r(24),a=r(109),l=r(103),c=r(102),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype._addComment=function(e){e.preventDefault(),this.properties.article&&this.properties.addComment(this.properties.article.slug,this.properties.newComment)},t.prototype._onNewCommentInput=function(e){this.properties.onNewCommentInput(e.target.value)},t.prototype.onAttach=function(){this.properties.getArticle(this.properties.slug)},t.prototype.render=function(){var e=this.properties,t=e.username,r=e.deleteArticle,n=e.followUser,s=e.favoriteArticle,u=e.isAuthenticated,h=e.newComment,p=e.deleteComment,d=e.comments,g=e.loaded,f=e.loggedInUser,m=e.article;if(!g)return i.v("div",{classes:"article-page"},[i.v("div",{key:"banner",classes:"banner"})]);var v=m.createdAt,b=m.slug,k=m.favorited,_=m.favoritesCount,y=m.author;return i.v("div",{classes:"article-page"},[i.v("div",{key:"banner",classes:"banner"},[i.v("div",{classes:"container"},[i.v("h1",[m.title]),u?i.w(c.ArticleMeta,{authorProfile:y,slug:b,createdAt:v,favoriteArticle:s,followUser:n,deleteArticle:r,username:t,favorited:k,favoritesCount:_}):null])]),i.v("div",{key:"page",classes:["container","page"]},[i.v("div",{classes:["row","article-content"]},[i.v("div",{classes:"col-xs-12"},[i.v("div",{innerHTML:a(m.body,{sanitize:!0})}),i.v("ul",{classes:"tag-list"},m.tagList.map(function(e){return i.v("li",{classes:["tag-default","tag-pill","tag-outline"]},[e])}))])]),i.v("hr"),i.v("div",{classes:"article-actions"},[u?i.w(c.ArticleMeta,{authorProfile:y,slug:b,createdAt:v,favoriteArticle:s,followUser:n,deleteArticle:r,username:t,favorited:k,favoritesCount:_}):null]),i.v("div",{classes:"row"},[i.v("div",{classes:["col-xs-12","col-md-8","offset-md-2"]},[u?i.v("form",{classes:["card","comment-form"]},[i.v("div",{classes:"card-block"},[i.v("textarea",{value:h,oninput:this._onNewCommentInput,classes:"form-control",placeholder:"Write a comment...",rows:3})]),i.v("div",{classes:"card-footer"},[i.v("img",{classes:"comment-author-img",src:""}),i.v("button",{onclick:this._addComment,classes:["btn","btn-sm","btn-primary"]},["Post Comment"])])]):i.v("p",[i.w(o.Link,{to:"login"},["Sign In"])," or ",i.w(o.Link,{to:"register"},["Sign Up"])," to add comments on this article."]),i.v("div",d.map(function(e,t){return i.w(l.Comment,{key:t,comment:e,loggedInUser:f,deleteComment:p,slug:m.slug})}))])])])])},t}(s.WidgetBase);t.Article=u}});
//# sourceMappingURL=ArticleContainer.js.map