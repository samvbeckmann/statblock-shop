var monsters = []
var selectedEncounter = []
var selectedMonster = null

$(document).ready(function(){

  monsters = JSON.parse(localStorage.getItem('monsters'));
  if (monsters != null)
    makeMonsterCards();

  $("#add-srd").click(function() {
    $.getJSON("test.json", function(json) {
      addMonsters(json);
    });
  });

  $("#import").click(function() {

  });


  $("#add-monster").click(function() {
    if (selectedMonster != null) {
      var found = false;
      for (var i = 0; i < selectedEncounter.length; i++) {
        if (selectedEncounter[i].name == selectedMonster.name) {
          found = true;
          break;
        }
      }
      if (!found) {
        selectedEncounter.push(selectedMonster);

        var item = '<li class="list-group-item">';
        item += '<button type="button" class="btn btn-danger btn-sm mr-2 rm-encounter-btn">&times;</button>'
        item += selectedMonster.name;
        item += '</li>';
        $("#encounter-list").append(item);
      }
    }
  });

  $("#confirm-clear-list").click(function() {
    clearMonsters();
    $("#stat-block-location").empty();
  });

  $("#new-monster").click(function() {
    window.location.href='editor/';
  });

  $('#confirm-delete-statblock').on("click", function() {
    for (var i = 0; i < monsters.length; i++) {
      if (selectedMonster.name == monsters[i].name) {
        monsters.splice(i, 1)
        break;
      }
    }

    for (var i = 0; i < selectedEncounter.length; i++) {
      if (selectedMonster.name == selectedEncounter[i].name) {
        selectedEncounter.splice(i, 1)
        break;
      }
    }

    selectedMonster = null;
    makeEncounterList();
    makeMonsterCards();
    localStorage.setItem('monsters', JSON.stringify(monsters));
    $("#stat-block-location").empty();
  });

  $(document).on("click", ".rm-encounter-btn", function() {
    var listItem = $(this).parent();
    for (var i = 0; i < selectedEncounter.length; i++) {
      if (listItem.text().substring(1) == selectedEncounter[i].name)
        selectedEncounter.splice(i, 1);
    }
    listItem.remove();
  });

  $(document).on("click", ".monster-card", function() {
    var monsterName = $(this).find('.card-title').text();
    var monsterObject = monsters.filter(function(item) {
      return item.name === monsterName;
    });

    $(".active-monster").removeClass("active-monster");
    $(this).addClass("active-monster");
    selectedMonster = monsterObject[0];

    $("#stat-block-location").html(makeStatblockHTML(selectedMonster));
  });

});

function addMonsters(data) {
  if (monsters == null) {
    monsters = data
  } else {
    for (var i = 0; i < data.length; i++) {
      var found = false;
      for (var j = 0; j < monsters.length; j++) {
        if (monsters[j].name == data[i].name) {
          found = true;
          break;
        }
      }
      if (!found) {
        monsters.push(data[i]);
      }
    }
  }

  localStorage.setItem('monsters', JSON.stringify(monsters));
  makeMonsterCards();
}

function makeMonsterCards() {
  var cards = ""
  for (i = 0; i < monsters.length; i++) {
    cards += '<div class="card monster-card">';
    cards += '<div class="card-block">';
    cards += '<h4 class="card-title">' + monsters[i].name + '</h4>';
    cards += '<p class="card-text">' + monsters[i].heading + '</p>';
    cards += '</div></div>';
  }

  $("#monster-list").html(cards)
}

function makeEncounterList() {
  var encounterList = "";
  for (var i = 0; i < selectedEncounter.length; i++) {
    encounterList += '<li class="list-group-item">';
    encounterList += '<button type="button" class="btn btn-danger btn-sm mr-2 rm-encounter-btn">&times;</button>'
    encounterList += selectedEncounter[i].name;
    encounterList += '</li>';
  }
  $("#encounter-list").html(encounterList);
}

function clearMonsters() {
  monsters = null;
  $("#monster-list").empty();
  localStorage.setItem('monsters', monsters);
}

function makeStatblockHTML(monster) {
  statblock = '<stat-block><creature-heading>';
  statblock += '<h1>' + monster.name + '</h1>';
  statblock += '<h2>' + monster.heading + '</h2>';
  statblock += '</creature-heading><top-stats>'

  for (let line of monster.basic_info) {
    statblock += '<property-line>';
    statblock += '<h4>' + line.name + ' </h4>';
    statblock += markdown.toHTML(line.desc);
    statblock += '</property-line>';
  }

  statblock += '<abilities-block data-str="' + monster.ability_scores.str;
  statblock += '" data-dex="' + monster.ability_scores.dex;
  statblock += '" data-con="' + monster.ability_scores.con;
  statblock += '" data-int="' + monster.ability_scores.int;
  statblock += '" data-wis="' + monster.ability_scores.wis;
  statblock += '" data-cha="' + monster.ability_scores.cha;
  statblock += '"></abilities-block>';

  for (let line of monster.traits) {
    statblock += '<property-line>';
    statblock += '<h4>' + line.name + ' </h4>';
    statblock += markdown.toHTML(line.desc);
    statblock += '</property-line>';
  }

  statblock += '</top-stats>'

  for (let info of monster.content) {
    if (info.property_line) {
      statblock += '<property-line>';
      statblock += '<h4>' + info.property_line.name + '</h4>';
      statblock += markdown.toHTML(info.property_line.desc);
      statblock += '</property-line>';
    } else if (info.property_block) {
      statblock += '<property-block>';
      statblock += '<h4>' + info.property_block.name + '. </h4>';
      statblock += markdown.toHTML(info.property_block.desc);
      statblock += '</property-block>';
    } else if (info.spell_block) {
      // TODO
    } else if (info.text) {
      statblock += markdown.toHTML(info.text);
    } else if (info.subtitle) {
      statblock += '<h3>' + info.subtitle + '</h3>';
    } else if (info.numbered_list) {
      // TODO
    }
  }

  statblock += '</stat-block>';

  return statblock;
}
