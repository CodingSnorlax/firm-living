(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b495b6e0"],{"1dde":function(t,c,e){var n=e("d039"),r=e("b622"),o=e("2d00"),a=r("species");t.exports=function(t){return o>=51||!n((function(){var c=[],e=c.constructor={};return e[a]=function(){return{foo:1}},1!==c[t](Boolean).foo}))}},"31a9":function(t,c,e){"use strict";e.r(c);var n=e("7a23"),r=function(t){return Object(n["B"])("data-v-7662cfd6"),t=t(),Object(n["z"])(),t},o={class:"container"},a=r((function(){return Object(n["g"])("h2",{class:"mb-4 pt-16"},"熱門商品",-1)})),i={class:"row row-cols-1 row-cols-md-2 g-5"},s={class:"card border-0 h-100"},d=["src"],u={class:"card-body d-flex justify-content-between"},l={class:""},b={class:"card-title"},f={key:0},j={class:"card-text me-4"},p={class:"d-flex align-items-center"},O={class:"card-text me-4 text-muted"},g={class:"card-text text-danger"},v=r((function(){return Object(n["g"])("a",{href:"#",class:"btn btn-dark"},"＋",-1)}));function h(t,c,e,r,h,m){var w=Object(n["G"])("router-link");return Object(n["y"])(),Object(n["f"])("div",o,[a,Object(n["g"])("div",i,[(Object(n["y"])(!0),Object(n["f"])(n["a"],null,Object(n["F"])(h.products,(function(t){return Object(n["y"])(),Object(n["f"])("div",{class:"col",key:t.id},[Object(n["g"])("div",s,[Object(n["g"])("img",{src:t.imageUrl,class:"card-img-top productImg",alt:""},null,8,d),Object(n["g"])("div",u,[Object(n["g"])("div",l,[Object(n["g"])("h5",b,Object(n["J"])(t.title),1),t.origin_price===t.price?(Object(n["y"])(),Object(n["f"])("div",f,[Object(n["g"])("p",j,"$ "+Object(n["J"])(t.origin_price),1)])):Object(n["e"])("",!0),Object(n["g"])("div",p,[Object(n["g"])("del",O,"$ "+Object(n["J"])(t.origin_price),1),Object(n["g"])("p",g,"$ "+Object(n["J"])(t.price),1)])]),Object(n["g"])("div",null,[Object(n["j"])(w,{class:"stretched-link",to:"/products/".concat(t.id)},null,8,["to"]),v])])])])})),128))])])}e("99af");var m={data:function(){return{products:[]}},mounted:function(){var t=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/v2/api/").concat("karen666","/products/all")).then((function(c){console.log(c.data),t.products=c.data.products})).catch((function(t){console.log(t)}))}},w=(e("e547"),e("6b0d")),x=e.n(w);const y=x()(m,[["render",h],["__scopeId","data-v-7662cfd6"]]);c["default"]=y},"5c43":function(t,c,e){},8418:function(t,c,e){"use strict";var n=e("a04b"),r=e("9bf2"),o=e("5c6c");t.exports=function(t,c,e){var a=n(c);a in t?r.f(t,a,o(0,e)):t[a]=e}},"99af":function(t,c,e){"use strict";var n=e("23e7"),r=e("da84"),o=e("d039"),a=e("e8b5"),i=e("861d"),s=e("7b0b"),d=e("07fa"),u=e("8418"),l=e("65f0"),b=e("1dde"),f=e("b622"),j=e("2d00"),p=f("isConcatSpreadable"),O=9007199254740991,g="Maximum allowed index exceeded",v=r.TypeError,h=j>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),m=b("concat"),w=function(t){if(!i(t))return!1;var c=t[p];return void 0!==c?!!c:a(t)},x=!h||!m;n({target:"Array",proto:!0,forced:x},{concat:function(t){var c,e,n,r,o,a=s(this),i=l(a,0),b=0;for(c=-1,n=arguments.length;c<n;c++)if(o=-1===c?a:arguments[c],w(o)){if(r=d(o),b+r>O)throw v(g);for(e=0;e<r;e++,b++)e in o&&u(i,b,o[e])}else{if(b>=O)throw v(g);u(i,b++,o)}return i.length=b,i}})},e547:function(t,c,e){"use strict";e("5c43")}}]);
//# sourceMappingURL=chunk-b495b6e0.528c4c69.js.map