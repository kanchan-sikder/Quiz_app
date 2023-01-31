

<template>
    <div class="text-center" id="page">
        <h1 style="font-size:100px; font-weight: bolder;">Quiz App</h1>
        <div>
            <router-link to="/login" style="color:white; text-decoration: none;">&lt---- Admin login ----></router-link>
            <div>
                <p style="font-size:40px; font-weight: bolder;">Want to play a quiz</p>
                <div class="text-center">
                    <p>
                        <span>RULES-</span><br>
                        <span>Select a category, level and no. of questions if you want to.</span><br>
                        <span>Not choosing any field results in mix quiz of 10 questions.</span><br>
                        <span>After choosing click submit for confirmation.</span><br>
                        <span>After ending the quiz click "RESULT" button to know your result.</span><br>
                    </p>
                </div>
                <p>Select the field of Interest</p>
                <div class="field">
                    <label>LEVEL OF QUESTION : </label>
                    <select v-model="lev_choice">
                        <option v-for="l in lev" v-bind:value=lev.indexOf(l)>{{ l }}</option>
                    </select>
                </div>
                <div class="field">
                    <label>CATEGORY OF QUESTION : </label>
                    <select v-model="cat_choice">
                        <option v-for="c in cat" v-bind:value="cat.indexOf(c)">{{ c }}</option>
                    </select>
                </div>
                <div class="field">
                    <label>NUMBER OF QUESTION : </label>
                    <input v-model="limit" type="number" />
                </div>
                <router-link class="btn btn-warning " v-bind:to="'/quiz/' + cat_choice + '/' + lev_choice + '/' + limit"
                    style="margin-top: 23px; padding-right:20px; padding-left:20px">Start
                    quiz</router-link>

            </div>
        </div>

    </div>
</template>

<script>

export default {
    props: {
        d: {
            type: Object
        }
    },
    data() {
        return {

            lev: ['HARD', 'MEDIUM', 'EASY'],
            cat: ['General Knowledge', 'Music', 'Movie', 'History'],
            lev_choice: null,
            cat_choice: null,
            limit: null,
        }
    }

}
</script>

<style scoped>
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
