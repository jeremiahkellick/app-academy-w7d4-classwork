import React from 'react';

class ItemIndexItem extends React.Component {
  render () {
    return (
      <li>
        <img src = {this.props.item.image_url} />
      </li>
    );
  }
}

export default ItemIndexItem;
