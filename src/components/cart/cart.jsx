import { useState, useEffect } from "react";
import "./cart.css";

const Cart = ({ cart, setCart, data, setData, handleChange }) => {
  const [price, setPrice] = useState(0);
  // const [openModal, setOpenModal] = useState(false);
  

  const handleRemove = (item,name,id) => {
    const arr = cart.filter((item) => item.name !== name);
    setCart(arr);
   
    let obj= item ? (item.isInCart=false) : (data);
    setData([...data]);
    handlePrice();
  };

 
 
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {(ans +=  parseInt(item.price)); 
    });
    
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item, index) => (
        <div className="cart_box" key={index}>
          <div className="cart_img">
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            <p>{item.name}</p>
          </div>
          <div>
           
          </div>
          <div>
            
            <span>Rs.{item.price}</span>
            <button onClick={() => handleRemove(item,item.name)}>Remove</button>
            
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>     
      </div>
      
      
    </article>

  );
};

export default Cart;
