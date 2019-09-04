import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventoI } from '../models/evento.interface';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private eventosColeccion: AngularFirestoreCollection<EventoI>;
  private eventos: Observable<EventoI[]>;

  constructor(db: AngularFirestore) {
    this.eventosColeccion = db.collection<EventoI>('evento');
    this.eventos = this.eventosColeccion.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));
  }

  getEventos(){
    return this.eventos;
  }

  getEvento(id:string){
    this.eventosColeccion.doc<EventoI>(id).valueChanges();
  }
}
