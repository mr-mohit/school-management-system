import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';


@Injectable()
export class ServiceAnnouncementProvider {
  public data:any;
  public status:boolean=false;
  public URL=this.one.URL; 
  
  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello ServiceAnnouncementProvider Provider');
  }

  postData(url){
  

    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify("")).subscribe(data=>{ 
        //console.log(data);     
        if(data['statuscode'] == 1)
         {
           this.status=true;
          this.data=data['data']; 
          console.log(this.data); 
          return this.data;
        
         }
         else
         {
           //console.log("Worng")
           this.data=[{}];
           this.status=false;
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
          alert("Announcement removed");
          //return 1;
         }
         else
         {
           alert("Unable to remove the announcement");
           //return 0;
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
          // return 1;
         }
         else
         {
           alert("Unable to update");
          //  return 0;
         }
         resolve(data);
      },error=>{
        alert("Connection Error");
      });
    });
  }
}
