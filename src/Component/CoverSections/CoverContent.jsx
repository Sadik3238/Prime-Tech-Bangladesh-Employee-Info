import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import slideImage_1 from "../../assets/Images/slide_image_1.jpg"
import slideImage_2 from "../../assets/Images/slide_image_2.jpg"
import slideImage_3 from "../../assets/Images/slide_image_3.jpg"
import slideImage_4 from "../../assets/Images/slide_image_4.jpg"
import slideImage_5 from "../../assets/Images/slide_image_5.jpg"
import slideImage_6 from "../../assets/Images/slide_image_6.jpg"

const CoverContent = ({ isMenuOpen, menuItems }) => {
    return (
        <div className='absolute top-1/2 left-[300px] -translate-x-1/2 -translate-y-1/2 px-24'>
            {isMenuOpen ? (
                <div className='px-24 ml-48'>
                    <ul className="text-white text-2xl font-bold">
                        {menuItems.map((item, index) => (
                            <li key={index} className="mb-2 hover:text-yellow-400 cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className='px-24 ml-48'>
                    <h1 className='text-3xl text-yellow-400 font-bold'>
                        INSPIRING PEOPLE TO TAKE <br /> A LEAD IN THEIR LIVES
                    </h1>


                    <div className='mt-8'>
                        <h2 className='text-2xl text-white font-bold'>UPCOMING EVENTS</h2>
                        <Carousel
                            showArrows={true}
                            infiniteLoop={true}
                            autoPlay={true}
                            interval={2000}
                            showThumbs={false}
                            showStatus={false}
                            className="w-[400px] h-[300px]"
                        >
                            <div>
                                <img src={slideImage_1} alt="Slide 1" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <img src={slideImage_2} alt="Slide 2" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <img src={slideImage_3} alt="Slide 3" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <img src={slideImage_4} alt="Slide 4" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <img src={slideImage_5} alt="Slide 5" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <img src={slideImage_6} alt="Slide 6" className="w-full h-full object-cover" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CoverContent;

