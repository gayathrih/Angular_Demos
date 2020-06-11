import {of} from "rxjs"
import {mergeMap , groupBy , reduce , map} from "rxjs/operators"

const products=of( {id:1 , name:"pen"},
  {id:2,name:"book"},
  {id:1,name:"pencil"},
  {id:2,name:"computers"},
  {id:3,name:"mouse"});

  /*const prod_vals=products.pipe(
        groupBy(p=>p.id),
        mergeMap( prodGroup => 
                      prodGroup.pipe(
                                      reduce((acc,cur)  => [...acc,cur],[]))
  ));*/

  //pivot data on the feild

  const prod_vals=products.pipe(
    groupBy(p=>p.id , p=>p.name),
    mergeMap( prodGroup => 
                  prodGroup.pipe(
                        reduce((acc,cur)  => [...acc,cur],[`${prodGroup.key}`]))
            ),
    map(arr => ({ id: arr[0], values: arr.slice(1) }))
);

  prod_vals.subscribe(p => console.log(p));