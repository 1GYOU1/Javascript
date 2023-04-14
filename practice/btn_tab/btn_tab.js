$(function() {
    //tab
    $(".js-tab-type1 li a").click(function () {
        if ($(this).attr("target") != "_blank") {
            var $li = $(this).parent();
            var $div = $(this).parent().parent().parent();
            var nm = $li.parent().find("li").index($li);
            $li.siblings("li").removeClass("on");
            $li.addClass("on");

            $("> .js-tab-type1-con", $div).hide();
            $("> .js-tab-type1-con", $div).eq(nm).show();

            /***** lazy img in *****/
            var t_lazy_img =  $(this).closest('.tab_section').find("div.js-tab-type1-con").eq(nm).find('img');
            t_lazy_img.each(function(idx, el){
                var img_url = $(el).attr('data-original');
                $(el).attr('src', img_url);
            });

            return false;
        }
    });

    //버튼 클릭시 다음 탭, 이전 탭 이동
    $('.btn_tab .js-tab-type1-con a').click(function(){
        let prevIdx = $('.btn_tab .prev_btn').index(this) + 1;
        let nextIdx = $('.btn_tab .next_btn').index(this) + 1;
        let conLength = $('.btn_tab .js-tab-type1-con').length;
        if($(this).hasClass('prev_btn')){
            $('.btn_tab .tab_menu .m'+(prevIdx - 1)+' a').trigger('click');
            if((prevIdx - 1) == 0){
                $('.btn_tab .tab_menu .m'+ conLength +' a').trigger('click');
            }
        }else if($(this).hasClass('next_btn')){
            $('.btn_tab .tab_menu .m'+(nextIdx + 1)+' a').trigger('click');
            if(nextIdx == conLength){
                $('.btn_tab .tab_menu .m1 a').trigger('click');
            }
        }
    });
});