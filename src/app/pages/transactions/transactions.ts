import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account, Banking } from '../../services/banking';

@Component({
  selector: 'app-transactions',
  standalone: false,
  templateUrl: './transactions.html',
  styleUrl: './transactions.scss',
})
export class Transactions {
  transferForm: FormGroup;
  accounts: Account[] = [];
  transferMessage = '';
  transferSuccess = false;

  constructor(
    private fb: FormBuilder,
    private bankingService: Banking,
  ) {
    this.accounts = this.bankingService.getAccounts();

    this.transferForm = this.fb.group({
      fromAccountId: ['', Validators.required],
      toAccountId: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]],
    });
  }

  get amount() {
    return this.transferForm.get('amount');
  }

  onSubmit() {
    if (this.transferForm.invalid) {
      return;
    }

    const fromAccountId = Number(this.transferForm.value.fromAccountId);
    const toAccountId = Number(this.transferForm.value.toAccountId);
    const amount = Number(this.transferForm.value.amount);

    if (fromAccountId === toAccountId) {
      this.transferSuccess = false;
      this.transferMessage = 'From and To accounts must be different.';
      return;
    }

    const success = this.bankingService.transferFunds(
      fromAccountId,
      toAccountId,
      amount,
    );

    this.transferSuccess = success;
    this.transferMessage = success
      ? 'Transfer completed successfully.'
      : 'Transfer failed. Please check account balance.';

    if (success) {
      this.transferForm.reset({
        fromAccountId: '',
        toAccountId: '',
        amount: 0,
      });
    }
  }
}
