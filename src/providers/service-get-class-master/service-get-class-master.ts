import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ServiceGetClassMasterProvider {
  public URL=this.one.URL;
  
  public classData:any;
  public subjectData:any;
  public studentData:any; // for getting student's infos
  public sessionData:any;
  public termData:any;
  public userData:any;
  public eventData:any;
  public attsubject:any;
  public testData:any;
  public AttStatus:any;
  public SDC:any;///to fetch student data according to given class/////
  public feedbackData:any;
  public timeslot:any;
  public timeview:any;
  public SubjectOnTimeTable:any;
  public CSData:any;
  public SAData:any;//it will have array of attendance of a particular student used un View Attendance Stduent Module
  //These variable for attendance purpose
  public class:any;
  public subject:any;
  public time:any;
  public date:any;
  public slot:any;
  public attendence:any=[];
  public UMarks:any=[];
  public term:any;
  public rows:any;
//end
 public ClassTest:any;
 public crSub:any;//to get current attendance of a particular subject 
 public sectionData:any;
  
 public per:number;
 public UploadM:any;


  constructor(public http: HttpClient,public one:ServiceLoginProvider,public toastController:ToastController ) {
    
  }
//get distinct sections for add user
  getSectionFun(id)
  {
    var url=this.URL+"getSection.php";
    return this.getSection(url,id);
  }

  getSection(url,id)
  {
    //console.log("Class is which we passing to api",postId);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(id)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.sectionData=data['data'];
        //console.log("Row data",this.attsubject);
        console.log("Distinct Section",this.sectionData);
        //return 1;
      }
      else
      {
        // this.SubjectOnTimeTable=[];
        
        console.log("no data fetched");
        //return 0;
      }        
       resolve(data);
    },error=>{
      console.log("Error",error);
    });
  });

  }
   //GET TEST FROM CLASS_TEST_TABLE
  getClassTestFun(subjectID)
  {
    var url=this.URL+"getClassTest.php";
    return this.getClassTest(url,subjectID);
  }

  getClassTest(url,subjectID)
  {
    //console.log("Class is which we passing to api",postId);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(subjectID)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.ClassTest=data['data'];
        //console.log("Row data",this.attsubject);
        console.log("Class Test",this.ClassTest);
        //return 1;
      }
      else
      {
        this.SubjectOnTimeTable=[];
        alert("no data fetched");
        //return 0;
      }        
       resolve(data);
    },error=>{
      console.log("Error",error);
    });
  });

  }
 //GET DATA FROM CLASS_MASTER_TABLE IN DATABASE----------------------------------------------------->
  getClassFun()  
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
          console.log("classes to be display",this.classData);


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
  // GET Students from data base
  getStudentFun()
  {
    var url=this.URL+"getUser.php";
    return this.getStudent(url);

  }
  getStudent(url)
  {
    //console.log("service call",sessionData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify("admin")).subscribe(data=>{
        if(data['statuscode']==1)
        {
          
          this.studentData=data['data'];
          console.log("users",this.studentData);
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


  // End of get Students from data base
  // ------------------------------------------------------------------------------------
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
          this.sessionData=[];
          alert("No Session Available To Delete");
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
        console.log("Student of class",this.userData);
        


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
        const toast = this.toastController.create({
          message: 'No events today',
          position: 'top',
          duration:2000,
        });
        toast.present();
      }        
       resolve(data);
    },error=>{
      console.log("Error",error);
    });
  });
}

// GET THE INFO FROM USER TABLE---------------------------------------------------------------->

//For Add TimeTable 
getAttOnTimeSubject(postId)
{
  console.log("POST ID :",postId);
  var url=this.URL+"getAttOnTimeSubject.php";
  return this.getSubjectOnTimeTable(url,postId);
}
getSubjectOnTimeTable(url,postId)
{
  console.log("Class is which we passing to api",postId);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(postId)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.SubjectOnTimeTable=data['data'];
        //console.log("Row data",this.attsubject);
        console.log("Subjects",this.SubjectOnTimeTable);
        //return 1;
      }
      else
      {
        this.SubjectOnTimeTable=[];
        alert("no data fetched");
        //return 0;
      }        
       resolve(data);
    },error=>{
      console.log("Error",error);
    });
  });

}
//End HERE



getAttSubjectFun(postId)
{

  console.log("POST ID :",postId);
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

// GET TEST ID FOR A SUBJECT OF SOME CLASS//////////////////////////////////////////////////////////////////////////////////////////////////////////
getTestFun(CTD)
{
  var url=this.URL+"getTest.php";
  return this.getTest(url,CTD);
}

getTest(url,CTD)
{
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(CTD)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.testData=data['data'];
        //console.log("Row data",this.attsubject);
        console.log("test data",this.testData);
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

//GET STUDENTS FOR ATTENDENCE//////////////////////////////////////////////////////////////////
getSDCFun(CLASS)
{
  var url=this.URL+"getAttStudent.php";
  return this.getSDC(CLASS,url);

}
getSDC(CLASS,url)
{
  //console.log("service call",sessionData);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(CLASS)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        // alert("Term Added");
        this.SDC=data['data'];
        this.rows=data['row'];

        for (var i in this.SDC)
        {
          this.attendence[i]=this.SDC[i];
          this.attendence[i].status ="P";
          this.attendence[i].class=this.class;
          this.attendence[i].subject=this.subject;
          this.attendence[i].time=this.time;
          this.attendence[i].date=this.date;
          this.attendence[i].slot=this.slot;
          this.attendence[i].term=this.term;
        }
        console.log("Student of class",this.SDC);
        console.log("temp Attendance sheet",this.attendence);
        console.log("no of rows",this.rows);

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
//GET SPECIFIC TERM FOR ATTENDENCE ONLY
getAttTermfun(t)
{
  var url=this.URL+"getAttTerm.php";
  return this.getAttTerm(url,t);

}
getAttTerm(url,t)
{
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(t)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.term=data['data'];
        console.log("Term for Att",this.term);
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


// GET FEEDBACK INFO FROM FEEDBACK TABLE IN DATABASE---------------------------------------------------------------->
getFeedbackFun()
{
  var url=this.URL+"getFeedback.php";
  return this.getFeedback(url);

}
getFeedback(url)
{
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(" ")).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.feedbackData=data['data'];
        //console.log("FEEDBACK",this.feedbackData);
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

//get Time Table for Current Class

getCurrentTimeTable(Data)
{
  var url=this.URL+"getCurrentTimeTable.php";
  return this.FetchViewTimeTable(url,Data);
}

FetchViewTimeTable(url,Class)
{
  console.log("Get Time Table of Class-->",Class);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(Class)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.timeview=data['data'];
        //console.log("Row data",this.attsubject);
        console.log("TimeTable for Current Class",this.timeview);
        //return 1;
      }
      else
      {
        this.timeview=[];
        alert("No Time Table");
        //return 0;
      }        
       resolve(data);
    },error=>{
      console.log("Error",error);
    });
  });
}

//FOR ADDING TIME TABLE
getSlot(Data)
{
  var url=this.URL+"getTimeSlot.php";
  return this.getTIMESLOT(url,Data);
}

getTIMESLOT(url,Data)
{
  console.log("GET TIME SLOT DATA : ",Data);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(Data)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.timeslot=data['data'];
        console.log("Subject TIME SLOT",this.timeslot);
        //return 1;
      }
      else
      {
        alert("NO TIME SLOT IS FREE");
        this.timeslot=[];

        //return 0;
      }        
       resolve(data);
    },error=>{
      console.log("Error",error);
    });
  });
}

// fetch data of students according to class and session---------------------------------------------------------------->

getCSFun(CS)
{
  var url=this.URL+"viewStudents.php";
  return this.getCS(url,CS);
}

getCS(url,CS)
{
  console.log("View Students of Class: ",CS);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(CS)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.CSData=data['data'];
        console.log("Students",this.CSData);
        //return 1;
      }
      else
      {
        alert("No Student found");
        //return 0;
      }        
       resolve(data);
    },error=>{
      console.log("Error",error);
    });
  });
}

// TO GET ATTENDENCE OF PARTICULAR STUDENT///////////////////////////////////////////////////////////////////////////
getSAFun(RG)
{
  var url=this.URL+"getStudentAttendance.php";
  return this.getSA(url,RG);
}

getSA(url,RG)
{
  console.log("View your Attendance: ",RG);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(RG)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.SAData=data['data'];
        console.log("Attendance",this.SAData);
        
      }
      else
      {
        this.SAData=[];
        alert("No data found");
        //return 0;
      }        
       resolve(data);
    },error=>{
      console.log("Error",error);
    });
  });
}


getAttStatusFun(UP)
{
  var url=this.URL+"getAttendanceStatus.php";
  return this.getAttStatus(url,UP);
}
getAttStatus(url,UP)
{
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(UP)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.AttStatus=data['data'];
        console.log("STATUS",this.AttStatus);
        
      }
      else
      {
        alert("No data found");
        //return 0;
      }        
       resolve(data);
    },error=>{
      console.log("Error",error);
    });
  });
}


// Get attendance for a paricular subject ---------------------------------------------------------------->
SubjectAttFun(data)
{
  var url=this.URL+"currentAtt.php";
  return this.SubjectAtt(url,data);

}
SubjectAtt(url,data)
{
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(data)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.crSub=data['data'];
        console.log("Attendance for this subject is:",this.crSub);
      }
      else
      {
        alert("Attendance not found");
      }        
      
       resolve(data);

    },error=>{
      console.log("Error",error);
    });
  });

}

//get total attendance of a student
perAttFun(id)
{
  var url=this.URL+"calculateAttendance.php";
  return this.perAtt(url,id);

}
perAtt(url,id)
{
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(id)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.per=data['data'];
        console.log("Attendance percentage:",this.per);
      }
       resolve(data);

    },error=>{
      console.log("Error",error);
    });
  });

}





//TO UPDATE THE MARKS ---------------------------------------------------------------->

getUploadMarksFun(uploadData)
{
  var url=this.URL+"getUploadMarks.php";
  return this.getUploadMarks(uploadData,url);

}
getUploadMarks(uploadData,url)
{
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(uploadData)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.UploadM=data['data'];
        
        console.log("Student marks are",this.UploadM);
        

      }
      else
      {
        alert("Marks are not uploaded yet");
      }        
      
       resolve(data);

    },error=>{
      console.log("Error",error);
    });
  });

}


}

// THIS IS THE END OF FILE