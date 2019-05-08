import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

@Injectable()
export class ServiceStudentResultProvider {
 
  public URL=this.one.URL;
    public resultData:any;
    public studentData:any;
  

  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello ServiceStudentResultProvider Provider');
  }

  getResultFun(id)
  {
    var url=this.URL+"getResult.php";
    return this.getResult(url,id);
  }

  getResult(url,id)
  {
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(id)).subscribe(data=>{
        if(data['statuscode']==1)
        {
          this.resultData=data['data'];
          console.log("Result to be displayed",this.resultData);
        }
        else
        {
          alert("No result found");
        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });
  }


  ViewStudentFun(id){
    var url=this.URL+"teacherViewStudent.php";
    return this.ViewStudent(url,id);
  }
  ViewStudent(url,id){
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(id)).subscribe(data=>{
        if(data['statuscode']==1)
        {
          this.studentData=data['data'];
          console.log("Student info ",this.studentData[0]['FIRST_NAME']);
        }
        else
        {
          alert("Student information not found");
        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });
  }  

}
