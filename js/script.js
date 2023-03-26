$(function(){
    $('.s-gnb>li').hover(function(){
        $(this).find('.s-lnb').stop().slideToggle(300);
    });
    $('.n-gnb>li:first-child').click(function(){
        $('.top-menu').fadeToggle(500);
    })
});


function showAllMenu(){
    const bar = document.getElementsByClassName('bar')[0];
    const allmenu = document.getElementById('allmenu');
    // const topmenu = document.getElementsByClassName('top-menu')[0];
    bar.classList.toggle('active');
    if(allmenu.innerHTML.length == 4){
        allmenu.innerHTML = "전체메뉴 닫기";
    }else if(allmenu.innerHTML.length == 7){
        allmenu.innerHTML = "전체메뉴";
    }
    // topmenu.classList.toggle('active');
}

function change(){
    const view = document.getElementsByClassName('view')[0];
    console.log(view.innerHTML.length);
    if(view.innerHTML.length == 12) view.innerHTML = "ㅡ 소식 접기";
    else if(view.innerHTML.length == 7) view.innerHTML = "+ 더 많은 소식 보기";
}