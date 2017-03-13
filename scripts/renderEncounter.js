var encounter = JSON.parse(sessionStorage.getItem('encounter'));

$(document).ready(function() {

  $('#statblock-area').empty();

  for (var x = 0; x < encounter.length; x++) {
    $('#statblock-area').append(makeStatblockHTML(encounter[x]));
  }
});
