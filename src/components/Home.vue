<template>

  </template>

  <script>
  export default {
    data() {
      return {
        quote: ''
      }
    },
    methods: {
      getQuote() {
        this.$http
          .get('http://localhost:3001/api/random-quote', (data) => {
            this.quote = data;
          })
          .error((err) => console.log(err))
      }
    }
  }
  </script>
