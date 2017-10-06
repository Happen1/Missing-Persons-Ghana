$('#myModal').on('shown.bs.modal', function() {
  $('#myInput').focus()
})

$(document).ready(function() {
  $('form#playerInput').submit(function(event) {
    event.preventDefault();
  });
});
