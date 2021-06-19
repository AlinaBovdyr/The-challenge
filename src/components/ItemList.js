import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../operations/items';
import itemSelectors from '../selectors/items';
import Item from './Item';

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('http://5af1eee530f9490014ead8c4.mockapi.io/items');
    }

    renderItemList(parentList, list) {
        return parentList.map(el => this.findNestedItems(list, el))
    }

    findNestedItems(list, item) {
        let nestedList = [];
        let index = item.id;

        list.forEach(listItem => {
            if (listItem.parent_id === index) {
                nestedList.push(listItem)
            }
        })

        return nestedList.length > 0
            ? (<Item
                key={item.id}
                label={item.label}
                children={this.renderItemList(nestedList, list)}
            />) : (<Item
                key={item.id}
                label={item.label}
            />)
    }

    render() {
        const { firstList, childrenItems, isLoadingItems, isError } = this.props;
        return (
            <ul>
                {isLoadingItems && <h1>Loading...</h1>}
                {isError && alert(isError)}
                {this.renderItemList(firstList, childrenItems)}
            </ul>   
        );
    }
}

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    firstList: PropTypes.array.isRequired,
    childrenItems: PropTypes.array,
    isLoadingItems: PropTypes.bool,
    isError: PropTypes.string,
};

const mapStateToProps = state => ({
    firstList: itemSelectors.getFirstList(state),
    childrenItems: itemSelectors.getChildrenItems(state),
    isLoadingItems: itemSelectors.getIsLoading(state),
    isError: itemSelectors.getIsError(state),
});

const mapDispatchToProps = (dispatch) => ({
    fetchData: (url) => dispatch(itemsFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
