import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceAddTermProvider {
  public URL="http://localhost/schoolapi/"; //for local use
  // public URL="https://direct-school.000webhostapp.com/"; //for hosting
  constructor(public http: HttpClient) {
    
  }

  postData(url,termData)
  {
    //console.log("service call",sessionData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(termData)).subscribe(data=>{
        console.log("passing data",termData);
        if(data['statuscode']==1)
        {
          alert("Term Added");

        }
        else
        {
          alert("Term Not-Added");
        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

  addTermFun(termData)
  {
    var url=this.URL+"addTerm.php";
    return this.postData(url,termData);

  }

}
