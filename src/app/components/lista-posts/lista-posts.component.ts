import { Component, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'lista-posts',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './lista-posts.component.html',
  styleUrl: './lista-posts.component.css',
})
  
export class ListaPostsComponent {

  arrPosts: Post[] = [];
  arrCategories: string[] = [];

  postService = inject(PostsService);

  /**Carga el array de Posts y el array de categorias
   * 
   */
  ngOnInit() {
    this.arrPosts = this.postService.getAll();
    this.arrCategories = this.postService.getCategories();
  }

  /**Al seleccionar una categoría carga los posts de dicha categoría
   * 
   * @param $event 
   */
  onChange($event: any) {
    if ($event.target.value != 'todas') {
      this.arrPosts = this.postService.getByCategory($event.target.value);
    } else {
    this.arrPosts = this.postService.getAll();
    }
    
}
}
