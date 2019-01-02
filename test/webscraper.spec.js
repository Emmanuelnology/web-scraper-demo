"use strict";
exports.__esModule = true;
var webscraper_1 = require("../src/webscraper");
var chai_1 = require("chai");
describe('scraper', function () {
    it('should return html', function () {
        var zoopla = 'https://www.zoopla.co.uk/for-sale/property/bridgwater/roberta-walk/ta5-2gw/?q=ta52gw&results_sort=newest_listings&search_source=home';
        var rightmove = "https://www.rightmove.co.uk/property-for-sale/find.html?searchType=SALE&locationIdentifier=POSTCODE%5E4611728&insId=1&radius=3.0&minPrice=&maxPrice=&minBedrooms=&maxBedrooms=&displayPropertyType=&maxDaysSinceAdded=&_includeSSTC=on&sortByPriceDescending=&primaryDisplayPropertyType=&secondaryDisplayPropertyType=&oldDisplayPropertyType=&oldPrimaryDisplayPropertyType=&newHome=&auction=false";
        var rightmoveProperty = "https://www.rightmove.co.uk/property-for-sale/property-77934770.html";
        var html = new webscraper_1.RightmoveProperty(77934770);
        chai_1.expect(html).to.equal(0);
    });
});
//# sourceMappingURL=webscraper.spec.js.map