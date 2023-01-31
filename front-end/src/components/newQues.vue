

<template>
    <div>
        <div class="mb-3">
            <label>CATEGORY</label>
            <select v-model="question.category" class="form-select form-select-sm" aria-label=".form-select-lg example">
                <option v-for="c in cat" v-bind:value=cat.indexOf(c)>{{ c }}</option>

            </select>
            <label>LEVEL</label>
            <select v-model="question.level" class="form-select form-select-sm" aria-label=".form-select-lg example">
                <option v-for="l in lev" v-bind:value=lev.indexOf(l)>{{ l }} </option>
            </select>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">DESCRIPTION</label>
            <textarea class="form-control" v-model="question.q" placeholder="Description"
                id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="mb-3">
            <label class="form-label">Option 1</label><br>
            <input class="form-control" v-model="question.op1" placeholder="Option 1" />
        </div>
        <div class="mb-3">
            <label class="form-label">Option 2</label><br>
            <input class="form-control" v-model="question.op2" placeholder="Option 2" />
        </div>
        <div class="mb-3">
            <label class="form-label">Option 3</label><br>
            <input class="form-control" v-model="question.op3" placeholder="Option 3" />
        </div>
        <div class="mb-3">
            <label class="form-label">Option 4</label><br>
            <input class="form-control" v-model="question.op4" placeholder="Option 4" />
        </div>
        <div class="mb-3">
            <label>ANSWER</label>
            <select v-model="question.ans" class="form-select form-select-sm" aria-label=".form-select-lg example">
                <option v-bind:value=question.op1>{{ question.op1 }}</option>
                <option v-bind:value=question.op2>{{ question.op2 }}</option>
                <option v-bind:value=question.op3>{{ question.op3 }}</option>
                <option v-bind:value=question.op4>{{ question.op4 }}</option>
            </select>
        </div>

        <button type="button" class="btn btn-dark" style="margin-left:40%" v-on:click.prevent="addQuestion">Add
            question</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            question: {},
            lev: ['HARD', 'MEDIUM', 'EASY'],
            cat: ['General Knowledge', 'Music', 'Movie', 'History']
        }
    },
    methods: {
        addQuestion: function () {

            this.$http.post('http://localhost:3000/ques/', this.question
            ).then(function (data) {
                this.question = {}
                this.$emit('addQuestion', data.body)
            })
        }
    }

}
</script>

<style scoped>

</style>
