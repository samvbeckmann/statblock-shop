<template>
  <div class="statblock">
    <div class="bar"></div>
    <div class="content-wrap" v-bind:class='{ data_two_column: monster.two_column}'>
      <statblock-heading :monster="monster"></statblock-heading>
      <tapered-rule></tapered-rule>
      <statblock-basic-info :basic_info="monster.basic_info"></statblock-basic-info>
      <tapered-rule></tapered-rule>
      <statblock-ability-scores :ability_scores="monster.ability_scores"></statblock-ability-scores>
      <tapered-rule></tapered-rule>
      <statblock-traits :traits="monster.traits"></statblock-traits>
      <tapered-rule></tapered-rule>
      <statblock-abilities :abilities="monster.abilities"></statblock-abilities>
    </div>
    <div class="bar"></div>
  </div>
</template>

<script>
import TaperedRule from "./TaperedRule.vue";
import StatblockHeading from "./StatblockHeading.vue";
import StatblockBasicInfo from "./StatblockBasicInfo.vue";
import StatblockAbilityScores from './StatblockAbilityScores.vue';
import StatblockTraits from './StatblockTraits.vue'
import StatblockAbilities from './StatblockAbilities.vue'

export default {
  components: {
    TaperedRule,
    StatblockHeading,
    StatblockBasicInfo,
    StatblockAbilityScores,
    StatblockTraits,
    StatblockAbilities
  },
  props: ["monster"]
};
</script>


<style scoped>
.bar {
  height: 5px;
  background: #e69a28;
  border: 1px solid #000;
  position: relative;
  z-index: 1;
}

.statblock {
  display: inline-block;
}

.content-wrap {
  font-family: "Noto Sans", "Myriad Pro", Calibri, Helvetica, Arial, sans-serif;
  font-size: 13.5px;
  background: #fdf1dc;
  padding: 0.6em;
  padding-bottom: 0.5em;
  border: 1px #ddd solid;
  box-shadow: 0 0 1.5em #867453;
  box-sizing: content-box;

  /* We don't want the box-shadow in front of the bar divs. */
  position: relative;
  z-index: 0;

  /* Leaving room for the two bars to protrude outwards */
  margin-left: 2px;
  margin-right: 2px;

  /* This is possibly overriden by next CSS rule. */
  width: 400px;

  -webkit-columns: 400px;
  -moz-columns: 400px;
  columns: 400px;
  -webkit-column-gap: 40px;
  -moz-column-gap: 40px;
  column-gap: 40px;

  /* When height is constrained, we want sequential filling of columns. */
  -webkit-column-fill: auto;
  -moz-column-fill: auto;
  column-fill: auto;
}

.data_two_column {
  /* One column is 400px and the gap between them is 40px. */
  width: 840px;
}


</style>