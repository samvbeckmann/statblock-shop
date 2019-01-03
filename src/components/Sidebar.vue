<template>
  <div class="container d-flex flex-column p-0" id="sidebar">
    <div class="row flex-shrink-0 form-group m-0 button-row">
      <button type="button" class="btn btn-outline-primary mr-2">Import</button>
      <button type="button" class="btn btn-outline-primary mr-2">Export</button>
      <button type="button" class="btn btn-outline-warning mr-2">Sort</button>
      <button tyoe="button" class="btn btn-outline-success">New</button>
    </div>
    <input
      id="search-bar"
      type="search"
      class="row flex-shrink-0 form-control m-0 no-rounded-corners"
      placeholder="Search"
    >

    <div class="row m-0 flex-grow-1" id="sidebar-monster-list">
      <div class="col p-0">
        <monster-entry v-for="(monster, index) in monster_list" :key="index" :monster="monster" :index="index"></monster-entry>
      </div>
    </div>
  </div>
</template>

<script>
import MonsterEntry from "./MonsterEntry.vue";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  components: { MonsterEntry },
  computed: {
    ...mapState(["monster_list", "active_monster_id"]),
    ...mapGetters(["active_monster"])
  },
  methods: {
          ...mapMutations(["updateActiveMonsterId"]),

  }
};
</script>


<style scoped lang="scss">
#sidebar {
  float: left;
  width: auto;
  height: calc(100vh - 56px);
}

#sidebar-monster-list {
  overflow-y: scroll;
  overflow-x: hidden;
}

.button-row {
    padding: 1rem;
    padding-top: 17px;
    padding-bottom: 17px;
}

#search-bar {
    min-height: 40px;
}
</style>