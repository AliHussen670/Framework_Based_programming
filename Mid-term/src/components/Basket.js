import React from 'react';
export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.Harga, 0);
  const totalPrice = itemsPrice ;
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <h3>Product Name</h3>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.ID} className="row">
            <div className="col-1">{item.productName}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
             {item.qty} x IDR {item.Harga.toFixed(2)} 
             
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="column">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>IDR {totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert("You have to pay IDR " + totalPrice)}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
