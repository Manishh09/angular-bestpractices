import { Injectable } from '@angular/core';
import { map, Observable, timer } from 'rxjs';
import { DISTRICTS, STATES } from '../constants/constants';
import { Blog } from '../models/blog';
import { District } from '../models/district';
import { State } from '../models/state';
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

  getStateById(id:number):Observable<State>{
    return timer(100).pipe(
      map((x) => ({ id: 1, text: 'Andhra Pradesh' }))
    );
  }
  getDistrictsByStateId(stateId:number):Observable<District[]>{
    return timer(200).pipe(
      map((x) => DISTRICTS)
    );
  }

  getData(filterText: string) {
    const timertTime = Math.floor(Math.random() * 10000);
    console.log(`SearchTerm: ${filterText},Time taken by API: ${timertTime} milliseconds`)
    return timer(timertTime).pipe(
      map((x) =>
        STATES
        .filter((state) =>
          state.text
            .toLocaleLowerCase()
            .includes(filterText.toLocaleLowerCase())
        )
      )
    );
  }
}
