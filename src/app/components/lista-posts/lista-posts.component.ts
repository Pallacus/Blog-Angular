import { Component, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'lista-posts',
  standalone: true,
  imports: [],
  templateUrl: './lista-posts.component.html',
  styleUrl: './lista-posts.component.css'
})
export class ListaPostsComponent {

  arrPosts: Post[] = [];

  postService = inject(PostsService);

  ngOnInit() {
    this.arrPosts = this.postService.getAll();
    console.log(this.arrPosts);
    
  }
}
