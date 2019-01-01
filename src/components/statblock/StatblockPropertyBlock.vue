<template>
  <div class="statblock-property-block">
    <h4>{{name}}.</h4>
    <p>{{desc}}</p>
  </div>
</template>

<script>
export default {
  props: ["name", "desc"]
};
</script>


<style scoped>
.statblock-property-block {
  margin-top: 0.3em;
  margin-bottom: 0.9em;
  line-height: 1.5;
  display: block;
}

h4 {
  margin: 0;
  display: inline;
  font-weight: bold;
  font-style: italic;
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