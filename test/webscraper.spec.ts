import { RightmoveProperty } from '../src/webscraper';
import { expect } from 'chai';

describe('scraper', () => {
    it('should return html', () => {
        const zoopla = 'https://www.zoopla.co.uk/for-sale/property/bridgwater/roberta-walk/ta5-2gw/?q=ta52gw&results_sort=newest_listings&search_source=home';
        const rightmove = "https://www.rightmove.co.uk/property-for-sale/find.html?searchType=SALE&locationIdentifier=POSTCODE%5E4611728&insId=1&radius=3.0&minPrice=&maxPrice=&minBedrooms=&maxBedrooms=&displayPropertyType=&maxDaysSinceAdded=&_includeSSTC=on&sortByPriceDescending=&primaryDisplayPropertyType=&secondaryDisplayPropertyType=&oldDisplayPropertyType=&oldPrimaryDisplayPropertyType=&newHome=&auction=false"
        const rightmoveProperty = "https://www.rightmove.co.uk/property-for-sale/property-77934770.html";
        let html = new RightmoveProperty(77934770);
        expect(html).to.equal(0);
    })
});