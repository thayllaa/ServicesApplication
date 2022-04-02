import { Injectable } from '@angular/core';

interface Subjects {
  title: String;
}

@Injectable()
export class SubjectsService {
  list: Array<Subjects> = [];

  constructor() {}

  getList() {
    return this.list
  }

  add(title: string) {
    this.list.push({title});
  }

  remove(index: number) {
    this.list.slice(index, 1);
  }
}