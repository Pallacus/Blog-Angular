import { Component, inject } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule,Validators,} from '@angular/forms';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {

  postService = inject(PostsService);
  router = inject(Router);

  formulario: FormGroup = new FormGroup({
    titulo: new FormControl(null, [Validators.required]),
    texto: new FormControl(null, [Validators.required]),
    autor: new FormControl(null, [Validators.required]),
    imagen: new FormControl(),
    categoria: new FormControl(null, [Validators.required]),    
  });

/**Comprueba que se haya rellenado el formulario, crea el nuevo post y muestra todos los posts.
 * 
 */
  onSubmit() {

    this.formulario.value.fecha = new Date();

    if (
      this.formulario.valid
    ) {
      this.postService.createPost(this.formulario.value);
      this.router.navigate(['/posts']);
    } else {
      alert('Revisa todos los campos.');
    }
  }

  /**Comprueba si un campo del formulario: si no valido y ha sido tocado devuelve false.
   * 
   * @param controlName 
   * @param errorName 
   * @returns 
   */
  checkError(controlName: string, errorName: string) {
    return (
      this.formulario.get(controlName)!.hasError(errorName) &&
      this.formulario.get(controlName)!.touched
    );
  }
}
