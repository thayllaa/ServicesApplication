import { Injectable } from '@angular/core';

interface Subjects {
  title: String;
}

@Injectable()
export class SubjectsService {
  list: Array<Subjects> = [];

  constructor() {}

}