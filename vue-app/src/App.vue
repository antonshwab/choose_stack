<template>
  <div id="app">
    <SearchBar v-on:account-input="getAccountTxs($event)"/>
    <TableHeader v-on:select-tx-filter="filterTx = $event"/>
    <Table v-bind:rawtxs="txs" v-bind:filterTx="filterTx"/>
  </div>
</template>

<script>
import golos from 'golos-js';
import SearchBar from './components/SearchBar';
import TableHeader from './components/TableHeader';
import Table from './components/Table';

export default {
  name: 'App',
  components: {
    SearchBar,
    TableHeader,
    Table,
  },
  data() {
    return {
      txs: [],
      filterTx: '',
    };
  },
  methods: {
    getAccountTxs(account) {
      const vm = this;
      console.log('TOP:', account);

      const from = -1;
      const limit = 99;

      golos.api.getAccountHistory(account, from, limit)
        .then((txs) => {
          vm.txs = txs;
          console.log(vm.txs);
        })
        .catch((error) => {
          console.error(error);
        });
    },
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
