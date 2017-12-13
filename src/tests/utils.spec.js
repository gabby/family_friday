const chai = require('chai');
var expect = chai.expect; 

const { findGroupSize, generateGroups } = require('../utils')


describe('findGroupSize', function(){
  let randomNum = Math.ceil(Math.random() * 99)
  let size = findGroupSize(randomNum)
  it ('returns a number', function(){
    expect(size).to.be.an('number')
  })
});


