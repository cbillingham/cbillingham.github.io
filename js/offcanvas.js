$(document).ready(function () {

  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active');
  });

  $('.sidebar-toggle').click(function(){
    $(this).find('i').toggleClass('fa-search fa-chevron-right');
  });

});

