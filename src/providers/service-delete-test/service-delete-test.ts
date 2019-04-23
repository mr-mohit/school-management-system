import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

/*
  Generated class for the ServiceDeleteTestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceDeleteTestProvider {
  public URL=this.one.URL; //for local use
  //public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/"; //for hosting use
// public URL="https://direct-school.000webhostapp.com/"; //for hosting

  constructor(public http: HttpClient, public one:ServiceLoginProvider) {
    console.log('Hello ServiceDeleteTestProvider Provider');
  }
  DeteleTestFun(test)
  {
    var url=this.URL+"DeleteClassTest.php";
    return this.DeleteTest(url,test);
  }

  
  DeleteTest(url,test)
  {
//console.log("service call",sessionData);
return new Promise(resolve=>{
  this.http.post(url,JSON.stringify(test)).subscribe(data=>{
    if(data['statuscode']==1)
    {
      // alert("Term Added");
      //this.eventData=data['data'][0];
      alert(data['msg']);
      //return 1;
    }
    else
    {
      alert(data['msg']);
      //return 0;
    }        
     resolve(data);
  },error=>{
    console.log("Error",error);
  });
  });
  }

}
