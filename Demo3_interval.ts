import { empty , interval , of , timer } from "rxjs"
import {mergeMap } from "rxjs/operators"

//  const interval$  = interval(1000);

const interval$  = timer(1000);

  const res= interval$.pipe( mergeMap( x=> x%2==1 ? of('a','b','c') : empty()));

  res.subscribe( i => console.log(i));