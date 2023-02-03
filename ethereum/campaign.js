import web3 from "./web3";
import Campaign from './build/Campaign.json' assert { type: "json" };

export default (address) => {
    return new web3.eth.Contract(
        Campaign.abi,
        address
    )
}