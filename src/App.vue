<template>
<div id="app">
    <router-view/>
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
