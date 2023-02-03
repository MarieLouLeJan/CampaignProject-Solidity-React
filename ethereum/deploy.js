import * as dotenv from 'dotenv'
dotenv.config()
import HDWalletProvider from "@truffle/hdwallet-provider";
import Web3 from "web3";
import compiledFactory from '../ethereum/build/CampaignFactory.json' assert { type: "json" };

const mnemonicPhrase = process.env.MNEMONIC_PHRASE
const infuraUrl = process.env.INFURA_URL

const provider = new HDWalletProvider({
    mnemonic : {
        phrase: mnemonicPhrase
    }, 
    providerOrUrl: infuraUrl
});

const web3 = new Web3(provider);

const deploy = async () => {

    try {
        const accounts = await web3.eth.getAccounts();
        console.log('Attempting to deploy from accounts', accounts[0])
        
        const result = await new web3.eth.Contract(
            compiledFactory.abi
            )
                .deploy({ data: compiledFactory.evm.bytecode.object })
                .send({ from: accounts[0], gas: '1400000' })
        
        console.log('Contract deployed to', result.options.address)
    
        provider.engine.stop()
    } catch (err) {
        console.log(err)
    }
    

};

deploy()