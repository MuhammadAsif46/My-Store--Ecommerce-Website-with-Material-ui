import BarsApp from "../components/bars/BarsApp";
import ProductCard from "../components/cards/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";
import BasicModal from "../components/modal/BasicModal";
import { useSearchParams } from "react-router-dom";


function Home(){

    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false);
    const [detail, setDetail] = useState({});
    let [searchParams, setSearchParams] = useSearchParams();
    
    useEffect(()=>{
      const category = searchParams.get("category");
      if(!category || category === "all"){
         axios('https://fakestoreapi.com/products')
         .then((res)=>setProducts(res.data))
         .catch((err)=>console.log(err))
      }
    },[searchParams]);

    useEffect(()=>{
      const category = searchParams.get("category");
      if(category && category !== "all"){
         axios(`https://fakestoreapi.com/products/category/${category}`)
         .then((res)=>setProducts(res.data))
         .catch((err)=>console.log(err))
      }
    },[searchParams])

    const viewDetails = (id)=>{
      axios(`https://fakestoreapi.com/products/${id}`)
      .then((res)=>{
         setDetail(res.data)
         setOpen(true) })
      .catch((err)=>console.log(err))
    }

    console.log("products", products);

 return (
    <div style={{padding: 20}}>
      <BarsApp />
      <BasicModal detail={detail} open={open} handleClose={()=>setOpen(false)}/>
      <div style={{
         display: 'flex',
         flexWrap:'wrap',
         justifyContent:'space-around'
      }}>
         {products.map((v, i) =>{
            return <ProductCard viewDetails={viewDetails} key={i} products={v}/>
         })}
      </div>
    </div>
 )
}

export default Home;