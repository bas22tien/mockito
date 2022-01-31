var MyClass =  require("../src/myClass");
var myObject = new MyClass();
var chai = require("chai")
var sinon = require("sinon")

var expect = chai.expect;

describe("Test suit",function(){
        it("test the add method",function(){
                expect(myObject.add(1,2)).to.be.equal(3)
        })
        it("mock test the sayHello method",function(){
                var mock = sinon.mock(myObject);
                var expectation = mock.expects("sayHello");
                expectation.exactly(1);
                expectation.withArgs("hello");
                myObject.callAnotherFn(10,20);
                mock.verify();

        })
        it("spy test the add method",function(){
                var spy = sinon.spy(myObject, "add");
                myObject.callAnotherFn(10,20);
                sinon.assert.calledOnce(spy);
                expect(spy.calledOnce).to.be.true;
                expect(spy.calledWith(10,20)).to.be.true;
                

        })

})