import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

/*
  Generated class for the ServiceAnnouncementProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceAnnouncementProvider {
  public data:any;
  //public URL="http://localhost/schoolapi/"; //for local use
 // public URL="https://direct-school.000webhostapp.com/"; //for hosting
 public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/"; //for server use


  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello ServiceAnnouncementProvider Provider');
  }

  postData(url){
  

    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify("")).subscribe(data=>{ 
        //console.log(data);     
        if(data['statuscode'] == 1)
         {
          this.data=data['data']; 
          console.log(this.data); 
          return this.data;
        
         }
         else
         {
           //console.log("Worng")
           alert("No Data");
         }
         resolve(data);
      },error=>{
        console.log("Error",error);
      });
    });
  }


  getData(){
    var url=this.URL+"AnnouncementData.php";
    return this.postData(url);
  }

  //Edit And Delete
  
  DeleteCurrent(Data)
  {
    var url=this.URL+"AnnouncementDelete.php";
    return this.FinalDeleteCurrent(url,Data)
  }

  FinalDeleteCurrent(url,Data)
  {
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(Data)).subscribe(data=>{ 
        if(data['statuscode'] == 1)
         {
          alert("Removed");
          return 1;
         }
         else
         {
           alert("Unable to remove");
           return 0;
         }
         resolve(data);

      },error=>{
        alert("Connection Error");
      });
    });
  }


  //Update

  getUpdateData(UpdateData)
  {
    var url=this.URL+"UpdateAnnouncement.php";
    return this.postUpdateData(url,UpdateData);
  }
  postUpdateData(url,UpdateData)
  {
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(UpdateData)).subscribe(data=>{ 
        if(data['statuscode'] == 1)
         {
          alert("Updated");
          return 1;
         }
         else
         {
           alert("Unable to update");
           return 0;
         }
         resolve(data);

      },error=>{
        alert("Connection Error");
      });
    });

  }


}
