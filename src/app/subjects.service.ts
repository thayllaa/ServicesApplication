import { Injectable } from '@angular/core';

interface Subjects {
  title: String; 
  day: String; 
  hour: String;
}

@Injectable()
export class SubjectsService {
  list: Array<Subjects> = [
    {title: 'Banco de Dados II', day: 'Wednesday', hour: '9:30am-1pm'},
    {title: 'Desenvolvimento para Servidores I', day: 'Monday', hour: '9:30am-1pm'},
    {title: 'Desenvolvimento para Servidores II', day: 'Thursday', hour: '7pm-10:30pm'},
    {title: 'Desenvolvimento para Dispositivos Movéis I', day: 'Monday', hour: '7pm-10:30pm'},
    {title: 'Negócios, Marketing e Eletrônicos', day: 'Wednesday', hour: '7pm-10:30pm'},
    {title: 'Tópicos Especiais II', day: 'Friday', hour: '7pm-10:30pm'},
    {title: 'Prototipagem e Testes', day: 'Saturday', hour: '8am-11:30am'},
    {title: 'Programa de Graduação', day: 'Saturday', hour: '11:30am-1pm'},
  ];

  constructor() {}

  getList() {
    return this.list;
  }

  add(title, day, hour: string) {
    this.list.push({title, day, hour});
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}