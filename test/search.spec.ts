import { expect, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
use(chaiAsPromised);

import { MockWebPage } from '../src/webpageService';
import { RightmoveSearch } from '../src/rightmoveService';
import { ZooplaSearch } from '../src/zooplaService';
import { ISearchResult } from '../src/searchService';
import { AssertionError } from 'assert';

let runIntegration = false;

describe('Zoopla search', () => {
  
    it('should return property list', () => {
        let search = new ZooplaSearch("BS3 3JJ", new MockWebPage("testdata/zoopla/search/bs33jj.html"));
        return search.get().then((searchResults:ISearchResult[]) =>{
        expect(searchResults[0].id).to.equal(47779888);
        expect(searchResults[10].id).to.equal(50065877);
        expect(searchResults[99].id).to.equal(50050882);
        });
    })

    it('should throw error if cannot find data', async () => {
        let search = new ZooplaSearch("BS3 3JJ", new MockWebPage("testdata/zoopla/search/invalid.html"));
        return expect(search.get()).to.be.rejectedWith(Error);
    })

});

describe('Rightmove search', () => {
  
    it('should return property list', () => {
        let search = new RightmoveSearch("BS3 3JJ", new MockWebPage("testdata/rightmove/search/bs33jj.html"));
        return search.get().then((searchResults:ISearchResult[]) =>{
        expect(searchResults[0].id).to.equal(69114889);
        expect(searchResults[2].id).to.equal(78308129);
        expect(searchResults[24].id).to.equal(69266923);
        });
    })
    
    it('should throw error if cannot find data', async () => {
        let search = new RightmoveSearch("BS3 3JJ", new MockWebPage("testdata/rightmove/search/invalid.html"));
        return expect(search.get()).to.be.rejectedWith(Error);
    })

});

if(runIntegration){
// ...
}