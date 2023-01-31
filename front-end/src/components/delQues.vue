

<template>
    <div style="margin-top:10px;">
        <button class="btn btn-danger" v-on:click.prevent="deleteQuestion(id)">DELETE
            question</button>
    </div>
</template>

<script>

export default {
    props: {
        id: {
            type: Number
        }
    },
    data() {
        return {
            question: {}
        }
    },
    methods: {
        deleteQuestion: function (id) {
            this.$http.delete('http://localhost:3000/ques/' + this.id
            ).then(function (data) {
                this.$emit('deleteQuestion', this.id);
            })
        }
    }

}
</script>

<style scoped>

</style>
