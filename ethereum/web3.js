import Web3 from "web3";
 
let web3;


// IF we are in the browser && if metamask has already injected web3
if ( typeof window !== 'undefined' && typeof window.ethereum ) {
    // We create an instance of a web3 with a copy of web3 that was injected by metamask
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);
// ELSE we are on the server OR the user isnt running metamask 
} else {
    // We gonna set up our one provider that connects to the Goerli network throught infura
    // & then use that as the provider dor ou web3 instance
    const provider = new Web3.providers.HttpProvider(
        process.env.NEXT_PUBLIC_INFURA_URL
    );
    web3 = new Web3(provider);
}

 
export default web3;

