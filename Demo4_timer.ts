import { timer } from "rxjs"
/*
  timer takes a second argument, how often to emit subsequent values
  in this case we will emit first value after 1 second and subsequent
  values every 2 seconds after
*/

 const source=timer(1000,2000);

  const res=source.subscribe(val => console.log(val));

  setTimeout( ()=>{ res.unsubscribe()} ,5000 );

