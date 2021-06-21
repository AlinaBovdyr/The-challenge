export function error(state = null, {type, error}) {
  switch (type) {
    case 'ITEMS_FETCH_DATA_ERROR':
      return error;

    default:
      return state;
  }
}