$(function(){
	if($('#slides').length>0){
		$('#slides').slidesjs({
			width:600,
			height:800,
			play: {
			  auto: true,
			  interval:3000,
			}
		});
	}
	
	$(".msg_btn").on('click',function(){
		var $this = $(this);
		var $o = $('.explan_box');
		$o.addClass('on');
		$this.hide();
		$('.colse').on('click',function(){
			setTimeout(function(){$this.show();},1000)                 
			$o.removeClass('on');
			return false;
		});
	}); 
	var handleSidebarMenu = function () {
		jQuery('.page-sliderbar').on('click', 'li > a', function (e) {
			if ($(this).next().hasClass('sub-menu') == false) {
				if ($('.btn-navbar').hasClass('collapsed') == false) {
					$('.btn-navbar').click();
				}
				return;
			}
			var parent = $(this).parent().parent();

			parent.children('li.open').children('a').children('.arrow').removeClass('open');
			parent.children('li.open').children('.sub-menu').slideUp(200);
			parent.children('li.open').removeClass('open');

			var sub = jQuery(this).next();
			if (sub.is(":visible")) {
				jQuery('.arrow', jQuery(this)).removeClass("open");
				jQuery(this).parent().removeClass("open");
				sub.slideUp(200, function () {
					   // handleSidebarAndContentHeight();
					});
			} else {
				jQuery('.arrow', jQuery(this)).addClass("open");
				jQuery(this).parent().addClass("open");
				sub.slideDown(200, function () {
					   // handleSidebarAndContentHeight();
					});
			}
			e.preventDefault();
		});
	}
	if(document.hasOwnProperty&&document.hasOwnProperty("ontouchstart")){
		handleSidebarMenu();
	}



	$('#navigation ul li').on('mouseover',function(){
		$(this).find('a').addClass('on');
		if($(this).has('ul')){
			$(this).children("ul").stop(true,true).show();
		}
		$(this).on('mouseout',function(){
			$(this).find('a').removeClass('on');
			$(this).children("ul").stop(true,true).hide();
		});
	});

	// 模拟表单

    var d = document;
    var safari = (navigator.userAgent.toLowerCase().indexOf('safari') != -1) ? true : false;
    var gebtn = function(parEl,child) { return parEl.getElementsByTagName(child); };
    onload = function() {
        var body = gebtn(d,'body')[0];
        body.className = body.className && body.className != '' ? body.className + ' has-js' : 'has-js';
        
        if (!d.getElementById || !d.createTextNode) return;
        var ls = gebtn(d,'label');
        for (var i = 0; i < ls.length; i++) {
            var l = ls[i];
            if (l.className.indexOf('label_') == -1) continue;
            var inp = gebtn(l,'input')[0];
            if (l.className == 'label_check') {
                l.className = (safari && inp.checked == true || inp.checked) ? 'label_check c_on' : 'label_check c_off';
                l.onclick = check_it;
            };
            if (l.className == 'label_radio') {
                l.className = (safari && inp.checked == true || inp.checked) ? 'label_radio r_on' : 'label_radio r_off';
                l.onclick = turn_radio;
            };
        };
    };
    var check_it = function() {
        var inp = gebtn(this,'input')[0];
        if (this.className == 'label_check c_off' || (!safari && inp.checked)) {
            this.className = 'label_check c_on';
            if (safari) inp.click();
        } else {
            this.className = 'label_check c_off';
            if (safari) inp.click();
        };
    };
    var turn_radio = function() {
        var inp = gebtn(this,'input')[0];
        if (this.className == 'label_radio r_off' || inp.checked) {
            var ls = gebtn(this.parentNode,'label');
            for (var i = 0; i < ls.length; i++) {
                var l = ls[i];
                if (l.className.indexOf('label_radio') == -1)  continue;
                l.className = 'label_radio r_off';
            };
            this.className = 'label_radio r_on';
            if (safari) inp.click();
        } else {
            this.className = 'label_radio r_off';
            if (safari) inp.click();
        };
    };

})