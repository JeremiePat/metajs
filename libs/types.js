/**
 * @module metajs/type
 * 
 * The type module provide a set of useful pseudo-type that can be conveniently
 * used with the instanceof operator to check the type of any given value
 * 
 * ```js
 * console.log('42' instanceof Numeric) // true
 * ```
 */

// BASICS ---------------------------------------------------------------------
/**
 * In many cases, the nuance between undefined and null is unnecessary. The
 * Nullish (or alias Nill) pseudo-type allow to easily check for both in one go.
 * 
 * ```js
 * console.log(null instanceof Nullish)      // true
 * console.log(undefined instanceof Nullish) // true
 * ```
 */
export const Nullish = {
  [Symbol.hasInstance]: (value) => (value === undefined || value === null)
}

/** Just a convenient alias */
export const Nill = Nullish

/**
 * Allow to check is a value is an ECMAScript primitive.
 * 
 * As of ES2020, ES primitive are Boolean, Number, String, Symbol and BigInt
 * Technically, undefined and null are also primitive values but due to their
 * nature, the metajs lib assume to special case them through the Nullish
 * pseudo-type. In other words is you want to check for all possible ES
 * primitive, you'll have to opt-in yourself for null and undefined rather than
 * having to opt-out from them if you want to check for a non Nullish primitive.
 * 
 * ```js 
 * console.log(42 instanceof Primitive)        // true
 * console.log(42n instance of Primitive)      // true
 * console.log('str' instanceof Primitive)     // true
 * console.log(false instanceof Primitive)     // true
 * console.log(Symbol() instanceof Primitive)  // true
 * 
 * // All other case are false
 * console.log(undefined instanceof Primitive) // false
 * console.log(null instanceof Primitive)      // false
 * console.log(() => {} instanceof Primitive)  // false
 * console.log([] instanceof Primitive)        // false
 * console.log({} instanceof Primitive)        // false
 * ```
 * 
 */
export const Primitive = {
  [Symbol.hasInstance]: (value) => (
    typeof value === 'number'  ||
    typeof value === 'string'  ||
    typeof value === 'boolean' ||
    typeof value === 'bigint'  ||
    typeof value === 'symbol'
  )
}

// PSEUDO NUMBER TYPE ---------------------------------------------------------
//
// ECMAScript provide only 2 ways to represent number, the types Number (for
// both integer and float number for up to a Uint32 size) and BigInt for very
// large integer.
// 
// The following pseudo-type allow to be a little bit more specific about the
// nature of the numbers we want to use.
//
// NOTE: For all the pseudo type provided here, NaN will never be considered
// as a valid number. Testing NaN against any of those pseudo type will always
// return false.

/**
 * Allow to check if a value is a valid Numeric value
 * 
 * A numeric value is a value (String or Number), that can be safely cast
 * as a Number (It will never be NaN).
 * 
 * BigInt are purposely not included in that definition of Numeric. Note that
 * we also purposefully exclude the empty string (that can be safely cast to 0)
 * and the Infinity number from matching that pseudo type.
 */
export const Numeric = {
  [Symbol.hasInstance]: (value) => (
    ((typeof value === 'number' && Number.isFinite(value)) || 
     (typeof value === 'string' && value.length > 0)) &&
    Number(value) === Number(value)
  )
}

/**
 * Check is a given Number is an Integer
 */
export const Integer = {
  [Symbol.hasInstance]: (value) => Number.isInteger(value)
}

/** Just a convenient alias */
export const Int = Integer

/**
 * Check integer bit precision
 * 
 * While ECMAScript can represent integers from -(2**53 - 1) to 2**53 - 1
 * (IEEE-754 double precision), it is convenient to be able to check if a given
 * number is an integer in the boundaries of a specific bit length.
 * 
 * Note that because of the limit in ECMAScript number representation, any integer
 * represented beyond the range ±(2**53 - 1) have to be a BigInt which is
 * taken into account into the Int64 and Uint64 pseudo-type :
 * 
 * ```js
 * console.log((2**53 - 1) instance of Int64)   // true
 * console.log(2**53 instanceof Int64)          // false as Number
 * console.log(2n**53n instanceof Int64)        // true as BigInt
 * console.log((2n**64n + 1n) instanceof Int64) // false
 * ```
 */
export const Int8 = { [Symbol.hasInstance]: (value) => (
  Number.isInteger(value) && -(2**7) <= value && value <= (2**7)
)}

export const Uint8 = { [Symbol.hasInstance]: (value) => (
  Number.isInteger(value) && (Object.is(value, 0) || 0 < value) && value <= (2**8)
)}

export const Int16 = { [Symbol.hasInstance]: (value) => (
  Number.isInteger(value) && -(2**15) <= value && value <= (2**15)
)}

export const Uint16 = { [Symbol.hasInstance]: (value) => (
  Number.isInteger(value) && (Object.is(value, 0) || 0 < value) && value <= 2**16
)}

export const Int32 = { [Symbol.hasInstance]: (value) => (
  Number.isInteger(value) && -(2**31) <= value && value <= (2**31)
)}

export const Uint32 = { [Symbol.hasInstance]: (value) => (
  Number.isInteger(value) && (Object.is(value, 0) || 0 < value) && value <= (2**32)
)}

export const Int64 = { [Symbol.hasInstance]: (value) => (
  Number.isSafeInteger(value) ||
  (typeof value === 'bigint' && (-(2n**63n) <= value && value <= 2n**63n))
)}

export const Uint64 = { [Symbol.hasInstance]: (value) => (
  (Number.isSafeInteger(value) && value > 0) ||
  Object.is(value, 0) ||
  (typeof value === 'bigint' && (0n <= value && value <= 2n**64n))
)}

/**
 * Check any number
 * 
 * JavaScript numbers are all floating points following the IEEE-754 double
 * precision representation. However some edge cases make things annoying if
 * we want to simply check for a valid number.
 * 
 * Those edge case are : NaN and ±Infinity
 * 
 * The `typeof` operator will not filter out those values
 * and the `instanceof` operator does not handle numbers:
 * 
 * ```js
 * console.log(42 instanceof Number) // false
 * console.log(42.1 instanceof Number) // false
 * 
 * console.log(typeof NaN === 'number') // true
 * console.log(typeof Infinity === 'number') // true
 * console.log(typeof Number.POSITIVE_INFINITY === 'number') // true
 * console.log(typeof Number.NEGATIVE_INFINITY === 'number') // true
 * ```
 * 
 * The Double pseudo-type is here to solve those issues:
 * ```js
 * console.log(42 instanceof Double) // true
 * console.log(42.1 instanceof Double) // true
 * 
 * console.log(NaN instanceof Double) // false
 * console.log(Infinity instanceof Double) // false
 * console.log(Number.POSITIVE_INFINITY instanceof Double) // false
 * console.log(Number.NEGATIVE_INFINITY instanceof Double) // false
 * ```
 */
export const Double = { [Symbol.hasInstance]: (value) => (
  typeof value === 'number' && -Number.MAX_VALUE <= value && value <= Number.MAX_VALUE
)}

// DATA STRUCTURES ------------------------------------------------------------
/**
 * Check if an Object is a null prototype object.
 * 
 * We formally define a Dictionary to be an Object create with `Object.create(null)`
 * which ensure that our object only carry own properties and will never be tempered
 * through its prototype.
 */
export const Dictionary = { [Symbol.hasInstance]: (value) => (
  Object.getPrototypeOf(value ?? {}) === null
)}

/**
 * Check if an Object provide the Iterator requirements
 * 
 * The TC39 is working on defining an Iterator interface to formalize ECMAScript
 * iterators and iterator helpers. see: https://github.com/tc39/proposal-iterator-helpers
 * Once this interface will be available we will discontinue this pseudo type.
 * In the meantime we provide a defensive alternative.
 */
export const Iterator = globalThis.Iterator ?? { [Symbol.hasInstance]: (value) => (
  typeof value?.next === 'function'
)}

/**
 * Check if an object implement the iterable protocol
 */
export const Iterable = { [Symbol.hasInstance]: (value) => (
  typeof value?.[Symbol.iterator]?.()?.next === 'function'
)}

// BOOLEAN VALUES -------------------------------------------------------------
export const Falsy = { [Symbol.hasInstance]: (value) => Boolean(value) === false }
export const Truthy = { [Symbol.hasInstance]: (value) => Boolean(value) === true }

/**
 * Defining emptiness in ECMAScript is somewhat opinionated.
 * 
 * For this pseudo-type Empty we found most convenient to define emptiness as follow :
 *  - All falsy values
 *  - All iterable (including Array, Set, Map, etc.) that won't yield a value
 *  - All Object without any own properties
 * 
 * Note that because there is no safe way to know if an Iterator is fully
 * consumed, Iterator can never be considered Empty, which include
 * iterable Iterators that provide themselves as Iterator.
 */
export const Empty = {
  [Symbol.hasInstance]: (value) => (
    value instanceof Falsy || (
      value instanceof Iterator ? false : 
      value instanceof Iterable ? (value[Symbol.iterator]().next()?.done ?? true) :
      (typeof value === 'object' && Object.keys(value).length === 0)
    )
  )
}