(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t,s){"use strict";s.r(t);s(0),s(85);var a=s(63),i=s.n(a),n=s(1),c=function(){return Object(n.jsx)("header",{className:i.a.header,children:Object(n.jsx)("img",{src:"https://themified.com/friend-finder/images/logo.png"})})},r=s(20),o=s(26),d=s.n(o),j=function(e){return Object(n.jsxs)("nav",{className:d.a.nav,children:[Object(n.jsx)("div",{className:d.a.item,children:Object(n.jsx)(r.b,{to:"/profile",activeClassName:d.a.active,children:"Profile"})}),Object(n.jsx)("div",{className:d.a.item,children:Object(n.jsx)(r.b,{to:"/dialogs",activeClassName:d.a.active,children:"Messages"})}),Object(n.jsx)("div",{className:d.a.item,children:Object(n.jsx)(r.b,{to:"/news",activeClassName:d.a.active,children:"News"})}),Object(n.jsx)("div",{className:d.a.item,children:Object(n.jsx)(r.b,{to:"/music",activeClassName:d.a.active,children:"Music"})}),Object(n.jsx)("div",{className:d.a.item,children:Object(n.jsx)(r.b,{to:"settings",activeClassName:d.a.active,children:"Settings"})})]})},l=s(65),u=s.n(l),m=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:u.a.ProfileInfo,children:Object(n.jsx)("img",{src:"http://www.wpkixx.com/html/winku-dark/images/resources/timeline-1.jpg"})}),Object(n.jsx)("div",{children:"ava+dicription"})]})},b=s(66),g=s.n(b),v=function(e){return Object(n.jsxs)("div",{className:g.a.item,children:[Object(n.jsx)("img",{src:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg"}),e.message,Object(n.jsx)("div",{children:e.LikesCount})]})},O=s(67),p=s.n(O),h=s(136),x=s(133),f=s(134),_=s(25),P=function(e){var t=Object(_.c)((function(e){return e.profileReducer})).ProfilePage.MyPostsData.map((function(e){return Object(n.jsx)(v,{message:e.message,LikesCount:e.LikesCount})})),s=function(){e.addPost()};return Object(n.jsxs)("div",{children:[Object(n.jsx)(h.a,{variant:"subtitle1",gutterBottom:!0,component:"div",children:Object(n.jsx)("div",{className:p.a.posts,children:t})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)(x.a,{id:"outlined-basic",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",variant:"outlined",onKeyPress:function(e){13===e.charCode&&s()},value:e.postProfile,onChange:function(t){var s=t.currentTarget.value;e.onPostChangeContainer(s)}})}),Object(n.jsx)("div",{children:Object(n.jsx)(f.a,{onClick:s,children:"Add post"})})]})]})},N=s(32),D="ADD-POST",S="UPDATE_NEW_POST_TEXT",E={ProfilePage:{MyPostsData:[{id:1,message:"Hello my friend",LikesCount:"12"},{id:2,message:"This is my first post",LikesCount:"10"},{id:2,message:"DaDa",LikesCount:"10"}],postProfile:""}},w=function(){var e=Object(_.b)(),t=Object(_.c)((function(e){return e.profileReducer}));return Object(n.jsx)("div",{children:Object(n.jsx)(P,{addPost:function(){e({type:D})},onPostChangeContainer:function(t){e(function(e){return{type:"UPDATE_NEW_POST_TEXT",newText:e}}(t))},postProfile:t.ProfilePage.postProfile})})},C=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{}),Object(n.jsx)("div",{children:Object(n.jsx)(w,{})})]})},y=s(58),B=s.n(y),T=s(72),M=s.n(T),k=s(14),A=s(33),I=s.n(A),L=function(e){var t=Object(n.jsx)("img",{className:I.a.img,src:"https://themified.com/friend-finder/images/users/user-7.jpg"});return Object(n.jsxs)("div",{className:I.a.dialog,children:[t,e.message]})},W={messagePage:{DialogsData:[{id:1,name:"Pall"},{id:2,name:"Artur"},{id:3,name:"Valeri"},{id:4,name:"Nikol"},{id:5,name:"Bond"},{id:6,name:"Petrovich"}],MessagesData:[{id:1,message:"hello"},{id:2,message:"How are you"},{id:3,message:"Yo"}]},newMessageBody:""},R=function(e){var t="/dialogs/"+e.id;return Object(n.jsx)("div",{className:I.a.dialog+""+I.a.active,children:Object(n.jsx)(r.b,{to:t,children:e.name})})},F=function(){var e=Object(_.b)(),t=Object(_.c)((function(e){return e.dialogsReducer})),s=t.messagePage.DialogsData.map((function(e){return Object(n.jsx)(R,{name:e.name,id:e.id})})),a=t.messagePage.MessagesData.map((function(e){return Object(n.jsx)(L,{message:e.message})})),i=t.newMessageBody;return Object(n.jsxs)("div",{className:I.a.dialogs,children:[Object(n.jsx)("div",{className:I.a.dialogItems,children:Object(n.jsx)("span",{children:s})}),Object(n.jsxs)("div",{className:I.a.messages,children:[Object(n.jsx)("div",{children:a}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("textarea",{value:i,onChange:function(t){var s=t.currentTarget.value;e(function(e){return{type:"UPDATE_NEW_MESSAGE_BODY",body:e}}(s))}})}),Object(n.jsx)("div",{children:Object(n.jsx)(f.a,{variant:"contained",onClick:function(){e({type:"SEND_MESSAGE_BODY"})},children:"Sent"})})]})]})]})},Y=s(41),G=s.n(Y),H=function(e){var t="/profile/"+e.id;return Object(n.jsx)("div",{className:G.a.dialog+""+G.a.active,children:Object(n.jsx)(r.b,{to:t,children:e.name})})},Z=function(){var e=Object(_.c)((function(e){return e.sidebarReducer})).SideBar.map((function(e){return Object(n.jsx)(H,{name:e.name,id:e.id})}));return Object(n.jsx)("nav",{className:G.a.sideBar,children:Object(n.jsxs)("div",{className:G.a.content,children:["Friends online",Object(n.jsx)(r.b,{to:"/friends",activeClassName:G.a.active,children:e})]})})},U=function(e){return Object(n.jsx)(r.a,{children:Object(n.jsxs)("div",{className:B.a.appWrapper,children:[Object(n.jsx)(c,{}),Object(n.jsxs)("div",{className:B.a.navbarwrappper,children:[Object(n.jsx)(j,{}),Object(n.jsx)(Z,{})]}),Object(n.jsxs)("div",{className:M.a.content,children:[Object(n.jsx)(k.a,{path:"/dialogs",render:function(){return Object(n.jsx)(F,{})}}),Object(n.jsx)(k.a,{path:"/profile",render:function(){return Object(n.jsx)(C,{})}})]})]})})},J=s(28),X=s.n(J),q=s(59),V={SideBar:[{id:1,name:"Andru"},{id:2,name:"Sasha"},{id:3,name:"Sveta"}]},z=Object(q.a)({dialogsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_NEW_MESSAGE_BODY":return e.newMessageBody=t.body,Object(N.a)({},e);case"SEND_MESSAGE_BODY":var s=e.newMessageBody;return e.messagePage.MessagesData.push({id:4,message:s}),e.newMessageBody="",Object(N.a)({},e);default:return e}},profileReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:var s={id:(new Date).getTime(),message:e.ProfilePage.postProfile,LikesCount:"0"};return e.ProfilePage.MyPostsData.push(s),e.ProfilePage.postProfile="",Object(N.a)({},e);case S:return e.ProfilePage.postProfile=t.newText,Object(N.a)({},e);default:return e}},sidebarReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V;return e}}),K=Object(q.b)(z);X.a.render(Object(n.jsx)(r.a,{children:Object(n.jsx)(_.a,{store:K,children:Object(n.jsx)(U,{})})}),document.getElementById("root"));K.getState()},26:function(e,t,s){e.exports={nav:"Navbar_nav__1x_5z",item:"Navbar_item__aF-j8",active:"Navbar_active__2Wknj"}},33:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__-eIhE",dialogItems:"Dialogs_dialogItems__1E-VT",messages:"Dialogs_messages__1DwvL",message:"Dialogs_message__4C7ZL",s:"Dialogs_s__24nYo",img:"Dialogs_img__14RvZ"}},41:function(e,t,s){e.exports={sideBar:"SIdebarFriends_sideBar__34H3G",item:"SIdebarFriends_item__e04Zd",active:"SIdebarFriends_active__3mvtD",content:"SIdebarFriends_content__2ZlIc"}},58:function(e,t,s){e.exports={appWrapper:"App_appWrapper__1WaLk",navbarwrappper:"App_navbarwrappper__3iLdn"}},63:function(e,t,s){e.exports={header:"Header_header__1hm4S"}},65:function(e,t,s){e.exports={ProfileInfo:"ProfileInfo_ProfileInfo__nmEEx"}},66:function(e,t,s){e.exports={content:"Post_content__3jn7l",item:"Post_item__wDNQ_"}},67:function(e,t,s){e.exports={posts:"MyPosts_posts__1AScq"}},72:function(e,t,s){e.exports={content:"Content_content__14Bda"}},85:function(e,t,s){}},[[101,1,2]]]);
//# sourceMappingURL=main.406046a9.chunk.js.map