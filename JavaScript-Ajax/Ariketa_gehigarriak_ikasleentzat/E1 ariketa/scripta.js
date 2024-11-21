$(document).ready(function() {
    //setTimeout("animation()",300);
    $("#Hasi").click(animation);
});

function animation(){
    sun_raft();
    cloud1();
    cloud2();
    cloud3();
    //$("#greetings").animate({top: '125px' }, {queue:false, duration:600, easing:'easeOutBounce'});
    $("#greetings").animate({top: '125px' },900);
    //$("#stamp").animate({left: '595px' }, {queue:false, duration:1200, easing:'easeOutBounce'});
    $("#stamp").animate({left: '595px' }, 1200);	
}
    
function sun_raft(){
    $("#sun").animate({opacity:".7"},1000).animate({opacity:"1"},1000);
    $("#raft").animate({top:"-=5px"},1000).animate({top:"+=5px"}, 1000);
    $("#raftripple").animate({opacity:".1"},1000).animate({opacity:"1"},1000);
    setTimeout("sun_raft()",2000);
}
function cloud1(){
    $("#cloud1").animate({left:"+=850px"},10000).animate({left:"-150px"}, 0)
    setTimeout("cloud1()",10000);
}
function cloud2(){
    $("#cloud2").animate({left:"+=950px"},9000).animate({left:"-250px"}, 0)
    setTimeout("cloud2()",9000);
}
function cloud3(){
    $("#cloud3").animate({left:"+=800px"},6000).animate({left:"-100px"}, 0)
    setTimeout("cloud3()",6000);
}