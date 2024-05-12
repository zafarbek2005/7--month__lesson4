import React, { useRef, useState } from 'react';
import './Banner.scss'
import gull from './img/gull.svg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';




const Banner = () => {

  return (
   <>

    
   
    <Swiper
        pagination={{
          type: 'fraction',
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper conteiner"
      >
        <SwiperSlide>
                <div className="banner conteiner">
                    <div className="banner__txt">
                        <p id='well'>Welcome to GreenShop</p>
                        <h1>Let’s Make A <br />
            Better  <mark id='mark'>Planet</mark> </h1>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use <br /> our plants to create an unique Urban Jungle. Order your favorite plants!</p>
            <button>SHOP NOW</button>
                    </div>  
                <div className='gull'>
                    <img src= {gull} style={{width:"500px"}} alt="" />
                </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://w.forfun.com/fetch/ca/cab2da13c3558cb280dc72320f2294c8.jpeg" 
            alt="malibu"
         style={{width:'100%',height:"550px", objectFit:"cover"}} />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://avatars.mds.yandex.net/get-vertis-journal/4212087/23C0228_002_0.jpg_1688023500706/orig" 
            alt="malibu"
         style={{width:'100%',height:"550px", objectFit:"cover"}} />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://mosautoshina.ru/i/auto/chevrolet_camaro_2015.jpg" 
            alt="malibu"
         style={{width:'100%',height:"550px", objectFit:"cover"}} />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://images.drive.ru/i/0/5e6f88f8ec05c4f24f000014.jpeg" 
            alt="malibu"
         style={{width:'100%',height:"550px", objectFit:"cover"}} />    
        </SwiperSlide>
    
      </Swiper>


   </>
  )
}

export default Banner