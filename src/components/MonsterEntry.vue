<template>
  <div class="monster-entry p-2 pl-4 pr-4" @click="updateActiveMonsterId(index)">
    <h3>{{monster.name}}</h3>
    <h4>{{monster.heading}}</h4>
    <ul class="tag-list">
      <li v-for="(tag, index) in monster.tags" :key="index">{{tag}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  props: ["monster", "index"],
  computed: {
    ...mapGetters(["active_monster"])
  },
  methods: {
    ...mapMutations(['updateActiveMonsterId'])
  }
};
</script>


<style scoped lang="scss">
h3 {
  font-weight: bold;
  font-size: 16pt;
}

h4 {
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  //letter-spacing: 1px;
  font-size: 0.9rem;
  //font-weight: bold;
  color: #6c6c6c;
  font-variant: small-caps;
}

.monster-entry {
  border-bottom: 1px solid #6c6c6c;
}

.tag-list {
  min-height: 28px;
  list-style-type: none;
  margin-top: auto;
  margin-bottom: auto;
  padding: 0;

  li {
    float: left;
    background-color: #EDF2F4;
    color: rgb(65, 68, 78);
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 3px;
    padding-left: 5px;
    padding-right: 5px;
    text-transform: uppercase;
    font-size: 0.85rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
}
</style>