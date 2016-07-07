/*
 *$(document).ready(function () {
        $(document).one('mousemove', function() {
            $("#clicked1").trigger('click');
            $("#clicked2").trigger('click');
            alert("mouse moved");
        });
});

*/

var target = $(".portfolio-section").offset().top;


var interval = setInterval(function() {
    if ($(window).scrollTop() >= target) {
        $("#clicked1").trigger('click');
        $("#clicked2").trigger('click');
        clearInterval(interval);
    }
}, 250);


