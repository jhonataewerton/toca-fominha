import { Component, inject, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { Player } from '../model/player.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private _playerService = inject(PlayersService);
  private _router = inject(Router);

  cards = [
    { icon: 'fas fa-check', label: 'Lista de presença' },
    { icon: 'fas fa-user', label: 'Jogador' },
    { icon: 'fas fa-chart-line', label: 'Financeiro' },
    { icon: 'fas fa-cogs', label: 'Configurações' },
  ];
  players$!: Observable<Player[]>;

  ngOnInit(): void {
    this.players$ = this._playerService.getPlayers();
    this.players$.subscribe({ next: (p) => console.log(p) });
  }

  redirect(menu: string) {
    let navigateTo: string = '';

    switch (menu) {
      case 'Lista de presença':
        navigateTo = '';
        break;
      case 'Jogador':
        navigateTo = 'player';
        break;
      case 'Financeiro':
        navigateTo = '';
        break;
      default:
        navigateTo = '';
    }
    this._router.navigate([`${navigateTo}`]);
  }
}
