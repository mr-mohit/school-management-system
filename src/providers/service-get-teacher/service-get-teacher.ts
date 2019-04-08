import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceGetTeacherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceGetTeacherProvider {

  public URL="http://localhost/schoolapi/"; 

  public TeacherData:any;
  public Teacher_Time_Table:any;

  constructor(public http: HttpClient) {
    console.log('Hello ServiceGetTeacherProvider Provider');
  }

  getData()
  { 
    var url=this.URL+"get_teacher.php";
    return this.postData(url);
  }

  postData(url)
  {
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify("")).subscribe(data=>{
        console.log(data);
        if(data['statuscode'] == 1)
         {
            this.TeacherData=data['data'];
            console.log(this.TeacherData);
         }else
         { 

          //TO EMPTY Variable
          this.TeacherData=[{DOB: "",
           E_MAIL: "",
          FIRST_NAME: "",
          GENDER: "",
          IS_ACTIVE: "",
          LAST_NAME: "",
          OTP: "",
          PASSWORD: "",
          REG_NO: "",
          ROLE: "",
          USER_ID: "",
          USER_PIC: ""}];
          
          alert("No Teacher Found");
         }
         resolve(data);

      },error=>{
        console.log("error in Service-get-teacher");
        alert("error in Service-get-teacher");
      });
    });

  }


  //Fetch Time Table for Current Teacher

  getTeacherTime(REG_NO)
  {
    var url=this.URL+"Teacher_Time_Table.php";
    return this.postTeacherTime(url,REG_NO);
  }

  postTeacherTime(url,REG_NO)
  {
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(REG_NO)).subscribe(data=>{
        console.log(data);
        if(data['statuscode'] == 1)
         {
            this.Teacher_Time_Table=data['data'];
            console.log(this.Teacher_Time_Table);
         }else
         { 

          //TO EMPTY Variable  
          alert("Not Found");
         }
         resolve(data);

      },error=>{
        console.log("error in Service-get-teacher");
        alert("error in Service-get-teacher");
      });
    });

  }


}
