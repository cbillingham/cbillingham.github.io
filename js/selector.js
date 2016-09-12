$(window).load(function() {
  // init Isotope
  var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.filter-btn-group').on( 'click', 'a', function() {
    event.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    $(".filter-btn-group a").removeClass("active");
    $(this).addClass("active");
  });
});