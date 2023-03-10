import * as PseudoTypes from './types.js'

// CORE API -------------------------------------------------------------------

/**
 * The main API to check if a value is of a given type.
 *
 * ```js
 * const isBar = is(foo, Bar)
 * ```
 *
 * If `foo` and `Bar` are supposed to be identical,
 * a check for identity with `Object.is` will be performed.
 *
 * Primitive values can be checked with:
 *
 * ```js
 * const isNull    = is(null, null)           // true
 * const isUndef   = is(undefined, undefined) // true
 * const isNumber  = is(0, Number)            // true
 * const isString  = is("", String)           // true
 * const isBoolean = is(false, Boolean)       // true
 * const isSymbol  = is(Symbol(), Symbol)     // true
 * const isBigInt  = is(0n, BigInt)           // true
 * ```
 *
 * Some special cases are worth mentioning:
 *
 * ```js
 * const isNaN        = is(NaN, NaN)     // true
 * const isNumber     = is(NaN, Number)  // false
 * const isObject     = is(null, Object) // false
 * const isNullObject = is(Object.create(null), Object) // true
 * ```
 *
 * Also be carful for:
 *
 * ```js
 * const isNumber       = is(Number, Number)         // true
 * const isNumberObject = is(new Number(42), Number) // true
 * const isInfinity     = is(Infinity, Number)       // true
 * ```
 *
 * Which can be solved with the `Double` pseudo type:
 *
 * ```
 * const isNumber       = is(Number, Double)         // false
 * const isNumberObject = is(new Number(42), Double) // false
 * const isNaN          = is(NaN, Double)            // false
 * const isInfinity     = is(Infinity, Double)       // false
 * const isActualNumber = is(0.5, Double)            // true
 * ```
 * @param {*} value The value to check
 * @param {*} type The type to check against
 * @returns {boolean}
 */
function is (value, type) {
  return (
    // Check if value and type are the same things.
    // Especially necessary for value like null, undefined and NaN
    // handy as well for boolean values
    Object.is(value, type) ||

    // Simplest check for regular objects.
    // Remember that instanceof can be easily busted :
    //  - Its behavior can be customized with `Symbol.hasInstance](value)` (See the library's pseudo-types for some examples of that).
    //  - It's not realm safe : `{} instanceof (window.top).Object` can be false
    //  - It is sensitive to prototype forgery
    (type instanceof Object && value instanceof type) ||

    // Handle numbers
    // We enforce NaN to be an invalid number type (even if it's technically a Number)
    (type === Number && typeof value === 'number' && !Number.isNaN(value)) ||

    // Handle other primitive values
    (type === String  && typeof value === 'string') ||
    (type === Symbol  && typeof value === 'symbol') ||
    (type === BigInt  && typeof value === 'bigint') ||
    (type === Boolean && typeof value === 'boolean') ||

    // Handle null prototype object created with `Object.create(null)`
    (type === Object && Object.getPrototypeOf(value ?? {}) === null)
  )
}

// VIRTUAL API ----------------------------------------------------------------

/**
 * The `is` function comes with a virtual API to act as syntactic sugar.
 *
 * The value can be wrapped then tested at any time by calling the type
 * as a property of the is function:
 *
 * ```js
 * const wrapper = is(value)
 * const isBoolean = wrapper.Boolean()
 *
 * const isRegExp = is(/foo/).RegExp()
 * ```
 *
 * It is also possible to reverse the test by picking the Type before the value:
 *
 * ```js
 * const isString = is.String(value)
 *
 * const checkIterable = is.Iterable
 * checkIterable([]) // true
 * ```
 */

const nil = Symbol('nil')

const ProxyAPI = {
  value: nil,

  apply(target, _, args) {
    if (args.length === 0) {
      return new Proxy(target, this)
    }

    const value = this.value === nil ? args.shift() : this.value
    const type  = args.length > 0    ? args.shift() : nil

    if(value !== nil && type !== nil) {
      return target(value, type)
    }

    return new Proxy(target, {...ProxyAPI, value})
  },

  get(target, type) {
    const Type = (
      // Virtually anything available in the global scope can be tested against.
      // This is a convenient way to allow testing native types like this:
      // const isNumber = is.Number(42)
      // const isNumber = is(42).Number()
      type in globalThis ? globalThis[type] :

      // We also provide some convenient pseudo types
      type in PseudoTypes ? PseudoTypes[type] :

      nil
    )

    if (Type !== nil) {
      return (...args) => {
        // `undefined` must be provided explicitly
        const value = args.length > 0 ? args.shift() : this.value

        if (value === nil) {
          throw new ReferenceError('A value must be provided')
        }

        return target(value, Type)
      }
    }
  }
}

// MAIN API EXPORT ------------------------------------------------------------
export default new Proxy(is, ProxyAPI)