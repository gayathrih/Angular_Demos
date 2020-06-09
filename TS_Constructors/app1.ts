class Product{
      id:number;
      name:string;

      constructor(id?:number , name?:string){
        this.id = id;
        this.name= name;

    }
      displayProdDetails(){
           console.log(this.id+" "+this.name);
      }
}


//#1

 /*let obj = new Product();
  obj.id=1;
  obj.name="pen";

  obj.displayProdDetails();
  */
 //let obj = new Product();
 let obj = new Product();
  obj.id=1;
  obj.name="pen";
  obj.displayProdDetails();

  obj.displayProdDetails();

 let obj2 = new Product(3,'keyboard');
  obj2.displayProdDetails();

  let obj3 = new Product(4);
    obj3.name="mouse";
  obj3.displayProdDetails();