<template>
  <div class="form-group mb-0">
    <label for="abilities-lines" class="form-label">
      <button
        class="btn btn-outline-success btn-circle btn-form"
        id="abilities-default-btn"
        type="button"
        @click="makeNewAbility(0)"
      >
        <i class="fa fa-plus" aria-hidden="true"></i>
      </button>
      Abilities
    </label>
    <ul id="abilities-lines" class="editor-ul">
      <li
        class="statblock-input-group dropup row"
        v-for="(ability, index) in active_monster.abilities"
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
          <button
            class="dropdown-item trait-btn"
            type="button"
            @click="changeAbilityType({ 'index': index, 'type': 'property_block' })"
          >Trait</button>
          <button
            class="dropdown-item subtitle-btn"
            type="button"
            @click="changeAbilityType({ 'index': index, 'type': 'subtitle' })"
          >Subtitle</button>
          <button
            class="dropdown-item text-btn"
            type="button"
            @click="changeAbilityType({ 'index': index, 'type': 'text' })"
          >Text</button>
          <button
            class="dropdown-item property-btn"
            type="button"
            @click="changeAbilityType({ 'index': index, 'type': 'property_line' })"
          >Property</button>
          <button
            class="dropdown-item spells-btn"
            type="button"
            @click="changeAbilityType({ 'index': index, 'type': 'spell_line' })"
          >Spells</button>
          <button
            class="dropdown-item numbered-btn"
            type="button"
            @click="changeAbilityType({ 'index': index, 'type': 'numbered_list' })"
          >Numbered</button>
        </div>

        <template v-if="ability.type === 'subtitle'">
          <textarea
            class="form-control no-rounded-corners common no-dup-borders col"
            rows="1"
            placeholder="Subtitle"
            style="min-height: 38px"
            v-model="ability.content"
          ></textarea>
        </template>
        <template v-else-if="ability.type === 'text'">
          <textarea
            class="form-control common no-dup-borders col"
            rows="1"
            placeholder="Text"
            style="min-height: 38px"
            v-model="ability.content"
          ></textarea>
        </template>
        <template v-else-if="ability.type === 'spell_line'">
          <textarea
            class="form-control no-rounded-corners common no-dup-borders col"
            rows="1"
            placeholder="Spells"
            style="min-height: 38px"
            v-model="ability.content"
          ></textarea>
        </template>
        <div v-else-if="ability.type === 'property_block'" class="stacked-text-blocks col">
          <textarea
            class="form-control no-rounded-corners common no-dup-top no-dup-right no-dup-left"
            rows="1"
            placeholder="Name"
            v-model="ability.content.name"
          ></textarea>
          <textarea
            class="form-control no-rounded-corners common no-dup-borders"
            rows="1"
            placeholder="Description"
            v-model="ability.content.desc"
          ></textarea>
        </div>
        <div v-else-if="ability.type === 'property_line'" class="stacked-text-blocks col">
          <textarea
            class="form-control no-rounded-corners common no-dup-top no-dup-right no-dup-left"
            rows="1"
            placeholder="Name"
            v-model="ability.content.name"
          ></textarea>
          <textarea
            class="form-control no-rounded-corners common no-dup-borders"
            rows="1"
            placeholder="Description"
            v-model="ability.content.desc"
          ></textarea>
        </div>
        <div v-else-if="ability.type === 'numbered_list'"></div>

        <button class="btn btn-outline-danger btn-circle btn-form rm-ability-btn" type="button" @click="removeAbility(index)">
          <i class="fa fa-minus" aria-hidden="true"></i>
        </button>
        <button class="btn btn-outline-success btn-circle btn-form new-ability-btn" type="button" @click="makeNewAbility(index + 1)">
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