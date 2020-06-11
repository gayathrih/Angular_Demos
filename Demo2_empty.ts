 import { empty } from "rxjs"
 import { startWith } from "rxjs/operators"

  const res = empty().pipe( startWith(5));

  res.subscribe( x => console.log(x));