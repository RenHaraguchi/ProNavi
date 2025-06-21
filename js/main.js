$(function () {
    $(window).scroll(function () {
        // ウィンドウの縦スクロール量を取得
        var scrollTop = $(window).scrollTop();
        // ウィンドウの高さ（100vh）
        var windowH = $(window).height();
        // メインビジュアル分を超えたらクラスを付与、そうでなければ外す
        if (scrollTop > windowH && !$("header").hasClass('open')) {
            $('.index-header').addClass('color-change');
        } else {
            $('.index-header').removeClass('color-change');
        }
    });

    $(".hamburger, nav, .mask").click(function () {
        $("header").toggleClass("open");
        if ($("header").hasClass('open')) {
            $('body').addClass('no-scroll');
        } else {

            $('body').removeClass('no-scroll');
        }
    })

    $(".slide-items").slick({
        arrows: false,
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "50px",
                    slidesToShow: 1,
                },
            },
        ],
    });

    $('#vegas').vegas({
        slides: [
            { src: './img/home/mainvisual1.png' },
            { src: './img/home/mainvisual2.jpg' },
            { src: './img/home/mainvisual3.jpg' },
            { src: './img/home/mainvisual4.jpg' },
        ],
    });
});
