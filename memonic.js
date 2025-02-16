import * as bip39 from 'bip39'

export const  message = bip39.generateMnemonic();
//TODO: Try to Encrypt the Normal message to seeder 
export const seed = bip39.mnemonicToSeedSync(message)
console.log("Memonic:",message)
// console.log("Seed message",seed);

console.log("Seed Prase: ", seed.toString('hex'))
