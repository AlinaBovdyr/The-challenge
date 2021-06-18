import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';
import Item from './Item';

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('http://5af1eee530f9490014ead8c4.mockapi.io/items');
    }

    renderItemList(parentList, list) {
        return parentList.map(el => this.renderItems(list, el))
    }

    renderItems(list, item) {
        let childrenItems = [];
        let index = item.id;

        list.forEach(listItem => {
            if (listItem.parent_id === index) {
                childrenItems.push(listItem)
            }
        })

        return childrenItems.length > 0
            ? (<Item
                key={item.id}
                label={item.label}
                children={this.renderItemList(childrenItems, list)}
            />) : (<Item
                key={item.id}
                label={item.label}
            />)
    }

    render() {
        const { firstList, childrenItems } = this.props;
        return (
            <ul>
                {this.renderItemList(firstList, childrenItems)}
            </ul>
                    
        );
    }
}

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};

const getFirstList = (allItems) => {
    return allItems.filter(({parent_id}) => parent_id === 0)
}

const getChildrenItems = (allItems) => {
    return allItems.filter(({parent_id}) => parent_id !== 0)
}

const mapStateToProps = ({items}) => ({
    firstList: getFirstList(items),
    childrenItems: getChildrenItems(items)
});

const mapDispatchToProps = (dispatch) => ({
    fetchData: (url) => dispatch(itemsFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
