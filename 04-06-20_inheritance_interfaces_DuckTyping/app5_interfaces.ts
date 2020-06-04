interface AI{
     test();
}

interface BI{
  show();
}


interface CI extends AI,BI{
     print();
}

/*class AImpl implements AI, BI{

    test(){
        console.log("AImpl test func");
    }
    show(){
        console.log("AImpl show func");
    }
}*/

class CImpl implements CI{

    test(){
        console.log("CImpl test func");
    }
    show(){
    
        console.log("CImpl show func");
    }
    print(){
        console.log("CImpl print func");
    }
}


var obj1  = new CImpl();

obj1.test();
obj1.show();
obj1.print();



