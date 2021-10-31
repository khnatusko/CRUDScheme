<template>
<div id="app">
    <header>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/create">Create Dish</router-link> |
        <router-link to="/reservation">Reservation</router-link>|
        <router-link to="/menu">Menu</router-link> 
    </div>
    </header>
  <main>
    <router-view/>
  </main>
    <footer class="bg-dark">
      <h4 class="text-center py-3" style="color:white">© 2021 Krzysztof Hnatuśko</h4>
    </footer>
  </div>

</template>
<script>


export default {
 
}
</script>



<style lang="scss">

#app {
  
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: white;
    &.router-link-exact-active {
      color: darkgoldenrod;
    }
  }
  background-color: black;
}
footer {
        bottom: 0;
        position:fixed;
        left:0;
        width: 100%;
        height: 7%;
        text-align: center;
    }

</style>
