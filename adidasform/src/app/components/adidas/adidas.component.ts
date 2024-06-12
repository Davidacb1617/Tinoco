import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzFormItemComponent } from 'ng-zorro-antd/form';
import { NzColDirective } from 'ng-zorro-antd/grid';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { Validators as MyValidators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/product.service';

@Component({
  selector: 'app-adidas',
  standalone: true,
  templateUrl: './adidas.component.html',
  styleUrls: ['./adidas.component.css'],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NzColDirective,
    NzFormItemComponent,
    NzInputDirective,
    NzInputNumberComponent,
    NzButtonComponent,
    NzDatePickerComponent,
  ],
})
export class AdidasComponent implements OnInit {
  validateForm: FormGroup<{
    model: FormControl<string>;
    color: FormControl<string>;
    price: FormControl<number>;
  }>;

  constructor(
    private fb: NonNullableFormBuilder,
    private service: ApiService,
    private notification: NzNotificationService
  ) {
    const { required } = MyValidators;
    this.validateForm = this.fb.group({
      model: ['', [required]],
      color: ['', [required]],
      price: [0, [required]],
    });
  }

  shoes: any;
  ngOnInit() {}

  loadBeanFlavor() {
    this.service.getAdidasComponents().subscribe((data) => {
      this.shoes = data;
      console.log(this.shoes);
    });
  }
  submitFormShoe(): void {
    if (this.validateForm.valid) {
      this.service
        .createAdidasComponent(this.validateForm.value)
        .subscribe(() => {
          this.createNotification(
            'success',
            `${this.validateForm.value.model} Price: ${this.validateForm.value.price}`,
            'The shoe has been created successfully!'
          );
          this.validateForm.reset();
        });
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  createNotification(type: string, title: string, message: string): void {
    this.notification.create(type, title, message);
  }
}
