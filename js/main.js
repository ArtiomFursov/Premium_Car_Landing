$(document).ready(function(){
    $('#nav-menu').click(function(){
        $('ul.nav-list').addClass('nav-open').slideToggle('300');
    });
});