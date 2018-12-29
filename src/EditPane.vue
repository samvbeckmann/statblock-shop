<template>
    <div class="col editor-pane no-side-padding" id="editor-side">
        <form id="statblock-form">

          <div class="form-group mb-0">
            <div class="input-group">
              <span class="input-group-addon no-rounded-corners no-dup-top col-md-3 col-2">Name</span>
              <input class="form-control no-rounded-corners no-dup-top" type="text" id="monster-name">
            </div>
            <div class="input-group">
              <span class="input-group-addon no-rounded-corners no-dup-top col-md-3 col-2">Header</span>
              <input class="form-control no-rounded-corners no-dup-top" type="text" id="monster-header">
            </div>
          </div>

          <div class="form-group mb-0">
            <label for="basic-info-box" class="form-label">
              <button class="btn btn-outline-success btn-circle btn-form" id="basic-info-default-btn" type="button"><i class="fa fa-plus" aria-hidden="true"></i></button>
              Basic Info
            </label>
            <ul id="basic-info-lines" class="editor-ul">
              <li class="statblock-input-group row">
                <span class="movement-handle"><i class="fa fa-bars" aria-hidden="true"></i></span>
                <span class="col-4 inline-input-span">
                  <textarea class="basic-info-name form-control common expandable no-dup-borders no-rounded-corners" rows="1" placeholder="Name"></textarea>
                </span>
                <span class="col inline-input-span">
                  <textarea class="basic-info-desc form-control common expandable no-dup-borders no-rounded-corners" rows="1" placeholder="Description"></textarea>
                </span>
                <button class="btn btn-outline-danger btn-circle btn-form rm-basic-info-btn" type="button"><i class="fa fa-minus" aria-hidden="true"></i></button>
                <button class="btn btn-outline-success btn-circle btn-form new-basic-info-btn" type="button"><i class="fa fa-plus" aria-hidden="true"></i></button>
              </li>
            </ul>
          </div>

          <div>
            <p class="form-label">Stats</p>
            <div class="row mr-0 ml-0">
              <div class="col-2 background-box">STR</div>
              <div class="col-2 background-box">DEX</div>
              <div class="col-2 background-box">CON</div>
              <div class="col-2 background-box">INT</div>
              <div class="col-2 background-box">WIS</div>
              <div class="col-2 background-box border-right">CHA</div>
            </div>
            <div class="form-group mb-0 row mr-0 ml-0">

              <div class="input-group col-2 no-side-padding">
                <input class="form-control ability-score-input no-rounded-corners no-dup-right text-center" type="number" min="1" id="str-score">
              </div>
              <div class="input-group col-2 no-side-padding">
                <input class="form-control ability-score-input no-rounded-corners no-dup-right text-center" type="number" min="1" id="dex-score">
              </div>
              <div class="input-group col-2 no-side-padding">
                <input class="form-control ability-score-input no-rounded-corners no-dup-right text-center" type="number" min="1" id="con-score">
              </div>
              <div class="input-group col-2 no-side-padding">
                <input class="form-control ability-score-input no-rounded-corners no-dup-right text-center" type="number" min="1" id="int-score">
              </div>
              <div class="input-group col-2 no-side-padding">
                <input class="form-control ability-score-input no-rounded-corners no-dup-right text-center" type="number" min="1" id="wis-score">
              </div>
              <div class="input-group col-2 no-side-padding">
                <input class="form-control ability-score-input no-rounded-corners text-center" type="number" min="1" id="cha-score">
              </div>
            </div>
          </div>


          <div class="form-group mb-0">
            <label for="traits-lines" class="form-label">
              <button class="btn btn-outline-success btn-circle btn-form" id="traits-default-btn" type="button"><i class="fa fa-plus" aria-hidden="true"></i></button>
              Traits
            </label>
            <ul id="traits-lines" class="editor-ul">
              <li class="statblock-input-group row">
                <span class="movement-handle"><i class="fa fa-bars" aria-hidden="true"></i></span>
                <span class="col-4 inline-input-span">
                  <textarea class="trait-name form-control common expandable no-dup-borders no-rounded-corners" rows="1" placeholder="Name"></textarea>
                </span>
                <span class="col inline-input-span">
                  <textarea class="trait-desc form-control common expandable no-dup-borders no-rounded-corners" rows="1" placeholder="Description"></textarea>
                </span>
                <button class="btn btn-outline-danger btn-circle btn-form rm-trait-btn" type="button"><i class="fa fa-minus" aria-hidden="true"></i></button>
                <button class="btn btn-outline-success btn-circle btn-form new-trait-btn" type="button"><i class="fa fa-plus" aria-hidden="true"></i></button>
              </li>
            </ul>
          </div>

          <div class="form-group mb-0">
            <label for="abilities-lines" class="form-label">
              <button class="btn btn-outline-success btn-circle btn-form" id="abilities-default-btn" type="button"><i class="fa fa-plus" aria-hidden="true"></i></button>
              Abilities
            </label>
            <ul id="abilities-lines" class="editor-ul">
              <li class="input-group statblock-input-group abilityline-trait dropup">
                <span class="input-group-addon no-rounded-corners no-dup-bottom no-dup-top movement-handle"><i class="fa fa-bars" aria-hidden="true"></i></span>
                <button type="button" class="btn btn-light dropdown-toggle no-rounded-corners trait-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Trait
                </button>
                <div class="dropdown-menu">
                  <button class="dropdown-item trait-btn" type="button">Trait</button>
                  <button class="dropdown-item subtitle-btn" type="button">Subtitle</button>
                  <button class="dropdown-item text-btn" type="button">Text</button>
                  <button class="dropdown-item property-btn" type="button">Property</button>
                  <button class="dropdown-item spells-btn" type="button">Spells</button>
                  <button class="dropdown-item numbered-btn" type="button">Number</button>
                </div>
                <div class="stacked-text-blocks">
                  <textarea class="ability-trait-name ability-field form-control common expandable no-dup-top no-dup-right no-dup-left" rows="1" placeholder="Name"></textarea>
                  <textarea class="ability-trait-desc ability-field form-control common expandable no-dup-borders" rows="1" placeholder="Description"></textarea>
                </div>
                <button class="btn btn-outline-danger btn-circle btn-form rm-ability-btn" type="button"><i class="fa fa-minus" aria-hidden="true"></i></button>
                <button class="btn btn-outline-success btn-circle btn-form new-ability-btn" type="button"><i class="fa fa-plus" aria-hidden="true"></i></button>
              </li>
            </ul>
          </div>

          <div class="form-group" id="supplemental">
            <label for="supplemental" class="form-label">
              Supplemental
            </label>
            <div class="input-group">
              <span class="input-group-addon no-rounded-corners no-dup-top col-md-3 col-2">Tags</span>
              <input class="form-control no-rounded-corners no-dup-top" type="text" placeholder="(space separated)" id="monster-tags">
            </div>
            <div class="input-group">
              <span class="input-group-addon no-rounded-corners no-dup-top col-md-3 col-2">Description</span>
              <textarea class="form-control no-rounded-corners expandable no-dup-top" id="monster-description"></textarea>
            </div>
          </div>

        </form>

    </div>
</template>

<script>
module.exports = {
    props: ['value'],
    data(){
        return {}
    }
}
</script>


<style scoped>

</style>