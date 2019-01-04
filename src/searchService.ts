import { Map } from "./mapService";

export interface ISearchResult {
    id:number;
}

export class Search extends Map {
    get():Promise<ISearchResult[]> {
        return super.get() as Promise<ISearchResult[]>;
    }
}