(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{796:function(t,a,e){"use strict";e.r(a);var r=e(17),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"docker-run"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-run"}},[t._v("#")]),t._v(" Docker run")]),t._v(" "),e("p",[t._v("All services and CLI components are also available as Docker images on "),e("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("dockerhub"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Component")]),t._v(" "),e("th",[t._v("Container image")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("immudb")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://hub.docker.com/r/codenotary/immudb",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hub.docker.com/r/codenotary/immudb"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("immugw")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://hub.docker.com/r/codenotary/immugw",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hub.docker.com/r/codenotary/immugw"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("immuadmin")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://hub.docker.com/r/codenotary/immuadmin",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hub.docker.com/r/codenotary/immuadmin"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("immuclient")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://hub.docker.com/r/codenotary/immuclient",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hub.docker.com/r/codenotary/immuclient"),e("OutboundLink")],1)])])])]),t._v(" "),e("h3",{attrs:{id:"run-immudb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-immudb"}},[t._v("#")]),t._v(" Run immudb")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker run -it -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3322")]),t._v(":3322 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9497")]),t._v(":9497 --name immudb codenotary/immudb:latest\n")])])]),e("p",[t._v("run it with persistent data and listening to all interfaces:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker run -it -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3322")]),t._v(":3322 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9497")]),t._v(":9497 -v immudb:/var/lib/immudb --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUDB_ADDRESS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0 --name immudb codenotary/immudb:latest\n")])])]),e("h3",{attrs:{id:"run-immugw"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-immugw"}},[t._v("#")]),t._v(" Run immugw")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker run -it -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3323")]),t._v(":3323 --name immugw --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUGW_IMMUDB_ADDRESS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("immudb codenotary/immugw:latest\n")])])]),e("h3",{attrs:{id:"run-immuadmin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-immuadmin"}},[t._v("#")]),t._v(" Run immuadmin")]),t._v(" "),e("p",[t._v("You can either find immuadmin in the immudb container (/usr/local/bin/immuadmin) or run the Docker container to connect to the local immudb.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker run -it --rm --name immuadmin codenotary/immuadmin:latest status\n")])])]),e("h3",{attrs:{id:"run-immuclient"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-immuclient"}},[t._v("#")]),t._v(" Run immuclient")]),t._v(" "),e("p",[t._v("You can either find immuclient in the immudb container (/usr/local/bin/immuclient) or run the Docker container to connect to the local or remote immudb.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker run -it --rm --name immuclient codenotary/immuclient:latest -a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("immudb-host"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);