const BASE_VALUES = {
  // Nullish
  nullish_001:   { title: '                             null', value: null },
  nullish_002:   { title: '                        undefined', value: undefined },
  
  // Number
  numbers_nan:   { title: '                              NaN', value:  NaN },
  numbers_infm:  { title: '                        -Infinity', value: -Infinity },
  numbers_infp:  { title: '                         Infinity', value:  Infinity },
  numbers_000p:  { title: '                                0', value:  0 },
  numbers_000m:  { title: '                               -0', value: -0 },
  numbers_001:   { title: '                                1', value:  1 },
  numbers_002:   { title: '                             -1.5', value: -1.5 },
  numbers_003:   { title: '                              1.5', value:  1.5 },
  numbers_004:   { title: '                             -128', value: -(2**7) },
  numbers_005:   { title: '                              128', value:  (2**7) },
  numbers_006:   { title: '                             -129', value: -(2**7 + 1) },
  numbers_007:   { title: '                              129', value:  (2**7 + 1) },
  numbers_008:   { title: '                             -256', value: -(2**8) },
  numbers_009:   { title: '                              256', value:  (2**8) },
  numbers_010:   { title: '                             -257', value: -(2**8 + 1) },
  numbers_011:   { title: '                              257', value:  (2**8 + 1) },
  numbers_012:   { title: '                          -32_768', value: -(2**15) },
  numbers_013:   { title: '                           32_768', value:  (2**15) },
  numbers_014:   { title: '                          -32_769', value: -(2**15 + 1) },
  numbers_015:   { title: '                           32_769', value:  (2**15 + 1) },
  numbers_016:   { title: '                          -65_536', value: -(2**16) },
  numbers_017:   { title: '                           65_536', value:  (2**16) },
  numbers_018:   { title: '                          -65_537', value: -(2**16 + 1) },
  numbers_019:   { title: '                           65_537', value:  (2**16 + 1) },
  numbers_020:   { title: '                   -2_147_483_648', value: -(2**31) },
  numbers_021:   { title: '                    2_147_483_648', value:  (2**31) },
  numbers_022:   { title: '                   -2_147_483_649', value: -(2**31 + 1) },
  numbers_023:   { title: '                    2_147_483_649', value:  (2**31 + 1) },
  numbers_024:   { title: '                   -4_294_967_296', value: -(2**32) },
  numbers_025:   { title: '                    4_294_967_296', value:  (2**32) },
  numbers_026:   { title: '                   -4_294_967_297', value: -(2**32 + 1) },
  numbers_027:   { title: '                    4_294_967_297', value:  (2**32 + 1) },
  numbers_028:   { title: '                 MIN_SAFE_INTEGER', value: -(2**53 - 1) },
  numbers_029:   { title: '                 MAX_SAFE_INTEGER', value:  (2**53 - 1) },
  numbers_030:   { title: '             MIN_SAFE_INTEGER - 1', value: -(2**53) },
  numbers_031:   { title: '             MAX_SAFE_INTEGER + 1', value:  (2**53) },
  numbers_032:   { title: '                       -MAX_VALUE', value: -Number.MAX_VALUE },
  numbers_033:   { title: '                        MAX_VALUE', value:  Number.MAX_VALUE },
  
  // String
  strings_000:   { title: '                               ""', value: "" },
  strings_001:   { title: '                            "foo"', value: "foo" },
  strings_002:   { title: '                            "123"', value: "123" },
  strings_003:   { title: '                            "0.3"', value: "0.3" },
  
  // Boolean
  booleans_000:  { title: '                            false', value: false },
  booleans_001:  { title: '                             true', value: true },
  
  // Symbol
  symbols_001:   { title: '                         Symbol()', value: Symbol() },
  
  // BigInt
  bigints_000:   { title: '                               0n', value: 0n },
  bigints_001:   { title: '                               1n', value: 1n },
  bigints_002:   { title: '         -9_223372_036854_775808n', value: -(2n**63n) },
  bigints_003:   { title: '          9_223372_036854_775808n', value:  (2n**63n) },
  bigints_004:   { title: '         -9_223372_036854_775809n', value: -(2n**63n + 1n) },
  bigints_005:   { title: '          9_223372_036854_775809n', value:  (2n**63n + 1n) },
  bigints_006:   { title: '        -18_446744_073709_551616n', value: -(2n**64n) },
  bigints_007:   { title: '         18_446744_073709_551616n', value:  (2n**64n) },
  bigints_008:   { title: '        -18_446744_073709_551617n', value: -(2n**64n + 1n) },
  bigints_009:   { title: '         18_446744_073709_551617n', value:  (2n**64n + 1n) },
  
  // Function
  functions_001: { title: '                         () => {}', value: () => {} },
  
  // Array
  arrays_001:    { title: '                               []', value: [] },
  arrays_002:    { title: '                      new Array()', value: new Array() },
  arrays_003:    { title: '                     new Array(1)', value: new Array(1) },
  arrays_004:    { title: '                           [null]', value: [null] },
  arrays_005:    { title: '                      [undefined]', value: [undefined] },
  arrays_006:    { title: '                        [1, 2, 3]', value: [1, 2, 3] },
  
  // Object
  objects_001:   { title: '                               {}', value: {} },
  objects_002:   { title: '                        {a: null}', value: {a: null} },
  objects_003:   { title: '                   {a: undefined}', value: {a: undefined} },
  objects_004:   { title: '                           {a: 1}', value: {a: 1} },
  objects_005:   { title: '              Object.create(null)', value: Object.create(null) },
  objects_006:   { title: '                    { next() {} }', value: { next() {} } },
  objects_007:   { title: '             (function * () {})()', value: (function * () {})() },
  objects_008:   { title: '         {*[Symbol.iterator](){}}', value: {*[Symbol.iterator](){} } },
  objects_009:   { title: '     {[Symbol.iterator]:()=>Iter}', value: {[Symbol.iterator]:()=>({next(){}}) } },
  objects_010:   { title: '     {[Symbol.iterator]:()=>void}', value: {[Symbol.iterator](){} } },

  // Set
  sets_001:      { title: '                        new Set()', value: new Set() },
  sets_002:      { title: '                      new Set([])', value: new Set([]) },
  sets_003:      { title: '                     new Set([0])', value: new Set([0]) },
  sets_004:      { title: '                     new Set([1])', value: new Set([1]) },
  sets_005:      { title: '                  new Set([null])', value: new Set([null]) },
  sets_006:      { title: '             new Set([undefined])', value: new Set([undefined]) },

  // Map
  maps_001:      { title: '                        new Map()', value: new Map() },
  maps_002:      { title: '                      new Map([])', value: new Map([]) },
  maps_003:      { title: '                new Map([[0, 0]])', value: new Map([[0, 0]]) },
  maps_004:      { title: '                new Map([[1, 0]])', value: new Map([[1, 0]]) },
  maps_005:      { title: '                new Map([[1, 1]])', value: new Map([[1, 1]]) },
  maps_006:      { title: '          new Map([[null, null]])', value: new Map([[null, null]]) },
  maps_007:      { title: 'new Map([[undefined, undefined]])', value: new Map([[undefined, undefined]]) },
}

const toTrue   = (obj) => ({ ...obj, result: true  })
const toFalse  = (obj) => ({ ...obj, result: false })
const matchKey = (key, keys) => keys.some((k) => new RegExp(k).test(key))

export const pickPassingCase = (keys) => Object.entries(BASE_VALUES).map(
  ([k, v]) => (matchKey(k, keys) ? toTrue(v) : toFalse(v))
)