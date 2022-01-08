$(document).ready(function () {
  var $alert = $('.alert');
  $alert.hide();
  $alert.on('error', function (event, data) {
    $alert.html(data);
    $alert.addClass('alert-danger');
    $alert.show();
  });
  $alert.on('success', function (event, data) {
    $alert.html(data);
    $alert.addClass('alert-info');
    $alert.show();
  });
  $('.task-delete').click(function (event) {
    $target = $(event.target);
    $.ajax({
      type: 'DELETE',
      url: '/tasks/' + $target.attr('data-task-id'),
      headers: {
        'X-CSRF-Token': $target.attr('data-csrf'),
      },
      data: {},
      success: function (response) {
        $target.parent().parent().remove();
        $alert.trigger('success', 'Task was removed.');
      },
      error: function (error) {
        $alert.trigger('error', error);
      },
    });
  });
});
