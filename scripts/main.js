var monsters = new Array();
var selectedEncounter = new Array();



$(document).ready(function(){

  monsters = JSON.parse(localStorage.getItem('monsters'));


  $("#add-srd").click(function() {
    $.getJSON("test.json", function(json) {
      addMonsters(json);
    });
  })


  $("#add-monster").click(function() {
    $("#encounter-list").append('<li class="list-group-item"><button type="button" class="btn btn-danger btn-sm mr-2">&times;</button>Manticore</li>');
  });

  $("#clear-list").click(function() {
    clearMonsters();
  });

});

function addMonsters(data) {
  if (monsters == null) {
    monsters = data
  } else {
    monsters.push.apply(monsters, data)
  }

  cards = ""
  for(i = 0; i < monsters.length; i++) {
    cards += '<div class="card monster-card">';
    cards += '<div class="card-block">';
    cards += '<h4 class="card-title">' + monsters[i].name + '</h4>';
    cards += '<p class="card-text">' + monsters[i].heading + '</p>';
    cards += '</div></div>';
  }

  $("#monster-list").html(cards)
}

function clearMonsters() {
  monsters = null;
  $("#monster-list").empty();
}
