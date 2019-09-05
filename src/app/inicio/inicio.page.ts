import { Component, OnInit } from '@angular/core';
import { EventoI } from '../models/evento.interface';
import { DbService } from '../services/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  eventos: EventoI[];

  constructor(private db: DbService, private router: Router) { }

  crear(){
    this.router.navigateByUrl('/registroEvento');
  }

  ngOnInit() {
    this.db.getEventos().subscribe(res => {
      this.eventos = res;
    })
  }

}
