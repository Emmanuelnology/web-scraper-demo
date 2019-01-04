import * as puppeteer from 'puppeteer';
import * as fs from 'fs';

export class WebPage {

    async getContent(url:string) {
        try {
            let browser =  await puppeteer.launch();
            let page = await browser.newPage();
            await page.goto(url);
            return page.content()
        }
        catch(err) {
            console.log(err)
        }
    }
}

export class MockWebPage extends WebPage {
    constructor (private path:string) {
        super();
    }
    async getContent(url:string) {
        let content:string;
        if(fs.existsSync(this.path)){
            content = fs.readFileSync(this.path, "utf8");
        }
        else {
            throw new Error("File doesn't exist: " + this.path);
        }
        
        return content;
    }
}