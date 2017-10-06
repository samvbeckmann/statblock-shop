var selectedEncounter = JSON.parse(localStorage.getItem('selectedEncounter'));
if (selectedEncounter === null)
  selectedEncounter = [];

$(document).ready(function(){

  if (monster) {
    var tags = $('#tag-list').empty();
    $.each(monster.tags, function(i, obj) {
      $('<li>',{text:obj}).appendTo(tags);
    });
    $("#stat-block-location").html(makeStatblockHTML(monster));
  }

  if (monsters !== null)
    makeMonsterCards();

  $("#search-bar").keyup(function() {
    makeMonsterCards();
  });

  $("#add-srd").click(function() {
    $.getJSON("data/srd.json", function(json) {
      addMonsters(json);
      makeMonsterCards();
    });
  });

  $("#import").click(function () { $("#file-load").click(); });

  $('#file-load').change(ui_load_files);

  $("#export").click(function() {
    var dataStr = "data:text/json;charset=utf-8," +
                  encodeURIComponent(JSON.stringify(monsters, null, '\t'));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "monsterLibrary.json");
    dlAnchorElem.click();
  });

  $('#sort').click(function() {
    monsters.sort(function(a,b) {
      return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
    });

    localStorage.setItem('monsters', JSON.stringify(monsters));
    makeMonsterCards();
  });

  $("#confirm-clear-list").click(function() {
    clearMonsters();
    $("#stat-block-location").empty();
  });

  $("#new-monster").click(function() {
    sessionStorage.setItem('mode', 'new');
    window.location.href='editor/';
  });

  $("#edit").click(function() {
    if (monster) {
      sessionStorage.setItem('mode', 'edit');
      sessionStorage.setItem('editing-monster', monster.name);
      window.location.href='editor/';
    }
  });

  $("#duplicate").click(function() {
    if (monster) {
      sessionStorage.setItem('mode', 'duplicate');
      window.location.href='editor/';
    }
  });

  $('#delete').click(function() {
    if (monster) {
      $('#delete-modal').modal('show');
    }
  });

  $('#confirm-delete-statblock').on("click", function() {
    removeMonster(monster.name);

    for (var j = 0; j < selectedEncounter.length; j++) {
      if (monster.name == selectedEncounter[j].name) {
        selectedEncounter.splice(j, 1);
        break;
      }
    }

    monster = null;
    sessionStorage.setItem('activeMonster', null);
    makeEncounterList();
    makeMonsterCards();
    localStorage.setItem('monsters', JSON.stringify(monsters));
    $("#stat-block-location").empty();
  });

  $('#view-encounter').click(function () {
    if (selectedEncounter.length > 0) {
      sessionStorage.setItem('encounter', JSON.stringify(selectedEncounter));
      window.location.href='view/';
    }
  });

  $(document).on("click", ".rm-encounter-btn", function() {
    var listItem = $(this).parent().parent();
    for (var i = 0; i < selectedEncounter.length; i++) {
      if (listItem.text().substring(1) == selectedEncounter[i].name)
        selectedEncounter.splice(i, 1);
    }
    listItem.remove();

    makeMonsterCards();
  });

  $(document).on("click", '#monster-list > tbody > tr', function() {
    monster = getMonsterObject($(this).find('.table-name').text());

    $(".table-active").removeClass("table-active");
    $(this).addClass("table-active");
    sessionStorage.setItem('activeMonster', JSON.stringify(monster));

    var tags = $('#tag-list').empty();
    $.each(monster.tags, function(i, obj) {
      $('<li>',{text:obj}).appendTo(tags);
    });
    $("#stat-block-location").html(makeStatblockHTML(monster));
  });


  $(document).on('click', '.add-monster-btn', function() {
    var chosenMonsterName = $(this).parent().parent().find('.table-name').text();
    var chosenMonster = getMonsterObject(chosenMonsterName);
    if (chosenMonster !== null) {
      if (searchEncounterList(chosenMonsterName) === -1) {
        selectedEncounter.push(chosenMonster);
        sessionStorage.setItem('selectedEncounter', JSON.stringify(selectedEncounter));
        makeEncounterList();

        $(this).removeClass('btn-success add-monster-btn');
        $(this).addClass('btn-warning rm-monster-btn');
        $(this).html('&times;');
      }
    }
  });

  $(document).on('click', '.rm-monster-btn', function () {
    var chosenMonsterName = $(this).parent().parent().find('.table-name').text();
    var chosenMonster = getMonsterObject(chosenMonsterName);
    for (var i = 0; i < selectedEncounter.length; i++) {
      if (chosenMonsterName === selectedEncounter[i].name)
        selectedEncounter.splice(i, 1);
    }

    makeEncounterList();

    $(this).removeClass('btn-warning rm-monster-btn');
    $(this).addClass('btn-success add-monster-btn');
    $(this).html('+');

  });

});

function makeMonsterCards() {
  var monsterList = [];
  var searchString = $("#search-bar").val().toLowerCase();

  if (searchString === '')
    monsterList = monsters;
  else {
    for (var i = 0; i < monsters.length; i++) {
      if (monsters[i].name.toLowerCase().indexOf(searchString) !== -1)
        monsterList.push(monsters[i]);
    }
  }

  if (monsterList === null) {
    $("#monster-list").html('');
    return;
  }

  var cards = "<tbody>";
  for (var j = 0; j < monsterList.length; j++) {
    if (monster && monster.name === monsterList[j].name)
      cards += '<tr class=" table-active">';
    else
      cards += '<tr>';

    if (selectedEncounter)
    cards += '<td class="vert-align fit">';
    if (searchEncounterList(monsterList[j].name) === -1) {
      cards += '<button type="button" class="btn btn-success btn-sm add-monster-btn">+</button>';
    }
    else {
      cards += '<button type="button" class="btn btn-warning btn-sm rm-monster-btn">&times;</button>';
    }
    cards += '</td><td class="table-entry">';
    cards += '<div class="table-name">' + monsterList[j].name + '</div>';
    cards += '<div class="table-desc">' + monsterList[j].heading + '</div>';
    cards += '</td></tr>';
  }

  cards += "</tbody>";

  $("#monster-list").html(cards);
}

function makeEncounterList() {
  var encounterList = "<tbody>";
  for (var i = 0; i < selectedEncounter.length; i++) {
    encounterList += '<tr><td class="fit">';
    encounterList += '<button type="button" class="btn btn-warning btn-sm mr-2 rm-encounter-btn">&times;</button></td>';
    encounterList += '<td class="col-md-10">' + selectedEncounter[i].name + '</td>';
    encounterList += '</tr>';
  }
  encounterList += '</tbody>';
  $("#encounter-list").html(encounterList);
}

function clearMonsters() {
  monsters = null;
  $("#monster-list").empty();
  localStorage.setItem('monsters', monsters);
}

function ui_load_files(evt) {

    function processFiles(reader) {
      var data = JSON.parse(this.result);
      addMonsters(data);
      makeMonsterCards();
    }

    var files = evt.target.files;

    for (var i = 0, f; (f = files[i]) !== null; i++) {
        var reader = new FileReader();

        reader.onload = processFiles;

        reader.readAsText(f);
    }

    // Reset file input
    $("#file-load-form")[0].reset();
}

/**
 * Gets a monsters object by name from the monster list
 * @param  {string} name Name of monster to be found
 * @return Object Monster object found, or null if not found
 */
function getMonsterObject(name) {
  return monsters.filter(function(item) {
    return item.name === name;
  })[0];
}

/**
 * Searches the encounterList for a specific monster name
 * @param  {string} name Name of monster to search for
 * @return int index of monster in list, or -1 if not found
 */
function searchEncounterList(name) {
  for (var i = 0; i < selectedEncounter.length; i++) {
    if (selectedEncounter[i].name == name) {
      return i;
    }
  }
  return -1;
}
