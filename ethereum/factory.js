import web3 from './web3'

import CampaignFactory from './build/CampaignFactory.json' assert { type: "json" };

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    process.env.NEXT_PUBLIC_CONTRACT
);

export default instance;