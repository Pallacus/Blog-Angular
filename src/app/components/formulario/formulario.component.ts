import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {

  postService = inject(PostsService);
  
  formulario: FormGroup = new FormGroup({
    titulo: new FormControl(),
    texto: new FormControl(),
    autor: new FormControl(),
    imagen: new FormControl(),
    categoria: new FormControl(),
  });

  onSubmit() {
    //TODO:comporbar que se hayan rellenado los campos
    this.postService.createPost(this.formulario.value);
    console.log('done');
    
    
  }
}
