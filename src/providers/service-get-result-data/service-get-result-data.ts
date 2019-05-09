import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

@Injectable()
export class ServiceGetResultDataProvider {
public URL=this.one.URL;
public RData:any;
public RRData:any;
public Type:any;
  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello ServiceGetResultDataProvider Provider');
  }



  UploadRDFun(result)
{

  var url=this.URL+"resultData.php";
  return this.getRD(url,result);

}
UploadRD(url,result)
{
  console.log("UPLOADING DATA",result);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(result)).subscribe(data1=>{
      if(data1['statuscode']==1)
      {
        alert("Result uploaded successfully");
      }
      else
      {
        alert("Not able to upload the result");
      }        
       resolve(data1);
    },error=>{
      console.log("Error",error);
    });
  });
}

  getRDFun(TID)
{

  var url=this.URL+"getResultData.php";
  return this.getRD(url,TID);

}
getRD(url,TID)
{
  console.log("GETTING DATA OF THIS TEST",TID);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(TID)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.RData=data['data'];
        console.log("test data is",this.RData);
      }
      else
      {
        alert("No result found");
      }        
       resolve(data);
    },error=>{
      console.log("Error",error);
    });
  });
}



}
