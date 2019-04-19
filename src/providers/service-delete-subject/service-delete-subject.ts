import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

/*
  Generated class for the ServiceDeleteSubjectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceDeleteSubjectProvider {

  public URL=this.one.URL;
  
  public subjectdata:any;
  public subjectData:any;
  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello ServiceDeleteSubjectProvider Provider');
  }

  deleteSubjectFun(SUB)
  {
    var url=this.URL+"deleteSubject.php";
    return this.deleteSubject(url,SUB);

  }
  deleteSubject(url,SUB)
  {
    //console.log("service call",classData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(SUB)).subscribe(data=>{
        console.log("passing data",SUB);
        if(data['statuscode']==1)
        {
          alert("Subject Deleted");

        }
        else
        {
          alert("Subject Not-Deleted");

        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }
}
