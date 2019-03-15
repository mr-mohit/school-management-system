import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceGetClassMasterProvider {

  public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/"; //for local use
  // public URL="https://direct-school.000webhostapp.com/"; //for hosting
  public classData:any;

  public subjectData:any;

  constructor(public http: HttpClient) {
    
  }


  getClassFun()
  {
    var url=this.URL+"getClass_Master.php";
    return this.getClass(url);

  }
  getClass(url)
  {
    //console.log("service call",sessionData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(" ")).subscribe(data=>{
        if(data['statuscode']==1)
        {
          // alert("Term Added");
          this.classData=data['data'];
          console.log("classes",data);


        }
        else
        {
          alert("no data fetched");
        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

  // GET SUBJECTS FOR CLASS SUBJECT REGISTRATION
  getSubjectFun()
  {
    var url=this.URL+"getSubjects.php";
    return this.getSubject(url);

  }
  getSubject(url)
  {
    //console.log("service call",sessionData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(" ")).subscribe(data=>{
        if(data['statuscode']==1)
        {
          // alert("Term Added");
          this.subjectData=data['data'];
          console.log("subjects",data);


        }
        else
        {
          alert("no data fetched");
        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }


}
