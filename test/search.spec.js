"use strict";
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
var _this = this;
exports.__esModule = true;
var chai_1 = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai_1.use(chaiAsPromised);
var webpageService_1 = require("../src/webpageService");
var rightmoveService_1 = require("../src/rightmoveService");
var zooplaService_1 = require("../src/zooplaService");
var runIntegration = false;
describe('Zoopla search', function () {
    it('should return property list', function () {
        var search = new zooplaService_1.ZooplaSearch("BS3 3JJ", new webpageService_1.MockWebPage("testdata/zoopla/search/bs33jj.html"));
        return search.get().then(function (searchResults) {
            chai_1.expect(searchResults[0].id).to.equal(47779888);
            chai_1.expect(searchResults[10].id).to.equal(50065877);
            chai_1.expect(searchResults[99].id).to.equal(50050882);
        });
    });
    it('should throw error if cannot find data', function () { return __awaiter(_this, void 0, void 0, function () {
        var search;
        return __generator(this, function (_a) {
            search = new zooplaService_1.ZooplaSearch("BS3 3JJ", new webpageService_1.MockWebPage("testdata/zoopla/search/invalid.html"));
            return [2, chai_1.expect(search.get()).to.be.rejectedWith(Error)];
        });
    }); });
});
describe('Rightmove search', function () {
    it('should return property list', function () {
        var search = new rightmoveService_1.RightmoveSearch("BS3 3JJ", new webpageService_1.MockWebPage("testdata/rightmove/search/bs33jj.html"));
        return search.get().then(function (searchResults) {
            chai_1.expect(searchResults[0].id).to.equal(69114889);
            chai_1.expect(searchResults[2].id).to.equal(78308129);
            chai_1.expect(searchResults[24].id).to.equal(69266923);
        });
    });
    it('should throw error if cannot find data', function () { return __awaiter(_this, void 0, void 0, function () {
        var search;
        return __generator(this, function (_a) {
            search = new rightmoveService_1.RightmoveSearch("BS3 3JJ", new webpageService_1.MockWebPage("testdata/rightmove/search/invalid.html"));
            return [2, chai_1.expect(search.get()).to.be.rejectedWith(Error)];
        });
    }); });
});
if (runIntegration) {
}
//# sourceMappingURL=search.spec.js.map