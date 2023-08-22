import { Component } from '@angular/core';
import { MystringService } from './mystring.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  showheros = true;
  clrnm='yellow';
  public color = "blue";
  AddStyle()
    {
        return{
          'font-size.px':25, 
          'font-style':'italic', 
          'color':'blue'
        }
    }
    AddClass()
    {
      return{
        'btn-bold':true,
        'btn-italic':true,
        'btn-green':true
      }
    }
  

  constructor(public herosvc:MystringService){    //DI
          
  }
  
}
