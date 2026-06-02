import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomButton } from './custom-button/custom-button';

@NgModule({
  declarations: [CustomButton],
  imports: [CommonModule],
  exports: [CustomButton],
})
export class SharedModule {}
