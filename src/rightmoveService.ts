import {Property, IProperty} from './propertyService';
import { WebPage } from './webpageService';
import { Search, ISearchResult } from './searchService';
import { IMap } from './mapService';

interface IRightmoveSearchData {
    properties: IRightmoveSearchResult[];
    resultCount: string;
    location:{
        id:number;
        displayName:string;
        shortDisplayName:string;
        locationType:string;
        listingCurrency:string;
    };
    pagination:{
        total:number;
        options:{ value:string, description:string }[];
        first:string,
        last:string;
        next:string;
        page:string;
    }
}

interface IRightmoveDisplayPrice {
    displayPrice:string;
    displayPriceQualifier:string;
}

interface IRightmoveSearchResult {
    id:number;
    bedrooms:number;
    numberOfImages:number;
    numberOfFloorplans:number;
    numberOfVirtualTours:number;
    summary:string;
    displayAddress:string;
    countryCode:string;
    location:{
        latitude:number;
        longitude:number;
    };
    propertySubType:string;
    listingUpdate:{
        listingUpdateReason:string;
        listingUpdateDate:string;
    };
    premiumListing:boolean;
    featuredProperty:boolean;
    price:{
        amount:number;
        frequency:string;
        currencyCode:string;
        displayPrices:IRightmoveDisplayPrice[];
    };
    customer:{
        branchId:number;
        brandPlusLogoURI:string;
        contactTelephone:string;
        branchDisplayName:string;
        branchName:string;
        brandTradingName:string;
        branchLandingPageUrl:string;
        development:boolean;
        showReducedProperties:boolean;
        commercial:boolean;
        showOnMap:boolean;
        brandPlusLogoUrl:string;
    };
    distance:number;
    transactionType:string;
    productLabel:{
        productLabelText:string;
    };
    commercial:boolean;
    development:boolean;
    residential:boolean;
    students:boolean;
    auction:boolean;
    feesApply:boolean;
    feesApplyText:string;
    displaySize:string;
    showOnMap:boolean;
    propertyUrl:string;
    contactUrl:string;
    channel:string;
    firstVisibleDate:string;
    keywords:[
    ];
    keywordMatchType:string;
    propertyTypeFullDescription:string;
    propertyImages:{
        images:IRightmoveImage[];
        mainImageSrc:string;
        mainImageSrcset:string;
        mainMapImageSrc:string;
        mainMapImageSrcset:string
    };
    displayStatus:string;
    formattedBranchName:string;
    addedOrReduced:string;
    isRecent:boolean;
    formattedDistance:string;
    heading:string;
    hasBrandPlus:boolean;
}

interface IRightmoveImage {
    order:number;
    url:string;
    mediaServerHost:string;
    srcUrl:string;
    srcsetUrl:string;
    mapSrcUrl:string;
    mapSrcsetUrl:string;
}

interface IRightmovePropertyData {
    location:{
        postcode:string;
        country:string; //GB
        latitude:number;
        longitude:number
    };
    propertyId:number;
    viewType:string;
    imageCount:number;
    floorplanCount:number;
    videoProvider:string;
    propertyInfo:{
        propertyType:string;
        propertySubType:string;
        price:number;
        beds:number;
        added:string;
        soldSTC:boolean;
        retirement:boolean;
        preOwned:string;
        ownership:string;
        auctionOnly:boolean;
        letAgreed:boolean;
        lettingType:any;
        furnishedType:any;
        minSizeFt:any;
        maxSizeFt:any;
        minSizeAc:any;
        maxSizeAc:any;
        businessForSale:boolean;
        priceQualifier:string;
        currency:string;
        selectedPrice:any;
        selectedCurrency:any;
    }
}

export class RightmoveProperty extends Property implements IMap{
    searchStart = '{"location":{';
    searchEnd = '}}';
    searchStartOffset = 0;
    searchEndOffset = 2;
    
    constructor(private propertyID:number = 77934770, page = new WebPage()) {
        super(page);
    }
    
    map(rawData:IRightmovePropertyData):IProperty {
        let property:IProperty = {} as IProperty;
        property.id = this.propertyID;
        property.price = rawData.propertyInfo.price;
        property.postcode = rawData.location.postcode;
        property.bedroomCount = rawData.propertyInfo.beds;
        property.type = rawData.propertyInfo.propertySubType;
        return property;
    }
    
    url() {
        if(this.propertyID) return 'https://www.rightmove.co.uk/property-for-sale/property-' + this.propertyID + '.html';
        return undefined;
    }
    
}


export class RightmoveSearch extends Search implements IMap {
    searchStart = '{"properties":';
    searchEnd = '}}<';
    searchStartOffset = 0;
    searchEndOffset = 2;

    constructor(private searchID:string = 'bs33jj', page = new WebPage()) {
        super(page);
    }
    
    map(rawData:IRightmoveSearchData):ISearchResult[] {
        let results:ISearchResult[] = [];
        for(let item of rawData.properties) {
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