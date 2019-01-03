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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var WebPage = (function () {
    function WebPage(url) {
        var _this = this;
        this.url = url;
        this.content = puppeteer
            .launch()
            .then(function (browser) { return browser.newPage(); })
            .then(function (page) { return page.goto(_this.url).then(function () { return page.content(); }); })["catch"](function (err) { return console.log(err); });
    }
    WebPage.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2];
            });
        });
    };
    return WebPage;
}());
exports.WebPage = WebPage;
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
        var page = new WebPage(this.url());
        return page.content
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
        });
    };
    ;
    RightmoveProperty.prototype.url = function () {
        return 'https://www.rightmove.co.uk/property-for-sale/property-' + this.propertyID + '.html';
    };
    return RightmoveProperty;
}(Scraper));
exports.RightmoveProperty = RightmoveProperty;
//# sourceMappingURL=webscraper.js.map