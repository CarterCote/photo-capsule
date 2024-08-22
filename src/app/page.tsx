'use client';

import React from "react";
import dynamic from "next/dynamic";
import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";

// This is to disable SSR when using WalletMultiButton
const WalletMultiButtonDynamic = dynamic(
  async () => (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export default function Home() {
    const wallet = useWallet();
    console.log(wallet);

    // Actions
    const renderNotConnectedContainer = () => (
        <div>

            <div className="button-container">
                <WalletMultiButtonDynamic className="cta-button connect-wallet-button" />
            </div>
        </div>
    );

    return (
        <div className="App">
            <div className="container">
                <div className="header-container">
                    <p className="header">photo capsule</p>
                    <p className="sub-text">preserve ur memories frozen in time, and relive them</p>
                    {wallet.publicKey ? "Hello" : renderNotConnectedContainer()}
                </div>
            </div>
        </div>
    );
}
