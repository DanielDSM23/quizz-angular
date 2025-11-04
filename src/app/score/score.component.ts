import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-score',
  standalone: false,
  templateUrl: './score.component.html',
  styleUrl: './score.component.scss'
})
export class ScoreComponent implements OnInit {
  score: number = 0;
  ngOnInit(): void {
    this.score = this.route.snapshot.params['score'];
  }
  constructor(private route: ActivatedRoute) {}

}
