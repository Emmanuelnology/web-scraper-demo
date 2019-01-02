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
var puppeteer = require('puppeteer');
var fs = require('fs');
var $ = require('cheerio');
var Scraper = (function () {
    function Scraper() {
    }
    Scraper.prototype.outputToFile = function (html) {
        fs.writeFile("test.html", html, function (err) {
            if (err) {
                return console.log(err);
            }
            return true;
        });
    };
    Scraper.prototype.stripWhiteSpace = function (s) {
        return s.replace(/[\n\r\t]/g, '');
    };
    Scraper.prototype.getURL = function () {
    };
    return Scraper;
}());
exports.Scraper = Scraper;
var RightmoveProperty = (function (_super) {
    __extends(RightmoveProperty, _super);
    function RightmoveProperty(propertyID) {
        if (propertyID === void 0) { propertyID = 77934770; }
        var _this = _super.call(this) || this;
        _this.propertyID = propertyID;
        _this.getHTML().then(function (property) {
            console.log(property);
        });
        return _this;
    }
    RightmoveProperty.prototype.getHTML = function () {
        var _this = this;
        return puppeteer
            .launch()
            .then(function (browser) { return browser.newPage(); })
            .then(function (page) { return page.goto(_this.url()).then(function () { return page.content(); }); })
            .then(function (html) {
            var rooms = [];
            $('.sect > strong', html).each(function (index, element) {
                rooms.push($(element).text());
            });
            return {
                title: _this.stripWhiteSpace($('h1', html).text()),
                price: _this.stripWhiteSpace($('#propertyHeaderPrice', html).text()),
                streetAddress: _this.stripWhiteSpace($('.property-header-bedroom-and-price address', html).text()),
                rooms: rooms
            };
        })["catch"](function (err) { return console.log(err); });
    };
    ;
    RightmoveProperty.prototype.url = function () {
        return 'https://www.rightmove.co.uk/property-for-sale/property-' + this.propertyID + '.html';
    };
    return RightmoveProperty;
}(Scraper));
exports.RightmoveProperty = RightmoveProperty;
//# sourceMappingURL=webscraper.js.map