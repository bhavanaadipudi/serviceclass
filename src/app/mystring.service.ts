import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MystringService {

  constructor() { }
       heros=[
        {name:'spiderman',weapon:'spidersilk'},
        {name:'thor',weapon:'hammer'},
        {name:'ironman',weapon:'armour'},
        {name:'superman',weapon:'cryptonile'}
       ]
  public getHeros(){
    return this.heros;
  }
}
