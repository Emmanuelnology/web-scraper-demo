import { Map } from './mapService';

export interface IProperty {
    title?: string;
    id: number;
    price: number;
    postcode: string;
    bedroomCount:number;
    type:string;   
}


export class Property extends Map {
    get():Promise<IProperty> {
        return super.get() as Promise<IProperty>;
    }
}

