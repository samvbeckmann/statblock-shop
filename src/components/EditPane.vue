<template>
  <div class="col editor-pane no-side-padding" id="editor-side">
    <form id="statblock-form">
      <edit-header></edit-header>
      <edit-basic-info></edit-basic-info>
      <edit-ability-scores></edit-ability-scores>
      <edit-traits></edit-traits>
      <edit-abilities></edit-abilities>
      <edit-description></edit-description>
    </form>
  </div>
</template>

<script>
import EditHeader from './EditHeader.vue'
import EditBasicInfo from './EditBasicInfo.vue'
import EditAbilityScores from './EditAbilityScores.vue'
import EditTraits from './EditTraits.vue'
import EditAbilities from './EditAbilities.vue'
import EditDescription from './EditDescription.vue'

export default {
  components: {
    EditHeader,
    EditBasicInfo,
    EditAbilityScores,
    EditTraits,
    EditAbilities,
    EditDescription
  }
};
</script>


<style scoped>
</style>