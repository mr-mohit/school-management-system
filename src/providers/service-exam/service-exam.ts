import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';


@Injectable()
export class ServiceExamProvider {
  
  public URL=this.one.URL;
  private Exam_Data:any;
  public status:boolean=false;

  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello ServiceExamProvider Provider');
    this.status=false;
  }

  getExamData(STU_REG_NO)
  {
    var url=this.URL+"Exam.php";
    return this.postExamData(url,STU_REG_NO);
  }

  postExamData(url,STU_REG_NO)
  {
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(STU_REG_NO)).subscribe(data=>{
        console.log(data);
        if(data['statuscode'] == 1)
         {
            this.Exam_Data=data['data'];
            this.status=true;
            console.log(this.Exam_Data);
         }else
         {  
           this.Exam_Data=[{}]
           this.status=false;
          alert("No exam found");
         }
         resolve(data);

      },error=>{
        alert(error);
      });
    });
  }

}
