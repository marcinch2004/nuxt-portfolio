(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{389:function(t,r,o){var content=o(423);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("1749fc10",content,!0,{sourceMap:!1})},422:function(t,r,o){"use strict";o(389)},423:function(t,r,o){var e=o(39)((function(i){return i[1]}));e.push([t.i,'body{font-family:"IBM Plex Sans",sans-serif;min-height:100vh;font-family:IBM Plex Sans, sans}.text-mono{font-family:"IBM Plex Sans",monospace}h2{padding-top:1.5rem;padding-bottom:1.5rem;font-size:3rem;line-height:1;font-weight:700}h3{margin-bottom:0.5rem;font-size:1.5rem;line-height:2rem;font-weight:700}.lead{font-size:1.5rem;line-height:2rem}.portfolio_item:hover h3{transform:translateY(-.3rem)}.portfolio_item:hover .portfolio_description{transform:translateY(-.1rem)}.portfolio_item:hover .portfolio_img{transform:translateY(.3rem)}button.active{--tw-bg-opacity:1;background-color:rgba(30, 64, 175, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.filter{margin-right:0.5rem;border-radius:9999px;border-width:1px;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:0.75rem;line-height:1rem;transition-property:background-color, border-color, color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:200ms}.filter:hover{--tw-border-opacity:1;border-color:rgba(59, 130, 246, var(--tw-border-opacity))}.portfolio_item{display:contents}',""]),e.locals={},t.exports=e},431:function(t,r,o){"use strict";o.r(r);var e=o(428),n=(o(398),o(19),o(400),o(41),o(404),o(406),o(408),o(409),o(410),o(411),o(412),o(413),o(414),o(415),o(416),o(417),o(418),o(419),o(420),o(421),o(42),o(49),{layout:"blog",data:function(){return{currentFilter:"All"}},computed:{portfolios:function(){return this.$store.state.portfolios},myTags:function(){var t=Object(e.a)(new Set(this.$store.state.portfolios.map((function(t){return t.metadata.tags.map((function(t){return t.sys.id}))})))).flat(1);return Object(e.a)(new Set(t))}},methods:{setFilter:function(filter){return this.currentFilter=filter,filter}}}),l=(o(422),o(26)),component=Object(l.a)(n,(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("main",{staticClass:"flex-grow"},[o("section",{staticClass:"max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl"},[o("div",{staticClass:"flex"},[o("button",{staticClass:"filter",class:{active:"All"===t.currentFilter},on:{click:function(r){return t.setFilter("All")}}},[t._v("ALL PROJECTS\n        ")]),t._v(" "),t._l(t.myTags,(function(r,e){return o("button",{key:e,staticClass:"filter",class:{active:t.currentFilter===r},on:{click:function(o){return t.setFilter(r)}}},[t._v(t._s(r.split(/(?=[A-Z])/).join(" ").toUpperCase())+"\n         ")])}))],2),t._v(" "),o("div",{staticClass:"mt-6 grid grid-cols-1 gap-y-12 gap-x-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-12"},t._l(this.$store.state.portfolios,(function(r,e){return o("div",{key:e,staticClass:"portfolio_item group transform transition-all ease-out duration-500"},[t.currentFilter===r.metadata.tags[0].sys.id||"All"===t.currentFilter?o("nuxt-link",{staticClass:"portfolio-link group block",class:r.metadata.tags[0].sys.id,attrs:{to:"/"+r.fields.slug}},[o("h3",{staticClass:"transition-all ease-out duration-500"},[t._v(t._s(r.fields.title))]),t._v(" "),o("p",{staticClass:"portfolio_description text-gray-600 transition-all ease-out duration-500 text-sm text-mono"},[t._v(t._s(r.fields.description))]),t._v(" "),o("img",{staticClass:"portfolio_img transition-all ease-out duration-500 pt-2",attrs:{src:r.fields.heroImage.fields.file.url,alt:""}})]):t._e()],1)})),0)])])}),[],!1,null,null,null);r.default=component.exports}}]);