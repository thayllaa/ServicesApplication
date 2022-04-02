import { Injectable } from '@angular/core';

interface Subject {
  title: String;
}

@Injectable()
export class SubjectsService {
  list: Array<Subject> = [
    {},
  ];

  constructor() {}

  getList() {
    return this.list
  }

  add(title: string) {
    this.list.push({title});
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}