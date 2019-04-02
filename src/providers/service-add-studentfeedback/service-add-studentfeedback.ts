import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceAddStudentfeedbackProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceAddStudentfeedbackProvider {
  public URL="http://localhost/schoolapi/"; //for local use
  //public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/";
  //public URL="https://direct-school.000webhostapp.com/"; //for hosting

  constructor(public http: HttpClient) {
    console.log('Hello ServiceAddStudentfeedbackProvider Provider');
  }

  postFeedback(feedbackData)
  {
    var url=this.URL+"addStudentFeedback.php";
    return this.postData1(url,feedbackData);
  }

  postData1(url,feedbackData)
  {
    //console.log("passing data",feedbackData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(feedbackData)).subscribe(data=>{
        if(data['statuscode'] == 1)
        {
          alert("Feedback added successfully");
        }
        else
        {
          alert("Unable to add the feedback");
        }
        resolve(data);
      },error=>{
        //console.log(feedbackData);
        console.log("Error",error);
      });
    });
  }
}
