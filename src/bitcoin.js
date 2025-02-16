import * as bitcoin from "bitcoinjs-lib";
import * as bip32 from "bip32";
import { seed } from "./memonic.js"; // Ensure correct file name!

// Create a BIP32 root key
const root = bip32.fromSeed(seed);

// Define derivation path
const path = "m/44'/0'/0'/0/0";
const child = root.derivePath(path);

// Generate Bitcoin address
const { address } = bitcoin.payments.p2pkh({ pubkey: child.publicKey });

console.log("Bitcoin Address:", address);
