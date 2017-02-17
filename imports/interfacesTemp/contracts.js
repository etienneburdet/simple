AbiArray = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newName","type":"string"}],"name":"changeName","outputs":[],"payable":false,"type":"function"}];
contractAddress = "0xcd4bb8d07cb7af6b7874faef1969ff1b23e8a427";
//const contractAddress = "0x894fb76956411be2951e80b09b7f2c43a346a447";
data = "6060604052604060405190810160405280600781526020017f457469656e6e65000000000000000000000000000000000000000000000000008152506000908051906020019061005092919061005e565b50341561005957fe5b610103565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061009f57805160ff19168380011785556100cd565b828001600101855582156100cd579182015b828111156100cc5782518255916020019190600101906100b1565b5b5090506100da91906100de565b5090565b61010091905b808211156100fc5760008160009055506001016100e4565b5090565b90565b6102c3806101126000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100465780635353a2d8146100df575bfe5b341561004e57fe5b610056610139565b60405180806020018281038252838181518152602001915080519060200190808383600083146100a5575b8051825260208311156100a557602082019150602081019050602083039250610081565b505050905090810190601f1680156100d15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156100e757fe5b610137600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506101d7565b005b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101cf5780601f106101a4576101008083540402835291602001916101cf565b820191906000526020600020905b8154815290600101906020018083116101b257829003601f168201915b505050505081565b80600090805190602001906101ed9291906101f2565b505b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061023357805160ff1916838001178555610261565b82800160010185558215610261579182015b82811115610260578251825591602001919060010190610245565b5b50905061026e9190610272565b5090565b61029491905b80821115610290576000816000905550600101610278565b5090565b905600a165627a7a723058203bdf3657cf0a09e8798e3f74e454544c0ae8db058c4d83f541faf18d282a88e00029";


newAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"decimalUnits","type":"uint8"},{"name":"tokenSymbol","type":"string"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}];
newData = '6060604052604060405190810160405280600981526020017f546f6b656e20302e31000000000000000000000000000000000000000000000081525060039080519060200190610050929190610131565b50341561005957fe5b60405162000ed938038062000ed9833981016040528080519060200190919080518201919060200180519060200190919080518201919050505b83600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508360078190555082600490805190602001906100f4929190610131565b50806005908051906020019061010b929190610131565b5081600660006101000a81548160ff021916908360ff1602179055505b505050506101d6565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061017257805160ff19168380011785556101a0565b828001600101855582156101a0579182015b8281111561019f578251825591602001919060010190610184565b5b5090506101ad91906101b1565b5090565b6101d391905b808211156101cf5760008160009055506001016101b7565b5090565b90565b610cf380620001e66000396000f300606060405236156100a2576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100a4578063095ea7b31461013d57806318160ddd1461019457806323b872dd146101ba578063313ce567146102305780635a3b7e421461025c57806370a08231146102f557806395d89b411461033f578063a9059cbb146103d8578063dd62ed3e1461042f575bfe5b34156100ac57fe5b6100b4610498565b6040518080602001828103825283818151815260200191508051906020019080838360008314610103575b805182526020831115610103576020820191506020810190506020830392506100df565b505050905090810190601f16801561012f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561014557fe5b61017a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610536565b604051808215151515815260200191505060405180910390f35b341561019c57fe5b6101a4610629565b6040518082815260200191505060405180910390f35b34156101c257fe5b610216600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061062f565b604051808215151515815260200191505060405180910390f35b341561023857fe5b6102406108c6565b604051808260ff1660ff16815260200191505060405180910390f35b341561026457fe5b61026c6108d9565b60405180806020018281038252838181518152602001915080519060200190808383600083146102bb575b8051825260208311156102bb57602082019150602081019050602083039250610297565b505050905090810190601f1680156102e75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156102fd57fe5b610329600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610977565b6040518082815260200191505060405180910390f35b341561034757fe5b61034f6109c1565b604051808060200182810382528381815181526020019150805190602001908083836000831461039e575b80518252602083111561039e5760208201915060208101905060208303925061037a565b505050905090810190601f1680156103ca5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156103e057fe5b610415600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610a5f565b604051808215151515815260200191505060405180910390f35b341561043757fe5b610482600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610be9565b6040518082815260200191505060405180910390f35b60048054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561052e5780601f106105035761010080835404028352916020019161052e565b820191906000526020600020905b81548152906001019060200180831161051157829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a3600190505b92915050565b60075481565b60006000600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506106fb600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205484610c71565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610787600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205484610c9d565b600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506107d48184610c9d565b600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a3600191505b509392505050565b600660009054906101000a900460ff1681565b60038054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561096f5780601f106109445761010080835404028352916020019161096f565b820191906000526020600020905b81548152906001019060200180831161095257829003601f168201915b505050505081565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b919050565b60058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a575780601f10610a2c57610100808354040283529160200191610a57565b820191906000526020600020905b815481529060010190602001808311610a3a57829003601f168201915b505050505081565b6000610aaa600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610c9d565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610b36600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610c71565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b92915050565b600060008284019050610c92848210158015610c8d5750838210155b610cb7565b8091505b5092915050565b6000610cab83831115610cb7565b81830390505b92915050565b801515610cc357610000565b5b505600a165627a7a7230582007457447ec429aff30908582bf7851f7c2df9eaa60946dfdb5db2d80b94d242f0029';