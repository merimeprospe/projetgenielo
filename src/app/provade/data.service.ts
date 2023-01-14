import { Injectable } from '@angular/core';
import { Firestore, collectionData, docData, collection, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { EmailValidator } from '@angular/forms';
import { Data } from '@angular/router';
import { addDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';

/* ------------------------model----------------------------- */
export interface User{
  id?: string;
  email: string;
  password: string;
  username: string;
  role: string;
}
export interface Comment{
  id?: string;
  num: number;
  user: string;
  post: string;
  date: string
  message: string
}
export interface Message{
  id?: string;
  num: number;
  user: string;
  userto: string;
  date: string
  message: string
  mes:string
}
export interface Mess{
  id?: string;
  user1: string;
  user2: string;
  message: string
  mes:string
}
export interface Profil{
  id?: string;
  user: string;
  nom: string;
  prenom: string;
  DateNaiss: Date;
  lieuNaiss: string;
  adresse: string;
  NiveauScolaire: string;
  telephone: number;
  sexe: string;
  pays: string;
}

export interface Publication{
  id?: string;
  user: string;
  titre: string;
  num: number;
  Contenu: string;
  file: string;
  date: Date
}

export interface Image{
  id?: string;
  user: string;
  file: File;
}

export interface Statut{
  id?: string;
  user: string;
  contenu: string;
  file: File;
}
/* ------------------------/model----------------------------- */
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  /*-------------------------------Comment------------------------------------------*/

getComment(): Observable<Comment[]>{
  const userRef = collection(this.firestore, 'Comment')
  
  return collectionData(userRef, {idField: 'id'}) as Observable<Comment[]>;
}
getMCommentById(id: any): Observable<Comment> {
  const userDocRef = doc(this.firestore, `Comment/${id}`);
  return docData(userDocRef, {idField: 'id'}) as Observable<Comment>;
}
addComment(Message: Comment) {
  const userRef = collection(this.firestore, 'Comment');
  return addDoc(userRef, Message);
}
/*-------------------------------Mess------------------------------------------*/

getmes(): Observable<Mess[]>{
  const userRef = collection(this.firestore, 'Mess')
  
  return collectionData(userRef, {idField: 'id'}) as Observable<Mess[]>;
}
getMessById(id: any): Observable<Mess> {
  const userDocRef = doc(this.firestore, `Mess/${id}`);
  return docData(userDocRef, {idField: 'id'}) as Observable<Mess>;
}
addMess(Message: Mess) {
  const userRef = collection(this.firestore, 'Mess');
  
  return addDoc(userRef, Message);
}
/*-------------------------------Message------------------------------------------*/

getmessage(): Observable<Message[]>{
  const userRef = collection(this.firestore, 'Message')
  return collectionData(userRef, {idField: 'id'}) as Observable<Message[]>;
}

getMessageById(id: any): Observable<Message> {
  const userDocRef = doc(this.firestore, `Message/${id}`);
  return docData(userDocRef, {idField: 'id'}) as Observable<Message>;
}

addMessage(Message: Message) {
  const userRef = collection(this.firestore, 'Message');
  return addDoc(userRef, Message);
}

deleteMessage(Message: Message) {
  const userDocRef = doc(this.firestore, `Message/${Message.id}`);
  return deleteDoc(userDocRef);
}

updateMessage(Message: Message) {
  const userDocRef = doc(this.firestore, `Message/${Message.id}`);
  return updateDoc(userDocRef, { Message: Message.message, user: Message.user});
}


/*-------------------------------image------------------------------------------*/

  getimage(): Observable<Image[]>{
    const userRef = collection(this.firestore, 'Image')
    return collectionData(userRef, {idField: 'id'}) as Observable<Image[]>;
  }

  getImageById(id: any): Observable<Image> {
    const userDocRef = doc(this.firestore, `Image/${id}`);
    return docData(userDocRef, {idField: 'id'}) as Observable<Image>;
  }
  
  addImage(Image: Image) {
    const userRef = collection(this.firestore, 'Image');
    return addDoc(userRef, Image);
  }

  deleteImage(Image: Image) {
    const userDocRef = doc(this.firestore, `Image/${Image.id}`);
    return deleteDoc(userDocRef);
  }

  updateImage(Image: Image) {
    const userDocRef = doc(this.firestore, `Image/${Image.id}`);
    return updateDoc(userDocRef, { file: Image.file, user: Image.user});
  }

/*-----------------------------User------------------------------------------*/

  getuser(): Observable<User[]>{
    const userRef = collection(this.firestore, 'Users')
    return collectionData(userRef, {idField: 'id'}) as Observable<User[]>;
  }

  getUserById(id: any): Observable<User> {
    const userDocRef = doc(this.firestore, `Users/${id}`);
    return docData(userDocRef, {idField: 'id'}) as Observable<User>;
  }
  
  addUser(user: User) {
    const userRef = collection(this.firestore, 'Users');
    return addDoc(userRef, user);
  }

  deleteUser(user: User) {
    const userDocRef = doc(this.firestore, `Users/${user.id}`);
    return deleteDoc(userDocRef);
  }

  updateUser(user: User) {
    const userDocRef = doc(this.firestore, `Users/${user.id}`);
    return updateDoc(userDocRef, { email: user.email, username: user.username, password: user.password});
  }

/*-----------------------------Profil------------------------------------------*/

  getProfils(): Observable<Profil[]>{
    const ProfilRef = collection(this.firestore, 'Profil')
    return collectionData(ProfilRef, {idField: 'id'}) as Observable<Profil[]>;
  }

  getProfilById(id: any): Observable<Profil> {
    const ProfilDocRef = doc(this.firestore, `Profil/${id}`);
    return docData(ProfilDocRef, {idField: 'id'}) as Observable<Profil>;
  }
  
  addRole(profil: Profil) {
    const ProfilRef = collection(this.firestore, 'Profil');
    return addDoc(ProfilRef, profil);
  }

  deleteProfil(profil: Profil) {
    const ProfilDocRef = doc(this.firestore, `Profil/${profil.id}`);
    return deleteDoc(ProfilDocRef);
  }

  updateRole(Profil: Profil) {
    const userDocRef = doc(this.firestore, `Profil/${Profil.id}`);
    return updateDoc(userDocRef, { user: Profil.user, name: Profil.prenom,prenom: Profil.prenom, DateNaiss: Profil.DateNaiss,
      lieuNaiss: Profil.lieuNaiss,
      adresse: Profil.adresse,
      NiveauScolaire: Profil.NiveauScolaire,
      telephone: Profil.telephone,
      sexe: Profil.sexe,
      pays: Profil.pays});
  }

/*----------------------------------Publication-------------------------------------*/

  getPublication(): Observable<Publication[]>{
    const userRef = collection(this.firestore, 'Publication')
    return collectionData(userRef, {idField: 'id'}) as Observable<Publication[]>;
  }

  getPublicationById(id: any): Observable<User> {
    const userDocRef = doc(this.firestore, `Publication/${id}`);
    return docData(userDocRef, {idField: 'id'}) as Observable<User>;
  }

  addPublication(p: Publication) {
    const userRef = collection(this.firestore, 'Publication');
    return addDoc(userRef, p);
  }

  deletePublication(p: Publication) {
    const userDocRef = doc(this.firestore, `Publication/${p.id}`);
    return deleteDoc(userDocRef);
  }

  updatePublication(p: Publication) {
    const userDocRef = doc(this.firestore, `Publication/${p.id}`);
    return updateDoc(userDocRef, { user: p.user, titre: p.titre, contenu: p.Contenu, file: p.file});
  }
/*----------------------------------Statut-------------------------------------*/

  getStatut(): Observable<Statut[]>{
    const StatutRef = collection(this.firestore, 'Statut')
    return collectionData(StatutRef, {idField: 'id'}) as Observable<Statut[]>;
  }

  getStatutById(id: any): Observable<Statut> {
    const StatutDocRef = doc(this.firestore, `Statut/${id}`);
    return docData(StatutDocRef, {idField: 'id'}) as Observable<Statut>;
  }

  addStatut(s: Statut) {
    const StatutRef = collection(this.firestore, 'Statut');
    return addDoc(StatutRef, s);
  }

  deleteStatut(s: Statut) {
    const userDocRef = doc(this.firestore, `Statut/${s.id}`);
    return deleteDoc(userDocRef);
  }

  updateStatut(s: Statut) {
    const StatutDocRef = doc(this.firestore, `Statut/${s.id}`);
    return updateDoc(StatutDocRef, { user: s.user, comtenu: s.contenu, file: s.file});
  }
}
