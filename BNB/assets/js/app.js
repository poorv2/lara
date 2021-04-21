abi = [
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "fundAddr",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "mktAddr",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "prjAddr",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "grantor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "onGrant",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "investor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "onInvest",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "onOwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "investor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "onWithdraw",
		"type": "event"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "DAY",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "DEVELOPER_RATE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "FUND_RATE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "LAUNCH_TIME",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "MARKETING_RATE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "MINIMUM",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "REFERENCE_LEVEL1_RATE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "REFERENCE_LEVEL2_RATE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "REFERENCE_LEVEL3_RATE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "REFERENCE_RATE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "REFERENCE_SELF_RATE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "REFERRER_CODE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "TIME_STEP",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "address2UID",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "checkIn",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "fundAds",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getCurrentPlans",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getDeveloperAccount",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_uid",
				"type": "uint256"
			}
		],
		"name": "getInvestmentPlanByUID",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "bool[]",
				"name": "",
				"type": "bool[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_uid",
				"type": "uint256"
			}
		],
		"name": "getInvestorInfoByUID",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMarketingAccount",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getReferenceAccount",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getTotalInvestments",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "getUIDByAddress",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_planId",
				"type": "uint256"
			}
		],
		"name": "grant",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_referrerCode",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_planId",
				"type": "uint256"
			}
		],
		"name": "invest",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "latestReferrerCode",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "mktAds",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "prjAds",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_newDeveloperAccount",
				"type": "address"
			}
		],
		"name": "setDeveloperAccount",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_newMarketingAccount",
				"type": "address"
			}
		],
		"name": "setMarketingAccount",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_newReferenceAccount",
				"type": "address"
			}
		],
		"name": "setReferenceAccount",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "uid2Investor",
		"outputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "referrerEarnings",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "availableReferrerEarnings",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "referrer",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "planCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "level1RefCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "level2RefCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "level3RefCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "checkpoint",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	}
];
var contractAddress = '0x035DADB5D7DbE89746D2753b1Af38803ebf3A68a';
var prev_account;
var ref = 0;
var account = '0x0000000000000000000000000000000000000000';
var UID = 0;
var oldInvestment;
var plans = ['4% Daily ROI', '14% Daily ROI', '13% Daily ROI', '18% Daily ROI','38% Daily ROI', '54% Daily ROI'];
var plans_rus = ['4% . ....', '14% . ....', '13% . ....', '18% . ....', '38% . ....', '54% . ....'];
var plans_cn = ['..4%', '..14%', '..13%', '..18%', '..38%', '..54%'];

function main() {
    var _0x92e6xb = '';
    if (localStorage['getItem']('ref')) {
        _0x92e6xb = localStorage['getItem']('ref')
    };
    if (_0x92e6xb > 0) {
        ref = _0x92e6xb
    } else {
        _0x92e6xb = getQueryVariable('ref');
        if (_0x92e6xb > 0) {
            localStorage['setItem']('ref', _0x92e6xb);
            ref = _0x92e6xb
        } else {
            ref = 0
        }
    }
}
main();

function invest(_0x92e6xd) {
    if (!web3['eth']['accounts'][0]) {
        return
    };
    _0x92e6xd = Number(_0x92e6xd);
    if (_0x92e6xd >= 0 && _0x92e6xd <= 5) {
        var _0x92e6xe = Number($('#trxForPlan' + _0x92e6xd)['val']()) * 1e18;
        if (_0x92e6xe > 0) {
            var _0x92e6xf = web3['eth']['contract'](abi);
            var _0x92e6x10 = _0x92e6xf['at'](contractAddress);
            var _0x92e6x11 = _0x92e6x10['invest']['getData'](ref, _0x92e6xd);
            web3['eth']['sendTransaction']({
                to: contractAddress,
                from: web3['eth']['accounts'][0],
                data: _0x92e6x11,
                value: _0x92e6xe
            }, function(_0x92e6x12, _0x92e6x13) {
                if (!_0x92e6x12) {
                    $('#trxForPlan' + _0x92e6xd)['val'](inProcessing);
                    setTimeout(function() {
                        $('#trxForPlan' + _0x92e6xd)['val']('0');
                        $('html, body')['animate']({
                            scrollTop: $('#widget-2')['offset']()['top']
                        }, 1000)
                    }, 5000)
                } else {
                    console['log']('error :(')
                }
            })
        } else {
            $('#trxForPlan' + _0x92e6xd)['val'](error1);
            setTimeout(function() {
                $('#trxForPlan' + _0x92e6xd)['val']('0')
            }, 5000)
        }
    }
}

function withdraw() {
    var _0x92e6xf = web3['eth']['contract'](abi);
    var _0x92e6x10 = _0x92e6xf['at'](contractAddress);
    var _0x92e6x11 = _0x92e6x10['withdraw']['getData']();
    web3['eth']['sendTransaction']({
        to: contractAddress,
        from: web3['eth']['accounts'][0],
        data: _0x92e6x11
    }, function(_0x92e6x12, _0x92e6x13) {
        if (!_0x92e6x12) {
            $('#withdrawButton')['html'](inProcessing);
            setTimeout(function() {
                $('#withdrawButton')['html']('WITHDRAW')
            }, 5000)
        } else {
            console['log']('error :(')
        }
    })
}

function prettyNum (_0x92e6x16) {
    return _0x92e6x16;
    var _0x92e6x17 = _0x92e6x16.toString();
    var _0x92e6x18 = _0x92e6x17['substr'](_0x92e6x17['length'] - 3, 3);
    var _0x92e6x19 = _0x92e6x17['substr'](_0x92e6x17['length'] - 6, 3);
    var _0x92e6x1a;
    if (_0x92e6x17['length'] == 7) {
        _0x92e6x1a = _0x92e6x17['substr'](0, 1)
    };
    if (_0x92e6x17['length'] == 8) {
        _0x92e6x1a = _0x92e6x17['substr'](0, 2)
    };
    var _0x92e6x13 = '';
    if (_0x92e6x1a) {
        _0x92e6x13 += _0x92e6x1a + ','
    };
    if (_0x92e6x19) {
        _0x92e6x13 += _0x92e6x19 + ','
    };
    _0x92e6x13 += _0x92e6x18;
    return _0x92e6x13
}

function getQueryVariable(_0x92e6x1c) {
    var _0x92e6x1d = window['location']['search']['substring'](1);
    var _0x92e6x1e = _0x92e6x1d['split']('&');
    for (var _0x92e6x1f = 0; _0x92e6x1f < _0x92e6x1e['length']; _0x92e6x1f++) {
        var _0x92e6x20 = _0x92e6x1e[_0x92e6x1f]['split']('=');
        if (_0x92e6x20[0] == _0x92e6x1c) {
            return _0x92e6x20[1]
        }
    };
    return (false)
}

function copyRef() {
    var _0x92e6x22 = document['getElementById']('yourRefLink');
    var _0x92e6x23 = document['createRange']();
    _0x92e6x23['selectNode'](_0x92e6x22);
    window['getSelection']()['addRange'](_0x92e6x23);
    try {
        document['execCommand']('copy');
        $('#copy')['html']('copied!');
        setTimeout(function() {
            $('#copy')['html']('COPY LINK')
        }, 3000)
    } catch (err) {
        console['log']('Can`t copy')
    };
    window['getSelection']()['removeAllRanges']()
}

function parseTimestamp(_0x92e6x25) {
    var _0x92e6x26 = new Date(Number(_0x92e6x25) * 1000);
    var _0x92e6x27 = _0x92e6x26['getDate']();
    var _0x92e6x28 = _0x92e6x26['getMonth']() + 1;
    var _0x92e6x29 = _0x92e6x26['getFullYear']();
    var _0x92e6x2a = _0x92e6x26['getHours']();
    var _0x92e6x2b = _0x92e6x26['getMinutes']();
    if (_0x92e6x27 < 10) {
        _0x92e6x27 = '0' + _0x92e6x27
    };
    if (_0x92e6x28 < 10) {
        _0x92e6x28 = '0' + _0x92e6x28
    };
    if (_0x92e6x2a < 10) {
        _0x92e6x2a = '0' + _0x92e6x2a
    };
    if (_0x92e6x2b < 10) {
        _0x92e6x2b = '0' + _0x92e6x2b
    };
    var _0x92e6x2c = _0x92e6x27 + '/' + _0x92e6x28 + '/' + _0x92e6x29 + ' ' + _0x92e6x2a + ':' + _0x92e6x2b;
    return _0x92e6x2c
}

function startLoop() {
    refreshData();
    updateStat();
    setTimeout(startLoop, 5000)
}

function startLoop2() {
    updateStat();
    $('#yourAcc')['html']('MetaMask required...');
    setTimeout(startLoop2, 20000)
}

function refreshData() {
    if (!account) {
        $('.no-account')['show']()
    } else {
        $('.no-account')['hide']()
    };
    if (web3['eth']['accounts'][0] && web3['eth']['accounts'][0] != prev_account) {
        account = web3['eth']['accounts'][0];
        prev_account = web3['eth']['accounts'][0];
        $('#yourAcc')['html'](account['substr'](0, 12) + '...')
    };
    web3['eth']['getBalance'](account, (_0x92e6x30, _0x92e6x31) => {
        if (_0x92e6x30) {
            console['log'](`${'getBalance error: '}${_0x92e6x30}${''}`)
        } else {
            balance = Number(`${''}${web3['fromWei'](_0x92e6x31,'ether')}${''}`);
            $('#accBalance')['html'](balance['toFixed'](3))
        }
    })
}

function updateStat() {
    web3['eth']['getBalance'](contractAddress, (_0x92e6x30, _0x92e6x31) => {
        if (_0x92e6x30) {
            console['log'](`${'getBalance error: '}${_0x92e6x30}${''}`)
        } else {
            balance = Number(`${''}${web3['fromWei'](_0x92e6x31,'ether')}${''}`);
            $('#contractBalance')['html'](balance['toFixed'](3) + ' BNB')
        }
    });
    getUID()
}

function getUID() {
    var _0x92e6xf = web3['eth']['contract'](abi);
    var _0x92e6x10 = _0x92e6xf['at'](contractAddress);
    var _0x92e6x11 = _0x92e6x10['getUIDByAddress']['getData'](account);
    web3['eth']['call']({
        to: contractAddress,
        from: null,
        data: _0x92e6x11
    }, function(_0x92e6x12, _0x92e6x13) {
        if (!_0x92e6x12) {
            if (UID > 0) {
                $('#yourRefLink')['html'](window.location.hostname + '/?ref=' + UID)
            } else {
                $('#yourRefLink')['html']('no link...')
            };
            UID = Number(_0x92e6x13);
            if (UID >= 0) {
                getInvestorInfo(UID)
            }
        } else {
            console['log']('getUID err')
        }
    })
}

function getInvestorInfo(UID) {
    console['log'](UID);
    var _0x92e6xf = web3['eth']['contract'](abi);
    var _0x92e6x10 = _0x92e6xf['at'](contractAddress);
    var _0x92e6x11 = _0x92e6x10['getInvestorInfoByUID']['getData'](UID);
    web3['eth']['call']({
        to: contractAddress,
        from: account,
        data: _0x92e6x11
    }, function(_0x92e6x12, _0x92e6x13) {
        if (!_0x92e6x12) {
            currentDividendsArr = parseDataArr(_0x92e6x13, 9);
            newDividendsArr = parseDataArr(_0x92e6x13, 9 + 1 + currentDividendsArr['length']);
            $('#referrerEarnings')['html'](parseData(_0x92e6x13, 0));
            $('#availableReferrerEarnings')['html'](weiToDisplay(parseData(_0x92e6x13, 1)));
            $('#level1RefCount')['html'](parseData(_0x92e6x13, 3));
            $('#level2RefCount')['html'](parseData(_0x92e6x13, 4));
            $('#level3RefCount')['html'](parseData(_0x92e6x13, 5));
            var _0x92e6x35 = 0;
            for (i = 0; i < currentDividendsArr['length']; i++) {
                _0x92e6x35 += Number(weiToDisplay(currentDividendsArr[i]))
            };
            var _0x92e6x36 = 0;
            for (i = 0; i < newDividendsArr['length']; i++) {
                _0x92e6x36 += Number(weiToDisplay(newDividendsArr[i]))
            };
            $('#withdrawable')['html'](Number(_0x92e6x36 + weiToDisplay(parseData(_0x92e6x13, 1)))['toFixed'](6));
            $('.totalDivs')['html'](Number(_0x92e6x36 + _0x92e6x35)['toFixed'](2));
            getInvestmentPlan(UID, newDividendsArr)
        } else {
            console['log']('getInvestorInfo err')
        }
    })
}

function getInvestmentPlan(UID, _0x92e6x38) {
    var _0x92e6xf = web3['eth']['contract'](abi);
    var _0x92e6x10 = _0x92e6xf['at'](contractAddress);
    var _0x92e6x11 = _0x92e6x10['getInvestmentPlanByUID']['getData'](UID);
    web3['eth']['call']({
        to: contractAddress,
        from: account,
        data: _0x92e6x11
    }, function(_0x92e6x12, _0x92e6x13) {
        if (!_0x92e6x12) {
            var _0x92e6x39 = '';
            var _0x92e6x3a = 0;
            arrlen = 5;
            planIds = parseDataArr(_0x92e6x13, arrlen);
            arrlen = arrlen + 1 + planIds['length'];
            investmentDates = parseDataArr(_0x92e6x13, arrlen);
            arrlen = arrlen + 1 + investmentDates['length'];
            investments = parseDataArr(_0x92e6x13, arrlen);
            arrlen = arrlen + 1 + investments['length'];
            currentDividends = parseDataArr(_0x92e6x13, arrlen);
            arrlen = arrlen + 1 + currentDividends['length'];
            isExpireds = parseDataArr(_0x92e6x13, arrlen);
            for (i = 0; i < planIds['length']; i++) {
                if (lang == 'rus') {
                    _0x92e6x39 += '<p class=\'myInv\'><b><span class=\'blue\'>' + weiToDisplay(investments[i]) + ' BNB</span> - <span style=\'color:#db2b61\'>' + plans_rus[planIds[i]] + '</span></b> <span>' + parseTimestamp(Number(investmentDates[i])) + '</span>';
                    _0x92e6x39 += '<br>......... <b>' + Number(weiToDisplay(currentDividends[i]))['toFixed'](4) + '</b> BNB | <span>... ...... <b>' + Number(weiToDisplay(_0x92e6x38[i]))['toFixed'](4) + '</b> BNB</span></p><br><br>'
                } else {
                    if (lang == 'cn') {
                        _0x92e6x39 += '<p class=\'myInv\'><b><span class=\'blue\'>' + weiToDisplay(investments[i]) + ' BNB</span> - <span style=\'color:#db2b61\'>' + plans_cn[planIds[i]] + '</span></b> <span>' + parseTimestamp(Number(investmentDates[i])) + '</span>';
                        _0x92e6x39 += '<br>... <b>' + Number(weiToDisplay(currentDividends[i]))['toFixed'](4) + '</b> BNB | <span>.... <b>' + Number(weiToDisplay(_0x92e6x38[i]))['toFixed'](4) + '</b> BNB</span></p><br><br>'
                    } else {
                        _0x92e6x39 += '<p class=\'myInv\'><b><span class=\'blue\'>' + weiToDisplay(investments[i]) + ' BNB</span> - <span style=\'color:#db2b61\'>' + plans[planIds[i]] + '</span></b> <span>' + parseTimestamp(Number(investmentDates[i])) + '</span>';
                        _0x92e6x39 += '<br>Payout <b>' + Number(weiToDisplay(currentDividends[i]))['toFixed'](4) + '</b> BNB | <span>Withdrawable <b>' + Number(weiToDisplay(_0x92e6x38[i]))['toFixed'](4) + '</b> BNB</span></p><br><br>'
                    }
                };
                _0x92e6x3a += Number(weiToDisplay(investments[i]))
            };
            $('#myIvestments')['html'](_0x92e6x39);
            $('.totalInvestment')['html'](_0x92e6x3a['toFixed'](2))
        } else {
            console['log']('getInvestmentPlan err')
        }
    })
}

function weiToDisplay(_0x92e6x3c) {
    return formatEthValue(web3['fromWei'](_0x92e6x3c, 'ether'))
}

function formatEthValue(_0x92e6x3e) {
    return parseFloat(parseFloat(_0x92e6x3e)['toFixed'](6))
}

function parseData(_0x92e6x13, _0x92e6x40) {
    return Number('0x' + _0x92e6x13['substr'](64 * _0x92e6x40 + 2, 64))
}

function parseDataArr(_0x92e6x13, _0x92e6x40) {
    keys = Number('0x' + _0x92e6x13['substr'](64 * _0x92e6x40 + 2, 64));
    var _0x92e6x42 = [];
    for (i = 0; i < keys; i++) {
        _0x92e6x40++;
        ArrValue = Number('0x' + _0x92e6x13['substr'](64 * _0x92e6x40 + 2, 64));
        _0x92e6x42[i] = ArrValue
    };
    return _0x92e6x42
}
window['addEventListener']('load', async () => {
    if (window['ethereum']) {
        window['web3'] = new Web3(ethereum);
        try {
            await ethereum['enable']();
            startLoop()
        } catch (error) {
            console['log']('User denied account access...' + error)
        }
    } else {
        if (window['web3']) {
            console['log']('Legacy dapp browsers...');
            window['web3'] = new Web3(web3['currentProvider']);
            account = web3['eth']['accounts'][0];
            startLoop();
            console['log']('1042')
        }
    }
})