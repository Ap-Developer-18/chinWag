'use client';
import React, { useState, useRef } from 'react';
import PrimaryHeading from '../custom-ui/PrimaryHeading';
import { ACCORDION_DATA } from '@/utils/Helper';

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const getHeight = (index: number) => {
        if (contentRefs.current[index]) {
            return contentRefs.current[index]?.scrollHeight + 'px';
        }
        return '0px';        
    };     
    return (    
        <div className='z-[1] relative py-16 lg:py-24'>     
            <div className="container my-2.5 lg:mb-11 pb-0.5">
                <PrimaryHeading text="FAQ’S" className="mx-auto text-center text-off-green" />
                <div className="sm:mt-12 mt-7">
                    {ACCORDION_DATA.map((item, index) => (
                        <div data-aos="flip-up" key={index}>
                            <div className="overflow-hidden flex mx-auto max-w-[793px] mt-2.5 justify-center relative duration-300 ease-linear" >
                                <div className="accordion w-full">
                                    <div
                                        role="button"
                                        className="duration-300 ease-linear rounded border-light-gray bg-white border accordion-header relative z-[1] flex items-center justify-between shadow-4xl gap-1.5 cursor-pointer sm:py-4 pt-3 pb-2 px-3 sm:px-5"
                                        onClick={() => handleToggle(index)}
                                        aria-expanded={openIndex === index}
                                    >
                                        <h3 className="font-normal text-sm sm:text-base max-w-[249px] sm:max-w-full text-black opacity-80">
                                            {item.title}
                                        </h3>
                                        <div className={`${openIndex === index ? 'w-1.5' : 'w-2.5'} h-2.5 relative overflow-hidden`}>
                                            <span className='flex w-full h-[2.4px] sm:h-[3px] bg-dark-gray font-bold absolute left-0 top-1/2 -translate-y-1/2'></span>
                                            <span className={`flex w-[2.7px] sm:w-[3px] h-full bg-dark-gray font-bold absolute left-1/2 top-0 -translate-x-1/2 duration-300 ease-linear ${openIndex === index ? 'rotate-90 opacity-0' : ''}`}></span>
                                        </div>
                                    </div>
                                    <div
                                        ref={(el: HTMLDivElement | null) => {
                                            contentRefs.current[index] = el;
                                        }}
                                        className={`accordion-content max-h-0 overflow-hidden duration-300 ease-linear ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                                        style={{
                                            maxHeight: openIndex === index ? getHeight(index) : '0px',
                                        }}
                                    >
                                        <div className="flex items-start gap-3 pt-2.5 pl-3 sm:pl-5 pb-2.5 w-full">
                                            <p className="text-black opacity-80 text-sm sm:text-base font-light max-w-[748px]">
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Faq;