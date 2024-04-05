// Import ethers from Hardhat package
const hre = require("hardhat");

async function main() {
    // Compile the contract to get the latest bytecode and ABI
    await hre.run('compile');

    // The contract factory provides an abstraction to deploy new smart contracts,
    // so `router` here is a factory for instances of our router contract.
    const Router = await hre.ethers.getContractFactory("RelicswapV1Router02");

    // Here you should replace the addresses with the deployed addresses of your Factory and WETH contracts
    const factoryAddress = "0xd100Cc820e3a50e1803f87757bbDbfae7c7Ab71C";
    const wethAddress = "0x4200000000000000000000000000000000000006";

    // Deploy the contract
    await Router.deploy(factoryAddress, wethAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exit(1);
});
