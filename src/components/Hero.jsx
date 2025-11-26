import HeroImg from '../assets/hero.png';

function Hero() {
  return ( 
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden font-sans">

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-white opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#3E6D34] opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 py-12 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a3c24] leading-tight">
              Organic Beauty <br />
              <span className="text-[#1a3c24]">Essentials</span>
            </h1>

            <p className="text-[#4a674f] text-lg md:text-xl max-w-lg leading-relaxed">
              Secally say has suitat aevent natural sinpere, sinicore, and mann ornm ottlinem rojoces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="px-8 py-3.5 bg-[#3E6D34] text-white font-semibold rounded-lg shadow-lg hover:bg-[#2f5227] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                SHOP COLLECTION
              </button>
              
              <button className="px-8 py-3.5 bg-transparent border-2 border-[#3E6D34] text-[#3E6D34] font-semibold rounded-lg hover:bg-[#3E6D34] hover:text-white transition-all duration-300">
                LEARN MORE
              </button>
            </div>

            <div className="flex items-center gap-12 pt-4 border-t border-[#3E6D34]/20 w-full lg:w-auto justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-[#1a3c24]">1.5m</h3>
                <p className="text-[#4a674f] text-sm font-medium mt-1">Monthly Traffic</p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-[#1a3c24]">100k</h3>
                <p className="text-[#4a674f] text-sm font-medium mt-1">Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/5]">
              <img 
                src={HeroImg} 
                alt="Organic Beauty" 
                className="w-full h-full object-cover rounded-[40px] shadow-2xl z-10 relative"
              />

              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#3E6D34]/30 rounded-[40px] -z-0 hidden lg:block"></div>
            </div>
          </div>

        </div>
      </div>
    </section>


  );
}

export default Hero;




