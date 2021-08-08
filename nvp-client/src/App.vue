<template>
  <div id="nav">
    <div class="left">
      <router-link v-if="user" to="/">Home</router-link>
      <router-link v-if="user" to="/about">About</router-link>
    </div>
    <div class="right">
      <router-link v-if="!user" to="/login">
        <div class="login">
          
            Login
          
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    user: {
    }
  },
  mounted() {
    user: null;
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: space-evenly;
}
.left {
  display: flex;
  justify-content: flex-start;
  flex-basis: 70%;
  gap: 12px;
}

.right {
  display: flex;
}

.right a{
  text-decoration: none;
  color: white !important;
}
.right .login{
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(58, 156, 58);
  width: 100px;
  height: 20px;
  border-radius: 5px;
  background-color: rgb(12, 226, 94);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
