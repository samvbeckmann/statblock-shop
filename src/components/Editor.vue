<template>
    <div class="container-fluid pr-0 pl-0">

    <div id="info-row" class="row m-0">

      <div class="col-auto pr-0">
        <form class="form-inline center-form">

          <button type="button" id="save" class="btn btn-outline-success mr-2">
            <i class="fa fa-check" aria-hidden="true"></i> Save
          </button>

          <div class="dropdown-container">
            <button id="exportButton"
                    type="button"
                    class="btn btn-outline-primary dropdown-toggle mr-2"
                    form=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
              <i class="fa fa-share" aria-hidden="true"></i> Export
            </button>
            <div class="dropdown-menu" aria-labelledby="exportButton">
              <a class="dropdown-item disabled" style="color: #7e7e7e;">PDF<span class="badge badge-info badge-outline ml-2">In Progress</span></a>
              <a class="dropdown-item">Homebrewery</a>
              <a class="dropdown-item">HTML</a>
              <a class="dropdown-item">JSON</a>
            </div>
          </div>

          <button type="button" id="print" class="btn btn-outline-primary">
            <i class="fa fa-print" aria-hidden="true"></i> Print
          </button>

        </form>
      </div>

      <!-- <div class="col-auto pl-3 pr-0">
        <form class="form-inline center-form">

          <div>
            <div class="switch-label">Cols</div>
            <input class="tgl tgl-flip" id="two-column-checkbox" type="checkbox"/>
            <label class="tgl-btn m-0" data-tg-off="one" data-tg-on="two" for="two-column-checkbox">
          </div>

          <div id="mode-toggle" class="ml-2">
            <div class="switch-label">Mode</div>
            <input class="tgl tgl-flip" id="statblock-visible-checkbox" type="checkbox"/>
            <label class="tgl-btn m-0" data-tg-off="edit" data-tg-on="view" for="statblock-visible-checkbox">
          </div>

        </form>
      </div> -->

      <div class="col-sm-auto mt-1 mb-1">
        <div id="display-name">{{active_monster.name}}</div>
        <ul id="tag-list"></ul>
      </div>

    </div>

    <div class="row" id="editor-row">
        <edit-pane></edit-pane>
        <preview-pane></preview-pane>
      <!-- <div class="col editor-pane no-side-padding" id="editor-side">

      </div>
      <div class="col-md-auto editor-pane no-side-padding" id="live-statblock"></div> -->
    </div>
  </div>
</template>

<script>
import EditPane from './EditPane.vue'
import PreviewPane from './PreviewPane.vue'
import { mapGetters } from 'vuex'

export default {
    components: {EditPane, PreviewPane},
    computed: {
        ...mapGetters([
            'active_monster'
        ])
    }
}
</script>


<style scoped lang="scss">


</style>