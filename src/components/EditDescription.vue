<template>
  <div class="form-group" id="description">
    <label for="description" class="form-label">Description</label>
    <div class="input-group">
      <textarea
        class="form-control no-rounded-corners expandable no-dup-top"
        id="monster-description"
        v-model="active_monster.description"
      ></textarea>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["active_monster"])
  }
};
</script>


<style scoped>
</style>