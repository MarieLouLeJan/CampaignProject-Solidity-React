import React, { useState } from "react";
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Layout from "../../../../components/Layout";
import Campaign from "../../../../ethereum/campaign";
import web3 from "../../../../ethereum/web3";
import Router from 'next/router'
import Link from 'next/link';


const RequestNew = () => {

    const router = Router.useRouter();
    const address = router.query.id

    const [ value, setValue ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ recipient, setRecipient ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ errorMsg, setErrorMsg ] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)
        setErrorMsg('')

        const campaign = Campaign(address);

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(
                description,
                web3.utils.toWei(value, 'ether'),
                recipient
            ).send({
                from: accounts[0]
            })
            Router.push(`/campaigns/${address}/requests`);
        } catch (err) {
            setErrorMsg(err.message)
        }
        setLoading(false)
    }

    return (
        <Layout>
            <Link href={`/campaigns/${address}/requests`}>
                {/* <a> */}
                    Back
                {/* </a> */}
            </Link>
            <h3>Create a Request</h3>

            <Form onSubmit={onSubmit} error={!!errorMsg}>
                <Form.Field>
                    <label>Description</label>
                    <Input
                        value={description}
                        onChange={ e => 
                            setDescription(e.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Value</label>
                    <Input
                        label='ETH'
                        labelPosition="right"
                        value={value}
                        onChange={ e => 
                        setValue(e.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Recipient</label>
                    <Input
                        value={recipient}
                        onChange={ e => 
                        setRecipient(e.target.value)}
                    />
                </Form.Field>

                <Message
                    error
                    herder='Oops'
                    content={errorMsg}
                />
                <Button 
                    loading={loading}
                    primary
                >
                    Create
                </Button>
            </Form>
        </Layout>
    )
}


export default RequestNew