webpackJsonp([20,21],{10:function(e,t,s){t=e.exports=s(1)(),t.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",file:"search-bar.vue",sourceRoot:"webpack://"}])},11:function(e,t,s){var c=s(10);"string"==typeof c&&(c=[[e.id,c,""]]);s(2)(c,{});c.locals&&(e.exports=c.locals)},12:function(e,t){e.exports=" <div class=weui_search_bar :class=\"isFocus?'weui_search_focusing':''\"> <form class=weui_search_outer> <div class=weui_search_inner> <i class=weui_icon_search></i> <input type=search class=weui_search_input placeholder=搜索 v-model=searchVal :id=searchId @input=s_input @focus=s_focus @blur=s_blur> <a href=javascript: class=weui_icon_clear @touchend=reset_val v-show=hasVal></a> </div> <label :for=searchId class=weui_search_text> <i class=weui_icon_search></i> <span>搜索</span> </label> </form> <a href=javascript: class=weui_search_cancel @touchend=s_blur>取消</a> </div> "},17:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{searchId:String},data:function(){return{isFocus:!1,searchVal:"",hasVal:!1}},methods:{s_input:function(){""!==this.searchVal?this.hasVal=!0:this.hasVal=!1},s_focus:function(){this.isFocus=!0},s_blur:function(){this.isFocus=!1},reset_val:function(){this.searchVal=""}}}},18:function(e,t,s){var c,i,n={};s(11),c=s(17),i=s(12),e.exports=c||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(a.template=i),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},87:function(e,t,s){t=e.exports=s(1)(),t.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",file:"chat.vue",sourceRoot:"webpack://"}])},158:function(e,t,s){var c=s(87);"string"==typeof c&&(c=[[e.id,c,""]]);s(2)(c,{});c.locals&&(e.exports=c.locals)},189:function(e,t){e.exports=' <div class="_full_inner _scroll _effect component-chat" :class="{\'_effect--30\':decline}" _v-c7cde232=""> <search-bar _v-c7cde232=""></search-bar> <ul class=wechat-list _v-c7cde232=""> <li class="item _line-fine" v-for="item in wechat_list" transition=chat-item _v-c7cde232=""> <div class=info :class="{\n                \'current\':currentIndex==$index\n                }" @touchstart=info_touchstart($index) v-touch:tap=info_tap($index) v-touch:swipeleft=info_swipeleft($index) v-touch-options:swipe="{ direction: \'horizontal\' }" _v-c7cde232=""> <div class=ico-box _v-c7cde232=""> <i :class="item.chatConfigModel | f_news \'nclass\'" v-text="item.chatBaseModel | f_news \'ntext\'" v-show="item.chatBaseModel | f_news \'nshow\'" _v-c7cde232=""></i> <div class=ico _v-c7cde232=""> <img :src=item.base.iconSrc alt=pic _v-c7cde232=""> </div> </div> <div class=desc _v-c7cde232=""> <div class=desc-time v-text="item.chatBaseModel.endTimeStr | fmtDate \'hh:ss\'" _v-c7cde232=""></div> <div class=desc-title v-text=item.base.name _v-c7cde232=""></div> <div class=desc-message _v-c7cde232=""> <div class="desc-mute iconfont icon-mute" :title="item.chatConfigModel.newsMute | json" v-show=item.chatConfigModel.newsMute _v-c7cde232=""></div> <span :title=item.base.type v-show="item.base.type===\'friends\'" v-text="item.chatBaseModel.endChatAuth+\':\'" _v-c7cde232=""></span> <span v-text=item.chatBaseModel.endChatTxt _v-c7cde232=""></span> </div> </div> </div> <div class=handle _v-c7cde232=""> <div class=handle-unread v-touch:tap=increase_newsState($index,1) v-show="item.chatBaseModel.newsUnreadCount==0" _v-c7cde232="">标为未读</div> <div class=handle-unread v-touch:tap=increase_newsState($index,0) v-show="item.chatBaseModel.newsUnreadCount>0" _v-c7cde232="">标为已读</div> <div class=handle-del v-touch:tap=delete_item($index) _v-c7cde232="">删除</div> </div> </li> </ul> </div> <router-view transition=cover keep-alive="" _v-c7cde232=""></router-view> '},250:function(e,t,s){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(8),n=s(22),a=s(18),o=c(a);t.default={vuex:{getters:{wechat_list:i.wechat_list},actions:{get_menu_wechat_list:n.get_menu_wechat_list,set_menu_active:n.set_menu_active,set_chat:n.set_chat,set_chat_count:n.set_chat_count,set_news_state:n.set_news_state,delete_news:n.delete_news}},route:{activate:function(e){var t=(e.from,e.to,e.next);this.set_menu_active(0),t()}},data:function(){return{decline:!1,currentIndex:-1,isTouchSwipe:!1}},events:{"route-pipe":function(e){this.decline=e,this.$parent.$emit("route-pipe",e)}},methods:{info_touchstart:function(e){this.currentIndex=-1},info_tap:function(e){var t=e;t>=0&&!this.isTouchSwipe&&(this.set_chat(this.wechat_list[t]),this.$router.go({path:"/chat/dialogue"})),this.isTouchSwipe=!1},info_swipeleft:function(e){event.stopPropagation(),this.isTouchSwipe?this.isTouchSwipe=!1:(this.isTouchSwipe=!0,this.currentIndex=e)},computed_unRead_count:function(){var e=0;console.log(this.wechat_list),this.wechat_list.forEach(function(t,s){var c=t.chatBaseModel,i=t.chatConfigModel;if(!i.newsMute){var n=c.newsUnreadCount;e+=n}}),this.set_chat_count(e)},increase_newsState:function(e,t){var s=this;this.isTouchSwipe=!1,this.set_news_state(e,t,function(){s.currentIndex=-1,s.computed_unRead_count()})},delete_item:function(e){var t=this;this.delete_news(e,function(){t.currentIndex=-1,t.computed_unRead_count()})}},filters:{f_news:function(e,t){var e=e||{},s=e.newsMute?"_news-dot":"_news-count",c=e.newsMute?"":e.newsUnreadCount,i=e.newsUnreadCount>0,n={nclass:s,ntext:c,nshow:i};return n[t]}},components:{searchBar:o.default},created:function(){var e=this;this.get_menu_wechat_list(function(){e.computed_unRead_count()})}}},275:function(e,t,s){var c,i,n={};s(158),c=s(250),i=s(189),e.exports=c||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(a.template=i),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})}});
//# sourceMappingURL=20.0eae99e3f62b0050f1ba.js.map