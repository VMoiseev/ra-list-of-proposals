import React from 'react';
import PropTypes from 'prop-types';

function Listing({ items }) {
  if (!items) {
    return null;
  }

  if (items.state === "removed") {
    return null;
  }

  const maxTitleLength = 50;
  let text = String(items.title);

  if (text.length > maxTitleLength) {
    text = `${text.slice(0, maxTitleLength + 1)}...`;
  }

  let price = "";

  if (items.currency_code === "USD") {
    price = `$ ${items.price}`;
  } else if (items.currency_code === 'EUR') {
    price = `€ ${items.price}`;
  } else {
    price = `${items.price} ${items.currency_code}`;
  }

  const itemsQuantity = items.quantity;
  let quantityClassName = "item-quantity ";
  
  if (itemsQuantity <= 10) {
    quantityClassName += "level-low";
  } else if (itemsQuantity <= 20) {
    quantityClassName += "level-medium";
  } else if (itemsQuantity > 20) {
    quantityClassName += "level-high";
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={items.url}>
          <img src={items.MainImage?.url_570xN} alt={items.title}></img>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{text}</p>
        <p className="item-price">{price}</p>
        <p className={quantityClassName}>{items.quantity} left</p>
      </div>
    </div>
  )
}

Listing.defaultProps = {
  items: []
}

Listing.propTypes = {
  items: PropTypes.object
}

export default Listing;
