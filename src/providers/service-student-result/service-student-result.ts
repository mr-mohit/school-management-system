import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceStudentResultProvider {
  public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/"; //for server use
  //public URL="http://localhost/schoolapi/"; //for local use
  //public URL="https://direct-school.000webhostapp.com/"; //for hosting
    public resultData:any;
    public studentData:any;
  

  constructor(public http: HttpClient) {
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
          alert("No data Found");
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
          alert("No data Found");
        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });
  }  

}
