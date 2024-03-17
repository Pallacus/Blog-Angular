import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  //  Repasar: Hay que exportar, inyectar, ...

  arrPosts: Post[] = [
    // importar posts de meloheinventado y Pallacus
    {
      titulo: 'Chiquito Ipsum',
      texto:
        'La caidita pupita ese que llega apetecan torpedo me cago en tus muelas ese pedazo de quietooor me cago en tus muelas está la cosa muy malar. Me cago en tus muelas de la pradera te voy a borrar el cerito la caidita llevame al sircoo ese pedazo de mamaar pecador. Ese hombree sexuarl benemeritaar quietooor a peich a peich a peich sexuarl. Te va a hasé pupitaa se calle ustée llevame al sircoo ese pedazo de diodeno de la pradera pecador torpedo a wan. Pupita se calle ustée caballo blanco caballo negroorl diodenoo por la gloria de mi madre fistro por la gloria de mi madre. Apetecan va usté muy cargadoo diodeno al ataquerl qué dise usteer diodeno amatomaa pupita papaar papaar torpedo. Por la gloria de mi madre quietooor diodenoo la caidita diodenoo a peich fistro no te digo trigo por no llamarte Rodrigor a peich llevame al sircoo diodenoo. ',
      autor: 'Fisto Duodenal',
      imagen:
        'https://unaracnidounacamiseta.com/wp-content/uploads/2014/06/chiquitoipsum1.jpg',
      fecha: '12/03/2024', //averiguar como guradar la fecha con formato DD/MM/AAAA
      categoria: 'BuenRollo',
    },
  ];

  /**Recibe un objeto tipo Post y lo añade al arraiy de posts
   *@param {Post} nuevoPost: Nuevo post, objeto
   */
  createPost(nuevoPost: Post) {
    this.arrPosts.push(nuevoPost);
    // Ver posts, ver post, u otra opción
console.log(this.arrPosts);
  }

  /**Retorna el array de posts
   *
   */
  getAll() {
    return this.arrPosts;
  }

  /**Retorna un array con los posts de la categoria recibida
   *@param {string} category: Categoria objetivo del filtrado.
   */
  getByCategory(category: string) {
    return this.arrPosts.filter((post) => post.categoria === category);
  }

  /**Devuelve un array de las categorias 
  */
  getCategories() {
    // return [...new Set(SERIES.map((serie) => serie.canal))];
    return [...new Set(this.arrPosts.map((post) => post.categoria))]
  }

  constructor() {}
}
