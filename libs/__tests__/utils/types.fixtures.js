const BASE_VALUES = {
  // Nullish
  nullish_001:   { title: '                             null', value: null },
  nullish_002:   { title: '                        undefined', value: undefined },

  // Number
  numbers_obj0:  { title: '                    new Number(0)', value: new Number(0)},
  numbers_obj1:  { title: '                    new Number(1)', value: new Number(1)},
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
  strings_obj0:  { title: '                   new String("")', value: new String('') },
  strings_obj1:  { title: '                new String("bar")', value: new String('bar') },
  strings_000:   { title: '                               ""', value: "" },
  strings_001:   { title: '                            "foo"', value: "foo" },
  strings_002:   { title: '                            "123"', value: "123" },
  strings_003:   { title: '                            "0.3"', value: "0.3" },

  // Boolean
  booleans_obj0: { title: '               new Boolean(false)', value: new Boolean(false) },
  booleans_obj1: { title: '                new Boolean(true)', value: new Boolean(true) },
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
  functions_002: { title: '                   async () => {}', value: async () => {} },
  functions_003: { title: '                   function () {}', value: function () {} },
  functions_004: { title: '                  function* () {}', value: function * () {} },
  functions_005: { title: '             async function () {}', value: async function () {} },
  functions_006: { title: '            async function* () {}', value: async function * () {} },
  functions_007: { title: '                   new Function()', value: new Function() },
  functions_008: { title: '                         class {}', value: class {} },

  // Array
  arrays_001:    { title: '                               []', value: [] },
  arrays_002:    { title: '                      new Array()', value: new Array() },
  arrays_003:    { title: '                     new Array(1)', value: new Array(1) },
  arrays_004:    { title: '                           [null]', value: [null] },
  arrays_005:    { title: '                      [undefined]', value: [undefined] },
  arrays_006:    { title: '                        [1, 2, 3]', value: [1, 2, 3] },

  // TypedArray
  typed_001:     { title: '                  new Int8Array()', value: new Int8Array() },
  typed_002:     { title: '                 new Int8Array(0)', value: new Int8Array(0) },
  typed_003:     { title: '                 new Int8Array(1)', value: new Int8Array(1) },
  typed_004:     { title: '               new Int8Array([0])', value: new Int8Array([0]) },
  typed_005:     { title: '            new Int8Array([1, 2])', value: new Int8Array([1, 2]) },
  typed_011:     { title: '                 new Uint8Array()', value: new Uint8Array() },
  typed_012:     { title: '                new Uint8Array(0)', value: new Uint8Array(0) },
  typed_013:     { title: '                new Uint8Array(1)', value: new Uint8Array(1) },
  typed_014:     { title: '              new Uint8Array([0])', value: new Uint8Array([0]) },
  typed_015:     { title: '           new Uint8Array([1, 2])', value: new Uint8Array([1, 2]) },
  typed_021:     { title: '          new Uint8ClampedArray()', value: new Uint8ClampedArray() },
  typed_022:     { title: '         new Uint8ClampedArray(0)', value: new Uint8ClampedArray(0) },
  typed_023:     { title: '         new Uint8ClampedArray(1)', value: new Uint8ClampedArray(1) },
  typed_024:     { title: '       new Uint8ClampedArray([0])', value: new Uint8ClampedArray([0]) },
  typed_025:     { title: '    new Uint8ClampedArray([1, 2])', value: new Uint8ClampedArray([1, 2]) },
  typed_031:     { title: '                 new Int16Array()', value: new Int16Array() },
  typed_032:     { title: '                new Int16Array(0)', value: new Int16Array(0) },
  typed_033:     { title: '                new Int16Array(1)', value: new Int16Array(1) },
  typed_034:     { title: '              new Int16Array([0])', value: new Int16Array([0]) },
  typed_035:     { title: '           new Int16Array([1, 2])', value: new Int16Array([1, 2]) },
  typed_041:     { title: '                new Uint16Array()', value: new Uint16Array() },
  typed_042:     { title: '               new Uint16Array(0)', value: new Uint16Array(0) },
  typed_043:     { title: '               new Uint16Array(1)', value: new Uint16Array(1) },
  typed_044:     { title: '             new Uint16Array([0])', value: new Uint16Array([0]) },
  typed_045:     { title: '          new Uint16Array([1, 2])', value: new Uint16Array([1, 2]) },
  typed_051:     { title: '                 new Int32Array()', value: new Int32Array() },
  typed_052:     { title: '                new Int32Array(0)', value: new Int32Array(0) },
  typed_053:     { title: '                new Int32Array(1)', value: new Int32Array(1) },
  typed_054:     { title: '              new Int32Array([0])', value: new Int32Array([0]) },
  typed_055:     { title: '           new Int32Array([1, 2])', value: new Int32Array([1, 2]) },
  typed_061:     { title: '                new Uint32Array()', value: new Uint32Array() },
  typed_062:     { title: '               new Uint32Array(0)', value: new Uint32Array(0) },
  typed_063:     { title: '               new Uint32Array(1)', value: new Uint32Array(1) },
  typed_064:     { title: '             new Uint32Array([0])', value: new Uint32Array([0]) },
  typed_065:     { title: '          new Uint32Array([1, 2])', value: new Uint32Array([1, 2]) },
  typed_071:     { title: '               new Float32Array()', value: new Float32Array() },
  typed_072:     { title: '              new Float32Array(0)', value: new Float32Array(0) },
  typed_073:     { title: '              new Float32Array(1)', value: new Float32Array(1) },
  typed_074:     { title: '            new Float32Array([0])', value: new Float32Array([0]) },
  typed_075:     { title: '         new Float32Array([1, 2])', value: new Float32Array([1, 2]) },
  typed_081:     { title: '               new Float64Array()', value: new Float64Array() },
  typed_082:     { title: '              new Float64Array(0)', value: new Float64Array(0) },
  typed_083:     { title: '              new Float64Array(1)', value: new Float64Array(1) },
  typed_084:     { title: '            new Float64Array([0])', value: new Float64Array([0]) },
  typed_085:     { title: '         new Float64Array([1, 2])', value: new Float64Array([1, 2]) },
  typed_091:     { title: '              new BigInt64Array()', value: new BigInt64Array() },
  typed_092:     { title: '             new BigInt64Array(0)', value: new BigInt64Array(0) },
  typed_093:     { title: '             new BigInt64Array(1)', value: new BigInt64Array(1) },
  typed_094:     { title: '          new BigInt64Array([0n])', value: new BigInt64Array([0n]) },
  typed_095:     { title: '      new BigInt64Array([1n, 2n])', value: new BigInt64Array([1n, 2n]) },
  typed_101:     { title: '             new BigUint64Array()', value: new BigUint64Array() },
  typed_102:     { title: '            new BigUint64Array(0)', value: new BigUint64Array(0) },
  typed_103:     { title: '            new BigUint64Array(1)', value: new BigUint64Array(1) },
  typed_104:     { title: '         new BigUint64Array([0n])', value: new BigUint64Array([0n]) },
  typed_105:     { title: '     new BigUint64Array([1n, 2n])', value: new BigUint64Array([1n, 2n]) },

  // Object
  objects_001:   { title: '                               {}', value: {} },
  objects_002:   { title: '                        {a: null}', value: {a: null} },
  objects_003:   { title: '                   {a: undefined}', value: {a: undefined} },
  objects_004:   { title: '                           {a: 1}', value: {a: 1} },
  objects_005:   { title: '              Object.create(null)', value: Object.create(null) },
  objects_006:   { title: '                    { next() {} }', value: { next() {} } },
  objects_007:   { title: '         {*[Symbol.iterator](){}}', value: {*[Symbol.iterator](){} } },
  objects_008:   { title: '     {[Symbol.iterator]:()=>Iter}', value: {[Symbol.iterator]:()=>({next(){}}) } },
  objects_009:   { title: '     {[Symbol.iterator]:()=>void}', value: {[Symbol.iterator](){} } },

  // Generator
  generators_001:{ title: '             (function * () {})()', value: (function * () {})() },

  // Set
  sets_001:      { title: '                        new Set()', value: new Set() },
  sets_002:      { title: '                      new Set([])', value: new Set([]) },
  sets_003:      { title: '                     new Set([0])', value: new Set([0]) },
  sets_004:      { title: '                     new Set([1])', value: new Set([1]) },
  sets_005:      { title: '                  new Set([null])', value: new Set([null]) },
  sets_006:      { title: '             new Set([undefined])', value: new Set([undefined]) },

  // Map
  maps_001:      { title: '                           new Map()', value: new Map() },
  maps_002:      { title: '                         new Map([])', value: new Map([]) },
  maps_003:      { title: '                   new Map([[0, 0]])', value: new Map([[0, 0]]) },
  maps_004:      { title: '                   new Map([[1, 0]])', value: new Map([[1, 0]]) },
  maps_005:      { title: '                   new Map([[1, 1]])', value: new Map([[1, 1]]) },
  maps_006:      { title: '             new Map([[null, null]])', value: new Map([[null, null]]) },
  maps_007:      { title: '   new Map([[undefined, undefined]])', value: new Map([[undefined, undefined]]) },

  // Error
  errors_000:    { title: '                    new Error("msg")', value: new Error('msg') },
  errors_001:    { title: '                 new URIError("msg")', value: new URIError('msg') },
  errors_002:    { title: '                new EvalError("msg")', value: new EvalError('msg') },
  errors_003:    { title: '                new TypeError("msg")', value: new TypeError('msg') },
  errors_004:    { title: '               new RangeError("msg")', value: new RangeError('msg') },
  errors_005:    { title: '              new SyntaxError("msg")', value: new SyntaxError('msg') },
  errors_006:    { title: '           new ReferenceError("msg")', value: new ReferenceError('msg') },
  errors_007:    { title: 'new AggregateError([Error()], "msg")', value: new AggregateError([Error()], 'msg') },

  // Date
  dates_000:     { title: '                          new Date()', value: new Date() },

  // RegExp
  regexp_000:    { title: '                           /foo|bar/', value: /foo|bar/ },
  regexp_001:    { title: '               new RegExp("foo|bar")', value: new RegExp("foo|bar") },

  // WeakMap
  weakmaps_000:  { title: '                       new WeakMap()', value: new WeakMap() },
  weakmaps_001:  { title: '              new WeakMap([[{}, 0]])', value: new WeakMap([[{}, 0]]) },

  // WeakSet
  weaksets_000:  { title: '                       new WeakSet()', value: new WeakSet() },
  weaksets_001:  { title: '                   new WeakSet([{}])', value: new WeakSet([{}]) },

  // WeakRef
  weakrefs_001:  { title: '                     new WeakRef({})', value: new WeakRef({}) },

  // ArrayBuffer
  buffers_000:   { title: '                   new ArrayBuffer()', value: new ArrayBuffer() },
  buffers_001:   { title: '                  new ArrayBuffer(1)', value: new ArrayBuffer(1) },
  buffers_002:   { title: '             new SharedArrayBuffer()', value: new SharedArrayBuffer() },
  buffers_003:   { title: '            new SharedArrayBuffer(1)', value: new SharedArrayBuffer(1) },
  buffers_004:   { title: '     new DataView(new ArrayBuffer())', value: new DataView(new ArrayBuffer()) },
  buffers_005:   { title: '    new DataView(new ArrayBuffer(1))', value: new DataView(new ArrayBuffer(1)) },

  // Promise
  // promise_001:   { title: '               new Promise(() => {})', value: new Promise(() => {}) },
  // promise_002:   { title: '                    Promise.reject()', value: Promise.reject() },
  // promise_002:   { title: '                   Promise.resolve()', value: Promise.resolve() },

  // misc
  misc_001:      { title: '  new FinalizationRegistry(() => {})', value: new FinalizationRegistry(() => {}) }
}

const toTrue   = (obj) => ({ ...obj, result: true  })
const toFalse  = (obj) => ({ ...obj, result: false })
const matchKey = (key, keys) => keys.some((k) => new RegExp(k).test(key))

export default BASE_VALUES
export const pickPassingCase = (keys) => Object.entries(BASE_VALUES).map(
  ([k, v]) => (matchKey(k, keys) ? toTrue(v) : toFalse(v))
)