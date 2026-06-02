import { Component } from '@angular/core';
import { Banking, Account } from '../../services/banking';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-creation',
  standalone: false,
  templateUrl: './account-creation.html',
  styleUrl: './account-creation.scss',
})
export class AccountCreation {
  accountForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bankingService: Banking,
  ) {
    this.accountForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      balance: [0, [Validators.required, Validators.min(0)]],
      type: ['Savings', Validators.required],
    });
  }

  get name() {
    return this.accountForm.get('name');
  }

  get balance() {
    return this.accountForm.get('balance');
  }

  get accounts() {
    return this.bankingService.getAccounts();
  }

  get selectedAccountType() {
    return this.accountForm.value.type;
  }

  onSubmit() {
    if (this.accountForm.invalid) {
      return;
    }

    const newAccount: Account = {
      id: Date.now(),
      name: this.accountForm.value.name,
      balance: Number(this.accountForm.value.balance),
      type: this.accountForm.value.type,
    };

    this.bankingService.createAccount(newAccount);

    this.accountForm.reset({
      name: '',
      balance: 0,
      type: 'Savings',
    });
  }
}
