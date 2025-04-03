# VertexSol – Solana Meme Coin Sniping & Trading Mini App

## Overview

VertexSol is a mini app designed for sniping and trading meme coins on the Solana blockchain. The app combines gaming aesthetics with crypto trading functionalities, providing a visually appealing and interactive experience for both gamers and traders.

## Features

- **Snipe New Tokens**: Live tracking of newly launched tokens with quick buy options and market stats.
- **Portfolio**: View and manage your current holdings with dynamic updates.
- **Connect Wallet**: Securely connect your Solana wallet using a seed phrase.
- **Real-time Charts**: Analyze trending meme coins with real-time price charts.
- **Balance**: Display your current SOL balance with real-time updates.
- **Premium Tools**: Track top wallets and engage with an AI-powered historical trade simulator.

## Technical Stack

### Frontend
- **Framework**: React.js with Next.js for optimization
- **UI Library**: Tailwind CSS and Framer Motion for smooth animations
- **Charts**: Chart.js and TradingView API
- **Wallet Integration**: Solana Wallet Adapter with Phantom & Solflare support

### Backend
- **Server**: Node.js with Express.js
- **Database**: PostgreSQL with AES-256 encryption for sensitive data
- **APIs**: CoinGecko, Solana RPC API, Raydium API, Wallet Adapter API

## Setup Instructions

### Backend
1. Navigate to the `backend` directory and install dependencies:
   ```sh
   cd backend
   npm install
