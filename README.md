# Overview
A Seamless Social Network on Clarity Contracts

# Components
- A Social Authenticator
- A Social Activity Tracker

# Contracts
- Authentication Counter
- Authentication Registry
- Authentication Key Value Store

# Technology
- Clarity Language
- Node Package Manager
- Mocha Testing

# Context
A Clarity smart contract is composed of two parts — a data space and a set of functions. Only the associated smart contract may modify its corresponding data space on the blockchain. Functions may be private and thus callable only from within the smart contract, or public and thus callable from other contracts. Users call smart contracts’ public functions by broadcasting a transaction on the blockchain which invokes the public function. Contracts can also call public functions from other smart contracts.

# TestNet

- Open a new terminal for testnet and run the coomands
- git clone https://github.com/blockstack/stacks-blockchain.git
- cd stacks-blockchain
- cargo testnet start --config=testnet/stacks-node/Stacks.toml


