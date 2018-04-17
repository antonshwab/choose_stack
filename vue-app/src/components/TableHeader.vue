</<template>
  <select v-model="txFilter">
    <option
      v-for="option in options"
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
        { value: '', text: 'none' },
        { value: 'account_create', text: 'account_create' },
        { value: 'account_update', text: 'account_update' },
        { value: 'account_witness_proxy', text: 'account_witness_proxy' },
        { value: 'account_witness_vote', text: 'account_witness_vote' },
        { value: 'author_reward', text: 'author_reward' },
        { value: 'cancel_transfer_from_savings', text: 'cancel_transfer_from_savings' },
        { value: 'change_recovery_accounts', text: 'change_recovery_accounts' },
        { value: 'comment', text: 'comment' },
        { value: 'comment_benefactor_reward', text: 'comment_benefactor_reward' },
        { value: 'comment_options', text: 'comment_options' },
        { value: 'convert', text: 'convert' },
        { value: 'custom', text: 'custom' },
        { value: 'custom_json', text: 'custom_json' },
        { value: 'curation_reward', text: 'curation_reward' },
        { value: 'delete_comment', text: 'delete_comment' },
        { value: 'escrow_approve', text: 'escrow_approve' },
        { value: 'escrow_dispute', text: 'escrow_dispute' },
        { value: 'escrow_release', text: 'escrow_release' },
        { value: 'escrow_transfer', text: 'escrow_transfer' },
        { value: 'feed_publish', text: 'feed_publish' },
        { value: 'fill_convert_request', text: 'fill_convert_request' },
        { value: 'fill_order', text: 'fill_order' },
        { value: 'fill_transfer_from_saving', text: 'fill_transfer_from_saving' },
        { value: 'fill_vesting_withdraw', text: 'fill_vesting_withdraw' },
        { value: 'follow', text: 'follow' },
        { value: 'interest', text: 'interest' },
        { value: 'limit_order_cancel', text: 'limit_order_cancel' },
        { value: 'limit_order_create', text: 'limit_order_create' },
        { value: 'limit_order_create2', text: 'limit_order_create2' },
        { value: 'liquidity_reward', text: 'liquidity_reward' },
        { value: 'pow2', text: 'pow2' },
        { value: 'reblog', text: 'reblog' },
        { value: 'recover_account', text: 'recover_account' },
        { value: 'recover_account_recovery', text: 'recover_account_recovery' },
        { value: 'set_withdraw_vesting_route', text: 'set_withdraw_vesting_route' },
        { value: 'shutdown_witness', text: 'shutdown_witness' },
        { value: 'transfer', text: 'transfer' },
        { value: 'transfer_from_savings', text: 'transfer_from_savings' },
        { value: 'transfer_to_savings', text: 'transfer_to_savings' },
        { value: 'transfer_to_vesting', text: 'transfer_to_vesting' },
        { value: 'vesting_deposit', text: 'vesting_deposit' },
        { value: 'vote', text: 'vote' },
        { value: 'withdraw_vesting', text: 'withdraw_vesting' },
        { value: 'withdraw_vesting_route', text: 'withdraw_vesting_route' },
        { value: 'witness_update', text: 'witness_update' },
        { value: 'witness_vote', text: 'witness_vote' },
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
