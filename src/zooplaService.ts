import {Property, IProperty} from './propertyService';
import { WebPage } from './webpageService';
import { Search, ISearchResult } from './searchService';
import { IMap } from './mapService';

interface IZooplaSearchData {
    id: string,
    variant: string,
    list: string,
    position: string
}

interface IZooplaPropertyData {
    acorn: number,
    acorn_type: number,
    area_name: string,
    beds_max: number,
    beds_min: number,
    branch_id: string,
    branch_logo_url: string,
    branch_name: string,
    brand_name: string,
    chain_free: boolean,
    company_id: string,
    country_code: string,
    county_area_name: string,
    currency_code: string,
    display_address: string,
    furnished_state: string,
    group_id: string,
    has_epc: boolean,
    has_floorplan: boolean,
    incode: string,
    is_retirement_home: boolean,
    is_shared_ownership: boolean,
    listing_condition: string,
    listing_id: number,
    listing_status: string,
    listings_category: string,
    location: string,
    member_type: string,
    num_baths: number,
    num_beds: number,
    num_images: number,
    num_recepts: number,
    outcode: string,
    post_town_name: string,
    postal_area: string,
    price: number,
    price_actual: number,
    price_max: number,
    price_min: number,
    price_qualifier: string,
    property_highlight: string,
    property_type: string,
    region_name: string,
    section: string,
    size_sq_feet: string,
    tenure: string,
    zindex: string
}

export class ZooplaProperty extends Property implements IMap {
    searchStart = 'ZPG.trackData.taxonomy = {';
    searchEnd = '};';
    searchStartOffset = 25;
    searchEndOffset = 1;

    constructor(private propertyID:number = 50026394, page = new WebPage()) {
        super(page);
    }
    
    map(rawData:IZooplaPropertyData):IProperty {
        let property:IProperty = {} as IProperty;
        property.id = this.propertyID;
        property.price = rawData.price;
        property.postcode = rawData.outcode + " " + rawData.incode;
        property.bedroomCount = rawData.num_beds;
        property.type = rawData.property_type;
        return property;
    }
    
    url() {
        if(this.propertyID) return 'https://www.zoopla.co.uk/for-sale/details/'+this.propertyID+'?search_identifier=a30974f546193b0c8e7c4c61d8a2437'
        return undefined;
    }
    
}

export class ZooplaSearch extends Search implements IMap {
    searchStart = '"impressions": [';
    searchEnd = ']';
    searchStartOffset = 15;
    searchEndOffset = 1;

    constructor(private searchID:string = 'bs33jj', page = new WebPage()) {
        super(page);
    }
    
    map(rawData:IZooplaSearchData[]):ISearchResult[] {
        let results:ISearchResult[] = [];
        for(let item of rawData) {
            results.push({
                id: +item.id
            });
        }
        return results;
    }
    
    url():string {
        if(this.searchID) return this.searchID;
        return undefined;
    } 
}