require = (function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [function(require, module, exports) {
        module.exports = [{
            "constant": true,
            "inputs": [{
                "name": "_owner",
                "type": "address"
            }],
            "name": "name",
            "outputs": [{
                "name": "o_name",
                "type": "bytes32"
            }],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "_name",
                "type": "bytes32"
            }],
            "name": "owner",
            "outputs": [{
                "name": "",
                "type": "address"
            }],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "_name",
                "type": "bytes32"
            }],
            "name": "content",
            "outputs": [{
                "name": "",
                "type": "bytes32"
            }],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "_name",
                "type": "bytes32"
            }],
            "name": "addr",
            "outputs": [{
                "name": "",
                "type": "address"
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_name",
                "type": "bytes32"
            }],
            "name": "reserve",
            "outputs": [],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "_name",
                "type": "bytes32"
            }],
            "name": "subRegistrar",
            "outputs": [{
                "name": "",
                "type": "address"
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_name",
                "type": "bytes32"
            }, {
                "name": "_newOwner",
                "type": "address"
            }],
            "name": "transfer",
            "outputs": [],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_name",
                "type": "bytes32"
            }, {
                "name": "_registrar",
                "type": "address"
            }],
            "name": "setSubRegistrar",
            "outputs": [],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [],
            "name": "Registrar",
            "outputs": [],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_name",
                "type": "bytes32"
            }, {
                "name": "_a",
                "type": "address"
            }, {
                "name": "_primary",
                "type": "bool"
            }],
            "name": "setAddress",
            "outputs": [],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_name",
                "type": "bytes32"
            }, {
                "name": "_content",
                "type": "bytes32"
            }],
            "name": "setContent",
            "outputs": [],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_name",
                "type": "bytes32"
            }],
            "name": "disown",
            "outputs": [],
            "type": "function"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "_name",
                "type": "bytes32"
            }, {
                "indexed": false,
                "name": "_winner",
                "type": "address"
            }],
            "name": "AuctionEnded",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "_name",
                "type": "bytes32"
            }, {
                "indexed": false,
                "name": "_bidder",
                "type": "address"
            }, {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
            }],
            "name": "NewBid",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "name",
                "type": "bytes32"
            }],
            "name": "Changed",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "name",
                "type": "bytes32"
            }, {
                "indexed": true,
                "name": "addr",
                "type": "address"
            }],
            "name": "PrimaryChanged",
            "type": "event"
        }]
    }, {}],
    2: [function(require, module, exports) {
        module.exports = [{
            "constant": true,
            "inputs": [{
                "name": "_name",
                "type": "bytes32"
            }],
            "name": "owner",
            "outputs": [{
                "name": "",
                "type": "address"
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_name",
                "type": "bytes32"
            }, {
                "name": "_refund",
                "type": "address"
            }],
            "name": "disown",
            "outputs": [],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "_name",
                "type": "bytes32"
            }],
            "name": "addr",
            "outputs": [{
                "name": "",
                "type": "address"
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_name",
                "type": "bytes32"
            }],
            "name": "reserve",
            "outputs": [],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_name",
                "type": "bytes32"
            }, {
                "name": "_newOwner",
                "type": "address"
            }],
            "name": "transfer",
            "outputs": [],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_name",
                "type": "bytes32"
            }, {
                "name": "_a",
                "type": "address"
            }],
            "name": "setAddr",
            "outputs": [],
            "type": "function"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "name",
                "type": "bytes32"
            }],
            "name": "Changed",
            "type": "event"
        }]
    }, {}],
    3: [function(require, module, exports) {
        module.exports = [{
            "constant": false,
            "inputs": [{
                "name": "from",
                "type": "bytes32"
            }, {
                "name": "to",
                "type": "address"
            }, {
                "name": "value",
                "type": "uint256"
            }],
            "name": "transfer",
            "outputs": [],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "from",
                "type": "bytes32"
            }, {
                "name": "to",
                "type": "address"
            }, {
                "name": "indirectId",
                "type": "bytes32"
            }, {
                "name": "value",
                "type": "uint256"
            }],
            "name": "icapTransfer",
            "outputs": [],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "to",
                "type": "bytes32"
            }],
            "name": "deposit",
            "outputs": [],
            "payable": true,
            "type": "function"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "from",
                "type": "address"
            }, {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }],
            "name": "AnonymousDeposit",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "from",
                "type": "address"
            }, {
                "indexed": true,
                "name": "to",
                "type": "bytes32"
            }, {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }],
            "name": "Deposit",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "from",
                "type": "bytes32"
            }, {
                "indexed": true,
                "name": "to",
                "type": "address"
            }, {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }],
            "name": "Transfer",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "from",
                "type": "bytes32"
            }, {
                "indexed": true,
                "name": "to",
                "type": "address"
            }, {
                "indexed": false,
                "name": "indirectId",
                "type": "bytes32"
            }, {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }],
            "name": "IcapTransfer",
            "type": "event"
        }]
    }, {}],
    4: [function(require, module, exports) {
        var f = require('./formatters');
        var SolidityType = require('./type');
        var SolidityTypeAddress = function() {
            this._inputFormatter = f.formatInputInt;
            this._outputFormatter = f.formatOutputAddress;
        };
        SolidityTypeAddress.prototype = new SolidityType({});
        SolidityTypeAddress.prototype.constructor = SolidityTypeAddress;
        SolidityTypeAddress.prototype.isType = function(name) {
            return !!name.match(/address(\[([0-9]*)\])?/);
        };
        module.exports = SolidityTypeAddress;
    }, {
        "./formatters": 9,
        "./type": 14
    }],
    5: [function(require, module, exports) {
        var f = require('./formatters');
        var SolidityType = require('./type');
        var SolidityTypeBool = function() {
            this._inputFormatter = f.formatInputBool;
            this._outputFormatter = f.formatOutputBool;
        };
        SolidityTypeBool.prototype = new SolidityType({});
        SolidityTypeBool.prototype.constructor = SolidityTypeBool;
        SolidityTypeBool.prototype.isType = function(name) {
            return !!name.match(/^bool(\[([0-9]*)\])*$/);
        };
        module.exports = SolidityTypeBool;
    }, {
        "./formatters": 9,
        "./type": 14
    }],
    6: [function(require, module, exports) {
        var f = require('./formatters');
        var SolidityType = require('./type');
        var SolidityTypeBytes = function() {
            this._inputFormatter = f.formatInputBytes;
            this._outputFormatter = f.formatOutputBytes;
        };
        SolidityTypeBytes.prototype = new SolidityType({});
        SolidityTypeBytes.prototype.constructor = SolidityTypeBytes;
        SolidityTypeBytes.prototype.isType = function(name) {
            return !!name.match(/^bytes([0-9]{1,})(\[([0-9]*)\])*$/);
        };
        module.exports = SolidityTypeBytes;
    }, {
        "./formatters": 9,
        "./type": 14
    }],
    7: [function(require, module, exports) {
        var f = require('./formatters');
        var SolidityTypeAddress = require('./address');
        var SolidityTypeBool = require('./bool');
        var SolidityTypeInt = require('./int');
        var SolidityTypeUInt = require('./uint');
        var SolidityTypeDynamicBytes = require('./dynamicbytes');
        var SolidityTypeString = require('./string');
        var SolidityTypeReal = require('./real');
        var SolidityTypeUReal = require('./ureal');
        var SolidityTypeBytes = require('./bytes');
        var isDynamic = function(solidityType, type) {
            return solidityType.isDynamicType(type) || solidityType.isDynamicArray(type);
        };
        var SolidityCoder = function(types) {
            this._types = types;
        };
        SolidityCoder.prototype._requireType = function(type) {
            var solidityType = this._types.filter(function(t) {
                return t.isType(type);
            })[0];
            if (!solidityType) {
                throw Error('invalid solidity type!: ' + type);
            }
            return solidityType;
        };
        SolidityCoder.prototype.encodeParam = function(type, param) {
            return this.encodeParams([type], [param]);
        };
        SolidityCoder.prototype.encodeParams = function(types, params) {
            var solidityTypes = this.getSolidityTypes(types);
            var encodeds = solidityTypes.map(function(solidityType, index) {
                return solidityType.encode(params[index], types[index]);
            });
            var dynamicOffset = solidityTypes.reduce(function(acc, solidityType, index) {
                var staticPartLength = solidityType.staticPartLength(types[index]);
                var roundedStaticPartLength = Math.floor((staticPartLength + 31) / 32) * 32;
                return acc + (isDynamic(solidityTypes[index], types[index]) ? 32 : roundedStaticPartLength);
            }, 0);
            var result = this.encodeMultiWithOffset(types, solidityTypes, encodeds, dynamicOffset);
            return result;
        };
        SolidityCoder.prototype.encodeMultiWithOffset = function(types, solidityTypes, encodeds, dynamicOffset) {
            var result = "";
            var self = this;
            types.forEach(function(type, i) {
                if (isDynamic(solidityTypes[i], types[i])) {
                    result += f.formatInputInt(dynamicOffset).encode();
                    var e = self.encodeWithOffset(types[i], solidityTypes[i], encodeds[i], dynamicOffset);
                    dynamicOffset += e.length / 2;
                } else {
                    result += self.encodeWithOffset(types[i], solidityTypes[i], encodeds[i], dynamicOffset);
                }
            });
            types.forEach(function(type, i) {
                if (isDynamic(solidityTypes[i], types[i])) {
                    var e = self.encodeWithOffset(types[i], solidityTypes[i], encodeds[i], dynamicOffset);
                    dynamicOffset += e.length / 2;
                    result += e;
                }
            });
            return result;
        };
        SolidityCoder.prototype.encodeWithOffset = function(type, solidityType, encoded, offset) {
            var self = this;
            if (solidityType.isDynamicArray(type)) {
                return (function() {
                    var nestedName = solidityType.nestedName(type);
                    var nestedStaticPartLength = solidityType.staticPartLength(nestedName);
                    var result = encoded[0];
                    (function() {
                        var previousLength = 2;
                        if (solidityType.isDynamicArray(nestedName)) {
                            for (var i = 1; i < encoded.length; i++) {
                                previousLength += +(encoded[i - 1])[0] || 0;
                                result += f.formatInputInt(offset + i * nestedStaticPartLength + previousLength * 32).encode();
                            }
                        }
                    })();
                    (function() {
                        for (var i = 0; i < encoded.length - 1; i++) {
                            var additionalOffset = result / 2;
                            result += self.encodeWithOffset(nestedName, solidityType, encoded[i + 1], offset + additionalOffset);
                        }
                    })();
                    return result;
                })();
            } else if (solidityType.isStaticArray(type)) {
                return (function() {
                    var nestedName = solidityType.nestedName(type);
                    var nestedStaticPartLength = solidityType.staticPartLength(nestedName);
                    var result = "";
                    if (solidityType.isDynamicArray(nestedName)) {
                        (function() {
                            var previousLength = 0;
                            for (var i = 0; i < encoded.length; i++) {
                                previousLength += +(encoded[i - 1] || [])[0] || 0;
                                result += f.formatInputInt(offset + i * nestedStaticPartLength + previousLength * 32).encode();
                            }
                        })();
                    }
                    (function() {
                        for (var i = 0; i < encoded.length; i++) {
                            var additionalOffset = result / 2;
                            result += self.encodeWithOffset(nestedName, solidityType, encoded[i], offset + additionalOffset);
                        }
                    })();
                    return result;
                })();
            }
            return encoded;
        };
        SolidityCoder.prototype.decodeParam = function(type, bytes) {
            return this.decodeParams([type], bytes)[0];
        };
        SolidityCoder.prototype.decodeParams = function(types, bytes) {
            var solidityTypes = this.getSolidityTypes(types);
            var offsets = this.getOffsets(types, solidityTypes);
            return solidityTypes.map(function(solidityType, index) {
                return solidityType.decode(bytes, offsets[index], types[index], index);
            });
        };
        SolidityCoder.prototype.getOffsets = function(types, solidityTypes) {
            var lengths = solidityTypes.map(function(solidityType, index) {
                return solidityType.staticPartLength(types[index]);
            });
            for (var i = 1; i < lengths.length; i++) {
                lengths[i] += lengths[i - 1];
            }
            return lengths.map(function(length, index) {
                var staticPartLength = solidityTypes[index].staticPartLength(types[index]);
                return length - staticPartLength;
            });
        };
        SolidityCoder.prototype.getSolidityTypes = function(types) {
            var self = this;
            return types.map(function(type) {
                return self._requireType(type);
            });
        };
        var coder = new SolidityCoder([new SolidityTypeAddress(), new SolidityTypeBool(), new SolidityTypeInt(), new SolidityTypeUInt(), new SolidityTypeDynamicBytes(), new SolidityTypeBytes(), new SolidityTypeString(), new SolidityTypeReal(), new SolidityTypeUReal()]);
        module.exports = coder;
    }, {
        "./address": 4,
        "./bool": 5,
        "./bytes": 6,
        "./dynamicbytes": 8,
        "./formatters": 9,
        "./int": 10,
        "./real": 12,
        "./string": 13,
        "./uint": 15,
        "./ureal": 16
    }],
    8: [function(require, module, exports) {
        var f = require('./formatters');
        var SolidityType = require('./type');
        var SolidityTypeDynamicBytes = function() {
            this._inputFormatter = f.formatInputDynamicBytes;
            this._outputFormatter = f.formatOutputDynamicBytes;
        };
        SolidityTypeDynamicBytes.prototype = new SolidityType({});
        SolidityTypeDynamicBytes.prototype.constructor = SolidityTypeDynamicBytes;
        SolidityTypeDynamicBytes.prototype.isType = function(name) {
            return !!name.match(/^bytes(\[([0-9]*)\])*$/);
        };
        SolidityTypeDynamicBytes.prototype.isDynamicType = function() {
            return true;
        };
        module.exports = SolidityTypeDynamicBytes;
    }, {
        "./formatters": 9,
        "./type": 14
    }],
    9: [function(require, module, exports) {
        var BigNumber = require('bignumber.js');
        var utils = require('../utils/utils');
        var c = require('../utils/config');
        var SolidityParam = require('./param');
        var formatInputInt = function(value) {
            BigNumber.config(c.ETH_BIGNUMBER_ROUNDING_MODE);
            var result = utils.padLeft(utils.toTwosComplement(value).toString(16), 64);
            return new SolidityParam(result);
        };
        var formatInputBytes = function(value) {
            var result = utils.toHex(value).substr(2);
            var l = Math.floor((result.length + 63) / 64);
            result = utils.padRight(result, l * 64);
            return new SolidityParam(result);
        };
        var formatInputDynamicBytes = function(value) {
            var result = utils.toHex(value).substr(2);
            var length = result.length / 2;
            var l = Math.floor((result.length + 63) / 64);
            result = utils.padRight(result, l * 64);
            return new SolidityParam(formatInputInt(length).value + result);
        };
        var formatInputString = function(value) {
            var result = utils.fromUtf8(value).substr(2);
            var length = result.length / 2;
            var l = Math.floor((result.length + 63) / 64);
            result = utils.padRight(result, l * 64);
            return new SolidityParam(formatInputInt(length).value + result);
        };
        var formatInputBool = function(value) {
            var result = '000000000000000000000000000000000000000000000000000000000000000' + (value ? '1' : '0');
            return new SolidityParam(result);
        };
        var formatInputReal = function(value) {
            return formatInputInt(new BigNumber(value).times(new BigNumber(2).pow(128)));
        };
        var signedIsNegative = function(value) {
            return (new BigNumber(value.substr(0, 1), 16).toString(2).substr(0, 1)) === '1';
        };
        var formatOutputInt = function(param) {
            var value = param.staticPart() || "0";
            if (signedIsNegative(value)) {
                return new BigNumber(value, 16).minus(new BigNumber('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 16)).minus(1);
            }
            return new BigNumber(value, 16);
        };
        var formatOutputUInt = function(param) {
            var value = param.staticPart() || "0";
            return new BigNumber(value, 16);
        };
        var formatOutputReal = function(param) {
            return formatOutputInt(param).dividedBy(new BigNumber(2).pow(128));
        };
        var formatOutputUReal = function(param) {
            return formatOutputUInt(param).dividedBy(new BigNumber(2).pow(128));
        };
        var formatOutputBool = function(param) {
            return param.staticPart() === '0000000000000000000000000000000000000000000000000000000000000001' ? true : false;
        };
        var formatOutputBytes = function(param, name) {
            var matches = name.match(/^bytes([0-9]*)/);
            var size = parseInt(matches[1]);
            return '0x' + param.staticPart().slice(0, 2 * size);
        };
        var formatOutputDynamicBytes = function(param) {
            var length = (new BigNumber(param.dynamicPart().slice(0, 64), 16)).toNumber() * 2;
            return '0x' + param.dynamicPart().substr(64, length);
        };
        var formatOutputString = function(param) {
            var length = (new BigNumber(param.dynamicPart().slice(0, 64), 16)).toNumber() * 2;
            return utils.toUtf8(param.dynamicPart().substr(64, length));
        };
        var formatOutputAddress = function(param) {
            var value = param.staticPart();
            return "0x" + value.slice(value.length - 40, value.length);
        };
        module.exports = {
            formatInputInt: formatInputInt,
            formatInputBytes: formatInputBytes,
            formatInputDynamicBytes: formatInputDynamicBytes,
            formatInputString: formatInputString,
            formatInputBool: formatInputBool,
            formatInputReal: formatInputReal,
            formatOutputInt: formatOutputInt,
            formatOutputUInt: formatOutputUInt,
            formatOutputReal: formatOutputReal,
            formatOutputUReal: formatOutputUReal,
            formatOutputBool: formatOutputBool,
            formatOutputBytes: formatOutputBytes,
            formatOutputDynamicBytes: formatOutputDynamicBytes,
            formatOutputString: formatOutputString,
            formatOutputAddress: formatOutputAddress
        };
    }, {
        "../utils/config": 18,
        "../utils/utils": 20,
        "./param": 11,
        "bignumber.js": "bignumber.js"
    }],
    10: [function(require, module, exports) {
        var f = require('./formatters');
        var SolidityType = require('./type');
        var SolidityTypeInt = function() {
            this._inputFormatter = f.formatInputInt;
            this._outputFormatter = f.formatOutputInt;
        };
        SolidityTypeInt.prototype = new SolidityType({});
        SolidityTypeInt.prototype.constructor = SolidityTypeInt;
        SolidityTypeInt.prototype.isType = function(name) {
            return !!name.match(/^int([0-9]*)?(\[([0-9]*)\])*$/);
        };
        module.exports = SolidityTypeInt;
    }, {
        "./formatters": 9,
        "./type": 14
    }],
    11: [function(require, module, exports) {
        var utils = require('../utils/utils');
        var SolidityParam = function(value, offset) {
            this.value = value || '';
            this.offset = offset;
        };
        SolidityParam.prototype.dynamicPartLength = function() {
            return this.dynamicPart().length / 2;
        };
        SolidityParam.prototype.withOffset = function(offset) {
            return new SolidityParam(this.value, offset);
        };
        SolidityParam.prototype.combine = function(param) {
            return new SolidityParam(this.value + param.value);
        };
        SolidityParam.prototype.isDynamic = function() {
            return this.offset !== undefined;
        };
        SolidityParam.prototype.offsetAsBytes = function() {
            return !this.isDynamic() ? '' : utils.padLeft(utils.toTwosComplement(this.offset).toString(16), 64);
        };
        SolidityParam.prototype.staticPart = function() {
            if (!this.isDynamic()) {
                return this.value;
            }
            return this.offsetAsBytes();
        };
        SolidityParam.prototype.dynamicPart = function() {
            return this.isDynamic() ? this.value : '';
        };
        SolidityParam.prototype.encode = function() {
            return this.staticPart() + this.dynamicPart();
        };
        SolidityParam.encodeList = function(params) {
            var totalOffset = params.length * 32;
            var offsetParams = params.map(function(param) {
                if (!param.isDynamic()) {
                    return param;
                }
                var offset = totalOffset;
                totalOffset += param.dynamicPartLength();
                return param.withOffset(offset);
            });
            return offsetParams.reduce(function(result, param) {
                return result + param.dynamicPart();
            }, offsetParams.reduce(function(result, param) {
                return result + param.staticPart();
            }, ''));
        };
        module.exports = SolidityParam;
    }, {
        "../utils/utils": 20
    }],
    12: [function(require, module, exports) {
        var f = require('./formatters');
        var SolidityType = require('./type');
        var SolidityTypeReal = function() {
            this._inputFormatter = f.formatInputReal;
            this._outputFormatter = f.formatOutputReal;
        };
        SolidityTypeReal.prototype = new SolidityType({});
        SolidityTypeReal.prototype.constructor = SolidityTypeReal;
        SolidityTypeReal.prototype.isType = function(name) {
            return !!name.match(/real([0-9]*)?(\[([0-9]*)\])?/);
        };
        module.exports = SolidityTypeReal;
    }, {
        "./formatters": 9,
        "./type": 14
    }],
    13: [function(require, module, exports) {
        var f = require('./formatters');
        var SolidityType = require('./type');
        var SolidityTypeString = function() {
            this._inputFormatter = f.formatInputString;
            this._outputFormatter = f.formatOutputString;
        };
        SolidityTypeString.prototype = new SolidityType({});
        SolidityTypeString.prototype.constructor = SolidityTypeString;
        SolidityTypeString.prototype.isType = function(name) {
            return !!name.match(/^string(\[([0-9]*)\])*$/);
        };
        SolidityTypeString.prototype.isDynamicType = function() {
            return true;
        };
        module.exports = SolidityTypeString;
    }, {
        "./formatters": 9,
        "./type": 14
    }],
    14: [function(require, module, exports) {
        var f = require('./formatters');
        var SolidityParam = require('./param');
        var SolidityType = function(config) {
            this._inputFormatter = config.inputFormatter;
            this._outputFormatter = config.outputFormatter;
        };
        SolidityType.prototype.isType = function(name) {
            throw "this method should be overrwritten for type " + name;
        };
        SolidityType.prototype.staticPartLength = function(name) {
            return (this.nestedTypes(name) || ['[1]']).map(function(type) {
                return parseInt(type.slice(1, -1), 10) || 1;
            }).reduce(function(previous, current) {
                return previous * current;
            }, 32);
        };
        SolidityType.prototype.isDynamicArray = function(name) {
            var nestedTypes = this.nestedTypes(name);
            return !!nestedTypes && !nestedTypes[nestedTypes.length - 1].match(/[0-9]{1,}/g);
        };
        SolidityType.prototype.isStaticArray = function(name) {
            var nestedTypes = this.nestedTypes(name);
            return !!nestedTypes && !!nestedTypes[nestedTypes.length - 1].match(/[0-9]{1,}/g);
        };
        SolidityType.prototype.staticArrayLength = function(name) {
            var nestedTypes = this.nestedTypes(name);
            if (nestedTypes) {
                return parseInt(nestedTypes[nestedTypes.length - 1].match(/[0-9]{1,}/g) || 1);
            }
            return 1;
        };
        SolidityType.prototype.nestedName = function(name) {
            var nestedTypes = this.nestedTypes(name);
            if (!nestedTypes) {
                return name;
            }
            return name.substr(0, name.length - nestedTypes[nestedTypes.length - 1].length);
        };
        SolidityType.prototype.isDynamicType = function() {
            return false;
        };
        SolidityType.prototype.nestedTypes = function(name) {
            return name.match(/(\[[0-9]*\])/g);
        };
        SolidityType.prototype.encode = function(value, name) {
            var self = this;
            if (this.isDynamicArray(name)) {
                return (function() {
                    var length = value.length;
                    var nestedName = self.nestedName(name);
                    var result = [];
                    result.push(f.formatInputInt(length).encode());
                    value.forEach(function(v) {
                        result.push(self.encode(v, nestedName));
                    });
                    return result;
                })();
            } else if (this.isStaticArray(name)) {
                return (function() {
                    var length = self.staticArrayLength(name);
                    var nestedName = self.nestedName(name);
                    var result = [];
                    for (var i = 0; i < length; i++) {
                        result.push(self.encode(value[i], nestedName));
                    }
                    return result;
                })();
            }
            return this._inputFormatter(value, name).encode();
        };
        SolidityType.prototype.decode = function(bytes, offset, name) {
            var self = this;
            if (this.isDynamicArray(name)) {
                return (function() {
                    var arrayOffset = parseInt('0x' + bytes.substr(offset * 2, 64));
                    var length = parseInt('0x' + bytes.substr(arrayOffset * 2, 64));
                    var arrayStart = arrayOffset + 32;
                    var nestedName = self.nestedName(name);
                    var nestedStaticPartLength = self.staticPartLength(nestedName);
                    var roundedNestedStaticPartLength = Math.floor((nestedStaticPartLength + 31) / 32) * 32;
                    var result = [];
                    for (var i = 0; i < length * roundedNestedStaticPartLength; i += roundedNestedStaticPartLength) {
                        result.push(self.decode(bytes, arrayStart + i, nestedName));
                    }
                    return result;
                })();
            } else if (this.isStaticArray(name)) {
                return (function() {
                    var length = self.staticArrayLength(name);
                    var arrayStart = offset;
                    var nestedName = self.nestedName(name);
                    var nestedStaticPartLength = self.staticPartLength(nestedName);
                    var roundedNestedStaticPartLength = Math.floor((nestedStaticPartLength + 31) / 32) * 32;
                    var result = [];
                    for (var i = 0; i < length * roundedNestedStaticPartLength; i += roundedNestedStaticPartLength) {
                        result.push(self.decode(bytes, arrayStart + i, nestedName));
                    }
                    return result;
                })();
            } else if (this.isDynamicType(name)) {
                return (function() {
                    var dynamicOffset = parseInt('0x' + bytes.substr(offset * 2, 64));
                    var length = parseInt('0x' + bytes.substr(dynamicOffset * 2, 64));
                    var roundedLength = Math.floor((length + 31) / 32);
                    var param = new SolidityParam(bytes.substr(dynamicOffset * 2, (1 + roundedLength) * 64), 0);
                    return self._outputFormatter(param, name);
                })();
            }
            var length = this.staticPartLength(name);
            var param = new SolidityParam(bytes.substr(offset * 2, length * 2));
            return this._outputFormatter(param, name);
        };
        module.exports = SolidityType;
    }, {
        "./formatters": 9,
        "./param": 11
    }],
    15: [function(require, module, exports) {
        var f = require('./formatters');
        var SolidityType = require('./type');
        var SolidityTypeUInt = function() {
            this._inputFormatter = f.formatInputInt;
            this._outputFormatter = f.formatOutputUInt;
        };
        SolidityTypeUInt.prototype = new SolidityType({});
        SolidityTypeUInt.prototype.constructor = SolidityTypeUInt;
        SolidityTypeUInt.prototype.isType = function(name) {
            return !!name.match(/^uint([0-9]*)?(\[([0-9]*)\])*$/);
        };
        module.exports = SolidityTypeUInt;
    }, {
        "./formatters": 9,
        "./type": 14
    }],
    16: [function(require, module, exports) {
        var f = require('./formatters');
        var SolidityType = require('./type');
        var SolidityTypeUReal = function() {
            this._inputFormatter = f.formatInputReal;
            this._outputFormatter = f.formatOutputUReal;
        };
        SolidityTypeUReal.prototype = new SolidityType({});
        SolidityTypeUReal.prototype.constructor = SolidityTypeUReal;
        SolidityTypeUReal.prototype.isType = function(name) {
            return !!name.match(/^ureal([0-9]*)?(\[([0-9]*)\])*$/);
        };
        module.exports = SolidityTypeUReal;
    }, {
        "./formatters": 9,
        "./type": 14
    }],
    17: [function(require, module, exports) {
        'use strict';
        if (typeof XMLHttpRequest === 'undefined') {
            exports.XMLHttpRequest = {};
        } else {
            exports.XMLHttpRequest = XMLHttpRequest;
        }
    }, {}],
    18: [function(require, module, exports) {
        var BigNumber = require('bignumber.js');
        var ETH_UNITS = ['wei', 'kwei', 'Mwei', 'Gwei', 'szabo', 'finney', 'femtoether', 'picoether', 'nanoether', 'microether', 'milliether', 'nano', 'micro', 'milli', 'ether', 'grand', 'Mether', 'Gether', 'Tether', 'Pether', 'Eether', 'Zether', 'Yether', 'Nether', 'Dether', 'Vether', 'Uether'];
        module.exports = {
            ETH_PADDING: 32,
            ETH_SIGNATURE_LENGTH: 4,
            ETH_UNITS: ETH_UNITS,
            ETH_BIGNUMBER_ROUNDING_MODE: {
                ROUNDING_MODE: BigNumber.ROUND_DOWN
            },
            ETH_POLLING_TIMEOUT: 1000 / 2,
            defaultBlock: 'latest',
            defaultAccount: undefined
        };
    }, {
        "bignumber.js": "bignumber.js"
    }],
    19: [function(require, module, exports) {
        var CryptoJS = require('crypto-js');
        var sha3 = require('crypto-js/sha3');
        module.exports = function(value, options) {
            if (options && options.encoding === 'hex') {
                if (value.length > 2 && value.substr(0, 2) === '0x') {
                    value = value.substr(2);
                }
                value = CryptoJS.enc.Hex.parse(value);
            }
            return sha3(value, {
                outputLength: 256
            }).toString();
        };
    }, {
        "crypto-js": 58,
        "crypto-js/sha3": 79
    }],
    20: [function(require, module, exports) {
        var BigNumber = require('bignumber.js');
        var sha3 = require('./sha3.js');
        var utf8 = require('utf8');
        var unitMap = {
            'noether': '0',
            'wei': '1',
            'kwei': '1000',
            'Kwei': '1000',
            'babbage': '1000',
            'femtoether': '1000',
            'mwei': '1000000',
            'Mwei': '1000000',
            'lovelace': '1000000',
            'picoether': '1000000',
            'gwei': '1000000000',
            'Gwei': '1000000000',
            'shannon': '1000000000',
            'nanoether': '1000000000',
            'nano': '1000000000',
            'szabo': '1000000000000',
            'microether': '1000000000000',
            'micro': '1000000000000',
            'finney': '1000000000000000',
            'milliether': '1000000000000000',
            'milli': '1000000000000000',
            'ether': '1000000000000000000',
            'kether': '1000000000000000000000',
            'grand': '1000000000000000000000',
            'mether': '1000000000000000000000000',
            'gether': '1000000000000000000000000000',
            'tether': '1000000000000000000000000000000'
        };
        var padLeft = function(string, chars, sign) {
            return new Array(chars - string.length + 1).join(sign ? sign : "0") + string;
        };
        var padRight = function(string, chars, sign) {
            return string + (new Array(chars - string.length + 1).join(sign ? sign : "0"));
        };
        var toUtf8 = function(hex) {
            var str = "";
            var i = 0,
                l = hex.length;
            if (hex.substring(0, 2) === '0x') {
                i = 2;
            }
            for (; i < l; i += 2) {
                var code = parseInt(hex.substr(i, 2), 16);
                if (code === 0)
                    break;
                str += String.fromCharCode(code);
            }
            return utf8.decode(str);
        };
        var toAscii = function(hex) {
            var str = "";
            var i = 0,
                l = hex.length;
            if (hex.substring(0, 2) === '0x') {
                i = 2;
            }
            for (; i < l; i += 2) {
                var code = parseInt(hex.substr(i, 2), 16);
                str += String.fromCharCode(code);
            }
            return str;
        };
        var fromUtf8 = function(str) {
            str = utf8.encode(str);
            var hex = "";
            for (var i = 0; i < str.length; i++) {
                var code = str.charCodeAt(i);
                if (code === 0)
                    break;
                var n = code.toString(16);
                hex += n.length < 2 ? '0' + n : n;
            }
            return "0x" + hex;
        };
        var fromAscii = function(str) {
            var hex = "";
            for (var i = 0; i < str.length; i++) {
                var code = str.charCodeAt(i);
                var n = code.toString(16);
                hex += n.length < 2 ? '0' + n : n;
            }
            return "0x" + hex;
        };
        var transformToFullName = function(json) {
            if (json.name.indexOf('(') !== -1) {
                return json.name;
            }
            var typeName = json.inputs.map(function(i) {
                return i.type;
            }).join();
            return json.name + '(' + typeName + ')';
        };
        var extractDisplayName = function(name) {
            var length = name.indexOf('(');
            return length !== -1 ? name.substr(0, length) : name;
        };
        var extractTypeName = function(name) {
            var length = name.indexOf('(');
            return length !== -1 ? name.substr(length + 1, name.length - 1 - (length + 1)).replace(' ', '') : "";
        };
        var toDecimal = function(value) {
            return toBigNumber(value).toNumber();
        };
        var fromDecimal = function(value) {
            var number = toBigNumber(value);
            var result = number.toString(16);
            return number.lessThan(0) ? '-0x' + result.substr(1) : '0x' + result;
        };
        var toHex = function(val) {
            if (isBoolean(val))
                return fromDecimal(+val);
            if (isBigNumber(val))
                return fromDecimal(val);
            if (typeof val === 'object')
                return fromUtf8(JSON.stringify(val));
            if (isString(val)) {
                if (val.indexOf('-0x') === 0)
                    return fromDecimal(val);
                else if (val.indexOf('0x') === 0)
                    return val;
                else if (!isFinite(val))
                    return fromAscii(val);
            }
            return fromDecimal(val);
        };
        var getValueOfUnit = function(unit) {
            unit = unit ? unit.toLowerCase() : 'ether';
            var unitValue = unitMap[unit];
            if (unitValue === undefined) {
                throw new Error('This unit doesn\'t exists, please use the one of the following units' + JSON.stringify(unitMap, null, 2));
            }
            return new BigNumber(unitValue, 10);
        };
        var fromWei = function(number, unit) {
            var returnValue = toBigNumber(number).dividedBy(getValueOfUnit(unit));
            return isBigNumber(number) ? returnValue : returnValue.toString(10);
        };
        var toWei = function(number, unit) {
            var returnValue = toBigNumber(number).times(getValueOfUnit(unit));
            return isBigNumber(number) ? returnValue : returnValue.toString(10);
        };
        var toBigNumber = function(number) {
            number = number || 0;
            if (isBigNumber(number))
                return number;
            if (isString(number) && (number.indexOf('0x') === 0 || number.indexOf('-0x') === 0)) {
                return new BigNumber(number.replace('0x', ''), 16);
            }
            return new BigNumber(number.toString(10), 10);
        };
        var toTwosComplement = function(number) {
            var bigNumber = toBigNumber(number).round();
            if (bigNumber.lessThan(0)) {
                return new BigNumber("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16).plus(bigNumber).plus(1);
            }
            return bigNumber;
        };
        var isStrictAddress = function(address) {
            return /^0x[0-9a-f]{40}$/i.test(address);
        };
        var isAddress = function(address) {
            if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
                return false;
            } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
                return true;
            } else {
                return isChecksumAddress(address);
            }
        };
        var isChecksumAddress = function(address) {
            address = address.replace('0x', '');
            var addressHash = sha3(address.toLowerCase());
            for (var i = 0; i < 40; i++) {
                if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) || (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
                    return false;
                }
            }
            return true;
        };
        var toChecksumAddress = function(address) {
            if (typeof address === 'undefined') return '';
            address = address.toLowerCase().replace('0x', '');
            var addressHash = sha3(address);
            var checksumAddress = '0x';
            for (var i = 0; i < address.length; i++) {
                if (parseInt(addressHash[i], 16) > 7) {
                    checksumAddress += address[i].toUpperCase();
                } else {
                    checksumAddress += address[i];
                }
            }
            return checksumAddress;
        };
        var toAddress = function(address) {
            if (isStrictAddress(address)) {
                return address;
            }
            if (/^[0-9a-f]{40}$/.test(address)) {
                return '0x' + address;
            }
            return '0x' + padLeft(toHex(address).substr(2), 40);
        };
        var isBigNumber = function(object) {
            return object instanceof BigNumber || (object && object.constructor && object.constructor.name === 'BigNumber');
        };
        var isString = function(object) {
            return typeof object === 'string' || (object && object.constructor && object.constructor.name === 'String');
        };
        var isFunction = function(object) {
            return typeof object === 'function';
        };
        var isObject = function(object) {
            return object !== null && !(object instanceof Array) && typeof object === 'object';
        };
        var isBoolean = function(object) {
            return typeof object === 'boolean';
        };
        var isArray = function(object) {
            return object instanceof Array;
        };
        var isJson = function(str) {
            try {
                return !!JSON.parse(str);
            } catch (e) {
                return false;
            }
        };
        var isBloom = function(bloom) {
            if (!/^(0x)?[0-9a-f]{512}$/i.test(bloom)) {
                return false;
            } else if (/^(0x)?[0-9a-f]{512}$/.test(bloom) || /^(0x)?[0-9A-F]{512}$/.test(bloom)) {
                return true;
            }
            return false;
        };
        var isTopic = function(topic) {
            if (!/^(0x)?[0-9a-f]{64}$/i.test(topic)) {
                return false;
            } else if (/^(0x)?[0-9a-f]{64}$/.test(topic) || /^(0x)?[0-9A-F]{64}$/.test(topic)) {
                return true;
            }
            return false;
        };
        module.exports = {
            padLeft: padLeft,
            padRight: padRight,
            toHex: toHex,
            toDecimal: toDecimal,
            fromDecimal: fromDecimal,
            toUtf8: toUtf8,
            toAscii: toAscii,
            fromUtf8: fromUtf8,
            fromAscii: fromAscii,
            transformToFullName: transformToFullName,
            extractDisplayName: extractDisplayName,
            extractTypeName: extractTypeName,
            toWei: toWei,
            fromWei: fromWei,
            toBigNumber: toBigNumber,
            toTwosComplement: toTwosComplement,
            toAddress: toAddress,
            isBigNumber: isBigNumber,
            isStrictAddress: isStrictAddress,
            isAddress: isAddress,
            isChecksumAddress: isChecksumAddress,
            toChecksumAddress: toChecksumAddress,
            isFunction: isFunction,
            isString: isString,
            isObject: isObject,
            isBoolean: isBoolean,
            isArray: isArray,
            isJson: isJson,
            isBloom: isBloom,
            isTopic: isTopic,
        };
    }, {
        "./sha3.js": 19,
        "bignumber.js": "bignumber.js",
        "utf8": 84
    }],
    21: [function(require, module, exports) {
        module.exports = {
            "version": "0.20.1"
        }
    }, {}],
    22: [function(require, module, exports) {
        var RequestManager = require('./web3/requestmanager');
        var Iban = require('./web3/iban');
        var Eth = require('./web3/methods/eth');
        var DB = require('./web3/methods/db');
        var Shh = require('./web3/methods/shh');
        var Net = require('./web3/methods/net');
        var Personal = require('./web3/methods/personal');
        var Swarm = require('./web3/methods/swarm');
        var Settings = require('./web3/settings');
        var version = require('./version.json');
        var utils = require('./utils/utils');
        var sha3 = require('./utils/sha3');
        var extend = require('./web3/extend');
        var Batch = require('./web3/batch');
        var Property = require('./web3/property');
        var HttpProvider = require('./web3/httpprovider');
        var IpcProvider = require('./web3/ipcprovider');
        var BigNumber = require('bignumber.js');

        function Web3(provider) {
            this._requestManager = new RequestManager(provider);
            this.currentProvider = provider;
            this.eth = new Eth(this);
            this.db = new DB(this);
            this.shh = new Shh(this);
            this.net = new Net(this);
            this.personal = new Personal(this);
            this.bzz = new Swarm(this);
            this.settings = new Settings();
            this.version = {
                api: version.version
            };
            this.providers = {
                HttpProvider: HttpProvider,
                IpcProvider: IpcProvider
            };
            this._extend = extend(this);
            this._extend({
                properties: properties()
            });
        }
        Web3.providers = {
            HttpProvider: HttpProvider,
            IpcProvider: IpcProvider
        };
        Web3.prototype.setProvider = function(provider) {
            this._requestManager.setProvider(provider);
            this.currentProvider = provider;
        };
        Web3.prototype.reset = function(keepIsSyncing) {
            this._requestManager.reset(keepIsSyncing);
            this.settings = new Settings();
        };
        Web3.prototype.BigNumber = BigNumber;
        Web3.prototype.toHex = utils.toHex;
        Web3.prototype.toAscii = utils.toAscii;
        Web3.prototype.toUtf8 = utils.toUtf8;
        Web3.prototype.fromAscii = utils.fromAscii;
        Web3.prototype.fromUtf8 = utils.fromUtf8;
        Web3.prototype.toDecimal = utils.toDecimal;
        Web3.prototype.fromDecimal = utils.fromDecimal;
        Web3.prototype.toBigNumber = utils.toBigNumber;
        Web3.prototype.toWei = utils.toWei;
        Web3.prototype.fromWei = utils.fromWei;
        Web3.prototype.isAddress = utils.isAddress;
        Web3.prototype.isChecksumAddress = utils.isChecksumAddress;
        Web3.prototype.toChecksumAddress = utils.toChecksumAddress;
        Web3.prototype.isIBAN = utils.isIBAN;
        Web3.prototype.padLeft = utils.padLeft;
        Web3.prototype.padRight = utils.padRight;
        Web3.prototype.sha3 = function(string, options) {
            return '0x' + sha3(string, options);
        };
        Web3.prototype.fromICAP = function(icap) {
            var iban = new Iban(icap);
            return iban.address();
        };
        var properties = function() {
            return [new Property({
                name: 'version.node',
                getter: 'web3_clientVersion'
            }), new Property({
                name: 'version.network',
                getter: 'net_version',
                inputFormatter: utils.toDecimal
            }), new Property({
                name: 'version.ethereum',
                getter: 'eth_protocolVersion',
                inputFormatter: utils.toDecimal
            }), new Property({
                name: 'version.whisper',
                getter: 'shh_version',
                inputFormatter: utils.toDecimal
            })];
        };
        Web3.prototype.isConnected = function() {
            return (this.currentProvider && this.currentProvider.isConnected());
        };
        Web3.prototype.createBatch = function() {
            return new Batch(this);
        };
        module.exports = Web3;
    }, {
        "./utils/sha3": 19,
        "./utils/utils": 20,
        "./version.json": 21,
        "./web3/batch": 24,
        "./web3/extend": 28,
        "./web3/httpprovider": 32,
        "./web3/iban": 33,
        "./web3/ipcprovider": 34,
        "./web3/methods/db": 37,
        "./web3/methods/eth": 38,
        "./web3/methods/net": 39,
        "./web3/methods/personal": 40,
        "./web3/methods/shh": 41,
        "./web3/methods/swarm": 42,
        "./web3/property": 45,
        "./web3/requestmanager": 46,
        "./web3/settings": 47,
        "bignumber.js": "bignumber.js"
    }],
    23: [function(require, module, exports) {
        var sha3 = require('../utils/sha3');
        var SolidityEvent = require('./event');
        var formatters = require('./formatters');
        var utils = require('../utils/utils');
        var Filter = require('./filter');
        var watches = require('./methods/watches');
        var AllSolidityEvents = function(requestManager, json, address) {
            this._requestManager = requestManager;
            this._json = json;
            this._address = address;
        };
        AllSolidityEvents.prototype.encode = function(options) {
            options = options || {};
            var result = {};
            ['fromBlock', 'toBlock'].filter(function(f) {
                return options[f] !== undefined;
            }).forEach(function(f) {
                result[f] = formatters.inputBlockNumberFormatter(options[f]);
            });
            result.address = this._address;
            return result;
        };
        AllSolidityEvents.prototype.decode = function(data) {
            data.data = data.data || '';
            data.topics = data.topics || [];
            var eventTopic = data.topics[0].slice(2);
            var match = this._json.filter(function(j) {
                return eventTopic === sha3(utils.transformToFullName(j));
            })[0];
            if (!match) {
                console.warn('cannot find event for log');
                return data;
            }
            var event = new SolidityEvent(this._requestManager, match, this._address);
            return event.decode(data);
        };
        AllSolidityEvents.prototype.execute = function(options, callback) {
            if (utils.isFunction(arguments[arguments.length - 1])) {
                callback = arguments[arguments.length - 1];
                if (arguments.length === 1)
                    options = null;
            }
            var o = this.encode(options);
            var formatter = this.decode.bind(this);
            return new Filter(o, 'eth', this._requestManager, watches.eth(), formatter, callback);
        };
        AllSolidityEvents.prototype.attachToContract = function(contract) {
            var execute = this.execute.bind(this);
            contract.allEvents = execute;
        };
        module.exports = AllSolidityEvents;
    }, {
        "../utils/sha3": 19,
        "../utils/utils": 20,
        "./event": 27,
        "./filter": 29,
        "./formatters": 30,
        "./methods/watches": 43
    }],
    24: [function(require, module, exports) {
        var Jsonrpc = require('./jsonrpc');
        var errors = require('./errors');
        var Batch = function(web3) {
            this.requestManager = web3._requestManager;
            this.requests = [];
        };
        Batch.prototype.add = function(request) {
            this.requests.push(request);
        };
        Batch.prototype.execute = function() {
            var requests = this.requests;
            this.requestManager.sendBatch(requests, function(err, results) {
                results = results || [];
                requests.map(function(request, index) {
                    return results[index] || {};
                }).forEach(function(result, index) {
                    if (requests[index].callback) {
                        if (!Jsonrpc.isValidResponse(result)) {
                            return requests[index].callback(errors.InvalidResponse(result));
                        }
                        requests[index].callback(null, (requests[index].format ? requests[index].format(result.result) : result.result));
                    }
                });
            });
        };
        module.exports = Batch;
    }, {
        "./errors": 26,
        "./jsonrpc": 35
    }],
    25: [function(require, module, exports) {
        var utils = require('../utils/utils');
        var coder = require('../solidity/coder');
        var SolidityEvent = require('./event');
        var SolidityFunction = require('./function');
        var AllEvents = require('./allevents');
        var encodeConstructorParams = function(abi, params) {
            return abi.filter(function(json) {
                return json.type === 'constructor' && json.inputs.length === params.length;
            }).map(function(json) {
                return json.inputs.map(function(input) {
                    return input.type;
                });
            }).map(function(types) {
                return coder.encodeParams(types, params);
            })[0] || '';
        };
        var addFunctionsToContract = function(contract) {
            contract.abi.filter(function(json) {
                return json.type === 'function';
            }).map(function(json) {
                return new SolidityFunction(contract._eth, json, contract.address);
            }).forEach(function(f) {
                f.attachToContract(contract);
            });
        };
        var addEventsToContract = function(contract) {
            var events = contract.abi.filter(function(json) {
                return json.type === 'event';
            });
            var All = new AllEvents(contract._eth._requestManager, events, contract.address);
            All.attachToContract(contract);
            events.map(function(json) {
                return new SolidityEvent(contract._eth._requestManager, json, contract.address);
            }).forEach(function(e) {
                e.attachToContract(contract);
            });
        };
        var checkForContractAddress = function(contract, callback) {
            var count = 0,
                callbackFired = false;
            var filter = contract._eth.filter('latest', function(e) {
                if (!e && !callbackFired) {
                    count++;
                    if (count > 50) {
                        filter.stopWatching(function() {});
                        callbackFired = true;
                        if (callback)
                            callback(new Error('Contract transaction couldn\'t be found after 50 blocks'));
                        else
                            throw new Error('Contract transaction couldn\'t be found after 50 blocks');
                    } else {
                        contract._eth.getTransactionReceipt(contract.transactionHash, function(e, receipt) {
                            if (receipt && !callbackFired) {
                                contract._eth.getCode(receipt.contractAddress, function(e, code) {
                                    if (callbackFired || !code)
                                        return;
                                    filter.stopWatching(function() {});
                                    callbackFired = true;
                                    if (code.length > 3) {
                                        contract.address = receipt.contractAddress;
                                        addFunctionsToContract(contract);
                                        addEventsToContract(contract);
                                        if (callback)
                                            callback(null, contract);
                                    } else {
                                        if (callback)
                                            callback(new Error('The contract code couldn\'t be stored, please check your gas amount.'));
                                        else
                                            throw new Error('The contract code couldn\'t be stored, please check your gas amount.');
                                    }
                                });
                            }
                        });
                    }
                }
            });
        };
        var ContractFactory = function(eth, abi) {
            this.eth = eth;
            this.abi = abi;
            this.new = function() {
                var contract = new Contract(this.eth, this.abi);
                var options = {};
                var callback;
                var args = Array.prototype.slice.call(arguments);
                if (utils.isFunction(args[args.length - 1])) {
                    callback = args.pop();
                }
                var last = args[args.length - 1];
                if (utils.isObject(last) && !utils.isArray(last)) {
                    options = args.pop();
                }
                if (options.value > 0) {
                    var constructorAbi = abi.filter(function(json) {
                        return json.type === 'constructor' && json.inputs.length === args.length;
                    })[0] || {};
                    if (!constructorAbi.payable) {
                        throw new Error('Cannot send value to non-payable constructor');
                    }
                }
                var bytes = encodeConstructorParams(this.abi, args);
                options.data += bytes;
                if (callback) {
                    this.eth.sendTransaction(options, function(err, hash) {
                        if (err) {
                            callback(err);
                        } else {
                            contract.transactionHash = hash;
                            callback(null, contract);
                            checkForContractAddress(contract, callback);
                        }
                    });
                } else {
                    var hash = this.eth.sendTransaction(options);
                    contract.transactionHash = hash;
                    checkForContractAddress(contract);
                }
                return contract;
            };
            this.new.getData = this.getData.bind(this);
        };
        ContractFactory.prototype.at = function(address, callback) {
            var contract = new Contract(this.eth, this.abi, address);
            addFunctionsToContract(contract);
            addEventsToContract(contract);
            if (callback) {
                callback(null, contract);
            }
            return contract;
        };
        ContractFactory.prototype.getData = function() {
            var options = {};
            var args = Array.prototype.slice.call(arguments);
            var last = args[args.length - 1];
            if (utils.isObject(last) && !utils.isArray(last)) {
                options = args.pop();
            }
            var bytes = encodeConstructorParams(this.abi, args);
            options.data += bytes;
            return options.data;
        };
        var Contract = function(eth, abi, address) {
            this._eth = eth;
            this.transactionHash = null;
            this.address = address;
            this.abi = abi;
        };
        module.exports = ContractFactory;
    }, {
        "../solidity/coder": 7,
        "../utils/utils": 20,
        "./allevents": 23,
        "./event": 27,
        "./function": 31
    }],
    26: [function(require, module, exports) {
        module.exports = {
            InvalidNumberOfSolidityArgs: function() {
                return new Error('Invalid number of arguments to Solidity function');
            },
            InvalidNumberOfRPCParams: function() {
                return new Error('Invalid number of input parameters to RPC method');
            },
            InvalidConnection: function(host) {
                return new Error('CONNECTION ERROR: Couldn\'t connect to node ' + host + '.');
            },
            InvalidProvider: function() {
                return new Error('Provider not set or invalid');
            },
            InvalidResponse: function(result) {
                var message = !!result && !!result.error && !!result.error.message ? result.error.message : 'Invalid JSON RPC response: ' + JSON.stringify(result);
                return new Error(message);
            },
            ConnectionTimeout: function(ms) {
                return new Error('CONNECTION TIMEOUT: timeout of ' + ms + ' ms achived');
            }
        };
    }, {}],
    27: [function(require, module, exports) {
        var utils = require('../utils/utils');
        var coder = require('../solidity/coder');
        var formatters = require('./formatters');
        var sha3 = require('../utils/sha3');
        var Filter = require('./filter');
        var watches = require('./methods/watches');
        var SolidityEvent = function(requestManager, json, address) {
            this._requestManager = requestManager;
            this._params = json.inputs;
            this._name = utils.transformToFullName(json);
            this._address = address;
            this._anonymous = json.anonymous;
        };
        SolidityEvent.prototype.types = function(indexed) {
            return this._params.filter(function(i) {
                return i.indexed === indexed;
            }).map(function(i) {
                return i.type;
            });
        };
        SolidityEvent.prototype.displayName = function() {
            return utils.extractDisplayName(this._name);
        };
        SolidityEvent.prototype.typeName = function() {
            return utils.extractTypeName(this._name);
        };
        SolidityEvent.prototype.signature = function() {
            return sha3(this._name);
        };
        SolidityEvent.prototype.encode = function(indexed, options) {
            indexed = indexed || {};
            options = options || {};
            var result = {};
            ['fromBlock', 'toBlock'].filter(function(f) {
                return options[f] !== undefined;
            }).forEach(function(f) {
                result[f] = formatters.inputBlockNumberFormatter(options[f]);
            });
            result.topics = [];
            result.address = this._address;
            if (!this._anonymous) {
                result.topics.push('0x' + this.signature());
            }
            var indexedTopics = this._params.filter(function(i) {
                return i.indexed === true;
            }).map(function(i) {
                var value = indexed[i.name];
                if (value === undefined || value === null) {
                    return null;
                }
                if (utils.isArray(value)) {
                    return value.map(function(v) {
                        return '0x' + coder.encodeParam(i.type, v);
                    });
                }
                return '0x' + coder.encodeParam(i.type, value);
            });
            result.topics = result.topics.concat(indexedTopics);
            return result;
        };
        SolidityEvent.prototype.decode = function(data) {
            data.data = data.data || '';
            data.topics = data.topics || [];
            var argTopics = this._anonymous ? data.topics : data.topics.slice(1);
            var indexedData = argTopics.map(function(topics) {
                return topics.slice(2);
            }).join("");
            var indexedParams = coder.decodeParams(this.types(true), indexedData);
            var notIndexedData = data.data.slice(2);
            var notIndexedParams = coder.decodeParams(this.types(false), notIndexedData);
            var result = formatters.outputLogFormatter(data);
            result.event = this.displayName();
            result.address = data.address;
            result.args = this._params.reduce(function(acc, current) {
                acc[current.name] = current.indexed ? indexedParams.shift() : notIndexedParams.shift();
                return acc;
            }, {});
            delete result.data;
            delete result.topics;
            return result;
        };
        SolidityEvent.prototype.execute = function(indexed, options, callback) {
            if (utils.isFunction(arguments[arguments.length - 1])) {
                callback = arguments[arguments.length - 1];
                if (arguments.length === 2)
                    options = null;
                if (arguments.length === 1) {
                    options = null;
                    indexed = {};
                }
            }
            var o = this.encode(indexed, options);
            var formatter = this.decode.bind(this);
            return new Filter(o, 'eth', this._requestManager, watches.eth(), formatter, callback);
        };
        SolidityEvent.prototype.attachToContract = function(contract) {
            var execute = this.execute.bind(this);
            var displayName = this.displayName();
            if (!contract[displayName]) {
                contract[displayName] = execute;
            }
            contract[displayName][this.typeName()] = this.execute.bind(this, contract);
        };
        module.exports = SolidityEvent;
    }, {
        "../solidity/coder": 7,
        "../utils/sha3": 19,
        "../utils/utils": 20,
        "./filter": 29,
        "./formatters": 30,
        "./methods/watches": 43
    }],
    28: [function(require, module, exports) {
        var formatters = require('./formatters');
        var utils = require('./../utils/utils');
        var Method = require('./method');
        var Property = require('./property');
        var extend = function(web3) {
            var ex = function(extension) {
                var extendedObject;
                if (extension.property) {
                    if (!web3[extension.property]) {
                        web3[extension.property] = {};
                    }
                    extendedObject = web3[extension.property];
                } else {
                    extendedObject = web3;
                }
                if (extension.methods) {
                    extension.methods.forEach(function(method) {
                        method.attachToObject(extendedObject);
                        method.setRequestManager(web3._requestManager);
                    });
                }
                if (extension.properties) {
                    extension.properties.forEach(function(property) {
                        property.attachToObject(extendedObject);
                        property.setRequestManager(web3._requestManager);
                    });
                }
            };
            ex.formatters = formatters;
            ex.utils = utils;
            ex.Method = Method;
            ex.Property = Property;
            return ex;
        };
        module.exports = extend;
    }, {
        "./../utils/utils": 20,
        "./formatters": 30,
        "./method": 36,
        "./property": 45
    }],
    29: [function(require, module, exports) {
        var formatters = require('./formatters');
        var utils = require('../utils/utils');
        var toTopic = function(value) {
            if (value === null || typeof value === 'undefined')
                return null;
            value = String(value);
            if (value.indexOf('0x') === 0)
                return value;
            else
                return utils.fromUtf8(value);
        };
        var getOptions = function(options, type) {
            if (utils.isString(options)) {
                return options;
            }
            options = options || {};
            switch (type) {
                case 'eth':
                    options.topics = options.topics || [];
                    options.topics = options.topics.map(function(topic) {
                        return (utils.isArray(topic)) ? topic.map(toTopic) : toTopic(topic);
                    });
                    return {
                        topics: options.topics,
                        from: options.from,
                        to: options.to,
                        address: options.address,
                        fromBlock: formatters.inputBlockNumberFormatter(options.fromBlock),
                        toBlock: formatters.inputBlockNumberFormatter(options.toBlock)
                    };
                case 'shh':
                    return options;
            }
        };
        var getLogsAtStart = function(self, callback) {
            if (!utils.isString(self.options)) {
                self.get(function(err, messages) {
                    if (err) {
                        callback(err);
                    }
                    if (utils.isArray(messages)) {
                        messages.forEach(function(message) {
                            callback(null, message);
                        });
                    }
                });
            }
        };
        var pollFilter = function(self) {
            var onMessage = function(error, messages) {
                if (error) {
                    return self.callbacks.forEach(function(callback) {
                        callback(error);
                    });
                }
                if (utils.isArray(messages)) {
                    messages.forEach(function(message) {
                        message = self.formatter ? self.formatter(message) : message;
                        self.callbacks.forEach(function(callback) {
                            callback(null, message);
                        });
                    });
                }
            };
            self.requestManager.startPolling({
                method: self.implementation.poll.call,
                params: [self.filterId],
            }, self.filterId, onMessage, self.stopWatching.bind(self));
        };
        var Filter = function(options, type, requestManager, methods, formatter, callback, filterCreationErrorCallback) {
            var self = this;
            var implementation = {};
            methods.forEach(function(method) {
                method.setRequestManager(requestManager);
                method.attachToObject(implementation);
            });
            this.requestManager = requestManager;
            this.options = getOptions(options, type);
            this.implementation = implementation;
            this.filterId = null;
            this.callbacks = [];
            this.getLogsCallbacks = [];
            this.pollFilters = [];
            this.formatter = formatter;
            this.implementation.newFilter(this.options, function(error, id) {
                if (error) {
                    self.callbacks.forEach(function(cb) {
                        cb(error);
                    });
                    if (typeof filterCreationErrorCallback === 'function') {
                        filterCreationErrorCallback(error);
                    }
                } else {
                    self.filterId = id;
                    self.getLogsCallbacks.forEach(function(cb) {
                        self.get(cb);
                    });
                    self.getLogsCallbacks = [];
                    self.callbacks.forEach(function(cb) {
                        getLogsAtStart(self, cb);
                    });
                    if (self.callbacks.length > 0)
                        pollFilter(self);
                    if (typeof callback === 'function') {
                        return self.watch(callback);
                    }
                }
            });
            return this;
        };
        Filter.prototype.watch = function(callback) {
            this.callbacks.push(callback);
            if (this.filterId) {
                getLogsAtStart(this, callback);
                pollFilter(this);
            }
            return this;
        };
        Filter.prototype.stopWatching = function(callback) {
            this.requestManager.stopPolling(this.filterId);
            this.callbacks = [];
            if (callback) {
                this.implementation.uninstallFilter(this.filterId, callback);
            } else {
                return this.implementation.uninstallFilter(this.filterId);
            }
        };
        Filter.prototype.get = function(callback) {
            var self = this;
            if (utils.isFunction(callback)) {
                if (this.filterId === null) {
                    this.getLogsCallbacks.push(callback);
                } else {
                    this.implementation.getLogs(this.filterId, function(err, res) {
                        if (err) {
                            callback(err);
                        } else {
                            callback(null, res.map(function(log) {
                                return self.formatter ? self.formatter(log) : log;
                            }));
                        }
                    });
                }
            } else {
                if (this.filterId === null) {
                    throw new Error('Filter ID Error: filter().get() can\'t be chained synchronous, please provide a callback for the get() method.');
                }
                var logs = this.implementation.getLogs(this.filterId);
                return logs.map(function(log) {
                    return self.formatter ? self.formatter(log) : log;
                });
            }
            return this;
        };
        module.exports = Filter;
    }, {
        "../utils/utils": 20,
        "./formatters": 30
    }],
    30: [function(require, module, exports) {
        'use strict'
        var utils = require('../utils/utils');
        var config = require('../utils/config');
        var Iban = require('./iban');
        var outputBigNumberFormatter = function(number) {
            return utils.toBigNumber(number);
        };
        var isPredefinedBlockNumber = function(blockNumber) {
            return blockNumber === 'latest' || blockNumber === 'pending' || blockNumber === 'earliest';
        };
        var inputDefaultBlockNumberFormatter = function(blockNumber) {
            if (blockNumber === undefined) {
                return config.defaultBlock;
            }
            return inputBlockNumberFormatter(blockNumber);
        };
        var inputBlockNumberFormatter = function(blockNumber) {
            if (blockNumber === undefined) {
                return undefined;
            } else if (isPredefinedBlockNumber(blockNumber)) {
                return blockNumber;
            }
            return utils.toHex(blockNumber);
        };
        var inputCallFormatter = function(options) {
            options.from = options.from || config.defaultAccount;
            if (options.from) {
                options.from = inputAddressFormatter(options.from);
            }
            if (options.to) {
                options.to = inputAddressFormatter(options.to);
            }
            ['gasPrice', 'gas', 'value', 'nonce'].filter(function(key) {
                return options[key] !== undefined;
            }).forEach(function(key) {
                options[key] = utils.fromDecimal(options[key]);
            });
            return options;
        };
        var inputTransactionFormatter = function(options) {
            options.from = options.from || config.defaultAccount;
            options.from = inputAddressFormatter(options.from);
            if (options.to) {
                options.to = inputAddressFormatter(options.to);
            }
            ['gasPrice', 'gas', 'value', 'nonce'].filter(function(key) {
                return options[key] !== undefined;
            }).forEach(function(key) {
                options[key] = utils.fromDecimal(options[key]);
            });
            return options;
        };
        var outputTransactionFormatter = function(tx) {
            if (tx.blockNumber !== null)
                tx.blockNumber = utils.toDecimal(tx.blockNumber);
            if (tx.transactionIndex !== null)
                tx.transactionIndex = utils.toDecimal(tx.transactionIndex);
            tx.nonce = utils.toDecimal(tx.nonce);
            tx.gas = utils.toDecimal(tx.gas);
            tx.gasPrice = utils.toBigNumber(tx.gasPrice);
            tx.value = utils.toBigNumber(tx.value);
            return tx;
        };
        var outputTransactionReceiptFormatter = function(receipt) {
            if (receipt.blockNumber !== null)
                receipt.blockNumber = utils.toDecimal(receipt.blockNumber);
            if (receipt.transactionIndex !== null)
                receipt.transactionIndex = utils.toDecimal(receipt.transactionIndex);
            receipt.cumulativeGasUsed = utils.toDecimal(receipt.cumulativeGasUsed);
            receipt.gasUsed = utils.toDecimal(receipt.gasUsed);
            if (utils.isArray(receipt.logs)) {
                receipt.logs = receipt.logs.map(function(log) {
                    return outputLogFormatter(log);
                });
            }
            return receipt;
        };
        var outputBlockFormatter = function(block) {
            block.gasLimit = utils.toDecimal(block.gasLimit);
            block.gasUsed = utils.toDecimal(block.gasUsed);
            block.size = utils.toDecimal(block.size);
            block.timestamp = utils.toDecimal(block.timestamp);
            if (block.number !== null)
                block.number = utils.toDecimal(block.number);
            block.difficulty = utils.toBigNumber(block.difficulty);
            block.totalDifficulty = utils.toBigNumber(block.totalDifficulty);
            if (utils.isArray(block.transactions)) {
                block.transactions.forEach(function(item) {
                    if (!utils.isString(item))
                        return outputTransactionFormatter(item);
                });
            }
            return block;
        };
        var outputLogFormatter = function(log) {
            if (log.blockNumber)
                log.blockNumber = utils.toDecimal(log.blockNumber);
            if (log.transactionIndex)
                log.transactionIndex = utils.toDecimal(log.transactionIndex);
            if (log.logIndex)
                log.logIndex = utils.toDecimal(log.logIndex);
            return log;
        };
        var inputPostFormatter = function(post) {
            post.ttl = utils.fromDecimal(post.ttl);
            post.workToProve = utils.fromDecimal(post.workToProve);
            post.priority = utils.fromDecimal(post.priority);
            if (!utils.isArray(post.topics)) {
                post.topics = post.topics ? [post.topics] : [];
            }
            post.topics = post.topics.map(function(topic) {
                return (topic.indexOf('0x') === 0) ? topic : utils.fromUtf8(topic);
            });
            return post;
        };
        var outputPostFormatter = function(post) {
            post.expiry = utils.toDecimal(post.expiry);
            post.sent = utils.toDecimal(post.sent);
            post.ttl = utils.toDecimal(post.ttl);
            post.workProved = utils.toDecimal(post.workProved);
            if (!post.topics) {
                post.topics = [];
            }
            post.topics = post.topics.map(function(topic) {
                return utils.toAscii(topic);
            });
            return post;
        };
        var inputAddressFormatter = function(address) {
            var iban = new Iban(address);
            if (iban.isValid() && iban.isDirect()) {
                return '0x' + iban.address();
            } else if (utils.isStrictAddress(address)) {
                return address;
            } else if (utils.isAddress(address)) {
                return '0x' + address;
            }
            throw new Error('invalid address');
        };
        var outputSyncingFormatter = function(result) {
            if (!result) {
                return result;
            }
            result.startingBlock = utils.toDecimal(result.startingBlock);
            result.currentBlock = utils.toDecimal(result.currentBlock);
            result.highestBlock = utils.toDecimal(result.highestBlock);
            if (result.knownStates) {
                result.knownStates = utils.toDecimal(result.knownStates);
                result.pulledStates = utils.toDecimal(result.pulledStates);
            }
            return result;
        };
        module.exports = {
            inputDefaultBlockNumberFormatter: inputDefaultBlockNumberFormatter,
            inputBlockNumberFormatter: inputBlockNumberFormatter,
            inputCallFormatter: inputCallFormatter,
            inputTransactionFormatter: inputTransactionFormatter,
            inputAddressFormatter: inputAddressFormatter,
            inputPostFormatter: inputPostFormatter,
            outputBigNumberFormatter: outputBigNumberFormatter,
            outputTransactionFormatter: outputTransactionFormatter,
            outputTransactionReceiptFormatter: outputTransactionReceiptFormatter,
            outputBlockFormatter: outputBlockFormatter,
            outputLogFormatter: outputLogFormatter,
            outputPostFormatter: outputPostFormatter,
            outputSyncingFormatter: outputSyncingFormatter
        };
    }, {
        "../utils/config": 18,
        "../utils/utils": 20,
        "./iban": 33
    }],
    31: [function(require, module, exports) {
        var coder = require('../solidity/coder');
        var utils = require('../utils/utils');
        var errors = require('./errors');
        var formatters = require('./formatters');
        var sha3 = require('../utils/sha3');
        var SolidityFunction = function(eth, json, address) {
            this._eth = eth;
            this._inputTypes = json.inputs.map(function(i) {
                return i.type;
            });
            this._outputTypes = json.outputs.map(function(i) {
                return i.type;
            });
            this._constant = json.constant;
            this._payable = json.payable;
            this._name = utils.transformToFullName(json);
            this._address = address;
        };
        SolidityFunction.prototype.extractCallback = function(args) {
            if (utils.isFunction(args[args.length - 1])) {
                return args.pop();
            }
        };
        SolidityFunction.prototype.extractDefaultBlock = function(args) {
            if (args.length > this._inputTypes.length && !utils.isObject(args[args.length - 1])) {
                return formatters.inputDefaultBlockNumberFormatter(args.pop());
            }
        };
        SolidityFunction.prototype.validateArgs = function(args) {
            var inputArgs = args.filter(function(a) {
                return !((utils.isObject(a) === true) && (utils.isArray(a) === false) && (utils.isBigNumber(a) === false));
            });
            if (inputArgs.length !== this._inputTypes.length) {
                throw errors.InvalidNumberOfSolidityArgs();
            }
        };
        SolidityFunction.prototype.toPayload = function(args) {
            var options = {};
            if (args.length > this._inputTypes.length && utils.isObject(args[args.length - 1])) {
                options = args[args.length - 1];
            }
            this.validateArgs(args);
            options.to = this._address;
            options.data = '0x' + this.signature() + coder.encodeParams(this._inputTypes, args);
            return options;
        };
        SolidityFunction.prototype.signature = function() {
            return sha3(this._name).slice(0, 8);
        };
        SolidityFunction.prototype.unpackOutput = function(output) {
            if (!output) {
                return;
            }
            output = output.length >= 2 ? output.slice(2) : output;
            var result = coder.decodeParams(this._outputTypes, output);
            return result.length === 1 ? result[0] : result;
        };
        SolidityFunction.prototype.call = function() {
            var args = Array.prototype.slice.call(arguments).filter(function(a) {
                return a !== undefined;
            });
            var callback = this.extractCallback(args);
            var defaultBlock = this.extractDefaultBlock(args);
            var payload = this.toPayload(args);
            if (!callback) {
                var output = this._eth.call(payload, defaultBlock);
                return this.unpackOutput(output);
            }
            var self = this;
            this._eth.call(payload, defaultBlock, function(error, output) {
                if (error) return callback(error, null);
                var unpacked = null;
                try {
                    unpacked = self.unpackOutput(output);
                } catch (e) {
                    error = e;
                }
                callback(error, unpacked);
            });
        };
        SolidityFunction.prototype.sendTransaction = function() {
            var args = Array.prototype.slice.call(arguments).filter(function(a) {
                return a !== undefined;
            });
            var callback = this.extractCallback(args);
            var payload = this.toPayload(args);
            if (payload.value > 0 && !this._payable) {
                throw new Error('Cannot send value to non-payable function');
            }
            if (!callback) {
                return this._eth.sendTransaction(payload);
            }
            this._eth.sendTransaction(payload, callback);
        };
        SolidityFunction.prototype.estimateGas = function() {
            var args = Array.prototype.slice.call(arguments);
            var callback = this.extractCallback(args);
            var payload = this.toPayload(args);
            if (!callback) {
                return this._eth.estimateGas(payload);
            }
            this._eth.estimateGas(payload, callback);
        };
        SolidityFunction.prototype.getData = function() {
            var args = Array.prototype.slice.call(arguments);
            var payload = this.toPayload(args);
            return payload.data;
        };
        SolidityFunction.prototype.displayName = function() {
            return utils.extractDisplayName(this._name);
        };
        SolidityFunction.prototype.typeName = function() {
            return utils.extractTypeName(this._name);
        };
        SolidityFunction.prototype.request = function() {
            var args = Array.prototype.slice.call(arguments);
            var callback = this.extractCallback(args);
            var payload = this.toPayload(args);
            var format = this.unpackOutput.bind(this);
            return {
                method: this._constant ? 'eth_call' : 'eth_sendTransaction',
                callback: callback,
                params: [payload],
                format: format
            };
        };
        SolidityFunction.prototype.execute = function() {
            var transaction = !this._constant;
            if (transaction) {
                return this.sendTransaction.apply(this, Array.prototype.slice.call(arguments));
            }
            return this.call.apply(this, Array.prototype.slice.call(arguments));
        };
        SolidityFunction.prototype.attachToContract = function(contract) {
            var execute = this.execute.bind(this);
            execute.request = this.request.bind(this);
            execute.call = this.call.bind(this);
            execute.sendTransaction = this.sendTransaction.bind(this);
            execute.estimateGas = this.estimateGas.bind(this);
            execute.getData = this.getData.bind(this);
            var displayName = this.displayName();
            if (!contract[displayName]) {
                contract[displayName] = execute;
            }
            contract[displayName][this.typeName()] = execute;
        };
        module.exports = SolidityFunction;
    }, {
        "../solidity/coder": 7,
        "../utils/sha3": 19,
        "../utils/utils": 20,
        "./errors": 26,
        "./formatters": 30
    }],
    32: [function(require, module, exports) {
        var errors = require('./errors');
        if (typeof window !== 'undefined' && window.XMLHttpRequest) {
            XMLHttpRequest = window.XMLHttpRequest;
        } else {
            XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
        }
        var XHR2 = require('xhr2');
        var HttpProvider = function(host, timeout, user, password) {
            this.host = host || 'http://localhost:8545';
            this.timeout = timeout || 0;
            this.user = user;
            this.password = password;
        };
        HttpProvider.prototype.prepareRequest = function(async) {
            var request;
            if (async) {
                request = new XHR2();
                request.timeout = this.timeout;
            } else {
                request = new XMLHttpRequest();
            }
            request.open('POST', this.host, async);
            if (this.user && this.password) {
                var auth = 'Basic ' + new Buffer(this.user + ':' + this.password).toString('base64');
                request.setRequestHeader('Authorization', auth);
            }
            request.setRequestHeader('Content-Type', 'application/json');
            return request;
        };
        HttpProvider.prototype.send = function(payload) {
            var request = this.prepareRequest(false);
            try {
                request.send(JSON.stringify(payload));
            } catch (error) {
                throw errors.InvalidConnection(this.host);
            }
            var result = request.responseText;
            try {
                result = JSON.parse(result);
            } catch (e) {
                throw errors.InvalidResponse(request.responseText);
            }
            return result;
        };
        HttpProvider.prototype.sendAsync = function(payload, callback) {
            var request = this.prepareRequest(true);
            request.onreadystatechange = function() {
                if (request.readyState === 4 && request.timeout !== 1) {
                    var result = request.responseText;
                    var error = null;
                    try {
                        result = JSON.parse(result);
                    } catch (e) {
                        error = errors.InvalidResponse(request.responseText);
                    }
                    callback(error, result);
                }
            };
            request.ontimeout = function() {
                callback(errors.ConnectionTimeout(this.timeout));
            };
            try {
                request.send(JSON.stringify(payload));
            } catch (error) {
                callback(errors.InvalidConnection(this.host));
            }
        };
        HttpProvider.prototype.isConnected = function() {
            try {
                this.send({
                    id: 9999999999,
                    jsonrpc: '2.0',
                    method: 'net_listening',
                    params: []
                });
                return true;
            } catch (e) {
                return false;
            }
        };
        module.exports = HttpProvider;
    }, {
        "./errors": 26,
        "xhr2": 85,
        "xmlhttprequest": 17
    }],
    33: [function(require, module, exports) {
        var BigNumber = require('bignumber.js');
        var padLeft = function(string, bytes) {
            var result = string;
            while (result.length < bytes * 2) {
                result = '0' + result;
            }
            return result;
        };
        var iso13616Prepare = function(iban) {
            var A = 'A'.charCodeAt(0);
            var Z = 'Z'.charCodeAt(0);
            iban = iban.toUpperCase();
            iban = iban.substr(4) + iban.substr(0, 4);
            return iban.split('').map(function(n) {
                var code = n.charCodeAt(0);
                if (code >= A && code <= Z) {
                    return code - A + 10;
                } else {
                    return n;
                }
            }).join('');
        };
        var mod9710 = function(iban) {
            var remainder = iban,
                block;
            while (remainder.length > 2) {
                block = remainder.slice(0, 9);
                remainder = parseInt(block, 10) % 97 + remainder.slice(block.length);
            }
            return parseInt(remainder, 10) % 97;
        };
        var Iban = function(iban) {
            this._iban = iban;
        };
        Iban.fromAddress = function(address) {
            var asBn = new BigNumber(address, 16);
            var base36 = asBn.toString(36);
            var padded = padLeft(base36, 15);
            return Iban.fromBban(padded.toUpperCase());
        };
        Iban.fromBban = function(bban) {
            var countryCode = 'XE';
            var remainder = mod9710(iso13616Prepare(countryCode + '00' + bban));
            var checkDigit = ('0' + (98 - remainder)).slice(-2);
            return new Iban(countryCode + checkDigit + bban);
        };
        Iban.createIndirect = function(options) {
            return Iban.fromBban('ETH' + options.institution + options.identifier);
        };
        Iban.isValid = function(iban) {
            var i = new Iban(iban);
            return i.isValid();
        };
        Iban.prototype.isValid = function() {
            return /^XE[0-9]{2}(ETH[0-9A-Z]{13}|[0-9A-Z]{30,31})$/.test(this._iban) && mod9710(iso13616Prepare(this._iban)) === 1;
        };
        Iban.prototype.isDirect = function() {
            return this._iban.length === 34 || this._iban.length === 35;
        };
        Iban.prototype.isIndirect = function() {
            return this._iban.length === 20;
        };
        Iban.prototype.checksum = function() {
            return this._iban.substr(2, 2);
        };
        Iban.prototype.institution = function() {
            return this.isIndirect() ? this._iban.substr(7, 4) : '';
        };
        Iban.prototype.client = function() {
            return this.isIndirect() ? this._iban.substr(11) : '';
        };
        Iban.prototype.address = function() {
            if (this.isDirect()) {
                var base36 = this._iban.substr(4);
                var asBn = new BigNumber(base36, 36);
                return padLeft(asBn.toString(16), 20);
            }
            return '';
        };
        Iban.prototype.toString = function() {
            return this._iban;
        };
        module.exports = Iban;
    }, {
        "bignumber.js": "bignumber.js"
    }],
    34: [function(require, module, exports) {
        "use strict";
        var utils = require('../utils/utils');
        var errors = require('./errors');
        var IpcProvider = function(path, net) {
            var _this = this;
            this.responseCallbacks = {};
            this.path = path;
            this.connection = net.connect({
                path: this.path
            });
            this.connection.on('error', function(e) {
                console.error('IPC Connection Error', e);
                _this._timeout();
            });
            this.connection.on('end', function() {
                _this._timeout();
            });
            this.connection.on('data', function(data) {
                _this._parseResponse(data.toString()).forEach(function(result) {
                    var id = null;
                    if (utils.isArray(result)) {
                        result.forEach(function(load) {
                            if (_this.responseCallbacks[load.id])
                                id = load.id;
                        });
                    } else {
                        id = result.id;
                    }
                    if (_this.responseCallbacks[id]) {
                        _this.responseCallbacks[id](null, result);
                        delete _this.responseCallbacks[id];
                    }
                });
            });
        };
        IpcProvider.prototype._parseResponse = function(data) {
            var _this = this,
                returnValues = [];
            var dechunkedData = data.replace(/\}[\n\r]?\{/g, '}|--|{').replace(/\}\][\n\r]?\[\{/g, '}]|--|[{').replace(/\}[\n\r]?\[\{/g, '}|--|[{').replace(/\}\][\n\r]?\{/g, '}]|--|{').split('|--|');
            dechunkedData.forEach(function(data) {
                if (_this.lastChunk)
                    data = _this.lastChunk + data;
                var result = null;
                try {
                    result = JSON.parse(data);
                } catch (e) {
                    _this.lastChunk = data;
                    clearTimeout(_this.lastChunkTimeout);
                    _this.lastChunkTimeout = setTimeout(function() {
                        _this._timeout();
                        throw errors.InvalidResponse(data);
                    }, 1000 * 15);
                    return;
                }
                clearTimeout(_this.lastChunkTimeout);
                _this.lastChunk = null;
                if (result)
                    returnValues.push(result);
            });
            return returnValues;
        };
        IpcProvider.prototype._addResponseCallback = function(payload, callback) {
            var id = payload.id || payload[0].id;
            var method = payload.method || payload[0].method;
            this.responseCallbacks[id] = callback;
            this.responseCallbacks[id].method = method;
        };
        IpcProvider.prototype._timeout = function() {
            for (var key in this.responseCallbacks) {
                if (this.responseCallbacks.hasOwnProperty(key)) {
                    this.responseCallbacks[key](errors.InvalidConnection('on IPC'));
                    delete this.responseCallbacks[key];
                }
            }
        };
        IpcProvider.prototype.isConnected = function() {
            var _this = this;
            if (!_this.connection.writable)
                _this.connection.connect({
                    path: _this.path
                });
            return !!this.connection.writable;
        };
        IpcProvider.prototype.send = function(payload) {
            if (this.connection.writeSync) {
                var result;
                if (!this.connection.writable)
                    this.connection.connect({
                        path: this.path
                    });
                var data = this.connection.writeSync(JSON.stringify(payload));
                try {
                    result = JSON.parse(data);
                } catch (e) {
                    throw errors.InvalidResponse(data);
                }
                return result;
            } else {
                throw new Error('You tried to send "' + payload.method + '" synchronously. Synchronous requests are not supported by the IPC provider.');
            }
        };
        IpcProvider.prototype.sendAsync = function(payload, callback) {
            if (!this.connection.writable)
                this.connection.connect({
                    path: this.path
                });
            this.connection.write(JSON.stringify(payload));
            this._addResponseCallback(payload, callback);
        };
        module.exports = IpcProvider;
    }, {
        "../utils/utils": 20,
        "./errors": 26
    }],
    35: [function(require, module, exports) {
        var Jsonrpc = {
            messageId: 0
        };
        Jsonrpc.toPayload = function(method, params) {
            if (!method)
                console.error('jsonrpc method should be specified!');
            Jsonrpc.messageId++;
            return {
                jsonrpc: '2.0',
                id: Jsonrpc.messageId,
                method: method,
                params: params || []
            };
        };
        Jsonrpc.isValidResponse = function(response) {
            return Array.isArray(response) ? response.every(validateSingleMessage) : validateSingleMessage(response);

            function validateSingleMessage(message) {
                return !!message && !message.error && message.jsonrpc === '2.0' && typeof message.id === 'number' && message.result !== undefined;
            }
        };
        Jsonrpc.toBatchPayload = function(messages) {
            return messages.map(function(message) {
                return Jsonrpc.toPayload(message.method, message.params);
            });
        };
        module.exports = Jsonrpc;
    }, {}],
    36: [function(require, module, exports) {
        var utils = require('../utils/utils');
        var errors = require('./errors');
        var Method = function(options) {
            this.name = options.name;
            this.call = options.call;
            this.params = options.params || 0;
            this.inputFormatter = options.inputFormatter;
            this.outputFormatter = options.outputFormatter;
            this.requestManager = null;
        };
        Method.prototype.setRequestManager = function(rm) {
            this.requestManager = rm;
        };
        Method.prototype.getCall = function(args) {
            return utils.isFunction(this.call) ? this.call(args) : this.call;
        };
        Method.prototype.extractCallback = function(args) {
            if (utils.isFunction(args[args.length - 1])) {
                return args.pop();
            }
        };
        Method.prototype.validateArgs = function(args) {
            if (args.length !== this.params) {
                throw errors.InvalidNumberOfRPCParams();
            }
        };
        Method.prototype.formatInput = function(args) {
            if (!this.inputFormatter) {
                return args;
            }
            return this.inputFormatter.map(function(formatter, index) {
                return formatter ? formatter(args[index]) : args[index];
            });
        };
        Method.prototype.formatOutput = function(result) {
            return this.outputFormatter && result ? this.outputFormatter(result) : result;
        };
        Method.prototype.toPayload = function(args) {
            var call = this.getCall(args);
            var callback = this.extractCallback(args);
            var params = this.formatInput(args);
            this.validateArgs(params);
            return {
                method: call,
                params: params,
                callback: callback
            };
        };
        Method.prototype.attachToObject = function(obj) {
            var func = this.buildCall();
            func.call = this.call;
            var name = this.name.split('.');
            if (name.length > 1) {
                obj[name[0]] = obj[name[0]] || {};
                obj[name[0]][name[1]] = func;
            } else {
                obj[name[0]] = func;
            }
        };
        Method.prototype.buildCall = function() {
            var method = this;
            var send = function() {
                var payload = method.toPayload(Array.prototype.slice.call(arguments));
                if (payload.callback) {
                    return method.requestManager.sendAsync(payload, function(err, result) {
                        payload.callback(err, method.formatOutput(result));
                    });
                }
                return method.formatOutput(method.requestManager.send(payload));
            };
            send.request = this.request.bind(this);
            return send;
        };
        Method.prototype.request = function() {
            var payload = this.toPayload(Array.prototype.slice.call(arguments));
            payload.format = this.formatOutput.bind(this);
            return payload;
        };
        module.exports = Method;
    }, {
        "../utils/utils": 20,
        "./errors": 26
    }],
    37: [function(require, module, exports) {
        var Method = require('../method');
        var DB = function(web3) {
            this._requestManager = web3._requestManager;
            var self = this;
            methods().forEach(function(method) {
                method.attachToObject(self);
                method.setRequestManager(web3._requestManager);
            });
        };
        var methods = function() {
            var putString = new Method({
                name: 'putString',
                call: 'db_putString',
                params: 3
            });
            var getString = new Method({
                name: 'getString',
                call: 'db_getString',
                params: 2
            });
            var putHex = new Method({
                name: 'putHex',
                call: 'db_putHex',
                params: 3
            });
            var getHex = new Method({
                name: 'getHex',
                call: 'db_getHex',
                params: 2
            });
            return [putString, getString, putHex, getHex];
        };
        module.exports = DB;
    }, {
        "../method": 36
    }],
    38: [function(require, module, exports) {
        "use strict";
        var formatters = require('../formatters');
        var utils = require('../../utils/utils');
        var Method = require('../method');
        var Property = require('../property');
        var c = require('../../utils/config');
        var Contract = require('../contract');
        var watches = require('./watches');
        var Filter = require('../filter');
        var IsSyncing = require('../syncing');
        var namereg = require('../namereg');
        var Iban = require('../iban');
        var transfer = require('../transfer');
        var blockCall = function(args) {
            return (utils.isString(args[0]) && args[0].indexOf('0x') === 0) ? "eth_getBlockByHash" : "eth_getBlockByNumber";
        };
        var transactionFromBlockCall = function(args) {
            return (utils.isString(args[0]) && args[0].indexOf('0x') === 0) ? 'eth_getTransactionByBlockHashAndIndex' : 'eth_getTransactionByBlockNumberAndIndex';
        };
        var uncleCall = function(args) {
            return (utils.isString(args[0]) && args[0].indexOf('0x') === 0) ? 'eth_getUncleByBlockHashAndIndex' : 'eth_getUncleByBlockNumberAndIndex';
        };
        var getBlockTransactionCountCall = function(args) {
            return (utils.isString(args[0]) && args[0].indexOf('0x') === 0) ? 'eth_getBlockTransactionCountByHash' : 'eth_getBlockTransactionCountByNumber';
        };
        var uncleCountCall = function(args) {
            return (utils.isString(args[0]) && args[0].indexOf('0x') === 0) ? 'eth_getUncleCountByBlockHash' : 'eth_getUncleCountByBlockNumber';
        };

        function Eth(web3) {
            this._requestManager = web3._requestManager;
            var self = this;
            methods().forEach(function(method) {
                method.attachToObject(self);
                method.setRequestManager(self._requestManager);
            });
            properties().forEach(function(p) {
                p.attachToObject(self);
                p.setRequestManager(self._requestManager);
            });
            this.iban = Iban;
            this.sendIBANTransaction = transfer.bind(null, this);
        }
        Object.defineProperty(Eth.prototype, 'defaultBlock', {
            get: function() {
                return c.defaultBlock;
            },
            set: function(val) {
                c.defaultBlock = val;
                return val;
            }
        });
        Object.defineProperty(Eth.prototype, 'defaultAccount', {
            get: function() {
                return c.defaultAccount;
            },
            set: function(val) {
                c.defaultAccount = val;
                return val;
            }
        });
        var methods = function() {
            var getBalance = new Method({
                name: 'getBalance',
                call: 'eth_getBalance',
                params: 2,
                inputFormatter: [formatters.inputAddressFormatter, formatters.inputDefaultBlockNumberFormatter],
                outputFormatter: formatters.outputBigNumberFormatter
            });
            var getStorageAt = new Method({
                name: 'getStorageAt',
                call: 'eth_getStorageAt',
                params: 3,
                inputFormatter: [null, utils.toHex, formatters.inputDefaultBlockNumberFormatter]
            });
            var getCode = new Method({
                name: 'getCode',
                call: 'eth_getCode',
                params: 2,
                inputFormatter: [formatters.inputAddressFormatter, formatters.inputDefaultBlockNumberFormatter]
            });
            var getBlock = new Method({
                name: 'getBlock',
                call: blockCall,
                params: 2,
                inputFormatter: [formatters.inputBlockNumberFormatter, function(val) {
                    return !!val;
                }],
                outputFormatter: formatters.outputBlockFormatter
            });
            var getUncle = new Method({
                name: 'getUncle',
                call: uncleCall,
                params: 2,
                inputFormatter: [formatters.inputBlockNumberFormatter, utils.toHex],
                outputFormatter: formatters.outputBlockFormatter,
            });
            var getCompilers = new Method({
                name: 'getCompilers',
                call: 'eth_getCompilers',
                params: 0
            });
            var getBlockTransactionCount = new Method({
                name: 'getBlockTransactionCount',
                call: getBlockTransactionCountCall,
                params: 1,
                inputFormatter: [formatters.inputBlockNumberFormatter],
                outputFormatter: utils.toDecimal
            });
            var getBlockUncleCount = new Method({
                name: 'getBlockUncleCount',
                call: uncleCountCall,
                params: 1,
                inputFormatter: [formatters.inputBlockNumberFormatter],
                outputFormatter: utils.toDecimal
            });
            var getTransaction = new Method({
                name: 'getTransaction',
                call: 'eth_getTransactionByHash',
                params: 1,
                outputFormatter: formatters.outputTransactionFormatter
            });
            var getTransactionFromBlock = new Method({
                name: 'getTransactionFromBlock',
                call: transactionFromBlockCall,
                params: 2,
                inputFormatter: [formatters.inputBlockNumberFormatter, utils.toHex],
                outputFormatter: formatters.outputTransactionFormatter
            });
            var getTransactionReceipt = new Method({
                name: 'getTransactionReceipt',
                call: 'eth_getTransactionReceipt',
                params: 1,
                outputFormatter: formatters.outputTransactionReceiptFormatter
            });
            var getTransactionCount = new Method({
                name: 'getTransactionCount',
                call: 'eth_getTransactionCount',
                params: 2,
                inputFormatter: [null, formatters.inputDefaultBlockNumberFormatter],
                outputFormatter: utils.toDecimal
            });
            var sendRawTransaction = new Method({
                name: 'sendRawTransaction',
                call: 'eth_sendRawTransaction',
                params: 1,
                inputFormatter: [null]
            });
            var sendTransaction = new Method({
                name: 'sendTransaction',
                call: 'eth_sendTransaction',
                params: 1,
                inputFormatter: [formatters.inputTransactionFormatter]
            });
            var signTransaction = new Method({
                name: 'signTransaction',
                call: 'eth_signTransaction',
                params: 1,
                inputFormatter: [formatters.inputTransactionFormatter]
            });
            var sign = new Method({
                name: 'sign',
                call: 'eth_sign',
                params: 2,
                inputFormatter: [formatters.inputAddressFormatter, null]
            });
            var call = new Method({
                name: 'call',
                call: 'eth_call',
                params: 2,
                inputFormatter: [formatters.inputCallFormatter, formatters.inputDefaultBlockNumberFormatter]
            });
            var estimateGas = new Method({
                name: 'estimateGas',
                call: 'eth_estimateGas',
                params: 1,
                inputFormatter: [formatters.inputCallFormatter],
                outputFormatter: utils.toDecimal
            });
            var compileSolidity = new Method({
                name: 'compile.solidity',
                call: 'eth_compileSolidity',
                params: 1
            });
            var compileLLL = new Method({
                name: 'compile.lll',
                call: 'eth_compileLLL',
                params: 1
            });
            var compileSerpent = new Method({
                name: 'compile.serpent',
                call: 'eth_compileSerpent',
                params: 1
            });
            var submitWork = new Method({
                name: 'submitWork',
                call: 'eth_submitWork',
                params: 3
            });
            var getWork = new Method({
                name: 'getWork',
                call: 'eth_getWork',
                params: 0
            });
            return [getBalance, getStorageAt, getCode, getBlock, getUncle, getCompilers, getBlockTransactionCount, getBlockUncleCount, getTransaction, getTransactionFromBlock, getTransactionReceipt, getTransactionCount, call, estimateGas, sendRawTransaction, signTransaction, sendTransaction, sign, compileSolidity, compileLLL, compileSerpent, submitWork, getWork];
        };
        var properties = function() {
            return [new Property({
                name: 'coinbase',
                getter: 'eth_coinbase'
            }), new Property({
                name: 'mining',
                getter: 'eth_mining'
            }), new Property({
                name: 'hashrate',
                getter: 'eth_hashrate',
                outputFormatter: utils.toDecimal
            }), new Property({
                name: 'syncing',
                getter: 'eth_syncing',
                outputFormatter: formatters.outputSyncingFormatter
            }), new Property({
                name: 'gasPrice',
                getter: 'eth_gasPrice',
                outputFormatter: formatters.outputBigNumberFormatter
            }), new Property({
                name: 'accounts',
                getter: 'eth_accounts'
            }), new Property({
                name: 'blockNumber',
                getter: 'eth_blockNumber',
                outputFormatter: utils.toDecimal
            }), new Property({
                name: 'protocolVersion',
                getter: 'eth_protocolVersion'
            })];
        };
        Eth.prototype.contract = function(abi) {
            var factory = new Contract(this, abi);
            return factory;
        };
        Eth.prototype.filter = function(options, callback, filterCreationErrorCallback) {
            return new Filter(options, 'eth', this._requestManager, watches.eth(), formatters.outputLogFormatter, callback, filterCreationErrorCallback);
        };
        Eth.prototype.namereg = function() {
            return this.contract(namereg.global.abi).at(namereg.global.address);
        };
        Eth.prototype.icapNamereg = function() {
            return this.contract(namereg.icap.abi).at(namereg.icap.address);
        };
        Eth.prototype.isSyncing = function(callback) {
            return new IsSyncing(this._requestManager, callback);
        };
        module.exports = Eth;
    }, {
        "../../utils/config": 18,
        "../../utils/utils": 20,
        "../contract": 25,
        "../filter": 29,
        "../formatters": 30,
        "../iban": 33,
        "../method": 36,
        "../namereg": 44,
        "../property": 45,
        "../syncing": 48,
        "../transfer": 49,
        "./watches": 43
    }],
    39: [function(require, module, exports) {
        var utils = require('../../utils/utils');
        var Property = require('../property');
        var Net = function(web3) {
            this._requestManager = web3._requestManager;
            var self = this;
            properties().forEach(function(p) {
                p.attachToObject(self);
                p.setRequestManager(web3._requestManager);
            });
        };
        var properties = function() {
            return [new Property({
                name: 'listening',
                getter: 'net_listening'
            }), new Property({
                name: 'peerCount',
                getter: 'net_peerCount',
                outputFormatter: utils.toDecimal
            })];
        };
        module.exports = Net;
    }, {
        "../../utils/utils": 20,
        "../property": 45
    }],
    40: [function(require, module, exports) {
        "use strict";
        var Method = require('../method');
        var Property = require('../property');
        var formatters = require('../formatters');

        function Personal(web3) {
            this._requestManager = web3._requestManager;
            var self = this;
            methods().forEach(function(method) {
                method.attachToObject(self);
                method.setRequestManager(self._requestManager);
            });
            properties().forEach(function(p) {
                p.attachToObject(self);
                p.setRequestManager(self._requestManager);
            });
        }
        var methods = function() {
            var newAccount = new Method({
                name: 'newAccount',
                call: 'personal_newAccount',
                params: 1,
                inputFormatter: [null]
            });
            var importRawKey = new Method({
                name: 'importRawKey',
                call: 'personal_importRawKey',
                params: 2
            });
            var sign = new Method({
                name: 'sign',
                call: 'personal_sign',
                params: 3,
                inputFormatter: [null, formatters.inputAddressFormatter, null]
            });
            var ecRecover = new Method({
                name: 'ecRecover',
                call: 'personal_ecRecover',
                params: 2
            });
            var unlockAccount = new Method({
                name: 'unlockAccount',
                call: 'personal_unlockAccount',
                params: 3,
                inputFormatter: [formatters.inputAddressFormatter, null, null]
            });
            var sendTransaction = new Method({
                name: 'sendTransaction',
                call: 'personal_sendTransaction',
                params: 2,
                inputFormatter: [formatters.inputTransactionFormatter, null]
            });
            var lockAccount = new Method({
                name: 'lockAccount',
                call: 'personal_lockAccount',
                params: 1,
                inputFormatter: [formatters.inputAddressFormatter]
            });
            return [newAccount, importRawKey, unlockAccount, ecRecover, sign, sendTransaction, lockAccount];
        };
        var properties = function() {
            return [new Property({
                name: 'listAccounts',
                getter: 'personal_listAccounts'
            })];
        };
        module.exports = Personal;
    }, {
        "../formatters": 30,
        "../method": 36,
        "../property": 45
    }],
    41: [function(require, module, exports) {
        var Method = require('../method');
        var Filter = require('../filter');
        var watches = require('./watches');
        var Shh = function(web3) {
            this._requestManager = web3._requestManager;
            var self = this;
            methods().forEach(function(method) {
                method.attachToObject(self);
                method.setRequestManager(self._requestManager);
            });
        };
        Shh.prototype.newMessageFilter = function(options, callback, filterCreationErrorCallback) {
            return new Filter(options, 'shh', this._requestManager, watches.shh(), null, callback, filterCreationErrorCallback);
        };
        var methods = function() {
            return [new Method({
                name: 'version',
                call: 'shh_version',
                params: 0
            }), new Method({
                name: 'info',
                call: 'shh_info',
                params: 0
            }), new Method({
                name: 'setMaxMessageSize',
                call: 'shh_setMaxMessageSize',
                params: 1
            }), new Method({
                name: 'setMinPoW',
                call: 'shh_setMinPoW',
                params: 1
            }), new Method({
                name: 'markTrustedPeer',
                call: 'shh_markTrustedPeer',
                params: 1
            }), new Method({
                name: 'newKeyPair',
                call: 'shh_newKeyPair',
                params: 0
            }), new Method({
                name: 'addPrivateKey',
                call: 'shh_addPrivateKey',
                params: 1
            }), new Method({
                name: 'deleteKeyPair',
                call: 'shh_deleteKeyPair',
                params: 1
            }), new Method({
                name: 'hasKeyPair',
                call: 'shh_hasKeyPair',
                params: 1
            }), new Method({
                name: 'getPublicKey',
                call: 'shh_getPublicKey',
                params: 1
            }), new Method({
                name: 'getPrivateKey',
                call: 'shh_getPrivateKey',
                params: 1
            }), new Method({
                name: 'newSymKey',
                call: 'shh_newSymKey',
                params: 0
            }), new Method({
                name: 'addSymKey',
                call: 'shh_addSymKey',
                params: 1
            }), new Method({
                name: 'generateSymKeyFromPassword',
                call: 'shh_generateSymKeyFromPassword',
                params: 1
            }), new Method({
                name: 'hasSymKey',
                call: 'shh_hasSymKey',
                params: 1
            }), new Method({
                name: 'getSymKey',
                call: 'shh_getSymKey',
                params: 1
            }), new Method({
                name: 'deleteSymKey',
                call: 'shh_deleteSymKey',
                params: 1
            }), new Method({
                name: 'post',
                call: 'shh_post',
                params: 1,
                inputFormatter: [null]
            })];
        };
        module.exports = Shh;
    }, {
        "../filter": 29,
        "../method": 36,
        "./watches": 43
    }],
    42: [function(require, module, exports) {
        "use strict";
        var Method = require('../method');
        var Property = require('../property');

        function Swarm(web3) {
            this._requestManager = web3._requestManager;
            var self = this;
            methods().forEach(function(method) {
                method.attachToObject(self);
                method.setRequestManager(self._requestManager);
            });
            properties().forEach(function(p) {
                p.attachToObject(self);
                p.setRequestManager(self._requestManager);
            });
        }
        var methods = function() {
            var blockNetworkRead = new Method({
                name: 'blockNetworkRead',
                call: 'bzz_blockNetworkRead',
                params: 1,
                inputFormatter: [null]
            });
            var syncEnabled = new Method({
                name: 'syncEnabled',
                call: 'bzz_syncEnabled',
                params: 1,
                inputFormatter: [null]
            });
            var swapEnabled = new Method({
                name: 'swapEnabled',
                call: 'bzz_swapEnabled',
                params: 1,
                inputFormatter: [null]
            });
            var download = new Method({
                name: 'download',
                call: 'bzz_download',
                params: 2,
                inputFormatter: [null, null]
            });
            var upload = new Method({
                name: 'upload',
                call: 'bzz_upload',
                params: 2,
                inputFormatter: [null, null]
            });
            var retrieve = new Method({
                name: 'retrieve',
                call: 'bzz_retrieve',
                params: 1,
                inputFormatter: [null]
            });
            var store = new Method({
                name: 'store',
                call: 'bzz_store',
                params: 2,
                inputFormatter: [null, null]
            });
            var get = new Method({
                name: 'get',
                call: 'bzz_get',
                params: 1,
                inputFormatter: [null]
            });
            var put = new Method({
                name: 'put',
                call: 'bzz_put',
                params: 2,
                inputFormatter: [null, null]
            });
            var modify = new Method({
                name: 'modify',
                call: 'bzz_modify',
                params: 4,
                inputFormatter: [null, null, null, null]
            });
            return [blockNetworkRead, syncEnabled, swapEnabled, download, upload, retrieve, store, get, put, modify];
        };
        var properties = function() {
            return [new Property({
                name: 'hive',
                getter: 'bzz_hive'
            }), new Property({
                name: 'info',
                getter: 'bzz_info'
            })];
        };
        module.exports = Swarm;
    }, {
        "../method": 36,
        "../property": 45
    }],
    43: [function(require, module, exports) {
        var Method = require('../method');
        var eth = function() {
            var newFilterCall = function(args) {
                var type = args[0];
                switch (type) {
                    case 'latest':
                        args.shift();
                        this.params = 0;
                        return 'eth_newBlockFilter';
                    case 'pending':
                        args.shift();
                        this.params = 0;
                        return 'eth_newPendingTransactionFilter';
                    default:
                        return 'eth_newFilter';
                }
            };
            var newFilter = new Method({
                name: 'newFilter',
                call: newFilterCall,
                params: 1
            });
            var uninstallFilter = new Method({
                name: 'uninstallFilter',
                call: 'eth_uninstallFilter',
                params: 1
            });
            var getLogs = new Method({
                name: 'getLogs',
                call: 'eth_getFilterLogs',
                params: 1
            });
            var poll = new Method({
                name: 'poll',
                call: 'eth_getFilterChanges',
                params: 1
            });
            return [newFilter, uninstallFilter, getLogs, poll];
        };
        var shh = function() {
            return [new Method({
                name: 'newFilter',
                call: 'shh_newMessageFilter',
                params: 1
            }), new Method({
                name: 'uninstallFilter',
                call: 'shh_deleteMessageFilter',
                params: 1
            }), new Method({
                name: 'getLogs',
                call: 'shh_getFilterMessages',
                params: 1
            }), new Method({
                name: 'poll',
                call: 'shh_getFilterMessages',
                params: 1
            })];
        };
        module.exports = {
            eth: eth,
            shh: shh
        };
    }, {
        "../method": 36
    }],
    44: [function(require, module, exports) {
        var globalRegistrarAbi = require('../contracts/GlobalRegistrar.json');
        var icapRegistrarAbi = require('../contracts/ICAPRegistrar.json');
        var globalNameregAddress = '0xc6d9d2cd449a754c494264e1809c50e34d64562b';
        var icapNameregAddress = '0xa1a111bc074c9cfa781f0c38e63bd51c91b8af00';
        module.exports = {
            global: {
                abi: globalRegistrarAbi,
                address: globalNameregAddress
            },
            icap: {
                abi: icapRegistrarAbi,
                address: icapNameregAddress
            }
        };
    }, {
        "../contracts/GlobalRegistrar.json": 1,
        "../contracts/ICAPRegistrar.json": 2
    }],
    45: [function(require, module, exports) {
        var utils = require('../utils/utils');
        var Property = function(options) {
            this.name = options.name;
            this.getter = options.getter;
            this.setter = options.setter;
            this.outputFormatter = options.outputFormatter;
            this.inputFormatter = options.inputFormatter;
            this.requestManager = null;
        };
        Property.prototype.setRequestManager = function(rm) {
            this.requestManager = rm;
        };
        Property.prototype.formatInput = function(arg) {
            return this.inputFormatter ? this.inputFormatter(arg) : arg;
        };
        Property.prototype.formatOutput = function(result) {
            return this.outputFormatter && result !== null && result !== undefined ? this.outputFormatter(result) : result;
        };
        Property.prototype.extractCallback = function(args) {
            if (utils.isFunction(args[args.length - 1])) {
                return args.pop();
            }
        };
        Property.prototype.attachToObject = function(obj) {
            var proto = {
                get: this.buildGet(),
                enumerable: true
            };
            var names = this.name.split('.');
            var name = names[0];
            if (names.length > 1) {
                obj[names[0]] = obj[names[0]] || {};
                obj = obj[names[0]];
                name = names[1];
            }
            Object.defineProperty(obj, name, proto);
            obj[asyncGetterName(name)] = this.buildAsyncGet();
        };
        var asyncGetterName = function(name) {
            return 'get' + name.charAt(0).toUpperCase() + name.slice(1);
        };
        Property.prototype.buildGet = function() {
            var property = this;
            return function get() {
                return property.formatOutput(property.requestManager.send({
                    method: property.getter
                }));
            };
        };
        Property.prototype.buildAsyncGet = function() {
            var property = this;
            var get = function(callback) {
                property.requestManager.sendAsync({
                    method: property.getter
                }, function(err, result) {
                    callback(err, property.formatOutput(result));
                });
            };
            get.request = this.request.bind(this);
            return get;
        };
        Property.prototype.request = function() {
            var payload = {
                method: this.getter,
                params: [],
                callback: this.extractCallback(Array.prototype.slice.call(arguments))
            };
            payload.format = this.formatOutput.bind(this);
            return payload;
        };
        module.exports = Property;
    }, {
        "../utils/utils": 20
    }],
    46: [function(require, module, exports) {
        var Jsonrpc = require('./jsonrpc');
        var utils = require('../utils/utils');
        var c = require('../utils/config');
        var errors = require('./errors');
        var RequestManager = function(provider) {
            this.provider = provider;
            this.polls = {};
            this.timeout = null;
        };
        RequestManager.prototype.send = function(data) {
            if (!this.provider) {
                console.error(errors.InvalidProvider());
                return null;
            }
            var payload = Jsonrpc.toPayload(data.method, data.params);
            var result = this.provider.send(payload);
            if (!Jsonrpc.isValidResponse(result)) {
                throw errors.InvalidResponse(result);
            }
            return result.result;
        };
        RequestManager.prototype.sendAsync = function(data, callback) {
            if (!this.provider) {
                return callback(errors.InvalidProvider());
            }
            var payload = Jsonrpc.toPayload(data.method, data.params);
            this.provider.sendAsync(payload, function(err, result) {
                if (err) {
                    return callback(err);
                }
                if (!Jsonrpc.isValidResponse(result)) {
                    return callback(errors.InvalidResponse(result));
                }
                callback(null, result.result);
            });
        };
        RequestManager.prototype.sendBatch = function(data, callback) {
            if (!this.provider) {
                return callback(errors.InvalidProvider());
            }
            var payload = Jsonrpc.toBatchPayload(data);
            this.provider.sendAsync(payload, function(err, results) {
                if (err) {
                    return callback(err);
                }
                if (!utils.isArray(results)) {
                    return callback(errors.InvalidResponse(results));
                }
                callback(err, results);
            });
        };
        RequestManager.prototype.setProvider = function(p) {
            this.provider = p;
        };
        RequestManager.prototype.startPolling = function(data, pollId, callback, uninstall) {
            this.polls[pollId] = {
                data: data,
                id: pollId,
                callback: callback,
                uninstall: uninstall
            };
            if (!this.timeout) {
                this.poll();
            }
        };
        RequestManager.prototype.stopPolling = function(pollId) {
            delete this.polls[pollId];
            if (Object.keys(this.polls).length === 0 && this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }
        };
        RequestManager.prototype.reset = function(keepIsSyncing) {
            for (var key in this.polls) {
                if (!keepIsSyncing || key.indexOf('syncPoll_') === -1) {
                    this.polls[key].uninstall();
                    delete this.polls[key];
                }
            }
            if (Object.keys(this.polls).length === 0 && this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }
        };
        RequestManager.prototype.poll = function() {
            this.timeout = setTimeout(this.poll.bind(this), c.ETH_POLLING_TIMEOUT);
            if (Object.keys(this.polls).length === 0) {
                return;
            }
            if (!this.provider) {
                console.error(errors.InvalidProvider());
                return;
            }
            var pollsData = [];
            var pollsIds = [];
            for (var key in this.polls) {
                pollsData.push(this.polls[key].data);
                pollsIds.push(key);
            }
            if (pollsData.length === 0) {
                return;
            }
            var payload = Jsonrpc.toBatchPayload(pollsData);
            var pollsIdMap = {};
            payload.forEach(function(load, index) {
                pollsIdMap[load.id] = pollsIds[index];
            });
            var self = this;
            this.provider.sendAsync(payload, function(error, results) {
                if (error) {
                    return;
                }
                if (!utils.isArray(results)) {
                    throw errors.InvalidResponse(results);
                }
                results.map(function(result) {
                    var id = pollsIdMap[result.id];
                    if (self.polls[id]) {
                        result.callback = self.polls[id].callback;
                        return result;
                    } else
                        return false;
                }).filter(function(result) {
                    return !!result;
                }).filter(function(result) {
                    var valid = Jsonrpc.isValidResponse(result);
                    if (!valid) {
                        result.callback(errors.InvalidResponse(result));
                    }
                    return valid;
                }).forEach(function(result) {
                    result.callback(null, result.result);
                });
            });
        };
        module.exports = RequestManager;
    }, {
        "../utils/config": 18,
        "../utils/utils": 20,
        "./errors": 26,
        "./jsonrpc": 35
    }],
    47: [function(require, module, exports) {
        var Settings = function() {
            this.defaultBlock = 'latest';
            this.defaultAccount = undefined;
        };
        module.exports = Settings;
    }, {}],
    48: [function(require, module, exports) {
        var formatters = require('./formatters');
        var utils = require('../utils/utils');
        var count = 1;
        var pollSyncing = function(self) {
            var onMessage = function(error, sync) {
                if (error) {
                    return self.callbacks.forEach(function(callback) {
                        callback(error);
                    });
                }
                if (utils.isObject(sync) && sync.startingBlock)
                    sync = formatters.outputSyncingFormatter(sync);
                self.callbacks.forEach(function(callback) {
                    if (self.lastSyncState !== sync) {
                        if (!self.lastSyncState && utils.isObject(sync))
                            callback(null, true);
                        setTimeout(function() {
                            callback(null, sync);
                        }, 0);
                        self.lastSyncState = sync;
                    }
                });
            };
            self.requestManager.startPolling({
                method: 'eth_syncing',
                params: [],
            }, self.pollId, onMessage, self.stopWatching.bind(self));
        };
        var IsSyncing = function(requestManager, callback) {
            this.requestManager = requestManager;
            this.pollId = 'syncPoll_' + count++;
            this.callbacks = [];
            this.addCallback(callback);
            this.lastSyncState = false;
            pollSyncing(this);
            return this;
        };
        IsSyncing.prototype.addCallback = function(callback) {
            if (callback)
                this.callbacks.push(callback);
            return this;
        };
        IsSyncing.prototype.stopWatching = function() {
            this.requestManager.stopPolling(this.pollId);
            this.callbacks = [];
        };
        module.exports = IsSyncing;
    }, {
        "../utils/utils": 20,
        "./formatters": 30
    }],
    49: [function(require, module, exports) {
        var Iban = require('./iban');
        var exchangeAbi = require('../contracts/SmartExchange.json');
        var transfer = function(eth, from, to, value, callback) {
            var iban = new Iban(to);
            if (!iban.isValid()) {
                throw new Error('invalid iban address');
            }
            if (iban.isDirect()) {
                return transferToAddress(eth, from, iban.address(), value, callback);
            }
            if (!callback) {
                var address = eth.icapNamereg().addr(iban.institution());
                return deposit(eth, from, address, value, iban.client());
            }
            eth.icapNamereg().addr(iban.institution(), function(err, address) {
                return deposit(eth, from, address, value, iban.client(), callback);
            });
        };
        var transferToAddress = function(eth, from, to, value, callback) {
            return eth.sendTransaction({
                address: to,
                from: from,
                value: value
            }, callback);
        };
        var deposit = function(eth, from, to, value, client, callback) {
            var abi = exchangeAbi;
            return eth.contract(abi).at(to).deposit(client, {
                from: from,
                value: value
            }, callback);
        };
        module.exports = transfer;
    }, {
        "../contracts/SmartExchange.json": 3,
        "./iban": 33
    }],
    50: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            (function() {
                var C = CryptoJS;
                var C_lib = C.lib;
                var BlockCipher = C_lib.BlockCipher;
                var C_algo = C.algo;
                var SBOX = [];
                var INV_SBOX = [];
                var SUB_MIX_0 = [];
                var SUB_MIX_1 = [];
                var SUB_MIX_2 = [];
                var SUB_MIX_3 = [];
                var INV_SUB_MIX_0 = [];
                var INV_SUB_MIX_1 = [];
                var INV_SUB_MIX_2 = [];
                var INV_SUB_MIX_3 = [];
                (function() {
                    var d = [];
                    for (var i = 0; i < 256; i++) {
                        if (i < 128) {
                            d[i] = i << 1;
                        } else {
                            d[i] = (i << 1) ^ 0x11b;
                        }
                    }
                    var x = 0;
                    var xi = 0;
                    for (var i = 0; i < 256; i++) {
                        var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
                        sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
                        SBOX[x] = sx;
                        INV_SBOX[sx] = x;
                        var x2 = d[x];
                        var x4 = d[x2];
                        var x8 = d[x4];
                        var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
                        SUB_MIX_0[x] = (t << 24) | (t >>> 8);
                        SUB_MIX_1[x] = (t << 16) | (t >>> 16);
                        SUB_MIX_2[x] = (t << 8) | (t >>> 24);
                        SUB_MIX_3[x] = t;
                        var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
                        INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
                        INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
                        INV_SUB_MIX_2[sx] = (t << 8) | (t >>> 24);
                        INV_SUB_MIX_3[sx] = t;
                        if (!x) {
                            x = xi = 1;
                        } else {
                            x = x2 ^ d[d[d[x8 ^ x2]]];
                            xi ^= d[d[xi]];
                        }
                    }
                }());
                var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
                var AES = C_algo.AES = BlockCipher.extend({
                    _doReset: function() {
                        if (this._nRounds && this._keyPriorReset === this._key) {
                            return;
                        }
                        var key = this._keyPriorReset = this._key;
                        var keyWords = key.words;
                        var keySize = key.sigBytes / 4;
                        var nRounds = this._nRounds = keySize + 6;
                        var ksRows = (nRounds + 1) * 4;
                        var keySchedule = this._keySchedule = [];
                        for (var ksRow = 0; ksRow < ksRows; ksRow++) {
                            if (ksRow < keySize) {
                                keySchedule[ksRow] = keyWords[ksRow];
                            } else {
                                var t = keySchedule[ksRow - 1];
                                if (!(ksRow % keySize)) {
                                    t = (t << 8) | (t >>> 24);
                                    t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
                                    t ^= RCON[(ksRow / keySize) | 0] << 24;
                                } else if (keySize > 6 && ksRow % keySize == 4) {
                                    t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
                                }
                                keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
                            }
                        }
                        var invKeySchedule = this._invKeySchedule = [];
                        for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
                            var ksRow = ksRows - invKsRow;
                            if (invKsRow % 4) {
                                var t = keySchedule[ksRow];
                            } else {
                                var t = keySchedule[ksRow - 4];
                            }
                            if (invKsRow < 4 || ksRow <= 4) {
                                invKeySchedule[invKsRow] = t;
                            } else {
                                invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^ INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
                            }
                        }
                    },
                    encryptBlock: function(M, offset) {
                        this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
                    },
                    decryptBlock: function(M, offset) {
                        var t = M[offset + 1];
                        M[offset + 1] = M[offset + 3];
                        M[offset + 3] = t;
                        this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);
                        var t = M[offset + 1];
                        M[offset + 1] = M[offset + 3];
                        M[offset + 3] = t;
                    },
                    _doCryptBlock: function(M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
                        var nRounds = this._nRounds;
                        var s0 = M[offset] ^ keySchedule[0];
                        var s1 = M[offset + 1] ^ keySchedule[1];
                        var s2 = M[offset + 2] ^ keySchedule[2];
                        var s3 = M[offset + 3] ^ keySchedule[3];
                        var ksRow = 4;
                        for (var round = 1; round < nRounds; round++) {
                            var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
                            var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
                            var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
                            var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];
                            s0 = t0;
                            s1 = t1;
                            s2 = t2;
                            s3 = t3;
                        }
                        var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
                        var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
                        var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
                        var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];
                        M[offset] = t0;
                        M[offset + 1] = t1;
                        M[offset + 2] = t2;
                        M[offset + 3] = t3;
                    },
                    keySize: 256 / 32
                });
                C.AES = BlockCipher._createHelper(AES);
            }());
            return CryptoJS.AES;
        }));
    }, {
        "./cipher-core": 51,
        "./core": 52,
        "./enc-base64": 53,
        "./evpkdf": 55,
        "./md5": 60
    }],
    51: [function(require, module, exports) {;
        (function(root, factory) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            CryptoJS.lib.Cipher || (function(undefined) {
                var C = CryptoJS;
                var C_lib = C.lib;
                var Base = C_lib.Base;
                var WordArray = C_lib.WordArray;
                var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
                var C_enc = C.enc;
                var Utf8 = C_enc.Utf8;
                var Base64 = C_enc.Base64;
                var C_algo = C.algo;
                var EvpKDF = C_algo.EvpKDF;
                var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
                    cfg: Base.extend(),
                    createEncryptor: function(key, cfg) {
                        return this.create(this._ENC_XFORM_MODE, key, cfg);
                    },
                    createDecryptor: function(key, cfg) {
                        return this.create(this._DEC_XFORM_MODE, key, cfg);
                    },
                    init: function(xformMode, key, cfg) {
                        this.cfg = this.cfg.extend(cfg);
                        this._xformMode = xformMode;
                        this._key = key;
                        this.reset();
                    },
                    reset: function() {
                        BufferedBlockAlgorithm.reset.call(this);
                        this._doReset();
                    },
                    process: function(dataUpdate) {
                        this._append(dataUpdate);
                        return this._process();
                    },
                    finalize: function(dataUpdate) {
                        if (dataUpdate) {
                            this._append(dataUpdate);
                        }
                        var finalProcessedData = this._doFinalize();
                        return finalProcessedData;
                    },
                    keySize: 128 / 32,
                    ivSize: 128 / 32,
                    _ENC_XFORM_MODE: 1,
                    _DEC_XFORM_MODE: 2,
                    _createHelper: (function() {
                        function selectCipherStrategy(key) {
                            if (typeof key == 'string') {
                                return PasswordBasedCipher;
                            } else {
                                return SerializableCipher;
                            }
                        }
                        return function(cipher) {
                            return {
                                encrypt: function(message, key, cfg) {
                                    return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
                                },
                                decrypt: function(ciphertext, key, cfg) {
                                    return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
                                }
                            };
                        };
                    }())
                });
                var StreamCipher = C_lib.StreamCipher = Cipher.extend({
                    _doFinalize: function() {
                        var finalProcessedBlocks = this._process(!!'flush');
                        return finalProcessedBlocks;
                    },
                    blockSize: 1
                });
                var C_mode = C.mode = {};
                var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
                    createEncryptor: function(cipher, iv) {
                        return this.Encryptor.create(cipher, iv);
                    },
                    createDecryptor: function(cipher, iv) {
                        return this.Decryptor.create(cipher, iv);
                    },
                    init: function(cipher, iv) {
                        this._cipher = cipher;
                        this._iv = iv;
                    }
                });
                var CBC = C_mode.CBC = (function() {
                    var CBC = BlockCipherMode.extend();
                    CBC.Encryptor = CBC.extend({
                        processBlock: function(words, offset) {
                            var cipher = this._cipher;
                            var blockSize = cipher.blockSize;
                            xorBlock.call(this, words, offset, blockSize);
                            cipher.encryptBlock(words, offset);
                            this._prevBlock = words.slice(offset, offset + blockSize);
                        }
                    });
                    CBC.Decryptor = CBC.extend({
                        processBlock: function(words, offset) {
                            var cipher = this._cipher;
                            var blockSize = cipher.blockSize;
                            var thisBlock = words.slice(offset, offset + blockSize);
                            cipher.decryptBlock(words, offset);
                            xorBlock.call(this, words, offset, blockSize);
                            this._prevBlock = thisBlock;
                        }
                    });

                    function xorBlock(words, offset, blockSize) {
                        var iv = this._iv;
                        if (iv) {
                            var block = iv;
                            this._iv = undefined;
                        } else {
                            var block = this._prevBlock;
                        }
                        for (var i = 0; i < blockSize; i++) {
                            words[offset + i] ^= block[i];
                        }
                    }
                    return CBC;
                }());
                var C_pad = C.pad = {};
                var Pkcs7 = C_pad.Pkcs7 = {
                    pad: function(data, blockSize) {
                        var blockSizeBytes = blockSize * 4;
                        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
                        var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;
                        var paddingWords = [];
                        for (var i = 0; i < nPaddingBytes; i += 4) {
                            paddingWords.push(paddingWord);
                        }
                        var padding = WordArray.create(paddingWords, nPaddingBytes);
                        data.concat(padding);
                    },
                    unpad: function(data) {
                        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;
                        data.sigBytes -= nPaddingBytes;
                    }
                };
                var BlockCipher = C_lib.BlockCipher = Cipher.extend({
                    cfg: Cipher.cfg.extend({
                        mode: CBC,
                        padding: Pkcs7
                    }),
                    reset: function() {
                        Cipher.reset.call(this);
                        var cfg = this.cfg;
                        var iv = cfg.iv;
                        var mode = cfg.mode;
                        if (this._xformMode == this._ENC_XFORM_MODE) {
                            var modeCreator = mode.createEncryptor;
                        } else {
                            var modeCreator = mode.createDecryptor;
                            this._minBufferSize = 1;
                        }
                        this._mode = modeCreator.call(mode, this, iv && iv.words);
                    },
                    _doProcessBlock: function(words, offset) {
                        this._mode.processBlock(words, offset);
                    },
                    _doFinalize: function() {
                        var padding = this.cfg.padding;
                        if (this._xformMode == this._ENC_XFORM_MODE) {
                            padding.pad(this._data, this.blockSize);
                            var finalProcessedBlocks = this._process(!!'flush');
                        } else {
                            var finalProcessedBlocks = this._process(!!'flush');
                            padding.unpad(finalProcessedBlocks);
                        }
                        return finalProcessedBlocks;
                    },
                    blockSize: 128 / 32
                });
                var CipherParams = C_lib.CipherParams = Base.extend({
                    init: function(cipherParams) {
                        this.mixIn(cipherParams);
                    },
                    toString: function(formatter) {
                        return (formatter || this.formatter).stringify(this);
                    }
                });
                var C_format = C.format = {};
                var OpenSSLFormatter = C_format.OpenSSL = {
                    stringify: function(cipherParams) {
                        var ciphertext = cipherParams.ciphertext;
                        var salt = cipherParams.salt;
                        if (salt) {
                            var wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
                        } else {
                            var wordArray = ciphertext;
                        }
                        return wordArray.toString(Base64);
                    },
                    parse: function(openSSLStr) {
                        var ciphertext = Base64.parse(openSSLStr);
                        var ciphertextWords = ciphertext.words;
                        if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
                            var salt = WordArray.create(ciphertextWords.slice(2, 4));
                            ciphertextWords.splice(0, 4);
                            ciphertext.sigBytes -= 16;
                        }
                        return CipherParams.create({
                            ciphertext: ciphertext,
                            salt: salt
                        });
                    }
                };
                var SerializableCipher = C_lib.SerializableCipher = Base.extend({
                    cfg: Base.extend({
                        format: OpenSSLFormatter
                    }),
                    encrypt: function(cipher, message, key, cfg) {
                        cfg = this.cfg.extend(cfg);
                        var encryptor = cipher.createEncryptor(key, cfg);
                        var ciphertext = encryptor.finalize(message);
                        var cipherCfg = encryptor.cfg;
                        return CipherParams.create({
                            ciphertext: ciphertext,
                            key: key,
                            iv: cipherCfg.iv,
                            algorithm: cipher,
                            mode: cipherCfg.mode,
                            padding: cipherCfg.padding,
                            blockSize: cipher.blockSize,
                            formatter: cfg.format
                        });
                    },
                    decrypt: function(cipher, ciphertext, key, cfg) {
                        cfg = this.cfg.extend(cfg);
                        ciphertext = this._parse(ciphertext, cfg.format);
                        var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
                        return plaintext;
                    },
                    _parse: function(ciphertext, format) {
                        if (typeof ciphertext == 'string') {
                            return format.parse(ciphertext, this);
                        } else {
                            return ciphertext;
                        }
                    }
                });
                var C_kdf = C.kdf = {};
                var OpenSSLKdf = C_kdf.OpenSSL = {
                    execute: function(password, keySize, ivSize, salt) {
                        if (!salt) {
                            salt = WordArray.random(64 / 8);
                        }
                        var key = EvpKDF.create({
                            keySize: keySize + ivSize
                        }).compute(password, salt);
                        var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
                        key.sigBytes = keySize * 4;
                        return CipherParams.create({
                            key: key,
                            iv: iv,
                            salt: salt
                        });
                    }
                };
                var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
                    cfg: SerializableCipher.cfg.extend({
                        kdf: OpenSSLKdf
                    }),
                    encrypt: function(cipher, message, password, cfg) {
                        cfg = this.cfg.extend(cfg);
                        var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);
                        cfg.iv = derivedParams.iv;
                        var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);
                        ciphertext.mixIn(derivedParams);
                        return ciphertext;
                    },
                    decrypt: function(cipher, ciphertext, password, cfg) {
                        cfg = this.cfg.extend(cfg);
                        ciphertext = this._parse(ciphertext, cfg.format);
                        var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);
                        cfg.iv = derivedParams.iv;
                        var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
                        return plaintext;
                    }
                });
            }());
        }));
    }, {
        "./core": 52
    }],
    52: [function(require, module, exports) {;
        (function(root, factory) {
            if (typeof exports === "object") {
                module.exports = exports = factory();
            } else if (typeof define === "function" && define.amd) {
                define([], factory);
            } else {
                root.CryptoJS = factory();
            }
        }(this, function() {
            var CryptoJS = CryptoJS || (function(Math, undefined) {
                var create = Object.create || (function() {
                    function F() {};
                    return function(obj) {
                        var subtype;
                        F.prototype = obj;
                        subtype = new F();
                        F.prototype = null;
                        return subtype;
                    };
                }())
                var C = {};
                var C_lib = C.lib = {};
                var Base = C_lib.Base = (function() {
                    return {
                        extend: function(overrides) {
                            var subtype = create(this);
                            if (overrides) {
                                subtype.mixIn(overrides);
                            }
                            if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
                                subtype.init = function() {
                                    subtype.$super.init.apply(this, arguments);
                                };
                            }
                            subtype.init.prototype = subtype;
                            subtype.$super = this;
                            return subtype;
                        },
                        create: function() {
                            var instance = this.extend();
                            instance.init.apply(instance, arguments);
                            return instance;
                        },
                        init: function() {},
                        mixIn: function(properties) {
                            for (var propertyName in properties) {
                                if (properties.hasOwnProperty(propertyName)) {
                                    this[propertyName] = properties[propertyName];
                                }
                            }
                            if (properties.hasOwnProperty('toString')) {
                                this.toString = properties.toString;
                            }
                        },
                        clone: function() {
                            return this.init.prototype.extend(this);
                        }
                    };
                }());
                var WordArray = C_lib.WordArray = Base.extend({
                    init: function(words, sigBytes) {
                        words = this.words = words || [];
                        if (sigBytes != undefined) {
                            this.sigBytes = sigBytes;
                        } else {
                            this.sigBytes = words.length * 4;
                        }
                    },
                    toString: function(encoder) {
                        return (encoder || Hex).stringify(this);
                    },
                    concat: function(wordArray) {
                        var thisWords = this.words;
                        var thatWords = wordArray.words;
                        var thisSigBytes = this.sigBytes;
                        var thatSigBytes = wordArray.sigBytes;
                        this.clamp();
                        if (thisSigBytes % 4) {
                            for (var i = 0; i < thatSigBytes; i++) {
                                var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                                thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
                            }
                        } else {
                            for (var i = 0; i < thatSigBytes; i += 4) {
                                thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
                            }
                        }
                        this.sigBytes += thatSigBytes;
                        return this;
                    },
                    clamp: function() {
                        var words = this.words;
                        var sigBytes = this.sigBytes;
                        words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
                        words.length = Math.ceil(sigBytes / 4);
                    },
                    clone: function() {
                        var clone = Base.clone.call(this);
                        clone.words = this.words.slice(0);
                        return clone;
                    },
                    random: function(nBytes) {
                        var words = [];
                        var r = (function(m_w) {
                            var m_w = m_w;
                            var m_z = 0x3ade68b1;
                            var mask = 0xffffffff;
                            return function() {
                                m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
                                m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
                                var result = ((m_z << 0x10) + m_w) & mask;
                                result /= 0x100000000;
                                result += 0.5;
                                return result * (Math.random() > .5 ? 1 : -1);
                            }
                        });
                        for (var i = 0, rcache; i < nBytes; i += 4) {
                            var _r = r((rcache || Math.random()) * 0x100000000);
                            rcache = _r() * 0x3ade67b7;
                            words.push((_r() * 0x100000000) | 0);
                        }
                        return new WordArray.init(words, nBytes);
                    }
                });
                var C_enc = C.enc = {};
                var Hex = C_enc.Hex = {
                    stringify: function(wordArray) {
                        var words = wordArray.words;
                        var sigBytes = wordArray.sigBytes;
                        var hexChars = [];
                        for (var i = 0; i < sigBytes; i++) {
                            var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                            hexChars.push((bite >>> 4).toString(16));
                            hexChars.push((bite & 0x0f).toString(16));
                        }
                        return hexChars.join('');
                    },
                    parse: function(hexStr) {
                        var hexStrLength = hexStr.length;
                        var words = [];
                        for (var i = 0; i < hexStrLength; i += 2) {
                            words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
                        }
                        return new WordArray.init(words, hexStrLength / 2);
                    }
                };
                var Latin1 = C_enc.Latin1 = {
                    stringify: function(wordArray) {
                        var words = wordArray.words;
                        var sigBytes = wordArray.sigBytes;
                        var latin1Chars = [];
                        for (var i = 0; i < sigBytes; i++) {
                            var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                            latin1Chars.push(String.fromCharCode(bite));
                        }
                        return latin1Chars.join('');
                    },
                    parse: function(latin1Str) {
                        var latin1StrLength = latin1Str.length;
                        var words = [];
                        for (var i = 0; i < latin1StrLength; i++) {
                            words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
                        }
                        return new WordArray.init(words, latin1StrLength);
                    }
                };
                var Utf8 = C_enc.Utf8 = {
                    stringify: function(wordArray) {
                        try {
                            return decodeURIComponent(escape(Latin1.stringify(wordArray)));
                        } catch (e) {
                            throw new Error('Malformed UTF-8 data');
                        }
                    },
                    parse: function(utf8Str) {
                        return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
                    }
                };
                var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
                    reset: function() {
                        this._data = new WordArray.init();
                        this._nDataBytes = 0;
                    },
                    _append: function(data) {
                        if (typeof data == 'string') {
                            data = Utf8.parse(data);
                        }
                        this._data.concat(data);
                        this._nDataBytes += data.sigBytes;
                    },
                    _process: function(doFlush) {
                        var data = this._data;
                        var dataWords = data.words;
                        var dataSigBytes = data.sigBytes;
                        var blockSize = this.blockSize;
                        var blockSizeBytes = blockSize * 4;
                        var nBlocksReady = dataSigBytes / blockSizeBytes;
                        if (doFlush) {
                            nBlocksReady = Math.ceil(nBlocksReady);
                        } else {
                            nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
                        }
                        var nWordsReady = nBlocksReady * blockSize;
                        var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);
                        if (nWordsReady) {
                            for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                                this._doProcessBlock(dataWords, offset);
                            }
                            var processedWords = dataWords.splice(0, nWordsReady);
                            data.sigBytes -= nBytesReady;
                        }
                        return new WordArray.init(processedWords, nBytesReady);
                    },
                    clone: function() {
                        var clone = Base.clone.call(this);
                        clone._data = this._data.clone();
                        return clone;
                    },
                    _minBufferSize: 0
                });
                var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
                    cfg: Base.extend(),
                    init: function(cfg) {
                        this.cfg = this.cfg.extend(cfg);
                        this.reset();
                    },
                    reset: function() {
                        BufferedBlockAlgorithm.reset.call(this);
                        this._doReset();
                    },
                    update: function(messageUpdate) {
                        this._append(messageUpdate);
                        this._process();
                        return this;
                    },
                    finalize: function(messageUpdate) {
                        if (messageUpdate) {
                            this._append(messageUpdate);
                        }
                        var hash = this._doFinalize();
                        return hash;
                    },
                    blockSize: 512 / 32,
                    _createHelper: function(hasher) {
                        return function(message, cfg) {
                            return new hasher.init(cfg).finalize(message);
                        };
                    },
                    _createHmacHelper: function(hasher) {
                        return function(message, key) {
                            return new C_algo.HMAC.init(hasher, key).finalize(message);
                        };
                    }
                });
                var C_algo = C.algo = {};
                return C;
            }(Math));
            return CryptoJS;
        }));
    }, {}],
    53: [function(require, module, exports) {;
        (function(root, factory) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            (function() {
                var C = CryptoJS;
                var C_lib = C.lib;
                var WordArray = C_lib.WordArray;
                var C_enc = C.enc;
                var Base64 = C_enc.Base64 = {
                    stringify: function(wordArray) {
                        var words = wordArray.words;
                        var sigBytes = wordArray.sigBytes;
                        var map = this._map;
                        wordArray.clamp();
                        var base64Chars = [];
                        for (var i = 0; i < sigBytes; i += 3) {
                            var byte1 = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                            var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
                            var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;
                            var triplet = (byte1 << 16) | (byte2 << 8) | byte3;
                            for (var j = 0;
                                (j < 4) && (i + j * 0.75 < sigBytes); j++) {
                                base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
                            }
                        }
                        var paddingChar = map.charAt(64);
                        if (paddingChar) {
                            while (base64Chars.length % 4) {
                                base64Chars.push(paddingChar);
                            }
                        }
                        return base64Chars.join('');
                    },
                    parse: function(base64Str) {
                        var base64StrLength = base64Str.length;
                        var map = this._map;
                        var reverseMap = this._reverseMap;
                        if (!reverseMap) {
                            reverseMap = this._reverseMap = [];
                            for (var j = 0; j < map.length; j++) {
                                reverseMap[map.charCodeAt(j)] = j;
                            }
                        }
                        var paddingChar = map.charAt(64);
                        if (paddingChar) {
                            var paddingIndex = base64Str.indexOf(paddingChar);
                            if (paddingIndex !== -1) {
                                base64StrLength = paddingIndex;
                            }
                        }
                        return parseLoop(base64Str, base64StrLength, reverseMap);
                    },
                    _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
                };

                function parseLoop(base64Str, base64StrLength, reverseMap) {
                    var words = [];
                    var nBytes = 0;
                    for (var i = 0; i < base64StrLength; i++) {
                        if (i % 4) {
                            var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
                            var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
                            words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
                            nBytes++;
                        }
                    }
                    return WordArray.create(words, nBytes);
                }
            }());
            return CryptoJS.enc.Base64;
        }));
    }, {
        "./core": 52
    }],
    54: [function(require, module, exports) {;
        (function(root, factory) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            (function() {
                var C = CryptoJS;
                var C_lib = C.lib;
                var WordArray = C_lib.WordArray;
                var C_enc = C.enc;
                var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
                    stringify: function(wordArray) {
                        var words = wordArray.words;
                        var sigBytes = wordArray.sigBytes;
                        var utf16Chars = [];
                        for (var i = 0; i < sigBytes; i += 2) {
                            var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
                            utf16Chars.push(String.fromCharCode(codePoint));
                        }
                        return utf16Chars.join('');
                    },
                    parse: function(utf16Str) {
                        var utf16StrLength = utf16Str.length;
                        var words = [];
                        for (var i = 0; i < utf16StrLength; i++) {
                            words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
                        }
                        return WordArray.create(words, utf16StrLength * 2);
                    }
                };
                C_enc.Utf16LE = {
                    stringify: function(wordArray) {
                        var words = wordArray.words;
                        var sigBytes = wordArray.sigBytes;
                        var utf16Chars = [];
                        for (var i = 0; i < sigBytes; i += 2) {
                            var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
                            utf16Chars.push(String.fromCharCode(codePoint));
                        }
                        return utf16Chars.join('');
                    },
                    parse: function(utf16Str) {
                        var utf16StrLength = utf16Str.length;
                        var words = [];
                        for (var i = 0; i < utf16StrLength; i++) {
                            words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
                        }
                        return WordArray.create(words, utf16StrLength * 2);
                    }
                };

                function swapEndian(word) {
                    return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
                }
            }());
            return CryptoJS.enc.Utf16;
        }));
    }, {
        "./core": 52
    }],
    55: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./sha1"), require("./hmac"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./sha1", "./hmac"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            (function() {
                var C = CryptoJS;
                var C_lib = C.lib;
                var Base = C_lib.Base;
                var WordArray = C_lib.WordArray;
                var C_algo = C.algo;
                var MD5 = C_algo.MD5;
                var EvpKDF = C_algo.EvpKDF = Base.extend({
                    cfg: Base.extend({
                        keySize: 128 / 32,
                        hasher: MD5,
                        iterations: 1
                    }),
                    init: function(cfg) {
                        this.cfg = this.cfg.extend(cfg);
                    },
                    compute: function(password, salt) {
                        var cfg = this.cfg;
                        var hasher = cfg.hasher.create();
                        var derivedKey = WordArray.create();
                        var derivedKeyWords = derivedKey.words;
                        var keySize = cfg.keySize;
                        var iterations = cfg.iterations;
                        while (derivedKeyWords.length < keySize) {
                            if (block) {
                                hasher.update(block);
                            }
                            var block = hasher.update(password).finalize(salt);
                            hasher.reset();
                            for (var i = 1; i < iterations; i++) {
                                block = hasher.finalize(block);
                                hasher.reset();
                            }
                            derivedKey.concat(block);
                        }
                        derivedKey.sigBytes = keySize * 4;
                        return derivedKey;
                    }
                });
                C.EvpKDF = function(password, salt, cfg) {
                    return EvpKDF.create(cfg).compute(password, salt);
                };
            }());
            return CryptoJS.EvpKDF;
        }));
    }, {
        "./core": 52,
        "./hmac": 57,
        "./sha1": 76
    }],
    56: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./cipher-core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./cipher-core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            (function(undefined) {
                var C = CryptoJS;
                var C_lib = C.lib;
                var CipherParams = C_lib.CipherParams;
                var C_enc = C.enc;
                var Hex = C_enc.Hex;
                var C_format = C.format;
                var HexFormatter = C_format.Hex = {
                    stringify: function(cipherParams) {
                        return cipherParams.ciphertext.toString(Hex);
                    },
                    parse: function(input) {
                        var ciphertext = Hex.parse(input);
                        return CipherParams.create({
                            ciphertext: ciphertext
                        });
                    }
                };
            }());
            return CryptoJS.format.Hex;
        }));
    }, {
        "./cipher-core": 51,
        "./core": 52
    }],
    57: [function(require, module, exports) {;
        (function(root, factory) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            (function() {
                var C = CryptoJS;
                var C_lib = C.lib;
                var Base = C_lib.Base;
                var C_enc = C.enc;
                var Utf8 = C_enc.Utf8;
                var C_algo = C.algo;
                var HMAC = C_algo.HMAC = Base.extend({
                    init: function(hasher, key) {
                        hasher = this._hasher = new hasher.init();
                        if (typeof key == 'string') {
                            key = Utf8.parse(key);
                        }
                        var hasherBlockSize = hasher.blockSize;
                        var hasherBlockSizeBytes = hasherBlockSize * 4;
                        if (key.sigBytes > hasherBlockSizeBytes) {
                            key = hasher.finalize(key);
                        }
                        key.clamp();
                        var oKey = this._oKey = key.clone();
                        var iKey = this._iKey = key.clone();
                        var oKeyWords = oKey.words;
                        var iKeyWords = iKey.words;
                        for (var i = 0; i < hasherBlockSize; i++) {
                            oKeyWords[i] ^= 0x5c5c5c5c;
                            iKeyWords[i] ^= 0x36363636;
                        }
                        oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
                        this.reset();
                    },
                    reset: function() {
                        var hasher = this._hasher;
                        hasher.reset();
                        hasher.update(this._iKey);
                    },
                    update: function(messageUpdate) {
                        this._hasher.update(messageUpdate);
                        return this;
                    },
                    finalize: function(messageUpdate) {
                        var hasher = this._hasher;
                        var innerHash = hasher.finalize(messageUpdate);
                        hasher.reset();
                        var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
                        return hmac;
                    }
                });
            }());
        }));
    }, {
        "./core": 52
    }],
    58: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./x64-core"), require("./lib-typedarrays"), require("./enc-utf16"), require("./enc-base64"), require("./md5"), require("./sha1"), require("./sha256"), require("./sha224"), require("./sha512"), require("./sha384"), require("./sha3"), require("./ripemd160"), require("./hmac"), require("./pbkdf2"), require("./evpkdf"), require("./cipher-core"), require("./mode-cfb"), require("./mode-ctr"), require("./mode-ctr-gladman"), require("./mode-ofb"), require("./mode-ecb"), require("./pad-ansix923"), require("./pad-iso10126"), require("./pad-iso97971"), require("./pad-zeropadding"), require("./pad-nopadding"), require("./format-hex"), require("./aes"), require("./tripledes"), require("./rc4"), require("./rabbit"), require("./rabbit-legacy"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy"], factory);
            } else {
                root.CryptoJS = factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            return CryptoJS;
        }));
    }, {
        "./aes": 50,
        "./cipher-core": 51,
        "./core": 52,
        "./enc-base64": 53,
        "./enc-utf16": 54,
        "./evpkdf": 55,
        "./format-hex": 56,
        "./hmac": 57,
        "./lib-typedarrays": 59,
        "./md5": 60,
        "./mode-cfb": 61,
        "./mode-ctr": 63,
        "./mode-ctr-gladman": 62,
        "./mode-ecb": 64,
        "./mode-ofb": 65,
        "./pad-ansix923": 66,
        "./pad-iso10126": 67,
        "./pad-iso97971": 68,
        "./pad-nopadding": 69,
        "./pad-zeropadding": 70,
        "./pbkdf2": 71,
        "./rabbit": 73,
        "./rabbit-legacy": 72,
        "./rc4": 74,
        "./ripemd160": 75,
        "./sha1": 76,
        "./sha224": 77,
        "./sha256": 78,
        "./sha3": 79,
        "./sha384": 80,
        "./sha512": 81,
        "./tripledes": 82,
        "./x64-core": 83
    }],
    59: [function(require, module, exports) {;
        (function(root, factory) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            (function() {
                if (typeof ArrayBuffer != 'function') {
                    return;
                }
                var C = CryptoJS;
                var C_lib = C.lib;
                var WordArray = C_lib.WordArray;
                var superInit = WordArray.init;
                var subInit = WordArray.init = function(typedArray) {
                    if (typedArray instanceof ArrayBuffer) {
                        typedArray = new Uint8Array(typedArray);
                    }
                    if (typedArray instanceof Int8Array || (typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {
                        typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
                    }
                    if (typedArray instanceof Uint8Array) {
                        var typedArrayByteLength = typedArray.byteLength;
                        var words = [];
                        for (var i = 0; i < typedArrayByteLength; i++) {
                            words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
                        }
                        superInit.call(this, words, typedArrayByteLength);
                    } else {
                        superInit.apply(this, arguments);
                    }
                };
                subInit.prototype = WordArray;
            }());
            return CryptoJS.lib.WordArray;
        }));
    }, {
        "./core": 52
    }],
    60: [function(require, module, exports) {;
        (function(root, factory) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            (function(Math) {
                var C = CryptoJS;
                var C_lib = C.lib;
                var WordArray = C_lib.WordArray;
                var Hasher = C_lib.Hasher;
                var C_algo = C.algo;
                var T = [];
                (function() {
                    for (var i = 0; i < 64; i++) {
                        T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
                    }
                }());
                var MD5 = C_algo.MD5 = Hasher.extend({
                    _doReset: function() {
                        this._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);
                    },
                    _doProcessBlock: function(M, offset) {
                        for (var i = 0; i < 16; i++) {
                            var offset_i = offset + i;
                            var M_offset_i = M[offset_i];
                            M[offset_i] = ((((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff) | (((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00));
                        }
                        var H = this._hash.words;
                        var M_offset_0 = M[offset + 0];
                        var M_offset_1 = M[offset + 1];
                        var M_offset_2 = M[offset + 2];
                        var M_offset_3 = M[offset + 3];
                        var M_offset_4 = M[offset + 4];
                        var M_offset_5 = M[offset + 5];
                        var M_offset_6 = M[offset + 6];
                        var M_offset_7 = M[offset + 7];
                        var M_offset_8 = M[offset + 8];
                        var M_offset_9 = M[offset + 9];
                        var M_offset_10 = M[offset + 10];
                        var M_offset_11 = M[offset + 11];
                        var M_offset_12 = M[offset + 12];
                        var M_offset_13 = M[offset + 13];
                        var M_offset_14 = M[offset + 14];
                        var M_offset_15 = M[offset + 15];
                        var a = H[0];
                        var b = H[1];
                        var c = H[2];
                        var d = H[3];
                        a = FF(a, b, c, d, M_offset_0, 7, T[0]);
                        d = FF(d, a, b, c, M_offset_1, 12, T[1]);
                        c = FF(c, d, a, b, M_offset_2, 17, T[2]);
                        b = FF(b, c, d, a, M_offset_3, 22, T[3]);
                        a = FF(a, b, c, d, M_offset_4, 7, T[4]);
                        d = FF(d, a, b, c, M_offset_5, 12, T[5]);
                        c = FF(c, d, a, b, M_offset_6, 17, T[6]);
                        b = FF(b, c, d, a, M_offset_7, 22, T[7]);
                        a = FF(a, b, c, d, M_offset_8, 7, T[8]);
                        d = FF(d, a, b, c, M_offset_9, 12, T[9]);
                        c = FF(c, d, a, b, M_offset_10, 17, T[10]);
                        b = FF(b, c, d, a, M_offset_11, 22, T[11]);
                        a = FF(a, b, c, d, M_offset_12, 7, T[12]);
                        d = FF(d, a, b, c, M_offset_13, 12, T[13]);
                        c = FF(c, d, a, b, M_offset_14, 17, T[14]);
                        b = FF(b, c, d, a, M_offset_15, 22, T[15]);
                        a = GG(a, b, c, d, M_offset_1, 5, T[16]);
                        d = GG(d, a, b, c, M_offset_6, 9, T[17]);
                        c = GG(c, d, a, b, M_offset_11, 14, T[18]);
                        b = GG(b, c, d, a, M_offset_0, 20, T[19]);
                        a = GG(a, b, c, d, M_offset_5, 5, T[20]);
                        d = GG(d, a, b, c, M_offset_10, 9, T[21]);
                        c = GG(c, d, a, b, M_offset_15, 14, T[22]);
                        b = GG(b, c, d, a, M_offset_4, 20, T[23]);
                        a = GG(a, b, c, d, M_offset_9, 5, T[24]);
                        d = GG(d, a, b, c, M_offset_14, 9, T[25]);
                        c = GG(c, d, a, b, M_offset_3, 14, T[26]);
                        b = GG(b, c, d, a, M_offset_8, 20, T[27]);
                        a = GG(a, b, c, d, M_offset_13, 5, T[28]);
                        d = GG(d, a, b, c, M_offset_2, 9, T[29]);
                        c = GG(c, d, a, b, M_offset_7, 14, T[30]);
                        b = GG(b, c, d, a, M_offset_12, 20, T[31]);
                        a = HH(a, b, c, d, M_offset_5, 4, T[32]);
                        d = HH(d, a, b, c, M_offset_8, 11, T[33]);
                        c = HH(c, d, a, b, M_offset_11, 16, T[34]);
                        b = HH(b, c, d, a, M_offset_14, 23, T[35]);
                        a = HH(a, b, c, d, M_offset_1, 4, T[36]);
                        d = HH(d, a, b, c, M_offset_4, 11, T[37]);
                        c = HH(c, d, a, b, M_offset_7, 16, T[38]);
                        b = HH(b, c, d, a, M_offset_10, 23, T[39]);
                        a = HH(a, b, c, d, M_offset_13, 4, T[40]);
                        d = HH(d, a, b, c, M_offset_0, 11, T[41]);
                        c = HH(c, d, a, b, M_offset_3, 16, T[42]);
                        b = HH(b, c, d, a, M_offset_6, 23, T[43]);
                        a = HH(a, b, c, d, M_offset_9, 4, T[44]);
                        d = HH(d, a, b, c, M_offset_12, 11, T[45]);
                        c = HH(c, d, a, b, M_offset_15, 16, T[46]);
                        b = HH(b, c, d, a, M_offset_2, 23, T[47]);
                        a = II(a, b, c, d, M_offset_0, 6, T[48]);
                        d = II(d, a, b, c, M_offset_7, 10, T[49]);
                        c = II(c, d, a, b, M_offset_14, 15, T[50]);
                        b = II(b, c, d, a, M_offset_5, 21, T[51]);
                        a = II(a, b, c, d, M_offset_12, 6, T[52]);
                        d = II(d, a, b, c, M_offset_3, 10, T[53]);
                        c = II(c, d, a, b, M_offset_10, 15, T[54]);
                        b = II(b, c, d, a, M_offset_1, 21, T[55]);
                        a = II(a, b, c, d, M_offset_8, 6, T[56]);
                        d = II(d, a, b, c, M_offset_15, 10, T[57]);
                        c = II(c, d, a, b, M_offset_6, 15, T[58]);
                        b = II(b, c, d, a, M_offset_13, 21, T[59]);
                        a = II(a, b, c, d, M_offset_4, 6, T[60]);
                        d = II(d, a, b, c, M_offset_11, 10, T[61]);
                        c = II(c, d, a, b, M_offset_2, 15, T[62]);
                        b = II(b, c, d, a, M_offset_9, 21, T[63]);
                        H[0] = (H[0] + a) | 0;
                        H[1] = (H[1] + b) | 0;
                        H[2] = (H[2] + c) | 0;
                        H[3] = (H[3] + d) | 0;
                    },
                    _doFinalize: function() {
                        var data = this._data;
                        var dataWords = data.words;
                        var nBitsTotal = this._nDataBytes * 8;
                        var nBitsLeft = data.sigBytes * 8;
                        dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
                        var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
                        var nBitsTotalL = nBitsTotal;
                        dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = ((((nBitsTotalH << 8) | (nBitsTotalH >>> 24)) & 0x00ff00ff) | (((nBitsTotalH << 24) | (nBitsTotalH >>> 8)) & 0xff00ff00));
                        dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = ((((nBitsTotalL << 8) | (nBitsTotalL >>> 24)) & 0x00ff00ff) | (((nBitsTotalL << 24) | (nBitsTotalL >>> 8)) & 0xff00ff00));
                        data.sigBytes = (dataWords.length + 1) * 4;
                        this._process();
                        var hash = this._hash;
                        var H = hash.words;
                        for (var i = 0; i < 4; i++) {
                            var H_i = H[i];
                            H[i] = (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff) | (((H_i << 24) | (H_i >>> 8)) & 0xff00ff00);
                        }
                        return hash;
                    },
                    clone: function() {
                        var clone = Hasher.clone.call(this);
                        clone._hash = this._hash.clone();
                        return clone;
                    }
                });

                function FF(a, b, c, d, x, s, t) {
                    var n = a + ((b & c) | (~b & d)) + x + t;
                    return ((n << s) | (n >>> (32 - s))) + b;
                }

                function GG(a, b, c, d, x, s, t) {
                    var n = a + ((b & d) | (c & ~d)) + x + t;
                    return ((n << s) | (n >>> (32 - s))) + b;
                }

                function HH(a, b, c, d, x, s, t) {
                    var n = a + (b ^ c ^ d) + x + t;
                    return ((n << s) | (n >>> (32 - s))) + b;
                }

                function II(a, b, c, d, x, s, t) {
                    var n = a + (c ^ (b | ~d)) + x + t;
                    return ((n << s) | (n >>> (32 - s))) + b;
                }
                C.MD5 = Hasher._createHelper(MD5);
                C.HmacMD5 = Hasher._createHmacHelper(MD5);
            }(Math));
            return CryptoJS.MD5;
        }));
    }, {
        "./core": 52
    }],
    61: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./cipher-core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./cipher-core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            CryptoJS.mode.CFB = (function() {
                var CFB = CryptoJS.lib.BlockCipherMode.extend();
                CFB.Encryptor = CFB.extend({
                    processBlock: function(words, offset) {
                        var cipher = this._cipher;
                        var blockSize = cipher.blockSize;
                        generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
                        this._prevBlock = words.slice(offset, offset + blockSize);
                    }
                });
                CFB.Decryptor = CFB.extend({
                    processBlock: function(words, offset) {
                        var cipher = this._cipher;
                        var blockSize = cipher.blockSize;
                        var thisBlock = words.slice(offset, offset + blockSize);
                        generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
                        this._prevBlock = thisBlock;
                    }
                });

                function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
                    var iv = this._iv;
                    if (iv) {
                        var keystream = iv.slice(0);
                        this._iv = undefined;
                    } else {
                        var keystream = this._prevBlock;
                    }
                    cipher.encryptBlock(keystream, 0);
                    for (var i = 0; i < blockSize; i++) {
                        words[offset + i] ^= keystream[i];
                    }
                }
                return CFB;
            }());
            return CryptoJS.mode.CFB;
        }));
    }, {
        "./cipher-core": 51,
        "./core": 52
    }],
    62: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./cipher-core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./cipher-core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            CryptoJS.mode.CTRGladman = (function() {
                var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

                function incWord(word) {
                    if (((word >> 24) & 0xff) === 0xff) {
                        var b1 = (word >> 16) & 0xff;
                        var b2 = (word >> 8) & 0xff;
                        var b3 = word & 0xff;
                        if (b1 === 0xff) {
                            b1 = 0;
                            if (b2 === 0xff) {
                                b2 = 0;
                                if (b3 === 0xff) {
                                    b3 = 0;
                                } else {
                                    ++b3;
                                }
                            } else {
                                ++b2;
                            }
                        } else {
                            ++b1;
                        }
                        word = 0;
                        word += (b1 << 16);
                        word += (b2 << 8);
                        word += b3;
                    } else {
                        word += (0x01 << 24);
                    }
                    return word;
                }

                function incCounter(counter) {
                    if ((counter[0] = incWord(counter[0])) === 0) {
                        counter[1] = incWord(counter[1]);
                    }
                    return counter;
                }
                var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
                    processBlock: function(words, offset) {
                        var cipher = this._cipher
                        var blockSize = cipher.blockSize;
                        var iv = this._iv;
                        var counter = this._counter;
                        if (iv) {
                            counter = this._counter = iv.slice(0);
                            this._iv = undefined;
                        }
                        incCounter(counter);
                        var keystream = counter.slice(0);
                        cipher.encryptBlock(keystream, 0);
                        for (var i = 0; i < blockSize; i++) {
                            words[offset + i] ^= keystream[i];
                        }
                    }
                });
                CTRGladman.Decryptor = Encryptor;
                return CTRGladman;
            }());
            return CryptoJS.mode.CTRGladman;
        }));
    }, {
        "./cipher-core": 51,
        "./core": 52
    }],
    63: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./cipher-core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./cipher-core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            CryptoJS.mode.CTR = (function() {
                var CTR = CryptoJS.lib.BlockCipherMode.extend();
                var Encryptor = CTR.Encryptor = CTR.extend({
                    processBlock: function(words, offset) {
                        var cipher = this._cipher
                        var blockSize = cipher.blockSize;
                        var iv = this._iv;
                        var counter = this._counter;
                        if (iv) {
                            counter = this._counter = iv.slice(0);
                            this._iv = undefined;
                        }
                        var keystream = counter.slice(0);
                        cipher.encryptBlock(keystream, 0);
                        counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0
                        for (var i = 0; i < blockSize; i++) {
                            words[offset + i] ^= keystream[i];
                        }
                    }
                });
                CTR.Decryptor = Encryptor;
                return CTR;
            }());
            return CryptoJS.mode.CTR;
        }));
    }, {
        "./cipher-core": 51,
        "./core": 52
    }],
    64: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./cipher-core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./cipher-core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            CryptoJS.mode.ECB = (function() {
                var ECB = CryptoJS.lib.BlockCipherMode.extend();
                ECB.Encryptor = ECB.extend({
                    processBlock: function(words, offset) {
                        this._cipher.encryptBlock(words, offset);
                    }
                });
                ECB.Decryptor = ECB.extend({
                    processBlock: function(words, offset) {
                        this._cipher.decryptBlock(words, offset);
                    }
                });
                return ECB;
            }());
            return CryptoJS.mode.ECB;
        }));
    }, {
        "./cipher-core": 51,
        "./core": 52
    }],
    65: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./cipher-core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./cipher-core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            CryptoJS.mode.OFB = (function() {
                var OFB = CryptoJS.lib.BlockCipherMode.extend();
                var Encryptor = OFB.Encryptor = OFB.extend({
                    processBlock: function(words, offset) {
                        var cipher = this._cipher
                        var blockSize = cipher.blockSize;
                        var iv = this._iv;
                        var keystream = this._keystream;
                        if (iv) {
                            keystream = this._keystream = iv.slice(0);
                            this._iv = undefined;
                        }
                        cipher.encryptBlock(keystream, 0);
                        for (var i = 0; i < blockSize; i++) {
                            words[offset + i] ^= keystream[i];
                        }
                    }
                });
                OFB.Decryptor = Encryptor;
                return OFB;
            }());
            return CryptoJS.mode.OFB;
        }));
    }, {
        "./cipher-core": 51,
        "./core": 52
    }],
    66: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./cipher-core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./cipher-core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            CryptoJS.pad.AnsiX923 = {
                pad: function(data, blockSize) {
                    var dataSigBytes = data.sigBytes;
                    var blockSizeBytes = blockSize * 4;
                    var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;
                    var lastBytePos = dataSigBytes + nPaddingBytes - 1;
                    data.clamp();
                    data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
                    data.sigBytes += nPaddingBytes;
                },
                unpad: function(data) {
                    var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;
                    data.sigBytes -= nPaddingBytes;
                }
            };
            return CryptoJS.pad.Ansix923;
        }));
    }, {
        "./cipher-core": 51,
        "./core": 52
    }],
    67: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./cipher-core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./cipher-core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            CryptoJS.pad.Iso10126 = {
                pad: function(data, blockSize) {
                    var blockSizeBytes = blockSize * 4;
                    var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
                    data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
                },
                unpad: function(data) {
                    var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;
                    data.sigBytes -= nPaddingBytes;
                }
            };
            return CryptoJS.pad.Iso10126;
        }));
    }, {
        "./cipher-core": 51,
        "./core": 52
    }],
    68: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./cipher-core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./cipher-core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            CryptoJS.pad.Iso97971 = {
                pad: function(data, blockSize) {
                    data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));
                    CryptoJS.pad.ZeroPadding.pad(data, blockSize);
                },
                unpad: function(data) {
                    CryptoJS.pad.ZeroPadding.unpad(data);
                    data.sigBytes--;
                }
            };
            return CryptoJS.pad.Iso97971;
        }));
    }, {
        "./cipher-core": 51,
        "./core": 52
    }],
    69: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./cipher-core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./cipher-core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            CryptoJS.pad.NoPadding = {
                pad: function() {},
                unpad: function() {}
            };
            return CryptoJS.pad.NoPadding;
        }));
    }, {
        "./cipher-core": 51,
        "./core": 52
    }],
    70: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./cipher-core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./cipher-core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            CryptoJS.pad.ZeroPadding = {
                pad: function(data, blockSize) {
                    var blockSizeBytes = blockSize * 4;
                    data.clamp();
                    data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
                },
                unpad: function(data) {
                    var dataWords = data.words;
                    var i = data.sigBytes - 1;
                    while (!((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
                        i--;
                    }
                    data.sigBytes = i + 1;
                }
            };
            return CryptoJS.pad.ZeroPadding;
        }));
    }, {
        "./cipher-core": 51,
        "./core": 52
    }],
    71: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./sha1"), require("./hmac"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./sha1", "./hmac"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            (function() {
                var C = CryptoJS;
                var C_lib = C.lib;
                var Base = C_lib.Base;
                var WordArray = C_lib.WordArray;
                var C_algo = C.algo;
                var SHA1 = C_algo.SHA1;
                var HMAC = C_algo.HMAC;
                var PBKDF2 = C_algo.PBKDF2 = Base.extend({
                    cfg: Base.extend({
                        keySize: 128 / 32,
                        hasher: SHA1,
                        iterations: 1
                    }),
                    init: function(cfg) {
                        this.cfg = this.cfg.extend(cfg);
                    },
                    compute: function(password, salt) {
                        var cfg = this.cfg;
                        var hmac = HMAC.create(cfg.hasher, password);
                        var derivedKey = WordArray.create();
                        var blockIndex = WordArray.create([0x00000001]);
                        var derivedKeyWords = derivedKey.words;
                        var blockIndexWords = blockIndex.words;
                        var keySize = cfg.keySize;
                        var iterations = cfg.iterations;
                        while (derivedKeyWords.length < keySize) {
                            var block = hmac.update(salt).finalize(blockIndex);
                            hmac.reset();
                            var blockWords = block.words;
                            var blockWordsLength = blockWords.length;
                            var intermediate = block;
                            for (var i = 1; i < iterations; i++) {
                                intermediate = hmac.finalize(intermediate);
                                hmac.reset();
                                var intermediateWords = intermediate.words;
                                for (var j = 0; j < blockWordsLength; j++) {
                                    blockWords[j] ^= intermediateWords[j];
                                }
                            }
                            derivedKey.concat(block);
                            blockIndexWords[0]++;
                        }
                        derivedKey.sigBytes = keySize * 4;
                        return derivedKey;
                    }
                });
                C.PBKDF2 = function(password, salt, cfg) {
                    return PBKDF2.create(cfg).compute(password, salt);
                };
            }());
            return CryptoJS.PBKDF2;
        }));
    }, {
        "./core": 52,
        "./hmac": 57,
        "./sha1": 76
    }],
    72: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            (function() {
                var C = CryptoJS;
                var C_lib = C.lib;
                var StreamCipher = C_lib.StreamCipher;
                var C_algo = C.algo;
                var S = [];
                var C_ = [];
                var G = [];
                var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
                    _doReset: function() {
                        var K = this._key.words;
                        var iv = this.cfg.iv;
                        var X = this._X = [K[0], (K[3] << 16) | (K[2] >>> 16), K[1], (K[0] << 16) | (K[3] >>> 16), K[2], (K[1] << 16) | (K[0] >>> 16), K[3], (K[2] << 16) | (K[1] >>> 16)];
                        var C = this._C = [(K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff), (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff), (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff), (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)];
                        this._b = 0;
                        for (var i = 0; i < 4; i++) {
                            nextState.call(this);
                        }
                        for (var i = 0; i < 8; i++) {
                            C[i] ^= X[(i + 4) & 7];
                        }
                        if (iv) {
                            var IV = iv.words;
                            var IV_0 = IV[0];
                            var IV_1 = IV[1];
                            var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
                            var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
                            var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
                            var i3 = (i2 << 16) | (i0 & 0x0000ffff);
                            C[0] ^= i0;
                            C[1] ^= i1;
                            C[2] ^= i2;
                            C[3] ^= i3;
                            C[4] ^= i0;
                            C[5] ^= i1;
                            C[6] ^= i2;
                            C[7] ^= i3;
                            for (var i = 0; i < 4; i++) {
                                nextState.call(this);
                            }
                        }
                    },
                    _doProcessBlock: function(M, offset) {
                        var X = this._X;
                        nextState.call(this);
                        S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
                        S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
                        S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
                        S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);
                        for (var i = 0; i < 4; i++) {
                            S[i] = (((S[i] << 8) | (S[i] >>> 24)) & 0x00ff00ff) | (((S[i] << 24) | (S[i] >>> 8)) & 0xff00ff00);
                            M[offset + i] ^= S[i];
                        }
                    },
                    blockSize: 128 / 32,
                    ivSize: 64 / 32
                });

                function nextState() {
                    var X = this._X;
                    var C = this._C;
                    for (var i = 0; i < 8; i++) {
                        C_[i] = C[i];
                    }
                    C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
                    C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
                    C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
                    C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
                    C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
                    C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
                    C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
                    C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
                    this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;
                    for (var i = 0; i < 8; i++) {
                        var gx = X[i] + C[i];
                        var ga = gx & 0xffff;
                        var gb = gx >>> 16;
                        var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
                        var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);
                        G[i] = gh ^ gl;
                    }
                    X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
                    X[1] = (G[1] + ((G[0] << 8) | (G[0] >>> 24)) + G[7]) | 0;
                    X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
                    X[3] = (G[3] + ((G[2] << 8) | (G[2] >>> 24)) + G[1]) | 0;
                    X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
                    X[5] = (G[5] + ((G[4] << 8) | (G[4] >>> 24)) + G[3]) | 0;
                    X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
                    X[7] = (G[7] + ((G[6] << 8) | (G[6] >>> 24)) + G[5]) | 0;
                }
                C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
            }());
            return CryptoJS.RabbitLegacy;
        }));
    }, {
        "./cipher-core": 51,
        "./core": 52,
        "./enc-base64": 53,
        "./evpkdf": 55,
        "./md5": 60
    }],
    73: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            (function() {
                var C = CryptoJS;
                var C_lib = C.lib;
                var StreamCipher = C_lib.StreamCipher;
                var C_algo = C.algo;
                var S = [];
                var C_ = [];
                var G = [];
                var Rabbit = C_algo.Rabbit = StreamCipher.extend({
                    _doReset: function() {
                        var K = this._key.words;
                        var iv = this.cfg.iv;
                        for (var i = 0; i < 4; i++) {
                            K[i] = (((K[i] << 8) | (K[i] >>> 24)) & 0x00ff00ff) | (((K[i] << 24) | (K[i] >>> 8)) & 0xff00ff00);
                        }
                        var X = this._X = [K[0], (K[3] << 16) | (K[2] >>> 16), K[1], (K[0] << 16) | (K[3] >>> 16), K[2], (K[1] << 16) | (K[0] >>> 16), K[3], (K[2] << 16) | (K[1] >>> 16)];
                        var C = this._C = [(K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff), (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff), (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff), (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)];
                        this._b = 0;
                        for (var i = 0; i < 4; i++) {
                            nextState.call(this);
                        }
                        for (var i = 0; i < 8; i++) {
                            C[i] ^= X[(i + 4) & 7];
                        }
                        if (iv) {
                            var IV = iv.words;
                            var IV_0 = IV[0];
                            var IV_1 = IV[1];
                            var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
                            var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
                            var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
                            var i3 = (i2 << 16) | (i0 & 0x0000ffff);
                            C[0] ^= i0;
                            C[1] ^= i1;
                            C[2] ^= i2;
                            C[3] ^= i3;
                            C[4] ^= i0;
                            C[5] ^= i1;
                            C[6] ^= i2;
                            C[7] ^= i3;
                            for (var i = 0; i < 4; i++) {
                                nextState.call(this);
                            }
                        }
                    },
                    _doProcessBlock: function(M, offset) {
                        var X = this._X;
                        nextState.call(this);
                        S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
                        S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
                        S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
                        S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);
                        for (var i = 0; i < 4; i++) {
                            S[i] = (((S[i] << 8) | (S[i] >>> 24)) & 0x00ff00ff) | (((S[i] << 24) | (S[i] >>> 8)) & 0xff00ff00);
                            M[offset + i] ^= S[i];
                        }
                    },
                    blockSize: 128 / 32,
                    ivSize: 64 / 32
                });

                function nextState() {
                    var X = this._X;
                    var C = this._C;
                    for (var i = 0; i < 8; i++) {
                        C_[i] = C[i];
                    }
                    C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
                    C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
                    C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
                    C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
                    C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
                    C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
                    C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
                    C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
                    this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;
                    for (var i = 0; i < 8; i++) {
                        var gx = X[i] + C[i];
                        var ga = gx & 0xffff;
                        var gb = gx >>> 16;
                        var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
                        var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);
                        G[i] = gh ^ gl;
                    }
                    X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
                    X[1] = (G[1] + ((G[0] << 8) | (G[0] >>> 24)) + G[7]) | 0;
                    X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
                    X[3] = (G[3] + ((G[2] << 8) | (G[2] >>> 24)) + G[1]) | 0;
                    X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
                    X[5] = (G[5] + ((G[4] << 8) | (G[4] >>> 24)) + G[3]) | 0;
                    X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
                    X[7] = (G[7] + ((G[6] << 8) | (G[6] >>> 24)) + G[5]) | 0;
                }
                C.Rabbit = StreamCipher._createHelper(Rabbit);
            }());
            return CryptoJS.Rabbit;
        }));
    }, {
        "./cipher-core": 51,
        "./core": 52,
        "./enc-base64": 53,
        "./evpkdf": 55,
        "./md5": 60
    }],
    74: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            (function() {
                var C = CryptoJS;
                var C_lib = C.lib;
                var StreamCipher = C_lib.StreamCipher;
                var C_algo = C.algo;
                var RC4 = C_algo.RC4 = StreamCipher.extend({
                    _doReset: function() {
                        var key = this._key;
                        var keyWords = key.words;
                        var keySigBytes = key.sigBytes;
                        var S = this._S = [];
                        for (var i = 0; i < 256; i++) {
                            S[i] = i;
                        }
                        for (var i = 0, j = 0; i < 256; i++) {
                            var keyByteIndex = i % keySigBytes;
                            var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;
                            j = (j + S[i] + keyByte) % 256;
                            var t = S[i];
                            S[i] = S[j];
                            S[j] = t;
                        }
                        this._i = this._j = 0;
                    },
                    _doProcessBlock: function(M, offset) {
                        M[offset] ^= generateKeystreamWord.call(this);
                    },
                    keySize: 256 / 32,
                    ivSize: 0
                });

                function generateKeystreamWord() {
                    var S = this._S;
                    var i = this._i;
                    var j = this._j;
                    var keystreamWord = 0;
                    for (var n = 0; n < 4; n++) {
                        i = (i + 1) % 256;
                        j = (j + S[i]) % 256;
                        var t = S[i];
                        S[i] = S[j];
                        S[j] = t;
                        keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
                    }
                    this._i = i;
                    this._j = j;
                    return keystreamWord;
                }
                C.RC4 = StreamCipher._createHelper(RC4);
                var RC4Drop = C_algo.RC4Drop = RC4.extend({
                    cfg: RC4.cfg.extend({
                        drop: 192
                    }),
                    _doReset: function() {
                        RC4._doReset.call(this);
                        for (var i = this.cfg.drop; i > 0; i--) {
                            generateKeystreamWord.call(this);
                        }
                    }
                });
                C.RC4Drop = StreamCipher._createHelper(RC4Drop);
            }());
            return CryptoJS.RC4;
        }));
    }, {
        "./cipher-core": 51,
        "./core": 52,
        "./enc-base64": 53,
        "./evpkdf": 55,
        "./md5": 60
    }],
    75: [function(require, module, exports) {;
        (function(root, factory) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            (function(Math) {
                var C = CryptoJS;
                var C_lib = C.lib;
                var WordArray = C_lib.WordArray;
                var Hasher = C_lib.Hasher;
                var C_algo = C.algo;
                var _zl = WordArray.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
                var _zr = WordArray.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
                var _sl = WordArray.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
                var _sr = WordArray.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
                var _hl = WordArray.create([0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
                var _hr = WordArray.create([0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);
                var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
                    _doReset: function() {
                        this._hash = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
                    },
                    _doProcessBlock: function(M, offset) {
                        for (var i = 0; i < 16; i++) {
                            var offset_i = offset + i;
                            var M_offset_i = M[offset_i];
                            M[offset_i] = ((((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff) | (((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00));
                        }
                        var H = this._hash.words;
                        var hl = _hl.words;
                        var hr = _hr.words;
                        var zl = _zl.words;
                        var zr = _zr.words;
                        var sl = _sl.words;
                        var sr = _sr.words;
                        var al, bl, cl, dl, el;
                        var ar, br, cr, dr, er;
                        ar = al = H[0];
                        br = bl = H[1];
                        cr = cl = H[2];
                        dr = dl = H[3];
                        er = el = H[4];
                        var t;
                        for (var i = 0; i < 80; i += 1) {
                            t = (al + M[offset + zl[i]]) | 0;
                            if (i < 16) {
                                t += f1(bl, cl, dl) + hl[0];
                            } else if (i < 32) {
                                t += f2(bl, cl, dl) + hl[1];
                            } else if (i < 48) {
                                t += f3(bl, cl, dl) + hl[2];
                            } else if (i < 64) {
                                t += f4(bl, cl, dl) + hl[3];
                            } else {
                                t += f5(bl, cl, dl) + hl[4];
                            }
                            t = t | 0;
                            t = rotl(t, sl[i]);
                            t = (t + el) | 0;
                            al = el;
                            el = dl;
                            dl = rotl(cl, 10);
                            cl = bl;
                            bl = t;
                            t = (ar + M[offset + zr[i]]) | 0;
                            if (i < 16) {
                                t += f5(br, cr, dr) + hr[0];
                            } else if (i < 32) {
                                t += f4(br, cr, dr) + hr[1];
                            } else if (i < 48) {
                                t += f3(br, cr, dr) + hr[2];
                            } else if (i < 64) {
                                t += f2(br, cr, dr) + hr[3];
                            } else {
                                t += f1(br, cr, dr) + hr[4];
                            }
                            t = t | 0;
                            t = rotl(t, sr[i]);
                            t = (t + er) | 0;
                            ar = er;
                            er = dr;
                            dr = rotl(cr, 10);
                            cr = br;
                            br = t;
                        }
                        t = (H[1] + cl + dr) | 0;
                        H[1] = (H[2] + dl + er) | 0;
                        H[2] = (H[3] + el + ar) | 0;
                        H[3] = (H[4] + al + br) | 0;
                        H[4] = (H[0] + bl + cr) | 0;
                        H[0] = t;
                    },
                    _doFinalize: function() {
                        var data = this._data;
                        var dataWords = data.words;
                        var nBitsTotal = this._nDataBytes * 8;
                        var nBitsLeft = data.sigBytes * 8;
                        dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
                        dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = ((((nBitsTotal << 8) | (nBitsTotal >>> 24)) & 0x00ff00ff) | (((nBitsTotal << 24) | (nBitsTotal >>> 8)) & 0xff00ff00));
                        data.sigBytes = (dataWords.length + 1) * 4;
                        this._process();
                        var hash = this._hash;
                        var H = hash.words;
                        for (var i = 0; i < 5; i++) {
                            var H_i = H[i];
                            H[i] = (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff) | (((H_i << 24) | (H_i >>> 8)) & 0xff00ff00);
                        }
                        return hash;
                    },
                    clone: function() {
                        var clone = Hasher.clone.call(this);
                        clone._hash = this._hash.clone();
                        return clone;
                    }
                });

                function f1(x, y, z) {
                    return ((x) ^ (y) ^ (z));
                }

                function f2(x, y, z) {
                    return (((x) & (y)) | ((~x) & (z)));
                }

                function f3(x, y, z) {
                    return (((x) | (~(y))) ^ (z));
                }

                function f4(x, y, z) {
                    return (((x) & (z)) | ((y) & (~(z))));
                }

                function f5(x, y, z) {
                    return ((x) ^ ((y) | (~(z))));
                }

                function rotl(x, n) {
                    return (x << n) | (x >>> (32 - n));
                }
                C.RIPEMD160 = Hasher._createHelper(RIPEMD160);
                C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
            }(Math));
            return CryptoJS.RIPEMD160;
        }));
    }, {
        "./core": 52
    }],
    76: [function(require, module, exports) {;
        (function(root, factory) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            (function() {
                var C = CryptoJS;
                var C_lib = C.lib;
                var WordArray = C_lib.WordArray;
                var Hasher = C_lib.Hasher;
                var C_algo = C.algo;
                var W = [];
                var SHA1 = C_algo.SHA1 = Hasher.extend({
                    _doReset: function() {
                        this._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
                    },
                    _doProcessBlock: function(M, offset) {
                        var H = this._hash.words;
                        var a = H[0];
                        var b = H[1];
                        var c = H[2];
                        var d = H[3];
                        var e = H[4];
                        for (var i = 0; i < 80; i++) {
                            if (i < 16) {
                                W[i] = M[offset + i] | 0;
                            } else {
                                var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                                W[i] = (n << 1) | (n >>> 31);
                            }
                            var t = ((a << 5) | (a >>> 27)) + e + W[i];
                            if (i < 20) {
                                t += ((b & c) | (~b & d)) + 0x5a827999;
                            } else if (i < 40) {
                                t += (b ^ c ^ d) + 0x6ed9eba1;
                            } else if (i < 60) {
                                t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
                            } else {
                                t += (b ^ c ^ d) - 0x359d3e2a;
                            }
                            e = d;
                            d = c;
                            c = (b << 30) | (b >>> 2);
                            b = a;
                            a = t;
                        }
                        H[0] = (H[0] + a) | 0;
                        H[1] = (H[1] + b) | 0;
                        H[2] = (H[2] + c) | 0;
                        H[3] = (H[3] + d) | 0;
                        H[4] = (H[4] + e) | 0;
                    },
                    _doFinalize: function() {
                        var data = this._data;
                        var dataWords = data.words;
                        var nBitsTotal = this._nDataBytes * 8;
                        var nBitsLeft = data.sigBytes * 8;
                        dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
                        dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
                        dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
                        data.sigBytes = dataWords.length * 4;
                        this._process();
                        return this._hash;
                    },
                    clone: function() {
                        var clone = Hasher.clone.call(this);
                        clone._hash = this._hash.clone();
                        return clone;
                    }
                });
                C.SHA1 = Hasher._createHelper(SHA1);
                C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
            }());
            return CryptoJS.SHA1;
        }));
    }, {
        "./core": 52
    }],
    77: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./sha256"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./sha256"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            (function() {
                var C = CryptoJS;
                var C_lib = C.lib;
                var WordArray = C_lib.WordArray;
                var C_algo = C.algo;
                var SHA256 = C_algo.SHA256;
                var SHA224 = C_algo.SHA224 = SHA256.extend({
                    _doReset: function() {
                        this._hash = new WordArray.init([0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]);
                    },
                    _doFinalize: function() {
                        var hash = SHA256._doFinalize.call(this);
                        hash.sigBytes -= 4;
                        return hash;
                    }
                });
                C.SHA224 = SHA256._createHelper(SHA224);
                C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
            }());
            return CryptoJS.SHA224;
        }));
    }, {
        "./core": 52,
        "./sha256": 78
    }],
    78: [function(require, module, exports) {;
        (function(root, factory) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            (function(Math) {
                var C = CryptoJS;
                var C_lib = C.lib;
                var WordArray = C_lib.WordArray;
                var Hasher = C_lib.Hasher;
                var C_algo = C.algo;
                var H = [];
                var K = [];
                (function() {
                    function isPrime(n) {
                        var sqrtN = Math.sqrt(n);
                        for (var factor = 2; factor <= sqrtN; factor++) {
                            if (!(n % factor)) {
                                return false;
                            }
                        }
                        return true;
                    }

                    function getFractionalBits(n) {
                        return ((n - (n | 0)) * 0x100000000) | 0;
                    }
                    var n = 2;
                    var nPrime = 0;
                    while (nPrime < 64) {
                        if (isPrime(n)) {
                            if (nPrime < 8) {
                                H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
                            }
                            K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));
                            nPrime++;
                        }
                        n++;
                    }
                }());
                var W = [];
                var SHA256 = C_algo.SHA256 = Hasher.extend({
                    _doReset: function() {
                        this._hash = new WordArray.init(H.slice(0));
                    },
                    _doProcessBlock: function(M, offset) {
                        var H = this._hash.words;
                        var a = H[0];
                        var b = H[1];
                        var c = H[2];
                        var d = H[3];
                        var e = H[4];
                        var f = H[5];
                        var g = H[6];
                        var h = H[7];
                        for (var i = 0; i < 64; i++) {
                            if (i < 16) {
                                W[i] = M[offset + i] | 0;
                            } else {
                                var gamma0x = W[i - 15];
                                var gamma0 = ((gamma0x << 25) | (gamma0x >>> 7)) ^ ((gamma0x << 14) | (gamma0x >>> 18)) ^ (gamma0x >>> 3);
                                var gamma1x = W[i - 2];
                                var gamma1 = ((gamma1x << 15) | (gamma1x >>> 17)) ^ ((gamma1x << 13) | (gamma1x >>> 19)) ^ (gamma1x >>> 10);
                                W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
                            }
                            var ch = (e & f) ^ (~e & g);
                            var maj = (a & b) ^ (a & c) ^ (b & c);
                            var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
                            var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7) | (e >>> 25));
                            var t1 = h + sigma1 + ch + K[i] + W[i];
                            var t2 = sigma0 + maj;
                            h = g;
                            g = f;
                            f = e;
                            e = (d + t1) | 0;
                            d = c;
                            c = b;
                            b = a;
                            a = (t1 + t2) | 0;
                        }
                        H[0] = (H[0] + a) | 0;
                        H[1] = (H[1] + b) | 0;
                        H[2] = (H[2] + c) | 0;
                        H[3] = (H[3] + d) | 0;
                        H[4] = (H[4] + e) | 0;
                        H[5] = (H[5] + f) | 0;
                        H[6] = (H[6] + g) | 0;
                        H[7] = (H[7] + h) | 0;
                    },
                    _doFinalize: function() {
                        var data = this._data;
                        var dataWords = data.words;
                        var nBitsTotal = this._nDataBytes * 8;
                        var nBitsLeft = data.sigBytes * 8;
                        dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
                        dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
                        dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
                        data.sigBytes = dataWords.length * 4;
                        this._process();
                        return this._hash;
                    },
                    clone: function() {
                        var clone = Hasher.clone.call(this);
                        clone._hash = this._hash.clone();
                        return clone;
                    }
                });
                C.SHA256 = Hasher._createHelper(SHA256);
                C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
            }(Math));
            return CryptoJS.SHA256;
        }));
    }, {
        "./core": 52
    }],
    79: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./x64-core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./x64-core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            (function(Math) {
                var C = CryptoJS;
                var C_lib = C.lib;
                var WordArray = C_lib.WordArray;
                var Hasher = C_lib.Hasher;
                var C_x64 = C.x64;
                var X64Word = C_x64.Word;
                var C_algo = C.algo;
                var RHO_OFFSETS = [];
                var PI_INDEXES = [];
                var ROUND_CONSTANTS = [];
                (function() {
                    var x = 1,
                        y = 0;
                    for (var t = 0; t < 24; t++) {
                        RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;
                        var newX = y % 5;
                        var newY = (2 * x + 3 * y) % 5;
                        x = newX;
                        y = newY;
                    }
                    for (var x = 0; x < 5; x++) {
                        for (var y = 0; y < 5; y++) {
                            PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
                        }
                    }
                    var LFSR = 0x01;
                    for (var i = 0; i < 24; i++) {
                        var roundConstantMsw = 0;
                        var roundConstantLsw = 0;
                        for (var j = 0; j < 7; j++) {
                            if (LFSR & 0x01) {
                                var bitPosition = (1 << j) - 1;
                                if (bitPosition < 32) {
                                    roundConstantLsw ^= 1 << bitPosition;
                                } else {
                                    roundConstantMsw ^= 1 << (bitPosition - 32);
                                }
                            }
                            if (LFSR & 0x80) {
                                LFSR = (LFSR << 1) ^ 0x71;
                            } else {
                                LFSR <<= 1;
                            }
                        }
                        ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
                    }
                }());
                var T = [];
                (function() {
                    for (var i = 0; i < 25; i++) {
                        T[i] = X64Word.create();
                    }
                }());
                var SHA3 = C_algo.SHA3 = Hasher.extend({
                    cfg: Hasher.cfg.extend({
                        outputLength: 512
                    }),
                    _doReset: function() {
                        var state = this._state = []
                        for (var i = 0; i < 25; i++) {
                            state[i] = new X64Word.init();
                        }
                        this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
                    },
                    _doProcessBlock: function(M, offset) {
                        var state = this._state;
                        var nBlockSizeLanes = this.blockSize / 2;
                        for (var i = 0; i < nBlockSizeLanes; i++) {
                            var M2i = M[offset + 2 * i];
                            var M2i1 = M[offset + 2 * i + 1];
                            M2i = ((((M2i << 8) | (M2i >>> 24)) & 0x00ff00ff) | (((M2i << 24) | (M2i >>> 8)) & 0xff00ff00));
                            M2i1 = ((((M2i1 << 8) | (M2i1 >>> 24)) & 0x00ff00ff) | (((M2i1 << 24) | (M2i1 >>> 8)) & 0xff00ff00));
                            var lane = state[i];
                            lane.high ^= M2i1;
                            lane.low ^= M2i;
                        }
                        for (var round = 0; round < 24; round++) {
                            for (var x = 0; x < 5; x++) {
                                var tMsw = 0,
                                    tLsw = 0;
                                for (var y = 0; y < 5; y++) {
                                    var lane = state[x + 5 * y];
                                    tMsw ^= lane.high;
                                    tLsw ^= lane.low;
                                }
                                var Tx = T[x];
                                Tx.high = tMsw;
                                Tx.low = tLsw;
                            }
                            for (var x = 0; x < 5; x++) {
                                var Tx4 = T[(x + 4) % 5];
                                var Tx1 = T[(x + 1) % 5];
                                var Tx1Msw = Tx1.high;
                                var Tx1Lsw = Tx1.low;
                                var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
                                var tLsw = Tx4.low ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
                                for (var y = 0; y < 5; y++) {
                                    var lane = state[x + 5 * y];
                                    lane.high ^= tMsw;
                                    lane.low ^= tLsw;
                                }
                            }
                            for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
                                var lane = state[laneIndex];
                                var laneMsw = lane.high;
                                var laneLsw = lane.low;
                                var rhoOffset = RHO_OFFSETS[laneIndex];
                                if (rhoOffset < 32) {
                                    var tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
                                    var tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
                                } else {
                                    var tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
                                    var tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
                                }
                                var TPiLane = T[PI_INDEXES[laneIndex]];
                                TPiLane.high = tMsw;
                                TPiLane.low = tLsw;
                            }
                            var T0 = T[0];
                            var state0 = state[0];
                            T0.high = state0.high;
                            T0.low = state0.low;
                            for (var x = 0; x < 5; x++) {
                                for (var y = 0; y < 5; y++) {
                                    var laneIndex = x + 5 * y;
                                    var lane = state[laneIndex];
                                    var TLane = T[laneIndex];
                                    var Tx1Lane = T[((x + 1) % 5) + 5 * y];
                                    var Tx2Lane = T[((x + 2) % 5) + 5 * y];
                                    lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
                                    lane.low = TLane.low ^ (~Tx1Lane.low & Tx2Lane.low);
                                }
                            }
                            var lane = state[0];
                            var roundConstant = ROUND_CONSTANTS[round];
                            lane.high ^= roundConstant.high;
                            lane.low ^= roundConstant.low;;
                        }
                    },
                    _doFinalize: function() {
                        var data = this._data;
                        var dataWords = data.words;
                        var nBitsTotal = this._nDataBytes * 8;
                        var nBitsLeft = data.sigBytes * 8;
                        var blockSizeBits = this.blockSize * 32;
                        dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
                        dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
                        data.sigBytes = dataWords.length * 4;
                        this._process();
                        var state = this._state;
                        var outputLengthBytes = this.cfg.outputLength / 8;
                        var outputLengthLanes = outputLengthBytes / 8;
                        var hashWords = [];
                        for (var i = 0; i < outputLengthLanes; i++) {
                            var lane = state[i];
                            var laneMsw = lane.high;
                            var laneLsw = lane.low;
                            laneMsw = ((((laneMsw << 8) | (laneMsw >>> 24)) & 0x00ff00ff) | (((laneMsw << 24) | (laneMsw >>> 8)) & 0xff00ff00));
                            laneLsw = ((((laneLsw << 8) | (laneLsw >>> 24)) & 0x00ff00ff) | (((laneLsw << 24) | (laneLsw >>> 8)) & 0xff00ff00));
                            hashWords.push(laneLsw);
                            hashWords.push(laneMsw);
                        }
                        return new WordArray.init(hashWords, outputLengthBytes);
                    },
                    clone: function() {
                        var clone = Hasher.clone.call(this);
                        var state = clone._state = this._state.slice(0);
                        for (var i = 0; i < 25; i++) {
                            state[i] = state[i].clone();
                        }
                        return clone;
                    }
                });
                C.SHA3 = Hasher._createHelper(SHA3);
                C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
            }(Math));
            return CryptoJS.SHA3;
        }));
    }, {
        "./core": 52,
        "./x64-core": 83
    }],
    80: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./x64-core"), require("./sha512"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./x64-core", "./sha512"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            (function() {
                var C = CryptoJS;
                var C_x64 = C.x64;
                var X64Word = C_x64.Word;
                var X64WordArray = C_x64.WordArray;
                var C_algo = C.algo;
                var SHA512 = C_algo.SHA512;
                var SHA384 = C_algo.SHA384 = SHA512.extend({
                    _doReset: function() {
                        this._hash = new X64WordArray.init([new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507), new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939), new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511), new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)]);
                    },
                    _doFinalize: function() {
                        var hash = SHA512._doFinalize.call(this);
                        hash.sigBytes -= 16;
                        return hash;
                    }
                });
                C.SHA384 = SHA512._createHelper(SHA384);
                C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
            }());
            return CryptoJS.SHA384;
        }));
    }, {
        "./core": 52,
        "./sha512": 81,
        "./x64-core": 83
    }],
    81: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./x64-core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./x64-core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            (function() {
                var C = CryptoJS;
                var C_lib = C.lib;
                var Hasher = C_lib.Hasher;
                var C_x64 = C.x64;
                var X64Word = C_x64.Word;
                var X64WordArray = C_x64.WordArray;
                var C_algo = C.algo;

                function X64Word_create() {
                    return X64Word.create.apply(X64Word, arguments);
                }
                var K = [X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd), X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc), X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019), X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118), X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe), X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2), X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1), X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694), X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3), X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65), X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483), X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5), X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210), X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4), X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725), X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70), X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926), X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df), X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8), X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b), X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001), X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30), X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910), X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8), X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53), X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8), X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb), X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3), X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60), X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec), X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9), X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b), X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207), X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178), X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6), X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b), X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493), X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c), X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a), X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)];
                var W = [];
                (function() {
                    for (var i = 0; i < 80; i++) {
                        W[i] = X64Word_create();
                    }
                }());
                var SHA512 = C_algo.SHA512 = Hasher.extend({
                    _doReset: function() {
                        this._hash = new X64WordArray.init([new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b), new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1), new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f), new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)]);
                    },
                    _doProcessBlock: function(M, offset) {
                        var H = this._hash.words;
                        var H0 = H[0];
                        var H1 = H[1];
                        var H2 = H[2];
                        var H3 = H[3];
                        var H4 = H[4];
                        var H5 = H[5];
                        var H6 = H[6];
                        var H7 = H[7];
                        var H0h = H0.high;
                        var H0l = H0.low;
                        var H1h = H1.high;
                        var H1l = H1.low;
                        var H2h = H2.high;
                        var H2l = H2.low;
                        var H3h = H3.high;
                        var H3l = H3.low;
                        var H4h = H4.high;
                        var H4l = H4.low;
                        var H5h = H5.high;
                        var H5l = H5.low;
                        var H6h = H6.high;
                        var H6l = H6.low;
                        var H7h = H7.high;
                        var H7l = H7.low;
                        var ah = H0h;
                        var al = H0l;
                        var bh = H1h;
                        var bl = H1l;
                        var ch = H2h;
                        var cl = H2l;
                        var dh = H3h;
                        var dl = H3l;
                        var eh = H4h;
                        var el = H4l;
                        var fh = H5h;
                        var fl = H5l;
                        var gh = H6h;
                        var gl = H6l;
                        var hh = H7h;
                        var hl = H7l;
                        for (var i = 0; i < 80; i++) {
                            var Wi = W[i];
                            if (i < 16) {
                                var Wih = Wi.high = M[offset + i * 2] | 0;
                                var Wil = Wi.low = M[offset + i * 2 + 1] | 0;
                            } else {
                                var gamma0x = W[i - 15];
                                var gamma0xh = gamma0x.high;
                                var gamma0xl = gamma0x.low;
                                var gamma0h = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
                                var gamma0l = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));
                                var gamma1x = W[i - 2];
                                var gamma1xh = gamma1x.high;
                                var gamma1xl = gamma1x.low;
                                var gamma1h = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
                                var gamma1l = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));
                                var Wi7 = W[i - 7];
                                var Wi7h = Wi7.high;
                                var Wi7l = Wi7.low;
                                var Wi16 = W[i - 16];
                                var Wi16h = Wi16.high;
                                var Wi16l = Wi16.low;
                                var Wil = gamma0l + Wi7l;
                                var Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
                                var Wil = Wil + gamma1l;
                                var Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
                                var Wil = Wil + Wi16l;
                                var Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);
                                Wi.high = Wih;
                                Wi.low = Wil;
                            }
                            var chh = (eh & fh) ^ (~eh & gh);
                            var chl = (el & fl) ^ (~el & gl);
                            var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
                            var majl = (al & bl) ^ (al & cl) ^ (bl & cl);
                            var sigma0h = ((ah >>> 28) | (al << 4)) ^ ((ah << 30) | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
                            var sigma0l = ((al >>> 28) | (ah << 4)) ^ ((al << 30) | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
                            var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
                            var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));
                            var Ki = K[i];
                            var Kih = Ki.high;
                            var Kil = Ki.low;
                            var t1l = hl + sigma1l;
                            var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
                            var t1l = t1l + chl;
                            var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
                            var t1l = t1l + Kil;
                            var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
                            var t1l = t1l + Wil;
                            var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);
                            var t2l = sigma0l + majl;
                            var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);
                            hh = gh;
                            hl = gl;
                            gh = fh;
                            gl = fl;
                            fh = eh;
                            fl = el;
                            el = (dl + t1l) | 0;
                            eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
                            dh = ch;
                            dl = cl;
                            ch = bh;
                            cl = bl;
                            bh = ah;
                            bl = al;
                            al = (t1l + t2l) | 0;
                            ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
                        }
                        H0l = H0.low = (H0l + al);
                        H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
                        H1l = H1.low = (H1l + bl);
                        H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
                        H2l = H2.low = (H2l + cl);
                        H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
                        H3l = H3.low = (H3l + dl);
                        H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
                        H4l = H4.low = (H4l + el);
                        H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
                        H5l = H5.low = (H5l + fl);
                        H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
                        H6l = H6.low = (H6l + gl);
                        H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
                        H7l = H7.low = (H7l + hl);
                        H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
                    },
                    _doFinalize: function() {
                        var data = this._data;
                        var dataWords = data.words;
                        var nBitsTotal = this._nDataBytes * 8;
                        var nBitsLeft = data.sigBytes * 8;
                        dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
                        dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
                        dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
                        data.sigBytes = dataWords.length * 4;
                        this._process();
                        var hash = this._hash.toX32();
                        return hash;
                    },
                    clone: function() {
                        var clone = Hasher.clone.call(this);
                        clone._hash = this._hash.clone();
                        return clone;
                    },
                    blockSize: 1024 / 32
                });
                C.SHA512 = Hasher._createHelper(SHA512);
                C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
            }());
            return CryptoJS.SHA512;
        }));
    }, {
        "./core": 52,
        "./x64-core": 83
    }],
    82: [function(require, module, exports) {;
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            (function() {
                var C = CryptoJS;
                var C_lib = C.lib;
                var WordArray = C_lib.WordArray;
                var BlockCipher = C_lib.BlockCipher;
                var C_algo = C.algo;
                var PC1 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
                var PC2 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];
                var BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
                var SBOX_P = [{
                    0x0: 0x808200,
                    0x10000000: 0x8000,
                    0x20000000: 0x808002,
                    0x30000000: 0x2,
                    0x40000000: 0x200,
                    0x50000000: 0x808202,
                    0x60000000: 0x800202,
                    0x70000000: 0x800000,
                    0x80000000: 0x202,
                    0x90000000: 0x800200,
                    0xa0000000: 0x8200,
                    0xb0000000: 0x808000,
                    0xc0000000: 0x8002,
                    0xd0000000: 0x800002,
                    0xe0000000: 0x0,
                    0xf0000000: 0x8202,
                    0x8000000: 0x0,
                    0x18000000: 0x808202,
                    0x28000000: 0x8202,
                    0x38000000: 0x8000,
                    0x48000000: 0x808200,
                    0x58000000: 0x200,
                    0x68000000: 0x808002,
                    0x78000000: 0x2,
                    0x88000000: 0x800200,
                    0x98000000: 0x8200,
                    0xa8000000: 0x808000,
                    0xb8000000: 0x800202,
                    0xc8000000: 0x800002,
                    0xd8000000: 0x8002,
                    0xe8000000: 0x202,
                    0xf8000000: 0x800000,
                    0x1: 0x8000,
                    0x10000001: 0x2,
                    0x20000001: 0x808200,
                    0x30000001: 0x800000,
                    0x40000001: 0x808002,
                    0x50000001: 0x8200,
                    0x60000001: 0x200,
                    0x70000001: 0x800202,
                    0x80000001: 0x808202,
                    0x90000001: 0x808000,
                    0xa0000001: 0x800002,
                    0xb0000001: 0x8202,
                    0xc0000001: 0x202,
                    0xd0000001: 0x800200,
                    0xe0000001: 0x8002,
                    0xf0000001: 0x0,
                    0x8000001: 0x808202,
                    0x18000001: 0x808000,
                    0x28000001: 0x800000,
                    0x38000001: 0x200,
                    0x48000001: 0x8000,
                    0x58000001: 0x800002,
                    0x68000001: 0x2,
                    0x78000001: 0x8202,
                    0x88000001: 0x8002,
                    0x98000001: 0x800202,
                    0xa8000001: 0x202,
                    0xb8000001: 0x808200,
                    0xc8000001: 0x800200,
                    0xd8000001: 0x0,
                    0xe8000001: 0x8200,
                    0xf8000001: 0x808002
                }, {
                    0x0: 0x40084010,
                    0x1000000: 0x4000,
                    0x2000000: 0x80000,
                    0x3000000: 0x40080010,
                    0x4000000: 0x40000010,
                    0x5000000: 0x40084000,
                    0x6000000: 0x40004000,
                    0x7000000: 0x10,
                    0x8000000: 0x84000,
                    0x9000000: 0x40004010,
                    0xa000000: 0x40000000,
                    0xb000000: 0x84010,
                    0xc000000: 0x80010,
                    0xd000000: 0x0,
                    0xe000000: 0x4010,
                    0xf000000: 0x40080000,
                    0x800000: 0x40004000,
                    0x1800000: 0x84010,
                    0x2800000: 0x10,
                    0x3800000: 0x40004010,
                    0x4800000: 0x40084010,
                    0x5800000: 0x40000000,
                    0x6800000: 0x80000,
                    0x7800000: 0x40080010,
                    0x8800000: 0x80010,
                    0x9800000: 0x0,
                    0xa800000: 0x4000,
                    0xb800000: 0x40080000,
                    0xc800000: 0x40000010,
                    0xd800000: 0x84000,
                    0xe800000: 0x40084000,
                    0xf800000: 0x4010,
                    0x10000000: 0x0,
                    0x11000000: 0x40080010,
                    0x12000000: 0x40004010,
                    0x13000000: 0x40084000,
                    0x14000000: 0x40080000,
                    0x15000000: 0x10,
                    0x16000000: 0x84010,
                    0x17000000: 0x4000,
                    0x18000000: 0x4010,
                    0x19000000: 0x80000,
                    0x1a000000: 0x80010,
                    0x1b000000: 0x40000010,
                    0x1c000000: 0x84000,
                    0x1d000000: 0x40004000,
                    0x1e000000: 0x40000000,
                    0x1f000000: 0x40084010,
                    0x10800000: 0x84010,
                    0x11800000: 0x80000,
                    0x12800000: 0x40080000,
                    0x13800000: 0x4000,
                    0x14800000: 0x40004000,
                    0x15800000: 0x40084010,
                    0x16800000: 0x10,
                    0x17800000: 0x40000000,
                    0x18800000: 0x40084000,
                    0x19800000: 0x40000010,
                    0x1a800000: 0x40004010,
                    0x1b800000: 0x80010,
                    0x1c800000: 0x0,
                    0x1d800000: 0x4010,
                    0x1e800000: 0x40080010,
                    0x1f800000: 0x84000
                }, {
                    0x0: 0x104,
                    0x100000: 0x0,
                    0x200000: 0x4000100,
                    0x300000: 0x10104,
                    0x400000: 0x10004,
                    0x500000: 0x4000004,
                    0x600000: 0x4010104,
                    0x700000: 0x4010000,
                    0x800000: 0x4000000,
                    0x900000: 0x4010100,
                    0xa00000: 0x10100,
                    0xb00000: 0x4010004,
                    0xc00000: 0x4000104,
                    0xd00000: 0x10000,
                    0xe00000: 0x4,
                    0xf00000: 0x100,
                    0x80000: 0x4010100,
                    0x180000: 0x4010004,
                    0x280000: 0x0,
                    0x380000: 0x4000100,
                    0x480000: 0x4000004,
                    0x580000: 0x10000,
                    0x680000: 0x10004,
                    0x780000: 0x104,
                    0x880000: 0x4,
                    0x980000: 0x100,
                    0xa80000: 0x4010000,
                    0xb80000: 0x10104,
                    0xc80000: 0x10100,
                    0xd80000: 0x4000104,
                    0xe80000: 0x4010104,
                    0xf80000: 0x4000000,
                    0x1000000: 0x4010100,
                    0x1100000: 0x10004,
                    0x1200000: 0x10000,
                    0x1300000: 0x4000100,
                    0x1400000: 0x100,
                    0x1500000: 0x4010104,
                    0x1600000: 0x4000004,
                    0x1700000: 0x0,
                    0x1800000: 0x4000104,
                    0x1900000: 0x4000000,
                    0x1a00000: 0x4,
                    0x1b00000: 0x10100,
                    0x1c00000: 0x4010000,
                    0x1d00000: 0x104,
                    0x1e00000: 0x10104,
                    0x1f00000: 0x4010004,
                    0x1080000: 0x4000000,
                    0x1180000: 0x104,
                    0x1280000: 0x4010100,
                    0x1380000: 0x0,
                    0x1480000: 0x10004,
                    0x1580000: 0x4000100,
                    0x1680000: 0x100,
                    0x1780000: 0x4010004,
                    0x1880000: 0x10000,
                    0x1980000: 0x4010104,
                    0x1a80000: 0x10104,
                    0x1b80000: 0x4000004,
                    0x1c80000: 0x4000104,
                    0x1d80000: 0x4010000,
                    0x1e80000: 0x4,
                    0x1f80000: 0x10100
                }, {
                    0x0: 0x80401000,
                    0x10000: 0x80001040,
                    0x20000: 0x401040,
                    0x30000: 0x80400000,
                    0x40000: 0x0,
                    0x50000: 0x401000,
                    0x60000: 0x80000040,
                    0x70000: 0x400040,
                    0x80000: 0x80000000,
                    0x90000: 0x400000,
                    0xa0000: 0x40,
                    0xb0000: 0x80001000,
                    0xc0000: 0x80400040,
                    0xd0000: 0x1040,
                    0xe0000: 0x1000,
                    0xf0000: 0x80401040,
                    0x8000: 0x80001040,
                    0x18000: 0x40,
                    0x28000: 0x80400040,
                    0x38000: 0x80001000,
                    0x48000: 0x401000,
                    0x58000: 0x80401040,
                    0x68000: 0x0,
                    0x78000: 0x80400000,
                    0x88000: 0x1000,
                    0x98000: 0x80401000,
                    0xa8000: 0x400000,
                    0xb8000: 0x1040,
                    0xc8000: 0x80000000,
                    0xd8000: 0x400040,
                    0xe8000: 0x401040,
                    0xf8000: 0x80000040,
                    0x100000: 0x400040,
                    0x110000: 0x401000,
                    0x120000: 0x80000040,
                    0x130000: 0x0,
                    0x140000: 0x1040,
                    0x150000: 0x80400040,
                    0x160000: 0x80401000,
                    0x170000: 0x80001040,
                    0x180000: 0x80401040,
                    0x190000: 0x80000000,
                    0x1a0000: 0x80400000,
                    0x1b0000: 0x401040,
                    0x1c0000: 0x80001000,
                    0x1d0000: 0x400000,
                    0x1e0000: 0x40,
                    0x1f0000: 0x1000,
                    0x108000: 0x80400000,
                    0x118000: 0x80401040,
                    0x128000: 0x0,
                    0x138000: 0x401000,
                    0x148000: 0x400040,
                    0x158000: 0x80000000,
                    0x168000: 0x80001040,
                    0x178000: 0x40,
                    0x188000: 0x80000040,
                    0x198000: 0x1000,
                    0x1a8000: 0x80001000,
                    0x1b8000: 0x80400040,
                    0x1c8000: 0x1040,
                    0x1d8000: 0x80401000,
                    0x1e8000: 0x400000,
                    0x1f8000: 0x401040
                }, {
                    0x0: 0x80,
                    0x1000: 0x1040000,
                    0x2000: 0x40000,
                    0x3000: 0x20000000,
                    0x4000: 0x20040080,
                    0x5000: 0x1000080,
                    0x6000: 0x21000080,
                    0x7000: 0x40080,
                    0x8000: 0x1000000,
                    0x9000: 0x20040000,
                    0xa000: 0x20000080,
                    0xb000: 0x21040080,
                    0xc000: 0x21040000,
                    0xd000: 0x0,
                    0xe000: 0x1040080,
                    0xf000: 0x21000000,
                    0x800: 0x1040080,
                    0x1800: 0x21000080,
                    0x2800: 0x80,
                    0x3800: 0x1040000,
                    0x4800: 0x40000,
                    0x5800: 0x20040080,
                    0x6800: 0x21040000,
                    0x7800: 0x20000000,
                    0x8800: 0x20040000,
                    0x9800: 0x0,
                    0xa800: 0x21040080,
                    0xb800: 0x1000080,
                    0xc800: 0x20000080,
                    0xd800: 0x21000000,
                    0xe800: 0x1000000,
                    0xf800: 0x40080,
                    0x10000: 0x40000,
                    0x11000: 0x80,
                    0x12000: 0x20000000,
                    0x13000: 0x21000080,
                    0x14000: 0x1000080,
                    0x15000: 0x21040000,
                    0x16000: 0x20040080,
                    0x17000: 0x1000000,
                    0x18000: 0x21040080,
                    0x19000: 0x21000000,
                    0x1a000: 0x1040000,
                    0x1b000: 0x20040000,
                    0x1c000: 0x40080,
                    0x1d000: 0x20000080,
                    0x1e000: 0x0,
                    0x1f000: 0x1040080,
                    0x10800: 0x21000080,
                    0x11800: 0x1000000,
                    0x12800: 0x1040000,
                    0x13800: 0x20040080,
                    0x14800: 0x20000000,
                    0x15800: 0x1040080,
                    0x16800: 0x80,
                    0x17800: 0x21040000,
                    0x18800: 0x40080,
                    0x19800: 0x21040080,
                    0x1a800: 0x0,
                    0x1b800: 0x21000000,
                    0x1c800: 0x1000080,
                    0x1d800: 0x40000,
                    0x1e800: 0x20040000,
                    0x1f800: 0x20000080
                }, {
                    0x0: 0x10000008,
                    0x100: 0x2000,
                    0x200: 0x10200000,
                    0x300: 0x10202008,
                    0x400: 0x10002000,
                    0x500: 0x200000,
                    0x600: 0x200008,
                    0x700: 0x10000000,
                    0x800: 0x0,
                    0x900: 0x10002008,
                    0xa00: 0x202000,
                    0xb00: 0x8,
                    0xc00: 0x10200008,
                    0xd00: 0x202008,
                    0xe00: 0x2008,
                    0xf00: 0x10202000,
                    0x80: 0x10200000,
                    0x180: 0x10202008,
                    0x280: 0x8,
                    0x380: 0x200000,
                    0x480: 0x202008,
                    0x580: 0x10000008,
                    0x680: 0x10002000,
                    0x780: 0x2008,
                    0x880: 0x200008,
                    0x980: 0x2000,
                    0xa80: 0x10002008,
                    0xb80: 0x10200008,
                    0xc80: 0x0,
                    0xd80: 0x10202000,
                    0xe80: 0x202000,
                    0xf80: 0x10000000,
                    0x1000: 0x10002000,
                    0x1100: 0x10200008,
                    0x1200: 0x10202008,
                    0x1300: 0x2008,
                    0x1400: 0x200000,
                    0x1500: 0x10000000,
                    0x1600: 0x10000008,
                    0x1700: 0x202000,
                    0x1800: 0x202008,
                    0x1900: 0x0,
                    0x1a00: 0x8,
                    0x1b00: 0x10200000,
                    0x1c00: 0x2000,
                    0x1d00: 0x10002008,
                    0x1e00: 0x10202000,
                    0x1f00: 0x200008,
                    0x1080: 0x8,
                    0x1180: 0x202000,
                    0x1280: 0x200000,
                    0x1380: 0x10000008,
                    0x1480: 0x10002000,
                    0x1580: 0x2008,
                    0x1680: 0x10202008,
                    0x1780: 0x10200000,
                    0x1880: 0x10202000,
                    0x1980: 0x10200008,
                    0x1a80: 0x2000,
                    0x1b80: 0x202008,
                    0x1c80: 0x200008,
                    0x1d80: 0x0,
                    0x1e80: 0x10000000,
                    0x1f80: 0x10002008
                }, {
                    0x0: 0x100000,
                    0x10: 0x2000401,
                    0x20: 0x400,
                    0x30: 0x100401,
                    0x40: 0x2100401,
                    0x50: 0x0,
                    0x60: 0x1,
                    0x70: 0x2100001,
                    0x80: 0x2000400,
                    0x90: 0x100001,
                    0xa0: 0x2000001,
                    0xb0: 0x2100400,
                    0xc0: 0x2100000,
                    0xd0: 0x401,
                    0xe0: 0x100400,
                    0xf0: 0x2000000,
                    0x8: 0x2100001,
                    0x18: 0x0,
                    0x28: 0x2000401,
                    0x38: 0x2100400,
                    0x48: 0x100000,
                    0x58: 0x2000001,
                    0x68: 0x2000000,
                    0x78: 0x401,
                    0x88: 0x100401,
                    0x98: 0x2000400,
                    0xa8: 0x2100000,
                    0xb8: 0x100001,
                    0xc8: 0x400,
                    0xd8: 0x2100401,
                    0xe8: 0x1,
                    0xf8: 0x100400,
                    0x100: 0x2000000,
                    0x110: 0x100000,
                    0x120: 0x2000401,
                    0x130: 0x2100001,
                    0x140: 0x100001,
                    0x150: 0x2000400,
                    0x160: 0x2100400,
                    0x170: 0x100401,
                    0x180: 0x401,
                    0x190: 0x2100401,
                    0x1a0: 0x100400,
                    0x1b0: 0x1,
                    0x1c0: 0x0,
                    0x1d0: 0x2100000,
                    0x1e0: 0x2000001,
                    0x1f0: 0x400,
                    0x108: 0x100400,
                    0x118: 0x2000401,
                    0x128: 0x2100001,
                    0x138: 0x1,
                    0x148: 0x2000000,
                    0x158: 0x100000,
                    0x168: 0x401,
                    0x178: 0x2100400,
                    0x188: 0x2000001,
                    0x198: 0x2100000,
                    0x1a8: 0x0,
                    0x1b8: 0x2100401,
                    0x1c8: 0x100401,
                    0x1d8: 0x400,
                    0x1e8: 0x2000400,
                    0x1f8: 0x100001
                }, {
                    0x0: 0x8000820,
                    0x1: 0x20000,
                    0x2: 0x8000000,
                    0x3: 0x20,
                    0x4: 0x20020,
                    0x5: 0x8020820,
                    0x6: 0x8020800,
                    0x7: 0x800,
                    0x8: 0x8020000,
                    0x9: 0x8000800,
                    0xa: 0x20800,
                    0xb: 0x8020020,
                    0xc: 0x820,
                    0xd: 0x0,
                    0xe: 0x8000020,
                    0xf: 0x20820,
                    0x80000000: 0x800,
                    0x80000001: 0x8020820,
                    0x80000002: 0x8000820,
                    0x80000003: 0x8000000,
                    0x80000004: 0x8020000,
                    0x80000005: 0x20800,
                    0x80000006: 0x20820,
                    0x80000007: 0x20,
                    0x80000008: 0x8000020,
                    0x80000009: 0x820,
                    0x8000000a: 0x20020,
                    0x8000000b: 0x8020800,
                    0x8000000c: 0x0,
                    0x8000000d: 0x8020020,
                    0x8000000e: 0x8000800,
                    0x8000000f: 0x20000,
                    0x10: 0x20820,
                    0x11: 0x8020800,
                    0x12: 0x20,
                    0x13: 0x800,
                    0x14: 0x8000800,
                    0x15: 0x8000020,
                    0x16: 0x8020020,
                    0x17: 0x20000,
                    0x18: 0x0,
                    0x19: 0x20020,
                    0x1a: 0x8020000,
                    0x1b: 0x8000820,
                    0x1c: 0x8020820,
                    0x1d: 0x20800,
                    0x1e: 0x820,
                    0x1f: 0x8000000,
                    0x80000010: 0x20000,
                    0x80000011: 0x800,
                    0x80000012: 0x8020020,
                    0x80000013: 0x20820,
                    0x80000014: 0x20,
                    0x80000015: 0x8020000,
                    0x80000016: 0x8000000,
                    0x80000017: 0x8000820,
                    0x80000018: 0x8020820,
                    0x80000019: 0x8000020,
                    0x8000001a: 0x8000800,
                    0x8000001b: 0x0,
                    0x8000001c: 0x20800,
                    0x8000001d: 0x820,
                    0x8000001e: 0x20020,
                    0x8000001f: 0x8020800
                }];
                var SBOX_MASK = [0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000, 0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f];
                var DES = C_algo.DES = BlockCipher.extend({
                    _doReset: function() {
                        var key = this._key;
                        var keyWords = key.words;
                        var keyBits = [];
                        for (var i = 0; i < 56; i++) {
                            var keyBitPos = PC1[i] - 1;
                            keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - keyBitPos % 32)) & 1;
                        }
                        var subKeys = this._subKeys = [];
                        for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
                            var subKey = subKeys[nSubKey] = [];
                            var bitShift = BIT_SHIFTS[nSubKey];
                            for (var i = 0; i < 24; i++) {
                                subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - i % 6);
                                subKey[4 + ((i / 6) | 0)] |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)] << (31 - i % 6);
                            }
                            subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
                            for (var i = 1; i < 7; i++) {
                                subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
                            }
                            subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
                        }
                        var invSubKeys = this._invSubKeys = [];
                        for (var i = 0; i < 16; i++) {
                            invSubKeys[i] = subKeys[15 - i];
                        }
                    },
                    encryptBlock: function(M, offset) {
                        this._doCryptBlock(M, offset, this._subKeys);
                    },
                    decryptBlock: function(M, offset) {
                        this._doCryptBlock(M, offset, this._invSubKeys);
                    },
                    _doCryptBlock: function(M, offset, subKeys) {
                        this._lBlock = M[offset];
                        this._rBlock = M[offset + 1];
                        exchangeLR.call(this, 4, 0x0f0f0f0f);
                        exchangeLR.call(this, 16, 0x0000ffff);
                        exchangeRL.call(this, 2, 0x33333333);
                        exchangeRL.call(this, 8, 0x00ff00ff);
                        exchangeLR.call(this, 1, 0x55555555);
                        for (var round = 0; round < 16; round++) {
                            var subKey = subKeys[round];
                            var lBlock = this._lBlock;
                            var rBlock = this._rBlock;
                            var f = 0;
                            for (var i = 0; i < 8; i++) {
                                f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
                            }
                            this._lBlock = rBlock;
                            this._rBlock = lBlock ^ f;
                        }
                        var t = this._lBlock;
                        this._lBlock = this._rBlock;
                        this._rBlock = t;
                        exchangeLR.call(this, 1, 0x55555555);
                        exchangeRL.call(this, 8, 0x00ff00ff);
                        exchangeRL.call(this, 2, 0x33333333);
                        exchangeLR.call(this, 16, 0x0000ffff);
                        exchangeLR.call(this, 4, 0x0f0f0f0f);
                        M[offset] = this._lBlock;
                        M[offset + 1] = this._rBlock;
                    },
                    keySize: 64 / 32,
                    ivSize: 64 / 32,
                    blockSize: 64 / 32
                });

                function exchangeLR(offset, mask) {
                    var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
                    this._rBlock ^= t;
                    this._lBlock ^= t << offset;
                }

                function exchangeRL(offset, mask) {
                    var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
                    this._lBlock ^= t;
                    this._rBlock ^= t << offset;
                }
                C.DES = BlockCipher._createHelper(DES);
                var TripleDES = C_algo.TripleDES = BlockCipher.extend({
                    _doReset: function() {
                        var key = this._key;
                        var keyWords = key.words;
                        this._des1 = DES.createEncryptor(WordArray.create(keyWords.slice(0, 2)));
                        this._des2 = DES.createEncryptor(WordArray.create(keyWords.slice(2, 4)));
                        this._des3 = DES.createEncryptor(WordArray.create(keyWords.slice(4, 6)));
                    },
                    encryptBlock: function(M, offset) {
                        this._des1.encryptBlock(M, offset);
                        this._des2.decryptBlock(M, offset);
                        this._des3.encryptBlock(M, offset);
                    },
                    decryptBlock: function(M, offset) {
                        this._des3.decryptBlock(M, offset);
                        this._des2.encryptBlock(M, offset);
                        this._des1.decryptBlock(M, offset);
                    },
                    keySize: 192 / 32,
                    ivSize: 64 / 32,
                    blockSize: 64 / 32
                });
                C.TripleDES = BlockCipher._createHelper(TripleDES);
            }());
            return CryptoJS.TripleDES;
        }));
    }, {
        "./cipher-core": 51,
        "./core": 52,
        "./enc-base64": 53,
        "./evpkdf": 55,
        "./md5": 60
    }],
    83: [function(require, module, exports) {;
        (function(root, factory) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require("./core"));
            } else if (typeof define === "function" && define.amd) {
                define(["./core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        }(this, function(CryptoJS) {
            (function(undefined) {
                var C = CryptoJS;
                var C_lib = C.lib;
                var Base = C_lib.Base;
                var X32WordArray = C_lib.WordArray;
                var C_x64 = C.x64 = {};
                var X64Word = C_x64.Word = Base.extend({
                    init: function(high, low) {
                        this.high = high;
                        this.low = low;
                    }
                });
                var X64WordArray = C_x64.WordArray = Base.extend({
                    init: function(words, sigBytes) {
                        words = this.words = words || [];
                        if (sigBytes != undefined) {
                            this.sigBytes = sigBytes;
                        } else {
                            this.sigBytes = words.length * 8;
                        }
                    },
                    toX32: function() {
                        var x64Words = this.words;
                        var x64WordsLength = x64Words.length;
                        var x32Words = [];
                        for (var i = 0; i < x64WordsLength; i++) {
                            var x64Word = x64Words[i];
                            x32Words.push(x64Word.high);
                            x32Words.push(x64Word.low);
                        }
                        return X32WordArray.create(x32Words, this.sigBytes);
                    },
                    clone: function() {
                        var clone = Base.clone.call(this);
                        var words = clone.words = this.words.slice(0);
                        var wordsLength = words.length;
                        for (var i = 0; i < wordsLength; i++) {
                            words[i] = words[i].clone();
                        }
                        return clone;
                    }
                });
            }());
            return CryptoJS;
        }));
    }, {
        "./core": 52
    }],
    84: [function(require, module, exports) { /*!https://mths.be/utf8js v2.1.2 by @mathias*/ ;
        (function(root) {
            var freeExports = typeof exports == 'object' && exports;
            var freeModule = typeof module == 'object' && module && module.exports == freeExports && module;
            var freeGlobal = typeof global == 'object' && global;
            if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
                root = freeGlobal;
            }
            var stringFromCharCode = String.fromCharCode;

            function ucs2decode(string) {
                var output = [];
                var counter = 0;
                var length = string.length;
                var value;
                var extra;
                while (counter < length) {
                    value = string.charCodeAt(counter++);
                    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                        extra = string.charCodeAt(counter++);
                        if ((extra & 0xFC00) == 0xDC00) {
                            output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                        } else {
                            output.push(value);
                            counter--;
                        }
                    } else {
                        output.push(value);
                    }
                }
                return output;
            }

            function ucs2encode(array) {
                var length = array.length;
                var index = -1;
                var value;
                var output = '';
                while (++index < length) {
                    value = array[index];
                    if (value > 0xFFFF) {
                        value -= 0x10000;
                        output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
                        value = 0xDC00 | value & 0x3FF;
                    }
                    output += stringFromCharCode(value);
                }
                return output;
            }

            function checkScalarValue(codePoint) {
                if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
                    throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
                        ' is not a scalar value');
                }
            }

            function createByte(codePoint, shift) {
                return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
            }

            function encodeCodePoint(codePoint) {
                if ((codePoint & 0xFFFFFF80) == 0) {
                    return stringFromCharCode(codePoint);
                }
                var symbol = '';
                if ((codePoint & 0xFFFFF800) == 0) {
                    symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
                } else if ((codePoint & 0xFFFF0000) == 0) {
                    checkScalarValue(codePoint);
                    symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
                    symbol += createByte(codePoint, 6);
                } else if ((codePoint & 0xFFE00000) == 0) {
                    symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
                    symbol += createByte(codePoint, 12);
                    symbol += createByte(codePoint, 6);
                }
                symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
                return symbol;
            }

            function utf8encode(string) {
                var codePoints = ucs2decode(string);
                var length = codePoints.length;
                var index = -1;
                var codePoint;
                var byteString = '';
                while (++index < length) {
                    codePoint = codePoints[index];
                    byteString += encodeCodePoint(codePoint);
                }
                return byteString;
            }

            function readContinuationByte() {
                if (byteIndex >= byteCount) {
                    throw Error('Invalid byte index');
                }
                var continuationByte = byteArray[byteIndex] & 0xFF;
                byteIndex++;
                if ((continuationByte & 0xC0) == 0x80) {
                    return continuationByte & 0x3F;
                }
                throw Error('Invalid continuation byte');
            }

            function decodeSymbol() {
                var byte1;
                var byte2;
                var byte3;
                var byte4;
                var codePoint;
                if (byteIndex > byteCount) {
                    throw Error('Invalid byte index');
                }
                if (byteIndex == byteCount) {
                    return false;
                }
                byte1 = byteArray[byteIndex] & 0xFF;
                byteIndex++;
                if ((byte1 & 0x80) == 0) {
                    return byte1;
                }
                if ((byte1 & 0xE0) == 0xC0) {
                    byte2 = readContinuationByte();
                    codePoint = ((byte1 & 0x1F) << 6) | byte2;
                    if (codePoint >= 0x80) {
                        return codePoint;
                    } else {
                        throw Error('Invalid continuation byte');
                    }
                }
                if ((byte1 & 0xF0) == 0xE0) {
                    byte2 = readContinuationByte();
                    byte3 = readContinuationByte();
                    codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
                    if (codePoint >= 0x0800) {
                        checkScalarValue(codePoint);
                        return codePoint;
                    } else {
                        throw Error('Invalid continuation byte');
                    }
                }
                if ((byte1 & 0xF8) == 0xF0) {
                    byte2 = readContinuationByte();
                    byte3 = readContinuationByte();
                    byte4 = readContinuationByte();
                    codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) | (byte3 << 0x06) | byte4;
                    if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
                        return codePoint;
                    }
                }
                throw Error('Invalid UTF-8 detected');
            }
            var byteArray;
            var byteCount;
            var byteIndex;

            function utf8decode(byteString) {
                byteArray = ucs2decode(byteString);
                byteCount = byteArray.length;
                byteIndex = 0;
                var codePoints = [];
                var tmp;
                while ((tmp = decodeSymbol()) !== false) {
                    codePoints.push(tmp);
                }
                return ucs2encode(codePoints);
            }
            var utf8 = {
                'version': '2.1.2',
                'encode': utf8encode,
                'decode': utf8decode
            };
            if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
                define(function() {
                    return utf8;
                });
            } else if (freeExports && !freeExports.nodeType) {
                if (freeModule) {
                    freeModule.exports = utf8;
                } else {
                    var object = {};
                    var hasOwnProperty = object.hasOwnProperty;
                    for (var key in utf8) {
                        hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
                    }
                }
            } else {
                root.utf8 = utf8;
            }
        }(this));
    }, {}],
    85: [function(require, module, exports) {
        module.exports = XMLHttpRequest;
    }, {}],
    "bignumber.js": [function(require, module, exports) { /*!bignumber.js v4.0.0 https://github.com/MikeMcl/bignumber.js/LICENCE*/ ;
        (function(globalObj) {
            'use strict';
            var BigNumber, isNumeric = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                mathceil = Math.ceil,
                mathfloor = Math.floor,
                notBool = ' not a boolean or binary digit',
                roundingMode = 'rounding mode',
                tooManyDigits = 'number type has more than 15 significant digits',
                ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_',
                BASE = 1e14,
                LOG_BASE = 14,
                MAX_SAFE_INTEGER = 0x1fffffffffffff,
                POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                SQRT_BASE = 1e7,
                MAX = 1E9;

            function constructorFactory(config) {
                var div, parseNumeric, id = 0,
                    P = BigNumber.prototype,
                    ONE = new BigNumber(1),
                    DECIMAL_PLACES = 20,
                    ROUNDING_MODE = 4,
                    TO_EXP_NEG = -7,
                    TO_EXP_POS = 21,
                    MIN_EXP = -1e7,
                    MAX_EXP = 1e7,
                    ERRORS = true,
                    isValidInt = intValidatorWithErrors,
                    CRYPTO = false,
                    MODULO_MODE = 1,
                    POW_PRECISION = 0,
                    FORMAT = {
                        decimalSeparator: '.',
                        groupSeparator: ',',
                        groupSize: 3,
                        secondaryGroupSize: 0,
                        fractionGroupSeparator: '\xA0',
                        fractionGroupSize: 0
                    };

                function BigNumber(n, b) {
                    var c, e, i, num, len, str, x = this;
                    if (!(x instanceof BigNumber)) {
                        if (ERRORS) raise(26, 'constructor call without new', n);
                        return new BigNumber(n, b);
                    }
                    if (b == null || !isValidInt(b, 2, 64, id, 'base')) {
                        if (n instanceof BigNumber) {
                            x.s = n.s;
                            x.e = n.e;
                            x.c = (n = n.c) ? n.slice() : n;
                            id = 0;
                            return;
                        }
                        if ((num = typeof n == 'number') && n * 0 == 0) {
                            x.s = 1 / n < 0 ? (n = -n, -1) : 1;
                            if (n === ~~n) {
                                for (e = 0, i = n; i >= 10; i /= 10, e++);
                                x.e = e;
                                x.c = [n];
                                id = 0;
                                return;
                            }
                            str = n + '';
                        } else {
                            if (!isNumeric.test(str = n + '')) return parseNumeric(x, str, num);
                            x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
                        }
                    } else {
                        b = b | 0;
                        str = n + '';
                        if (b == 10) {
                            x = new BigNumber(n instanceof BigNumber ? n : str);
                            return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
                        }
                        if ((num = typeof n == 'number') && n * 0 != 0 || !(new RegExp('^-?' + (c = '[' + ALPHABET.slice(0, b) + ']+') +
                                '(?:\\.' + c + ')?$', b < 37 ? 'i' : '')).test(str)) {
                            return parseNumeric(x, str, num, b);
                        }
                        if (num) {
                            x.s = 1 / n < 0 ? (str = str.slice(1), -1) : 1;
                            if (ERRORS && str.replace(/^0\.0*|\./, '').length > 15) {
                                raise(id, tooManyDigits, n);
                            }
                            num = false;
                        } else {
                            x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
                        }
                        str = convertBase(str, 10, b, x.s);
                    }
                    if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
                    if ((i = str.search(/e/i)) > 0) {
                        if (e < 0) e = i;
                        e += +str.slice(i + 1);
                        str = str.substring(0, i);
                    } else if (e < 0) {
                        e = str.length;
                    }
                    for (i = 0; str.charCodeAt(i) === 48; i++);
                    for (len = str.length; str.charCodeAt(--len) === 48;);
                    str = str.slice(i, len + 1);
                    if (str) {
                        len = str.length;
                        if (num && ERRORS && len > 15 && (n > MAX_SAFE_INTEGER || n !== mathfloor(n))) {
                            raise(id, tooManyDigits, x.s * n);
                        }
                        e = e - i - 1;
                        if (e > MAX_EXP) {
                            x.c = x.e = null;
                        } else if (e < MIN_EXP) {
                            x.c = [x.e = 0];
                        } else {
                            x.e = e;
                            x.c = [];
                            i = (e + 1) % LOG_BASE;
                            if (e < 0) i += LOG_BASE;
                            if (i < len) {
                                if (i) x.c.push(+str.slice(0, i));
                                for (len -= LOG_BASE; i < len;) {
                                    x.c.push(+str.slice(i, i += LOG_BASE));
                                }
                                str = str.slice(i);
                                i = LOG_BASE - str.length;
                            } else {
                                i -= len;
                            }
                            for (; i--; str += '0');
                            x.c.push(+str);
                        }
                    } else {
                        x.c = [x.e = 0];
                    }
                    id = 0;
                }
                BigNumber.another = constructorFactory;
                BigNumber.ROUND_UP = 0;
                BigNumber.ROUND_DOWN = 1;
                BigNumber.ROUND_CEIL = 2;
                BigNumber.ROUND_FLOOR = 3;
                BigNumber.ROUND_HALF_UP = 4;
                BigNumber.ROUND_HALF_DOWN = 5;
                BigNumber.ROUND_HALF_EVEN = 6;
                BigNumber.ROUND_HALF_CEIL = 7;
                BigNumber.ROUND_HALF_FLOOR = 8;
                BigNumber.EUCLID = 9;
                BigNumber.config = BigNumber.set = function() {
                    var v, p, i = 0,
                        r = {},
                        a = arguments,
                        o = a[0],
                        has = o && typeof o == 'object' ? function() {
                            if (o.hasOwnProperty(p)) return (v = o[p]) != null;
                        } : function() {
                            if (a.length > i) return (v = a[i++]) != null;
                        };
                    if (has(p = 'DECIMAL_PLACES') && isValidInt(v, 0, MAX, 2, p)) {
                        DECIMAL_PLACES = v | 0;
                    }
                    r[p] = DECIMAL_PLACES;
                    if (has(p = 'ROUNDING_MODE') && isValidInt(v, 0, 8, 2, p)) {
                        ROUNDING_MODE = v | 0;
                    }
                    r[p] = ROUNDING_MODE;
                    if (has(p = 'EXPONENTIAL_AT')) {
                        if (isArray(v)) {
                            if (isValidInt(v[0], -MAX, 0, 2, p) && isValidInt(v[1], 0, MAX, 2, p)) {
                                TO_EXP_NEG = v[0] | 0;
                                TO_EXP_POS = v[1] | 0;
                            }
                        } else if (isValidInt(v, -MAX, MAX, 2, p)) {
                            TO_EXP_NEG = -(TO_EXP_POS = (v < 0 ? -v : v) | 0);
                        }
                    }
                    r[p] = [TO_EXP_NEG, TO_EXP_POS];
                    if (has(p = 'RANGE')) {
                        if (isArray(v)) {
                            if (isValidInt(v[0], -MAX, -1, 2, p) && isValidInt(v[1], 1, MAX, 2, p)) {
                                MIN_EXP = v[0] | 0;
                                MAX_EXP = v[1] | 0;
                            }
                        } else if (isValidInt(v, -MAX, MAX, 2, p)) {
                            if (v | 0) MIN_EXP = -(MAX_EXP = (v < 0 ? -v : v) | 0);
                            else if (ERRORS) raise(2, p + ' cannot be zero', v);
                        }
                    }
                    r[p] = [MIN_EXP, MAX_EXP];
                    if (has(p = 'ERRORS')) {
                        if (v === !!v || v === 1 || v === 0) {
                            id = 0;
                            isValidInt = (ERRORS = !!v) ? intValidatorWithErrors : intValidatorNoErrors;
                        } else if (ERRORS) {
                            raise(2, p + notBool, v);
                        }
                    }
                    r[p] = ERRORS;
                    if (has(p = 'CRYPTO')) {
                        if (v === true || v === false || v === 1 || v === 0) {
                            if (v) {
                                v = typeof crypto == 'undefined';
                                if (!v && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                                    CRYPTO = true;
                                } else if (ERRORS) {
                                    raise(2, 'crypto unavailable', v ? void 0 : crypto);
                                } else {
                                    CRYPTO = false;
                                }
                            } else {
                                CRYPTO = false;
                            }
                        } else if (ERRORS) {
                            raise(2, p + notBool, v);
                        }
                    }
                    r[p] = CRYPTO;
                    if (has(p = 'MODULO_MODE') && isValidInt(v, 0, 9, 2, p)) {
                        MODULO_MODE = v | 0;
                    }
                    r[p] = MODULO_MODE;
                    if (has(p = 'POW_PRECISION') && isValidInt(v, 0, MAX, 2, p)) {
                        POW_PRECISION = v | 0;
                    }
                    r[p] = POW_PRECISION;
                    if (has(p = 'FORMAT')) {
                        if (typeof v == 'object') {
                            FORMAT = v;
                        } else if (ERRORS) {
                            raise(2, p + ' not an object', v);
                        }
                    }
                    r[p] = FORMAT;
                    return r;
                };
                BigNumber.max = function() {
                    return maxOrMin(arguments, P.lt);
                };
                BigNumber.min = function() {
                    return maxOrMin(arguments, P.gt);
                };
                BigNumber.random = (function() {
                    var pow2_53 = 0x20000000000000;
                    var random53bitInt = (Math.random() * pow2_53) & 0x1fffff ? function() {
                        return mathfloor(Math.random() * pow2_53);
                    } : function() {
                        return ((Math.random() * 0x40000000 | 0) * 0x800000) +
                            (Math.random() * 0x800000 | 0);
                    };
                    return function(dp) {
                        var a, b, e, k, v, i = 0,
                            c = [],
                            rand = new BigNumber(ONE);
                        dp = dp == null || !isValidInt(dp, 0, MAX, 14) ? DECIMAL_PLACES : dp | 0;
                        k = mathceil(dp / LOG_BASE);
                        if (CRYPTO) {
                            if (crypto.getRandomValues) {
                                a = crypto.getRandomValues(new Uint32Array(k *= 2));
                                for (; i < k;) {
                                    v = a[i] * 0x20000 + (a[i + 1] >>> 11);
                                    if (v >= 9e15) {
                                        b = crypto.getRandomValues(new Uint32Array(2));
                                        a[i] = b[0];
                                        a[i + 1] = b[1];
                                    } else {
                                        c.push(v % 1e14);
                                        i += 2;
                                    }
                                }
                                i = k / 2;
                            } else if (crypto.randomBytes) {
                                a = crypto.randomBytes(k *= 7);
                                for (; i < k;) {
                                    v = ((a[i] & 31) * 0x1000000000000) + (a[i + 1] * 0x10000000000) +
                                        (a[i + 2] * 0x100000000) + (a[i + 3] * 0x1000000) +
                                        (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
                                    if (v >= 9e15) {
                                        crypto.randomBytes(7).copy(a, i);
                                    } else {
                                        c.push(v % 1e14);
                                        i += 7;
                                    }
                                }
                                i = k / 7;
                            } else {
                                CRYPTO = false;
                                if (ERRORS) raise(14, 'crypto unavailable', crypto);
                            }
                        }
                        if (!CRYPTO) {
                            for (; i < k;) {
                                v = random53bitInt();
                                if (v < 9e15) c[i++] = v % 1e14;
                            }
                        }
                        k = c[--i];
                        dp %= LOG_BASE;
                        if (k && dp) {
                            v = POWS_TEN[LOG_BASE - dp];
                            c[i] = mathfloor(k / v) * v;
                        }
                        for (; c[i] === 0; c.pop(), i--);
                        if (i < 0) {
                            c = [e = 0];
                        } else {
                            for (e = -1; c[0] === 0; c.shift(), e -= LOG_BASE);
                            for (i = 1, v = c[0]; v >= 10; v /= 10, i++);
                            if (i < LOG_BASE) e -= LOG_BASE - i;
                        }
                        rand.e = e;
                        rand.c = c;
                        return rand;
                    };
                })();

                function convertBase(str, baseOut, baseIn, sign) {
                    var d, e, k, r, x, xc, y, i = str.indexOf('.'),
                        dp = DECIMAL_PLACES,
                        rm = ROUNDING_MODE;
                    if (baseIn < 37) str = str.toLowerCase();
                    if (i >= 0) {
                        k = POW_PRECISION;
                        POW_PRECISION = 0;
                        str = str.replace('.', '');
                        y = new BigNumber(baseIn);
                        x = y.pow(str.length - i);
                        POW_PRECISION = k;
                        y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e), 10, baseOut);
                        y.e = y.c.length;
                    }
                    xc = toBaseOut(str, baseIn, baseOut);
                    e = k = xc.length;
                    for (; xc[--k] == 0; xc.pop());
                    if (!xc[0]) return '0';
                    if (i < 0) {
                        --e;
                    } else {
                        x.c = xc;
                        x.e = e;
                        x.s = sign;
                        x = div(x, y, dp, rm, baseOut);
                        xc = x.c;
                        r = x.r;
                        e = x.e;
                    }
                    d = e + dp + 1;
                    i = xc[d];
                    k = baseOut / 2;
                    r = r || d < 0 || xc[d + 1] != null;
                    r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
                    if (d < 1 || !xc[0]) {
                        str = r ? toFixedPoint('1', -dp) : '0';
                    } else {
                        xc.length = d;
                        if (r) {
                            for (--baseOut; ++xc[--d] > baseOut;) {
                                xc[d] = 0;
                                if (!d) {
                                    ++e;
                                    xc.unshift(1);
                                }
                            }
                        }
                        for (k = xc.length; !xc[--k];);
                        for (i = 0, str = ''; i <= k; str += ALPHABET.charAt(xc[i++]));
                        str = toFixedPoint(str, e);
                    }
                    return str;
                }
                div = (function() {
                    function multiply(x, k, base) {
                        var m, temp, xlo, xhi, carry = 0,
                            i = x.length,
                            klo = k % SQRT_BASE,
                            khi = k / SQRT_BASE | 0;
                        for (x = x.slice(); i--;) {
                            xlo = x[i] % SQRT_BASE;
                            xhi = x[i] / SQRT_BASE | 0;
                            m = khi * xlo + xhi * klo;
                            temp = klo * xlo + ((m % SQRT_BASE) * SQRT_BASE) + carry;
                            carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
                            x[i] = temp % base;
                        }
                        if (carry) x.unshift(carry);
                        return x;
                    }

                    function compare(a, b, aL, bL) {
                        var i, cmp;
                        if (aL != bL) {
                            cmp = aL > bL ? 1 : -1;
                        } else {
                            for (i = cmp = 0; i < aL; i++) {
                                if (a[i] != b[i]) {
                                    cmp = a[i] > b[i] ? 1 : -1;
                                    break;
                                }
                            }
                        }
                        return cmp;
                    }

                    function subtract(a, b, aL, base) {
                        var i = 0;
                        for (; aL--;) {
                            a[aL] -= i;
                            i = a[aL] < b[aL] ? 1 : 0;
                            a[aL] = i * base + a[aL] - b[aL];
                        }
                        for (; !a[0] && a.length > 1; a.shift());
                    }
                    return function(x, y, dp, rm, base) {
                        var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1,
                            xc = x.c,
                            yc = y.c;
                        if (!xc || !xc[0] || !yc || !yc[0]) {
                            return new BigNumber(!x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : xc && xc[0] == 0 || !yc ? s * 0 : s / 0);
                        }
                        q = new BigNumber(s);
                        qc = q.c = [];
                        e = x.e - y.e;
                        s = dp + e + 1;
                        if (!base) {
                            base = BASE;
                            e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
                            s = s / LOG_BASE | 0;
                        }
                        for (i = 0; yc[i] == (xc[i] || 0); i++);
                        if (yc[i] > (xc[i] || 0)) e--;
                        if (s < 0) {
                            qc.push(1);
                            more = true;
                        } else {
                            xL = xc.length;
                            yL = yc.length;
                            i = 0;
                            s += 2;
                            n = mathfloor(base / (yc[0] + 1));
                            if (n > 1) {
                                yc = multiply(yc, n, base);
                                xc = multiply(xc, n, base);
                                yL = yc.length;
                                xL = xc.length;
                            }
                            xi = yL;
                            rem = xc.slice(0, yL);
                            remL = rem.length;
                            for (; remL < yL; rem[remL++] = 0);
                            yz = yc.slice();
                            yz.unshift(0);
                            yc0 = yc[0];
                            if (yc[1] >= base / 2) yc0++;
                            do {
                                n = 0;
                                cmp = compare(yc, rem, yL, remL);
                                if (cmp < 0) {
                                    rem0 = rem[0];
                                    if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
                                    n = mathfloor(rem0 / yc0);
                                    if (n > 1) {
                                        if (n >= base) n = base - 1;
                                        prod = multiply(yc, n, base);
                                        prodL = prod.length;
                                        remL = rem.length;
                                        while (compare(prod, rem, prodL, remL) == 1) {
                                            n--;
                                            subtract(prod, yL < prodL ? yz : yc, prodL, base);
                                            prodL = prod.length;
                                            cmp = 1;
                                        }
                                    } else {
                                        if (n == 0) {
                                            cmp = n = 1;
                                        }
                                        prod = yc.slice();
                                        prodL = prod.length;
                                    }
                                    if (prodL < remL) prod.unshift(0);
                                    subtract(rem, prod, remL, base);
                                    remL = rem.length;
                                    if (cmp == -1) {
                                        while (compare(yc, rem, yL, remL) < 1) {
                                            n++;
                                            subtract(rem, yL < remL ? yz : yc, remL, base);
                                            remL = rem.length;
                                        }
                                    }
                                } else if (cmp === 0) {
                                    n++;
                                    rem = [0];
                                }
                                qc[i++] = n;
                                if (rem[0]) {
                                    rem[remL++] = xc[xi] || 0;
                                } else {
                                    rem = [xc[xi]];
                                    remL = 1;
                                }
                            } while ((xi++ < xL || rem[0] != null) && s--);
                            more = rem[0] != null;
                            if (!qc[0]) qc.shift();
                        }
                        if (base == BASE) {
                            for (i = 1, s = qc[0]; s >= 10; s /= 10, i++);
                            round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
                        } else {
                            q.e = e;
                            q.r = +more;
                        }
                        return q;
                    };
                })();

                function format(n, i, rm, caller) {
                    var c0, e, ne, len, str;
                    rm = rm != null && isValidInt(rm, 0, 8, caller, roundingMode) ? rm | 0 : ROUNDING_MODE;
                    if (!n.c) return n.toString();
                    c0 = n.c[0];
                    ne = n.e;
                    if (i == null) {
                        str = coeffToString(n.c);
                        str = caller == 19 || caller == 24 && ne <= TO_EXP_NEG ? toExponential(str, ne) : toFixedPoint(str, ne);
                    } else {
                        n = round(new BigNumber(n), i, rm);
                        e = n.e;
                        str = coeffToString(n.c);
                        len = str.length;
                        if (caller == 19 || caller == 24 && (i <= e || e <= TO_EXP_NEG)) {
                            for (; len < i; str += '0', len++);
                            str = toExponential(str, e);
                        } else {
                            i -= ne;
                            str = toFixedPoint(str, e);
                            if (e + 1 > len) {
                                if (--i > 0)
                                    for (str += '.'; i--; str += '0');
                            } else {
                                i += e - len;
                                if (i > 0) {
                                    if (e + 1 == len) str += '.';
                                    for (; i--; str += '0');
                                }
                            }
                        }
                    }
                    return n.s < 0 && c0 ? '-' + str : str;
                }

                function maxOrMin(args, method) {
                    var m, n, i = 0;
                    if (isArray(args[0])) args = args[0];
                    m = new BigNumber(args[0]);
                    for (; ++i < args.length;) {
                        n = new BigNumber(args[i]);
                        if (!n.s) {
                            m = n;
                            break;
                        } else if (method.call(m, n)) {
                            m = n;
                        }
                    }
                    return m;
                }

                function intValidatorWithErrors(n, min, max, caller, name) {
                    if (n < min || n > max || n != truncate(n)) {
                        raise(caller, (name || 'decimal places') +
                            (n < min || n > max ? ' out of range' : ' not an integer'), n);
                    }
                    return true;
                }

                function normalise(n, c, e) {
                    var i = 1,
                        j = c.length;
                    for (; !c[--j]; c.pop());
                    for (j = c[0]; j >= 10; j /= 10, i++);
                    if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
                        n.c = n.e = null;
                    } else if (e < MIN_EXP) {
                        n.c = [n.e = 0];
                    } else {
                        n.e = e;
                        n.c = c;
                    }
                    return n;
                }
                parseNumeric = (function() {
                    var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                        dotAfter = /^([^.]+)\.$/,
                        dotBefore = /^\.([^.]+)$/,
                        isInfinityOrNaN = /^-?(Infinity|NaN)$/,
                        whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
                    return function(x, str, num, b) {
                        var base, s = num ? str : str.replace(whitespaceOrPlus, '');
                        if (isInfinityOrNaN.test(s)) {
                            x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
                        } else {
                            if (!num) {
                                s = s.replace(basePrefix, function(m, p1, p2) {
                                    base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
                                    return !b || b == base ? p1 : m;
                                });
                                if (b) {
                                    base = b;
                                    s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
                                }
                                if (str != s) return new BigNumber(s, base);
                            }
                            if (ERRORS) raise(id, 'not a' + (b ? ' base ' + b : '') + ' number', str);
                            x.s = null;
                        }
                        x.c = x.e = null;
                        id = 0;
                    }
                })();

                function raise(caller, msg, val) {
                    var error = new Error(['new BigNumber', 'cmp', 'config', 'div', 'divToInt', 'eq', 'gt', 'gte', 'lt', 'lte', 'minus', 'mod', 'plus', 'precision', 'random', 'round', 'shift', 'times', 'toDigits', 'toExponential', 'toFixed', 'toFormat', 'toFraction', 'pow', 'toPrecision', 'toString', 'BigNumber'][caller] + '() ' + msg + ': ' + val);
                    error.name = 'BigNumber Error';
                    id = 0;
                    throw error;
                }

                function round(x, sd, rm, r) {
                    var d, i, j, k, n, ni, rd, xc = x.c,
                        pows10 = POWS_TEN;
                    if (xc) {
                        out: {
                            for (d = 1, k = xc[0]; k >= 10; k /= 10, d++);i = sd - d;
                            if (i < 0) {
                                i += LOG_BASE;
                                j = sd;
                                n = xc[ni = 0];
                                rd = n / pows10[d - j - 1] % 10 | 0;
                            } else {
                                ni = mathceil((i + 1) / LOG_BASE);
                                if (ni >= xc.length) {
                                    if (r) {
                                        for (; xc.length <= ni; xc.push(0));
                                        n = rd = 0;
                                        d = 1;
                                        i %= LOG_BASE;
                                        j = i - LOG_BASE + 1;
                                    } else {
                                        break out;
                                    }
                                } else {
                                    n = k = xc[ni];
                                    for (d = 1; k >= 10; k /= 10, d++);
                                    i %= LOG_BASE;
                                    j = i - LOG_BASE + d;
                                    rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
                                }
                            }
                            r = r || sd < 0 || xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && ((i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10) & 1 || rm == (x.s < 0 ? 8 : 7));
                            if (sd < 1 || !xc[0]) {
                                xc.length = 0;
                                if (r) {
                                    sd -= x.e + 1;
                                    xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                                    x.e = -sd || 0;
                                } else {
                                    xc[0] = x.e = 0;
                                }
                                return x;
                            }
                            if (i == 0) {
                                xc.length = ni;
                                k = 1;
                                ni--;
                            } else {
                                xc.length = ni + 1;
                                k = pows10[LOG_BASE - i];
                                xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
                            }
                            if (r) {
                                for (;;) {
                                    if (ni == 0) {
                                        for (i = 1, j = xc[0]; j >= 10; j /= 10, i++);
                                        j = xc[0] += k;
                                        for (k = 1; j >= 10; j /= 10, k++);
                                        if (i != k) {
                                            x.e++;
                                            if (xc[0] == BASE) xc[0] = 1;
                                        }
                                        break;
                                    } else {
                                        xc[ni] += k;
                                        if (xc[ni] != BASE) break;
                                        xc[ni--] = 0;
                                        k = 1;
                                    }
                                }
                            }
                            for (i = xc.length; xc[--i] === 0; xc.pop());
                        }
                        if (x.e > MAX_EXP) {
                            x.c = x.e = null;
                        } else if (x.e < MIN_EXP) {
                            x.c = [x.e = 0];
                        }
                    }
                    return x;
                }
                P.absoluteValue = P.abs = function() {
                    var x = new BigNumber(this);
                    if (x.s < 0) x.s = 1;
                    return x;
                };
                P.ceil = function() {
                    return round(new BigNumber(this), this.e + 1, 2);
                };
                P.comparedTo = P.cmp = function(y, b) {
                    id = 1;
                    return compare(this, new BigNumber(y, b));
                };
                P.decimalPlaces = P.dp = function() {
                    var n, v, c = this.c;
                    if (!c) return null;
                    n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
                    if (v = c[v])
                        for (; v % 10 == 0; v /= 10, n--);
                    if (n < 0) n = 0;
                    return n;
                };
                P.dividedBy = P.div = function(y, b) {
                    id = 3;
                    return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
                };
                P.dividedToIntegerBy = P.divToInt = function(y, b) {
                    id = 4;
                    return div(this, new BigNumber(y, b), 0, 1);
                };
                P.equals = P.eq = function(y, b) {
                    id = 5;
                    return compare(this, new BigNumber(y, b)) === 0;
                };
                P.floor = function() {
                    return round(new BigNumber(this), this.e + 1, 3);
                };
                P.greaterThan = P.gt = function(y, b) {
                    id = 6;
                    return compare(this, new BigNumber(y, b)) > 0;
                };
                P.greaterThanOrEqualTo = P.gte = function(y, b) {
                    id = 7;
                    return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;
                };
                P.isFinite = function() {
                    return !!this.c;
                };
                P.isInteger = P.isInt = function() {
                    return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
                };
                P.isNaN = function() {
                    return !this.s;
                };
                P.isNegative = P.isNeg = function() {
                    return this.s < 0;
                };
                P.isZero = function() {
                    return !!this.c && this.c[0] == 0;
                };
                P.lessThan = P.lt = function(y, b) {
                    id = 8;
                    return compare(this, new BigNumber(y, b)) < 0;
                };
                P.lessThanOrEqualTo = P.lte = function(y, b) {
                    id = 9;
                    return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
                };
                P.minus = P.sub = function(y, b) {
                    var i, j, t, xLTy, x = this,
                        a = x.s;
                    id = 10;
                    y = new BigNumber(y, b);
                    b = y.s;
                    if (!a || !b) return new BigNumber(NaN);
                    if (a != b) {
                        y.s = -b;
                        return x.plus(y);
                    }
                    var xe = x.e / LOG_BASE,
                        ye = y.e / LOG_BASE,
                        xc = x.c,
                        yc = y.c;
                    if (!xe || !ye) {
                        if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);
                        if (!xc[0] || !yc[0]) {
                            return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x : ROUNDING_MODE == 3 ? -0 : 0);
                        }
                    }
                    xe = bitFloor(xe);
                    ye = bitFloor(ye);
                    xc = xc.slice();
                    if (a = xe - ye) {
                        if (xLTy = a < 0) {
                            a = -a;
                            t = xc;
                        } else {
                            ye = xe;
                            t = yc;
                        }
                        t.reverse();
                        for (b = a; b--; t.push(0));
                        t.reverse();
                    } else {
                        j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
                        for (a = b = 0; b < j; b++) {
                            if (xc[b] != yc[b]) {
                                xLTy = xc[b] < yc[b];
                                break;
                            }
                        }
                    }
                    if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;
                    b = (j = yc.length) - (i = xc.length);
                    if (b > 0)
                        for (; b--; xc[i++] = 0);
                    b = BASE - 1;
                    for (; j > a;) {
                        if (xc[--j] < yc[j]) {
                            for (i = j; i && !xc[--i]; xc[i] = b);
                            --xc[i];
                            xc[j] += BASE;
                        }
                        xc[j] -= yc[j];
                    }
                    for (; xc[0] == 0; xc.shift(), --ye);
                    if (!xc[0]) {
                        y.s = ROUNDING_MODE == 3 ? -1 : 1;
                        y.c = [y.e = 0];
                        return y;
                    }
                    return normalise(y, xc, ye);
                };
                P.modulo = P.mod = function(y, b) {
                    var q, s, x = this;
                    id = 11;
                    y = new BigNumber(y, b);
                    if (!x.c || !y.s || y.c && !y.c[0]) {
                        return new BigNumber(NaN);
                    } else if (!y.c || x.c && !x.c[0]) {
                        return new BigNumber(x);
                    }
                    if (MODULO_MODE == 9) {
                        s = y.s;
                        y.s = 1;
                        q = div(x, y, 0, 3);
                        y.s = s;
                        q.s *= s;
                    } else {
                        q = div(x, y, 0, MODULO_MODE);
                    }
                    return x.minus(q.times(y));
                };
                P.negated = P.neg = function() {
                    var x = new BigNumber(this);
                    x.s = -x.s || null;
                    return x;
                };
                P.plus = P.add = function(y, b) {
                    var t, x = this,
                        a = x.s;
                    id = 12;
                    y = new BigNumber(y, b);
                    b = y.s;
                    if (!a || !b) return new BigNumber(NaN);
                    if (a != b) {
                        y.s = -b;
                        return x.minus(y);
                    }
                    var xe = x.e / LOG_BASE,
                        ye = y.e / LOG_BASE,
                        xc = x.c,
                        yc = y.c;
                    if (!xe || !ye) {
                        if (!xc || !yc) return new BigNumber(a / 0);
                        if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
                    }
                    xe = bitFloor(xe);
                    ye = bitFloor(ye);
                    xc = xc.slice();
                    if (a = xe - ye) {
                        if (a > 0) {
                            ye = xe;
                            t = yc;
                        } else {
                            a = -a;
                            t = xc;
                        }
                        t.reverse();
                        for (; a--; t.push(0));
                        t.reverse();
                    }
                    a = xc.length;
                    b = yc.length;
                    if (a - b < 0) t = yc, yc = xc, xc = t, b = a;
                    for (a = 0; b;) {
                        a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
                        xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
                    }
                    if (a) {
                        xc.unshift(a);
                        ++ye;
                    }
                    return normalise(y, xc, ye);
                };
                P.precision = P.sd = function(z) {
                    var n, v, x = this,
                        c = x.c;
                    if (z != null && z !== !!z && z !== 1 && z !== 0) {
                        if (ERRORS) raise(13, 'argument' + notBool, z);
                        if (z != !!z) z = null;
                    }
                    if (!c) return null;
                    v = c.length - 1;
                    n = v * LOG_BASE + 1;
                    if (v = c[v]) {
                        for (; v % 10 == 0; v /= 10, n--);
                        for (v = c[0]; v >= 10; v /= 10, n++);
                    }
                    if (z && x.e + 1 > n) n = x.e + 1;
                    return n;
                };
                P.round = function(dp, rm) {
                    var n = new BigNumber(this);
                    if (dp == null || isValidInt(dp, 0, MAX, 15)) {
                        round(n, ~~dp + this.e + 1, rm == null || !isValidInt(rm, 0, 8, 15, roundingMode) ? ROUNDING_MODE : rm | 0);
                    }
                    return n;
                };
                P.shift = function(k) {
                    var n = this;
                    return isValidInt(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER, 16, 'argument') ? n.times('1e' + truncate(k)) : new BigNumber(n.c && n.c[0] && (k < -MAX_SAFE_INTEGER || k > MAX_SAFE_INTEGER) ? n.s * (k < 0 ? 0 : 1 / 0) : n);
                };
                P.squareRoot = P.sqrt = function() {
                    var m, n, r, rep, t, x = this,
                        c = x.c,
                        s = x.s,
                        e = x.e,
                        dp = DECIMAL_PLACES + 4,
                        half = new BigNumber('0.5');
                    if (s !== 1 || !c || !c[0]) {
                        return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
                    }
                    s = Math.sqrt(+x);
                    if (s == 0 || s == 1 / 0) {
                        n = coeffToString(c);
                        if ((n.length + e) % 2 == 0) n += '0';
                        s = Math.sqrt(n);
                        e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
                        if (s == 1 / 0) {
                            n = '1e' + e;
                        } else {
                            n = s.toExponential();
                            n = n.slice(0, n.indexOf('e') + 1) + e;
                        }
                        r = new BigNumber(n);
                    } else {
                        r = new BigNumber(s + '');
                    }
                    if (r.c[0]) {
                        e = r.e;
                        s = e + dp;
                        if (s < 3) s = 0;
                        for (;;) {
                            t = r;
                            r = half.times(t.plus(div(x, t, dp, 1)));
                            if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
                                if (r.e < e) --s;
                                n = n.slice(s - 3, s + 1);
                                if (n == '9999' || !rep && n == '4999') {
                                    if (!rep) {
                                        round(t, t.e + DECIMAL_PLACES + 2, 0);
                                        if (t.times(t).eq(x)) {
                                            r = t;
                                            break;
                                        }
                                    }
                                    dp += 4;
                                    s += 4;
                                    rep = 1;
                                } else {
                                    if (!+n || !+n.slice(1) && n.charAt(0) == '5') {
                                        round(r, r.e + DECIMAL_PLACES + 2, 1);
                                        m = !r.times(r).eq(x);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
                };
                P.times = P.mul = function(y, b) {
                    var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base, sqrtBase, x = this,
                        xc = x.c,
                        yc = (id = 17, y = new BigNumber(y, b)).c;
                    if (!xc || !yc || !xc[0] || !yc[0]) {
                        if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
                            y.c = y.e = y.s = null;
                        } else {
                            y.s *= x.s;
                            if (!xc || !yc) {
                                y.c = y.e = null;
                            } else {
                                y.c = [0];
                                y.e = 0;
                            }
                        }
                        return y;
                    }
                    e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
                    y.s *= x.s;
                    xcL = xc.length;
                    ycL = yc.length;
                    if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;
                    for (i = xcL + ycL, zc = []; i--; zc.push(0));
                    base = BASE;
                    sqrtBase = SQRT_BASE;
                    for (i = ycL; --i >= 0;) {
                        c = 0;
                        ylo = yc[i] % sqrtBase;
                        yhi = yc[i] / sqrtBase | 0;
                        for (k = xcL, j = i + k; j > i;) {
                            xlo = xc[--k] % sqrtBase;
                            xhi = xc[k] / sqrtBase | 0;
                            m = yhi * xlo + xhi * ylo;
                            xlo = ylo * xlo + ((m % sqrtBase) * sqrtBase) + zc[j] + c;
                            c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
                            zc[j--] = xlo % base;
                        }
                        zc[j] = c;
                    }
                    if (c) {
                        ++e;
                    } else {
                        zc.shift();
                    }
                    return normalise(y, zc, e);
                };
                P.toDigits = function(sd, rm) {
                    var n = new BigNumber(this);
                    sd = sd == null || !isValidInt(sd, 1, MAX, 18, 'precision') ? null : sd | 0;
                    rm = rm == null || !isValidInt(rm, 0, 8, 18, roundingMode) ? ROUNDING_MODE : rm | 0;
                    return sd ? round(n, sd, rm) : n;
                };
                P.toExponential = function(dp, rm) {
                    return format(this, dp != null && isValidInt(dp, 0, MAX, 19) ? ~~dp + 1 : null, rm, 19);
                };
                P.toFixed = function(dp, rm) {
                    return format(this, dp != null && isValidInt(dp, 0, MAX, 20) ? ~~dp + this.e + 1 : null, rm, 20);
                };
                P.toFormat = function(dp, rm) {
                    var str = format(this, dp != null && isValidInt(dp, 0, MAX, 21) ? ~~dp + this.e + 1 : null, rm, 21);
                    if (this.c) {
                        var i, arr = str.split('.'),
                            g1 = +FORMAT.groupSize,
                            g2 = +FORMAT.secondaryGroupSize,
                            groupSeparator = FORMAT.groupSeparator,
                            intPart = arr[0],
                            fractionPart = arr[1],
                            isNeg = this.s < 0,
                            intDigits = isNeg ? intPart.slice(1) : intPart,
                            len = intDigits.length;
                        if (g2) i = g1, g1 = g2, g2 = i, len -= i;
                        if (g1 > 0 && len > 0) {
                            i = len % g1 || g1;
                            intPart = intDigits.substr(0, i);
                            for (; i < len; i += g1) {
                                intPart += groupSeparator + intDigits.substr(i, g1);
                            }
                            if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
                            if (isNeg) intPart = '-' + intPart;
                        }
                        str = fractionPart ? intPart + FORMAT.decimalSeparator + ((g2 = +FORMAT.fractionGroupSize) ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'), '$&' + FORMAT.fractionGroupSeparator) : fractionPart) : intPart;
                    }
                    return str;
                };
                P.toFraction = function(md) {
                    var arr, d0, d2, e, exp, n, n0, q, s, k = ERRORS,
                        x = this,
                        xc = x.c,
                        d = new BigNumber(ONE),
                        n1 = d0 = new BigNumber(ONE),
                        d1 = n0 = new BigNumber(ONE);
                    if (md != null) {
                        ERRORS = false;
                        n = new BigNumber(md);
                        ERRORS = k;
                        if (!(k = n.isInt()) || n.lt(ONE)) {
                            if (ERRORS) {
                                raise(22, 'max denominator ' + (k ? 'out of range' : 'not an integer'), md);
                            }
                            md = !k && n.c && round(n, n.e + 1, 1).gte(ONE) ? n : null;
                        }
                    }
                    if (!xc) return x.toString();
                    s = coeffToString(xc);
                    e = d.e = s.length - x.e - 1;
                    d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
                    md = !md || n.cmp(d) > 0 ? (e > 0 ? d : n1) : n;
                    exp = MAX_EXP;
                    MAX_EXP = 1 / 0;
                    n = new BigNumber(s);
                    n0.c[0] = 0;
                    for (;;) {
                        q = div(n, d, 0, 1);
                        d2 = d0.plus(q.times(d1));
                        if (d2.cmp(md) == 1) break;
                        d0 = d1;
                        d1 = d2;
                        n1 = n0.plus(q.times(d2 = n1));
                        n0 = d2;
                        d = n.minus(q.times(d2 = d));
                        n = d2;
                    }
                    d2 = div(md.minus(d0), d1, 0, 1);
                    n0 = n0.plus(d2.times(n1));
                    d0 = d0.plus(d2.times(d1));
                    n0.s = n1.s = x.s;
                    e *= 2;
                    arr = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().cmp(div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1.toString(), d1.toString()] : [n0.toString(), d0.toString()];
                    MAX_EXP = exp;
                    return arr;
                };
                P.toNumber = function() {
                    return +this;
                };
                P.toPower = P.pow = function(n, m) {
                    var k, y, z, i = mathfloor(n < 0 ? -n : +n),
                        x = this;
                    if (m != null) {
                        id = 23;
                        m = new BigNumber(m);
                    }
                    if (!isValidInt(n, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER, 23, 'exponent') && (!isFinite(n) || i > MAX_SAFE_INTEGER && (n /= 0) || parseFloat(n) != n && !(n = NaN)) || n == 0) {
                        k = Math.pow(+x, n);
                        return new BigNumber(m ? k % m : k);
                    }
                    if (m) {
                        if (n > 1 && x.gt(ONE) && x.isInt() && m.gt(ONE) && m.isInt()) {
                            x = x.mod(m);
                        } else {
                            z = m;
                            m = null;
                        }
                    } else if (POW_PRECISION) {
                        k = mathceil(POW_PRECISION / LOG_BASE + 2);
                    }
                    y = new BigNumber(ONE);
                    for (;;) {
                        if (i % 2) {
                            y = y.times(x);
                            if (!y.c) break;
                            if (k) {
                                if (y.c.length > k) y.c.length = k;
                            } else if (m) {
                                y = y.mod(m);
                            }
                        }
                        i = mathfloor(i / 2);
                        if (!i) break;
                        x = x.times(x);
                        if (k) {
                            if (x.c && x.c.length > k) x.c.length = k;
                        } else if (m) {
                            x = x.mod(m);
                        }
                    }
                    if (m) return y;
                    if (n < 0) y = ONE.div(y);
                    return z ? y.mod(z) : k ? round(y, POW_PRECISION, ROUNDING_MODE) : y;
                };
                P.toPrecision = function(sd, rm) {
                    return format(this, sd != null && isValidInt(sd, 1, MAX, 24, 'precision') ? sd | 0 : null, rm, 24);
                };
                P.toString = function(b) {
                    var str, n = this,
                        s = n.s,
                        e = n.e;
                    if (e === null) {
                        if (s) {
                            str = 'Infinity';
                            if (s < 0) str = '-' + str;
                        } else {
                            str = 'NaN';
                        }
                    } else {
                        str = coeffToString(n.c);
                        if (b == null || !isValidInt(b, 2, 64, 25, 'base')) {
                            str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e);
                        } else {
                            str = convertBase(toFixedPoint(str, e), b | 0, 10, s);
                        }
                        if (s < 0 && n.c[0]) str = '-' + str;
                    }
                    return str;
                };
                P.truncated = P.trunc = function() {
                    return round(new BigNumber(this), this.e + 1, 1);
                };
                P.valueOf = P.toJSON = function() {
                    var str, n = this,
                        e = n.e;
                    if (e === null) return n.toString();
                    str = coeffToString(n.c);
                    str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e);
                    return n.s < 0 ? '-' + str : str;
                };
                P.isBigNumber = true;
                if (config != null) BigNumber.config(config);
                return BigNumber;
            }

            function bitFloor(n) {
                var i = n | 0;
                return n > 0 || n === i ? i : i - 1;
            }

            function coeffToString(a) {
                var s, z, i = 1,
                    j = a.length,
                    r = a[0] + '';
                for (; i < j;) {
                    s = a[i++] + '';
                    z = LOG_BASE - s.length;
                    for (; z--; s = '0' + s);
                    r += s;
                }
                for (j = r.length; r.charCodeAt(--j) === 48;);
                return r.slice(0, j + 1 || 1);
            }

            function compare(x, y) {
                var a, b, xc = x.c,
                    yc = y.c,
                    i = x.s,
                    j = y.s,
                    k = x.e,
                    l = y.e;
                if (!i || !j) return null;
                a = xc && !xc[0];
                b = yc && !yc[0];
                if (a || b) return a ? b ? 0 : -j : i;
                if (i != j) return i;
                a = i < 0;
                b = k == l;
                if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;
                if (!b) return k > l ^ a ? 1 : -1;
                j = (k = xc.length) < (l = yc.length) ? k : l;
                for (i = 0; i < j; i++)
                    if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;
                return k == l ? 0 : k > l ^ a ? 1 : -1;
            }

            function intValidatorNoErrors(n, min, max) {
                return (n = truncate(n)) >= min && n <= max;
            }

            function isArray(obj) {
                return Object.prototype.toString.call(obj) == '[object Array]';
            }

            function toBaseOut(str, baseIn, baseOut) {
                var j, arr = [0],
                    arrL, i = 0,
                    len = str.length;
                for (; i < len;) {
                    for (arrL = arr.length; arrL--; arr[arrL] *= baseIn);
                    arr[j = 0] += ALPHABET.indexOf(str.charAt(i++));
                    for (; j < arr.length; j++) {
                        if (arr[j] > baseOut - 1) {
                            if (arr[j + 1] == null) arr[j + 1] = 0;
                            arr[j + 1] += arr[j] / baseOut | 0;
                            arr[j] %= baseOut;
                        }
                    }
                }
                return arr.reverse();
            }

            function toExponential(str, e) {
                return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) +
                    (e < 0 ? 'e' : 'e+') + e;
            }

            function toFixedPoint(str, e) {
                var len, z;
                if (e < 0) {
                    for (z = '0.'; ++e; z += '0');
                    str = z + str;
                } else {
                    len = str.length;
                    if (++e > len) {
                        for (z = '0', e -= len; --e; z += '0');
                        str += z;
                    } else if (e < len) {
                        str = str.slice(0, e) + '.' + str.slice(e);
                    }
                }
                return str;
            }

            function truncate(n) {
                n = parseFloat(n);
                return n < 0 ? mathceil(n) : mathfloor(n);
            }
            BigNumber = constructorFactory();
            BigNumber.default = BigNumber.BigNumber = BigNumber;
            if (typeof define == 'function' && define.amd) {
                define(function() {
                    return BigNumber;
                });
            } else if (typeof module != 'undefined' && module.exports) {
                module.exports = BigNumber;
            } else {
                if (!globalObj) globalObj = typeof self != 'undefined' ? self : Function('return this')();
                globalObj.BigNumber = BigNumber;
            }
        })(this);
    }, {}],
    "web3": [function(require, module, exports) {
        var Web3 = require('./lib/web3');
        if (typeof window !== 'undefined' && typeof window.Web3 === 'undefined') {
            window.Web3 = Web3;
        }
        module.exports = Web3;
    }, {
        "./lib/web3": 22
    }]
}, {}, ["web3"])