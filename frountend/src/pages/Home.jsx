import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline'
  import Landing from '../components/Landing';
import { Link } from 'react-router-dom';

export default function SustainabilityLandingPage() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');
  
useEffect(() => {
  const quotes = [
    "The greatest threat to our planet is the belief that someone else will save it.",
    "We don't inherit the Earth from our ancestors, we borrow it from our children.",
    "Nature provides a free lunch, but only if we control our appetites.",
    "There is no Planet B. We must preserve what we have.",
    "Sustainability is no longer about doing less harm. It's about doing more good."
  ];
  <Landing/>


}, [])


  const quotes = [
    "The greatest threat to our planet is the belief that someone else will save it.",
    "We don't inherit the Earth from our ancestors, we borrow it from our children.",
    "Nature provides a free lunch, but only if we control our appetites.",
    "There is no Planet B. We must preserve what we have.",
    "Sustainability is no longer about doing less harm. It's about doing more good."
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Start fade out
      setFadeState('fade-out');
      
      // After fade out completes, change quote and fade in
      setTimeout(() => {
        setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setFadeState('fade-in');
      }, 750); // Half of transition time
      
    }, 3000); // 3 second intervals

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen  from-green-50 to-green-100 flex flex-col">
      
      <main className="flex-1 flex items-center justify-between px-4 md:px-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-6">
            Creating a Sustainable Future Together
          </h1>
          
          <div className="relative h-32 flex items-center justify-center mb-8">
            <p 
              className={`text-xl md:text-2xl text-green-700 italic transition-opacity duration-1500 absolute ${fadeState === 'fade-in' ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                transitionDuration: '0.75s' 
              }}
            >
              "{quotes[quoteIndex]}"
            </p>
          </div>
          
          <p className="text-lg text-green-600 mb-8">
            Join our mission to protect our planet and create a sustainable world for generations to come.
          </p>
          <div className='flex justify-around w-full'>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300">
          <Link to="/calc">Whats Your Foot Prints</Link>
            
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300">
          <Link to="/ecoscore">Bios Score</Link>
            
          </button>

          </div>
        </div>
        
        <div className='hidden md:block'>
          
    <main className='w-[40rem] h-[40rem]'>
      <Spline
    scene="https://prod.spline.design/bh7I0tMaJzuc-TTH/scene.splinecode" 
      />
    </main>
        </div>
      </main>
      
      <footer className="bg-green-800 text-green-100 py-6 px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 EcoSphere. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-green-300">Privacy Policy</a>
            <a href="#" className="hover:text-green-300">Terms of Service</a>
            <a href="#" className="hover:text-green-300">Contact Us</a>
          </div>
        </div>
        <div>
        
        </div>
      </footer>
    </div>
    
  );
}