$(document).ready(function (){
    // Get window size
    var width = $(window).width(),
        height = $(window).height(),
    // Minimized the width
        costumizedWidth = width - 32,
        minimizedHeight = height -  300,
    // Get image by class
        image = $('.image');

    // Responsive statement
    image.css('width', costumizedWidth)
});
