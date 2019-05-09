import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

/*
  Generated class for the ServiceSyllabusProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceSyllabusProvider {

  public URL=this.one.URL;
  public classSYL: any;  // get the syllabus here 
  public classSB: any;   // get the corresponding subjects


  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello ServiceSyllabusProvider Provider');
  }
   
  postData(usr,url){
  
    console.log(usr,url);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(usr)).subscribe(data=>{ 
        //console.log(data);     
        if(data['statuscode'] == 1)
         {
          this.classSYL=data['data']; 
          this.classSB=data['subject']; 
          console.log(this.classSB); 
          console.log(this.classSYL); 
          //return this.data;
        
         }
         else
         {
           //console.log("Worng")
           alert(data["message"]);
         }
         resolve(data);

      },error=>{
        alert("Connection to API Error");
      });
    });
  }


  getClassSyllabus(usr){
    var url=this.URL+"getClassSyllabus.php";
    return this.postData(usr,url);
  }

}
