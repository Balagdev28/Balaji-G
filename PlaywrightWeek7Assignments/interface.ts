
export interface Payments {

    cashOnDelivery():void;
    upiPayments():void;
    cardPayments():void;
    internetBanking():void;
}


export abstract class CanaraBank implements Payments {

    cashOnDelivery(): void {
        console.log(`Cash on Delivery option...`);
        
    }
    upiPayments(): void {
        console.log(`UPI Payment option...`);
        
    }
    cardPayments(): void {
        console.log(`Card Payment option...`);
        
    }
    internetBanking(): void {
        console.log(`Internet Banking option...`);
        
    }

    recordPaymentDetails(): void{
        console.log(`Recording payment details in Canara Bank Class...`);
        
    }

}



