import { Component, OnInit } from '@angular/core';
import { EventoI } from '../../models/evento.interface';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  evento: EventoI = {
    nombre: '',
    descripcion: '',
    lugar: '',
    inicio: '',
    final: '',
    foto: 'https://firebasestorage.googleapis.com/v0/b/varu-1-0.appspot.com/o/boda.jpg?alt=media&token=57ca3797-642d-482e-b308-bc91e1266122'
  };

  constructor(private db: DbService) { }

  async guardarEvento(){
    this.db.addEvento(this.evento);
  }

  ngOnInit() {
  }

}
