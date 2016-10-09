import Vue from 'vue';
import $ from "jquery";
// import Z from "zepto";
Vue.directive('production',{
	bind:function(){
         $(this.el).find(".pro-details").on("click",function(){
             $(".pro-men").css({"transform":"translate(0,0)","transition":"all .5s"})
         })
         $(this.el).find(".pro-close").on("click",function(){
           $(".pro-men").css({"transform":"translate(0,100%)","transition":"all .5s"})
        })
	}
})

Vue.directive('appraise',{
	bind:function(){
           let arr=["½¥ÐÐ½¥Ô¶","ÎÄÒÕÐ¡¸ç"];
           let arr1=["/static/img/img5_01_03.png","/static/img/img5_02_06.png","/static/img/img5_03_08.png","/static/img/img5_04_10.png"];
           $(this.el).find(".app-btn").on("click",function(){
                  let dls="";
                  let i=Math.round(Math.random()*1);
                  let j=Math.round(Math.random()*3);
                  console.log(j);
                  let text=$(".app-text").val();
                  dls+='<dl>'
                      +'<dt>'
                          +'<img src='+arr1[j]+'/>'
                      +'</dt>'
                      +'<dd>'
                          +'<p>'+arr[i]+'<a>2016-6-18</a></p>'
                          +'<span>'+text+'</span>'
                      +'</dd>'
                  +'</dl>';
                  $("#app-dv1").append(dls);
          })
	}
})

Vue.directive('transmit',{
	bind:function(){
         $(this.el).find(".tr-share").on("click",function(){
             $(".tr-men").css({"transform":"translate(0,0)","transition":"all .5s"})
         })
         $(this.el).find(".tr-close").on("click",function(){
           $(".tr-men").css({"transform":"translate(0,100%)","transition":"all .5s"})
        })
	}
})

Vue.directive('enshrine',{
	bind:function(){
         $(this.el).find(".en-share").on("click",function(){
             $(".en-men").css({"transform":"translate(0,0)","transition":"all .5s"})
         })
         $(this.el).find(".en-close").on("click",function(){
           $(".en-men").css({"transform":"translate(0,100%)","transition":"all .5s"})
        })
	}
})

Vue.directive('navse',{
	bind:function(){
         $(this.el).find("li").on("click",function(){
         	    $(this).addClass("n-bg").siblings().removeClass("n-bg");
         })
	}
})

Vue.directive('compile',{
  bind:function(){
         $(this.el).find(".co-lis3>label").on("click",function(){
             if($(this).parent().is(".co-lis4")==true){
                  $(this).parent().removeClass("co-lis4");
              }else{
                  $(this).parent().addClass("co-lis4");
              }
         })
  }
})

Vue.directive('afflatus',{
  bind:function(){
         $(this.el).find(".af-let").on("click",function(){
             if($(this).is(".af-let1")==false){
                  $(this).addClass("af-let1");
              }else{
                  $(this).removeClass("af-let1");
              }
         })
         $(this.el).find(".af-img1").on("click",function(){
              $(this).parent().remove();
         })
  }
})

Vue.directive('song',{
  bind:function(){
         $(this.el).find(".so-dls").on("click",function(){
             if($(this).is(".so-bg")==false){
                  $(this).addClass("so-bg");
              }else{
                  $(this).removeClass("so-bg");
              }
         })
         $(this.el).find(".so-img").on("click",function(){
              $(this).parent().remove();
         })
  }
})

Vue.directive('article',{
  bind:function(){
         $(this.el).find(".ar-share").on("click",function(){
             $(".ar-men").css({"transform":"translate(0,0)","transition":"all .5s"})
         })
         $(this.el).find(".ar-close").on("click",function(){
           $(".ar-men").css({"transform":"translate(0,100%)","transition":"all .5s"})
        })
  }
})

Vue.directive('bar',{
  bind:function(){
         let that=$(this.el);
         $(this.el).find(".ba-uls>li").on("click",function(){
             var i=$(this).index(),
                 w=$(this).width();
              $(this).parent().find(".ba-botm").css({"left":""+w*i+"px","transition":"all 0.5s"})
              $(this).addClass("ba-bg").siblings().removeClass("ba-bg");
            that.find(".ba-tab>div").eq(i).addClass("ba-bg2").siblings().removeClass("ba-bg2");
         })
         that.find(".ba-dv3 span").on("click",function(){
             $(this).css({"display":"none"}).parent().siblings().find("span").css("display","block");
         })
  }
})