<template>
  <div class="statblock-property-line">
    <h4 v-if="name" v-html='mdName'></h4>
    <p v-html='mdDesc'></p>
  </div>
</template>

<script>
var md = require('markdown-it')();

export default {
  props: ["name", "desc"],
  computed: {
    mdName: function () {
      return md.renderInline(this.name);
    },
    mdDesc: function () {
      return md.renderInline(this.desc);
    }
  }
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