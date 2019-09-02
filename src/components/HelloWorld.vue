<template>
  <div class="hello">
    <router-view></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="Index">
        <img
          slot="icon"
          src=""
        >
        首页
      </mt-tab-item>
      <mt-tab-item id="Order">
        <img
          slot="icon"
          src=""
        >
        订单
      </mt-tab-item>
      <mt-tab-item id="My">
        <img
          slot="icon"
          src=""
        >
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      selected: "Index"
    };
  },
  watch: {
    selected(val) {
      console.log(val);
      this.$router.push(val);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  padding-bottom: 2.75rem;
  height: 100%;
  box-sizing: border-box;
}
</style>
