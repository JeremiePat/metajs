import is from '../is'

// FIXTURES -------------------------------------------------------------------
import BASE_VALUES, { pickPassingCase } from './utils/types.fixtures'

const TEST_SUITES = {
  AggregateError:    [ 'errors_007' ],
  Array:             [ 'arrays' ],
  BigInt:            [ 'bigints' ],
  BigInt64Array:     [ 'typed_09' ],
  BigUint64Array:    [ 'typed_10' ],
  Boolean:           [ 'booleans' ],
  Date:              [ 'dates' ],
  Error:             [ 'errors' ],
  EvalError:         [ 'errors_002' ],
  Float32Array:      [ 'typed_07' ],
  Float64Array:      [ 'typed_08' ],
  Function:          [ 'functions' ],
  Int16Array:        [ 'typed_03' ],
  Int32Array:        [ 'typed_05' ],
  Int8Array:         [ 'typed_00' ],
  Map:               [ '^maps' ],
  Number:            [ 'numbers_(?!nan)' ],
  RangeError:        [ 'errors_004' ],
  ReferenceError:    [ 'errors_006' ],
  RegExp:            [ 'regexp' ],
  Set:               [ '^sets' ],
  String:            [ 'strings' ],
  Symbol:            [ 'symbols' ],
  SyntaxError:       [ 'errors_005' ],
  TypeError:         [ 'errors_003' ],
  Uint16Array:       [ 'typed_04' ],
  Uint32Array:       [ 'typed_06' ],
  Uint8Array:        [ 'typed_01' ],
  Uint8ClampedArray: [ 'typed_02' ],
  URIError:          [ 'errors_001' ],
  WeakMap:           [ 'weakmaps' ],
  Object: [
    'booleans_obj', 'numbers_obj', 'strings_obj', 'arrays', 'buffers', 'dates',
    'errors', 'function', 'generators', 'maps', 'misc', 'objects', 'regexp',
    'sets', 'typed', 'weakmaps', 'weakrefs'
  ],
}

// TEST RUNNER ----------------------------------------------------------------
describe('metajs/is', () => {
  describe('Identity check', () => {
    test.concurrent.each([
      ...Object.keys(globalThis).map(k => ({ title: k.padStart(36, ' '), value: globalThis[k]})),
      ...Object.values(BASE_VALUES)
    ])(
      'is($title, $title) === true',
      ({ value }) => {
        expect(is(value, value)).toBe(true)
      }
    )
  })

  describe.each(Object.entries(TEST_SUITES).map(([name, passing]) => (
    { name, passing, type: globalThis[name] }
  )))('$name', ({ name, type, passing}) => {
    test.each(pickPassingCase(passing))(
      `is($title, ${name}) === $result`,
      ({ value, result }) => {
        expect(is(value, type)).toBe(result)
      }
    )
  })
})