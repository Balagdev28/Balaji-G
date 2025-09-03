//interfaceDemo-Test1.ts

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
    
}


function DBmethod(){

    const mySql = new mySQLconnection();

    mySql.connect();
    mySql.executeUpdate();
    mySql.disconnect();

}

DBmethod();