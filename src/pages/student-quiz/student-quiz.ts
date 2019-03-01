import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentQuiz1Page } from '../student-quiz1/student-quiz1';
import { QuizServiceProvider } from '../../providers/quiz-service/quiz-service';

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
              public service : QuizServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentQuizPage');
  }

  start()
  {
      this.service.index = 0;
      this.service.getnext();
      this.navCtrl.setRoot(StudentQuiz1Page);
  }

}
