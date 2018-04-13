import React, { Component } from 'react';
import './App.css';
import golos from 'golos-js';

// [
//   [98915,
//    {"trx_id":"74a02738e27f53472417e1ca73fc7cb9ee61dd40",
//     "block":15516328,
//     "trx_in_block":5,
//     "op_in_trx":0,
//     "virtual_op":0,
//     "timestamp":"2018-04-12T14:08:45",
//     "op":[
//       "transfer",
//       {"from":"maria9",
//        "to":"bittrex",
//        "amount":"288.648 GBG",
//        "memo":"75f2e1f0009f460d8a8"}]}
//   ]
// ]

class AccountSearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const account = this.props.account;
    console.log("FROM handleSUBMIT account:", account);
    this.props.onAccountSearch(account);
  }

  handleChange(event) {
    const account = event.target.value;
    console.log("FROM handleSUBMIT account:", account)
    this.props.onSearchInputChange(account);
  }

  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form onSubmit={this.handleSubmit}
              className="form-inline my-2 my-lg-0 col-sm-3">
          <div className="input-group">
            <input type="text"
                   value={this.props.account}
                   onChange={this.handleChange}
                   placeholder="Account username" />
            <div className="input-group-append">
              <button className="btn btn-danger btn-sm" id="reset-account" type="submit"><span className="icon-cross"></span></button>
              <button className="btn btn-dark btn-sm" type="submit"><span className="icon-user"></span> Get Account</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}


class TableHeaderWithFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onFilterTxSelectChange(event.target.value);
  }

  render() {
    const filterTx = this.props.filterTx;
    console.log("FILTER tx:", filterTx);
    return (
      <h5>
        Total <span className="badge badge-info">{999}</span> transactions, showing <span className="badge badge-info">{100}</span> transactions,
          <select value={filterTx} onChange={this.handleChange}>
            <option value="">none</option>
            <option value="account_create">account_create</option>
            <option value="account_update">account_update</option>
            <option value="account_witness_proxy">account_witness_proxy</option>
            <option value="account_witness_vote">account_witness_vote</option>
            <option value="author_reward">author_reward</option>
            <option value="cancel_transfer_from_savings">cancel_transfer_from_savings</option>
            <option value="change_recovery_accounts">change_recovery_accounts</option>
            <option value="comment">comment</option>
            <option value="comment_benefactor_reward">comment_benefactor_reward</option>
            <option value="comment_options">comment_options</option>
            <option value="convert">convert</option>
            <option value="custom">custom</option>
            <option value="custom_json">custom_json</option>
            <option value="curation_reward">curation_reward</option>
            <option value="delete_comment">delete_comment</option>
            <option value="escrow_approve">escrow_approve</option>
            <option value="escrow_dispute">escrow_dispute</option>
            <option value="escrow_release">escrow_release</option>
            <option value="escrow_transfer">escrow_transfer</option>
            <option value="feed_publish">feed_publish</option>
            <option value="fill_convert_request">fill_convert_request</option>
            <option value="fill_order">fill_order</option>
            <option value="fill_transfer_from_saving">fill_transfer_from_saving</option>
            <option value="fill_vesting_withdraw">fill_vesting_withdraw</option>
            <option value="follow">follow</option>
            <option value="interest">interest</option>
            <option value="limit_order_cancel">limit_order_cancel</option>
            <option value="limit_order_create">limit_order_create</option>
            <option value="limit_order_create2">limit_order_create2</option>
            <option value="liquidity_reward">liquidity_reward</option>
            <option value="pow2">pow2</option>
            <option value="reblog">reblog</option>
            <option value="recover_account">recover_account</option>
            <option value="recover_account_recovery">recover_account_recovery</option>
            <option value="set_withdraw_vesting_route">set_withdraw_vesting_route</option>
            <option value="shutdown_witness">shutdown_witness</option>
            <option value="transfer">transfer</option>
            <option value="transfer_from_savings">transfer_from_savings</option>
            <option value="transfer_to_savings">transfer_to_savings</option>
            <option value="transfer_to_vesting">transfer_to_vesting</option>
            <option value="vesting_deposit">vesting_deposit</option>
            <option value="vote">vote</option>
            <option value="withdraw_vesting">withdraw_vesting</option>
            <option value="withdraw_vesting_route">withdraw_vesting_route</option>
            <option value="witness_update">witness_update</option>
            <option value="witness_vote">witness_vote</option>
          </select>
        filtered from <span className="badge badge-info" id="about-account-count">{100}</span> transactions
      </h5>
    );
  }
}

class TxRow extends React.Component {
  render () {
    const {time, txID, from, to, amount, memo} = this.props.tx;
    return (
      <tr>
        <td>{time}</td>
        <td>{txID}</td>
        <td>{from}</td>
        <td>{to}</td>
        <td>{amount}</td>
        <td>{memo}</td>
      </tr>
    );
  }
}

class TxsTable extends React.Component {
  render() {
    const filterTx = this.props.filterTx;
    // const filteredTxs = this.props.txs.filter(x => x);
    // const rows = filteredTxs.map(tx => <TxRow tx={tx}/>);
    console.log("BEFORE: ", this.props.txs);
    const preparedTxs = this.props.txs.map(([id, tx]) => tx);
    console.log("AFTER: ", preparedTxs);
    //
    
    //
    const rows = [];
    return (
      <div>
        <TableHeaderWithFilter onFilterTxSelectChange={this.props.onFilterTxSelectChange}
                               filterTx={this.props.filterTx}/>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Transaction ID</th>
              <th>From</th>
              <th>To</th>
              <th>Amount</th>
              <th>Memo</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

const Footer = props => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <span className="text-muted">GolosExplorer @ 2018</span>
      </div>
    </footer>
  );
};



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      account: '',
      filterTx: '',
      accountTxs: [],
    };

    this.handleAccountSearch = this.handleAccountSearch.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleFilterTxSelectChange = this.handleFilterTxSelectChange.bind(this);
  }

  handleFilterTxSelectChange(filterTx) {
    this.setState({ filterTx });
  }

  handleSearchInputChange(account) {
    this.setState({ account });
  }

  handleAccountSearch(account) {
    const from = -1;
    const limit = 99;

    golos.api.getAccountHistory(account, from, limit)
      .then(txs => {
        // console.log("res1:", txs);
        this.setState({ loading: false, accountTxs: txs });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ loading: false, error });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">GolosExplorer</a>
            <AccountSearchBar // TODO: add reset handler
              account={this.state.account}
              onAccountSearch={this.handleAccountSearch}
              onSearchInputChange={this.handleSearchInputChange} />
          </nav>
        </header>
        <TxsTable txs={this.state.accountTxs}
                  filterTx={this.state.filterTx}
                  loading={this.state.loading}
                  onFilterTxSelectChange={this.handleFilterTxSelectChange} />
        <Footer />
      </div>
    );
  }
}

export default App;
