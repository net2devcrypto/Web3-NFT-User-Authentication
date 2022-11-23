# Web3-NFT-User-Authentication
⚡ A very straightfoward guide to authenticate users in NextJS with NFTs. 
Block users that aren't holding a specific ERC721 NFT

<h2>Securing Apps with NFTs</h2>


** THE FILES ATTACHED TO THIS REPO ARE FOR EDUCATIONAL PURPOSES ONLY **

** NOT FINANCIAL ADVISE **

** USE IT AT YOUR OWN RISK** **I'M NOT RESPONSIBLE FOR ANY USE, ISSUES ETC.. **


Click for video:

<a href="https://youtu.be/WsJvf3LGtt0" target="_blank"><img src="https://github.com/net2devcrypto/misc/blob/main/ytlogo2.png" width="150" height="40"></a> 


<h3>Steps to use this Repo</h3>


1-Create a new NextJS app:

```shell
npx create-next-app web3auth
```

2- Install Dependencies:

```shell
cd web3auth
npm i ethers web3modal
```

3- Replace all files and folders in your project with the ones attached to this repo.

Add all files and folders to the root project directory "web3auth", overwrite when prompted.

4- Deploy the attached NFT Smart Contract Attached to your favorite testnet 

NFT-ERC721-Sample-Collection-SmartContract.sol

5- Mint a couple of NFTs from the smart contract to one wallet.

6- Add the NFT Smart Contract address to: components/config.js 

```shell
export const nftcontract = "REPLACE WITH NFT SMART CONTRACT ADDRESS";
```
ctrl + s to save

7- Run your NextJS Project

```shell
npm run dev
```

8- TEST

- Navigate to your project page and proceed to test by clicking "Connect Wallet"

with the wallet that holds the NFTs. You should be redirected to a "Welcome" page.

- Attempt the same test with another wallet that doesn't have NFTs and you should

be redirected to an "Access Denied" page.

- Switch back to the wallet that has NFTs and get to the "Welcome" page.

- Switch to the wallet that doesn't have NFTs and you should be auto redirected
to the "Access Denied" page.


Follow the video tutorial for explanations and guidance!
