import React, { Component } from 'react';
import './App.css';

const TXS = [
  ["2018-04-12T09:35:03",	"aa781334709a6fcea2afc412910d9eed5e73005d", "bittrex", 	"kunaio", 	"145.333", "GOLOS", 	"J24JAQD5I"],
  ["2018-04-12T09:15:45",	"feeb33dbd4349af2dca5128c5503ce4bf891a548", "pgs", 	"bittrex", 	"1500.000", "GOLOS", 	"dfd2b9a6fef9440faac"],
  ["2018-04-12T09:07:27",	"59381e48f7d19f35e3987e3cd78409d51b812374", "maria9", 	"bittrex", 	"0.001", "GOLOS", 	"363ea3d61fe4434bb48"],
  ["2018-04-12T09:05:06",	"8d1bfd7e2dcaf50a504f434f492eb3a739917afa", "maria9", 	"bittrex", 	"143.783", "GOLOS", 	"363ea3d61fe4434bb48"],
  ["2018-04-12T08:40:27",	"6a9813d83d807229dc1f856b6fd8ad4da89617a9", "helly", 	"bittrex", 	"0.001", "GBG", 	"8b95d8f18fdc4394bb7"],
];

class AccountSearchBar extends React.Component {
  render() {
    return (
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0 col-sm-3" id="search-account">
          <div class="input-group">
            <input type="search" placeholder="Account username" />
            <div class="input-group-append">
              <button class="btn btn-danger btn-sm" id="reset-account" type="button"><span class="icon-cross"></span></button>
              <button class="btn btn-dark btn-sm" type="submit"><span class="icon-user"></span> Get Account</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const Header = props => {
  return (
    <header className="App-header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">GolosExplorer</a>
        <AccountSearchBar />
      </nav>
    </header>
  );
};



class TableHeaderWithFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h5>
        Total <span class="badge badge-info">{999}</span> transactions, showing <span class="badge badge-info">{100}</span> transactions,        
          <select>
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
            <option value="transfer" selected="">transfer</option>
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
        filtered from <span class="badge badge-info" id="about-account-count">{100}</span> transactions
      </h5>
    );
  }  
}

class TxRow extends React.Component {
  render () {
    const [time, txID, from, to, amount, memo] = this.props.tx;
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
    const rows = this.props.txs.map(tx => <TxRow tx={tx}/>);

    return (
      <div>
        <TableHeaderWithFilter />
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
    <footer class="footer">
      <div class="container-fluid">
        <span class="text-muted">GolosExplorer @ 2018</span>
      </div>
    </footer>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TxsTable txs={TXS}/>
        <Footer />
      </div>
    );
  }
}

export default App;
