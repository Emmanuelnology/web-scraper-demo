const puppeteer = require('puppeteer');
const fs = require('fs');
const $ = require('cheerio');

export class Scraper {
    outputToFile(html:any) {
        fs.writeFile("test.html", html, function(err: any) {
            if(err) {
                return console.log(err);
            }
            return true;
        });
    }

    stripWhiteSpace(s:string) {
        return s.replace(/[\n\r\t]/g,''); 
    }

    constructor() {
    }
    getURL() {
        
    }
}

export class RightmoveProperty extends Scraper {
    private html:string;

    getHTML() {
        return puppeteer
        .launch()
        .then((browser: { newPage: () => void; }) => browser.newPage())
        .then((page:any) => page.goto(this.url()).then(() => page.content()))
        .then((html:any) => {
            let rooms:any[] = [];
            $('.sect > strong', html).each((index:number, element:any) => {
                rooms.push($(element).text());
            });
            return {
                title: this.stripWhiteSpace($('h1', html).text()),
                price: this.stripWhiteSpace($('#propertyHeaderPrice', html).text()),
                streetAddress: this.stripWhiteSpace($('.property-header-bedroom-and-price address', html).text()),
                rooms: rooms
            }
            
          })
        .catch((err: any) => console.log(err));
    };

    url() {
        return 'https://www.rightmove.co.uk/property-for-sale/property-' + this.propertyID + '.html';
    }


    constructor(private propertyID:number = 77934770) {
        super();
        this.getHTML().then((property:any)=> {
            console.log(property);
        });
    }
}