window.onload = function(){
$(".mainslider").slick({
	autoplaySpeed:2500,
	autoplay:true,
	dots: true,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows:false,
	centerMode: false,
	customPaging : function(s,i){
		return '<a href="#"></a>';
	},
	// a태그 기능이 안없어짐 
  }); 

//slider dots a링크 없애기
$('.slick-dots').find('a').click(
        function(e){
            e.preventDefault();         //a링크 기능 없애줌
        });

}