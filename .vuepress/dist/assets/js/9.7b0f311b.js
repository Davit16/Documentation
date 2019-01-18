(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{183:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),s("p",[s("a",{attrs:{href:"https://www.codacy.com/app/laravel-enso/Searchable?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/Searchable&utm_campaign=Badge_Grade",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/9bd280636d3840b696f6bf788820a6db",alt:"Codacy Badge"}}),s("OutboundLink")],1),s("a",{attrs:{href:"https://github.styleci.io/repos/150948993",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://github.styleci.io/repos/150948993/shield?branch=master",alt:"StyleCI"}}),s("OutboundLink")],1),s("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/searchable",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/searchable/license",alt:"License"}}),s("OutboundLink")],1),s("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/searchable",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/searchable/downloads",alt:"Total Downloads"}}),s("OutboundLink")],1),s("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/searchable",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/searchable/version",alt:"Latest Stable Version"}}),s("OutboundLink")],1)]),s("p",[e._v("Task management dependency for "),s("a",{attrs:{href:"https://laravel.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel"),s("OutboundLink")],1),e._v(".")]),s("p",[s("a",{attrs:{href:"https://laravel-enso.github.io/searchable/videos/bulma_demo_01.mp4",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://laravel-enso.github.io/searchable/screenshots/bulma_001_thumb.png",alt:"Watch the demo"}}),s("OutboundLink")],1)]),e._m(1),e._m(2),e._m(3),s("p",[e._v("Note: Although available result model actions are shown based on the current user's permissions for that model,\ncare must be taken when due to the search functionality, results could be listed that user might not be meant to see.")]),s("p",[e._v("It is recommended to look into and use global query scopes for these scenarios.")]),e._m(4),e._m(5),s("p",[e._v("The following parameters are available:")]),e._m(6),e._m(7),s("p",[e._v("Each model can be configured with a mix of required and optional attributes")]),e._m(8),e._m(9),e._m(10),s("p",[e._v("The accompanying Vue component is bundled with the Core package.")]),e._m(11),e._m(12),e._m(13),s("p",[e._v("are welcome. Pull requests are great, but issues are good too.")]),e._m(14),s("p",[e._v("This package is released under the MIT license.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"searchable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#searchable","aria-hidden":"true"}},[this._v("#")]),this._v(" Searchable")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("sup",[this._v("click on the photo to view a short demo in compatible browsers")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("can search for any configured model")]),t("li",[this._v("various actions are contextually available for each result, also depending on permissions")]),t("li",[this._v("the icons used for the actions are customizable")]),t("li",[this._v("the number is limited (by default at 10 results per model) to avoid too many DB hits")]),t("li",[this._v("any model may be added to the searchable list")]),t("li",[this._v("per-model customizations are available, such as attributes to search and the label to use")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The package needs to be configured by specifying the models we want searchable. The configuration file can be found\nat "),t("code",[this._v("config/searchable.php")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("code",[e._v("defaultLabel")]),e._v(" - the default label attribute to be used for all models,\nunless overwritten on the model specific configuration (see below) | default is "),s("code",[e._v("name")])]),s("li",[s("code",[e._v("routes")]),e._v(" - customizes the icons used for the routes (remember to also have the icons available/imported)\n"),s("ul",[s("li",[s("code",[e._v("show")]),e._v(", default is "),s("code",[e._v("eye")])]),s("li",[s("code",[e._v("edit")]),e._v(", default is "),s("code",[e._v("pencil-alt")])]),s("li",[s("code",[e._v("index")]),e._v(", default is "),s("code",[e._v("list-ul")])])])]),s("li",[s("code",[e._v("limit")]),e._v(" - the max limit of results per model. Keep in mind that more results may be available, so if looking for a specific result,\nbe more specific when searching | default is "),s("code",[e._v("10")])]),s("li",[s("code",[e._v("models")]),e._v(" - the list of models and their configurations that are searchable by the package")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"model-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#model-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Model Configuration")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[e._v("User"),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{attrs:{class:"token single-quoted-string string"}},[e._v("'group'")]),e._v(" "),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[e._v("'User'")]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{attrs:{class:"token single-quoted-string string"}},[e._v("'attributes'")]),e._v(" "),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{attrs:{class:"token single-quoted-string string"}},[e._v("'first_name'")]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[e._v("'last_name'")]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[e._v("'email'")]),s("span",{attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{attrs:{class:"token single-quoted-string string"}},[e._v("'label'")]),e._v(" "),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[e._v("'fullName'")]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{attrs:{class:"token single-quoted-string string"}},[e._v("'permissionGroup'")]),e._v(" "),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[e._v("'administration.users'")]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{attrs:{class:"token single-quoted-string string"}},[e._v("'scopes'")]),e._v(" "),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{attrs:{class:"token single-quoted-string string"}},[e._v("'active'")]),s("span",{attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("code",[e._v("group")]),e._v(' - string, the name of the group this model belongs to, used to group the results. If not given, the class spaced base name is used, e.g. "User", "Permission Group" | (optional)')]),s("li",[s("code",[e._v("attributes")]),e._v(" - array, the list of model attributes that we want to look at when searching | required")]),s("li",[s("code",[e._v("label")]),e._v(" - string, the model attribute we want to use as representation of the model, optional. If given, this configuration option\noverrides the global default "),s("code",[e._v("defaultLabel")]),e._v(" option. Note that a computed attribute can be given as well | (optional)")]),s("li",[s("code",[e._v("permissionGroup")]),e._v(" - string, the name of the permission group to use when displaying action options for this model's results | required")]),s("li",[s("code",[e._v("permissions")]),e._v(" - array, the list of permissions to be used for this model's results action options.\nIf not given, actions are displayed  (based on permissions) for "),s("code",[e._v("index")]),e._v(", "),s("code",[e._v("show")]),e._v(" and "),s("code",[e._v("edit")]),e._v(" | (optional)")]),s("li",[s("code",[e._v("scopes")]),e._v(" - array, the list of scopes to be used when querying the model | (optional)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"vue-components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-components","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue Components")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"publishes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publishes","aria-hidden":"true"}},[this._v("#")]),this._v(" Publishes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("php artisan vendor:publish --tag=searchable-config")]),this._v(" - configuration file")]),t("li",[t("code",[this._v("php artisan vendor:publish --tag=enso-config")]),this._v(" - a common alias for when wanting to update the config,\nonce a newer version is released, can be used with the "),t("code",[this._v("--force")]),this._v(" flag")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"contributions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contributions","aria-hidden":"true"}},[this._v("#")]),this._v(" Contributions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"license"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])}],!1,null,null,null);t.default=r.exports}}]);