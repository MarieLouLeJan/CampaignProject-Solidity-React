import React, { useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';

const RequestRow = ({ request, id, address, approversCount }) => {

    const { Row, Cell } = Table;

    const [ loading, setLoading ] = useState(false);

    const { description, recipient, approvalCount, value, complete } = request;

    const onApprove = async () => {

        setLoading(true)

        try {
            const accounts = await web3.eth.getAccounts();
            const campaign = Campaign(address);
            await campaign.methods.approveRequest(id).send({
                from: accounts[0]
            })
        } catch (err) {
            console.log(err.message)
        }
        setLoading(false)
    }

    const onFinalize = async () => {

        setLoading(true)

        try {
            const accounts = await web3.eth.getAccounts();
            const campaign = Campaign(address);
            await campaign.methods.finalizeRequest(id).send({
                from: accounts[0]
            })
        } catch (err) {
            console.log(err)
            setErrorMsg(err.message)
        }
        setLoading(false)
    }

    const onRefuseFinalize = () => {
        console.log('Number of approvers insufficient')
    }

  return (
    <Row disabled={complete}>
        <Cell>{id}</Cell>
        <Cell>{description}</Cell>
        <Cell>{web3.utils.fromWei(value, 'ether')}</Cell>
        <Cell>{recipient}</Cell>
        <Cell>{`${approvalCount} / ${approversCount}`}</Cell>
        <Cell>
            {request.complete ? null : (
                <Button
                color='green'
                basic
                onClick={onApprove}
                loading={loading}
            >
                Approve
            </Button>
            )}
        </Cell>
        <Cell>
            { (approvalCount > approversCount / 2 )
                ? request.complete ? null : (
                    <Button
                    color='teal'
                    basic
                    onClick={onFinalize}
                    loading={loading}
                    >
                        Finalize
                    </Button>
                )
                : (
                    <Button
                    color='orange'
                    basic
                    onClick={onRefuseFinalize}
                    >
                        Finalize
                    </Button>
                )
            }
        </Cell>
    </Row>
  )
}

export default RequestRow
