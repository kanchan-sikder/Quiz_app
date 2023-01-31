
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import index from './components/index.vue'
import login from './components/login.vue'
export default {
  components: {
    'index': index,
    'login': login
  },
  data() {
    return {

    }
  }
}
</script>


<style scoped>

</style>
