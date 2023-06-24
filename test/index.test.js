const { capitalizeText, createArray} = require("../task1")
const chai = require("chai");

const assert = chai.assert;
const expect = chai.expect;

describe("capitalizetext", function (){

  it("return a string when given a string input", function(){
    expect(capitalizeText('ahmed')).to.be.a("string")
  });

  it("capitalize the input string", function(){
    expect((capitalizeText("ahmed"))).to.equal("AHMED");
  });

  it("throws a TypeError when given a number input", function(){
    expect(() => capitalizeText(123)).to.throw(TypeError, "parameter should be string");
  });
});

///////////////////////////////////////////////////
describe("createArray function", function(){
  it("should return an array", function(){
    assert.isArray(createArray(3));
  });

  it("should return an array of length equal to the input number", function (){
    assert.lengthOf(createArray(3), 3);
  });

  it("should return an array that include 1", function(){
    assert.include(createArray(3), 1);
  });

  it("should return an array of length 4 when passed 4 as input", function(){
    assert.lengthOf(createArray(4), 4);
  });

  it("should return an array of length 5 when passed 5 as input", function(){
    assert.lengthOf(createArray(5), 5);
  });

  it("should return an empty array when passed 0 as input", function(){
    assert.lengthOf(createArray(0), 0);
  });
})