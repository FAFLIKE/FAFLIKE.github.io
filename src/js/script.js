let calculator = {
    "type": "none",
    "design": "none",
    "aptability": "none",
    "doMath": function () {
        let price = 0;
        let deadlines = 1;

        switch (this.type) {
            case 'landing':
                price += 100;
                deadlines += 1;
                break;
            case 'visiting_card':
                price += 100;
                deadlines += 1;
                break;
            case 'internet_market':
                price += 300;
                deadlines += 2;
                break;
            default:
                break;
        };

        switch (this.design) {
            case 'classic':
                price += 100;
                deadlines += 1;
                break;
            case 'grunge':
                price += 100;
                deadlines += 1;
                break;
            case 'minimalism':
                price += 100;
                deadlines += 1;
                break;
            case 'typography':
                price += 100;
                deadlines += 1;
                break;
            case 'retro':
                price += 100;
                deadlines += 1;
                break;
            case 'sketch':
                price += 100;
                deadlines += 1;
                break;
            case 'polygonal':
                price += 100;
                deadlines += 1;
                break;
            case 'natural':
                price += 100;
                deadlines += 1;
                break;
            case 'other':
                price += 300;
                deadlines += 3;
                break;
            default:
                break;
        };

        switch (this.aptability) {
            case 'all':
                price += 300;
                deadlines += 2;
                break;
            case 'pc':
                price += 100;
                deadlines += 1;
                break;
            case 'mobile':
                price += 100;
                deadlines += 1;
                break;
            default:
                break;
        };

        let weekText = "";

        switch (deadlines) {
            case 1:
                weekText = "неделя";
                break;
            case 2:
            case 3:
            case 4:
                weekText = "недели";
                break;
            default:
                weekText = "недель";
                break;
        };

        document.getElementById("deadline").textContent = "< " + deadlines + " " + weekText;
        document.getElementById("price").textContent = "< " + price + " $";
    },
    "changeType": function (value) {
        this.type = value;
        this.doMath();
    },
    "changeDesign": function (value) {
        this.design = value;
        this.doMath();
    },
    "changeAdaptability": function (value) {
        this.aptability = value;
        this.doMath();
    },

};


new WOW().init();

var cases_slider = new SimpleAdaptiveSlider('.cases__slider', {
    autoplay: false,
    swipe: true,
});

var reviews_slider = new SimpleAdaptiveSlider('.reviews__slider', {
    autoplay: false,
    swipe: true,
    loop: false,
});

document.body.classList.add('loaded_hiding');
window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
}, 500);


$(function () {
    var jqBar = $('.count'); // селектор для вашего блока
    var jqBarStatus = true;
    $(window).scroll(function () {
        var scrollEvent = ($(window).scrollTop() > (jqBar.position().top - $(window).height()));
        if (scrollEvent && jqBarStatus) {
            jqBarStatus = false;
            /* выполнение скрипта*/
            $('.count').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    });
});

var modal = $modal({
    title: 'В разработке',
    content: 'Этот сайт не имеет бэкенда<br>Данная функция не работает',
  });