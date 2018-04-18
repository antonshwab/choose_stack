<template>
  <select v-model="txFilter">
    <option
      v-for="option in options"
      v-bind:key="option.key"
      v-bind:value="option.value"
      v-on:click.prevent="onSelect">
      {{ option.text }}
    </option>
  </select>
</template>


<script>
export default {
  name: 'TableHeader',
  data() {
    return {
      txFilter: '',
      options: [
        { key: 1, value: '', text: 'none' },
        { key: 2, value: 'account_create', text: 'account_create' },
        { key: 3, value: 'account_update', text: 'account_update' },
        { key: 4, value: 'account_witness_proxy', text: 'account_witness_proxy' },
        { key: 5, value: 'account_witness_vote', text: 'account_witness_vote' },
        { key: 6, value: 'author_reward', text: 'author_reward' },
        { key: 7, value: 'cancel_transfer_from_savings', text: 'cancel_transfer_from_savings' },
        { key: 8, value: 'change_recovery_accounts', text: 'change_recovery_accounts' },
        { key: 9, value: 'comment', text: 'comment' },
        { key: 10, value: 'comment_benefactor_reward', text: 'comment_benefactor_reward' },
        { key: 11, value: 'comment_options', text: 'comment_options' },
        { key: 12, value: 'convert', text: 'convert' },
        { key: 13, value: 'custom', text: 'custom' },
        { key: 14, value: 'custom_json', text: 'custom_json' },
        { key: 15, value: 'curation_reward', text: 'curation_reward' },
        { key: 16, value: 'delete_comment', text: 'delete_comment' },
        { key: 17, value: 'escrow_approve', text: 'escrow_approve' },
        { key: 18, value: 'escrow_dispute', text: 'escrow_dispute' },
        { key: 19, value: 'escrow_release', text: 'escrow_release' },
        { key: 20, value: 'escrow_transfer', text: 'escrow_transfer' },
        { key: 21, value: 'feed_publish', text: 'feed_publish' },
        { key: 22, value: 'fill_convert_request', text: 'fill_convert_request' },
        { key: 23, value: 'fill_order', text: 'fill_order' },
        { key: 24, value: 'fill_transfer_from_saving', text: 'fill_transfer_from_saving' },
        { key: 25, value: 'fill_vesting_withdraw', text: 'fill_vesting_withdraw' },
        { key: 26, value: 'follow', text: 'follow' },
        { key: 27, value: 'interest', text: 'interest' },
        { key: 28, value: 'limit_order_cancel', text: 'limit_order_cancel' },
        { key: 29, value: 'limit_order_create', text: 'limit_order_create' },
        { key: 30, value: 'limit_order_create2', text: 'limit_order_create2' },
        { key: 31, value: 'liquidity_reward', text: 'liquidity_reward' },
        { key: 32, value: 'pow2', text: 'pow2' },
        { key: 33, value: 'reblog', text: 'reblog' },
        { key: 34, value: 'recover_account', text: 'recover_account' },
        { key: 35, value: 'recover_account_recovery', text: 'recover_account_recovery' },
        { key: 36, value: 'set_withdraw_vesting_route', text: 'set_withdraw_vesting_route' },
        { key: 37, value: 'shutdown_witness', text: 'shutdown_witness' },
        { key: 38, value: 'transfer', text: 'transfer' },
        { key: 39, value: 'transfer_from_savings', text: 'transfer_from_savings' },
        { key: 40, value: 'transfer_to_savings', text: 'transfer_to_savings' },
        { key: 41, value: 'transfer_to_vesting', text: 'transfer_to_vesting' },
        { key: 42, value: 'vesting_deposit', text: 'vesting_deposit' },
        { key: 43, value: 'vote', text: 'vote' },
        { key: 44, value: 'withdraw_vesting', text: 'withdraw_vesting' },
        { key: 45, value: 'withdraw_vesting_route', text: 'withdraw_vesting_route' },
        { key: 46, value: 'witness_update', text: 'witness_update' },
        { key: 47, value: 'witness_vote', text: 'witness_vote' },
      ],
    };
  },
  methods: {
    onSelect() {
      const vm = this;
      console.log('FROM onSelect!!', vm.txFilter);
      vm.$emit('select-tx-filter', vm.txFilter);
    },
  },
};
</script>
