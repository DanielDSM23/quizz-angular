import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { QuestionsService } from '../shared/services/questions.service';

@Component({
  selector: 'app-questions',
  standalone: false,
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  constructor(private questionsService: QuestionsService) { }

  questions = this.questionsService.questions;
  isFilled = this.questionsService.isFilled;
  score = this.questionsService.score;

  selectReponse(question:number, reponse:number):void {
    this.questionsService.selectReponse(question, reponse);
  }

  validateForm():void {
    this.questionsService.validateForm();
    this.score = this.questionsService.score;
    // this.router.navigate(['/score', this.score]);
  }

  calcScore():void {
    this.questionsService.calcScore();
  }
}
