import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule, // obligatorio para poder usar ion-component
    ArticleComponent, ArticlesComponent  // creados para reutilizar
  ],
  exports:[
    ArticlesComponent,
  ]
})
export class ComponentsModule { }
