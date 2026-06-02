# Banking Transactions Application

## Overview

This project is a banking transactions web application built using Angular and Bootstrap. The application allows users to create bank accounts, transfer funds between accounts, and view transaction history through a simple and intuitive interface.

## Features

### Account Creation

- Create new accounts with an initial balance.
- Select account type (Savings or Chequing).
- Conditional button styling based on account type.
- Input validation using Angular Reactive Forms.

### Fund Transfers

- Transfer funds between accounts.
- Validation to prevent negative transfers.
- Validation to prevent transfers exceeding available account balances.
- Prevention of transfers to the same account.

### Transaction History

- View transaction history for all accounts.
- Filter transactions by account.
- Search transactions by account name or amount.
- View transaction date, source account, destination account, and amount.

### Reusable Components

- Custom reusable button component.
- SharedModule implementation for reusable UI components.

### Routing

The application includes navigation between:

- Account Creation
- Transactions
- Transaction History

## Technologies Used

- Angular 20
- TypeScript
- Bootstrap 5
- Angular Router
- Angular Reactive Forms

## Project Structure

```text
src/app
├── pages
│   ├── account-creation
│   ├── transactions
│   └── history
├── services
│   └── banking
├── shared
│   ├── custom-button
│   └── shared-module
├── app-module.ts
└── app-routing-module.ts
```

## Installation

### Prerequisites

- Node.js
- Angular CLI

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
ng serve
```

Navigate to:

```text
http://localhost:4200
```
