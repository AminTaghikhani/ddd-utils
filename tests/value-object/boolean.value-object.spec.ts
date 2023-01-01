import { BooleanValueObject } from '../../src';

describe('Boolean value object test suite', function () {
  it('should create a value object', function () {
    const obj = new BooleanValueObject(true);
    expect(obj).toBeDefined();
    expect(obj.value).toBe(true);
  });
  it('should create a value object from string', function () {
    const obj = new BooleanValueObject('true');
    expect(obj).toBeDefined();
    expect(obj.value).toBe(true);
  });
  it('should create a value object from number', function () {
    const obj = new BooleanValueObject(10);
    expect(obj).toBeDefined();
    expect(obj.value).toBe(true);
  });
  it('should create a truthy value object and then toggle it to falsy', function () {
    const obj = BooleanValueObject.createTruthy();
    expect(obj).toBeDefined();
    expect(obj.value).toBeTruthy();
    obj.toggle();
    expect(obj.value).toBeFalsy();
  });
  it('should create two value object with same value(true) and check equalTo', function () {
    const obj1 = BooleanValueObject.createTruthy();
    const obj2 = BooleanValueObject.createTruthy();
    expect(obj1).toBeDefined();
    expect(obj2).toBeDefined();
    expect(obj1.toEqual(obj2)).toBeTruthy();
  });
  it('should create two value object with same value(false) and check equalTo', function () {
    const obj1 = BooleanValueObject.createFalsy();
    const obj2 = BooleanValueObject.createFalsy();
    expect(obj1).toBeDefined();
    expect(obj2).toBeDefined();
    expect(obj1.toEqual(obj2)).toBeTruthy();
  });
  it('should create two value object with different value and check equalTo', function () {
    const obj1 = BooleanValueObject.createTruthy();
    const obj2 = BooleanValueObject.createFalsy();
    expect(obj1).toBeDefined();
    expect(obj2).toBeDefined();
    expect(obj1.toEqual(obj2)).toBeFalsy();
  });
});
