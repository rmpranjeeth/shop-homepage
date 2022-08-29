import React, {useState} from "react";
import Header from "../../src/components/header/Header";
import Navbar from "../../src/components/navbar/Navbar";
import PropertyList from "../components/propertyList/PropertyList";
import Cart from "../components/cart/cart";
import "./home.css";

const Home = () => {
  const datas=[
    {
        _id : 1,
        name : 'Special Item 1',
        price : 20,
        rating : Array(5).fill(4),
        isInCart : false,
    },
    {
        _id : 2,
        name : 'Special Item 2',
        price : 50,
        rating : Array(5).fill(4),
        isInCart : false,
    },
    {
        _id : 3,
        name : 'Special Item 3',
        price : 18,
        rating : Array(5).fill(4),
        isInCart : false,
    },
    {
        _id : 4,
        name : 'Special Item 4',
        price : 58,
        rating : Array(5).fill(4),
        isInCart : false,
    },
    {
        _id : 5,
        name : 'Special Item 5',
        price : 34,
        rating : Array(5).fill(4),
        isInCart : false,
    },
    {
        _id : 6,
        name : 'Special Item 6',
        price : 28,
        rating : Array(5).fill(3),
        isInCart : false,
    },
    {
        _id : 7,
        name : 'Special Item 7',
        price : 15,
        rating : Array(5).fill(5),
        isInCart : false,
    },
    {
        _id : 8,
        name : 'Special Item 8',
        price : 18,
        rating : Array(5).fill(2),
        isInCart : false,
    }
]
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(true);
  const [data, setData] = useState(datas);
 
  // const [star,setStar] = useState(0);
  // const [hover,setHover]= useState(undefined);
  

  const handleClick = (item) => {
     if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]); 
    let obj= item ? (item.isInCart=true) : (data);
    setData([...data]);
   // console.log(data) ;
  };
  

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
    
  };
  return (
    <div>
      <Navbar setShow={setShow} size={cart.length} />
      <Header/>
      {show ? (
        <PropertyList handleClick={handleClick} data={data} setData={setData} />
      ) : (
        <Cart cart={cart} setCart={setCart} data={data} setData={setData} handleChange={handleChange} />
      )}
  
    </div>
  );
};

export default Home;

