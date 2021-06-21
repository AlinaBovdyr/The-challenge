const getItems = state => state.items;

const getIsLoading = state => state.isLoading;

const getIsError = state => state.error;

export default {
  getItems,
  getIsLoading,
  getIsError,
}