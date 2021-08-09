<template>
  <div :class="['menu', getMenuOpen ? 'active' : '']" id="menu">
    <ul>
      <li>
        <a href="#intro" @click="togMenuOpen">Home</a>
      </li>
      <li>
        <a href="#portfolio" @click="togMenuOpen">Portfolio</a>
      </li>
      <li>
        <a href="#works" @click="togMenuOpen">Works</a>
      </li>
      <li>
        <a href="#testimonials" @click="togMenuOpen">Testimonials</a>
      </li>
      <li>
        <a href="#contact" @click="togMenuOpen">Contact</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
    }
  },
  methods: {
    ...mapActions({togMenuOpen:'togMenuOpen'})
  },
  computed: {
    ...mapGetters({
      getMenuOpen: "getMenuOpen",
    }),
  },
}
</script>

<style scoped lang="scss">
@import "../global.css";

.menu {
  width: 300px;
  height: 100vh;
  background-color: var(--mainColor);
  position: fixed;
  top: 0;
  right: -300px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
  &.active {
    right: 0;
  }
}

.menu ul {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 30px;
  color: white;
  width: 60%;
}
.menu li {
  margin-bottom: 30px;
}

.menu a {
  font-size: inherit;
  color: inherit;
  text-decoration: none;
}
a:hover {
  font-weight: 500;
}
</style>