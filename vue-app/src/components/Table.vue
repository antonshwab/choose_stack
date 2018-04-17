<template>
  <table>
    <thead>
      <tr>
        <th>Timestamp</th>
        <th>Transaction ID</th>
        <th>From</th>
        <th>To</th>
        <th>Amount</th>
        <th>Memo</th>
      </tr>
    </thead>
    <tbody>
      <TxRow 
        v-for="tx in preparedTxs" 
        v-bind:key="tx.txID" 
        v-bind:tx="tx"/>
    </tbody>
  </table>
</template>

<script>
import TxRow from './TxRow';

export default {
  name: 'Table',
  components: {
    TxRow,
  },
  props: {
    rawtxs: {
      type: Array,
      default: [],
    },
    filterTx: {
      type: String,
    }
  },
  computed: {
    preparedTxs: function () {
      const txs = this.rawtxs
        .filter(([_, tx]) => {
          const [op, opInfo] = tx.op;
          return this.filterTx === "" || this.filterTx === op;
        })
        .map(([_, tx]) => {
          const timestamp = tx.timestamp;
          const txID = tx.trx_id;
          const [op, opInfo] = tx.op;
          const from = opInfo.from;
          const to = opInfo.to;
          const amount = opInfo.amount;
          const memo = opInfo.memo;
          return { timestamp, txID, op, opInfo, from, to, amount, memo };
        });
      return txs;
    }
  },
}
</script>
