<template>
  <div class="about">
    <Greeting />
  </div>
</template>

<script>
import Greeting from "../components/Greeting.vue";
import { mapActions } from "vuex";
export default {
  components: {
    Greeting,
  },
};
</script>
