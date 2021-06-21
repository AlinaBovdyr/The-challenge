import actions from '../actions/items';

export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(actions.itemsFetchDataRequest());

    fetch(url)
      .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }

        return response;
        })
      .then((response) => response.json())
      .then((items) => dispatch(actions.itemsFetchDataSuccess(items)))
      .catch((error) => dispatch(actions.itemsFetchDataError(error.message)));
  };
}