import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../dtos/User';


@Component({
  selector: 'app-customer2',
  templateUrl: './customer2.component.html',
  styleUrls: ['./customer2.component.scss']
})


export class Customer2Component implements OnInit {
 // table
  users: Array<User> = [];
  selectedUser= new User();



  public profileForm:FormGroup;
  submitted = false;
  hide;


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







  constructor(public form: FormBuilder) {
    this.profileForm = this.form.group({
      username:['',{validators: [Validators.minLength(6)], updateOn: 'blur'}],
      email:['',Validators.required],
      number:[ '',{validators: [Validators.minLength(10)], updateOn: 'blur'}],
      pwd:['',Validators.required]
    });

  }
  get number() {
    return this.profileForm.get('number');
  }
  get username() {
    return this.profileForm.get('username');
  }
  get email() {
    return this.profileForm.get('email');
  }
  // checkUserExists() {


  //         this.profileForm.value.userName.setErrors({ userExists: `User Name  already exists` });

  // }
  onSubmit() {
    console.log('');
    this.submitted = true; }

  ngOnInit() {

  }

}
