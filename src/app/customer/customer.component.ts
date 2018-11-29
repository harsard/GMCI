import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../../_shared/Services/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customerFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.customerFormGroup = this.fb.group({
      customerId: ['', Validators.compose([])],
      customerName: ['', Validators.compose([])],
      cusContactId: ['', Validators.compose([])],
      cusMobile: ['', Validators.compose([])],
      cusResidenceNo: ['', Validators.compose([])],
      cusResidenceAddress: ['', Validators.compose([])],
      cusDateOfJoin: ['', Validators.compose([])],
      cusDateOfBirth: ['', Validators.compose([])],
      cusGender: ['', Validators.compose([])],
      cusNic: ['', Validators.compose([])],
      companyId: ['', Validators.compose([])],
      comContactId: ['', Validators.compose([])],
      comName: ['', Validators.compose([])],
      comAddress: ['', Validators.compose([])],
      comOfficeNo1: ['', Validators.compose([])],
      comOfficeNo2: ['', Validators.compose([])],
      comFaxNo: ['', Validators.compose([])],
      comEmail: ['', Validators.compose([])],
      introducerId: ['', Validators.compose([])],
      introContactId: ['', Validators.compose([])],
      introName: ['', Validators.compose([])],
      introAddress: ['', Validators.compose([])],
      introMobile: ['', Validators.compose([])],
      introOfficeNo: ['', Validators.compose([])],
      introResidenceNo: ['', Validators.compose([])],
      introNic: ['', Validators.compose([])],
      introGender: ['', Validators.compose([])]
    });
  }

  onSave() {
    this.customerService.save(this.customerFormGroup.value).subscribe(res => {
      this.toastr.success('Customer Saved', 'Saved');
    }, error => {
      this.toastr.error('Error Saving', 'Error');
    });
  }

  onCancel() {
    this.initForm();
  }

  saveDisable() {
    return this.customerFormGroup.invalid;
  }

}
