import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { ServiceDeleteTestProvider } from '../../providers/service-delete-test/service-delete-test';


@IonicPage()
@Component({
  selector: 'page-delete-test',
  templateUrl: 'delete-test.html',
})
export class DeleteTestPage {
  public classID:any;
  public subjectID:any;
  public test:any=
  {
    "Class":"",
    "Subject":"",
    "TEST_TYPE":"",
    "TEST_NAME":"",
    "DATE":""
  };


  constructor(public navCtrl: NavController,public Delete:ServiceDeleteTestProvider,public navParams: NavParams,public GU:ServiceGetClassMasterProvider) {
    this.GU.getClassFun();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeleteTestPage');
  }

  getSubject(Class)
  {
    this.classID=Class;
    //console.log(this.postId['classId']);
    this.GU.getAttSubjectFun(this.classID);    
  }
  getTest(Subject)
  {
    this.subjectID=Subject;
    this.GU.getClassTestFun(this.subjectID);

  }
  deleteTest(Class,Subject,TEST_TYPE,TEST_NAME,DATE)
  {
    this.test['Class']=Class;
    this.test['Subject']=Subject;
    this.test['TEST_TYPE']=TEST_TYPE;
    this.test['TEST_NAME']=TEST_NAME;
    this.test['DATE']=DATE;

    console.log("Class Id",Class,"Subject ID",Subject,'Test Type',TEST_TYPE,'Test Name',TEST_NAME,'Date',DATE);
    this.Delete.DeteleTestFun(this.test);
  }

}
