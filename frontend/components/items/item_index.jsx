import React from 'react';
import ItemIndexItem from './item_index_item';
import ItemDetailContainer from './item_detail_container';
import { Link, Route } from 'react-router-dom';

class ItemIndex extends React.Component {
  render () {
    return (
      <div className='items'>
        <h3>Items</h3>
        <ul className="item-images">
          {this.props.items.map(item =>
            <Link key={item.id} to={`/pokemon/${item.pokemon_id}/items/${item.id}`}>
              <ItemIndexItem item={item}/>
            </Link>
          )}
        </ul>
        <Route path='/pokemon/:id/items/:itemId' component={ItemDetailContainer} />
      </div>
    );
  }
}

export default ItemIndex;
