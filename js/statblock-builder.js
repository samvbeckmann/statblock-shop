/*jshint esversion: 6 */

$(document).ready(function() {

  var mode = sessionStorage.getItem('mode');

  switch (mode) {
    case 'new':
      $.getJSON("/data/default_template.json").then(function(json) {
        monster = json;
        fillForm(monster);
        $("#live-statblock").html(makeStatblockHTML(monster));
      });
      break;
    case 'duplicate':
      monster.name = monster.name + ' (2)';
      fillForm(monster);
      $("#live-statblock").html(makeStatblockHTML(monster));
      break;
    case 'edit':
      fillForm(monster);
      $("#live-statblock").html(makeStatblockHTML(monster));
      break;
  }

  // TODO: Handle naming conflict errors.
  $('#save').click(function() {
    switch (mode) {
      case 'new':
      case 'duplicate':
        addMonsters([monster]);
        break;
      case 'edit':
        removeMonster(sessionStorage.getItem('editing-monster'));
        addMonsters([monster]);
        break;
      default:

    }
    sessionStorage.setItem('activeMonster', JSON.stringify(monster));
    window.location.href='/';
  });

  $('#two-column-checkbox').change(function() {
    monster.two_column = this.checked;

    if (monster.two_column) {
      $('#live-statblock').removeClass('one-col-size');
      $('#live-statblock').addClass('two-col-size');
    } else {
      $('#live-statblock').removeClass('two-col-size');
      $('#live-statblock').addClass('one-col-size');
    }

    $("#live-statblock").html(makeStatblockHTML(monster));

    updateAllExpandables();
  });

  $("#monster-name").keyup(function() {
    monster.name = $(this).val();
    $("#live-statblock").html(makeStatblockHTML(monster));
  });

  $("#monster-header").keyup(function() {
    monster.heading = $(this).val();
    $("#live-statblock").html(makeStatblockHTML(monster));
  });

  $("#str-score").on("input", function() {
    monster.ability_scores.str = $(this).val();
    $("#live-statblock").html(makeStatblockHTML(monster));
  });

  $("#dex-score").on("input", function() {
    monster.ability_scores.dex = $(this).val();
    $("#live-statblock").html(makeStatblockHTML(monster));
  });

  $("#con-score").on("input", function() {
    monster.ability_scores.con = $(this).val();
    $("#live-statblock").html(makeStatblockHTML(monster));
  });

  $("#wis-score").on("input", function() {
    monster.ability_scores.wis = $(this).val();
    $("#live-statblock").html(makeStatblockHTML(monster));
  });

  $("#int-score").on("input", function() {
    monster.ability_scores.int = $(this).val();
    $("#live-statblock").html(makeStatblockHTML(monster));
  });

  $("#cha-score").on("input", function() {
    monster.ability_scores.cha = $(this).val();
    $("#live-statblock").html(makeStatblockHTML(monster));
  });

  $(document).on('keyup', '.basic-info-name, .basic-info-desc', function() {
    updateMonsterBasicInfo();
    $("#live-statblock").html(makeStatblockHTML(monster));
  });

  $(document).on('keyup', '.trait-name, .trait-desc', function() {
    updateMonsterTraits();
    $("#live-statblock").html(makeStatblockHTML(monster));
  });

  $(document).on('keyup', '.ability-field', function() {
    updateMonsterAbilities();
    $("#live-statblock").html(makeStatblockHTML(monster));
  });

  $(window).resize(function() {
    updateAllExpandables();
  });

  $(document).on('keyup', '.expandable', function() {
    updateExpandableTextArea(this);
  });

  updateAllExpandables();
});

// $(window).load(function() {

// })

function updateAllExpandables() {
  $('.expandable').each(function() {
    updateExpandableTextArea(this);
  });
}

function updateExpandableTextArea(object) {
  var hiddenDiv = document.createElement('div');
  hiddenDiv.classList.add('hiddendiv', 'common');
  document.body.appendChild(hiddenDiv);
  hiddenDiv.innerHTML = object.value + '\n';
  hiddenDiv.style.width = object.clientWidth + "px";
  object.style.height = hiddenDiv.getBoundingClientRect().height + 'px';
  document.body.removeChild(hiddenDiv);
}

function updateMonsterBasicInfo() {
  monster.basic_info = [];
  $('#basic-info-lines .statblock-input-group').each(function() {
    var name = $(this).find('.basic-info-name').val();
    var desc = $(this).find('.basic-info-desc').val();
    monster.basic_info.push({name: name, desc: desc});
  });
}

function updateMonsterTraits() {
  monster.traits = [];
  $('#traits-lines .statblock-input-group').each(function() {
    var name = $(this).find('.trait-name').val();
    var desc = $(this).find('.trait-desc').val();
    monster.traits.push({name: name, desc: desc});
  });
}

function updateMonsterAbilities() {
  monster.content = [];
  var numberedBuffer = [];
  $('#abilities-lines .statblock-input-group').each(function() {
    if (numberedBuffer.length > 0 && !$(this).hasClass('abilityline-numbered')) {
      monster.content.push({numbered_list: numberedBuffer});
      numberedBuffer = [];
    }

    if ($(this).hasClass('abilityline-subtitle')) {
      var subtitle = $(this).find('.ability-subtitle').val();
      monster.content.push({subtitle: subtitle});
    } else if ($(this).hasClass('abilityline-text')) {
      var text = $(this).find('.ability-text').val();
      monster.content.push({text: text});
    } else if ($(this).hasClass('abilityline-spells')) {
      var spells = $(this).find('.ability-spells').val();
      monster.content.push({spell_line: spells});
    } else if ($(this).hasClass('abilityline-trait')) {
      var traitName = $(this).find('.ability-trait-name').val();
      var traitDesc = $(this).find('.ability-trait-desc').val();
      monster.content.push({property_block: {name: traitName, desc: traitDesc}});
    } else if ($(this).hasClass('abilityline-property')) {
      var propertyName = $(this).find('.ability-property-name').val();
      var propertyDesc = $(this).find('.ability-property-desc').val();
      monster.content.push({property_line: {name: propertyName, desc: propertyDesc}});
    } else if ($(this).hasClass('abilityline-numbered')) {
      numberedBuffer.push($(this).find('.ability-numbered').val());
    }
  });
}

function fillForm(monster) {
  $('#two-column-checkbox').prop('checked', monster.two_column);
  $('#live-statblock').addClass(monster.two_column ? 'two-col-size' : 'one-col-size');
  $('#monster-name').val(monster.name);
  $('#monster-header').val(monster.heading);
  if (monster.basic_info.length > 0) {
    $('#basic-info-lines').empty();
    for (var i = 0; i < monster.basic_info.length; i++) {
      $('#basic-info-lines').append(makeBasicInfoLine(monster.basic_info[i].name, monster.basic_info[i].desc));
    }
  }
  $('#str-score').val(monster.ability_scores.str);
  $('#dex-score').val(monster.ability_scores.dex);
  $('#con-score').val(monster.ability_scores.con);
  $('#int-score').val(monster.ability_scores.int);
  $('#wis-score').val(monster.ability_scores.wis);
  $('#cha-score').val(monster.ability_scores.cha);
  if (monster.traits.length > 0) {
    $('#traits-lines').empty();
    for (var j = 0; j < monster.traits.length; j++) {
      $('#traits-lines').append(makeTraitsLine(monster.traits[j].name, monster.traits[j].desc));
    }
  }

  if (monster.content.length > 0) {
    $('#abilities-lines').empty();
    for (var ability of monster.content) {
      if (ability.hasOwnProperty('property_block')) {
        $('#abilities-lines').append(makeTraitAbilityLine(
                ability.property_block.name, ability.property_block.desc));
      } else if (ability.hasOwnProperty('property_line')) {
        $('#abilities-lines').append(makePropertyAbilityLine(
                ability.property_line.name, ability.property_line.desc));
      } else if (ability.hasOwnProperty('subtitle')) {
        $('#abilities-lines').append(makeSubtitleLine(ability.subtitle));
      } else if (ability.hasOwnProperty('text')) {
        $('#abilities-lines').append(makeTextLine(ability.text));
      } else if (ability.hasOwnProperty('spell_line')) {
        $('#abilities-lines').append(makeSpellsLine(ability.spell_line));
      } else if (ability.hasOwnProperty('numbered_list')) {
        for (var numItem of ability.numbered_list) {
          $('#abilities-lines').append(makeNumberedLine(numItem));
        }
      }
    }
  }

}
