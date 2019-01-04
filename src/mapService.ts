import * as jsonic from 'jsonic';
import { WebPage } from './webpageService';
import { Log } from './logService';

export interface IMap {
    map(rawData:any):any;
    url(id:number):string;
}

export class Map implements IMap {
    searchStart = '{"properties":';
    searchEnd = '}}<';
    searchStartOffset = 0;
    searchEndOffset = 2;

    constructor(private page = new WebPage(), private log = new Log()) {
    }
    protected parseInfo(html:string) {
        let start:number = html.indexOf(this.searchStart);
        if(start == -1) throw new Error('Unable to find HTML key');
        let stripped:string = html.substr(start + this.searchStartOffset);
        let end:number = stripped.indexOf(this.searchEnd);
        let rawJSON = stripped.substr(0, end + this.searchEndOffset);
        return jsonic(rawJSON);
    }

    map(rawData:any) {
        return {};
    }

    
    async get() {
        let url = this.url();
        
        if(url) {
            try {
                let html = await this.page.getContent(url);
                let content = this.parseInfo(html);
                return this.map(content);
            }  
            catch (err) {
                this.log.error(err);
                throw err;
            }
        }
        else {
            throw new Error("No URL");
        }
        
    };
    
    url():string {
        return undefined;
    }
}

