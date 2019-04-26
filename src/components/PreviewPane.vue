<template>
  <div v-if='show_preview' class="col-md-auto editor-pane no-side-padding" id="live-statblock">
      <statblock :monster="active_monster"></statblock>
      <div>
          {{active_monster.description}}
      </div>
  </div>
</template>

<script>
import Statblock from './statblock/Statblock.vue'
import { mapGetters, mapState } from 'vuex'

export default {
    components: {Statblock},
    computed: {
        ...mapState(['show_preview']),
        ...mapGetters(['active_monster'])
    }
}
</script>


<style scoped lang="scss">


</style>