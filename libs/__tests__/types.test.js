import { Dictionary, Double, Empty, Falsy, Int, Int16, Int32, Int64, Int8, Integer, Iterable, Iterator, Nill, Nullish, Numeric, Primitive, Truthy, Uint16, Uint32, Uint64, Uint8 } from "../types"

// BASE TEST CASES ------------------------------------------------------------

const BASE_TEST_CASES = {
  // Nullish
  nullish_001:   { name: '                             null', value:                null, result: false },
  nullish_002:   { name: '                        undefined', value:           undefined, result: false },
  
  // Number
  numbers_nan:   { name: '                              NaN', value:                 NaN, result: false },
  numbers_infm:  { name: '                        -Infinity', value:           -Infinity, result: false },
  numbers_infp:  { name: '                         Infinity', value:            Infinity, result: false },
  numbers_000p:  { name: '                                0', value:                   0, result: false },
  numbers_000m:  { name: '                               -0', value:                  -0, result: false },
  numbers_001:   { name: '                                1', value:                   1, result: false },
  numbers_002:   { name: '                             -1.5', value:                -1.5, result: false },
  numbers_003:   { name: '                              1.5', value:                 1.5, result: false },
  numbers_004:   { name: '                             -128', value:             -(2**7), result: false },
  numbers_005:   { name: '                              128', value:              (2**7), result: false },
  numbers_006:   { name: '                             -129', value:         -(2**7 + 1), result: false },
  numbers_007:   { name: '                              129', value:          (2**7 + 1), result: false },
  numbers_008:   { name: '                             -256', value:             -(2**8), result: false },
  numbers_009:   { name: '                              256', value:              (2**8), result: false },
  numbers_010:   { name: '                             -257', value:         -(2**8 + 1), result: false },
  numbers_011:   { name: '                              257', value:          (2**8 + 1), result: false },
  numbers_012:   { name: '                          -32_768', value:            -(2**15), result: false },
  numbers_013:   { name: '                           32_768', value:             (2**15), result: false },
  numbers_014:   { name: '                          -32_769', value:        -(2**15 + 1), result: false },
  numbers_015:   { name: '                           32_769', value:         (2**15 + 1), result: false },
  numbers_016:   { name: '                          -65_536', value:            -(2**16), result: false },
  numbers_017:   { name: '                           65_536', value:             (2**16), result: false },
  numbers_018:   { name: '                          -65_537', value:        -(2**16 + 1), result: false },
  numbers_019:   { name: '                           65_537', value:         (2**16 + 1), result: false },
  numbers_020:   { name: '                   -2_147_483_648', value:            -(2**31), result: false },
  numbers_021:   { name: '                    2_147_483_648', value:             (2**31), result: false },
  numbers_022:   { name: '                   -2_147_483_649', value:        -(2**31 + 1), result: false },
  numbers_023:   { name: '                    2_147_483_649', value:         (2**31 + 1), result: false },
  numbers_024:   { name: '                   -4_294_967_296', value:            -(2**32), result: false },
  numbers_025:   { name: '                    4_294_967_296', value:             (2**32), result: false },
  numbers_026:   { name: '                   -4_294_967_297', value:        -(2**32 + 1), result: false },
  numbers_027:   { name: '                    4_294_967_297', value:         (2**32 + 1), result: false },
  numbers_028:   { name: '                 MIN_SAFE_INTEGER', value:        -(2**53 - 1), result: false },
  numbers_029:   { name: '                 MAX_SAFE_INTEGER', value:         (2**53 - 1), result: false },
  numbers_030:   { name: '             MIN_SAFE_INTEGER - 1', value:            -(2**53), result: false },
  numbers_031:   { name: '             MAX_SAFE_INTEGER + 1', value:             (2**53), result: false },
  numbers_032:   { name: '                       -MAX_VALUE', value:   -Number.MAX_VALUE, result: false },
  numbers_033:   { name: '                        MAX_VALUE', value:    Number.MAX_VALUE, result: false },
  
  // String
  strings_001:   { name: '                               ""', value:                  "", result: false },
  strings_002:   { name: '                            "foo"', value:               "foo", result: false },
  strings_003:   { name: '                            "123"', value:               "123", result: false },
  strings_004:   { name: '                            "0.3"', value:               "0.3", result: false },
  
  // Boolean
  booleans_001:  { name: '                             true', value:                true, result: false },
  booleans_002:  { name: '                            false', value:               false, result: false },
  
  // Symbol
  symbols_001:   { name: '                         Symbol()', value:            Symbol(), result: false },
  
  // BigInt
  bigints_000:   { name: '                               0n', value:                  0n, result: false },
  bigints_001:   { name: '                               1n', value:                  1n, result: false },
  bigints_002:   { name: '         -9_223372_036854_775808n', value:          -(2n**63n), result: false },
  bigints_003:   { name: '          9_223372_036854_775808n', value:           (2n**63n), result: false },
  bigints_004:   { name: '         -9_223372_036854_775809n', value:     -(2n**63n + 1n), result: false },
  bigints_005:   { name: '          9_223372_036854_775809n', value:      (2n**63n + 1n), result: false },
  bigints_006:   { name: '        -18_446744_073709_551616n', value:          -(2n**64n), result: false },
  bigints_007:   { name: '         18_446744_073709_551616n', value:           (2n**64n), result: false },
  bigints_008:   { name: '        -18_446744_073709_551617n', value:     -(2n**64n + 1n), result: false },
  bigints_009:   { name: '         18_446744_073709_551617n', value:      (2n**64n + 1n), result: false },
  
  // Function
  functions_001: { name: '                         () => {}', value:            () => {}, result: false },
  
  // Array
  arrays_001:    { name: '                               []', value:                  [], result: false },
  arrays_002:    { name: '                      new Array()', value:         new Array(), result: false },
  arrays_003:    { name: '                     new Array(1)', value:        new Array(1), result: false },
  arrays_004:    { name: '                           [null]', value:              [null], result: false },
  arrays_005:    { name: '                      [undefined]', value:         [undefined], result: false },
  arrays_006:    { name: '                        [1, 2, 3]', value:           [1, 2, 3], result: false },
  
  // Object
  objects_001:   { name: '                               {}', value:                                {}, result: false },
  objects_002:   { name: '                        {a: null}', value:                         {a: null}, result: false },
  objects_003:   { name: '                   {a: undefined}', value:                    {a: undefined}, result: false },
  objects_004:   { name: '                           {a: 1}', value:                            {a: 1}, result: false },
  objects_005:   { name: '              Object.create(null)', value:               Object.create(null), result: false },
  objects_006:   { name: '                    { next() {} }', value:                     { next() {} }, result: false },
  objects_007:   { name: '             (function * () {})()', value:              (function * () {})(), result: false },
  objects_008:   { name: '         {*[Symbol.iterator](){}}', value:         {*[Symbol.iterator](){} }, result: false },
  objects_009:   { name: '     {[Symbol.iterator]:()=>Iter}', value:{[Symbol.iterator]:()=>({next(){}}) }, result: false },
  objects_010:   { name: '     {[Symbol.iterator]:()=>void}', value:          {[Symbol.iterator](){} }, result: false },

  // Set
  sets_001:      { name: '                        new Set()', value:                         new Set(), result: false },
  sets_002:      { name: '                      new Set([])', value:                       new Set([]), result: false },
  sets_003:      { name: '                     new Set([0])', value:                      new Set([0]), result: false },
  sets_004:      { name: '                     new Set([1])', value:                      new Set([1]), result: false },
  sets_005:      { name: '                  new Set([null])', value:                   new Set([null]), result: false },
  sets_006:      { name: '             new Set([undefined])', value:              new Set([undefined]), result: false },

  // Map
  maps_001:      { name: '                        new Map()', value:                         new Map(), result: false },
  maps_002:      { name: '                      new Map([])', value:                       new Map([]), result: false },
  maps_003:      { name: '                new Map([[0, 0]])', value:                 new Map([[0, 0]]), result: false },
  maps_004:      { name: '                new Map([[1, 0]])', value:                 new Map([[1, 0]]), result: false },
  maps_005:      { name: '                new Map([[1, 1]])', value:                 new Map([[1, 1]]), result: false },
  maps_006:      { name: '          new Map([[null, null]])', value:           new Map([[null, null]]), result: false },
  maps_007:      { name: 'new Map([[undefined, undefined]])', value: new Map([[undefined, undefined]]), result: false },
}

// UTILS ----------------------------------------------------------------------
const toTrue  = (obj) => ({ ...obj, result: true  })
// const toFalse = (obj) => ({ ...obj, result: false })
const matchKey = (key, keys) => keys.some((k) => new RegExp(k).test(key))

const prepareTestData = (keys, transform) => Object.entries(BASE_TEST_CASES).map(
  ([k, v]) => (matchKey(k, keys) ? transform(v) : v)
)

// TEST SUITE -----------------------------------------------------------------
describe('metajs/types', () => {
  describe('Nullish', () => {
    test.each(
      prepareTestData(['nullish'], toTrue)
    )('$name instanceof Nullish === $result', ({ value, result }) => {
      expect(value instanceof Nullish).toBe(result)
    })
  })

  describe('Nill', () => {
    test.each(
      prepareTestData(['nullish'], toTrue)
    )('$name instanceof Nill === $result', ({ value, result }) => {
      expect(value instanceof Nill).toBe(result)
    })
  })

  describe('Primitive', () => {
    test.each(
      prepareTestData([
        'numbers', 'strings', 'booleans', 'symbols', 'bigints'
      ], toTrue)
    )('$name instanceof Primitive === $result', ({ value, result }) => {
      expect(value instanceof Primitive).toBe(result)
    })
  })

  describe('Falsy', () => {
    test.each(
      prepareTestData([
        'nullish',
        'numbers_nan',
        'numbers_000',
        'strings_001',
        'booleans_002',
        'bigints_000',
      ], toTrue)
    )('$name instanceof Falsy === $result', ({ value, result }) => {
      expect(value instanceof Falsy).toBe(result)
    })
  })

  describe('Truthy', () => {
    test.each(
      prepareTestData([
        'numbers_inf',
        'numbers_00[1-9]',
        'numbers_0[1-9][0-9]',
        'strings_00[2-4]',
        'booleans_001',
        'symbol',
        'bigints_00[1-9]',
        'functions',
        'arrays',
        'objects',
        'sets',
        'maps',
      ], toTrue)
    )('$name instanceof Truthy === $result', ({ value, result }) => {
      expect(value instanceof Truthy).toBe(result)
    })
  })

  describe('Empty', () => {
    test.each(
      prepareTestData([
        'nullish',
        'numbers_nan',
        'numbers_000',
        'strings_001',
        'booleans_002',
        'bigints_000',
        'arrays_00[12]',
        'objects_00[1589]',
        'objects_010',
        'sets_00[12]',
        'maps_00[12]',
      ], toTrue)
    )('$name instanceof Empty === $result', ({ value, result }) => {
      expect(value instanceof Empty).toBe(result)
    })
  })

  describe('Numeric', () => {
    test.each(
      prepareTestData([
        'numbers_\\d+', 
        'strings_00[3-4]',
      ], toTrue)
    )('$name instanceof Numeric === $result', ({ value, result }) => {
      expect(value instanceof Numeric).toBe(result)
    })
  })

  describe('Integer', () => {
    test.each(
      prepareTestData([
        'numbers_00[0-14-9]',
        'numbers_0[1-3][0-9]',
      ], toTrue)
    )('$name instanceof Integer === $result', ({ value, result }) => {
      expect(value instanceof Integer).toBe(result)
    })
  })

  describe('Int', () => {
    test.each(
      prepareTestData([
        'numbers_00[0-14-9]',
        'numbers_0[1-3][0-9]',
      ], toTrue)
    )('$name instanceof Int === $result', ({ value, result }) => {
      expect(value instanceof Int).toBe(result)
    })
  })

  describe('Int8', () => {
    test.each(
      prepareTestData([
        'numbers_00[0-14-5]',
      ], toTrue)
    )('$name instanceof Int8 === $result', ({ value, result }) => {
      expect(value instanceof Int8).toBe(result)
    })
  })

  describe('UInt8', () => {
    test.each(
      prepareTestData([
        'numbers_000p',
        'numbers_00[1579]',
      ], toTrue)
    )('$name instanceof Uint8 === $result', ({ value, result }) => {
      expect(value instanceof Uint8).toBe(result)
    })
  })

  describe('Int16', () => {
    test.each(
      prepareTestData([
        'numbers_00[0-14-9]',
        'numbers_01[0-3]',
      ], toTrue)
    )('$name instanceof Int16 === $result', ({ value, result }) => {
      expect(value instanceof Int16).toBe(result)
    })
  })

  describe('UInt16', () => {
    test.each(
      prepareTestData([
        'numbers_000p',
        'numbers_00[1579]',
        'numbers_01[1357]',
      ], toTrue)
    )('$name instanceof Uint16 === $result', ({ value, result }) => {
      expect(value instanceof Uint16).toBe(result)
    })
  })

  describe('Int32', () => {
    test.each(
      prepareTestData([
        'numbers_00[0-14-9]',
        'numbers_01[0-9]',
        'numbers_02[0-1]',
      ], toTrue)
    )('$name instanceof Int32 === $result', ({ value, result }) => {
      expect(value instanceof Int32).toBe(result)
    })
  })

  describe('Uint32', () => {
    test.each(
      prepareTestData([
        'numbers_000p',
        'numbers_00[1579]',
        'numbers_01[13579]',
        'numbers_02[135]',
      ], toTrue)
    )('$name instanceof Uint32 === $result', ({ value, result }) => {
      expect(value instanceof Uint32).toBe(result)
    })
  })

  describe('Int64', () => {
    test.each(
      prepareTestData([
        'numbers_00[0-14-9]',
        'numbers_01[0-9]',
        'numbers_02[0-9]',
        'bigints_00[0-3]'
      ], toTrue)
    )('$name instanceof Int64 === $result', ({ value, result }) => {
      expect(value instanceof Int64).toBe(result)
    })
  })

  describe('Uint64', () => {
    test.each(
      prepareTestData([
        'numbers_000p',
        'numbers_00[1579]',
        'numbers_01[13579]',
        'numbers_02[13579]',
        'bigints_00[01357]'
      ], toTrue)
    )('$name instanceof Uint64 === $result', ({ value, result }) => {
      expect(value instanceof Uint64).toBe(result)
    })
  })

  describe('Double', () => {
    test.each(
      prepareTestData([
        'numbers_\\d+',
      ], toTrue)
    )('$name instanceof Double === $result', ({ value, result }) => {
      expect(value instanceof Double).toBe(result)
    })
  })

  describe('Dictionary', () => {
    test.each(
      prepareTestData([
        'objects_005',
      ], toTrue)
    )('$name instanceof Dictionary === $result', ({ value, result }) => {
      expect(value instanceof Dictionary).toBe(result)
    })
  })

  describe('Iterator', () => {
    test.each(
      prepareTestData([
        'objects_00[67]',
      ], toTrue)
    )('$name instanceof Iterator === $result', ({ value, result }) => {
      expect(value instanceof Iterator).toBe(result)
    })
  })

  describe('Iterable', () => {
    test.each(
      prepareTestData([
        'strings',
        'arrays',
        'objects_00[789]',
        'sets',
        'maps'
      ], toTrue)
    )('$name instanceof Iterable === $result', ({ value, result }) => {
      expect(value instanceof Iterable).toBe(result)
    })
  })
})