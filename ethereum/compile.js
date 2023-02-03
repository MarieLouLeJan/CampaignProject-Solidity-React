import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import path from 'path';
import fs from 'fs-extra';
import solc from 'solc';

// I get the path of the build folder
const buildPath = path.resolve(__dirname, 'build');

// If I recompile my contract, it means that I've changed something on it
// So I make sure to remove the build folder (fs-extra allows me to do it)
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

const input = {
    language: "Solidity",
    sources: {
      "Campaign.sol": {
        content: source,
      },
    },
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };
   

const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts[ "Campaign.sol" ];

// I check if the build path exists, if not, I create it
fs.ensureDirSync(buildPath);

// I loop over the output object (as I know I've more than one contract)
for (let contract in output) {
    // OutputJsonSync write out a Json file to some specify folder inside my directory
    fs.outputJsonSync(
        // I pass in a path to the buildPath and specifically a file inside there calling contract + .json 
        // So contract is the key of the first contract we are looping on (here it's :Campaign)
        // Here to clean it up I replace the : by empty string
        path.resolve(buildPath, `${contract.replace(':', '')}.json`),
        // The second argument is the context that we want to write the json file
        // So I reference the output object which is the entire object inside the contract key
        output[contract]
    )
}