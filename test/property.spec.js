"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var webpageService_1 = require("../src/webpageService");
var rightmoveService_1 = require("../src/rightmoveService");
var zooplaService_1 = require("../src/zooplaService");
var runIntegration = false;
var enabled = false;
if (enabled) {
    describe('Rightmove property', function () {
        it('should return info: 77934770', function () {
            var property = new rightmoveService_1.RightmoveProperty(77934770, new webpageService_1.MockWebPage("testdata/rightmove/properties/77934770.html"));
            return property.get().then(function (propertyInfo) {
                chai_1.expect(propertyInfo.id).to.equal(77934770);
                chai_1.expect(propertyInfo.price).to.equal(184950);
                chai_1.expect(propertyInfo.postcode).to.equal('TA6 3TH');
                chai_1.expect(propertyInfo.bedroomCount).to.equal(3);
                chai_1.expect(propertyInfo.type).to.equal('Semi-Detached');
            });
        });
        it('should return info: 69167848', function () {
            var property = new rightmoveService_1.RightmoveProperty(69167848, new webpageService_1.MockWebPage("testdata/rightmove/properties/69167848.html"));
            return property.get().then(function (propertyInfo) {
                chai_1.expect(propertyInfo.id).to.equal(69167848);
                chai_1.expect(propertyInfo.price).to.equal(290000);
                chai_1.expect(propertyInfo.postcode).to.equal('BS15 1NR');
                chai_1.expect(propertyInfo.bedroomCount).to.equal(3);
                chai_1.expect(propertyInfo.type).to.equal('Semi-Detached');
            });
        });
        it('should return info: 68884963', function () {
            var property = new rightmoveService_1.RightmoveProperty(68884963, new webpageService_1.MockWebPage("testdata/rightmove/properties/68884963.html"));
            return property.get().then(function (propertyInfo) {
                chai_1.expect(propertyInfo.id).to.equal(68884963);
                chai_1.expect(propertyInfo.price).to.equal(749950);
                chai_1.expect(propertyInfo.postcode).to.equal('BS7 8DF');
                chai_1.expect(propertyInfo.bedroomCount).to.equal(5);
                chai_1.expect(propertyInfo.type).to.equal('House');
            });
        });
        it('should return info: 59028114', function () {
            var property = new rightmoveService_1.RightmoveProperty(59028114, new webpageService_1.MockWebPage("testdata/rightmove/properties/59028114.html"));
            return property.get().then(function (propertyInfo) {
                chai_1.expect(propertyInfo.id).to.equal(59028114);
                chai_1.expect(propertyInfo.price).to.equal(250000);
                chai_1.expect(propertyInfo.postcode).to.equal('BS5 7AU');
                chai_1.expect(propertyInfo.bedroomCount).to.equal(2);
                chai_1.expect(propertyInfo.type).to.equal('Terraced');
            });
        });
        it('should return info: 74721815', function () {
            var property = new rightmoveService_1.RightmoveProperty(74721815, new webpageService_1.MockWebPage("testdata/rightmove/properties/74721815.html"));
            return property.get().then(function (propertyInfo) {
                chai_1.expect(propertyInfo.id).to.equal(74721815);
                chai_1.expect(propertyInfo.price).to.equal(2500000);
                chai_1.expect(propertyInfo.postcode).to.equal('TA5 1SQ');
                chai_1.expect(propertyInfo.bedroomCount).to.equal(5);
                chai_1.expect(propertyInfo.type).to.equal('Detached');
            });
        });
        it('should return info: 75953837', function () {
            var property = new rightmoveService_1.RightmoveProperty(75953837, new webpageService_1.MockWebPage("testdata/rightmove/properties/75953837.html"));
            return property.get().then(function (propertyInfo) {
                chai_1.expect(propertyInfo.id).to.equal(75953837);
                chai_1.expect(propertyInfo.price).to.equal(1650000);
                chai_1.expect(propertyInfo.postcode).to.equal('TA5 2BP');
                chai_1.expect(propertyInfo.bedroomCount).to.equal(5);
                chai_1.expect(propertyInfo.type).to.equal('Detached');
            });
        });
    });
    describe('Zoopla property', function () {
        it('should return info: 50026394', function () {
            var property = new zooplaService_1.ZooplaProperty(50026394, new webpageService_1.MockWebPage("testdata/zoopla/properties/50026394.html"));
            return property.get().then(function (propertyInfo) {
                chai_1.expect(propertyInfo.id).to.equal(50026394);
                chai_1.expect(propertyInfo.price).to.equal(265000);
                chai_1.expect(propertyInfo.postcode).to.equal('TA5 1JT');
                chai_1.expect(propertyInfo.bedroomCount).to.equal(3);
                chai_1.expect(propertyInfo.type).to.equal('detached');
            });
        });
        it('should return info: 49886644', function () {
            var property = new zooplaService_1.ZooplaProperty(49886644, new webpageService_1.MockWebPage("testdata/zoopla/properties/49886644.html"));
            return property.get().then(function (propertyInfo) {
                chai_1.expect(propertyInfo.id).to.equal(49886644);
                chai_1.expect(propertyInfo.price).to.equal(505000);
                chai_1.expect(propertyInfo.postcode).to.equal('TA5 1EL');
                chai_1.expect(propertyInfo.bedroomCount).to.equal(3);
                chai_1.expect(propertyInfo.type).to.equal('detached');
            });
        });
    });
    if (runIntegration) {
        describe('Integration', function () {
            it('should be able to access Rightmove', function () {
                var property = new rightmoveService_1.RightmoveProperty(77934770);
                return property.get().then(function (propertyInfo) {
                    chai_1.expect(propertyInfo.id).to.equal(77934770);
                    chai_1.expect(propertyInfo.price).to.equal(184950);
                    chai_1.expect(propertyInfo.postcode).to.equal('TA6 3TH');
                    chai_1.expect(propertyInfo.bedroomCount).to.equal(3);
                    chai_1.expect(propertyInfo.type).to.equal('Semi-Detached');
                });
            });
            it('should be able to access Zoopla', function () {
                var property = new zooplaService_1.ZooplaProperty(50026394);
                return property.get().then(function (propertyInfo) {
                    chai_1.expect(propertyInfo.id).to.equal(50026394);
                    chai_1.expect(propertyInfo.price).to.equal(265000);
                    chai_1.expect(propertyInfo.postcode).to.equal('TA5 1JT');
                    chai_1.expect(propertyInfo.bedroomCount).to.equal(3);
                    chai_1.expect(propertyInfo.type).to.equal('detached');
                });
            });
        });
    }
}
//# sourceMappingURL=property.spec.js.map