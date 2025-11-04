import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  public questions = [
  {
    text: "What is the capital of France?",
    reponses: [
      { text: "Berlin", isCorrect: false, isSelected: false },
      { text: "Madrid", isCorrect: false, isSelected: false },
      { text: "Paris", isCorrect: true, isSelected: false },
      { text: "Rome", isCorrect: false, isSelected: false }
    ]

  },
  {
    text: "Comment convertir des degrés Celsius en Fahrenheit ?",
    reponses: [
      {text:"Multiplier par 2", isCorrect: false, isSelected: false},
      {text:"Multiplier par 9/5 et ajouter 32", isCorrect: true, isSelected: false},
      {text:"Diviser par 9/5", isCorrect: false, isSelected: false},
      {text:"Soustraire 32", isCorrect: false, isSelected: false}
    ]

  },
  {
    text: "Quels sont les bienfaits d'une activité physique régulière ?",
    reponses: [
      {text:"Amélioration de la santé cardiovasculaire", isCorrect: true, isSelected: false},
      {text:"Réduction du stress", isCorrect: true, isSelected: false},
      {text:"Fatigue chronique", isCorrect: false, isSelected: false},
      {text:"Renforcement musculaire", isCorrect: true, isSelected: false}
    ]
  },
  {
    text: "Comment sauvegarder un document important ?",
    reponses: [
      {text:"Ne rien faire, il restera toujours disponible", isCorrect: false, isSelected: false},
      {text:"Enregistrer sur un disque dur externe", isCorrect: true, isSelected: false},
      {text:"Utiliser un service cloud", isCorrect: true, isSelected: false},
      {text:"Supprimer le fichier", isCorrect: false, isSelected: false}
    ]
  },

  ];
  public isFilled: boolean = false;
  public score: number = 0;
  public selectReponse(question:number, reponse:number):void {
    // this.questions[question].reponses[reponse].isSelected = true;
    this.questions[question].reponses.forEach((element, index) => {
      element.isSelected = reponse === index;
      console.log(reponse === index);
    });
    console.log(this.questions[question]);
  }
  public validateForm():void {
    this.isFilled = true;
    this.calcScore();
  }

  public calcScore():void {
    this.questions.forEach(element => {
      element.reponses.forEach(resp => {
        if(resp.isSelected && resp.isCorrect) {
          this.score += 1;
        }
      });
    });
  }

  public getUsers():Observable<any> {
     return this.http.get('http://localhost:3000/locations');
  }
}
