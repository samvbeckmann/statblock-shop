<template>
  <div>
    <h1>{{monster.name}}</h1>
    <h2>{{monster.heading}}</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ['monster']
};
</script>


<style scoped>
    h1 {
      font-family: 'Libre Baskerville', 'Lora', 'Calisto MT',
                   'Bookman Old Style', Bookman, 'Goudy Old Style',
                   Garamond, 'Hoefler Text', 'Bitstream Charter',
                   Georgia, serif;
      color: #7A200D;
      font-weight: 700;
      margin: 0px;
      font-size: 23px;
      letter-spacing: 1px;
      font-variant: small-caps;
    }

    h2 {
      font-weight: normal;
      font-style: italic;
      font-size: 12px;
      margin: 0;
    }
</style>