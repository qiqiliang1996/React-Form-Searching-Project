(this.webpackJsonpvidly=this.webpackJsonpvidly||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(22),i=n.n(c),s=(n(32),n(47)),o=n(26),l=n(45),u=(n(33),n(20)),d=n(44),b=n(0),h=function(){return Object(b.jsxs)("ul",{className:"nav",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(u.a,{className:"nav-link active","aria-current":"page",to:"/",children:"Vidly"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(d.a,{className:"nav-link",to:"/movies",children:"Movies"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(d.a,{className:"nav-link",to:"/customer",children:"Customer"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(d.a,{className:"nav-link",to:"/rental",children:"Rental"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(d.a,{className:"nav-link",to:"/login",children:"Login"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(d.a,{className:"nav-link",to:"/register",children:"Register"})})]})},m=n(25),j=n(9),p=n(21),f=n.n(p),v=n(23),O=n(3),g=n(4),y=n(6),x=n(5),S=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){var e,t=this.props,n=t.item,a=t.onLike;return e=!0===n.liked?"fa fa-heart":"fa fa-heart-o",Object(b.jsx)("div",{children:Object(b.jsx)("i",{onClick:a,className:e,"aria-hidden":"true"})})}}]),n}(r.a.Component),k=S,C=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).raiseSort=function(t){var n=Object(j.a)({},e.props.sortColumn);n.path===t?n.order="asc"===n.order?"desc":"asc":(n.path=t,n.order="asc"),e.props.onSort(n)},e.sortIcon=function(t){var n=e.props.sortColumn;return n.path!==t.path?null:"asc"===n.order?Object(b.jsx)("i",{className:"fa fa-sort-asc"}):Object(b.jsx)("i",{className:"fa fa-sort-desc"})},e}return Object(g.a)(n,[{key:"render",value:function(){var e=this,t=this.props.columns;return Object(b.jsx)("thead",{children:Object(b.jsx)("tr",{children:t.map((function(t){return Object(b.jsxs)("th",{onClick:function(){return e.raiseSort(t.path)},children:[t.label," ",e.sortIcon(t)]},t.path||t.key)}))})})}}]),n}(r.a.Component),N=C,R=n(11),I=n.n(R),_=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"getTableData",value:function(e,t){return t.content?t.content(e):I.a.get(e,t.path)}},{key:"render",value:function(){var e=this,t=this.props,n=t.data,a=t.columns;return Object(b.jsx)("tbody",{children:n.map((function(t){return Object(b.jsx)("tr",{children:a.map((function(n){return Object(b.jsx)("td",{children:e.getTableData(t,n)},n.path||n.key)}))},t._id)}))})}}]),n}(r.a.Component),w=_,P=function(e){var t=e.sortColumn,n=e.onSort,a=e.columns,r=e.data;return Object(b.jsxs)("table",{className:"table ",children:[Object(b.jsx)(N,{sortColumn:t,onSort:n,columns:a}),Object(b.jsx)(w,{data:r,columns:a})]})},D=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).columns=[{path:"title",label:"Title",content:function(e){return Object(b.jsx)(u.a,{className:"nav-link active","aria-current":"page",to:"/movies/".concat(e._id),children:e.title})}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(t){return Object(b.jsx)(k,{item:t,onLike:function(){return e.props.onLike(t)}})}},{key:"delete",content:function(t){return Object(b.jsx)("button",{onClick:function(){return e.props.onDelete(t)},type:"button",className:"btn btn-danger",children:"Delete"})}}],e}return Object(g.a)(n,[{key:"render",value:function(){var e=this.props,t=e.movies,n=e.sortColumn,a=e.onSort;return Object(b.jsx)(P,{data:t,sortColumn:n,onSort:a,columns:this.columns})}}]),n}(r.a.Component),T=D,G=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){var e=this.props,t=e.itemCount,n=e.pageSize,a=e.onPaginationChange,r=e.currentPage,c=Math.ceil(t/n);if(1===c)return null;var i=I.a.range(1,c+1);return Object(b.jsx)("nav",{children:Object(b.jsx)("ul",{className:"pagination",children:i.map((function(e){return Object(b.jsx)("li",{className:e===r?"page-item active":"page-item ",onClick:function(){return a(e)},children:Object(b.jsx)("a",{className:"page-link",children:e})},e)}))})})}}]),n}(r.a.Component),A=G;function L(e,t,n){var a=(t-1)*n;return I()(e).slice(a).take(n).value()}var M=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){var e=this.props,t=e.items,n=e.onItemChange,a=e.currentItem,r=e.textProperty,c=e.valueProperty;return Object(b.jsx)("ul",{className:"list-group",children:t.map((function(e){return Object(b.jsx)("li",{onClick:function(){return n(e)},className:e.name===a.name?"list-group-item active":"list-group-item",children:e[r]},e[c])}))})}}]),n}(r.a.Component);M.defaultProps={textProperty:"name",valueProperty:"_id"};var F=M,B=[{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"}];function q(){return B.filter((function(e){return e}))}var V=[{_id:"5b21ca3eeb7f6fbccd471815",title:"1 Chubby",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:1,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z",liked:!0},{_id:"5b21ca3eeb7f6fbccd471816",title:"2 I Love Chubby",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:2,dailyRentalRate:2.5},{_id:"5b21ca3eeb7f6fbccd471817",title:"3 Chubby is My Cat",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:3,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471819",title:"4 Year Old Baby Cat",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:4,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181a",title:"5 Baby Chubby",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181b",title:"6 My Chubby is so Cute",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:6,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181e",title:"7 Holly Chubby Qiqi",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5},{_id:"5b21ca3eeb7f6fbccd47181f",title:"8 Hell Yeah Chubby is One",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:8,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471821",title:"9 The kiki",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:9,dailyRentalRate:3.5}];function z(e){var t=V.find((function(t){return t._id===e}));return V.splice(V.indexOf(t),1),V}var H=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],genres:[],currentGenre:{_id:"allGenres",name:"All Genres"},sortColumn:{path:"title",order:"asc"},tableHeads:["Title","Genre","Stock","Rate",""],pageSize:4,currentPage:1,searchValue:""},e.onPaginationChange=function(t){e.setState({currentPage:t})},e.handleDelete=function(){var t=Object(v.a)(f.a.mark((function t(n){var a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.state.movies,r=a.filter((function(e){return e._id!==n._id})),e.setState({movies:r});try{z(n)}catch(c){c.response&&404===c.response.status&&(alert("sorry, this post has been deleted\xe5"),e.setState({movies:a}))}case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleMessage=function(e){if(0!==e)return"There are ".concat(e," movies on your list")},e.handleLike=function(t){var n=e.state.movies,a=n.indexOf(t);n[a]=Object(j.a)({},t),n[a].liked=!n[a].liked,e.setState({movies:n})},e.handleSort=function(t){e.setState({sortColumn:t})},e.onGenreChange=function(t){e.setState({currentGenre:t,searchValue:"",currentPage:1})},e.handleSearch=function(t){var n=t.target.value;e.setState({searchValue:n,currentGenre:{},currentPage:1})},e.getPagedData=function(){var t=e.state,n=t.movies,a=t.pageSize,r=t.currentPage,c=t.currentGenre,i=t.sortColumn,s=t.searchValue,o=n;o=s?n.filter((function(e){return e.title.toLowerCase().includes(s.toLowerCase())})):"All Genres"===c.name?n:n.filter((function(e){return e.genre.name===c.name}));var l=L(I.a.orderBy(o,i.path,i.order),r,a);return{totalCount:o.length,data:l}},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=q();this.setState({movies:V,genres:[{_id:"allGenres",name:"All Genres"}].concat(Object(m.a)(e))})}},{key:"render",value:function(){var e=this.state,t=e.genres,n=e.pageSize,a=e.currentPage,r=e.currentGenre,c=e.sortColumn,i=this.getPagedData();return Object(b.jsxs)("div",{className:"d-flex flex-row m-3",children:[Object(b.jsx)("div",{className:"m-3 col-2",children:Object(b.jsx)(F,{items:t,onItemChange:this.onGenreChange,currentItem:r})}),Object(b.jsxs)("div",{className:"m-3 col",children:[Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"button",className:"btn btn-primary",children:Object(b.jsx)(u.a,{to:"/movies/new",style:{color:"white",textDecoration:"none"},children:"New Movies"})})}),Object(b.jsxs)("p",{children:["Showing ",i.totalCount," movies in the database."]}),Object(b.jsx)("div",{className:"searchbox",children:Object(b.jsx)("form",{className:"d-flex",children:Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",value:this.state.searchValue,onChange:this.handleSearch})})}),Object(b.jsx)(T,{movies:i.data,onLike:this.handleLike,onDelete:this.handleDelete,onSort:this.handleSort,sortColumn:c}),Object(b.jsx)(A,{itemCount:i.totalCount,pageSize:n,onPaginationChange:this.onPaginationChange,currentPage:a})]})]})}}]),n}(r.a.Component),E=H,J=function(){return Object(b.jsx)("h1",{children:"hi customer page"})},U=function(){return Object(b.jsx)("h1",{children:"hi Rental page"})},Y=function(){return Object(b.jsx)("h1",{children:"Home Home"})},Q=function(){return Object(b.jsx)("h1",{children:"Sorry, not found page 404"})},Z=n(7),K=n.n(Z),W=n(14),X=n(24),$=n(27),ee=["name","label","error"],te=function(e){var t=e.name,n=e.label,a=e.error,r=Object($.a)(e,ee);return Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:t,className:"form-label",children:n}),Object(b.jsx)("input",Object(j.a)(Object(j.a)({name:t,id:t},r),{},{className:"form-control"})),a&&Object(b.jsx)("div",{className:"alert alert-danger",children:a})]})},ne=function(e){var t=e.name,n=e.label,a=e.onChange,r=e.options,c=e.data;return Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:t,className:"form-label ",children:n}),Object(b.jsx)("div",{className:"selection",children:Object(b.jsx)("select",{className:"form-select","aria-label":"Default select example",onChange:a,children:r.map((function(e){return Object(b.jsx)("option",{selected:c.genreId===e._id,value:e._id,children:e.name},e._id)}))})})]})},ae=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},errors:{},genres:[]},e.validation=function(){var t=e.state.data,n={},a=K.a.validate(t,e.schema,{abortEarly:!1});if(!a.error)return null;var r,c=Object(X.a)(a.error.details);try{for(c.s();!(r=c.n()).done;){var i=r.value;n[i.path[0]]=i.message}}catch(s){c.e(s)}finally{c.f()}return n},e.validationProperty=function(t){var n=Object(W.a)({},t.name,t.value),a=Object(W.a)({},t.name,e.schema[t.name]),r=K.a.validate(n,a);return r.error?r.error.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var n=e.validation();e.setState({errors:n||{}}),null==n&&e.doSubmit()},e.handleChange=function(t){var n=t.currentTarget,a=Object(j.a)({},e.state.errors),r=e.validationProperty(n);r?a[n.name]=r:delete a[n.name];var c=Object(j.a)({},e.state.data);c[n.name]=n.value,e.setState({data:c,errors:a})},e.handleSelect=function(t){var n=Object(j.a)({},e.state.data);n.genreId=t.currentTarget.value,e.setState({data:n})},e}return Object(g.a)(n,[{key:"helperInput",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",a=this.state,r=a.data,c=a.errors;return Object(b.jsx)(te,{type:n,name:e,label:t,value:r[e],onChange:this.handleChange,error:c[e]})}},{key:"helperSelection",value:function(e,t){var n=this.state,a=n.genres,r=n.data;return Object(b.jsx)(ne,{name:e,label:t,options:a,data:r,onChange:this.handleSelect})}},{key:"helperButton",value:function(e){return Object(b.jsx)("button",{disabled:this.validation(),className:"btn btn-primary",children:e})}}]),n}(r.a.Component),re=ae,ce=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:""},errors:{},genres:[]},e.schema={_id:K.a.string(),title:K.a.string().min(5).required().label("Title"),genreId:K.a.string().min(5).required().label("Genre"),numberInStock:K.a.number().min(0).max(10).required().label("Number in Stock"),dailyRentalRate:K.a.number().min(0).max(5).required().label("Daily Rental Rate")},e.mapMovieToView=function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}},e.handleSelect=function(t){var n=Object(j.a)({},e.state.data);n.genreId=t.currentTarget.value,e.setState({data:n})},e}return Object(g.a)(n,[{key:"polupateGenres",value:function(){var e=q();this.setState({genres:e})}},{key:"populateMovie",value:function(){var e,t=this.props.match.params.id;if("new"!==t)try{var n=(e=t,V.find((function(t){return t._id===e}))),a=this.mapMovieToView(n);this.setState({data:a})}catch(r){r.response&&404===r.response.status&&this.props.history.replace("/notFound")}}},{key:"componentDidMount",value:function(){this.polupateGenres(),this.populateMovie()}},{key:"doSubmit",value:function(){!function(e){var t=V.find((function(t){return t._id===e._id}))||{};t.title=e.title,t.genre=B.find((function(t){return t._id===e.genreId})),t.numberInStock=e.numberInStock,t.dailyRentalRate=e.dailyRentalRate,t._id||(t._id=String(Date.now()),V.push(t))}(this.state.data);this.props.history.push("/movies"),console.log("submited")}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Movie Form"}),Object(b.jsxs)("form",{className:"login",onSubmit:this.handleSubmit,children:[this.helperInput("title","Title"),this.helperSelection("genres","Genres"),this.helperInput("numberInStock","Number in Stock"),this.helperInput("dailyRentalRate","Daily Rental Rate"),this.helperButton("Save")]})]})}}]),n}(re),ie=ce,se=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:""},errors:{}},e.schema={username:K.a.string().required(),password:K.a.string().required()},e.doSubmit=function(){console.log("form submited")},e}return Object(g.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Login Page"}),Object(b.jsxs)("form",{className:"login",onSubmit:this.handleSubmit,children:[this.helperInput("username","Username"),this.helperInput("password","Passwprd","password"),this.helperButton("Login")]})]})}}]),n}(re),oe=se,le=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:"",legalName:""},errors:{}},e.schema={username:K.a.string().email().required(),password:K.a.string().min(5),legalName:K.a.string().min(8).label("Name")},e.doSubmit=function(){console.log("form submited")},e}return Object(g.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Register Page"}),Object(b.jsxs)("form",{className:"register",onSubmit:this.handleSubmit,children:[this.helperInput("username","Username"),this.helperInput("password","Passwprd","password"),this.helperInput("legalName","Name"),this.helperButton("Register")]})]})}}]),n}(re),ue=le;var de=function(){return Object(b.jsxs)(r.a.Fragment,{children:[Object(b.jsx)(h,{}),Object(b.jsxs)(s.a,{children:[Object(b.jsx)(o.a,{path:"/customer",component:J}),Object(b.jsx)(o.a,{path:"/rental",component:U}),Object(b.jsx)(o.a,{path:"/movies/:id",component:ie}),Object(b.jsx)(o.a,{path:"/movies",component:E}),Object(b.jsx)(o.a,{path:"/login",component:oe}),Object(b.jsx)(o.a,{path:"/register",component:ue}),Object(b.jsx)(o.a,{path:"/not-found",component:Q}),Object(b.jsx)(o.a,{path:"/",exact:!0,component:Y}),Object(b.jsx)(l.a,{to:"not-found"})]})]})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},he=(n(41),n(46));i.a.render(Object(b.jsx)(r.a.Fragment,{children:Object(b.jsx)(he.a,{children:Object(b.jsx)(de,{})})}),document.getElementById("root")),be()}},[[42,1,2]]]);
//# sourceMappingURL=main.aef93b89.chunk.js.map