import { Injectable } from '@angular/core';

interface Subjects {
  title: String;
}

@Injectable()
export class SubjectsService {
  list: Array<Subjects> = [
    {title: 'Banco de Dados II'},
    {title: 'Desenvolvimento para Servidores I'},
    {title: 'Desenvolvimento para Servidores II'},
    {title: 'Desenvolvimento para Dispositivos Movéis I'},
    {title: 'Negócios, Marketing e Eletrônicos'},
    {title: 'Tópicos Especiais II'},
    {title: 'Prototipagem e Testes'},
    {title: 'Programa de Graduação'},
  ];

  constructor() {}

  getList() {
    return this.list;
  }

  add(title, day, hour: string) {
    this.list.push({title});
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}