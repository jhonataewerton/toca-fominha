import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  catchError,
  from,
  map,
  Observable,
  of,
  switchMap,
  throwError,
} from 'rxjs';
import { User } from '../model/user.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {}
  private userCollection: AngularFirestoreCollection<User> =
    this.afs.collection('users');

  signin(email: string, password: string): Observable<any> {
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  getUser(): Observable<any> {
    return this.afAuth.authState.pipe(
      switchMap((u) =>
        u ? this.userCollection.doc<User>(u.uid).valueChanges() : of(null)
      )
    );
  }

  logout() {
    this.afAuth.signOut();
  }
}
