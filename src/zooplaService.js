"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var propertyService_1 = require("./propertyService");
var webpageService_1 = require("./webpageService");
var searchService_1 = require("./searchService");
var ZooplaProperty = (function (_super) {
    __extends(ZooplaProperty, _super);
    function ZooplaProperty(propertyID, page) {
        if (propertyID === void 0) { propertyID = 50026394; }
        if (page === void 0) { page = new webpageService_1.WebPage(); }
        var _this = _super.call(this, page) || this;
        _this.propertyID = propertyID;
        _this.searchStart = 'ZPG.trackData.taxonomy = {';
        _this.searchEnd = '};';
        _this.searchStartOffset = 25;
        _this.searchEndOffset = 1;
        return _this;
    }
    ZooplaProperty.prototype.map = function (rawData) {
        var property = {};
        property.id = this.propertyID;
        property.price = rawData.price;
        property.postcode = rawData.outcode + " " + rawData.incode;
        property.bedroomCount = rawData.num_beds;
        property.type = rawData.property_type;
        return property;
    };
    ZooplaProperty.prototype.url = function () {
        if (this.propertyID)
            return 'https://www.zoopla.co.uk/for-sale/details/' + this.propertyID + '?search_identifier=a30974f546193b0c8e7c4c61d8a2437';
        return undefined;
    };
    return ZooplaProperty;
}(propertyService_1.Property));
exports.ZooplaProperty = ZooplaProperty;
var ZooplaSearch = (function (_super) {
    __extends(ZooplaSearch, _super);
    function ZooplaSearch(searchID, page) {
        if (searchID === void 0) { searchID = 'bs33jj'; }
        if (page === void 0) { page = new webpageService_1.WebPage(); }
        var _this = _super.call(this, page) || this;
        _this.searchID = searchID;
        _this.searchStart = '"impressions": [';
        _this.searchEnd = ']';
        _this.searchStartOffset = 15;
        _this.searchEndOffset = 1;
        return _this;
    }
    ZooplaSearch.prototype.map = function (rawData) {
        var results = [];
        for (var _i = 0, rawData_1 = rawData; _i < rawData_1.length; _i++) {
            var item = rawData_1[_i];
            results.push({
                id: +item.id
            });
        }
        return results;
    };
    ZooplaSearch.prototype.url = function () {
        if (this.searchID)
            return this.searchID;
        return undefined;
    };
    return ZooplaSearch;
}(searchService_1.Search));
exports.ZooplaSearch = ZooplaSearch;
//# sourceMappingURL=zooplaService.js.map