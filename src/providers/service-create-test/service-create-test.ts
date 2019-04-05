import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceCreateTestProvider {
 // public URL="http://localhost/schoolapi/"; //for local use
  public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/"; //for hosting use
  // public URL="https://direct-school.000webhostapp.com/"; //for hosting
  constructor(public http: HttpClient) {
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
          alert("Test Created");

        }
        else
        {
          alert("Unable to Create Test");

        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }
   
}
