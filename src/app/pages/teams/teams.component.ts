import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Team {
  name: string;
  players: string[];
}

@Component({
  standalone: true,
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  imports: [CommonModule]
})
export class TeamsComponent {
  teams: Team[] = [
    { name: "SMS (SuckMySocket)", players: ["Alessio", "Davide", "Emanuele", "Francesco", "Eridon", "Domenico", "Mister Gaetano"] },
    { name: "Die Hardware", players: ["Vincenzo", "Luca C", "Daniele", "Andrea T", "Marco V", "Ahmed", "Domenico S"] },
    { name: "Real Manufacturing", players: ["Raul", "Ali", "Stefano", "Adolfo", "Andrea A", "Andrea DP", "Hassan"] },
    { name: "CS🌙🌙🌙", players: ["Silvano", "Salvo", "Enea", "Rocco", "Antonio", "Davide G.", "Nicola", "Davide M.", "Matteo", "Julen"] },
    { name: "Hifuture", players: ["To be defined"] },
    { name: "Team 6", players: ["New Player 1", "New Player 2", "New Player 3", "New Player 4", "New Player 5"] }
  ];
}
