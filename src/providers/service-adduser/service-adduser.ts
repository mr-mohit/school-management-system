import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceAdduserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceAdduserProvider {

  $role:any;
  $name:any;
  $gender:any;
  $dob:any;
  $email:any;
  $username:any;
  $password:any;
  $Fname:any;
  $AddressType:any;
  $AddressOne:any;
  $AddressTwo:any;
  $State:any;
  $Pincode:any;
  $City:any;
  $Contact:any;

  public data:any;
  public URL="http://localhost/schoolapi/"; //for local use
  // public URL="https://direct-school.000webhostapp.com/"; //for hosting


  constructor(public http: HttpClient) {
    //console.log('Hello ServiceLoginProvider Provider');
  }
  getData(url,data1){
    
  }

  postlogin(data){
    console.log(data);
    var url=this.URL+"adduser.php";
    return this.getData(url,data);
  }

}
