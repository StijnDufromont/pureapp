$(document).ready(function() {
    $('ul.sidenav ul').hide();
   
    $("a.categorynav").click(function() { 
        $(this).next().slideToggle().toggleClass('open');
    });
    
    $('ul.districts a').hover(function() {
        $numberOfClass = $(this).attr('class');
        $('.districtsmap').css('background-position-x', $numberOfClass * -491)
    }, function() {
        $('.districtsmap').css('background-position-x', 0)
    });
});
