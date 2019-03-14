import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceClassSubjectRegProvider {
  public URL="http://localhost/schoolapi/"; //for local use
  // public URL="https://direct-school.000webhostapp.com/"; //for hosting
 
  constructor(public http: HttpClient) {
    
  }
 

  addCSR(csrData)
  {
    console.log('this is sparta',csrData);
    var url=this.URL+"ClassSubjectReg.php";
    return this.postCSR(url,csrData);

  }

  postCSR(url,csrData)
  {
    //console.log("service call",classData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(csrData)).subscribe(data=>{
        console.log("passing data",csrData);
        if(data['statuscode']==1)
        {
          alert("Subject registered ");

        }
        else
        {
          alert("Subject not Registerd ");

        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

}
