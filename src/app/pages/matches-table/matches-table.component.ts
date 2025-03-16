import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Team {
  name: string;
  score: number;
}

@Component({
  selector: 'app-matches-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.scss']
})
export class MatchesTableComponent {
  // Example data for team rankings
  rankedTeams: Team[] = [
    { name: 'SMS (SuckMySocket)', score: 15 },
    { name: 'Die Hardware', score: 12 },
    { name: 'Real Manufacturing', score: 10 },
    { name: 'CS🌙🌙🌙', score: 8 },
    { name: 'Hifuture', score: 5 },
    { name: 'Team 6', score: 3 }
  ];

  constructor() {
    // Sort teams by score in descending order
    this.rankedTeams.sort((a, b) => b.score - a.score);
  }
}