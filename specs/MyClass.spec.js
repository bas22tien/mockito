var MyClass =  require("../src/myClass");
var myObject = new MyClass();
var chai = require("chai")
var expect = chai.expect;

describe("Test suit",function(){
	it("test the add method",function(){
        expect(myObject.add(1,2)).to.be.equal(3)
     })
})