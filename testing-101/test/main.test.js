const { assert: { equal, deepEqual, notEqual, isFunction, isObject } } = require('chai');
const { getCustomer } = require('../js/main');

describe('main', () => {
  describe('is there a function?', () => {
    it('should exist', () => {
      isFunction(getCustomer);
    });

    it('should return an object', () => {
      getCustomer("615-555-5309")
      .then( (customer) => {
        isObject(customer, "Returns an object")
      })
    });

    it('should return customer number', () => {
      getCustomer("615-555-5309")
      .then( (customer) => {
        deepEqual(customer, {first_name: "Danny", last_name: "Elfman"});
      });
    });
  });
});
