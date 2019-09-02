<template>
  <div id="app">
    <router-view />
    
  </div>
</template>

<script>
export default {
  name: "App",
  
  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  height: 100%;
  overflow: auto;
}
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
html {
  height: 100%;
}

@media only screen and (min-device-width: 320px) {
  html,
  body {
    font-size: 17.06px;
  }
}

@media only screen and (min-device-width: 360px) and (min-device-height: 640px) {
  html,
  body {
    font-size: 19.2px;
  }
}

@media only screen and (min-device-width: 375px) and (min-device-height: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  html,
  body {
    font-size: 20px;
  }
}

@media only screen and (min-device-width: 414px) and (min-device-height: 736px) and (-webkit-min-device-pixel-ratio: 3) {
  html,
  body {
    font-size: 22.1px;
  }
}

@media only screen and (min-device-width: 736px) {
  html,
  body {
    font-size: 39.25px;
  }
}

@media only screen and (min-device-width: 1024px) {
  html,
  body {
    font-size: 54.6px;
  }
}
</style>
