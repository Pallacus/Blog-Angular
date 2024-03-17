import { Component, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'lista-posts',
  standalone: true,
  imports: [],
  templateUrl: './lista-posts.component.html',
  styleUrl: './lista-posts.component.css',
})
  
export class ListaPostsComponent {

  arrPosts: Post[] = [];
  arrCategories: string[] = [];

  postService = inject(PostsService);

  ngOnInit() {
    this.arrPosts = this.postService.getAll();
    this.arrCategories = this.postService.getCategories();
    console.log(this.arrPosts, this.arrCategories);
  }
  onChange($event: any) {
    if ($event.target.value) {
      this.arrPosts = this.postService.getByCategory($event.target.value);
    } else {
    this.arrPosts = this.postService.getAll();
    }
    
}
}
