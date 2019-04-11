import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceExamProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceExamProvider {

  public URL="http://localhost/schoolapi/";
  private Exam_Data:any;

  constructor(public http: HttpClient) {
    console.log('Hello ServiceExamProvider Provider');
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
            console.log(this.Exam_Data);
         }else
         {  
           this.Exam_Data=[{}]
          alert("No Exam");
         }
         resolve(data);

      },error=>{
        alert("error in Service");
      });
    });
  }

}
