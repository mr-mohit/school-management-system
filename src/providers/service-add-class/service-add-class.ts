import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class ServiceAddClassProvider {
 public URL="http://localhost/schoolapi/"; //for local use
 // public URL="https://direct-school.000webhostapp.com/"; //for hosting
  constructor(public http: HttpClient) {
    
  }
  addClassFun(classData)
  {
    var url=this.URL+"addClass.php";
    return this.postClass(url,classData);

  }

  postClass(url,classData)
  {
    //console.log("service call",classData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(classData)).subscribe(data=>{
        console.log("passing data",classData);
        if(data['statuscode']==1)
        {
          alert("Class Added");

        }
        else
        {
          alert("Unable to add class");

        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

}
