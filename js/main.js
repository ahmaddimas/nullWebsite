    $(document).ready(function() {
        init();
        showContent(2);

        function init() {
            var jd = $('#start');
            var div = $('#startDiv');
            var txt = $('#startDiv > span.text');
            $('header, footer, #start, #startDiv > span.text').hide(0);
            $('#start, #startDiv > span.text').delay(500).fadeIn(3000);
            txt.delay(1000).fadeOut(2000, function() {
                div.fadeOut();
                jd.removeAttr('id');
                $('header, footer').fadeIn(1000);
            });
        }
        $('#btnShow').click(function(event) {
            var lf = $('header').css('left');
            if (lf === '0px') {
                $('header').css('left', '-15%');
                $('#background > .shadow').fadeOut(500);
                $(this).css('transform', 'rotateZ(0deg)');
            } else {
                $('header').css('left', '0%');
                $('#background > .shadow').fadeIn(500).click(function(event) {
                    $('header').css('left', '-15%');
                    $('#background > .shadow').fadeOut(500);
                    $('#btnShow').css('transform', 'rotateZ(0deg)');
                });
                $(this).css('transform', 'rotateZ(90deg)');
            }
        });

        $('#header > ul > li').click(function(event) {
            var index = $(this).index() + 1;
            if (index == 1) {
                showContent(2);
            } else if (index == 2) {
                window.location = 'article.html';
            } else if (index == 3) {
                window.location = 'gallery.html';
            } else if (index == 4) {
                window.location = 'about.html';
            }
        });

        function slideLeft() {
            var posContent2 = $('#content2').css('left');
            var posweb = $(window).width();
            if (posContent2 === (-1 * posweb) + 'px') {
                showContent(1);
            } else if (posContent2 === (posweb * -2) + 'px') {
                showContent(2);
            }
        }

        function showContent(index) {
            var posweb = $(window).width();
            var posContent2 = $('#content2').css('left');

            if (index == 1) {
                $('#content2').animate({
                    left: "0"
                });
                $('#content1').animate({
                    left: posweb
                });
                $('#content3').animate({
                    left: (posweb * 2)
                });
                setTimeout(function e() {
                    animateArticle();
                    $('#content3 .box').css('opacity', '0');
                    $('#header > ul > li:nth-child(1)').css('color', '');
                }, 1600);
            } else if (index == 2) {
                $('#content2').animate({
                    left: (posweb * -1)
                });
                $('#content1').animate({
                    left: "0"
                });
                $('#content3').animate({
                    left: posweb
                });
                setTimeout(function e() {
                    hideArticle();
                    $('#content3 .box').css('opacity', '0');
                    $('#header > ul > li:nth-child(1)').css('color', 'rgb(52, 186, 215)');
                }, 1000);
            } else if (index == 3) {
                $('#content2').animate({
                    left: (posweb * -2)
                });
                $('#content1').animate({
                    left: (posweb * -1)
                });
                $('#content3').animate({
                    left: "0"
                });
                setTimeout(function e() {
                    hideArticle();
                    $('#content3 .box').css('opacity', '1');
                    $('#header > ul > li:nth-child(1)').css('color', '');
                }, 700);
            }
            $('footer > ul#slide-icon li').css('width', '1.5%').css('background-color', 'transparent');
            $('footer > ul#slide-icon li:nth-child(' + index + ')').css('width', '1.2%').css('background-color', '#ffffff');

        }

        function animateArticle() {
            var article = $('article');
            if (article.hasClass('rand')) {
                article.removeClass('rand');
            }
        }

        function hideArticle() {
            var article = $('article');
            if (!article.hasClass('rand')) {
                article.addClass('rand');
            }
        }

        $('footer > ul#slide-icon li').click(function(event) {
            var index = $(this).index() + 1;
            showContent(index);
        });

        function slideRight() {
            var posContent3 = $('#content3').css('left');
            var posweb = $(window).width();
            if (posContent3 === posweb + 'px') {
                showContent(3);
            } else if (posContent3 === (posweb * 2) + 'px') {
                showContent(2);
            }
        }
        $('footer > span.right').click(function(event) {
            slideRight();
        });

        //Firefox
        $(window).bind('DOMMouseScroll', function(e) {
            if (e.originalEvent.detail > 0) {
                //scroll down
                slideLeft();
            } else {
                //scroll up
                slideRight();
            }

            //prevent page fom scrolling
            return false;
        });

        //IE, Opera, Safari
        $(window).bind('mousewheel', function(e) {
            if (e.originalEvent.wheelDelta < 0) {
                //scroll down
                slideLeft();
            } else {
                //scroll up
                slideRight();
            }

            //prevent page fom scrolling
            return false;
        });
    });
