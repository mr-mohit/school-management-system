import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

/*
  Generated class for the ServiceDeleteTimetableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceDeleteTimetableProvider {

  public URL=this.one.URL;

    public TimeTableData:any;

  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello ServiceDeleteTimetableProvider Provider');
  }

  getDeletetimetableData(timeData)
  {
    var url=this.URL+"DeleteTimeTable.php";
    return this.postDeleteTimetableData(url,timeData);

  }

  postDeleteTimetableData(url,timeData)
  {

    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(timeData)).subscribe(data=>{
        if(data['statuscode']==1)
        {
          console.log("Data here from DeleteTime",data);
          this.TimeTableData=data['data'];
        }
        else
        {
          alert("Unable to Delete");

        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });


  }

}
