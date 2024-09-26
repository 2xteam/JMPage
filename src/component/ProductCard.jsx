/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const ProductCard = (props) => {
  const item = props.item.contents;
  return (
    <div style={{backgroundColor: item?.bg_color}}>
      <img width={300} src={item?.main_image_url} />
      {item?.book?.adults_only && <div>Adult Only</div>}
      {item?.title && <div>{item?.title}</div>}
      {item?.hooking_sentence && <div>{item?.hooking_sentence}</div>}
      {item?.new === true && <div>신제품</div>}
    </div>
  );
};

export default ProductCard;