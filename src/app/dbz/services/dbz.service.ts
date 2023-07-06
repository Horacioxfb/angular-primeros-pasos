import { Injectable } from '@angular/core';
import {v4 as uuid} from "uuid";

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() {}

  public characters: Character[]= [{
    id: uuid(),
    name: 'Krillin',
    power: 1000,
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500,
},{
  id: uuid(),
  name: 'Vegueta',
  power: 7500,
}];

addCharacter (character:Character):void {
  const newCharater: Character = {...character,id:uuid()};
  this.characters.push(newCharater);
}

  // onDeleteCharacter (index: number) {
  // this.character.splice(index, 1);
  deleteCharacterById (id: string) {
    this.characters = this.characters.filter(character =>character.id !== id )
}
}
