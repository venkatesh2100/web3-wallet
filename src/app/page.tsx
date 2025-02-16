"use client"
import React, { useState } from 'react';
import * as bip39 from 'bip39';
import { ethers } from 'ethers';

function App() {
  const [mnemonic, setMnemonic] = useState('');
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');

  const generateWallet = () => {
    const mnemonic = bip39.generateMnemonic();
    const wallet = ethers.HDNodeWallet.fromMnemonic(mnemonic);
    setMnemonic(mnemonic);
    setAddress(wallet.address);
  };

  const checkBalance = async () => {
    const provider = ethers.getDefaultProvider('mainnet');
    const balance = await provider.getBalance(address);
    setBalance(ethers.formatEther(balance));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Web-Based Cryptocurrency Wallet</h1>
      <button
        onClick={generateWallet}
        style={{ padding: '10px 20px', fontSize: '16px', marginBottom: '20px' }}
      >
        Generate Wallet
      </button>
      {mnemonic && (
        <div>
          <p><strong>Mnemonic:</strong> {mnemonic}</p>
          <p><strong>Address:</strong> {address}</p>
          <button
            onClick={checkBalance}
            style={{ padding: '10px 20px', fontSize: '16px', marginTop: '10px' }}
          >
            Check Balance
          </button>
          {balance && <p><strong>Balance:</strong> {balance} ETH</p>}
        </div>
      )}
    </div>
  );
}

export default App;
