(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(149),o=a(148);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(139),u=a.n(c);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(151),s=a.n(l);a.d(t,"PageRenderer",function(){return s.a});var d=a(29);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),o=a(4),c=a.n(o),u=a(168),l=a.n(u),s=a(147);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(s.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var m="1025518380"},149:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(147),u=a(6),l=a.n(u),s=(a(28),a(140),a(137)),d=a.n(s),m=a(153),p=a.n(m),f=[{name:"Details",to:"/details/"},{name:"rsvp",to:"/rsvp"},{name:"tourist info",to:"/tourist"},{name:"Accomodation",to:"/accomodation"}],v=function(e){var t=e.links;return r.a.createElement("ul",null,t.map(function(e){var t=e.name,a=e.to,n=d()(e,["name","to"]);return r.a.createElement("li",{key:t},r.a.createElement(c.Link,Object.assign({activeClassName:p.a.activeLi,to:a},n),t))}))},g=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={mobileNavActive:!1},t.toggleMobileNav=function(){return t.setState(function(e){return{mobileNavActive:!e.mobileNavActive}})},t}return l()(t,e),t.prototype.render=function(){var e=this.state.mobileNavActive;return r.a.createElement("header",{className:p.a.header},r.a.createElement("nav",{className:p.a.mobileNavigation},r.a.createElement("span",{onClick:this.toggleMobileNav,className:p.a.mobileNavButton},e?"Close":"Menu"),e&&r.a.createElement(v,{links:f})),r.a.createElement("nav",{className:p.a.mainNavigation},r.a.createElement(v,{links:f})))},t}(r.a.Component),h=(a(154),a(155)),y=a.n(h),b=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement("div",{className:y.a.wrapper},t))};b.propTypes={children:o.a.node.isRequired};t.a=b},151:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},152:function(e,t,a){"use strict";a.r(t);a(28);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(49),u=a(2),l=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},153:function(e,t,a){e.exports={header:"header-module--header--2Q3RK",mainNavigation:"header-module--mainNavigation--2u3Qg",mobileNavigation:"header-module--mobileNavigation--2FBlm",mobileNavButton:"header-module--mobileNavButton--2NpW_",activeLi:"header-module--activeLi--3SwE_"}},154:function(e,t,a){},155:function(e,t,a){e.exports={wrapper:"layout-module--wrapper--3O2SZ"}},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Sergio & Daniela",description:"We're getting married",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-699d9612a94957fb6a81.js.map