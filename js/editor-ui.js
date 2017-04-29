/*jshint esversion: 6 */

$(document).ready(function() {

  $('#basic-info-default-btn').click(function() {
    $('#basic-info-lines').prepend(makeBasicInfoLine('', ''));
  });

  $(document).on('click', '.new-basic-info-btn', function() {
    $(this).closest('.statblock-input-group').after(makeBasicInfoLine('', ''));
  });

  $(document).on('click', '.rm-basic-info-btn', function() {
    $(this).closest('.statblock-input-group').remove();
    updateMonsterBasicInfo();
    $("#live-statblock").html(makeStatblockHTML(monster));
  });

});


function makeBasicInfoLine(name, desc) {
  return `
  <div class="input-group statblock-input-group">
    <span class="input-group-addon no-rounded-corners no-dup-bottom no-dup-top col-1">-</span>
    <span class="pixel-wall"></span>
    <textarea class="basic-info-name form-control common expandable no-dup-borders col-4" rows="1" placeholder="Name" style="min-height: 38px">${name}</textarea>
    <span class="pixel-wall"></span>
    <textarea class="basic-info-desc form-control common expandable no-dup-borders" rows="1" placeholder="Description" style="min-height: 38px">${desc}</textarea>
    <button class="btn btn-outline-danger btn-circle btn-form rm-basic-info-btn" type="button">-</button>
    <button class="btn btn-outline-success btn-circle btn-form new-basic-info-btn" type="button">+</button>
  </div>
  `;
}

// $(document).ready(function() {
//
//   $('.expandable').each(function() {
//     createHiddenDivAndListener($(this));
//   });
//
//   $(document).on('click', '.add-basic-info-row-button', function() {
//
//   });
//
// });
//
// /**
//  * Returns the height a text area should be to hold all of it's text.
//  *
//  * @param {textarea} object Text area to update the height for.
//  * @param {div} hiddenDiv The hidden div that is ued to get the right height.
//  * @return {string} String to set the height to. (ie, "52px")
//  */
// function getTextAreaHeight(object, hiddenDiv) {
//     hiddenDiv.innerHTML = object.value + '\n';
//     hiddenDiv.style.width = object.clientWidth + "px";
//     return hiddenDiv.getBoundingClientRect().height + 'px';
// }
//
// /**
//  * Creates a hidden div and event listener to update a textarea's heihgt.
//  * This method should be called once for each textarea created, ideally at
//  * creation time.
//  *
//  * @param  {textarea} object textarea to create the listener for.
//  */
// function createHiddenDivAndListener(object) {
//   var hiddenDiv = document.createElement('div');
//
//   hiddenDiv.classList.add('hiddendiv', 'common');
//   document.body.appendChild(hiddenDiv);
//
//   object.on("propertychange change click keyup input paste resize", function(event) {
//     this.style.height = setTextAreaHeight(this, hiddenDiv);
//   });
//
//   setTextAreaHeight(this, hiddenDiv);
// }
