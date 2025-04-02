import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) { }

  async register(email: string, password: string, userName: string): Promise<any> {
    try {
      const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
      if (userCredential.user) {
        await this.afs.collection('Users').doc(userCredential.user.uid).set({
          uid: userCredential.user.uid,
          email,
          userName
        });
      }
      return userCredential;
    } catch (error) {
      console.error('Error en el registro:', error);
      throw error;
    }
  }

  async login(email: string, password: string): Promise<any> {
    try {
      return await this.auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      throw error;
    }
  }

  getUser(): Observable<any> {
    return this.auth.authState;
  }


  getUserData(uid: string): Observable<User | undefined> {
    return this.afs.collection('Users').doc<User>(uid).valueChanges();
  }

  async logout(): Promise<void> {
    try {
      await this.auth.signOut();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      throw error;
    }
  }
}

