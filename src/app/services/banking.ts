import { Injectable } from '@angular/core';

export interface Account {
  id: number;
  name: string;
  balance: number;
  type: 'Savings' | 'Chequing';
}

export interface Transaction {
  id: number;
  fromAccountId: number;
  toAccountId: number;
  amount: number;
  date: Date;
}

@Injectable({
  providedIn: 'root',
})
export class Banking {
  private accounts: Account[] = [];
  private transactions: Transaction[] = [];

  createAccount(account: Account) {
    this.accounts.push(account);
  }

  getAccounts() {
    return this.accounts;
  }

  getTransactions() {
    return this.transactions;
  }

  getAccountById(id: number) {
    return this.accounts.find((account) => account.id === id);
  }

  transferFunds(fromAccountId: number, toAccountId: number, amount: number) {
    const fromAccount = this.getAccountById(fromAccountId);
    const toAccount = this.getAccountById(toAccountId);

    if (!fromAccount || !toAccount) {
      return false;
    }

    if (fromAccount.balance < amount) {
      return false;
    }

    fromAccount.balance -= amount;
    toAccount.balance += amount;

    this.transactions.push({
      id: Date.now(),
      fromAccountId,
      toAccountId,
      amount,
      date: new Date(),
    });

    return true;
  }
}
