import { Component } from '@angular/core';
import { Account, Banking } from '../../services/banking';

@Component({
  selector: 'app-history',
  standalone: false,
  templateUrl: './history.html',
  styleUrl: './history.scss',
})
export class History {
  selectedAccountId = '';
  searchTerm = '';

  constructor(public bankingService: Banking) {}

  get accounts(): Account[] {
    return this.bankingService.getAccounts();
  }

  get transactions() {
    const allTransactions = this.bankingService.getTransactions();

    return allTransactions.filter((transaction) => {
      const matchesAccount =
        !this.selectedAccountId ||
        transaction.fromAccountId === Number(this.selectedAccountId) ||
        transaction.toAccountId === Number(this.selectedAccountId);

      const fromName = this.getAccountName(
        transaction.fromAccountId,
      ).toLowerCase();
      const toName = this.getAccountName(transaction.toAccountId).toLowerCase();

      const matchesSearch =
        !this.searchTerm ||
        fromName.includes(this.searchTerm.toLowerCase()) ||
        toName.includes(this.searchTerm.toLowerCase()) ||
        transaction.amount.toString().includes(this.searchTerm);

      return matchesAccount && matchesSearch;
    });
  }

  getAccountName(accountId: number) {
    const account = this.bankingService.getAccountById(accountId);
    return account ? account.name : 'Unknown Account';
  }
}
