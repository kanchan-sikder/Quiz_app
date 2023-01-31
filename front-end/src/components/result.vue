

<template>
    <div>
        <h2>RESULT:- {{ d.count }}/{{ d.total }}</h2>
        <h2>Attempted:- {{ d.attempted }}</h2>
        <router-link to='/' style="color:white">Go-Back to Main Page</router-link>
    </div>
</template>

<script>

export default {
    props: {
        d: {
            type: Object
        }
    }

}
</script>

<style scoped>

</style>
