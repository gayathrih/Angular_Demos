 //Global var
 var version=1.0;
//Global Function
 function info(){
       console.log("Employee Managemnet Application");
 }

 class Employee{

    //fields
     eid:string;
     ename:string;
     esal:number;
     gender:string;
     address:string;

      //class scope :  class Memebers
     empDetails():void{

        console.log(`Empeloyee Details \n ID=${this.eid}\n Name =${this.ename} \n Sal = ${this.esal} \n Gender = ${this.gender} \n Address = ${this.address}`);
             info();
          console.log(version)   
        }
}

 var empObj = new Employee();
 empObj.eid="E101";
 empObj.ename="SAM";
 empObj.esal=243643;
 empObj.gender="M";
 empObj.address="Banglore";

 /*console.log(`Empeloyee Details \n ID=${empObj.eid}\n 
                                   Name =${empObj.ename} \n 
                                   Sal = ${empObj.esal} \n
                                    Gender = ${empObj.gender}
                                     \n Address = ${empObj.address}`);
*/

empObj.empDetails();