<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  color: #333;
  font-size: 14px;
  line-height: 1.5;
}
div::selection,
span::selection,
h1::selection,
h2::selection,
h3::selection,
h4::selection,
h5::selection,
h6::selection,
p::selection,
a::selection,
ul::selection,
li::selection {
  background-color: #ee501f;
  color: #fff;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}
</style>
