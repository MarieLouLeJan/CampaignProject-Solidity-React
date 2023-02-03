import React from "react";
import Layout from "../../../../components/Layout";
import { Button, Table } from 'semantic-ui-react';
import Link from 'next/link';
import Campaign from "../../../../ethereum/campaign";
import RequestRow from "../../../../components/RequestRow";


const RequestIndex = ({ requests, address, approversCount, requestCount }) => {

    const { Header, Row, HeaderCell, Body } = Table;

    const renderRows = () => {
        return requests.map((request, index) => {
            return <RequestRow 
                request={request}
                key={index}
                id={index}
                address={address}
                approversCount={approversCount}
            />
        })
    }

    return (
        <Layout>
            <h3>Requests</h3>
            <Link href={`/campaigns/${address}/requests/new`}>
                {/* <a> */}
                    <Button 
                        primary
                        floated="right"
                        style={{ marginBottom: 10 }}
                    >
                        Add request
                    </Button>
                {/* </a> */}
            </Link>

            <Table>
                <Header>
                    <Row>
                        <HeaderCell>Id</HeaderCell>
                        <HeaderCell>Description</HeaderCell>
                        <HeaderCell>Amount</HeaderCell>
                        <HeaderCell>Recipient</HeaderCell>
                        <HeaderCell>Approval Counts</HeaderCell>
                        <HeaderCell>Approve</HeaderCell>
                        <HeaderCell>Finalize</HeaderCell>
                    </Row>
                </Header>

                <Body>
                    {renderRows()}
                </Body>
            </Table>

            <div>Found {requestCount} request(s).</div>

        </Layout>
    )
}


RequestIndex.getInitialProps = async (ctx) => {

    const address = ctx.query.id;
    const campaign = Campaign(address);
    const requestCount = await campaign.methods.getRequestsCount().call();

    // So far, with solidity, it's impossible to return an array of structs. That's why I didn't write, in my contract, a function that returns that.

    // The requests method here will retrieve a given individual request
    // -- index 0, index 1 etc... cause we are using an array to store all these differents requests
    // So we want to iterate from 0 all the way up to the request count
    // As the function getRequestsCount returns a string, we first do a parseInt on it
    // To do that we use array.fill >> Here we're created an array with as many indexes as requestsCount (all the indexes return undefined)
    // Then by doing .map we could essentially map thought this array, that counted from 0 up to our requestCount
    // Then we request all the methods, one by one, by calling them with their indexes
    const requests = await Promise.all(
        Array(parseInt(requestCount))
            .fill()
            .map((element, index) => {

            return campaign.methods.requests(index).call()
        })
    )

    const approversCount = await campaign.methods.approversCount().call()

    return { requests, address, approversCount, requestCount }

}



export default RequestIndex;