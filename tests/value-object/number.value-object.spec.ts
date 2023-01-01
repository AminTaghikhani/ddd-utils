import { NumberValueObject } from '../../src';

describe('Number value object test suite', function () {
  it('should create a value object', function () {
    const obj = new NumberValueObject(1000);
    expect(obj).toBeDefined();
    expect(obj.value).toBe(1000);
  });
  it('should create a value object from string', function () {
    const obj = new NumberValueObject('1000');
    expect(obj).toBeDefined();
    expect(obj.value).toBe(1000);
  });
  it('should create a value object from array', function () {
    const obj = new NumberValueObject([1,0,0,0]);
    expect(obj).toBeDefined();
    expect(obj.value).toBe(1000);
  });
  it('should create a value object from boolean', function () {
    const obj = new NumberValueObject(true);
    expect(obj).toBeDefined();
    expect(obj.value).toBe(1);
  });
  it('should create two value object and check equality', function(){
    const obj1 = new NumberValueObject(1000);
    const obj2 = new NumberValueObject('1000');
    expect(obj1.toEqual(obj2)).toBeTruthy()
  })
  it('should create value objects and compare them', function(){
    const obj1 = new NumberValueObject(1000);
    const obj2 = new NumberValueObject('3000');
    const obj3 = new NumberValueObject([1,5,2,7]);
    const obj4 = new NumberValueObject(false);
    const objs = [obj1, obj2, obj3, obj4]
    objs.sort((left, right)=> left.compareTo(right));
    expect(objs[0].toEqual(obj4)).toBeTruthy()
    expect(objs[1].toEqual(obj1)).toBeTruthy()
    expect(objs[2].toEqual(obj3)).toBeTruthy()
    expect(objs[3].toEqual(obj2)).toBeTruthy()
  })
});
