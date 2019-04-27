<template>
    <div contenteditable="true" @focusout="update"></div>
</template>

<script>
export default {
    props: ['content', 'focused'],
    mounted: function () {
        this.$el.innerText = this.content;
        if (this.$props.focused) {
            this.$el.focus();
        }
    },
    watch:  {
        content: function() {
            this.$el.innerText = this.content;
        }
    },
    methods: {
        update: function(event) {
            this.$emit('update', event.target.innerText)
        }
    }
}
</script>


<style scoped>

</style>