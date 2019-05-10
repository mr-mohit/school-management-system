import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';

/*
  Generated class for the ServiceChangepasswordProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceChangepasswordProvider {

  public URL=this.one.URL;
  public status:any=0;

  constructor(public http: HttpClient,public one:ServiceLoginProvider,public nativeStorage: NativeStorage,public splashScreen: SplashScreen) {
    console.log('Hello ServiceChangepasswordProvider Provider');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Change Password Service');
   
  }
  postChangeData(NewPasswordData)
  {
    var url=this.URL+"ChangePassword.php";
    return this.postData(url,NewPasswordData);
  }

  postData(url,NewPasswordData)
  {
    console.log("passing data",NewPasswordData);
    return new Promise(resolve=>{
    
      this.http.post(url,JSON.stringify(NewPasswordData)).subscribe(data=>{
        console.log(JSON.stringify(data));
        if(data['statuscode'] == 1)
        {
          alert(data['msg']);
          this.status=1;

          this.nativeStorage.remove('LoginInfo').then(
            ()=>{'Removed Successfully'},
            error=> console.log('Error Removing data '+error));

           this.splashScreen.show();
           location.reload();
          
        }
        else
        {
          alert(data['msg']);
          this.status=0;
        }
        resolve(data);
      },error=>{
        console.log(NewPasswordData);
        console.log("data not transferred",error);
      });
    });
  }

}
