import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceAnnouncementProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceAnnouncementProvider {
  public data:any;
  public URL="http://localhost/schoolapi/"; //for local use
 // public URL="https://direct-school.000webhostapp.com/"; //for hosting

  constructor(public http: HttpClient) {
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
         }
         else
         {
           //console.log("Worng")
           alert("No Data");
         }
         resolve(data);

      },error=>{
        alert("Connection Error");
      });
    });
  }


  getData(){
    var url=this.URL+"AnnouncementData.php";
    return this.postData(url);
  }

}
