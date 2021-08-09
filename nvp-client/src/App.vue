<template>
  <div>
    <Topbar/>
    <Menu/>
    <RouterView/>
  </div>
  
</template>

<script>
import Topbar from './components/Topbar.vue';
import RouterView from './components/RouterView.vue'
import Menu from './components/Menu.vue'
import {mapActions} from 'vuex';

export default {
  
  components: { Topbar },
  name: "App",
  components:{
    Topbar,RouterView,Menu
  }
};
</script>

<style lang="scss">
@import "./global.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
    padding: 0;
}

</style>