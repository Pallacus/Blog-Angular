import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  arrPosts: Post[] = [
    // importar posts de meloheinventado y Pallacus
    {
      titulo: 'Chiquito Ipsum',
      texto:
        'La caidita pupita ese que llega apetecan torpedo me cago en tus muelas ese pedazo de quietooor me cago en tus muelas está la cosa muy malar. Me cago en tus muelas de la pradera te voy a borrar el cerito la caidita llevame al sircoo ese pedazo de mamaar pecador. Ese hombree sexuarl benemeritaar quietooor a peich a peich a peich sexuarl. Te va a hasé pupitaa se calle ustée llevame al sircoo ese pedazo de diodeno de la pradera pecador torpedo a wan. Pupita se calle ustée caballo blanco caballo negroorl diodenoo por la gloria de mi madre fistro por la gloria de mi madre. Apetecan va usté muy cargadoo diodeno al ataquerl qué dise usteer diodeno amatomaa pupita papaar papaar torpedo. Por la gloria de mi madre quietooor diodenoo la caidita diodenoo a peich fistro no te digo trigo por no llamarte Rodrigor a peich llevame al sircoo diodenoo. ',
      autor: 'Fisto Duodenal',
      imagen:
        'https://unaracnidounacamiseta.com/wp-content/uploads/2014/06/chiquitoipsum1.jpg',
      fecha: new Date('2024-03-9'), //averiguar como guradar la fecha con formato DD/MM/AAAA
      categoria: 'web',
    },

    {
      titulo: 'Web, web 2.0 y web 3.0 ',
      texto:
        'Hoy me gustaría hablar del concepto web 2.0 y 3.0. No se trata de diferentes versiones, si no mas bien de un convencionalismo para clasificar las páginas web según su interacción con el público.   Las primeras páginas web eran simples escaparates donde dar a conocer una empresa y su negocio. Aunque su diseño fuera sencillo, austero, recargado u original, las primeras web solo daban información en una dirección, la empresa hacia el público.   Con el tiempo las páginas web se han ido abriendo, permitiendo al público dejar comentarios e interactuar, en mayor o menor nivel con ellas. Así nacieron las web 2.0 y las redes sociales.   Finalmente estamos en un momento en que mucha gente usa teléfonos inteligentes y es aquí donde una web se la juega. Una web 3.0 es aquella que está plenamente adaptada para ser vista en un terminal móvil: Los contenidos se adaptan al tamaño de la pantalla, son fáciles de navegar y tienen botones adecuados a las pantallas táctiles. Por último es de esperar que desde la versión móvil de una web podamos usar todas las herramientas y características que también están disponibles en la versión para PC de sobremesa.   Y es precisamente hacia aquí, en adaptar los contenidos a los dispositivos móviles, donde la mayoría de empresas están dirigiendo sus esfuerzos. Ya que el diseño de una web puede hacer ganar o perder millones de usuarios y visitantes.',
      autor: 'Pallacus Sapiens',
      imagen: null,
      fecha: new Date(
        'Tue Mar 19 2024 09:58:42 GMT+0100 (Hora estàndard del Centre d’Europa)'
      ),
      categoria: 'web',
    },
    {
      titulo: 'Segway polo !',
      texto:
        '¿Qué es el segway polo? Pues como su nombre indica, se trata de una versión del tradicional juego de polo, pero jugado usando segway.   El segway polo es muy similar al polo a caballo, salvo que en lugar de jugar a caballo, cada jugador monta un Segway PT en el campo. Las normas se han adaptado del polo en bicicleta y el polo a caballo. Dos equipos de cinco jugadores cada uno golpean un balón con sus mazos, tratando de conseguir que el balón entre en la portería del otro equipo. El tamaño de un campo reglamentario es de 200 pies (61 metros) por 128 pies (39 metros), y la portería es de 8 pies (2.4 metros) de ancho por 5 pies (1.5 metros) de altura. Un partido reglamentario consiste en cuatro cuartos de minutos 8, conocidas en el polo como "chukkers". La pelota puede ser golpeada con el mazo, o cualquier parte del cuerpo de un jugador o Segway, pero sólo puede ser dirigida con el mazo. Un punto no es válido si en el balón se golpea con cualquier parte del cuerpo de un jugador o Segway a menos que pase por accidente.   A pesar de ser un deporte minoritario, el Segway Polo está ganando popularidad y se han empezado a formar los equipos en Estados Unidos, Alemania, Suecia, Austria, Barbados y Nueva Zelanda, entre otros. Algunos de estos equipos han empezado a competir entre sí.     La asociación Internacional de Segway Polo (ISPA) se ha establecido como el organismo oficial que rige el Segway Polo. El campeonato de Segway Pol del mundo es la Woz Challenge Cup, que se estableció en 2006, cuando los Silicon Valley Aftershocks jugaron los New Zealand Pole Blacks en Auckland, Nueva Zelanda. El resultado fue un empate 2-2.   Desde entonces se ha seguido jugando año tras año y actualmente la juegan 16 equipos de todo el mundo.',
      autor: 'Pallacus Sapiens',
      imagen:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frp-online.de%2Fimgs%2F32%2F5%2F6%2F6%2F4%2F8%2F5%2F7%2F5%2Ftok_c49c54e50e4768dff78ff4ccb5e2a4e4%2Fw1900_h1324_x962_y665_RP_segwaypolo_160619_pm1-9b8ed606e1b0dfe0.jpg&f=1&nofb=1&ipt=95a26bb155726d8e6f18e9d66a8cf83bb2b53b123193ef24bef296796d297307&ipo=images',
      fecha: new Date(
        'Tue Mar 19 2024 09:58:42 GMT+0100 (Hora estàndard del Centre d’Europa)'
      ),
      categoria: 'Deporte',
    },
    {
      titulo: 'Una gran característica de Windows™',
      texto:
        '"Una muy buena característica de Windows: Arrastrar y soltar!  Estaba navegando por el blog Puntogeek del amigo Juanguis y vi algo que me hizo recordar que existen cosas buenas en Windows y que uno no debe de olvidar cuando uno discute con algún fanático ofuzcado del sistema operativo del Pinguino, Linux.   Se trata de la muy conocida característica del Drag and Drop o como se lo conoce en español Arrastrar y Soltar. A continuación podemos ver en una imagen las bondades de esa característica:"',
      autor: 'Anónimo',
      imagen: 'http://geeksroom.com/wp-content/uploads/2008/08/draganddrop.jpg',
      fecha: new Date(
        'Tue Mar 19 2024 09:58:42 GMT+0100 (Hora estàndard del Centre d’Europa)'
      ),
      categoria: 'Informática',
    },
    {
      titulo: 'Que es un sobreático?',
      texto:
        '"Hay edificios que tienen entresuelo, otros tienen ático, pero, porque hay plantas con un nombre especial?   Cuando todas las plantas de un edificio se construyen a partir del mismo plano (todas son iguales) se denominan ordinalmente: primero, segundo, tercero...   Vamos a poner de ejemplo un caso sencillo. Cuando todas las plantas tienen balcón, pero la primera no, esta es diferente y por tanto tiene otra distribución interna. En este caso se suele denominar planta entresuelo.    En el caso de la planta mas alta, suele aprovecharse para hacer una terraza en vez de un balcón. Esta diferencia hace que lo denominemos ático. Ergo si tanto la última planta como la penúltima tienen balcones o terrazas diferentes la planta superior se denommina sobreático." ',
      autor: 'Albert',
      imagen:
        'https://pbs.twimg.com/media/GJIPal3XwAAuc2O?format=png&name=900x900',
      fecha: new Date(
        'Wed Mar 20 2024 18:08:42 GMT+0100 (Hora estàndard del Centre d’Europa)'
      ),
      categoria: 'Informática',
    },
  ];

  /**Recibe un objeto tipo Post y lo añade al array de posts
   *@param {Post} nuevoPost: Nuevo post, objeto
   */
  createPost(nuevoPost: Post) {
    this.arrPosts = JSON.parse(localStorage['arrPosts']);
    this.arrPosts.push(nuevoPost);
    localStorage.setItem('arrPosts', JSON.stringify(this.arrPosts));
    // Ver posts, ver post, u otra opción
  }

  /**Retorna un array con todos los posts
   *
   */
  getAll() {
    if (!localStorage['arrPosts']) {
      localStorage.setItem('arrPosts', JSON.stringify(this.arrPosts));
    }

    return JSON.parse(localStorage['arrPosts']);
  }

  /**Recibe una categoría y retorna un array con los posts de dicha categoria.
   *@param {string} category: Categoria objetivo del filtrado.
   */
  getByCategory(category: string) {
    this.arrPosts = JSON.parse(localStorage['arrPosts']);
    return this.arrPosts.filter((post) => post.categoria === category);
  }

  /**Devuelve un array de las categorias
   */
  getCategories(): string[] {
    this.arrPosts = JSON.parse(localStorage['arrPosts']);
    return [...new Set(this.arrPosts.map((post) => post.categoria))]; // map genera un array de categorias, Set crea un array a partir de map sin repeticiones.
  }

  constructor() {
    if (localStorage.getItem('arrPosts')) {
      this.arrPosts = JSON.parse(localStorage.getItem('arrPosts')!);
    } else {
      localStorage.setItem('arrPosts', JSON.stringify(this.arrPosts));
    }
  }
}
