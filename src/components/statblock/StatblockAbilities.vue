<template>
  <div class="statblock-abilities">
    <template v-for="(ability, index) in abilities">
      <statblock-property-block
        v-if="ability.type === 'property_block'"
        :key="index"
        :name="ability.content.name"
        :desc="ability.content.desc"
      ></statblock-property-block>

      <statblock-property-line
        v-else-if="ability.type === 'property_line'"
        :key="index"
        :name="ability.content.name"
        :desc="ability.content.desc"
      ></statblock-property-line>

      <h3 v-else-if="ability.type === 'subtitle'" :key="index">{{ability.content}}</h3>

      <p v-else-if="ability.type === 'text'" :key="index">{{ability.content}}</p>

      <statblock-property-line
        v-else-if="ability.type == 'spell_line'"
        :key="index"
        :desc="ability.content"
      ></statblock-property-line>

      <ol v-else-if="ability.type == 'numbered_list'" :key="index">
        <li v-for="(item, index) in ability.content" :key="index">{{item}}</li>
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