import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from "../../assets/home/slide1.jpg"
import slide2 from "../../assets/home/slide2.jpg"
import slide3 from "../../assets/home/slide3.jpg"
import slide4 from "../../assets/home/slide4.jpg"
import slide5 from "../../assets/home/slide5.jpg"
import SectionTitle from '../../components/SectionTitle';
import cover from '../../assets/home/chef-service.jpg'

const Category = () => {
    return (
        <>
            <SectionTitle heading='ORDER ONLINE' subHeading='From 11:00am to 10:00pm' />
            <Swiper
                slidesPerView={1}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper my-12"
            >
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center p-0 m-0'>
                        <img src={slide1} alt="" className='w-full object-cover' />
                        <h3 className='cinzelFont uppercase text-2xl -mt-32 mb-12 bg-black w-full text-center bg-opacity-65 text-white py-3'>Salads</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center p-0 m-0'>
                        <img src={slide2} alt="" className='w-full object-cover' />
                        <h3 className='cinzelFont uppercase text-2xl -mt-32 mb-12 bg-black w-full text-center bg-opacity-65 text-white py-3'>Pizza</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center p-0 m-0'>
                        <img src={slide3} alt="" className='w-full object-cover' />
                        <h3 className='cinzelFont uppercase text-2xl -mt-32 mb-12 bg-black w-full text-center bg-opacity-65 text-white py-3'>Soups</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center p-0 m-0'>
                        <img src={slide4} alt="" className='w-full object-cover' />
                        <h3 className='cinzelFont uppercase text-2xl -mt-32 mb-12 bg-black w-full text-center bg-opacity-65 text-white py-3'>desserts</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center p-0 m-0'>
                        <img src={slide5} alt="" className='w-full object-cover' />
                        <h3 className='cinzelFont uppercase text-2xl -mt-32 mb-12 bg-black w-full text-center bg-opacity-65 text-white py-3'>Salad</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div style={{
                backgroundImage: `url('${cover}')`
            }} className='p-4 md:p-20'>
                <div className='bg-white py-4 px-4 md:py-20 md:px-52 text-center'>
                    <h1 className='text-4xl cinzelFont'>Bistro Boss</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </>
    );
};

export default Category;