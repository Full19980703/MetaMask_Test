require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  path: {
    artifacts: './artifacts',
  },
  networks: {
    hardhat : {
      // chainId : 1337
    },
    ropsten: {
      url : "https://ropsten.infura.io/v3/1337",
      accounts: ['0x{0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d}']
    }
  }
};
