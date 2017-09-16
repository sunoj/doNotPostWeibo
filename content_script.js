$( document ).ready(function() {
  $("#v6_pl_content_publishertop").hide()
  $("#v6_pl_content_biztips").remove()
  $("#v6_pl_ad_bottomtip").remove()
  $("#v6_pl_rightmod_recominfo").remove()
  $("#v6_pl_rightmod_rank").remove()
  $("#v6_pl_rightmod_ads36").remove()
  $("#v6_pl_rightmod_attfeed").remove()
  $("#v6_trustPagelet_recom_member").remove()

  $('<div id="doNotPostWeibo" class="WB_cardwrap S_bg2"><a class="WB_cardmore WB_cardmore_noborder clearfix WB_notes" href="https://weibo.com/signup/v5/protocol"><span class="W_f14">《微博服务使用协议》1.3：未经微博平台事先书面许可，用户不得自行授权任何第三方使用微博内容（微博内容即指用户在微博上已发布的信息，例如文字、图片、视频、音频等），包括但不限于自行授权任何第三方发表、复制、转载、更改、引用、链接、下载、同步或以其他方式使用部分或全部微博内容等。</span></a><p id="imStupid"><span class="more_txt W_f14">我坚持要发<em class="W_ficon ficon_arrow_down">c</em></span></p></div>').insertBefore($("#v6_pl_content_publishertop"));

  $("#imStupid").click(function () {
    $("#v6_pl_content_publishertop").show()
    $("#doNotPostWeibo").hide()
  })
})