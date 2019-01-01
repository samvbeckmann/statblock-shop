<template>
  <div class="form-group mb-0">
    <label for="abilities-lines" class="form-label">
      <button
        class="btn btn-outline-success btn-circle btn-form"
        id="abilities-default-btn"
        type="button"
      >
        <i class="fa fa-plus" aria-hidden="true"></i>
      </button>
      Abilities
    </label>
    <ul id="abilities-lines" class="editor-ul">
      <li
        class="input-group statblock-input-group abilityline-trait dropup"
        v-for="(ability, key, index) in active_monster.content"
        :key="index"
      >
        <span class="input-group-addon no-rounded-corners no-dup-bottom no-dup-top movement-handle">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </span>
        <button
          type="button"
          class="btn btn-light dropdown-toggle no-rounded-corners trait-dropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >Trait</button>
        <div class="dropdown-menu">
          <button class="dropdown-item trait-btn" type="button">Trait</button>
          <button class="dropdown-item subtitle-btn" type="button">Subtitle</button>
          <button class="dropdown-item text-btn" type="button">Text</button>
          <button class="dropdown-item property-btn" type="button">Property</button>
          <button class="dropdown-item spells-btn" type="button">Spells</button>
          <button class="dropdown-item numbered-btn" type="button">Number</button>
        </div>

        <template v-if="ability.subtitle">
          <textarea
            class="ability-subtitle ability-field form-control common expandable no-dup-borders"
            rows="1"
            placeholder="Subtitle"
            style="min-height: 38px"
            v-model="ability.subtitle"
          ></textarea>
        </template>
        <template v-else-if="ability.text">
          <textarea
            class="ability-text ability-field form-control common expandable no-dup-borders"
            rows="1"
            placeholder="Text"
            style="min-height: 38px"
            v-model="ability.text"
          ></textarea>
        </template>
        <template v-else-if="ability.spell_line">
          <textarea
            class="ability-spells ability-field form-control common expandable no-dup-borders"
            rows="1"
            placeholder="Spells"
            style="min-height: 38px"
            v-model="ability.spell_line"
          ></textarea>
        </template>
        <div v-else-if="ability.property_block" class="stacked-text-blocks">
          <textarea
            class="ability-trait-name ability-field form-control common expandable no-dup-top no-dup-right no-dup-left"
            rows="1"
            placeholder="Name"
            v-model="ability.property_block.name"
          ></textarea>
          <textarea
            class="ability-trait-desc ability-field form-control common expandable no-dup-borders"
            rows="1"
            placeholder="Description"
            v-model="ability.property_block.desc"
          ></textarea>
        </div>
        <div v-else-if="ability.property_line">
          <textarea
            class="ability-property-name ability-field form-control common expandable no-dup-top no-dup-right no-dup-left"
            rows="1"
            placeholder="Name"
            v-model="ability.property_line.name"
          ></textarea>
          <textarea
            class="ability-property-desc ability-field form-control common expandable no-dup-borders"
            rows="1"
            placeholder="Description"
            v-model="ability.property_line.desc"
          ></textarea>
        </div>
        <div v-else-if="ability.numbered_list"></div>

        <button class="btn btn-outline-danger btn-circle btn-form rm-ability-btn" type="button">
          <i class="fa fa-minus" aria-hidden="true"></i>
        </button>
        <button class="btn btn-outline-success btn-circle btn-form new-ability-btn" type="button">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["active_monster"])
  },
  methods: {
    ...mapMutations(["changeAbilityType", "makeNewAbility", "removeAbility"])
  }
};
</script>


<style scoped>
</style>