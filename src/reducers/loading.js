export function isLoading(state = false, {type}) {
  switch (type) {
    case 'ITEMS_FETCH_DATA_REQUEST':
      return true
    
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return false
    
    case 'ITEMS_FETCH_DATA_ERROR':
      return false

    default:
      return state;
  }
}