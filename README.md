# Bid Port Demo

Bid Portal Demo is a web application that allows users to login, deposit funds, create bid items, and place bids on auctions. It connects to the Bid Admin API to save and retrieve bid data.

## Project Overview

### Architecture

- Architeture is discussed here (tbd)

### Limitations

- Limitations and to dos are discussed here (tbd)

### Tests

Currently, there are no tests available

    ❌ Unit Tests (Partial)

    ❌ Component Tests

    ❌ E2E Tests

### CICD

- Currently, CICD has not been set-up

## Prerequisite

1. Node Version Manager (nvm)
1. Pnpm

## Setup

1. Clone [bid-portal-demo](https://github.com/rayandus/bid-portal-demo) repo in your local

1. Go to project root directory and install

   ```bash
   cd bid-portal-demo
   git checkout main
   nvm install
   pnpm install
   ```

1. Start the application

   ```bash
   pnpm start:dev
   ```

   > The app will run on port `5173`. E.g. `http://localhost:5173`

   or

   ```bash
   pnpm start:dev -- --port 5173
   ```

   > Just replace `PORT=5173` to your choice of port

1. Manually launch the app in your browser


## Changing Currency

As of this version, currency is fixed to USD. If you want to change it. Do the following:

1. Create a `.env` in the root directory

1. Add these variables

  ```bash
  VITE_LANGUAGE=en
  VITE_CURRENCY=USD
  ```

  > Refernce on currency-based number formatting [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)

## More about this project

1. Built with ReactJs and TypeScript

1. Material UI for the UI components

1. Tanstack React Query for data synchronization

1. Vite for the dev server and bundler
