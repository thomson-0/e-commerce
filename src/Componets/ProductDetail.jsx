import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CardSlice';
import Nav from "./Nav";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductDetail() {
  const { id } = useParams();
  const [detail, setdetail] = useState({});
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title:detail.title, image:detail.image, price:detail.price, quantity: 1 }));
    toast.success(`${detail.title} added to cart`, { position: "top-left" , },);
  };

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setdetail(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getProductDetails();
  }, [id]);

  return (
    <div className="">
      <Nav/>
      <ToastContainer />
      <section className="pt-8 pb-4 lg:py-12 h-screen">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-1 justify-center items-center mb-4 lg:mb-0">
              <img
                src={detail.image}
                className="max-w-[200px] lg:max-w-sm"
                alt=""
              />
            </div>
            <div className="flex-1 text-center lg:text-left mx-4 lg:mx-10">
              <h1 className="text-2xl lg:text-4xl font-medium mb-2 max-w-xl mx-auto lg:mx-0">
                {detail.title}
              </h1>
              <div className="text-xl text-red-400 font-medium mb-6">
                <p>${detail.price}</p>
                <p className="text-black text-lg mt-2">{detail.description}</p>
              </div>
              <button className="bg-black px-6 lg:px-8 text-white py-3 lg:py-4" 
                onClick={() => handleAddToCart() }>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;
