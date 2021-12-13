export const parseSearchInput = (string) => {
  if (typeof string !== 'string') {
    console.log('Unexpected data type');
    return false;
  }

  return string.length ? string.replaceAll(' ', '%20') : ''
}