<template>
  <div></div>
  <div class="footer">
    <span v-for="item in items" :key="item.message" @click="onClickHandler($event)">
      {{ item.message }}
    </span>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",

  setup() {
    const items = ref([{ message: "Vue" }, { message: "App" }]);
    return {
      items,
    };
  },

  methods: {
    onClickHandler(event) {
      console.log(event, "Click is active...");
    },
  },
};
</script>
<style>
.footer {
  width: 100%;
  background-color: #ffb366;
  color: white;
  text-align: center;
  line-height: 20vh;
  height: 20vh;
  font-size: 42px;
}
</style>
