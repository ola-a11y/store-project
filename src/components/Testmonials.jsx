import { TestimonialsData } from '../data/testimonials';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Testmonials() {
  return (
    <div className="pb-36 pt-14" id="reviews">

      <h2 className="text-center text-5xl font-bold text-gray-900 mt-14">
        Reviews
      </h2>

      
      <Swiper
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          568: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        slidesPerView={3}
        loop={true}
      >
        {TestimonialsData.map((Testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white relative p-3 rounded-xl overflow-visible mt-8">
              <img
                src={Testimonial.image}
                alt=""
                className="w-14 absolute top-[-30px] left-1/2 -translate-x-1/2"
              />
              <p className="text-center text-[13px] py-7 border-b-2 border-gray-500">
                {Testimonial.comment}
              </p>
              <h2 className="text-center pt-7">{Testimonial.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}

export default Testmonials;
