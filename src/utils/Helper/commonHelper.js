import _ from 'lodash';

export function arraytoCommaSeperatedString(array) {
  return array.join(', ').replace(/,(?!.*,)/gmi, ' and ');
}

// Adding item on item array.
export function addToArray(item, arr, idDelegateString) {
  let found = false;
  if (!_.isArray(arr)) return [item];
  let newArray = arr.map(a => {
    const isMatch = (a[idDelegateString] === item[idDelegateString]);
    if (isMatch) {
      found = true;
      return item;
    }
    return a;
  });
  if (!found) {
    newArray = [...newArray, item];
  }
  return newArray;
}
