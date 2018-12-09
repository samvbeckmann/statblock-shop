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
    if (info.property_line) {
      statblock += '<property-line>';
      statblock += '<h4>' + info.property_line.name + ' </h4>';
      statblock += markdown.toHTML(info.property_line.desc);
      statblock += '</property-line>';
    } else if (info.property_block) {
      statblock += '<property-block>';
      statblock += '<h4>' + info.property_block.name + '. </h4>';
      statblock += markdown.toHTML(info.property_block.desc)
                    .replace(/\\n/g, '<p>');
      statblock += '</property-block>';
    } else if (info.text) {
      statblock += markdown.toHTML(info.text);
    } else if (info.subtitle) {
      statblock += '<h3>' + info.subtitle + '</h3>';
    } else if (info.numbered_list) {
      statblock += '<ol>';
      for (var i = 0; i < info.numbered_list.length; i++) {
        statblock += '<li>';
        statblock += markdown.toHTML(info.numbered_list[i])
                      .replace('<p>', '')
                      .replace('</p>', '')
                      .replace(/\\n/g, '<p>');
        statblock += '</li>';
      }
      statblock += '</ol>';
    } else if (info.spell_line) {
      statblock += '<property-line>';
      statblock += markdown.toHTML(info.spell_line);
      statblock += '</property-line>';
    }
  }

  statblock += '</stat-block>';
  if (monster.description) {
    statblock += '<div class="statblock-description">' + markdown.toHTML(monster.description) + '</div>';
  }

  return statblock;
}

function processPropertyLines(array) {
  var result = '';
  for (let line of array) {
    result += '<property-line>';
    result += '<h4>' + line.name + ' </h4>';
    result += markdown.toHTML(line.desc);
    result += '</property-line>';
  }
  return result;
}

function caseInsensitiveStringCompare(item1, item2) {
  return item1.toLowerCase() === item2.toLowerCase();
}

/**
 * Saves a single monster to the list of monsters.
 *
 * @param {Statblock} data Statblock to be added.
 * @param {Boolean} [save=true] If the local storage should be updated after
 * this write.
 * @param {Boolean} [override=false] Determines if this stat block should
 * override a previous statblock of the same name.
 * @return True if statblock added, false if not added due to naming conflict.
 */
function addMonster(data, save = true, override = false) {
  if (monsters === null) {
    monsters = [data];
    if (save) localStorage.setItem('monsters', JSON.stringify(monsters));
    return true;
  }
  else {
    var filtered = monsters.filter(function(value) {
      return data.name.toLowerCase() === value.name.toLowerCase();
    });
    if (filtered.length > 0 && !override) {
      return false;
    } else {
      monsters = monsters.filter(item => !filtered.includes(item));
      monsters.push(data);
      if (save) localStorage.setItem('monsters', JSON.stringify(monsters));
      return true;
    }
  }
}

/**
 *
 * @param {[Statblock]} data List of statblocks to be added.
 * @return A list of names of statblocks not added due to a naming conflict.
 */
function addMonsters(data) {
  var conflicts = [];
  for (var i = 0; i < data.length; i++) {
    var result = addMonster(data[i], false);
    if (!result) {
      conflicts.push(data[i].name);
    }
  }

  localStorage.setItem('monsters', JSON.stringify(monsters));
  return conflicts;
}

function removeMonster(name) {
  for (var i = 0; i < monsters.length; i++) {
    if (name == monsters[i].name) {
      monsters.splice(i, 1);
      break;
    }
  }
}
