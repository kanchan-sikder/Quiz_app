

<template>
    <div class="text-center" id="page">
        <h1 style="font-size:100px; font-weight: bolder;">Quiz App</h1>
        <div>
            <div style="position:fixed" v-if="!show">
                <button v-on:click="back" class="float-start"
                    style="margin-left:20px; background-color: inherit; font-size: 30px; border-radius: 25%;">←</button>
            </div>


            <div style="position:fixed; right:25%">
                <p> {{ attempted }} /{{ total }}</p>
            </div>
            <div class="card text-start" :class="{ 'submit': ques.ans !== ques.answer && show }"
                v-for="ques in questions" style="width: 25rem;margin-left:25%; margin-top:50px;color:black">
                <div class="card-body" style="padding:7%">


                    <p class="card-text d-inline badge bg-primary text-wrap float-start" style="width: 10rem;"> CATEGORY
                        :-
                        {{
                        cat[ques.category] }}</p>
                    <p class=" card-text d-inline badge bg-success text-wrap float-end" style="width: 8rem; right: 5%;">
                        LEVEL
                        :- {{
                        lev[ques.level] }}</p><br>
                    <h5 class="card-title" style="margin-top:13%"><span>{{ questions.indexOf(ques) + 1 }}) </span>QUES:
                        {{
                            ques.ques_desp
                        }}</h5>

                    <input type="radio" v-model="ques.answer" v-bind:value=ques.ques_option1 />OPTION 1: {{
                        ques.ques_option1
                    }}<br>
                    <input type="radio" v-model="ques.answer" v-bind:value=ques.ques_option2 />OPTION 2: {{
                        ques.ques_option2
                    }}<br>
                    <input type="radio" v-model="ques.answer" v-bind:value=ques.ques_option3 />OPTION 3: {{
                        ques.ques_option3
                    }}<br>
                    <input type="radio" v-model="ques.answer" v-bind:value=ques.ques_option4 />OPTION 4: {{
                        ques.ques_option4
                    }}<br>

                    <p v-if="ques.Active">Submitted</p>
                    <div style="display:inline-block" v-on:click.once="check(ques)">

                        <button class="btn btn-success">Submit</button>

                        <p v-if="ques.ans !== ques.answer && show">ANS :{{ ques.ans }}</p>
                    </div>
                </div>
            </div>
            <button class="btn btn-dark" style="padding:1% 3% 1% 3%; margin-top:3%; margin-bottom:3%"
                v-on:click="res">RESULT</button>
            <result v-if="show" v-bind:d="d"></result>
        </div>
    </div>
</template>

<script>
import result from './result.vue'

export default {
    components: {
        'result': result
    },
    data() {
        return {
            questions: [],
            count: 0,
            attempted: 0,
            lev: ['HARD', 'MEDIUM', 'EASY'],
            cat: ['General Knowledge', 'Music', 'Movie', 'History'],
            total: 0,
            d: {},
            show: false,

        }
    },
    methods: {

        check: function (ques) {
            ques.Active = true
            this.attempted++;
            if (ques.answer === ques.ans) {
                this.count++;
            }
        },
        back: function () {
            this.$router.push('/')

        },
        res: function () {
            this.show = true
            this.d = {
                count: this.count,
                total: this.total,
                attempted: this.attempted
            }
        }

    },
    computed: {

    },
    beforeCreate() {

        this.$http.post('http://localhost:3000/ques/limit/', {
            lev_choice: this.$route.params.l,
            cat_choice: this.$route.params.c,
            limit: parseInt(this.$route.params.limit, 10)

        }).then(function (data) {

            let temp = data.body.map((d) => ({
                ...d, Active: false
            }))
            this.questions = temp;
            this.total = data.body.length;
        })
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@300&display=swap');

.submit {
    background-color: #e59346;

}

.field {
    margin-top: 20px;
}

.field>select {
    width: 200px;
    margin-left: 20px;
}

.field>input {
    width: 50px;
    margin-left: 20px;
}

#page {
    width: 800px;
    padding-top: 2%;
    padding-bottom: 5%;
    font-size: 20px;
    font-family: 'Sofia Sans', sans-serif;
    font-weight: 600;
    color: aliceblue;
    margin-left: 25%;
    background: rgb(2, 0, 36);
    background: radial-gradient(circle, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 41%, rgba(0, 212, 255, 1) 100%);
}
</style>
