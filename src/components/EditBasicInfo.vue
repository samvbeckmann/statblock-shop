<template>
      <div class="form-group mb-0">
        <label for="basic-info-box" class="form-label">
          <button
            class="btn btn-outline-success btn-circle btn-form"
            id="basic-info-default-btn"
            type="button"
            @click="makeNewBasicInfo(0)"
          >
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
          Basic Info
        </label>
        <ul id="basic-info-lines" class="editor-ul">
          <li
            v-for="(info_line, index) in active_monster.basic_info"
            :key="index"
            class="statblock-input-group row"
          >
            <span class="movement-handle">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </span>
            <span class="col-4 inline-input-span">
              <textarea
                class="basic-info-name form-control common expandable no-dup-borders no-rounded-corners"
                rows="1"
                placeholder="Name"
                v-autosize="info_line.name"
                v-model="info_line.name"
              ></textarea>
            </span>
            <span class="col inline-input-span">
              <textarea
                class="basic-info-desc form-control common expandable no-dup-borders no-rounded-corners"
                rows="1"
                placeholder="Description"
                v-autosize="info_line.desc"
                v-model="info_line.desc"
              ></textarea>
            </span>
            <button
              class="btn btn-outline-danger btn-circle btn-form rm-basic-info-btn"
              type="button"
              @click="removeBasicInfo(index)"
            >
              <i class="fa fa-minus" aria-hidden="true"></i>
            </button>
            <button
              class="btn btn-outline-success btn-circle btn-form new-basic-info-btn"
              type="button"
              @click="makeNewBasicInfo(index + 1)"
            >
              <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
          </li>
        </ul>
      </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { Autosize } from '../Autosize.js'

export default {
  computed: {
    ...mapGetters(["active_monster"])
  },
  directives: {
    Autosize
  },
  methods: {
    ...mapMutations([
      "makeNewBasicInfo",
      "removeBasicInfo",
    ])
  }
};
</script>


<style scoped>
</style>