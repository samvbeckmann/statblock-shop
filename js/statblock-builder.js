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

  $("#basic-info-box").keyup(function() {
    try {
      var parsedInfo = propertyLineParser($(this).val());
      monster.basic_info = parsedInfo.result;
      if (parsedInfo.error) {
        $(this).parent().addClass("has-danger");
      } else {
        $(this).parent().removeClass("has-danger");
      }
    } catch(err) {
      console.log(err);
      $(this).parent().addClass("has-danger");
    } finally {
      $("#live-statblock").html(makeStatblockHTML(monster));
    }
  });

  $("#traits-box").keyup(function() {
    try {
      var parsedTraits = propertyLineParser($(this).val());
      monster.traits = parsedTraits.result;
      if (parsedTraits.error) {
        $(this).parent().addClass("has-danger");
      } else {
        $(this).parent().removeClass("has-danger");
      }
    } catch(err) {
      console.log(err);
      $(this).parent().addClass("has-danger");
    } finally {
      $("#live-statblock").html(makeStatblockHTML(monster));
    }
  });

  $("#main-content").keyup(function() {
    try {
      var parsedContent = contentParser($(this).val());
      monster.content = parsedContent.result;
      if (parsedContent.error) {
        $(this).parent().addClass("has-danger");
      } else {
        $(this).parent().removeClass("has-danger");
      }
    } catch(err) {
      console.log(err);
      $(this).parent().addClass("has-danger");
    } finally {
      $("#live-statblock").html(makeStatblockHTML(monster));
    }
  });

  let hiddenDiv = document.createElement('div');

  hiddenDiv.classList.add('hiddendiv', 'common');
  document.body.appendChild(hiddenDiv);

  $('.expandable').each(function() {
    this.addEventListener('keyup', function() {
      setTextAreaHeight(this, hiddenDiv);
    }, false);
    setTextAreaHeight(this, hiddenDiv);
  });
});

function setTextAreaHeight(object, hiddenDiv) {
    hiddenDiv.innerHTML = object.value + '\n';
    hiddenDiv.style.width = object.clientWidth + "px";
    object.style.height = hiddenDiv.getBoundingClientRect().height + 'px';
}

function propertyLineParser(string) {
  var result = [];
  var error = false;
  var lines = string.split('\n');
  for (var i = 0; i < lines.length; i++) {
    if (lines[i] === '')
      continue;
    try {
      var parts = lines[i].match(/([^\\\][^\|]|\\\|)+/g);
      result.push({name: parts[0].trim(), desc: parts[1].trim()});
    } catch(err) {
      result.push("input_error");
      error = true;
    }
  }
  return {result: result, error: error};
}

function contentParser(string) {
  var result = [];
  var temp_list = [];
  error = false;
  var lines = string.split('\n');
  for (var i = 0; i < lines.length; i++) {
    if (lines[i] === '')
      continue;
    var parts = lines[i].match(/(\\.|[^|])+/g);
    try {
      switch (parts[0].trim().toLowerCase()) {
        case 'property':
          checkTempList();
          result.push({property_line: {
                       name: parts[1].trim(), desc: parts[2].trim()}});
          break;
        case 'description':
          checkTempList();
          result.push({property_block: {
                       name: parts[1].trim(), desc: parts[2].trim()}});
          break;
        case 'text':
          checkTempList();
          result.push({text:parts[1].trim()});
          break;
        case 'subtitle':
          checkTempList();
          result.push({subtitle:parts[1].trim()});
          break;
        case 'numbered':
          temp_list.push(parts[1].trim());
          break;
        case 'spells':
          checkTempList();
          result.push({spell_line: parts[1].trim()});
          break;
        default:
          result.push("input_error");
          error = true;
      }
    } catch(err) {
      result.push("input_error");
      error = true;
    }
  }
  checkTempList();
  return {result: result, error: error};

  function checkTempList() {
    if (temp_list.length > 0) {
      result.push({numbered_list: temp_list});
      temp_list = [];
    }
  }
}

function fillForm(monster) {
  $('#two-column-checkbox').prop('checked', monster.two_column);
  $('#live-statblock').addClass(monster.two_column ? 'two-col-size' : 'one-col-size');
  $('#monster-name').val(monster.name);
  $('#monster-header').val(monster.heading);
  $('#basic-info-box').val(propertiesToText(monster.basic_info));
  $('#str-score').val(monster.ability_scores.str);
  $('#dex-score').val(monster.ability_scores.dex);
  $('#con-score').val(monster.ability_scores.con);
  $('#int-score').val(monster.ability_scores.int);
  $('#wis-score').val(monster.ability_scores.wis);
  $('#cha-score').val(monster.ability_scores.cha);
  $('#traits-box').val(propertiesToText(monster.traits));
  $('#main-content').val(contentToText(monster.content));

  function propertiesToText(obj) {
    var result = '';
    for (var i = 0; i < obj.length; i++) {
      result += obj[i].name + ' | ' + obj[i].desc + '\n';
    }
    return result.replace(/\n+$/, '');
  }

  function contentToText(obj) {
    var result = '';
    for (var i = 0; i < obj.length; i ++) {
      if (obj[i].hasOwnProperty('property_block')) {
        result += 'description | ' + obj[i].property_block.name;
        result +=  ' | ' + obj[i].property_block.desc + '\n\n';
      } else if (obj[i].hasOwnProperty('property_line')) {
        result += 'property | ' + obj[i].property_line.name;
        result += ' | ' + obj[i].property_line.desc + '\n\n';
      } else if (obj[i].hasOwnProperty('subtitle')) {
        result += 'subtitle | ' + obj[i].subtitle + '\n\n';
      } else if (obj[i].hasOwnProperty('text')) {
        result += 'text | ' + obj[i].text + '\n\n';
      } else if (obj[i].hasOwnProperty('numbered_list')) {
        for (var j = 0; j < obj[i].numbered_list.length; j++) {
          result += 'numbered | ' + obj[i].numbered_list[j] + '\n\n';
        }
      } else if (obj[i].hasOwnProperty('spell_line')) {
        result += 'spells | ' + obj[i].spell_line + '\n\n';
      }
    }
    return result.replace(/\n+$/, '');
  }

}
