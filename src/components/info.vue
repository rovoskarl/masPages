<template>
  <div class="info">
    <h1>{{ msg }}</h1>
    <img src="../assets/logo.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
      msg: 'this is info page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
