import { Injectable } from '@angular/core';
import { map, Observable, timer } from 'rxjs';
import { Blog } from '../models/blog';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getUserData(): Observable<User>{
    return timer(2000).pipe(
      map( (x) =>({
        id: 1,
        name: 'Manish',
        age: 25,
        profession: 'Angular Developer'
      })),

    )
  }

  getBlogById(id: number): Observable<Blog> {
    return timer(2000).pipe(
      map((x) => ({
        postId: 1,
        title: 'Learn RxJS',
        averageReadingTime: 5,
        category: 'Angular',
      }))
    );
  }
  getBlogsById(id: number): Observable<Blog[]> {
    return timer(2000).pipe(
      map((x) => [
        {
          postId: 1,
          title: 'Learn RxJS',
          averageReadingTime: 5,
          category: 'Angular',
        },
        {
          postId: 2,
          title: 'Refactoring',
          averageReadingTime: 5,
          category: 'General Programming',
        },
      ])
    );
  }
}
