$(document).ready(function(){
	$(".navbar-nav li a").on("click",function(e){
		e.preventDefault();
		console.log(this.hash);
		var target= this.hash;

		$("html,body").animate({
			scrollTop: $(target).offset().top
		},1000,"swing" , function(){
			window.location.hash=target;
		});
	});
});

/*$(document).ready(function(){
  $(".navbar-nav li a").click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});*/