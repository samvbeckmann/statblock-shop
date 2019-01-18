<template>
  <div class="form-group mb-0">
    <label for="traits-lines" class="form-label">
      <button
        class="btn btn-outline-success btn-circle btn-form"
        id="traits-default-btn"
        type="button"
        @click="makeNewTrait(0)"
      >
        <i class="fa fa-plus" aria-hidden="true"></i>
      </button>
      Traits
    </label>
    <ul id="traits-lines" class="editor-ul">
      <li
        class="statblock-input-group row"
        v-for="(trait, index) in active_monster.traits"
        :key="index"
      >
        <span class="movement-handle">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </span>
        <span class="col-4 inline-input-span">
          <textarea
            class="trait-name form-control common expandable no-dup-borders no-rounded-corners"
            rows="1"
            placeholder="Name"
            v-autosize="trait.name"
            v-model="trait.name"
          ></textarea>
        </span>
        <span class="col inline-input-span">
          <textarea
            class="trait-desc form-control common expandable no-dup-borders no-rounded-corners"
            rows="1"
            placeholder="Description"
            v-autosize="trait.desc"
            v-model="trait.desc"
          ></textarea>
        </span>
        <button
          class="btn btn-outline-danger btn-circle btn-form rm-trait-btn"
          type="button"
          @click="removeTrait(index)"
        >
          <i class="fa fa-minus" aria-hidden="true"></i>
        </button>
        <button
          class="btn btn-outline-success btn-circle btn-form new-trait-btn"
          type="button"
          @click="makeNewTrait(index + 1)"
        >
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { Autosize } from '../Autosize.js';

export default {
  computed: {
    ...mapGetters(["active_monster"])
  },
  directives: {
    Autosize
  },
  methods: {
    ...mapMutations([
      "makeNewTrait",
      "removeTrait",
    ])
  }
};
</script>


<style scoped>
</style>