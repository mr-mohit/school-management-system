import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
  public data:any;
  public URL="http://192.168.43.152/schoolapi/";
  public recdata: any;//this variable will store info coming from API

  constructor(public httpClient: HttpClient ) {
    //console.log('Hello ServiceProvider Provider');
  }

  postData(url,data1){
    console.log(data1);
    return new Promise(resolve=>{
      this.httpClient.post(url,JSON.stringify(data1)).subscribe(data=>{
        console.log(data);
        if(data['statuscode'] == 1)
        {
          console.log("sucessfully implimented",data['statuscode']);

        }
        resolve(data);
      },error=>{
        console.log("sorry,,error",error);
      });
    });
  }

  postlogin(data){
    console.log(data);
    var url=this.URL+"login.php";
    return this.postData(url,data);

  }

}

