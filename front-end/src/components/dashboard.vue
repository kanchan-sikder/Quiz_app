

<template>
    <div id="container">
        <div id="left">
            <div>
                <div style="display: inline-block;">
                    <h1> Admin </h1>
                </div>
                <div style="display: inline-block; margin-left:40%">
                    <button class="btn btn-warning" v-on:click="logout" style="padding:5%;">LOGOUT</button>
                </div>

            </div>

            <p>ENTER NEW QUESTIONS TO BE ADDED</p><br>
            <new-ques v-on:addQuestion="updateQuestion($event)"></new-ques>

        </div>

        <div id="right">
            <div style="display: inline-block;">
                <label>LEVEL OF QUESTION : </label>
                <select v-model="lev_choice" style="padding-left:10px;">
                    <option v-for="l in lev" v-bind:value=lev.indexOf(l)>{{ l }}</option>
                </select>
            </div>
            <div style="display: inline-block;">
                <label>CATEGORY OF QUESTION : </label>
                <select v-model="cat_choice">
                    <option v-for="c in cat" v-bind:value="cat.indexOf(c)">{{ c }}</option>
                </select>
                <div style="display: inline-block;margin-left:20px;">
                    <button class="btn btn-primary" style="padding:10%;padding-right:30%;padding-left:30%; "
                        v-on:click="clear">Clear</button>
                </div>
            </div>

            <div class="card  " v-for="ques in filterCategory"
                style="width: 25rem; padding-bottom: 10px; margin-top:50px;">
                <div class="card-body" style="padding:7%">
                    <h5 class="card-title">QUES: {{ ques.ques_desp }}</h5>

                    <p class="card-text">OPTIONS:-</p>
                    <ol style="margin-left:25px">
                        <li>{{ ques.ques_option1 }}</li>
                        <li>{{ ques.ques_option2 }}</li>
                        <li>{{ ques.ques_option3 }}</li>
                        <li>{{ ques.ques_option4 }}</li>
                    </ol><br>
                    <div style="display:inline-block">
                        <p class="card-text ">ANS :- {{ ques.ans }} </p>
                        <p class="card-text d-inline p-2"> CATEGORY :- {{ cat[ques.category] }}</p>
                        <p class="card-text d-inline p-2"> LEVEL :- {{ lev[ques.level] }}</p><br>
                        <del-ques v-bind:id=ques.ques_id v-on:deleteQuestion="deleteQuestion($event)"></del-ques>
                    </div>

                </div>
            </div>
        </div>


    </div>
</template>

<script>
import newQues from './newQues.vue'
import delQues from './delQues.vue'
import filterCategory from '../mixins/category'

export default {
    components: {
        'new-ques': newQues,
        'del-ques': delQues
    },
    data() {
        return {
            questions: [],
            lev: ['HARD', 'MEDIUM', 'EASY'],
            cat: ['General Knowledge', 'Music', 'Movie', 'History'],
            lev_choice: null,
            cat_choice: null
        }
    },
    methods: {
        updateQuestion: function (data) {
            this.questions.push(data);
        },
        deleteQuestion: function (id) {
            this.questions = this.questions.filter(item => item.ques_id != id)
        },
        logout: function () {
            if (this.$session.exists()) {
                this.$http.delete('http://localhost:3000/user/').then(function (data) {
                    this.$router.push('/login')
                })
            } else {
                this.$router.push('/')
            }
            this.$session.destroy();
        },
        clear: function () {
            this.lev_choice = null,
                this.cat_choice = null
        }
    },
    beforeCreate() {
        if (this.$session.exists()) {
            this.$http.get('http://localhost:3000/ques/').then(function (data) {
                this.questions = data.body;
            })
        } else {
            this.$router.push('/')
        }

    },

    mixins: [
        filterCategory
    ]

}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    outline: none;
}

:root {
    --main-color: #fff;
    --second-color: #347deb;
    --box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);

}

html {
    height: 100%;
}

body {
    background-image: linear-gradient(310deg, #df98fa, #9055ff);
    font-family: sans-serif;
}

#container {
    position: absolute;
    left: 40%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--main-color);
    width: 1200px;
    height: 800px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    box-shadow: var(--box-shadow);
    transition-duration: 1s;
}

#left,
#right {
    margin: auto;
    width: 90%;
    border-radius: 10px;
}

#right {

    position: absolute;
    left: 40%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 900px;
    height: 100%;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    box-shadow: var(--box-shadow);
    transition-duration: 1s;
    padding-bottom: 30%;
    margin-top: 5%;
    /* padding-left: 10%; */
}


#left {
    position: absolute;
    left: 40%;

    top: 50%;
    transform: translate(-50%, -50%);
    margin-left: 60%;
    height: 100%;
    width: 40%;
    display: grid;
    /* grid-template-columns: repeat(4, 25%); */
    background-image: url("https://images.unsplash.com/photo-1615400014497-55726234cccb?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzg4Njg0Ng&ixlib=rb-1.2.1&q=85");
    background-size: cover;
    background-position: center;
    box-shadow: var(--box-shadow);
}

h1 {
    margin-top: 10%;
    font-size: 60px;
}
</style>
