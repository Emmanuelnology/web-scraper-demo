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
var RightmoveProperty = (function (_super) {
    __extends(RightmoveProperty, _super);
    function RightmoveProperty(propertyID, page) {
        if (propertyID === void 0) { propertyID = 77934770; }
        if (page === void 0) { page = new webpageService_1.WebPage(); }
        var _this = _super.call(this, page) || this;
        _this.propertyID = propertyID;
        _this.searchStart = '{"location":{';
        _this.searchEnd = '}}';
        _this.searchStartOffset = 0;
        _this.searchEndOffset = 2;
        return _this;
    }
    RightmoveProperty.prototype.map = function (rawData) {
        var property = {};
        property.id = this.propertyID;
        property.price = rawData.propertyInfo.price;
        property.postcode = rawData.location.postcode;
        property.bedroomCount = rawData.propertyInfo.beds;
        property.type = rawData.propertyInfo.propertySubType;
        return property;
    };
    RightmoveProperty.prototype.url = function () {
        if (this.propertyID)
            return 'https://www.rightmove.co.uk/property-for-sale/property-' + this.propertyID + '.html';
        return undefined;
    };
    return RightmoveProperty;
}(propertyService_1.Property));
exports.RightmoveProperty = RightmoveProperty;
var RightmoveSearch = (function (_super) {
    __extends(RightmoveSearch, _super);
    function RightmoveSearch(searchID, page) {
        if (searchID === void 0) { searchID = 'bs33jj'; }
        if (page === void 0) { page = new webpageService_1.WebPage(); }
        var _this = _super.call(this, page) || this;
        _this.searchID = searchID;
        _this.searchStart = '{"properties":';
        _this.searchEnd = '}}<';
        _this.searchStartOffset = 0;
        _this.searchEndOffset = 2;
        return _this;
    }
    RightmoveSearch.prototype.map = function (rawData) {
        var results = [];
        for (var _i = 0, _a = rawData.properties; _i < _a.length; _i++) {
            var item = _a[_i];
            results.push({
                id: +item.id
            });
        }
        return results;
    };
    RightmoveSearch.prototype.url = function () {
        if (this.searchID)
            return this.searchID;
        return undefined;
    };
    return RightmoveSearch;
}(searchService_1.Search));
exports.RightmoveSearch = RightmoveSearch;
//# sourceMappingURL=rightmoveService.js.map