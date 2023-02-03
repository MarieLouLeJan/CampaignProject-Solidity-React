import assert from 'assert';
import ganache from 'ganache';
import Web3 from 'web3';
const web3 = new Web3(ganache.provider());

import compiledFactory from '../ethereum/build/CampaignFactory.json' assert { type: "json" };
import compiledCampaign from '../ethereum/build/Campaign.json' assert { type: "json" };

let accounts;
let factory;
let campaignAddress;
let campaign;
let managerAccount;
let approversAccounts = [];
let recipientAccount;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    // Manage all the accounts to make sure the tests are clear
    managerAccount = accounts[1]
    recipientAccount = accounts[9]
    for(let ac of accounts){
        if(accounts.indexOf(ac) !== 1 || accounts.indexOf(ac) !== 9) approversAccounts.push(ac)
    }


    // I deploy the campaignFactory contract
    factory = await new web3.eth.Contract(compiledFactory.abi)
        .deploy({ data: compiledFactory.evm.bytecode.object })
        .send({ from: approversAccounts[0], gas: '1400000' });

    // Then I call the function createCampaign to create a new instance of campaign contract
    await factory.methods.createCampaign('100').send({
        from: managerAccount,
        gas: '1400000'
    });

    // I destructure my array
    // I take the first element out of the array that is returned by the function
    // And assign it to the campaignAdress variable that I declared earlier
    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

    // Now I access to the contract that exist at this address
    // I'm going to assign the result to the campaign variable
    // So it will be the actual contract that I'm dealing with
    campaign = await new web3.eth.Contract(
        // We pass the ABI for the compiledCampaign
        compiledFactory.abi,
        // Then I pass the address of the already deployed campaign
        campaignAddress
    )
});

describe('Campaigns', () => {
    it('deploys a factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address)
    });

    it('marks caller as the campaign manager', async () => {
        const manager = await campaign.methods.manager().call();
        assert.equal(managerAccount, manager)
    });

    it('allows people to contribute money and marks them as approvers', async () => {
        await campaign.methods.contribute().send({
            value: '200',
            from: approversAccounts[2]
        });
        const isContributor = await campaign.methods.approvers(approversAccounts[2]).call()
        assert(isContributor)
    })

    it('requires a minimum contribution', async () => {
        try {
            await campaign.methods.contribute().send({
                value: '50',
                from: approversAccounts[3]
            });
            assert(false)
        } catch (err) {
            // Make sure there's an error, so if so, test will pass
            assert(err)
        }
    });

    it('allows a manager to make a payment request', async () => {
        await campaign.methods.createRequest(
            'Buy batteries',
            '0',
            recipientAccount
        ).send({
            from: managerAccount,
            gas: '1000000'
        });
        const request = await campaign.methods.requests(0).call();
        assert.equal('Buy batteries', request.description)
    });

    it('processes requests', async () => {
        await campaign.methods.contribute().send({
            from: approversAccounts[5],
            value: web3.utils.toWei('10', 'ether')
        });

        await campaign.methods.createRequest(
            'Buy wheels',
            web3.utils.toWei('5', 'ether'),
            recipientAccount
        ).send({
            from: managerAccount,
            gas: '1000000'
        })

        await campaign.methods.approveRequest(0).send({
            from: approversAccounts[5],
            gas: '1000000'
        })

        const count = await campaign.methods.approversCount().call()
        assert(1 == count);

        await campaign.methods.finalizeRequest(0).send({
            from: managerAccount,
            gas: '1000000'
        })

        let balance = await web3.eth.getBalance(recipientAccount);
        balance = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance);
        console.log(balance)
        assert(balance > 104);
    })
})