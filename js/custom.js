jQuery('a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
  });

$('.nav-tabs a').click(function (e) {
    e.preventDefault();
    $(this).parent().removeClass('active');
});