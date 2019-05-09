import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

/*
  Generated class for the ServiceStudentHomeworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceStudentHomeworkProvider {

  public URL=this.one.URL;
  public classHW: any;
  public classSB: any;


  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello ServiceStudentHomeworkProvider Provider');
  }
  postData(usr,url){
  

    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(usr)).subscribe(data=>{ 
        //console.log(data);     
        if(data['statuscode'] == 1)
         {
          this.classHW=data['data']; 
          this.classSB=data['subject']; 
          console.log(this.classSB); 
          console.log(this.classHW); 
          //return this.data;
        
         }
         else
         {
           //console.log("Worng")
           alert(data["message"]);
         }
         resolve(data);

      },error=>{
        alert("Connection error");
      });
    });
  }


  getClassHomeWork(usr){
    var url=this.URL+"getClassHomework.php";
    return this.postData(usr,url);
  }

}
