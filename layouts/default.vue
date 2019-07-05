<template lang="html">
  <div>
    <Header/>
    <nuxt />
    <Footer/>
  </div>
</template>

<script>
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
}
</style>
