import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

@Injectable()
export class ServiceCalculateResultProvider {
  public URL=this.one.URL; //for local use
  public resultData:any;
  public Total:any;
  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello ServiceCalculateResultProvider Provider');
  }
 

  CalFun(REG)
{

  var url=this.URL+"calculateResult.php";
  return this.Cal(url,REG);

}
Cal(url,REG)
{
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(REG)).subscribe(data1=>{
      if(data1['statuscode']==1)
      {
        this.resultData=data1['data'];
        // this.Total=data1['total'];
        console.log("DATA",this.resultData);
        // console.log("Total ",this.Total);
      }
      else
      {
        alert("Not able to fetch data");
      }        
       resolve(data1);
    },error=>{
      console.log("Error",error);
    });
  });
}
}
