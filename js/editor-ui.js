/*jshint esversion: 6 */

$(document).ready(function() {

  $('#basic-info-lines').sortable({
    revert: 100,
    stop: function(event, ui) {
      updateMonsterBasicInfo();
      $('#live-statblock').html(makeStatblockHTML(monster));
    }
  });

  $('#traits-lines').sortable({
    revert: 100,
    stop: function(event, ui) {
      updateMonsterTraits();
      $('#live-statblock').html(makeStatblockHTML(monster));
    }
  });

  $('#abilities-lines').sortable({
    revert: 100,
    stop: function(event, ui) {
      updateMonsterAbilities();
      $('#live-statblock').html(makeStatblockHTML(monster));
    }
  });

  $('#basic-info-default-btn').click(function() {
    $(makeBasicInfoLine('', ''))
      .prependTo($('#basic-info-lines'))
      .find('.basic-info-name').focus();
  });

  $('#traits-default-btn').click(function() {
    $(makeTraitsLine('', ''))
      .prependTo($('#traits-lines'))
      .find('.trait-name').focus();
  });

  $('#abilities-default-btn').click(function() {
    $(makeTraitAbilityLine('', ''))
      .prependTo($('#abilities-lines'))
      .find('.ability-trait-name').focus();
  });

  $(document).on('click', '.new-basic-info-btn', function() {
    $(this).closest('.statblock-input-group').after(makeBasicInfoLine('', ''))
      .next().find('.basic-info-name').focus();
  });

  $(document).on('click', '.new-trait-btn', function() {
    $(this).closest('.statblock-input-group').after(makeTraitsLine('', ''))
      .next().find('.trait-name').focus();
  });

  $(document).on('click', '.new-ability-btn', function() {
    var thisLine = $(this).closest('.statblock-input-group');
    if (thisLine.hasClass('abilityline-subtitle')) {
      thisLine.after(makeSubtitleLine(''))
        .next().find('.ability-subtitle').focus();
      return;
    } else if (thisLine.hasClass('abilityline-text')) {
      thisLine.after(makeTextLine(''))
        .next().find('.ability-text').focus();
      return;
    } else if (thisLine.hasClass('abilityline-spells')) {
      thisLine.after(makeSpellsLine(''))
        .next().find('.ability-spells').focus();
      return;
    } else if (thisLine.hasClass('abilityline-numbered')) {
      thisLine.after(makeNumberedLine(''))
        .next().find('.ability-numbered').focus();
      return;
    }  else if (thisLine.hasClass('abilityline-trait')) {
      thisLine.after(makeTraitAbilityLine('', ''))
        .next().find('.ability-trait-name').focus();
      return;
    }  else if (thisLine.hasClass('abilityline-property')) {
      thisLine.after(makePropertyAbilityLine('', ''))
        .next().find('.ability-property-name').focus();
      return;
    }
  });

  $(document).on('click', '.rm-basic-info-btn', function() {
    $(this).closest('.statblock-input-group').remove();
    updateMonsterBasicInfo();
    $("#live-statblock").html(makeStatblockHTML(monster));
  });

  $(document).on('click', '.rm-trait-btn', function() {
    $(this).closest('.statblock-input-group').remove();
    updateMonsterTraits();
    $("#live-statblock").html(makeStatblockHTML(monster));
  });

  $(document).on('click', '.rm-ability-btn', function() {
    $(this).closest('.statblock-input-group').remove();
    updateMonsterAbilities();
    $("#live-statblock").html(makeStatblockHTML(monster));
  });

  $(document).on('click', '.subtitle-btn', function() {
    changeOneFieldAbility($(this), makeSubtitleLine);
  });

  $(document).on('click', '.text-btn', function() {
    changeOneFieldAbility($(this), makeTextLine);
  });

  $(document).on('click', '.spells-btn', function() {
    changeOneFieldAbility($(this), makeSpellsLine);
  });

  $(document).on('click', '.numbered-btn', function() {
    changeOneFieldAbility($(this), makeNumberedLine);
  });

  $(document).on('click', '.trait-btn', function() {
    var inputGroup = $(this).closest('.statblock-input-group');
    if (inputGroup.hasClass('abilityline-trait')) {
      return;
    } else if (inputGroup.hasClass('abilityline-property')) {
      var name = inputGroup.find('.ability-property-name').val();
      var desc = inputGroup.find('.ability-property-desc').val();
      inputGroup.replaceWith(makeTraitAbilityLine(name, desc));
    } else {
      var currentText = inputGroup.find('.ability-field').val();
      inputGroup.replaceWith(makeTraitAbilityLine(currentText, ''));
    }

    $('.expandable').each(function() {
      updateExpandableTextArea(this);
    });
    updateMonsterAbilities();
    $("#live-statblock").html(makeStatblockHTML(monster));
  });

  $(document).on('click', '.property-btn', function() {
    var inputGroup = $(this).closest('.statblock-input-group');
    if (inputGroup.hasClass('abilityline-property')) {
      return;
    } else if (inputGroup.hasClass('abilityline-trait')) {
      var name = inputGroup.find('.ability-trait-name').val();
      var desc = inputGroup.find('.ability-trait-desc').val();
      inputGroup.replaceWith(makePropertyAbilityLine(name, desc));
    } else {
      var currentText = inputGroup.find('.ability-field').val();
      inputGroup.replaceWith(makePropertyAbilityLine(currentText, ''));
    }

    $('.expandable').each(function() {
      updateExpandableTextArea(this);
    });
    updateMonsterAbilities();
    $("#live-statblock").html(makeStatblockHTML(monster));
  });

});

function changeOneFieldAbility(item, func) {
  var inputGroup = item.closest('.statblock-input-group');
  var currentText = inputGroup.find('.ability-field').val();
  inputGroup.replaceWith(func(currentText));

  $('.expandable').each(function() {
    updateExpandableTextArea(this);
  });
  updateMonsterAbilities();
  $("#live-statblock").html(makeStatblockHTML(monster));
}

function makeBasicInfoLine(name, desc) {
  return `
    <li class="input-group statblock-input-group">
      <span class="input-group-addon no-rounded-corners no-dup-bottom no-dup-top movement-handle"><i class="fa fa-bars" aria-hidden="true"></i></span>
      <span class="pixel-wall"></span>
      <textarea class="basic-info-name form-control common expandable no-dup-borders col-4" rows="1" placeholder="Name" style="min-height: 38px">${name}</textarea>
      <span class="pixel-wall"></span>
      <textarea class="basic-info-desc form-control common expandable no-dup-borders" rows="1" placeholder="Description" style="min-height: 38px">${desc}</textarea>
      <button class="btn btn-outline-danger btn-circle btn-form rm-basic-info-btn" type="button"><i class="fa fa-minus" aria-hidden="true"></i></button>
      <button class="btn btn-outline-success btn-circle btn-form new-basic-info-btn" type="button"><i class="fa fa-plus" aria-hidden="true"></i></button>
    </li>
  `;
}

function makeTraitsLine(name, desc) {
  return `
    <li class="input-group statblock-input-group">
      <span class="input-group-addon no-rounded-corners no-dup-bottom no-dup-top movement-handle"><i class="fa fa-bars" aria-hidden="true"></i></span>
      <span class="pixel-wall"></span>
      <textarea class="trait-name form-control common expandable no-dup-borders col-4" rows="1" placeholder="Name" style="min-height: 38px">${name}</textarea>
      <span class="pixel-wall"></span>
      <textarea class="trait-desc form-control common expandable no-dup-borders" rows="1" placeholder="Description" style="min-height: 38px">${desc}</textarea>
      <button class="btn btn-outline-danger btn-circle btn-form rm-trait-btn" type="button"><i class="fa fa-minus" aria-hidden="true"></i></button>
      <button class="btn btn-outline-success btn-circle btn-form new-trait-btn" type="button"><i class="fa fa-plus" aria-hidden="true"></i></button>
    </li>
  `;
}

function makeGenericAbility(name, className, inputContent) {
  return `
  <li class="input-group statblock-input-group ${className} dropup">
    <span class="input-group-addon no-rounded-corners no-dup-bottom no-dup-top movement-handle"><i class="fa fa-bars" aria-hidden="true"></i></span>
    <button type="button" class="btn btn-secondary dropdown-toggle no-rounded-corners trait-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      ${name}
    </button>
    <div class="dropdown-menu">
      <button class="dropdown-item trait-btn" type="button">Trait</button>
      <button class="dropdown-item subtitle-btn" type="button">Subtitle</button>
      <button class="dropdown-item text-btn" type="button">Text</button>
      <button class="dropdown-item property-btn" type="button">Property</button>
      <button class="dropdown-item spells-btn" type="button">Spells</button>
      <button class="dropdown-item numbered-btn" type="button">Number</button>
    </div>
    ${inputContent}
    <button class="btn btn-outline-danger btn-circle btn-form rm-ability-btn" type="button"><i class="fa fa-minus" aria-hidden="true"></i></button>
    <button class="btn btn-outline-success btn-circle btn-form new-ability-btn" type="button"><i class="fa fa-plus" aria-hidden="true"></i></button>
  </li>
  `;
}

function makeSubtitleLine(subtitle) {
  var content = `<textarea class="ability-subtitle ability-field form-control common expandable no-dup-borders" rows="1" placeholder="Subtitle" style="min-height: 38px">${subtitle}</textarea>`;
  return makeGenericAbility('Subtitle', 'abilityline-subtitle', content);
}

function makeSpellsLine(content) {
  var textHTML = `<textarea class="ability-spells ability-field form-control common expandable no-dup-borders" rows="1" placeholder="Spells" style="min-height: 38px">${content}</textarea>`;
  return makeGenericAbility('Spells', 'abilityline-spells', textHTML);
}

function makeTextLine(text) {
  var textHTML = `<textarea class="ability-text ability-field form-control common expandable no-dup-borders" rows="1" placeholder="Text" style="min-height: 38px">${text}</textarea>`;
  return makeGenericAbility('Text', 'abilityline-text', textHTML);
}

function makeNumberedLine(content) {
  var textHTML = `<textarea class="ability-numbered ability-field form-control common expandable no-dup-borders" rows="1" placeholder="Text" style="min-height: 38px">${content}</textarea>`;
  return makeGenericAbility('Number', 'abilityline-numbered', textHTML);
}

function makeTraitAbilityLine(name, desc) {
  var content = `
    <div class="stacked-text-blocks">
      <textarea class="ability-trait-name ability-field form-control common expandable no-dup-top no-dup-right no-dup-left" rows="1" placeholder="Name">${name}</textarea>
      <textarea class="ability-trait-desc ability-field form-control common expandable no-dup-borders" rows="1" placeholder="Description">${desc}</textarea>
    </div>
  `;
  return makeGenericAbility('Trait', 'abilityline-trait', content);
}

function makePropertyAbilityLine(name, desc) {
  var content = `
    <div class="stacked-text-blocks">
      <textarea class="ability-property-name ability-field form-control common expandable no-dup-top no-dup-right no-dup-left" rows="1" placeholder="Name">${name}</textarea>
      <textarea class="ability-property-desc ability-field form-control common expandable no-dup-borders"" rows="1" placeholder="Description">${desc}</textarea>
    </div>
  `;
  return makeGenericAbility('Property', 'abilityline-property', content);
}
