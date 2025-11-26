import ImageBefore from '../assets/before.png'; 
import ImageAfter from '../assets/after.png'; 
import ReactCompareImage from 'react-compare-image';
function Virtual() {
    return (
    
        <div className="flex flex-col md:flex-row items-center justify-evenly mt-[100px] px-4 gap-10">
        {/* Text & image section */}
        <div className="max-w-[400px] text-center md:text-left">
          <h2 className="text-3xl uppercase font-bold text-gray-800 leading-relaxed">
            Virtual Try-On
          </h2>
          <p className="text-3xl uppercase leading-relaxed">
            Never Buy the Wrong Shade Again!
          </p>
          <h2 className="text-3xl uppercase font-bold text-gray-800 leading-relaxed">
            Try Now!
          </h2>
        </div>
      
        {/* Image Comparison section */}
        <div className="relative max-w-[500px] rounded-2xl overflow-hidden w-full shadow-lg">
          <ReactCompareImage
            leftImage={ImageBefore}
            rightImage={ImageAfter}
            sliderLineColor="#fff"
          />
        </div>
      </div>
    )
  }
  
  export default Virtual;
  
