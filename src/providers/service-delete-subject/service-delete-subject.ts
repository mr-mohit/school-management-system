import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

/*
  Generated class for the ServiceDeleteSubjectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceDeleteSubjectProvider {
  public subjectdata:any;
  public URL="http://localhost/schoolapi/"; //for local use
  // public URL="https://direct-school.000webhostapp.com/"; //for hosting
  public temp:any;   //store the data coming from API
  public subjectname:any;
  constructor(public http: HttpClient) {
    console.log('Hello ServiceDeleteSubjectProvider Provider');
  }

  //Fetching the Subject from database service
  postData(url)
  {
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(" ")).subscribe(data=>{
        this.temp=data;
        if(data['statuscode'] == 1)
        {
          this.subjectdata = data['data'];
        }
        else
        {
          //alert("Invalid subject name");
        }
        resolve(data);       
      },error=>{
        console.log("Error",error);
      });
    });
  }

  postDelete()
  {
    //console.log(data);
    var url=this.URL+"getSubjectInfo.php";
    return this.postData(url);
  }

//Deletion of subject service starts here.
  postSubject(url2,subjectid)
  {
    return new Promise(resolve=>{
    this.http.post(url2,{'subjectid':subjectid}).subscribe(data1=>{
      //this.temp=data;
      //this.arr1=this.temp[0]['SUBJECT_NAME'];
      console.log("service return",data1);
      //console.log(this.arr1);
      if(data1['statuscode'] == 1)
      {
        //console.log("Success.....")
        //this.subjectdata = data['data'];
        //console.log(this.subjectdata[0].SUBJECT_NAME);
        //this.subName=this.temp.SUBJECT_NAME;
        //console.log(this.subName);
        //console.log(this.name1);
      }
      else
      {
        //alert("UnSuccess....");
      }
      resolve(data1);       
    },error=>{
      console.log("Data not transfered",error);
    });
  });
  }

  postSubjectId(subjectid)
  {
    console.log("getting subject id",subjectid);
    var url2=this.URL+"deleteSubject.php";
    return this.postSubject(url2,subjectid);
  }
}
