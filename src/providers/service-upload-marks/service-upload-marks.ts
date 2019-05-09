import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

@Injectable()
export class ServiceUploadMarksProvider {
  public URL=this.one.URL;
  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
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
          alert("Marks uploaded successfully");
        }
        else
        {
          alert("Unable to upload marks, check if marks are already uploaded");
        }              
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }



  // FOR UPDATING UPLOAD MARKS//////////////////////////////////////////////////////////////////////
  UpdateFun(data)
  {
    var url=this.URL+"updateMarks.php";
    return this.update(url,data);
  }

 update(url,data)
  {
    // console.log("Length",data['length']);
    console.log("updating marks",data);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(data)).subscribe(data=>{
        
        if(data['statuscode']==1)
        {
          alert("Marks updated");
        }
        else
        {
          alert("Unable to update the marks ");
        }              
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

}

