import React from 'react';
import factory from '../ethereum/factory';
import { Card, Button, Icon } from 'semantic-ui-react';
import Layout from '../components/Layout';
import Link from 'next/link';

const CampaignIndex = ({ campaigns }) => {

    const renderCampaigns = () => {
        const items = campaigns.map(address => {
            return (
                {
                    header: address,
                    description: (
                        <Link href={`/campaigns/${address}`}>
                            View Campaign
                        </Link>
                    ),
                    fluid: true,
                    style: {overflowWrap: 'break-word'}
                }
            )
        });
        return (
            <Card.Group items={items}/>
        )
    }

    return (
        <Layout>
            <div>

                <h3>Open Campaigns</h3>

                <Link href='/campaigns/new'>
                    {/* <a> */}
                        <Button 
                            floated='right'
                            icon="add"
                            labelPosition='left' 
                            content="Create Campaign"
                            primary
                        />
                    {/* </a> */}
                </Link>

                {renderCampaigns()}

            </div>
        </Layout>
    )
}

CampaignIndex.getInitialProps = async () => {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns }
}

export default CampaignIndex;
