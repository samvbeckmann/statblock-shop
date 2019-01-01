<template>
  <div>
    <template v-for="(trait, key, index) in traits">
      <statblock-property-line :key="index" :name="trait.name" :desc="trait.desc"></statblock-property-line>
    </template>
  </div>
</template>

<script>
import StatblockPropertyLine from "./StatblockPropertyLine.vue";

export default {
  components: { StatblockPropertyLine },
  props: ["traits"]
};
</script>


<style scoped>
* {
  color: #7a200d;
}
</style>