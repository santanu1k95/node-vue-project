<template>
  <div class="greeting">
    <div class="sections">
      <Intro />
      <Portfolio />
      <Works />
    </div>
  </div>
</template>

<script>
import Intro from "./Intro.vue";
import Portfolio from "./Portfolio.vue";
import Works from "./Works.vue";
import { mapActions } from "vuex";

export default {
  components: {
    Intro,
    Portfolio,
    Works,
  },
};
</script>

<style scoped>
.greeting {
  height: 100vh;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

.sections {
  width: 100%;
  height: calc(100vh - 70px);
  background-color: rgb(255, 255, 255);
  position: relative;
  top: 70px;
  scroll-behavior: smooth;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  scrollbar-width: none;
}

.sections::-webkit-scrollbar {
  display: none;
}
.sections > * {
  width: 100vw;
  height: calc(100vh - 70px);
  scroll-snap-align: start;
}
</style>
