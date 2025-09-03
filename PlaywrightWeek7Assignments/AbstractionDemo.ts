import { CanaraBank } from "./interface";


class Amazon extends CanaraBank { //Extending the Canara Bank class where interface methods are implemented

order():void{
    console.log(`Placing an order in Amazon`);
    
}

orderplaced():void{
    console.log(`Order has been placed sucessfully...`);
    
}

}

const amazon = new Amazon();
amazon.order();
amazon.internetBanking();
amazon.recordPaymentDetails();
amazon.orderplaced();

