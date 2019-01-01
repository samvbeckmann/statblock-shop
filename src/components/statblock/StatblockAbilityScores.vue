<template>
  <table>
    <tr>
      <th>STR</th>
      <th>DEX</th>
      <th>CON</th>
      <th>INT</th>
      <th>WIS</th>
      <th>CHA</th>
    </tr>
    <tr>
      <td id="str">{{ formattedAbilityScores.str }}</td>
      <td id="dex">{{ formattedAbilityScores.dex }}</td>
      <td id="con">{{ formattedAbilityScores.con }}</td>
      <td id="int">{{ formattedAbilityScores.int }}</td>
      <td id="wis">{{ formattedAbilityScores.wis }}</td>
      <td id="cha">{{ formattedAbilityScores.cha }}</td>
    </tr>
  </table>
</template>

<script>
import StatblockPropertyLine from "./StatblockPropertyLine.vue";
import { mapGetters } from "vuex";

function abilityModifier(abilityScore) {
  var score = parseInt(abilityScore, 10);
  return Math.floor((score - 10) / 2);
}

function formattedModifier(abilityModifier) {
  if (abilityModifier >= 0) {
    return "+" + abilityModifier;
  }
  // This is an en dash, NOT a "normal" dash. The minus sign needs to be more
  // visible.
  return "–" + Math.abs(abilityModifier);
}

function abilityText(abilityScore) {
  return [
    String(abilityScore),
    " (",
    formattedModifier(abilityModifier(abilityScore)),
    ")"
  ].join("");
}

export default {
  props: ["ability_scores"],
  computed: {
          formattedAbilityScores: function() {
              var ability_text_object = {}
              ability_text_object.str = abilityText(this.ability_scores.str);
              ability_text_object.dex = abilityText(this.ability_scores.dex);
              ability_text_object.con = abilityText(this.ability_scores.con);
              ability_text_object.int = abilityText(this.ability_scores.int);
              ability_text_object.wis = abilityText(this.ability_scores.wis);
              ability_text_object.cha = abilityText(this.ability_scores.cha);
              return ability_text_object;
          }
      }
};
</script>


<style scoped>
table {
  width: 100%;
  border: 0px;
  border-collapse: collapse;
}
th,
td {
  width: 50px;
  text-align: center;
}

* {
  color: #7a200d;
}
</style>