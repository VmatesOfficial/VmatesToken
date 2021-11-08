const VmatesToken = artifacts.require("VmatesToken");

module.exports = async function (deployer, network, accounts) {
  console.log("network: ", network);
  console.log("accounts: ",accounts);

  let VmatesTokenAddress = "";
  logger.log("Date of Time" + " " + new Date().toLocaleTimeString());


  if (VmatesTokenAddress == "") {
    await deployer.deploy(VmatesToken);
    VmatesTokenAddress = VmatesToken.address;
    console.log("network: ", network, "VmatesTokenAddress: "  + VmatesTokenAddress);
    logger.log("network: ", network,  "VmatesTokenAddress: "  + VmatesTokenAddress);
  }
};
