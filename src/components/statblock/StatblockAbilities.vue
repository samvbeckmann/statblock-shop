<template>
  <div class="statblock-abilities">
    <template v-for="(ability, key, index) in abilities">
      <statblock-property-block
        v-if="ability.property_block"
        :key="index"
        :name="ability.property_block.name"
        :desc="ability.property_block.desc"
      ></statblock-property-block>

      <statblock-property-line
        v-else-if="ability.property_line"
        :key="index"
        :name="ability.property_line.name"
        :desc="ability.property_line.desc"
      ></statblock-property-line>

      <h3 v-if="ability.subtitle" :key="index">{{ability.subtitle}}</h3>

      <p v-if="ability.text" :key="index">{{ability.text}}</p>

      <statblock-property-line
        v-else-if="ability.spell_line"
        :key="index"
        :desc="ability.spell_line.desc"
      ></statblock-property-line>

      <ol v-else-if="ability.numbered_list" :key="index">
        <li v-for="(item, key, index) in ability.numbered_list" :key="index">{{item}}</li>
      </ol>
    </template>
  </div>
</template>

<script>
import StatblockPropertyLine from "./StatblockPropertyLine.vue";
import StatblockPropertyBlock from "./StatblockPropertyBlock.vue";

export default {
  components: { StatblockPropertyLine, StatblockPropertyBlock },
  props: ["abilities"]
};
</script>


<style scoped>
.statblock-abilities {
  margin-top: 0.3em;
  margin-bottom: 0.9em;
  line-height: 1.5;
  display: block;
}

h3 {
  border-bottom: 1px solid #7a200d;
  color: #7a200d;
  font-size: 21px;
  font-variant: small-caps;
  font-weight: normal;
  letter-spacing: 1px;
  margin: 0;
  margin-bottom: 0.3em;

  break-inside: avoid-column;
  break-after: avoid-column;
}

p:first-of-type {
  display: inline;
  text-indent: 0;
}

/* p {
  text-indent: 1em;
  margin: 0;
} */

/* For user-level p elems. */
p {
  margin-top: 0.3em;
  margin-bottom: 0.9em;
  line-height: 1.5;
}

ol {
  list-style: none;
  padding-left: 0px;
  text-indent: 1em;
}

ol > li {
  counter-increment: step-counter;
}

ol > li::before {
  content: counter(step-counter) ". ";
  font-style: italic;
}

ol > li > p {
  margin-bottom: 0px;
}

li {
  margin-left: 0px;
}

.statblock-property-line + h3 {
  margin-top: 0.5em;
}

/* Last child shouldn't have bottom margin, too much white space. */
.statblock-abilities :last-child {
  margin-bottom: 0;
}
</style>