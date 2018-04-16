<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <SearchBar v-on:account-input="getAccountTxs($event)"/>
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
  methods: {
    getAccountTxs(account) {
      console.log("TOP:", account);
    }
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
