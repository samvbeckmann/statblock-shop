<template>
      <div class="form-group mb-0">
        <div class="input-group">
          <span class="input-group-addon no-rounded-corners no-dup-top col-md-3 col-2">Name</span>
          <textarea
            class="form-control no-rounded-corners no-dup-top"
            id="monster-name"
            v-model="active_monster.name"
            rows="1"
          ></textarea>
        </div>
        <div class="input-group">
          <span class="input-group-addon no-rounded-corners no-dup-top col-md-3 col-2">Header</span>
          <textarea
            class="form-control no-rounded-corners no-dup-top"
            id="monster-header"
            v-model="active_monster.heading"
            rows="1"
          ></textarea>
        </div>
      </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(["active_monster"])
  }
};
</script>


<style scoped>
</style>