import { Injectable, EventEmitter } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';

@Injectable()
export class ContatosDataBaseService {

  meuContatos: ContatoModel [] = [];
  enviarContato = new EventEmitter;

  constructor() { }

  setContato(novoCotato: ContatoModel): void
  {
    this.meuContatos.push(novoCotato);
    this.enviarContato.emit(this.meuContatos);
  }

  getContato(id: number): ContatoModel
  {
    return this.meuContatos[id];
  }
}
