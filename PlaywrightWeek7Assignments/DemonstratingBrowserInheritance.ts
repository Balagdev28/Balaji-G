
export class Browser{

    browserName: string;
    browserVersion: number;

    openUrl():void{

        console.log(`Open url method from SuperClass`);
        
    }

    closeBrowser():void{
        console.log(`Close Browser method from SuperClass`);

    }

    navigateBack():void{
         console.log(`Navigate Back method from SuperClass`);
    }
}

export class Chrome extends Browser {

    openIncognito():void{
        console.log(`Opening browser in incognito mode in Chrome`);
        
    }

    clearCache():void  {
        console.log(`Clearing browser Cache in Chrome`);
    }
}

export class Edge extends Browser {

    takeSnap():void{
        console.log(`Taking snapshot in Edge Browser`);
        
    }

    clearCookies():void  {
        console.log(`Clearing Browser cookies in Edge`);
    }
}

export class Safari extends Browser {

    readerMode():void{
        console.log(`Reader Mode in Safari Browser`);
        
    }

    fullScreenMode():void  {
        console.log(`Full screen mode in Safari browser`);
    }
}

const chrome = new Chrome();
chrome.openUrl();
chrome.openIncognito();
chrome.clearCache();
chrome.closeBrowser();


const edge = new Edge();
edge.openUrl();
edge.clearCookies();
edge.navigateBack();
edge.takeSnap();
edge.closeBrowser();

const safari = new Safari()

safari.openUrl();
safari.readerMode();
safari.navigateBack();
safari.fullScreenMode();
safari.closeBrowser();
