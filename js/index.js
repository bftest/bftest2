var winW = document.documentElement.clientWidth;
var desW = 640;
var proportion = desW/100;/*����*/
document.documentElement.style.fontSize = winW/proportion +"px";
if(winW>desW){
    document.documentElement.style.fontSize = "100px";
}
/////
$(function(){
    //login
    $(".inputIn>li").children("input").on("click",function(){
        $(this).parent().children("span").show();
        $(this).parent().siblings().children("span").hide();
    });
    ///
    var $checkChange=$(".checkChange");
    $checkChange.each(function(){
        new FastClick($checkChange[0]);
        $(this).on("click",function(){
            $(this).hasClass("checked") ? $(this).removeClass("checked").siblings("input").removeAttr("checked","false") :  $(this).addClass("checked").siblings("input").attr("checked","checked");
        });
    });
    //
    var $carTSpan=$(".carT span");
    $carTSpan.each(function(index){
        new FastClick($carTSpan[index]);
        $(this).on("click",function(){
            $(this).hasClass("selected") ? $(this).removeClass("selected").parent().siblings().hide():($(this).is("[id]") ? $(this).addClass("selected").siblings().removeClass("selected").parent().siblings().show(): $(this).addClass("selected").siblings().removeClass("selected").parent().siblings().hide());
        })
    });
    $("#testIn,#textC").focus(function(){
        $(".pay").css({"position":"static"});
    });
    $("#testIn,#textC").blur(function(){
        $(".pay").css({"position":"fixed"});
    });
    //
    function buyNum(){
        var $increment= $(".increment");
        var $decrement= $(".decrement");
        var $buyNum=$("#buy-num");
        $increment.each(function(){
            new FastClick($increment[0]);
           $(this).on("click",function(){
                var $num=parseInt($("#buy-num").val());
                $num++;
                $("#buy-num").val($num);
            });
        })
        $decrement.each(function(){
            new FastClick($decrement[0]);
            $(this).on("click",function(){
                var $num=parseInt($("#buy-num").val());
                $num<=1 ? $num=1 : $num--;
                $("#buy-num").val($num);
            });
        })
        $buyNum.each(function(){
            new FastClick($buyNum[0]);
            $(this).on("click",function(){
                $(this).focus();
            });
        })
    }
    buyNum();
    //
    var $tagBli = $(".tagBoxC dl li");
    $tagBli.each(function(index){
        new FastClick($tagBli[index]);
        $(this).on("click",function(){
            $(this).hasClass("disable") ? $(this).removeClass("selected") : $(this).addClass("selected").siblings().removeClass("selected");
        })
    });
    $(".selectedTag").on("click",function(){
        $(".tagLayerBox").show();
        $("html,body").addClass("ovfHiden");
    });
    $("#btnSure").click(function(){
        $(".tagLayerBox").hide();
        $("html,body").removeClass("ovfHiden");
    });
    $(".closed .close").on("click",function(){
        $(".tagLayerBox").hide();
        $("html,body").removeClass("ovfHiden");
    });
    //
    var $befTar=$(".manageAd li .befTar");
    $befTar.each(function(index){
        new FastClick($befTar[index]);
        $(this).on("click",function(){
            $(this).hasClass("selected") ?  $(this).parent().siblings().children(".befTar").removeClass("selected") : $(this).addClass("selected").parent().siblings().children(".befTar").removeClass("selected");
        });
    });

//�ص�ҳ�涥��
    $("#returnTop").click(function(){
        $('body,html').animate({scrollTop:0},1000); //�����ť����ص�ҳ�涥��
    });
    $(window).scroll(function() {
        var $scrollTop=$(document).scrollTop(); //�������ඥ�˵ľ���
        var $viewHeight= $(window).height();//��������ӻ����ڵĴ�С
        var top=parseInt($scrollTop)+parseInt($viewHeight)-217;
        if($scrollTop>$viewHeight-300){
            $("#returnTop").show();
        }else{
            $("#returnTop").hide();
        }
    })
//
    var $sLI=$(".serviceType li");
    $sLI.each(function(index){
        new FastClick($sLI[index]);
        $(this).on("click",function(){
            $(this).addClass("on").siblings().removeClass("on");
        })
    });
//
  /*var $scoreLI=$(".scoreAssessList li .dd");
    $scoreLI.each(function(k){
        var $ddSpan=$(this).children("span");
        $ddSpan.each(function(index){
            new FastClick($ddSpan[index]);
            $(this).on("click",function(){
                if(!$(this).hasClass("on")){
                    for(var i=0;i<index+1;i++){
                        $ddSpan[i].className="on";
                    }
                }else{
                    for(var i=index;i<5;i++){
                        $ddSpan[i].className="";
                    }
                }
            })
        });
    });*/
   var $scoreLI=$(".scoreAssessList li .dd");
    $scoreLI.each(function(k){
       // new FastClick($scoreLI[k]);
        $(this).on("touchstart", function (event) {
            event.preventDefault();
            this["strX"] = event.originalEvent.targetTouches[0].clientX;
            console.log(this["strX"]);
        });
        $(this).on("touchmove", function (event) {
            event.preventDefault();
            this["strX2"]= event.originalEvent.targetTouches[0].clientX;
            console.log(this["strX2"]);
        });
        $(this).on("touchend", function (event) {
            event.preventDefault();
            var dis=this["strX2"]-this["strX"];
            console.log(dis);
            if(dis>0){
                var $num=parseInt(dis/46);
                var $span=$(this).children();
                if($num<5){
                    for(var i=0;i<$num;i++){
                        $span[i].className="on";
                    }
                }else{
                    for(var i=0;i<5;i++){
                        $span[i].className="on";
                    }
                }
            }else{
                dis=Math.abs(dis);
                console.log(dis);
                var $num=parseInt(dis/46);
                var $span=$(this).children();
                var $length=$("span.on").length;
                console.log($length);
                console.log($num);
                if($num>5){
                    for(var i=0;i<5;i++){
                        $span[i].className="";
                    }
                }else{
                    if($length<=$num){
                        for(var i=0;i<$length;i++){
                            $span[i].className="";
                        }
                    }else{
                        for(var i=$length-$span-1;i<=$length-1;i++){
                            $span[i].className="";
                        }
                    }

                }
            }
        });
    });


});






