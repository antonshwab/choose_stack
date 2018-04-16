<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <SearchBar/>
    <!-- <TableHeader/> -->
    <!-- <Table/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import SearchBar from './components/SearchBar';

export default {
  name: 'App',
  components: {
    HelloWorld,
    SearchBar,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
