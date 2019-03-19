import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceDeleteTermProvider {
  //public URL="http://localhost/schoolapi/"; //for local use
  // public URL="https://direct-school.000webhostapp.com/"; //for hosting
  public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/";


  constructor(public http: HttpClient) {
    console.log('Hello ServiceDeleteTermProvider Provider');
  }

  deleteTermFun(TD)
  {
    var url=this.URL+"deleteTerm.php";
    return this.deleteTerm(url,TD);

  }

  deleteTerm(url,TD)
  {
    //console.log("service call",classData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(TD)).subscribe(data=>{
        console.log("passing data",TD);
        if(data['statuscode']==1)
        {
          alert("Term Deleted");

        }
        else
        {
          alert("Term Not-Deleted");

        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

}
