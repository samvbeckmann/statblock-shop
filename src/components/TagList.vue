<template>
    <ul>
        <li v-for="(tag, index) in monster_list[monster_index].tags" :key="index">
            <editable :content="tag" @update="makeUpdateTagCommit(index, $event)"></editable>
        </li>
        <li v-if='new_tag'>
            <editable 
                content=''
                :focused='true'
                @update='makeUpdateTagCommit(monster_list[monster_index].tags.length, $event)'>
            </editable>
        </li>
        <li class='new-tag' tabindex="0" @click="makeNewTag" @keydown.enter="makeNewTag">
            <i class="fa fa-plus"></i>
        </li>
    </ul>
</template>

<script>
import { mapState } from "vuex";
import Editable from './Editable.vue'

export default {
    components: { Editable },

    data: function() {
        return {new_tag: false}
    },

    props: ['monster_index'],

    computed: {
        ...mapState(["monster_list"]),
    },

    methods: {

        makeUpdateTagCommit(index, new_text) {
            var tags = this.$store.state.monster_list[this.$props.monster_index].tags;
            tags[index] = new_text;
            console.log(index)
            console.log(tags);
            this.$store.commit('updateTags', {monster_index: this.$props.monster_index, tags: tags});
            this.$data.new_tag = false;
        },

        makeNewTag() {
            this.$data.new_tag = true;
        }
    },

};
</script>


<style scoped lang="scss">

@import '../scss/_variables';

ul {
  min-height: 28px;
  list-style-type: none;
  margin-top: auto;
  margin-bottom: auto;
  padding: 0;

  li {
    height: 22px;
    float: left;
    background-color: $offwhite;
    color: rgb(65, 68, 78);
    margin-right: 0.5rem;
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
    text-transform: uppercase;
    font-size: 0.85rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
}

.new-tag {
  border-style: dashed;
  border-width: 1px;
  border-color: $grey-blue;
  background: #fff;
  color: $grey-blue;
}

</style>