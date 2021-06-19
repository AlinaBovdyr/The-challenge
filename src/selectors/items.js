const getIsLoading = state => state.isLoading;

const getIsError = state => state.error;

const getFirstList = state => state.items.filter(({parent_id}) => parent_id === 0)

const getChildrenItems = state => state.items.filter(({ parent_id }) => parent_id !== 0)

export default {
    getIsLoading,
    getIsError,
    getFirstList,
    getChildrenItems
}