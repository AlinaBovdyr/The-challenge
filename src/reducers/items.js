export function items(state = [], {type, items}) {
  switch (type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return items;

    default:
      return state;
  }
}
