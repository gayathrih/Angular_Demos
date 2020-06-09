export class A{

      title:string= "Title : A class";

       show(){
            console.log(" A class show func");
       }
}

export class B{
     title = "Title: B Class";
}

let a_obj = new A();
  console.log(a_obj.title);

  a_obj.show();