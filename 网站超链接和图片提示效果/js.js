
//文字标题提示功能
/*
 1、当鼠标划入
 创建一个div元素，div内容为title的属性的值
 将创建的元素加入到文档中
 为他设置x坐标，y坐标，是他显示在鼠标位置旁边
 * */
$(".tooltip").mouseover(function (e) {
    this.Mytitle = this.title;
    this.title = "";
    var tooptip = "<div id='tooltip'>"+this.Mytitle+"</div>";
    $("body").append(tooptip);
    $("#tooltip").css({
        "top":(e.pageY+10)+"px",
        "left":(e.pageX+10)+"px",
        "position":"absolute"
    }).show("fast");
}).mouseout(function () {
    $("#tooltip").remove();
    this.title = this.Mytitle;
}).mousemove(function (e) {
    $("#tooltip").css({
        "top":(e.pageY+10)+"px",
        "left":(e.pageX+10)+"px",
        "position":"absolute"
    });
});

//图片提示效果

$(".tooltip1").mouseover(function (e) {
    var tooltip1 = "<div id='tooltip1'> <img src='"+this.href+"' alt='产品预览图'></div>";
    $("body").append(tooltip1);
    $("#tooltip1").css({
        "top":(e.pageY+10)+"px",
        "left":(e.pageX+10)+"px",
        "position":"absolute"
    })
}).mouseout(function () {
    $("#tooltip1").remove();
}).mousemove(function (e) {
    $("#tooltip1").css({
        "top":(e.pageY+10)+"px",
        "left":(e.pageX+10)+"px",
        "position":"absolute",
    });
});




































/**
 * Created by pl on 2017/4/16.
 */
