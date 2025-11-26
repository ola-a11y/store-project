import Hero from '../components/Hero';
import Slider from '../components/Slider';
import Virtual from '../components/Virtual';
import Product from '../components/Proudect';
import Testmonials from '../components/Testmonials';

const Home = () => {
  return (  
    <>
      <div className="p-6"> 
        <Hero />
        <Slider />
        <Virtual />
        <Product />
        <Testmonials />
      </div>
    </>
  );
};

export default Home;