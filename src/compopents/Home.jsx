import resumePdf from './pdf/Shahed_Akash recume.pdf'
import hero from './data/hero.json'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js' /* install typed.js */

const Home = () => {
    const typedRef = useRef(null);
    useEffect(() => {
        const options = {
            strings: ['Welcome to my profile', 'My name is Shahed Akash', 'I am Frontend Developer (REACT)'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        }

        const typed = new Typed(typedRef.current, options)

        return () => {
            typed.destroy()
        }
    }, [])

    return (
        <>
            <div className="max-w-[90%] mx-auto h-[90vh] flex justify-between items-center space-x-8" id='home'>
                {/* Left */}
                <div className='w-[45%] p-10 space-y-4 text-center border-[2px] border-yellow-300 rounded-lg' style={{ boxShadow: '5px 5px 10px 10px rgba(101, 175, 10, 0.5)' }}
                    data-aos='fade-up-right'
                    data-aos-duration='1000'>
                    <h1 ref={typedRef} className='text-2xl font-bold mb-4'></h1>
                    <a href={resumePdf} download="Resume.pdf" className="btn btn-warning btn-outline">Download Resume</a>
                </div>
                {/* Right */}
                <div className='flex justify-center items-center w-[40%] p-8 rounded-full'
                    data-aos='fade-up-left'
                    data-aos-duration='1000'>
                    <div>
                        <img src={hero.imgSrc} className='h-[90%] w-[70%] bg-cover bg-black rounded-full border-8 animate-superman' alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;