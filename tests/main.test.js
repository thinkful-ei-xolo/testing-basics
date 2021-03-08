const expect = require('chai').expect;
const addNumbers = require('../src/main');



describe("addNumbers()", ()=>{
    it("it should return the sum of 2 numbers passed in as a and b",()=>{
        let a = 7;
        let b = 3;

        const expected = a+b;
        const actual = addNumbers(a,b);
        expect(actual).to.equal(expected);

    });
    it("it should return missing value if nothing is passed in",()=>{
        const expected = 'missing value';
        const actual = addNumbers();
        expect(actual).to.equal(expected);

    });
    it("it should return incorrect input if a non numerical value is entered",()=>{
        const expected = 'incorrect input';
        const actual = addNumbers("the", "bear");
        expect(actual).to.equal(expected);

    });
});
