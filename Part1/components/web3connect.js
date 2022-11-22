import { nftcontract } from "./config";
import NFTABI from './nftabi.json';
import { ethers } from "ethers";
import Web3Modal from 'web3modal';

export async function connectWallet() {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const addressraw = signer.getAddress()
    const addressstr = (await addressraw).valueOf()
    let contract = new ethers.Contract(nftcontract, NFTABI, signer);
    let getids = await contract.walletOfOwner(addressstr);
    if (getids[0] === undefined){
        return 0;
    }
    else {
        return 1;
    }
}