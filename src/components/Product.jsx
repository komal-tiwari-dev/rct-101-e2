import React from "react";
import {Stack,Image,Text,Tag,TagLabel,Heading,Box} from "@chakra-ui/react"
const Product = ({pdata}) => {
  const ProductList=pdata.map((ele)=>{
    return (
          <Stack data-cy="product">
            <Image
              className="pimg"
              data-cy="product-image"
              src={ele.imageSrc}
            />
            <Text data-cy="product-category">{ele.category}</Text>
            <Tag>
              <TagLabel data-cy="product-gender">{ele.gender}</TagLabel>
            </Tag>
            <Heading data-cy="product-title">{ele.title}</Heading>
            <Box data-cy="product-price">
              {ele.price}
              {"/unit"}
            </Box>
          </Stack>
    );
  })
  return <div>{ProductList}</div>
};

export default Product;
