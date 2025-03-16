import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Result {
  date: string;
  match: string;
  score: string;
}

@Component({
  standalone: true,
  selector: 'app-match-results',
  templateUrl: './match-results.component.html',
  styleUrls: ['./match-results.component.scss'],
  imports: [CommonModule]
})
export class MatchResultsComponent {
  results: Result[] = [
    { date: "March 18, 2025", match: "SMS vs Die Hardware", score: "2-1" },
    { date: "March 21, 2025", match: "Real Manufacturing vs CSS", score: "3-3" }
  ];
}
