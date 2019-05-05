import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

/*
  Generated class for the DeleteAndUpdateTimeTableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceDeleteAndUpdateTimeTableProvider {
 
  public URL=this.one.URL;
  public SubjectsInTimeTable:any;

  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello DeleteAndUpdateTimeTableProvider Provider');
  }


  //Gets Subject According to TimeTable
  
  getSubjectsToDelete(classData)
  {
    var url=this.URL+"getSubjectsInTimeTable.php";
    return this.postSubjectToDelete(url,classData);

  }

  postSubjectToDelete(url,classData)
  {
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(classData)).subscribe(data=>{
        console.log("passing data",classData);
        if(data['statuscode']==1)
        {
          this.SubjectsInTimeTable=data['data'];
        }
        else
        {
          this.SubjectsInTimeTable=[{}];
          alert("No Time table to delete");

        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

  //update timetable

  getUpdateData(UpdateData)
  {
    var url=this.URL+"UpdateTimeTable.php";
    return this.postUpdateData(url,UpdateData);

  }

  postUpdateData(url,UpdateData)
  {
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(UpdateData)).subscribe(data=>{
        console.log("passing data",UpdateData);
        if(data['statuscode']==1)
        {
          alert(data['msg']);
        }
        else
        {
         
          alert(data['msg']);

        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }


}
