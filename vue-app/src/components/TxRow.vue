<template>
  <tr>
    <td>{{tx.timestamp}}</td>
    <td>{{tx.txID}}</td>
    <td>{{tx.from}}</td>
    <td>{{tx.to}}</td>
    <td>{{tx.amount}}</td>
    <td>{{tx.memo}}</td>
  </tr>
</template>

<script>
export default {
  name: 'TxRow',
  props: {
    tx: {
      type: Object,
    },
  },
};
</script>
