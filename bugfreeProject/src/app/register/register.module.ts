import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DisappearDirective } from './disappear.directive';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { TruncatePipe } from './truncate.pipe';
import { RegisterService } from './register.service';

@NgModule({
  declarations: [
    RegisterComponent,
    // DisappearDirective,
    // TruncatePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisterComponent
  ],
  providers: [
    RegisterService
  ]
})
export class RegisterModule { }
