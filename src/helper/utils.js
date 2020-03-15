// Check if the this is an array or not.
// RETURN TYPE: Boolean
export const isIterableArray = array => Array.isArray(array) && !!array.length;

//===============================
// Store
//===============================
export const getItemFromStore = (key, defaultValue, store = localStorage) =>
  JSON.parse(store.getItem(key)) || defaultValue;
export const setItemToStore = (key, payload, store = localStorage) =>
  store.setItem(key, JSON.stringify(payload));
export const getStoreSpace = (store = localStorage) =>
  parseFloat(
    (
      escape(encodeURIComponent(JSON.stringify(store))).length /
      (1024 * 1024)
    ).toFixed(2)
  );

//===============================
// String
//===============================
export const camelCase2spaces = str =>
  str.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());
