import { of } from "rxjs";

const  myObservable = of(1,2,3);

const myObsrever ={

     next:x=> console.log("observer got next val : "+x),
     error: err  =>console.log("observer got an error "+err),
     complete :() =>console.log("observer got  complete notification")
     

     
};

myObservable.subscribe(myObsrever);