<template>
  <header>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-brand href="#">GolosExplorer</b-navbar-brand>

      <b-nav-form>
        <b-form-input
          size="sm"
          class="mr-sm-2"
          type="text"
          v-on:change="onAccountInputChange"
          v-bind:value="account"
          placeholder='account' />
        <b-button
          v-on:click.prevent="onAccountInput"
          size="sm"
          class="btn btn-dark"
          type="submit">Get transactions
        </b-button>
      </b-nav-form>

    </b-navbar>
  </header>

    <!-- <form
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
    </form> -->
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
    onAccountInputChange(value) {
      const vm = this;
      vm.account = value;
    },
    onAccountInput() {
      const vm = this;
      console.log('from onAccountInput:', vm.account);
      vm.$emit('account-input', vm.account);
    },
  },
};
</script>
