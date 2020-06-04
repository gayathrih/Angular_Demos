//super class
class Mobile{
     //feilds
      model="abc Model";
      price=2000;
      memory="2GB";
      color="black color";


      //actions or featues
       
       printFeatures(){
           console.log("Model = "+this.model+" Price: "+this.price+" Memory = "+this.memory+" color =  "+this.color);
       }
      

}

class Redmi extends Mobile{
      
      

}

//create an objet

     var mobileObj = new Mobile();
       mobileObj.printFeatures();
   console.log("...................................");
      
      var redmiObj=  new Redmi();
         redmiObj.color="white color";
         redmiObj.memory="3 GB";

       redmiObj.printFeatures();
