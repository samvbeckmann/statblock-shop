$(document).ready(function() {
  var monster = JSON.parse(sessionStorage.getItem('activeMonster'));
  $("#print-statblock").html(makeStatblockHTML(monster));
});
