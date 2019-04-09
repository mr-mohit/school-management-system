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
  public Teacher_Subject:any;

  public Teacher_Time_Table:any=[{}];

  constructor(public http: HttpClient) {
    console.log('Hello ServiceGetTeacherProvider Provider');
  }

  //To Select All User Where Role=Teacher from usertable
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


  //Fetch Assigned Subject for Current Teacher

  getTeacherSubject(REG_NO)
  {
    var url=this.URL+"getTeacher_Subject.php";
    return this.postTeacherSubject(url,REG_NO);
  }

  postTeacherSubject(url,REG_NO)
  {
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(REG_NO)).subscribe(data=>{
        console.log(data);
        if(data['statuscode'] == 1)
         {
            this.Teacher_Subject=data['data'];
            console.log(this.Teacher_Subject);
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

  //Get Time Table According To Teacher

  getTeacherTimeTable(TimeElement)
  {
    var url=this.URL+"View_Teacher_Time_Table.php";
    return this.postTeacherTimeTable(url,TimeElement);
  }

  postTeacherTimeTable(url,TimeElement)
  {
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(TimeElement)).subscribe(data=>{
        console.log(data);
        if(data['statuscode'] == 1)
         {
            this.Teacher_Time_Table=data['data'];
            console.log(this.Teacher_Time_Table);
         }
         else
         { 
          this.Teacher_Time_Table=[{
            CLASS_MASTER_ID: "No Data",
            CLASS: "No Data",
            SUBJECT_ID: "No Data",
            TIME_SLOT: "No Data",
            DAY: "No Data"}
          ];
          //TO EMPTY Variable  
          alert("Not Found");
         }
         resolve(data);

      },error=>{
        console.log(error);
       // alert("error in Service-get-teacher/postTeacherTimeTable");
      });
    });

  }



}
