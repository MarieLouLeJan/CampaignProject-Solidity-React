import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { Button, Form, Input, Message } from 'semantic-ui-react'
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import Router from 'next/router'


const CampaignNew = () => {

    const router = Router.useRouter();

    const [ minContribution, setMinContribution ] = useState('')
    const [ errorMsg, setErrorMsg ] = useState('')
    const [ loading, setLoading ] = useState(false)


    const onSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)
        setErrorMsg('')

        try {
            const accounts = await web3.eth.getAccounts();
            
            await factory.methods
                .createCampaign(await web3.utils.toWei(minContribution, 'ether'))
                .send({
                    from: accounts[0]
                })
                
            router.push('/');
        } catch (err) {
            setErrorMsg(err.message)
            console.log(err)
        }
        setLoading(false)
    }



    return (
        <Layout>
            <h3>Create a new campaign</h3>

            <Form 
                onSubmit={onSubmit} 
                // When a string is empty, we put 1! to make it true, and 2 ! to make it false
                error={!!errorMsg}>
                <Form.Field>
                    <label>Minimum contribution</label>
                    <Input 
                        label='wei' 
                        labelPosition='right' 
                        value={minContribution}
                        onChange={(e) => setMinContribution(e.target.value)}
                    />
                </Form.Field>
                <Message error header="Oops" content={errorMsg}/>
                <Button loading={loading} primary>Create !</Button>
            </Form>
        </Layout>
      )
}


export default CampaignNew;
