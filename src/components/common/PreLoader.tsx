"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const PreLoader: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(true);
    const [hide, setHide] = useState<boolean>(false);
    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        const timer = setTimeout(() => {
            setHide(true);
        }, 1300);
        const cleanupTimer = setTimeout(() => {
            setVisible(false);
            document.body.classList.remove('overflow-hidden');
        }, 2000);
        return () => {
            clearTimeout(timer);
            clearTimeout(cleanupTimer);
            document.body.classList.remove('overflow-hidden');
        };
    }, []);
    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-[150] flex items-center justify-center">
            <div className={`min-h-screen w-1/2 bg-off-gray z-[100] fixed top-0 left-0 transition-transform duration-500 ${hide ? '-translate-x-full' : 'translate-x-0'}`}>
            </div>
            <div className={`relative z-[200] animate-bounce flex flex-col sm:flex-row gap-10 items-center justify-center ${hide ? 'opacity-0' : 'opacity-100'}`}>
                <div className='sm:max-w-[206px] items-center justify-end min-h-[113px] sm:min-h-[199px] h-full max-w-[108px] relative w-full flex mx-auto flex-col'>
                    <Image
                        src="/assets/images/webp/chin-logo.webp"
                        alt='logo'
                        width={2006}
                        height={200}
                        className='w-full pointer-events-none absolute top-0 max-w-[81px] sm:max-w-[155px] animate-spin'
                        priority
                    />
                    <p className='sm:text-2xl text-sm font-medium tracking-widest relative text-medium-green text-nowrap'>PERSONAL PORTFOLIO <span className='absolute -top-0.5 -right-2.5 text-xs'>®</span></p>
                </div>
            </div>
            <div className={`min-h-screen w-1/2 bg-off-gray z-[100] fixed top-0 right-0 transition-transform duration-500 ${hide ? 'translate-x-full' : 'translate-x-0'}`}>
            </div>
        </div>
    );
}

export default PreLoader;