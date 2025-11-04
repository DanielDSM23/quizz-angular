import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { HomeComponent } from './home/home.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'quizz', component: QuestionsComponent},
  {path: 'score/:score', component: ScoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
