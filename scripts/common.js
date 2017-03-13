/*jshint esversion: 6 */

var monsters = JSON.parse(localStorage.getItem('monsters'));
var monster = JSON.parse(sessionStorage.getItem('activeMonster'));

function makeStatblockHTML(monster) {
  if (monster.two_column) {
    statblock = '<stat-block data-two-column><creature-heading>';
  } else {
    statblock = '<stat-block><creature-heading>';
  }
  statblock += '<h1>' + monster.name + '</h1>';
  statblock += '<h2>' + monster.heading + '</h2>';
  statblock += '</creature-heading><top-stats>';

  statblock += processPropertyLines(monster.basic_info);

  statblock += '<abilities-block data-str="' + monster.ability_scores.str;
  statblock += '" data-dex="' + monster.ability_scores.dex;
  statblock += '" data-con="' + monster.ability_scores.con;
  statblock += '" data-int="' + monster.ability_scores.int;
  statblock += '" data-wis="' + monster.ability_scores.wis;
  statblock += '" data-cha="' + monster.ability_scores.cha;
  statblock += '"></abilities-block>';

  statblock += processPropertyLines(monster.traits);

  statblock += '</top-stats>';

  for (let info of monster.content) {
    if (info === 'input_error') {
      statblock += '<p>Input Error</p>';
    } else if (info.property_line) {
      statblock += '<property-line>';
      statblock += '<h4>' + info.property_line.name + ' </h4>';
      statblock += markdown.toHTML(info.property_line.desc);
      statblock += '</property-line>';
    } else if (info.property_block) {
      statblock += '<property-block>';
      statblock += '<h4>' + info.property_block.name + '. </h4>';
      statblock += markdown.toHTML(info.property_block.desc).replace('\\n', '<p>');
      statblock += '</property-block>';
    } else if (info.spell_block) {
      // TODO
    } else if (info.text) {
      statblock += markdown.toHTML(info.text);
    } else if (info.subtitle) {
      statblock += '<h3>' + info.subtitle + '</h3>';
    } else if (info.numbered_list) {
      statblock += '<ol>';
      for (var i = 0; i < info.numbered_list.length; i++) {
        statblock += '<li>';
        statblock += info.numbered_list[i];
        statblock += '</li>';
      }
      statblock += '</ol>';
      // TODO: Test
    }
  }

  statblock += '</stat-block>';

  return statblock;
}

function processPropertyLines(array) {
  var result = '';
  for (let line of array) {
    if (line === 'input_error') {
      result += '<p>Input Error</p>';
    } else {
      result += '<property-line>';
      result += '<h4>' + line.name + ' </h4>';
      result += markdown.toHTML(line.desc);
      result += '</property-line>';
    }
  }
  return result;
}

function addMonsters(data) {
  if (monsters === null) {
    monsters = data;
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
}

function removeMonster(name) {
  for (var i = 0; i < monsters.length; i++) {
    if (name == monsters[i].name) {
      monsters.splice(i, 1);
      break;
    }
  }
}
