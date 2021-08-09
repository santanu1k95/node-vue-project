<template>
  <topbar/>
  <router-view />
</template>

<script>
import Topbar from './components/Topbar.vue';


export default {
  components: { Topbar },
  name: "App",
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    console.log(!this.user);

    console.log(!!this.user);
  },
  components:{
    Topbar
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