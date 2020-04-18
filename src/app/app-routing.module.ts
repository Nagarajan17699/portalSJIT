import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { StudentMarksComponent} from './student-page/student-marks/student-marks.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { StaffPageComponent } from './staff-page/staff-page.component';



//#####################---ATTENDANCE--INCHARGE--ROUTES---#######################


import { atten_HeaderComponent } from './atten_incharge/shared/header/header.component';
import { atten_FooterComponent } from './atten_incharge/shared/footer/footer.component';
import { FeeComponent } from './atten_incharge/fee/fee.component';
import { SmsComponent } from './atten_incharge/sms/sms.component';
import { HomeComponent } from './atten_incharge/home/home.component';
import { BasicFeeComponent } from './atten_incharge/fee/basic-fee/basic-fee.component';
import { SpecialFeeComponent } from './atten_incharge/fee/special-fee/special-fee.component';
import { ChallanComponent } from './atten_incharge/fee/challan/challan.component';
import { SectionComponent } from './atten_incharge/stu_update/section/section.component';
import { SendSMSComponent } from './atten_incharge/sms/send-sms/send-sms.component';
import { DailyComponent } from './atten_incharge/atten_report/daily/daily.component';
import { Sem_reportComponent } from './atten_incharge/atten_report/sem_report/sem_report.component';
import { Edit_atComponent } from './atten_incharge/update_atten/edit_at/edit_at.component';
import { Mark_abComponent } from './atten_incharge/update_atten/mark_ab/mark_ab.component';
import { OutpassComponent } from './atten_incharge/outpass/outpass.component';
import { atten_inchargeComponent } from './atten_incharge/atten_incharge.component';


//#####################---ATTENDANCE--INCHARGE--ROUTES---#######################


const routes: Routes = [
  
 // { path: '', component: StudentPageComponent},
  //{ path: 'marks', component: StudentMarksComponent},
  // {path: '/notes', component: },
  // {path: '/fees', component: },
  // {path: '/forms', component: },


  
//#####################---ATTENDANCE--INCHARGE--ROUTES---#######################
  
  { path: '', component: atten_inchargeComponent},
  // { path :'', redirectTo:'/home',pathMatch:'full'},
  { path :'home', component: HomeComponent},
  { path :'sms', component: SmsComponent},
  { path :'basic_Fee', component: BasicFeeComponent},
  { path :'special_Fee', component: SpecialFeeComponent},
  { path :'challan', component: ChallanComponent},
  { path :'update', component: SectionComponent},
  { path :'daily_report', component: DailyComponent},
  { path :'sem_report', component: Sem_reportComponent},
  { path :'mark_ab', component: Mark_abComponent},
  { path :'edit_ab', component: Edit_atComponent},
  { path :'sendsms', component: SendSMSComponent},
  { path :'outpass', component: OutpassComponent}

//#####################---ATTENDANCE--INCHARGE--ROUTES---#######################


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents 
= [
  StudentPageComponent,
  StudentMarksComponent,
  StaffPageComponent,
  HeaderComponent,
  FooterComponent,

  
//#####################---ATTENDANCE--INCHARGE--COMPONENTS---#######################
  
  atten_HeaderComponent,
  atten_FooterComponent,
  atten_inchargeComponent,
  HomeComponent,
  SmsComponent,
  BasicFeeComponent,
  SpecialFeeComponent,
  ChallanComponent,
  SendSMSComponent,
  DailyComponent,
  Sem_reportComponent,
  Edit_atComponent,
  Mark_abComponent,
  OutpassComponent,
  SectionComponent,

]