import React, { Component, useState } from "react";
import { Form, Input, Message, Button } from 'semantic-ui-react'
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import Router from 'next/router'


const ContributeForm = ({ address }) => {

    const router = Router.useRouter();

    const [ value, setValue ] = useState('');
    const [ errorMsg, setErrorMsg ] = useState('');
    const [ loading, setLoading ] = useState(false)


    const onSubmit = async (e) => {
        e.preventDefault();

        const campaign = Campaign(address);
        setLoading(true)
        setErrorMsg('')

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(value, 'ether')
            })
            router.reload()
        } catch (err) {
            setErrorMsg(err.message)
            console.log(err)
        };
        setLoading(false)
        setValue('')
    }   

  return (
    <Form onSubmit={onSubmit} error={!!errorMsg}>
        <Form.Field>
            <label>Amount to contribute</label>

            <Input 
                label='ETH'
                labelPosition="right"
                value={value}
                onChange={e => setValue(e.target.value)}
            />

        </Form.Field>

        <Message error header='Oops' content={errorMsg}/>
        <Button primary loading={loading}>
                Contibute !
        </Button> 
    </Form>
  )
}

export default ContributeForm
