# Etherum Book Club

![Bridge](./public/book-club.jpg)

## General

## Setup 

npm modules were already installed on Git Hub, like a boss! (...sorry)

npm start

navigate to http://localhost:3000/#/start

Go through the first sign in on the Ropsten Network (you will be expected to pay 0.1 test eth)

The form on the second page is sent on the Rinkeby Network, but the transaction won't require additional value to be sent.

### Variables



### Functions

#### Notes:

All contracts are created by the Ethereum Book Club

**Disclaimer-** Contracts are currently in development and should not be used for real value

## Testing
Once set up using truffle and localhosts, run from each chain:

```
truffle test
```

Should you make any changes to the contract files, make sure you `rm -rf build` before running `truffle compile && truffle test`.