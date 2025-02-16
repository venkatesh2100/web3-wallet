import { ethers, HDNodeWallet} from "ethers";
import { message } from "./memonic.js";

const etherMessage  = ethers.Mnemonic.fromPhrase(message)
const wallet = HDNodeWallet.fromMnemonic(etherMessage)

const adress = wallet.adress
const privateKey = wallet.privateKey
console.log(wallet)
console.log(privateKey)
console.log(adress)

