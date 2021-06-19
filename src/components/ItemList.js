import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../operations/items';
import itemSelectors from '../selectors/items';
import Item from './Item';
import List from './List'

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('http://5af1eee530f9490014ead8c4.mockapi.io/items');
    }

    render() {
        const { items, isLoadingItems, isError } = this.props;

        return (
            <div>
                {isLoadingItems && <h1>Loading...</h1>}
                {isError && alert(isError)}
                <List items={items} />
            </div>
        );
    }
}

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    fetchData: PropTypes.func.isRequired,
    isLoadingItems: PropTypes.bool,
    isError: PropTypes.string,
};

const mapStateToProps = state => ({
    items: itemSelectors.getItems(state),
    isLoadingItems: itemSelectors.getIsLoading(state),
    isError: itemSelectors.getIsError(state),
});

const mapDispatchToProps = (dispatch) => ({
    fetchData: (url) => dispatch(itemsFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
