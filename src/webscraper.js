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
var $ = require("cheerio");
var webpage_1 = require("./webpage");
var Property = (function () {
    function Property() {
    }
    Property.prototype.stripWhiteSpace = function (s) {
        return s.replace(/[\n\r\t]/g, '').trim();
    };
    Property.prototype.stripNonDigits = function (s) {
        return +s.replace(/\D/g, '');
    };
    Property.prototype.searchFor = function (cheerioSelectors, html, text) {
        var result = false;
        for (var _i = 0, cheerioSelectors_1 = cheerioSelectors; _i < cheerioSelectors_1.length; _i++) {
            var selector = cheerioSelectors_1[_i];
            var headers = $(selector, html);
            headers.each(function (index, element) {
                var searchText = $(element).text().toLowerCase();
                if (searchText.indexOf(text) != -1)
                    result = true;
            });
        }
        return result;
    };
    Property.prototype.getType = function (title) {
        var type;
        if (title.indexOf('semi-detached') != -1)
            type = "semi-detached";
        else if (title.indexOf('detached') != -1)
            type = "detached";
        else if (title.indexOf('penthouse') != -1)
            type = "penthouse";
        else if (title.indexOf('apartment') != -1)
            type = "apartment";
        else if (title.indexOf('flat') != -1)
            type = "flat";
        else if (title.indexOf('terrace') != -1)
            type = "terraced";
        else if (title.indexOf('retirement') != -1)
            type = "retirement";
        else if (title.indexOf('house') != -1)
            type = "house";
        else {
            type = "other";
        }
        return type;
    };
    return Property;
}());
exports.Property = Property;
var RightmoveProperty = (function (_super) {
    __extends(RightmoveProperty, _super);
    function RightmoveProperty(propertyID, page) {
        if (propertyID === void 0) { propertyID = 77934770; }
        if (page === void 0) { page = new webpage_1.WebPage(); }
        var _this = _super.call(this) || this;
        _this.propertyID = propertyID;
        _this.page = page;
        return _this;
    }
    RightmoveProperty.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, property, html, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.url();
                        property = {};
                        if (!url) return [3, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, this.page.getContent(url)];
                    case 2:
                        html = _a.sent();
                        property.title = this.stripWhiteSpace($('h1', html).text());
                        property.price = this.stripNonDigits($('#propertyHeaderPrice', html).text());
                        property.streetAddress = this.stripWhiteSpace($('.property-header-bedroom-and-price address', html).text());
                        property.bedroomCount = (property.title.indexOf('bedroom') == 2) ? +property.title.substr(0, 1) : undefined;
                        property.type = this.getType(property.title);
                        property.hasGarden = this.searchFor(['[itemProp=description]', '.key-features li'], html, 'garden');
                        property.hasGarage = this.searchFor(['[itemProp=description]', '.key-features li'], html, 'garage');
                        return [2, property];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3, 4];
                    case 4: return [3, 6];
                    case 5: throw new Error("No URL");
                    case 6: return [2];
                }
            });
        });
    };
    ;
    RightmoveProperty.prototype.url = function () {
        if (this.propertyID)
            return 'https://www.rightmove.co.uk/property-for-sale/property-' + this.propertyID + '.html';
        return false;
    };
    return RightmoveProperty;
}(Property));
exports.RightmoveProperty = RightmoveProperty;
//# sourceMappingURL=webscraper.js.map