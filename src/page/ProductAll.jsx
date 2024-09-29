import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import data from '../data/db.json'

import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  console.log(data);
  const [productList, setProductList] = useState([]);
  const getProducts=async()=>{
    // let url = `http://localhost:5000/products`
    // let response = await fetch(url);
    // let data = await response.json();

    setProductList(data.products.data.section_items);


  }
  useEffect(()=>{
    getProducts();
  },[])
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ // 자동 재생
          delay: 4500, // 지연 시간 (한 슬라이더에 머물르는 시간)
          disableOnInteraction: false, // 마우스 제어 이후 자동 재생을 막을지 말지
        }}
        centerInsufficientSlides={true}
      >
        {productList.map((item,idx)=><SwiperSlide key={idx}><ProductCard item={item} /></SwiperSlide> )}
      </Swiper>    
    </div>
  )
}

export default ProductAll