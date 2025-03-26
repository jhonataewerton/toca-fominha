import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Player } from '../model/player.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private playerssCollection: AngularFirestoreCollection<Player> =
    this.afs.collection('players');

  constructor(private afs: AngularFirestore) {}

  getPlayers(): Observable<Player[]> {
    return this.playerssCollection.valueChanges();
  }

  addPlayer(p: Player) {
    p.id = this.afs.createId();
    return this.playerssCollection.doc(p.id).set(p);
  }
  deletePlayer(p: Player) {
    return this.playerssCollection.doc(p.id).delete();
  }

  updatePlayer(p: Player) {
    return this.playerssCollection.doc(p.id).set(p);
  }

  searchByName(name: string): Observable<Player[]> {
    return this.afs
      .collection<Player>('players', (ref) =>
        ref
          .orderBy('name')
          .startAt(name)
          .endAt(name + '\uf8ff')
      )
      .valueChanges();
  }
}
