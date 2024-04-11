import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom'
import instagram from '../images/policy/instagram.jpeg'
import facebook from '../images/logos/facebook.png'
import linkedin from '../images/policy/linkedin.png'
import yt from '../images/policy/yt.jpg'
import download from '../images/policy/download.jpg'
import twitter from '../images/policy/twitter.png'
import f1 from '../images/slideshow/1.png'
import f2 from '../images/slideshow/2.png'
import f3 from '../images/slideshow/3.png'
import f4 from '../images/slideshow/4.png'
import f5 from '../images/slideshow/5.png'

const PolicyPage = () => {
    


  return (
    <>
        <section className='h-auto w-full bg-primary'>
            <div className='flex'>
                <div className='w-3/4 px-20 py-24'>
                <div className='text-[4rem] font-semibold'>
                        <div className='text-white'>Get Covered, Get Confident</div>
                        <div> <span className='text-secondary'>Your Path to Future <br /> Job</span></div>
                    </div>
                    <div className='text-white mt-7 text-[1.45rem] w-11/12 text-justify'>Welcome to our user-friendly job marketplace, designed to streamline your career search. Explore a diverse range of job opportunities, each tailored to your unique skills and aspirations. Whether you're seeking a position in IT, healthcare, finance, or any other field, we offer a wide selection of job listings. Find peace of mind by comparing company cultures, benefits, and salaries. With our intuitive interface and detailed job descriptions, you can make informed career decisions. Start browsing now and discover the perfect job to propel your career forward.</div>
                    <div className='flex flex-col gap-y-5 mt-10'>
                        <Link to={'/policy-form'} className='rounded-full text-3xl bg-secondary text-white font-semibold w-11/12 hover:bg-secondary h-16 flex justify-center items-center'>Enter your details</Link>                                              
                    </div>
                    <div className='mt-6 flex gap-x-5 justify-center w-11/12'>
                            <div className='flex justify-center items-center'><hr className='w-[11rem] h-[0.2rem] rounded-3xl bg-white opacity-80' /></div>
                            <span className='font-semibold text-white text-[1.15rem]'>OR</span>
                            <div className='flex justify-center items-center'><hr className='w-[11rem] h-[0.2rem] rounded-3xl bg-white opacity-80' /></div>
                    </div>
                    <div className='flex flex-col gap-y-5 mt-7'>
                        <button className='rounded-full text-[2rem] text-[#f89c30] underline font-semibold w-11/12 hover:text-[#ef8711] h-8 flex justify-center items-center'>Browse all Jobs</button>                                              
                    </div>

                </div>
                <div className='1/4 w-[90rem] h-[50rem] py-24 mt-20 flex justify-center'>
                <Swiper
                loop={true}
        mousewheel={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}        
        modules={[Mousewheel, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={f1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={f2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={f3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={f4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={f5} alt="" /></SwiperSlide>       
      </Swiper>
                </div>
            </div>
        </section>

        <section className='h-auto mb-10 w-full bg-white'>
                <div className='flex p-10 gap-x-4'>
                    <div className='w-3/4'>
                        <div className='text-[1.35rem] font-semibold'>BEWARE OF FRAUDULENT OFFERS!</div>
                        <div className='ml-5 mt-4 text-[1.09rem]'><ul className='list-disc'><li>Career Connect is not in any unfair means</li></ul></div>
                        <div className='flex gap-x-5 mt-6 text-[1.19rem]'>
                            <div><button className='w-[21rem] h-[3rem] bg-gray-300'>Career Connect Notice on Spurious calls</button></div>
                            <div><button className='w-[14rem] h-[3rem] bg-gray-300'>Career Connect provides fraud Prevention Tips</button></div>
                            <div><button className='w-[15rem] h-[3rem] bg-gray-300'>Career Connect provides Fraud Awareness Booklet</button></div>
                        </div>
                    </div>
                    <div className='flex flex-col ml-5'>                      
                            <div className='font-semibold text-[1.35rem]'>Follow Us On</div>
                            <div className='flex gap-x-7 mt-5'>
                                <div><img src={facebook} alt="facebook" className='max-w-[2rem]' /></div>
                                <div><img src={twitter} alt="twitter" className='max-w-[2rem] mt-1' /></div>
                                <div><img src={yt} alt="youtube" className='max-w-[2rem]' /></div>
                                <div><img src={instagram} alt="instagram" className='max-w-[2rem]' /></div>
                                <div><img src={linkedin} alt="linkedin" className='max-w-[2rem]' /></div>
                            </div>  
                            <div className='font-bold mt-2 text-[1.45rem]'>Download Job Guide-</div>                  
                            <div className='font-bold text-[1.45rem]'>Customer Portal App</div>
                            <div className='mt-4'><img src={download} alt="download" className='w-[25rem]' /></div>                  
                    </div>
                </div>
                    <div className='flex justify-center items-center mt-5'><hr className='w-11/12 h-[0.2rem] rounded-3xl bg-zinc-600 opacity-30' /></div>
                    <div className='flex flex-col gap-y-4 text-[1.15rem] mt-10 justify-center items-center'>
                        <div>&copy; Career Connect. All Rights Reserved. | JIIT 128 | 12345546 Certified IT Department</div>
                        <div>CIN: xyz | Registered Office Address: Noida sector 128 const first = useContext(second)</div>
                        <div>Email: customercare@careerconnect.co.in | Fax no.: 020 6602678324324 | Tollfree: 1800 209 342432423,</div>
                        <div>Disclaimer: Images used on this website and the models photographed in them are for representative purposes only and are not indicative of anyone's personal thoughts or ideas</div>
                        <div>Website Compatible Browsers: IE11, Firefox, Safari, Opera, Chrome</div>
                    </div>                   
        </section>
    </>
  )
}

export default PolicyPage
