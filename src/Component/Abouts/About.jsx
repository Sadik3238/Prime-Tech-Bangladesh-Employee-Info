import React from 'react';
import AboutImage from "../../assets/Images/cafe_about.png"
import AboutJaguar from "../../assets/Images/jaguar.png"
import MarshalImage from "../../assets/Images/marshal_About.png"
import IntelImage from "../../assets/Images/intel_About.png"
import Counter from './Counter';


const About = () => {
    return (
        <div>
            <div className='bg-black'>
                <div className='p-8'>
                    <h1 className='text-center text-[#ff6600] text-2xl'>About Don Sumdany Facilitation & Consultancy</h1>
                    <p className='text-center items-center text-md text-white'>We are one of the leading learning & development companies specializing in soft-skills training, public programs, networking events, study <br />abroad, life skills for teens, and HR services.
                    </p>
                </div>

                <div className='mt-16'>
                    <h1 className='text-center text-white text-2xl'>Training Certifications</h1>
                    <div className='flex items-center justify-center'>
                        <div className='flex justify-between items-center px-24'>
                            <img className='w-[350px] h-[200px]' src={AboutImage} alt="About Image" />
                            <img className='w-[350px] h-[200px]' src={AboutJaguar} alt="Jaguar Image" />
                            <img className='w-[350px] h-[200px]' src={MarshalImage} alt="Marshal Image" />
                            <img className='w-[350px] h-[200px]' src={IntelImage} alt="Intel Image" />
                        </div>
                    </div>
                </div>


                <div className='mt-80 flex justify-evenly text-center '>
                    <Counter
                        target={350}
                        label="Client Base"
                        h3ClassName="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 text-center items-center flex justify-center"
                        pClassName="text-gray-200"
                    />
                    <Counter
                        target={2000}
                        label="Participants Trained"
                        h3ClassName="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 text-center items-center flex justify-center"
                        pClassName="text-gray-200"
                    />
                    <Counter
                        target={8000}
                        label="People Inspired"
                        h3ClassName="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 text-center items-center flex justify-center"
                        pClassName="text-gray-200"
                    />

                </div>
            </div>
        </div>
    );
};

export default About;