/*Use the Observable constructor to create an observable stream of any type.
 The constructor takes as its argument the subscriber function to run
  when the observable’s subscribe() method executes. A subscriber function 
  receives an Observer object, and can publish values to the observer's next() method.*/
import { Observable } from "rxjs";

 

function stringSequence(observer){

     observer.next("Happey");
     observer.next("Learning");
     observer.next("Angular");
     observer.complete( console.log("completed"));

     return { unsubscribe() {console.log("unsubscribed..!");} };

}

  const  seqOfStringsObservable =  new Observable(stringSequence);

   seqOfStringsObservable.subscribe(
          (str)=> console.log(str),
          (err) => console.log(" Error occured..."+err)

   );
  