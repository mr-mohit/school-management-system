import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceGetClassMasterProvider {
  public URL="http://localhost/schoolapi/"; //for local use
  //public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/"; //for hosting use
  // public URL="https://direct-school.000webhostapp.com/"; //for hosting
  public classData:any;
  public subjectData:any;
  public sessionData:any;
  public termData:any;
  public userData:any;
  public eventData:any;
  public attsubject:any;


  constructor(public http: HttpClient) {
    
  }


  getClassFun() //GET DATA FROM CLASS_MASTER_TABLE IN DATABASE----------------------------------------------------->
  {
    var url=this.URL+"getClass_Master.php";
    return this.getClass(url);

  }
  getClass(url)
  {
    //console.log("service call",sessionData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(" ")).subscribe(data=>{
        if(data['statuscode']==1)
        {
          // alert("Term Added");
          this.classData=data['data'];
          console.log("classes",this.classData);


        }
        else
        {
          alert("No data Found");
        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

  // GET SUBJECTS FROM SUBJECT TABLE IN DATABASE---------------------------------------------------------------->
  getSubjectFun()
  {
    var url=this.URL+"getSubjects.php";
    return this.getSubject(url);

  }
  getSubject(url)
  {
    //console.log("service call",sessionData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(" ")).subscribe(data=>{
        if(data['statuscode']==1)
        {
          // alert("Term Added");
          this.subjectData=data['data'];
          console.log("subjects",this.subjectData);
        }
        else
        {
          alert("no data fetched");
        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

  // GET DATA FROM SESSION TABLE IN DATABASE---------------------------------------------------------------->
  getSessionFun()
  {
    var url=this.URL+"getSession.php";
    return this.getSession(url);

  }
  getSession(url)
  {
    //console.log("service call",sessionData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(" ")).subscribe(data=>{
        if(data['statuscode']==1)
        {
          // alert("Term Added");
          this.sessionData=data['data'];
          console.log("Session",this.sessionData);


        }
        else
        {
          alert("no data fetched");
        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

  // GET THE INFO FROM TERM TABLE---------------------------------------------------------------->
  getTermFun()
  {
    var url=this.URL+"getTerm.php";
    return this.getTerm(url);

  }
  getTerm(url)
  {
    //console.log("service call",sessionData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(" ")).subscribe(data=>{
        if(data['statuscode']==1)
        {
          // alert("Term Added");
          this.termData=data['data'];
          console.log("Terms",this.termData);
        }
        else
        {
          alert("no data fetched");
        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

// GET THE INFO FROM USER TABLE---------------------------------------------------------------->
getUserFun()
{
  var url=this.URL+"getUser.php";
  return this.getUser(url);

}
getUser(url)
{
  //console.log("service call",sessionData);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(" ")).subscribe(data=>{
      if(data['statuscode']==1)
      {
        // alert("Term Added");
        this.userData=data['data'];
        console.log("User",this.userData);


      }
      else
      {
        alert("no data fetched");
      }        
      
       resolve(data);

    },error=>{
      console.log("Error",error);
    });
  });

}



// GET THE INFO FROM USER TABLE---------------------------------------------------------------->
getEventFun(CalendarData)
{
  var url=this.URL+"getEvent.php";
  return this.getEvent(url,CalendarData);

}
getEvent(url,CalendarData)
{
  //console.log("service call",sessionData);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(CalendarData)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        // alert("Term Added");
        this.eventData=data['data'][0];
        console.log("SchoolEvent",this.eventData);
        //return 1;
      }
      else
      {
        alert("no data fetched");
        //return 0;
      }        
       resolve(data);
    },error=>{
      console.log("Error",error);
    });
  });
}

// GET THE INFO FROM USER TABLE---------------------------------------------------------------->
getAttSubjectFun(postId)
{

  var url=this.URL+"getAttSubject.php";
  return this.getAttSubject(url,postId);

}
getAttSubject(url,postId)
{
  console.log("Class is which we passing to api",postId);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(postId)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.attsubject=data['data'];
        //console.log("Row data",this.attsubject);
        console.log("Subjects",this.attsubject);
        //return 1;
      }
      else
      {
        alert("no data fetched");
        //return 0;
      }        
       resolve(data);
    },error=>{
      console.log("Error",error);
    });
  });
}


}
/////////////////////////////