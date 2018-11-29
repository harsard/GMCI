import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CustomerComponent} from '../customer/customer.component';
import {Customer2Component} from './customer2.component';
import {FormsRouterModule} from '../forms/forms.router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxPaginationModule} from "ngx-pagination";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule, MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule, MatSelectModule,
  MatSliderModule, MatSlideToggleModule,
  MatStepperModule, MatTableModule,
  MatTabsModule,
  MatToolbarModule,

} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactiveFormsComponent} from '../forms/reactive-forms/reactive-forms.component';


const routes: Routes = [
  { path: '', component: Customer2Component },
]

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTabsModule,
    MatRadioModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatTableModule,
    NgxPaginationModule,
    // NgbModule,

    RouterModule.forChild(routes)
  ],
  declarations: [Customer2Component, ReactiveFormsComponent],
})
export class Customer2Module { }
