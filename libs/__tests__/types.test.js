import * as Type from '../types'

// FIXTURES -------------------------------------------------------------------
import { pickPassingCase } from './utils/types.fixtures'

const TEST_SUITES = {
  Nullish: [
    'nullish',
  ],
  Nill: [
    'nullish',
  ],
  Primitive: [
    'numbers_(?!obj)', 'strings_(?!obj)', 'booleans_(?!obj)', 'symbols', 'bigints',
  ],
  Falsy: [
    'nullish',             'numbers_nan',       'numbers_000',
    'strings_000',         'booleans_000',      'bigints_000',
  ],
  Truthy: [
    'numbers_(?!nan|000)', 'strings_(?!000)',   'booleans_(?!000)',
    'bigints_(?!000)',     'symbol',            'functions',
    'arrays', 'objects', 'generators', 'sets', 'maps', 'errors', 'dates',
    'regexp', 'typed', 'buffers', 'weakrefs', 'promise', 'misc'
  ],
  Empty: [
    'nullish',             'numbers_nan',       'numbers_obj',
    'numbers_000',         'strings_obj0',      'strings_000',
    'booleans_obj',        'booleans_000',      'bigints_000',
    'arrays_00[12]',       'objects_00[15789]', 'objects_010',
    '^sets_00[12]',        '^maps_00[12]',      'typed_..[12]',
    'errors', 'dates', 'regexp', 'weakmap', 'weakset', 'buffers',
    'weakrefs', 'promise', 'misc'
  ],
  Numeric: [
    'numbers_\\d+',      'strings_00[23]',
  ],
  Integer: [
    'numbers_00[014-9]', 'numbers_0[1-3][0-9]',
  ],
  Int: [
    'numbers_00[014-9]', 'numbers_0[1-3][0-9]',
  ],
  Int8: [
    'numbers_00[0145]',
  ],
  Uint8: [
    'numbers_000p',      'numbers_00[1579]',
  ],
  Int16: [
    'numbers_00[014-9]', 'numbers_01[0-3]',
  ],
  Uint16: [
    'numbers_000p',      'numbers_00[1579]', 'numbers_01[1357]',
  ],
  Int32: [
    'numbers_00[014-9]', 'numbers_01[0-9]',  'numbers_02[0-1]',
  ],
  Uint32: [
    'numbers_000p',      'numbers_00[1579]', 'numbers_01[13579]',
    'numbers_02[135]'
  ],
  Int64: [
    'numbers_00[014-9]', 'numbers_01[0-9]',  'numbers_02[0-9]',
    'bigints_00[0-3]',
  ],
  Uint64: [
    'numbers_000p',      'numbers_00[1579]', 'numbers_01[13579]',
    'numbers_02[13579]', 'bigints_00[01357]'
  ],
  Double: [
    'numbers_\\d+'
  ],
  Dictionary: [
    'objects_005'
  ],
  Record: [
    'object'
  ],
  Iterator: [
    'generators', 'objects_006'
  ],
  Iterable: [
    'strings', 'arrays', 'objects_00[78]', 'generators', '^sets', '^maps', 'typed'
  ],
}


// TEST RUNNER ----------------------------------------------------------------
describe('metajs/types', () => {
  describe.each(Object.entries(TEST_SUITES).map(([name, passing]) => (
    { name, passing, type: Type[name] }
  )))('$name', ({ name, type, passing}) => {
    test.concurrent.each(pickPassingCase(passing))(
      `${name} instanceof $title === $result`,
      ({ value, result }) => {
        expect(value instanceof type).toBe(result)
      }
    )
  })
})