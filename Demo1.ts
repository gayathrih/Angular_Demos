import { Observable, of } from "rxjs";





const simpleObservable = of(1,2);

const myobserver =  {
                              next:string => console.log("simple Observer"),
                              complete:() => console.log("completed")
                    }
;

simpleObservable.subscribe(myobserver);