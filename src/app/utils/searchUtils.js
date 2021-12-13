export const parseSearchInput = (e, key) => {
  if (!e.target.value) {
    return ''
  }
  return e.target.value?.length ? `${key}=` + e.target.value.replaceAll(' ', '%20') : ''
}