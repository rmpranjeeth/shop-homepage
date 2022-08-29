import React, {useState} from "react";
import {FaStar} from "react-icons/fa";
import "./propertyList.css";

const colors ={
    orange : "#FFBA5A",
    grey : "#a9a9a9"
}

const PropertyList = ({data,setData,handleClick}) => {
     const stars = Array(5).fill(0);
    const [star,setStar] = useState(0);
    const [hover,setHover]= useState(undefined);

const handleClk = (item, value) =>{

    setStar(value);
    let obj= item ? (item.rating=value) : (data);
    setData([...data]);


};

// const handleHover = value =>{
//     setHover(value);
// };
// const handleMouseLeave = () =>{
//     setHover(undefined);
// }



    
  return (
    <>
    <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                    data.map((item, index)=>{
                        return (
                            <div className="col my-4" key={index}>
                        <div className="card" >
                        <img className="card-img-top p-2" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                        <div className="card-body m-0 pt-2">
                            <div className="text-center">
                                <h5 className="fw-bolder" >{item.name}</h5>
                                <div className="d-flex justify-content-center small text-warning mb-2">
                                     {stars.map((index)=>{
                                            return(
                                                <FaStar 
                                                key={index}
                                                 style={{cursor: "pointer"}}
                                                color={hover|| star > index? colors.orange : colors.grey}
                                                onClick={() =>handleClk(item,index +1)}
                                                // onMouseOver={()=>handleHover(index+1)}
                                                // onMouseLeave={handleMouseLeave}
                                                />
                                            )
                                        })}
                                       
                                </div>
                                <span className="text-center">Rs.{item.price}</span>
                            </div>
                        </div>
                        <div className="card-footer p-3 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><button className="btn btn-outline-dark mt-auto" href="#" onClick={() => handleClick(item)} disabled={item.isInCart ? true : false}> {!item.isInCart ? "Add to cart" : "Incart"}</button></div>
                        </div>
                    </div>
                </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
    <footer className="py-5 bg-dark">
    <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
    </footer>
    </>
  );
};

export default PropertyList;
