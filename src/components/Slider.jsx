import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { SliderProducts } from '../data/proudects';
import { useCart } from '../context/CartContext';

function Slider() {
  const { addToCart } = useCart();
  return (
    <div className="w-full md:max-w-[1400px] mx-auto relative overflow-hidden">
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
        loop={true}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {SliderProducts.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-between bg-white max-w-[430px] h-48 rounded-xl p-4 relative overflow-hidden">
              <div>
                <h3 className="text-2xl font-medium text-gray-800">{product.name}</h3>
                <p className="text-[11px] pb-7">{product.detail}</p>
                <span className="text-4xl font-bold text-gray-800">
                  {product.price}$
                </span>
                <br />
                <button className="text-[10px] mt-4 border border-gray-800 flex items-center justify-center p-1 px-2 rounded-xl" 
                onClick={() => addToCart(product)}>
                  Shop Now
                </button>
              </div>

             
              <div className="absolute right-6 -rotate-45 top-0">
                <img src={product.img} alt={product.name} className="w-28" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
     <div className="swiper-button-prev absolute top-1/2 left-0 -translate-x-48 !text-2xl transform -translate-y-1/2 cursor-pointer z-10"></div>
     <div className="swiper-button-next absolute top-1/2 right-0 translate-x-48 !text-2xl transform -translate-y-1/2 cursor-pointer z-10"></div>


     </div>
  );
}

export default Slider;
