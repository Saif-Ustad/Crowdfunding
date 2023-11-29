import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x44eB6B06Aac3eF073b14Ec0c2b1a316a7737C172"
);

export default instance;
