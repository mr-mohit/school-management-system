import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

@Injectable()
export class ServiceCreateTestProvider {
  public URL=this.one.URL;
  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
  }
  createTestFun(testData)
  {
    var url=this.URL+"createTest.php";
    return this.createTest(url,testData);

  }

  createTest(url,testData)
  {
    //console.log("service call",classData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(testData)).subscribe(data=>{
        console.log("passing test data",testData);
        if(data['statuscode']==1)
        {
          alert("Test created");

        }
        else
        {
          alert("Unable to create the test");

        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }
   
}
