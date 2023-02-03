import * as dotenv from 'dotenv';
dotenv.config();

const nextConfig = {
    env:{
        INFURA_URL: process.env.INFURA_URL,
        CONTRACT_ADRESS: process.env.CONTRACT_ADRESS
    }
  }