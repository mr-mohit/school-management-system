import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';


@Injectable()
export class ServiceGetResultProvider {

  public URL=this.one.URL;
  public stuData:any;
  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello ServiceGetResultProvider Provider');
  }



  getStudentFun(id){
    var url=this.URL+"getData.php";
    return this.getStudent(url,id);
  }

  getStudent(url,id)
  {
    //console.log("Class is which we passing to api",postId);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(id)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.stuData=data['data'][0];
        //console.log("Row data",this.attsubject);
        console.log("Student Data",this.stuData);
        //return 1;
      }
      else
      {
        // this.SubjectOnTimeTable=[];
        
        console.log("no data fetched");
        //return 0;
      }        
       resolve(data);
    },error=>{
      console.log("Error",error);
    });
  });

  }

}
