<template>
  <div class="statblock-property-line">
    <h4 v-if="name">{{name}}</h4>
    <p>{{desc}}</p>
  </div>
</template>

<script>
export default {
  props: ["name", "desc"]
};
</script>


<style scoped>
.statblock-property-line {
  line-height: 1.4;
  display: block;
  text-indent: -1em;
  padding-left: 1em;
}

h4 {
  margin: 0;
  display: inline;
  font-weight: bold;
  font-size: inherit;
}

p:first-of-type {
  display: inline;
  text-indent: 0;
}

p {
  text-indent: 1em;
  margin: 0;
}
</style>