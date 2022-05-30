import React from "react";
import Pagination from "./Pagination"
import Product from './Product'
import AddProduct from './AddProduct'
import ax from "axios"
import {
  Flex,Grid
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";


const Products = () => {
  const [prodData,setprodData]=useState([])
  const [page,setPage]=useState(1)
  const [total,settotal]=useState(0)
  const[limit,setLimit]=useState(3)
  useEffect(()=>{
    ax.get(`http://localhost:8080/products/?_page=${page}&_limit=${limit}`)
    .then((r) => {
        setprodData(r.data);
        console.log(prodData);
        settotal(Number(r.headers["x-total-count"]))
      }
    );
  },[page, limit])
  

  return (
    <>
      <div style={{ width: "90%" }}>
        <Flex flexDirection="column">
          <AddProduct />
          <Grid templateColumns="repeat(3, 1fr)">
            <Product pdata={prodData} />
          </Grid>
          <Pagination page={page} setpage={setPage} limit={limit} setLimit={setLimit} total={total}/>
        </Flex>
      </div>
    </>
  );
};

export default Products;
