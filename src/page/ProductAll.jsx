import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import data from '../data/db.json'

import ProductCard from '../component/ProductCard';
import SearchItem from '../component/SearchItem';

const ProductAll = () => {
  const productList = data?.products?.data?.section_items;
  const [searchList, setSearchList] = useState([]);

  useEffect(()=>{
    fetch("https://picsum.photos/v2/list?page=1&limit=10", null).then((Response) => Response.json()).then((data) => {
      setSearchList(data);
    });
  },[]);

  return (
    <>
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
      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ // 자동 재생
            delay: 3000, // 지연 시간 (한 슬라이더에 머물르는 시간)
            disableOnInteraction: false, // 마우스 제어 이후 자동 재생을 막을지 말지
          }}
          centerInsufficientSlides={true}
        >
          {searchList.map((item,idx)=><SwiperSlide key={idx}><SearchItem item={item} /></SwiperSlide> )}
          </Swiper>  
      </div>
    </>
  )
}

export default ProductAll;