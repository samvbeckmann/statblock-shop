var monsters = new Array();
var selectedEncounter = new Array();



$(document).ready(function(){

  monsters = JSON.parse(localStorage.getItem('monsters'));


  $("#add-srd").click(function() {
    $.getJSON("test.json", function(json) {
      addMonsters(json);
    });
  })

  $("#import").click(function() {
    $("#stat-block-location").html(makeStatblockHTML(monsters[1]));
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

function makeStatblockHTML(monster) {
  statblock = '<stat-block><creature-heading>';
  statblock += '<h1>' + monster.name + '</h1>';
  statblock += '<h2>' + monster.heading + '</h2>';
  statblock += '</creature-heading><top-stats>'

  for (let line of monster.basic_info) {
    statblock += '<property-line>';
    statblock += '<h4>' + line.name + ' </h4>';
    statblock += '<p>' + line.desc + '</p>';
    statblock += '</property-line>';
  }

  statblock += '<abilities-block data-str="' + monster.ability_scores.str;
  statblock += '" data-dex="' + monster.ability_scores.dex;
  statblock += '" data-con="' + monster.ability_scores.dex;
  statblock += '" data-int="' + monster.ability_scores.dex;
  statblock += '" data-wis="' + monster.ability_scores.dex;
  statblock += '" data-cha="' + monster.ability_scores.dex;
  statblock += '"></abilities-block>';

  for (let line of monster.traits) {
    statblock += '<property-line>';
    statblock += '<h4>' + line.name + ' </h4>';
    statblock += '<p>' + line.desc + '</p>';
    statblock += '</property-line>';
  }

  statblock += '</top-stats>'

  for (let info of monster.content) {
    if (info.property_line) {
      statblock += '<property-line>';
      statblock += '<h4>' + info.property_line.name + '</h4>';
      statblock += '<p>' + info.property_line.desc + '</p>';
      statblock += '</property-line>';
    } else if (info.property_block) {
      statblock += '<property-block>';
      statblock += '<h4>' + info.property_block.name + '. </h4>';
      statblock += '<p>' + info.property_block.desc + '</p>';
      statblock += '</property-block>';
    } else if (info.spell_block) {
      // TODO
    } else if (info.text) {
      statblock += '<p>' + info.text + '</p>';
    } else if (info.subtitle) {
      statblock += '<h3>' + info.subtitle + '</h3>';
    } else if (info.numbered_list) {
      // TODO
    }
  }

  statblock += '</stat-block>';

  return statblock;
}
