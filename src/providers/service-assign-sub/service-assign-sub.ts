import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the ServiceAssignSubProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceAssignSubProvider {

  public URL="http://localhost/schoolapi/";

  private SubjectAvail:any;

  constructor(public http: HttpClient,public toast:ToastController) {
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
