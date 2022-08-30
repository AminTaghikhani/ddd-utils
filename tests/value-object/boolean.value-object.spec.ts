import * as lodash from 'lodash';
import { BooleanValueObject } from '../../src/value-object';

describe('Boolean value object test suite', function () {
  it('should create a value object', function () {
    const obj = BooleanValueObject.create(true);
    expect(obj).toBeDefined();
  });
  it('should create a truthy value object', function () {
    const obj = BooleanValueObject.createTruthy();
    expect(obj).toBeDefined();
    expect(obj.value).toBeTruthy();
  });
  it('should create a falsy value object', function () {
    const obj = BooleanValueObject.createFalsy();
    expect(obj).toBeDefined();
    expect(obj.value).toBeFalsy();
  });
  it('should create a truthy value object and then toggle it to falsy', function () {
    const obj = BooleanValueObject.createTruthy();
    expect(obj).toBeDefined();
    expect(obj.value).toBeTruthy();
    obj.toggle();
    expect(obj.value).toBeFalsy();
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
  it('should create array of value object with different value and sort them', function () {
    const objs = [
      BooleanValueObject.createFalsy(),
      BooleanValueObject.createTruthy(),
    ];
    const unsorted = lodash.cloneDeep(objs);
    objs.sort((a, b) => a.compareTo(b));
    for (let i = 0; i < objs.length; i++) {
      console.log(objs[i], unsorted[i]);
      expect(objs[i].toEqual(unsorted[i])).toBeFalsy();
    }
  });
});
