import { of } from "rxjs";

const myObservable = of(1,2,3,4);

 myObservable.subscribe(

      x => console.log("Observer got a next value: ' "+x),
      err => console.log("Observer got an error " +err ),
      () =>console.log('Observer got a complete notification')
 );