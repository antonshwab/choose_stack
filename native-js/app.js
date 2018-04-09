swal.setDefaults({
	buttonsStyling: true,
	confirmButtonText: '<span class="icon-checkmark"></span> Ok',
	confirmButtonColor: '#5cb85c',
	cancelButtonText: '<span class="icon-cross"></span> Cancel',
	cancelButtonColor: '#d9534f',
});

let $mainPage = document.getElementById('main-page');
let $resetAccountBtn = document.getElementById('reset-account');
let $aboutAccountPage = document.getElementById('about-account-page');
let $aboutAccountTableTbody = document.getElementById('about-account').getElementsByTagName('tbody')[0];
let $loader = document.getElementsByClassName('lding')[0];
let $aboutAccountAllCount = document.getElementById('about-account-all-count');
let $aboutAccountCount = document.getElementById('about-account-count');
let $aboutAccountFilteredCount = document.getElementById('about-account-filtered-count');
let $aboutAccountFilter = document.getElementById('about-account-filter');
let $searchAccount = document.getElementById('search-account');
let $searchAccountInput = $searchAccount.querySelector('.form-control[name="account-username"]');

let loadingShow = function() {
	$loader.style.display = 'block';
};
let loadingHide = function() {
	$loader.style.display = 'none';
};

let accountHistoryFrom = -1;
let accountHistoryCount = 99;
let getAccountTransactions = function() {
	loadingShow();
	let usernameVal = $searchAccountInput.value;
	let operationsCount = 0;
	$aboutAccountTableTbody.innerHTML = '';
	golos.api.getAccountHistory(usernameVal, accountHistoryFrom, accountHistoryCount, function(err, transactions) {
		loadingHide();
		if (transactions.length > 0) {
			//transactions.reverse();
			transactions.forEach(function(transaction) {
				if ( ! $aboutAccountFilter.value || (transaction[1].op[0] == $aboutAccountFilter.value)) {
					console.log(transaction);
					operationsCount++;
					let $newRow = $aboutAccountTableTbody.insertRow(0);
					$newRow.innerHTML = `<tr>
									<td>${transaction[1].timestamp}</td>
									<td><a href="#tx/${transaction[1].trx_id}">${transaction[1].trx_id}</a></td>
									<td>${transaction[1].op[1].from ? transaction[1].op[1].from : ''}</td>
									<td>${transaction[1].op[1].to ? transaction[1].op[1].to : ''}</td>
									<td>${transaction[1].op[1].amount ? transaction[1].op[1].amount : ''}</td>
									<td>${transaction[1].op[1].memo ? transaction[1].op[1].memo : ''}</td>
								</tr>`;
				}
			});
			if (transactions) {
				let transactionsCount = transactions.length;
				let transactionsAllCount = transactions[transactionsCount - 1][0];
				$aboutAccountAllCount.innerHTML = transactionsAllCount;
				$aboutAccountCount.innerHTML = transactionsCount;
				$aboutAccountFilteredCount.innerHTML = operationsCount;
			}
			if (operationsCount == 0) swal({title: 'Error', type: 'error', text: `Not have ${$aboutAccountFilter.value} operations!`});
		}
		else {
			if ( ! err) err = 'Account not found!';
			swal({title: 'Error', type: 'error', text: err});
		}
	});
};

$aboutAccountFilter.addEventListener('change', function() {
	let usernameVal = $searchAccountInput.value;
	window.location.hash = `account/${usernameVal}/${$aboutAccountFilter.value}`;
	getAccountTransactions();
});

$searchAccount.addEventListener('submit', function(e) {
	e.preventDefault();
	$mainPage.style.display = 'none';
	$aboutAccountPage.style.display = 'block';
	$resetAccountBtn.style.display = 'block';
	//window.location.hash = 'account/' + usernameVal;
	getAccountTransactions();
	return false;
});

$resetAccountBtn.addEventListener('click', function() {
	$mainPage.style.display = 'flex';
	$searchAccountInput.value = '';
	$aboutAccountPage.style.display = 'none';
	$resetAccountBtn.style.display = 'none';
	window.location.hash = '';
});

window.addEventListener('hashchange', function() {
	let hash = window.location.hash.substring(1);
	if (hash) {
		let params = hash.split('/');
		if (params[1]) {
			switch (params[0]) {
				case 'account': {
					$searchAccountInput.value = params[1];
					if (params[2]) $aboutAccountFilter.value = params[2];
					$searchAccount.dispatchEvent(new CustomEvent('submit'));
				}; break;
			}
		}
	}
	else {
		$mainPage.style.display = 'flex';
		$searchAccountInput.value = '';
		$aboutAccountPage.style.display = 'none';
		$resetAccountBtn.style.display = 'none';
	}
});
window.dispatchEvent(new CustomEvent('hashchange'));