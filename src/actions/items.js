const itemsFetchDataSuccess = (items) => ({
  type: 'ITEMS_FETCH_DATA_SUCCESS',
  items,
})

const itemsFetchDataError = (error) => ({
  type: 'ITEMS_FETCH_DATA_ERROR',
  error,
})

const itemsFetchDataRequest = () => ({
  type: 'ITEMS_FETCH_DATA_REQUEST',
})

const actions = { itemsFetchDataSuccess, itemsFetchDataError, itemsFetchDataRequest }

export default actions;
