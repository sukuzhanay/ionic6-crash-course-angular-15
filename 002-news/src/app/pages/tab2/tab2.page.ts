import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // Creo una nueva propiedad, que sera un arreglo de strings 
  public categories: string[] =['business','entertainment','general','health','science','sports','technology']

  constructor() {}

  // Funcion que maneja el cambio de segmentos
  segmentChanged( category:any){
    console.log(category)
  }

  


}
