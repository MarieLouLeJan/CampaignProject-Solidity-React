# CampaignProject-Solidity-React

Campaign project developped following an online course.

The project was first developped with solidity 4.17, I've updated all the code to solidity 8.9, as well as many things regarding React and Nextjs.

Make sure to have ```node v18.12.1``` installed on your machine, and add 
```  
"scripts": {
    "test": "mocha",
},
```
to your package.json file. 
Now your able to test the contract by running ```npm test```.
The test file is located ```/test/Campaign.test.js```

Here are the command you should follow to deploy this contract:

- Create an .env file in the ethereum folder, containing you mnemonic phrase and your infura url
In your terminal, enter in the project;

- ```npm i```

- ```cd ethereum/```

- ```node compile.js```
    > This command should create a 'building' folder in your ethereum folder, containing 2 files:
    >- CampaignFactory.json > which represents the contract that will allow people to create instance of the campaign contract
    >- Campaign.json which contains represent the campaign contract itself

- ```node deploy```
    > Which will deploy the CampaignFactory contract on the network (blockchain) of your choice (~~ infura URL)
    > !! Make sure to copy your contract address that will appear in the terminal

- Create a ```.env.local``` file at the root of your project containing your contract address and infura URL

- Make sure to write this script in your package.json file:
```  
"scripts": {
    "dev": "next dev"
  },
  ```

- ```npm run dev```

Following the website, you'll be able to create a campaign, contribute (make sure to use another address >> check the ```Campaign.sol``` file), create requests, approve requests, finalize requests etc.

Enjoy !


