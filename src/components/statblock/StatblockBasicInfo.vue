<template>
  <div>
    <template v-for="(info, key, index) in basic_info">
        <statblock-property-line :key="index" :name="info.name" :desc="info.desc"></statblock-property-line>
    </template>
  </div>
</template>

<script>
import StatblockPropertyLine from "./StatblockPropertyLine.vue"

export default {
    components: { StatblockPropertyLine },
  props: ["basic_info"]
};
</script>


<style scoped>
* {
  color: #7a200d;
}
</style>