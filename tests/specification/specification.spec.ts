import {BetweenSpecification, MinLengthSpecification} from '../../src'

describe('specification test', ()=>{
  test('between specification', ()=>{
    const specification = new BetweenSpecification(1, 10) 
    expect(specification.isSatisfiedBy(5)).toBeTruthy()
  })
  test('between specification && and specification', ()=>{
    const specification4_10 = new BetweenSpecification(4, 10) 
    const specification1_6 = new BetweenSpecification(1, 6) 
    const isSatisfiedA = specification1_6.and(specification4_10).isSatisfiedBy(5)
    expect(isSatisfiedA).toBeTruthy()
    const isSatisfiedB = specification1_6.and(specification4_10).isSatisfiedBy(7)
    expect(isSatisfiedB).toBeFalsy()
  })
  test('min length Specification', ()=>{
    const array = [1,2,3,4]
    const str = '1234'
    let specification = new MinLengthSpecification(3);
    expect(specification.isSatisfiedBy(array)).toBeTruthy();
    expect(specification.isSatisfiedBy(str)).toBeTruthy();
    specification = new MinLengthSpecification(5);
    expect(specification.isSatisfiedBy(array)).toBeFalsy();
    expect(specification.isSatisfiedBy(str)).toBeFalsy();
  })
})
