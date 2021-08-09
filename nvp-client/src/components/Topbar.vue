<template>
  <div :class="['topbar', getMenuOpen ? 'active' : '']">
    <div class="left">
      <router-link v-if="user" to="/">Home</router-link>
      <router-link v-if="user" to="/dashboard">Dashboard</router-link>
      <router-link v-if="user" to="/about">About</router-link>
    </div>
    <div class="right" style="justify-content: flex end">
      <router-link v-if="!!user" to="/login">
        <div class="login">Login/Signup</div>
      </router-link>
      <div className="hamburger" @click="togMenuOpen" v-if="user">
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Topbar",
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    /**To Move to store */
    this.user = { name: "Santa" };
    console.log(!this.user);
    console.log(!this.user);
    console.log(!!this.user);
  },
  methods: {
    ...mapActions({ togMenuOpen: "togMenuOpen" }),
    
  },
  computed: {
    ...mapGetters({
      getMenuOpen: "getMenuOpen",
    }),
  },
};
</script>

<style scoped lang="scss">
@import "../global.css";
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 70px;
  background-color: white;
  color: var(--mainColor);
  position: fixed;
  top: 0;
  z-index: 2;
  transition: all 1s ease;
  a {
    color: var(--mainColor);
    font-weight: bold;
    text-decoration: none;
  }
  a.router-link-exact-active {
    color: #42b983;
  }
  .left {
    display: flex;
    justify-content: flex-start;
    flex-basis: 80%;
    gap: 12px;
  }
  .right {
    display: flex;
    justify-content: flex-end;
    a {
      text-decoration: none;
      color: white !important;
    }
    .login {
      font-size: 12px;
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgb(58, 156, 58);
      width: 100px;
      height: 20px;
      border-radius: 5px;
      background: rgb(82, 157, 42);
      background: linear-gradient(
        90deg,
        rgba(82, 157, 42, 1) 20%,
        rgba(136, 164, 47, 1) 95%
      );
    }
    .hamburger {
      width: 32px;margin-left: 10px;
      height: 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;

      span {
        width: 100%;
        height: 3px;
        background-color: var(--mainColor);
        transform-origin: left;
        transition: all 0.5s ease;
      }
    }
  }

  &.active {
    background-color: var(--mainColor);
    color: white;
    a {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
  a.router-link-exact-active {
    color: #42b983;
  }
    .hamburger {
      span {
        &:first-child {
          background-color: white;
          transform: rotate(45deg);
        }
        &:last-child {
          background-color: white;
          transform: rotate(-45deg);
        }
      }
    }
  }
}
</style>
