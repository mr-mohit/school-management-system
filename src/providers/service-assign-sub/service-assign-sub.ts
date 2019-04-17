import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { ServiceLoginProvider } from '../service-login/service-login';

@Injectable()
export class ServiceAssignSubProvider {

  //public URL=this.one.URL; //for local use
  public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/"; 
  private SubjectAvail:any;

  constructor(public http: HttpClient,public toast:ToastController,public one:ServiceLoginProvider) {
    console.log('Hello ServiceAssignSubProvider Provider');
  }


//For Getting The Subjects that are not Assigned
  getSubjectData(getSubjectData)
  {
    var url=this.URL+"getAssignAbleSubjects.php";
    return this.postSubjectData(url,getSubjectData);
  }

  postSubjectData(url,getSubjectData)
  {
    console.log("passing data",getSubjectData);
    return new Promise(resolve=>{
    
      this.http.post(url,JSON.stringify(getSubjectData)).subscribe(data=>{
        console.log(JSON.stringify(data));
        if(data['statuscode'] == 1)
        {
          this.SubjectAvail=data['data'];
          console.log("Data Got",this.SubjectAvail);
        }
        else
        {
          alert("All Subjects of this Class Already Assigned");
        }
        resolve(data);
      },error=>{
        console.log(getSubjectData);
        console.log("data not transferred",error);
      });
    });
  }

  //Insert Assign Subject Data to Teacher_table
  SaveAssignedData(Data)
  {
    var url=this.URL+"SaveAssignedSubject.php";
    return this.postAssignedData(url,Data);
  }

  postAssignedData(url,Data)
  {
    return new Promise(resolve=>{
    
      this.http.post(url,JSON.stringify(Data)).subscribe(data=>{
        console.log(JSON.stringify(Data));
        if(data['statuscode'] == 1)
        {
          console.log("Data Got");
          const toast = this.toast.create({
            message: 'Subject assign sucessfully',
            duration: 3000,
            position: 'top'
          });
          toast.present();
          

        }
        else
        {
          alert("Unable to assign");
        }
        resolve(data);
      },error=>{
        console.log("data not transferred",error);
      });
    });
  }

}
