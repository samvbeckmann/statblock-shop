<template>
  <div class="col-md-auto editor-pane no-side-padding" id="live-statblock">
      <statblock :monster="active_monster"></statblock>
      <div>
          {{active_monster.description}}
      </div>
  </div>
</template>

<script>
import Statblock from './statblock/Statblock.vue'
import { mapGetters } from 'vuex'

export default {
    components: {Statblock},
    computed: {
        ...mapGetters([
            'active_monster'
        ])
    }
}
</script>


<style scoped lang="scss">


</style>