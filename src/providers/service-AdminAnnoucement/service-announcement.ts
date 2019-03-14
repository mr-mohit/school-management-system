import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ServiceAdminAnnouncements {

  //public data:any;
  public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/";
   //public URL="https://direct-school.000webhostapp.com/"; //for hosting
  constructor(public http: HttpClient) {
  }
  postData(url,data1)
  {

    // For header problem
    
    // var header={"header":{"Content-Type":"application/json"}};
    
    // console.log("data passing",JSON.stringify(data1));
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
        // console.log("data1 is here"+data1);
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
