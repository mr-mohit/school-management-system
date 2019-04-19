import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';


@Injectable()
export class ServiceAdminAnnouncements {

  //public data:any;
  public URL="http://localhost/schoolapi/";
  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
  }
  postData(url,data1)
  { 
     console.log("data passing",JSON.stringify(data1));
    return new Promise(resolve=>{    
      this.http.post(url,JSON.stringify(data1)).subscribe(data=>{
        if(data['statuscode'] == 1)
        {
          alert("Added successfully");
        }
        else
        {
          alert("Unable to Add");
        }
           resolve(data);
      },error=>{
        console.log("data not transferred",error);
      });
    });
  }


  postAnnouncements(Announcements)
  {
    var url=this.URL+"announcement.php";
    return this.postData(url,Announcements);
  }
}
