//interfaceDemo-Test2.ts

import { log } from "console";
import { DatabseConnection } from "./interfaceDemo";


class mySQLconnection implements DatabseConnection{ //Implementing methods abstract DatabseConnection class 

    connect(): void {
        console.log(`Connecting to DataBase....`);
        
    }

    disconnect(): void {
        console.log(`Disconnecting from DataBase...`);
        
    }

    executeUpdate(): void {
        console.log(`Updating the DataBase...`);
        
    }
    executeQuery(): void{
        console.log(`Executing Query in DataBase...`);
        
    }
    
}


class PlaywrightConnection extends mySQLconnection{

recordconnect():void{

    console.log(`Record Database connection...`);
    
}
verifyDB():void{

    console.log(`Verify DataBase Testusing Playwright Abstract class & Interface implementaion...`);
    
}

}

const mySql = new PlaywrightConnection();

mySql.verifyDB();
mySql.recordconnect();
mySql.connect();
mySql.executeQuery();
mySql.executeUpdate();
mySql.disconnect();