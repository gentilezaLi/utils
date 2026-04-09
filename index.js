/**
 * Remove duplicate items while keeping original order.
 * @param {Array} list
 * @returns {Array}
 */
export function unique(list) {
  return Array.from(new Set(list));
}

/**
 * Split an array into chunks.
 * @param {Array} list
 * @param {number} size
 * @returns {Array<Array>}
 */
export function chunk(list, size) {
  if (!Array.isArray(list)) return [];
  if (!Number.isInteger(size) || size <= 0) return [list];

  const result = [];
  for (let i = 0; i < list.length; i += size) {
    result.push(list.slice(i, i + size));
  }
  return result;
}

/**
 * Sleep for a given number of milliseconds.
 * @param {number} ms
 * @returns {Promise<void>}
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, Math.max(0, ms || 0)));
}

/**
 * Deep clone plain JSON-compatible data.
 * @param {*} value
 * @returns {*}
 */
export function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

/**
 * Pick specific keys from an object.
 * @param {Object} obj
 * @param {string[]} keys
 * @returns {Object}
 */
export function pick(obj, keys) {
  if (!obj || typeof obj !== "object") return {};
  if (!Array.isArray(keys)) return {};

  return keys.reduce((acc, key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

/**
 * Omit specific keys from an object.
 * @param {Object} obj
 * @param {string[]} keys
 * @returns {Object}
 */
export function omit(obj, keys) {
  if (!obj || typeof obj !== "object") return {};
  if (!Array.isArray(keys)) return { ...obj };

  const keySet = new Set(keys);
  return Object.keys(obj).reduce((acc, key) => {
    if (!keySet.has(key)) acc[key] = obj[key];
    return acc;
  }, {});
}

/**
 * Ensure a number stays inside [min, max].
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(value, min, max) {
  if (![value, min, max].every((n) => typeof n === "number")) return NaN;
  return Math.min(Math.max(value, min), max);
}

export function add(a, b) {
  return a + b;
}

const utils = {
  unique,
  chunk,
  sleep,
  deepClone,
  pick,
  omit,
  clamp,
  add,
};

export default utils;
