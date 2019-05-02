import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentQuiz1Page } from '../student-quiz1/student-quiz1';
import { QuizServiceProvider } from '../../providers/quiz-service/quiz-service';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';
import { StudentdashboardPage } from '../studentdashboard/studentdashboard';

/**
 * Generated class for the StudentQuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-quiz',
  templateUrl: 'student-quiz.html',
})
export class StudentQuizPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public service : QuizServiceProvider,public log : ServiceLoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentQuizPage');
  }

  start()
  {
      this.service.index = 0;
      this.service.getnext(this.log.recdata.data[0].REG_NO).then(data=>{

            if(data["statuscode"] == 1)
            {
              this.navCtrl.setRoot(StudentQuiz1Page);
            }
            else
            {
                alert(" Sorry the interface is closed because You have already attempted the quiz");
                this.navCtrl.setRoot(StudentdashboardPage);
            }
      });
      
  }

}
