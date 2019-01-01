<template>
  <div>
    <p class="form-label">Ability Scores</p>
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
        <input
          class="form-control ability-score-input no-rounded-corners no-dup-right text-center"
          type="number"
          min="1"
          id="str-score"
          v-model="active_monster.ability_scores.str"
        >
      </div>
      <div class="input-group col-2 no-side-padding">
        <input
          class="form-control ability-score-input no-rounded-corners no-dup-right text-center"
          type="number"
          min="1"
          id="dex-score"
          v-model="active_monster.ability_scores.dex"
        >
      </div>
      <div class="input-group col-2 no-side-padding">
        <input
          class="form-control ability-score-input no-rounded-corners no-dup-right text-center"
          type="number"
          min="1"
          id="con-score"
          v-model="active_monster.ability_scores.con"
        >
      </div>
      <div class="input-group col-2 no-side-padding">
        <input
          class="form-control ability-score-input no-rounded-corners no-dup-right text-center"
          type="number"
          min="1"
          id="int-score"
          v-model="active_monster.ability_scores.int"
        >
      </div>
      <div class="input-group col-2 no-side-padding">
        <input
          class="form-control ability-score-input no-rounded-corners no-dup-right text-center"
          type="number"
          min="1"
          id="wis-score"
          v-model="active_monster.ability_scores.wis"
        >
      </div>
      <div class="input-group col-2 no-side-padding">
        <input
          class="form-control ability-score-input no-rounded-corners text-center"
          type="number"
          min="1"
          id="cha-score"
          v-model="active_monster.ability_scores.cha"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["active_monster"])
  }
};
</script>


<style scoped>
</style>