var encounter = JSON.parse(sessionStorage.getItem('encounter'));

$(document).ready(function() {

  $('#statblock-area').empty();

  for (var x = 0; x < encounter.length; x++) {
    var wrappedStatblock = '<div class="encounter-statblock">';
    wrappedStatblock += makeStatblockHTML(encounter[x]);
    wrappedStatblock += '</div>';
    $('#statblock-area').append(wrappedStatblock);
  }
});
