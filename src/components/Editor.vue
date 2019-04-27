<template>
  <div class="container-fluid pr-0 pl-0">
    <div id="info-row" class="row m-0 d-flex flex-row">
      <div class="col-auto pr-0">
        <form class="form-inline center-form">
          <button type="button" id="save" class="btn btn-outline-success mr-2">Duplicate</button>
          
          <button type="button" id="print" class="btn btn-outline-danger mr-2">Delete</button>

          <div class="dropdown-container">
            <button
              id="exportButton"
              type="button"
              class="btn btn-outline-primary dropdown-toggle"
              form
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa fa-share" aria-hidden="true"></i> Export
            </button>
            <div class="dropdown-menu" aria-labelledby="exportButton">
              <a class="dropdown-item disabled" style="color: #7e7e7e;">
                PDF
                <span class="badge badge-info badge-outline ml-2">In Progress</span>
              </a>
              <a class="dropdown-item">Homebrewery</a>
              <a class="dropdown-item">HTML</a>
              <a class="dropdown-item">JSON</a>
            </div>
          </div>
        </form>
      </div>

      <div class="col-sm-auto mt-1 mb-1 flex-grow-1">
        <div id="display-name">{{active_monster.name}}</div>
        <tag-list :monster_index='active_monster_id'></tag-list>
      </div>

      <div id="switch-col" class="col-auto p-2 align-middle">
        <div class="custom-control custom-switch align-middle">
          <input v-model='twoColumn' class="checkbox custom-control-input" type="checkbox" id="two-column-switch">
          <label class="custom-control-label" for="two-column-switch">Two-column layout</label>
        </div>

        <div class="custom-control custom-switch align-middle">
          <input v-model='showPreview' class="checkbox custom-control-input" type="checkbox" id="preview-switch">
          <label class="custom-control-label" for="preview-switch">Preview Enabled</label>
        </div>
      </div>
    </div>

    <div class="row" id="editor-row">
      <edit-pane></edit-pane>
      <preview-pane></preview-pane>
    </div>
  </div>
</template>

<script>
import EditPane from "./EditPane.vue";
import PreviewPane from "./PreviewPane.vue";
import TagList from "./TagList.vue";
import { mapState, mapGetters } from "vuex";
import autosize from 'autosize';

export default {
  components: { EditPane, PreviewPane, TagList },
  computed: {
    ...mapState(["monster_list", "active_monster_id", "show_preview"]),
    ...mapGetters(["active_monster"]),

    showPreview: {
      get () {
        return this.$store.state.show_preview;
      },
      set (value) {
        this.$store.commit('setShowPreview', value)

        // Update all text boxes next tick
        this.$nextTick(function () {
          autosize.update(document.querySelectorAll('textarea'));
        });
      }
    },
    twoColumn: {
      get () {
        return this.$store.getters.active_monster.two_column;
      },
      set (value) {
        this.$store.commit('setTwoColumn', value);

        // Update all text boxes next tick
        this.$nextTick(function () {
          autosize.update(document.querySelectorAll('textarea'));
        });
      }
    }
  }
};
</script>


<style scoped lang="scss">
#switch-col {
  float: right;
}
</style>