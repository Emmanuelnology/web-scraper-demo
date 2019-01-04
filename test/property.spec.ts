import { IProperty } from '../src/propertyService';
import { expect } from 'chai';
import { MockWebPage } from '../src/webpageService';
import { RightmoveProperty } from '../src/rightmoveService';
import { ZooplaProperty } from '../src/zooplaService';

let runIntegration = false;
let enabled = false;

if(enabled) {

describe('Rightmove property', () => {
  
    it('should return info: 77934770', () => {
        let property = new RightmoveProperty(77934770, new MockWebPage("testdata/rightmove/properties/77934770.html"));
        return property.get().then((propertyInfo:IProperty) =>{
        expect(propertyInfo.id).to.equal(77934770);
        expect(propertyInfo.price).to.equal(184950);
        expect(propertyInfo.postcode).to.equal('TA6 3TH');
        expect(propertyInfo.bedroomCount).to.equal(3);
        expect(propertyInfo.type).to.equal('Semi-Detached');
        });
    })

    it('should return info: 69167848', () => {
        let property = new RightmoveProperty(69167848, new MockWebPage("testdata/rightmove/properties/69167848.html"));
        return property.get().then((propertyInfo:IProperty) =>{
        expect(propertyInfo.id).to.equal(69167848);
        expect(propertyInfo.price).to.equal(290000);
        expect(propertyInfo.postcode).to.equal('BS15 1NR');
        expect(propertyInfo.bedroomCount).to.equal(3);
        expect(propertyInfo.type).to.equal('Semi-Detached');
    });
})
    it('should return info: 68884963', () => {
        let property = new RightmoveProperty(68884963, new MockWebPage("testdata/rightmove/properties/68884963.html"));
        return property.get().then((propertyInfo:IProperty) =>{
        expect(propertyInfo.id).to.equal(68884963);
        expect(propertyInfo.price).to.equal(749950);
        expect(propertyInfo.postcode).to.equal('BS7 8DF');
        expect(propertyInfo.bedroomCount).to.equal(5);
        expect(propertyInfo.type).to.equal('House');
        });
    })

    it('should return info: 59028114', () => {
        let property = new RightmoveProperty(59028114, new MockWebPage("testdata/rightmove/properties/59028114.html"));
        return property.get().then((propertyInfo:IProperty) =>{
        expect(propertyInfo.id).to.equal(59028114);
        expect(propertyInfo.price).to.equal(250000);
        expect(propertyInfo.postcode).to.equal('BS5 7AU');
        expect(propertyInfo.bedroomCount).to.equal(2);
        expect(propertyInfo.type).to.equal('Terraced');
        });
    })

    it('should return info: 74721815', () => {
        let property = new RightmoveProperty(74721815, new MockWebPage("testdata/rightmove/properties/74721815.html"));
        return property.get().then((propertyInfo:IProperty) =>{
        expect(propertyInfo.id).to.equal(74721815);
        expect(propertyInfo.price).to.equal(2500000);
        expect(propertyInfo.postcode).to.equal('TA5 1SQ');
        expect(propertyInfo.bedroomCount).to.equal(5);
        expect(propertyInfo.type).to.equal('Detached');
        });
    })

    it('should return info: 75953837', () => {
        let property = new RightmoveProperty(75953837, new MockWebPage("testdata/rightmove/properties/75953837.html"));
        return property.get().then((propertyInfo:IProperty) =>{
        expect(propertyInfo.id).to.equal(75953837);
        expect(propertyInfo.price).to.equal(1650000);
        expect(propertyInfo.postcode).to.equal('TA5 2BP');
        expect(propertyInfo.bedroomCount).to.equal(5);
        expect(propertyInfo.type).to.equal('Detached');
        });
    })

});

describe('Zoopla property', () => {
  


    it('should return info: 50026394', () => {
        let property = new ZooplaProperty(50026394, new MockWebPage("testdata/zoopla/properties/50026394.html"));
        return property.get().then((propertyInfo:IProperty) =>{
        expect(propertyInfo.id).to.equal(50026394);
        expect(propertyInfo.price).to.equal(265000);
        expect(propertyInfo.postcode).to.equal('TA5 1JT');
        expect(propertyInfo.bedroomCount).to.equal(3);
        expect(propertyInfo.type).to.equal('detached');
        });
    })

    it('should return info: 49886644', () => {
        let property = new ZooplaProperty(49886644, new MockWebPage("testdata/zoopla/properties/49886644.html"));
        return property.get().then((propertyInfo:IProperty) =>{
        expect(propertyInfo.id).to.equal(49886644);
        expect(propertyInfo.price).to.equal(505000);
        expect(propertyInfo.postcode).to.equal('TA5 1EL');
        expect(propertyInfo.bedroomCount).to.equal(3);
        expect(propertyInfo.type).to.equal('detached');
        });
    })


});

if(runIntegration){
describe('Integration', () => {
  
    it('should be able to access Rightmove',() => {
        let property = new RightmoveProperty(77934770);
        return property.get().then(propertyInfo => {
        expect(propertyInfo.id).to.equal(77934770);
        expect(propertyInfo.price).to.equal(184950);
        expect(propertyInfo.postcode).to.equal('TA6 3TH');
        expect(propertyInfo.bedroomCount).to.equal(3);
        expect(propertyInfo.type).to.equal('Semi-Detached');
        });
    })

    it('should be able to access Zoopla', () => {
        let property = new ZooplaProperty(50026394);
        return property.get().then((propertyInfo:IProperty) =>{
        expect(propertyInfo.id).to.equal(50026394);
        expect(propertyInfo.price).to.equal(265000);
        expect(propertyInfo.postcode).to.equal('TA5 1JT');
        expect(propertyInfo.bedroomCount).to.equal(3);
        expect(propertyInfo.type).to.equal('detached');
        });
    })



});
}


}