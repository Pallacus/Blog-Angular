## Ejercicio Blog

# Angular Blog

- El objetivo de este ejercicio es desarrollar un sistema sencillo de blogging 
- La aplicación que desarrollemos dispondrá de dos rutas:
    - /posts. Se trata de la ruta que da acceso a los diferentes Post que tengamos en el blog
    - /new. Dentro de esta ruta encontramos el formulario que nos permitirá agregar nuevos Post dentro de nuestro sistema
- Cada una de estas rutas está representada por un componente ListaPosts y Formulario.

# PASOS A SEGUIR:

- Definir el modelo de datos de nuestra aplicación.
    - En este caso tendremos que definir el interfaz Post que cuenta con las siguientes propiedades:
        - titulo, texto, autor, imagen (puede ser una url), fecha, categoria
- El siguiente paso es la creación del Servicio que se encargará de manejar la información de nuestra aplicación.
    - Dentro del servicio necesitamos definir un array como propiedad del mismo donde insertaremos los diferentes Post
    - Dicho servicio dispondrá de un método create(Post) que nos permitirá agregar los Post cuando lo indiquemos desde el formulario
    - Además incluiremos el método getAll para recuperar todos los Post de nuestro blog
    - Y por último definiremos el método getByCategoria(cat) para que nos devuelva los post de una categoría concreta
- El siguiente elemento a definir es el componente ListaPosts
    - Se trata de un componente que, recibe del servicio todos los Post y los muestra de manera ordenada.
    - (opcional) Disponer de una serie de botones que nos permitan filtrar por categoría.
    
- Por último, desarrollaremos el componente Formulario
    - Este componente representa un formulario con los diferentes campos del
modelo Post.
    - Cuando pulsemos el botón enviar, el formulario debe mandar al servicio la información del nuevo Post para que se almacene junto a los demás.

# Para subir nota:
- Podemos usar localStorage para guardar la información de los posts creados




                      ----------------------------------------





# 99EjercicioBlog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
