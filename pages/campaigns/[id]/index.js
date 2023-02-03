import React from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import Link from 'next/link';
import Layout from "../../../components/Layout";
import Campaign from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";
import ContributeForm from "../../../components/ContributeForm";


const CampaignShow = ({ address, minmumContribution, balance, requestCount, approversCount, manager}) => {

    const renderCards = () => {

        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and can create requests to withdraw money',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: minmumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contrinute at least this much wei to become an approver'
            },
            {
                header: requestCount,
                meta: 'Number of Requests',
                description: 'A request try to withdraw money from the contract. Request must be approve by approvers'
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to the campaign'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign balance (ether)',
                description: 'The balance is how much money this campaign has left to spend'
            }
        ]

        return <Card.Group items={items} />
    }

    return (
        <Layout>
            <h3>
                Campaign show
            </h3>

            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                            {renderCards()}

                    </Grid.Column>

                    <Grid.Column width={6}>
                        <ContributeForm address={address}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Link href={`/campaigns/${address}/requests`}>
                            {/* <a> */}
                                <Button primary>
                                    View requests
                                </Button>
                            {/* </a> */}
                        </Link>
                    </Grid.Column>
                    </Grid.Row>
            </Grid>
        </Layout>
    )
}

CampaignShow.getInitialProps = async (ctx) => {
    const address = ctx.query.id
    const campaign = Campaign(address)
    const summary = await campaign.methods.getSummary().call();
    return {
        address,
        minmumContribution: summary[0],
        balance: summary[1],
        requestCount: summary[2],
        approversCount: summary[3],
        manager: summary[4]
    }
}

export default CampaignShow;