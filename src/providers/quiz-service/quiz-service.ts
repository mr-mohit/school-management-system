import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

@Injectable()
export class QuizServiceProvider {

  public data:any;
  public URL=this.one.URL;
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
  public size :any;



  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello QuizServiceProvider Provider');
  }


  getnext(data)
  { 
    console.log(data);
     this.index = 0; //idex initial when we start the quiz
     this.score = 0 ; // initialized the score
    var url = this.URL+"quiz.php"; 
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(data)).subscribe(data=>{
        console.log("passing data",data);
        if(data['statuscode'] == 1)
        {
          this.recdata =data['data'];
          console.log(this.recdata);

          this.question = this.recdata[this.index].QUESTION;
          this.option1 = this.recdata[this.index].OPTION1;
          this.option2 = this.recdata[this.index].OPTION2;
          this.option3 = this.recdata[this.index].OPTION3;
          this.option4 = this.recdata[this.index].OPTION4;
          this.answer = this.recdata[this.index].ANSWER;
          this.size = this.recdata.length;
          console.log(this.size);
          
        }
             
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });



  //   return new Promise(resolve=>{
  //     this.http.post(url,JSON.stringify("30191001")).subscribe(data=>{
  //       this.recdata=data;
  //       if(data['statuscode'] == 1)
  //        {
  //         console.log(this.recdata);

  //           // this.question = this.recdata.data[0].ques;
  //           // this.option1 = this.recdata.data[0].option1;
  //           // this.option2 = this.recdata.data[0].option2;
  //           // this.option3 = this.recdata.data[0].option3;
  //           // this.option4 = this.recdata.data[0].option4;
  //           // this.answer = this.recdata.data[0].ans;
  //           // this.size = this.recdata.data[0].length;
  //           // console.log(this.size);
            
  //        }
  //        resolve(data);
         
  //     },error=>{
  //       console.log(error);
  //       alert("error while processing");
  //     })
    
  //  }); 
  }

   getquestion(i)
  {
    this.question = this.recdata[this.index].QUESTION;
    this.option1 = this.recdata[this.index].OPTION1;
    this.option2 = this.recdata[this.index].OPTION2;
    this.option3 = this.recdata[this.index].OPTION3;
    this.option4 = this.recdata[this.index].OPTION4;
    this.answer = this.recdata[this.index].ANSWER;
         
  }


}
