<template>
  <div class="statblock-property-block">
    <h4 v-html='mdName'></h4>
    <p v-html='mdDesc'></p>
  </div>
</template>

<script>
var md = require('markdown-it')();

export default {
  props: ["name", "desc"],
  computed: {
    mdName: function () {
      return md.renderInline(this.name) + '.';
    },
    mdDesc: function () {
      return md.renderInline(this.desc);
    }
  }
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