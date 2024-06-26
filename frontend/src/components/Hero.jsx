import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import r1 from '../images/retirement/r1.jpg'
import r2 from '../images/retirement/r2.jpg'
import r3 from '../images/retirement/r3.jpg'
import Carousel from 'react-elastic-carousel'
import Item from './Item'
import data from '../insurance_data/term_data.json'
import unit_data from '../insurance_data/unit_data.json'
import sales_data from '../insurance_data/sales_marketing.json'
import { Link, useNavigate } from 'react-router-dom'
import f1 from '../images/slideshow/1.png'
import f2 from '../images/slideshow/2.png'
import f3 from '../images/slideshow/3.png'
import f4 from '../images/slideshow/4.png'
import f5 from '../images/slideshow/5.png'

const Hero = () => {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const [storeTerm, setStore] = useState(data)
  const [storeUnit, setStoreUnit] = useState(unit_data)
  const [storeSales, setSales] = useState(sales_data)
  
  const navigate = useNavigate()

  const head_arr = ['No Data', 'B1', 'B2', 'B3','B4','B5','B6','B7','B8','B9','B10','B11','B12','B13','B14','B15','B16','B17','B18']

  const term_btn = (idv) => {    
    navigate(`ind-policy-page/${idv}`, {
        state: {
            heading: head_arr[idv]
        }
    })
  }

  const unit_btn = (idv) => {   
    navigate(`ind-policy-page/${idv}`, {
        state: {
            heading: head_arr[idv]
        }
    })
  }

  const retire_btn = (idv) => {  
    navigate(`ind-policy-page/${idv}`, {
        state: {
            heading: head_arr[idv]
        }
    })
  }

  return (
    <>
        <section className='h-[300vh] bg-[#351cd6] formwt'>
            <div className='flex p-32'>
                <div className='w-1/2'>
                    <div className='text-[4rem] font-semibold'>
                        <div className='text-white'>Streamlining Business Flow</div>
                        {/* <div><span className='text-white'>Smart predictions</span> <br /> <span className='text-[#f89c30]'>Your ideal policy</span></div> */}
                    </div>
                    <div className='flex flex-col gap-y-5 mt-10'>
                        <div><Link to={'/new-user-register'} className='rounded-full text-3xl bg-[#f89c30] text-white font-semibold w-[33rem] hover:bg-[#ef8711] h-16 flex justify-center items-center'>New User</Link></div>
                        <div><Link to={'/login-user'} className='rounded-full text-3xl bg-[#f89c30] text-white font-semibold w-[33rem] hover:bg-[#ef8711] h-16 flex justify-center items-center'>Existing User</Link></div>
                    </div>
                </div>
                
                <div className='w-1/2'>
                <Swiper pagination={true} autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }} modules={[Pagination, Autoplay]} loop={true} className="mySwiper">
        <SwiperSlide><div className='h-20rem w-20rem'><img src={f1} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='h-20rem w-20rem'><img src={f2} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='h-20rem w-20rem'><img src={f3} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='h-20rem w-20rem'><img src={f5} alt="" /></div></SwiperSlide>     
      </Swiper>  
                </div>              
            </div>

            {/* Product */}

           <div className='flex justify-center'>
            <section className='rounded-[3.5rem] bg-white h-[230vh] w-11/12'>
                <div className='flex justify-center flex-col items-center'>

                {/* Head */}

                    <div className='font-semibold text-[3rem] mt-20'>
                        <span className='text-[#0072BC]'>CareerConnect</span> <span className='text-[#f89c30]'>Unlock Your Dream Career</span>
                    </div>

                {/* Term Insurance Plans */}

                <div className='mt-10 flex flex-col justify-center items-center'>
                    <div className='text-[2rem] font-semibold text-[#0072BC]'>Information Technology (IT)</div>
                    <div className='text-[1.45rem] mt-4'>Posted Jobs</div>
                    <div className='h-[50vh] w-[100rem] mt-[5rem]'>
                        <Carousel breakPoints={breakPoints} pagination={false}>
                        {storeTerm.map((v, i) => {
                            return (
                                <>
                                    <Item>
                                    <div>
                                        <div className='border-solid ouline-2 border-black'><img src={require(`../images/term/${v.img}.jpg`)} alt="term_1"  className='w-[30rem] h-[16rem] rounded-lg'/></div>
                                        <div className='flex flex-col justify-center items-center font-bold mt-4 text-[1.25rem]'>
                                            <div className='text-[#0062a8] text-[1.5rem]'></div>
                                            <div className='text-[#0062a8]'>{v.desc}</div>
                                            <div className='mt-6'><button className='text-white bg-[#f89c30] px-5 py-2.5 flex justify-center items-center rounded-full font-semibold button_slide slide_right' id={v.id} onClick={(e) => term_btn(e.target.id)}>VIEW MORE</button></div>
                                        </div>
                                    </div> 
                                    </Item>
                                </>
                            )
                        })}                                                                        
                            
                        </Carousel>
                    </div>
                </div>

                {/* Unit Linked Insurance Plans */}

                <div className='mt-10 flex flex-col justify-center items-center'>
                    <div className='text-[2rem] font-semibold text-[#0072BC]'>Finance</div>
                    <div className='text-[1.45rem] w-11/12 mt-4 text-center'>Posted Jobs</div>
                    <div className='h-[50vh] w-[100rem] mt-[5rem]'>
                        <Carousel breakPoints={breakPoints} pagination={false}>
                        {storeUnit.map((v, i) => {
                            return (
                                <>
                                    <Item>
                                    <div>
                                        <div><img src={require(`../images/unit/${v.img}.jpg`)} alt="term_1"  className='w-[30rem] h-[16rem] rounded-lg'/></div>
                                        <div className='flex flex-col justify-center items-center font-bold mt-4 text-[1.25rem]'>
                                            <div className='text-[#0062a8] text-[1.5rem]'></div>
                                            <div className='text-[#0062a8]'>{v.desc}</div>
                                            <div className='mt-6'><button className='text-white bg-[#f89c30] px-5 py-2.5 flex justify-center items-center rounded-full font-semibold button_slide slide_right' id={v.id} onClick={(e) => unit_btn(e.target.id)}>VIEW MORE</button></div>
                                        </div>
                                    </div> 
                                    </Item>
                                </>
                            )
                        })}                                                                        
                            
                        </Carousel>
                    </div>
                </div>

                <div className='mt-10 flex flex-col justify-center items-center'>
                    <div className='text-[2rem] font-semibold text-[#0072BC]'>Sales and Marketing</div>
                    <div className='text-[1.45rem] w-11/12 mt-4 text-center'>Posted Jobs</div>
                    <div className='h-[50vh] w-[100rem] mt-[5rem]'>
                        <Carousel breakPoints={breakPoints} pagination={false}>
                        {storeSales.map((v, i) => {
                            return (
                                <>
                                    <Item>
                                    <div>
                                        <div><img src={require(`../images/sales/${v.img}`)} alt="term_1"  className='w-[30rem] h-[16rem] rounded-lg'/></div>
                                        <div className='flex flex-col justify-center items-center font-bold mt-4 text-[1.25rem]'>
                                            <div className='text-[#0062a8] text-[1.5rem]'></div>
                                            <div className='text-[#0062a8]'>{v.desc}</div>
                                            <div className='mt-6'><button className='text-white bg-[#f89c30] px-5 py-2.5 flex justify-center items-center rounded-full font-semibold button_slide slide_right' id={v.id} onClick={(e) => unit_btn(e.target.id)}>VIEW MORE</button></div>
                                        </div>
                                    </div> 
                                    </Item>
                                </>
                            )
                        })}                                                                        
                            
                        </Carousel>
                    </div>
                </div>
                </div>
            </section>
           </div>

        </section>
    </>
  )
}

export default Hero
