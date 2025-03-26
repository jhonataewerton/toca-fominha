import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { Player } from '../model/player.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent implements OnInit {
  players$!: Observable<Player[]>;

  constructor(private playerService: PlayersService) {}

  ngOnInit(): void {
    this.players$ = this.playerService.getPlayers();
    this.players$.subscribe({ next: (p) => console.log(p) });
  }
}
