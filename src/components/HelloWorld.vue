/* eslint-disable */

<template>
  <div class="dashboard">
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="https://a.storyblok.com/f/39898/1024x1024/dea4e1b62d/vue-js_logo-svg.png" width="40" height="40">
      </a>
      <div>
        <img :src="$auth.user.picture" width="30" height="30">
        <span class="text-muted font-weight-light px-2">{{$auth.user.name}}</span>
        <button type="button" class="btn btn-outline-secondary btn-sm" @click="$auth.logout()">Logout</button>
      </div>
    </nav>

    <div class="jumbotron">
      <div class="container">
        <h1 class="display-4">Hello, {{$auth.user.nickname}}!</h1>
        <p class="lead">We hope you liked this tutorial and can now start building new astounding projects from this start point. If you're interested in what we're doing besides tech tutorials check out <a href="https://www.storyblok.com">@storyblok</a>.</p>
        <hr class="my-4">
        <p>TBH, I'm sure this project of yours would look great with a landing page filled with content composed in <a href="https://www.storyblok.com">Storyblok</a> 🎉</p>

        <p class="lead">
          <a class="btn btn-primary btn-lg" href=" " target="_blank" role="button"> Repositories  {{ repositoriesCount }}</a>

        </p>

      </div>
    </div>

    <div class="container">
      <div class="card-columns">

    <p>Repositories grabbed: {{ repositoriesCount }}</p>

      </div>
    </div>
    <ul>
  <li v-for="(value,propertyName , index ) in repositories">{{propertyName}}:{{value}} :{{index}}</li>
    </ul>

  </div>
</template>

<script>



export default {
  data () {
    return {
    myGitHubData: {},
    repositories:{}

    }
  },

  mounted: function () {
     this.GitHubAPI.get('/user/repos', {}, [this.myGitHubData, 'repositories'])
     this.GitHubAPI.get('/user/repos', {}, [this.repositories, 'full_name'])
     console.log(this.myGitHubData);
     console.log(this.repositories);
   },


  computed: {
   repositoriesCount: function () {
     if (this.myGitHubData.repositories) {
       return this.myGitHubData.repositories.length
     }
     return 'none yet...'
   }
 }
}

</script>

<style scoped>
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');

.btn-primary {
  background: #468f65;
  border: 1px solid #468f65;
}
.card {
  text-decoration: none;
  color: #000;
}
</style>
