$(function () {
  var h1 = $('#top__title--js');
  var txt_array = $('#top__title--js').text().split('');
  console.log(txt_array);
  $('#top__title--js').html('');
  $.each(txt_array, function(index,element) {
    var new_element = $("<span/>").text(element).css({ opacity: 0 });
    new_element.appendTo(h1);
    new_element.delay(index * 100);
    new_element.animate({ opacity: 1 }, 3000);
  });
});