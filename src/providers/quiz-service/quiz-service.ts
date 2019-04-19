import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

/*
  Generated class for the QuizServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuizServiceProvider {

  public data:any;
  //public URL=this.one.URL;
 // public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/";
  //public URL="http://localhost/schoolapi/";
   public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/";
  public recdata: any;//this variable will store info coming from API
  public index; // index use to fetch element from quiz API 
  public question; // get the question from dthe API
  public option1;  // option1
  public option2; // option2
  public option3; // option3
  public option4; // option4
  public answer; // answer got from the API
  public score = 0; // total score
  public quiz_status = 1; // check if the quiz has already attempted by the user or nor
 



  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello QuizServiceProvider Provider');
  }


  getnext()
  { 
     this.index = 0; //idex initial when we start the quiz
     this.score = 0 ; // initialized the score
    return new Promise(resolve=>{
      this.http.get(this.URL).subscribe(data=>{
        this.recdata=data;
        if(data['statuscode'] == 1)
         {
          console.log(this.recdata);

          this.question = this.recdata.data[0].ques;
          this.option1 = this.recdata.data[0].option1;
          this.option2 = this.recdata.data[0].option2;
          this.option3 = this.recdata.data[0].option3;
          this.option4 = this.recdata.data[0].option4;
          this.answer = this.recdata.data[0].ans;

            resolve(data);
         }
         
      },error=>{
        console.log("error while processing");
        alert("error while processing");
      })
    
   }); 
  }

   getquestion(i)
  {
    this.question = this.recdata.data[i].ques;
    this.option1 = this.recdata.data[i].option1;
    this.option2 = this.recdata.data[i].option2;
    this.option3 = this.recdata.data[i].option3;
    this.option4 = this.recdata.data[i].option4;
    this.answer = this.recdata.data[i].ans;
  }


}
