import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceUploadMarksProvider {
  //public URL="http://localhost/schoolapi/"; //for local use
   public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/"; //for local use
  // public URL="https://direct-school.000webhostapp.com/"; //for hosting
  constructor(public http: HttpClient) {
    console.log('upload service invoked');
  }

  UploadFun(data)
  {
    var url=this.URL+"uploadMarks.php";
    return this.upload(url,data);
  }

  upload(url,data)
  {
    console.log("Length",data['length']);
    console.log("passing data",data);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(data)).subscribe(data=>{
        
        if(data['statuscode']==1)
        {
          alert("Marks Uploaded");
        }
        else
        {
          alert("Unable to Upload Marks , check if marks are already uploaded");
        }              
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

}

