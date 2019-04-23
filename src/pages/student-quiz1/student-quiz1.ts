import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuizServiceProvider } from '../../providers/quiz-service/quiz-service';

/**
 * Generated class for the StudentQuiz1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-quiz1',
  templateUrl: 'student-quiz1.html',
})
export class StudentQuiz1Page {

  public useransw; // user answer
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public service: QuizServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentQuiz1Page');
  }
  // load the next question
   next()
   {
       
    console.log(" response :\n",this.useransw);
    console.log(this.service.answer);
    if(this.useransw)
    {
      if(this.useransw == this.service.answer)
      {
        this.service.score +=1;
      } 
      console.log("score :\n",this.service.score);
        this.service.index +=1;
        console.log(this.service.index);
         if(this.service.index < this.service.recdata.length)
         {
          this.service.getquestion(this.service.index);
          this.navCtrl.setRoot(StudentQuiz1Page);
         
         }
         else
         {
          this.navCtrl.setRoot(StudentQuiz1Page);
         }
    }
    else
    {
       alert("Please select an option");
    }  
   }
}
