/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 require('dotenv').config();
 require("@nomiclabs/hardhat-waffle");
 module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`0x${process.env.RINKEBY_PRIVATE_KEY}`],
    },
  },
};