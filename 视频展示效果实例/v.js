$(function () {
    var page = 1;
    var i = 4;
    $("span.next").click(function () {
        var parent = $(this).parents(".v_show");
        var v_content = parent.find(".v_content");
        var v_content_list = v_content.find(".v_content_list");
        var v_width = v_content.width();
        var v_len = v_content_list.find("img").length;
        var max = v_len/i;
        var v_span = $(".highlight_tip").find("span");
        //alert(v_content.is(":animated"));
        if (!v_content.is(":animated")){
            //alert(2);
            if (page<max){
                v_content_list.animate({
                    left:"-="+v_width
                });
                page++;
            }else {
                v_content_list.animate({
                    left:0
                },"fast");
                page=1;
            }
        }
        v_span.eq(page-1).addClass("current").siblings().removeClass("current");
    });
    $("span.prev").click(function () {
        var parent = $(this).parents(".v_show");
        var v_content = parent.find(".v_content");
        var v_content_list = v_content.find(".v_content_list");
        var v_width = v_content.width();
        var v_len = v_content_list.find("img").length;
        var max = v_len/i;
        var v_span = $(".highlight_tip").find("span");
        //alert(v_content.is(":animated"));
        if (!v_content.is(":animated")){
            if (page===1){
                v_content_list.animate({
                    left:"-="+v_width*(max-1)
                },"fast");
                page=4;

            }else {
                v_content_list.animate({
                    left:"+="+v_width
                });
                page--;
            }
        }
        v_span.eq(page-1).addClass("current").siblings().removeClass("current");
    })
});








































/**
 * Created by pl on 2017/4/17.
 */
