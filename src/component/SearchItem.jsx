/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const ProductCard = ({item}) => {
 
  return (
    <div style={{minHeight:"440px"}}>
      <div className={"book-img"} >
        <img width={500} src={item?.download_url} />
      </div>
      <div className={"book-contents"}>
        {item?.author && <div>{item?.author}</div>}
      </div>
    </div>
    
  );
};

export default ProductCard;