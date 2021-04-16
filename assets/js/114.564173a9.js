(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{536:function(a,t,e){"use strict";e.r(t);var s=e(10),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h3",{attrs:{id:"run-immudb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-immudb"}},[a._v("#")]),a._v(" Run immudb")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker run -it -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3322")]),a._v(":3322 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("9497")]),a._v(":9497 --name immudb codenotary/immudb:latest\n")])])]),e("p",[a._v("run it with persistent data and listening to all interfaces:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker run -it -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3322")]),a._v(":3322 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("9497")]),a._v(":9497 -v immudb:/var/lib/immudb --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUDB_ADDRESS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0 --name immudb codenotary/immudb:latest\n")])])]),e("h3",{attrs:{id:"run-immugw"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-immugw"}},[a._v("#")]),a._v(" Run immugw")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker run -it -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3323")]),a._v(":3323 --name immugw --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_IMMUDB_ADDRESS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("immudb codenotary/immugw:latest\n")])])]),e("h3",{attrs:{id:"run-immuadmin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-immuadmin"}},[a._v("#")]),a._v(" Run immuadmin")]),a._v(" "),e("p",[a._v("You can either find immuadmin in the immudb container (/usr/local/bin/immuadmin) or run the Docker container to connect to the local immudb.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker run -it --rm --name immuadmin codenotary/immuadmin:latest status\n")])])]),e("h3",{attrs:{id:"run-immuclient"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-immuclient"}},[a._v("#")]),a._v(" Run immuclient")]),a._v(" "),e("p",[a._v("You can either find immuclient in the immudb container (/usr/local/bin/immuclient) or run the Docker container to connect to the local or remote immudb.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker run -it --rm --name immuclient codenotary/immuclient:latest -a "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("immudb-host"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);