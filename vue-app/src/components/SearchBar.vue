<template>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <form
      class="form-inline my-2 my-lg-0 col-sm-3">
      <div class="input-group">
        <input
          type="text"
          v-bind:value="account"
          v-on:input="account = $event.target.value"
          v-bind:placeholder='account' />
        <div class="input-group-append">
          <button
            class="btn btn-dark btn-sm"
            v-on:click.prevent="onAccountInput"
            type="submit">
            <span class="icon-user"></span> Get transactions
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      account: '',
    };
  },
  methods: {
    onAccountInput() {
      const vm = this;
      console.log('from onAccountInput:', vm.account);
      vm.$emit('account-input', vm.account);
    },
  },
};
</script>
