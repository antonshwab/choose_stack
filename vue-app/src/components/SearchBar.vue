<template>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <form
      v-on:submit.prevent="getAccountTxs"
      class="form-inline my-2 my-lg-0 col-sm-3">
      <div class="input-group">
        <input
          type="text"
          v-bind:placeholder='account' />
        <div class="input-group-append">
          <button
            class="btn btn-dark btn-sm"
            type="submit">
            <span class="icon-user"></span> Get Account
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
      account: 'bittrex',
    };
  },
  methods: {
    // eslint-disable-next-line
    getAccountTxs: event => console.log('from getAccountTxs:', event.target.value),
  },
};
</script>
