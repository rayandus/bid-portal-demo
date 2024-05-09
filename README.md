# Bid Port Demo

Bid Portal Demo is a web application that allows users to login, deposit funds, create bid items, and place bids on auctions. It connects to the Bid Admin API to save and retrieve bid data.

Try out the [demo here](https://bidportaldemo.z31.web.core.windows.net/) 🌐. Please register a user, then log in.

## Project Overview

This project is built with:

<table cellpadding="0" cellspacing="0">
  <tr style="padding: 0">
    <td valign="top" align="center">
        <img src="https://github.com/rayandus/my-portfolio/blob/main/public/reactjs.svg" width="50" height="50">
        <br />
        Reactjs
    </td>
    <td valign="top" align="center">
        <img src="https://github.com/rayandus/my-portfolio/blob/main/public/public/react-query.svg" width="50" height="50">
        <br />
        React Query
    </td>
    <td valign="top" align="center">
        <img src="https://github.com/rayandus/my-portfolio/blob/main/public/public/typescript.svg" width="50" height="50">
        <br />
        Typescript
    </td>
    <td valign="top" align="center">
        <img src="https://github.com/rayandus/my-portfolio/blob/main/public/public/material-ui.svg" width="50" height="50">
        <br />
        Material UI
    </td>
    <td valign="top" align="center">
        <img src="https://github.com/rayandus/my-portfolio/blob/main/public/public/emotion.svg" width="50" height="50">
        <br />
        Emotion
    </td>
  </tr>
</table>

For more details on the architecture, authentication flow, plans or to do's, please check [here](https://rma-demo.notion.site/Bid-Demo-Project-9cf3e25d70e44f4b868499aeb89fd81a)


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

## Validate the App

 > ⚠️ Prerequisite: Bid Admin API is up and running

1. Manually launch the app in your browser

1. Register a user

1. Login the user

## Other Configurations

You can override the following:

1. Create a `.env` in the root directory

1. Change currency

```bash
VITE_LANGUAGE=en
VITE_CURRENCY=USD
```

> Reference on currency-based number formatting [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)

1. Change the endpoint url

```bash
VITE_API_ENDPOINT=http://localhost:1234/api
```
