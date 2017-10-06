$(document).ready(function() {
  $('form#Input').submit(function(event) {
    event.preventDefault();
  });

  // $('.carousel').carousel();
  $('#myCarousel').on('slide.bs.carousel', function() {
    .carousel('cycle');
  });

  $('#myModal').on('shown.bs.modal', function() {
    $('#myInput').focus();
  });
});
